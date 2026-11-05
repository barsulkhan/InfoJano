/**
 * InfoJano Word Converter — iLoveAPI Office-to-PDF proxy.
 * API credentials remain in Cloudflare Worker secrets, never in browser code.
 */
const ALLOWED_ORIGIN = "https://barsulkhan.github.io";
const API = "https://api.ilovepdf.com/v1";
const MAX_FILE_BYTES = 30 * 1024 * 1024;

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}
function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...cors(origin), "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}
async function apiRequest(url, token, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("Authorization", "Bearer " + token);
  const response = await fetch(url, { ...init, headers });
  if (!response.ok) {
    const body = await response.text();
    let message = body;
    try { const parsed = JSON.parse(body); message = parsed?.message || parsed?.error || body; } catch {}
    throw new Error("iLoveAPI (" + response.status + "): " + String(message).slice(0, 300));
  }
  return response;
}
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      if (origin !== ALLOWED_ORIGIN) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (origin !== ALLOWED_ORIGIN) return json({ error: "Origin not allowed." }, 403, origin);
    if (request.method !== "POST" || new URL(request.url).pathname !== "/convert") return json({ error: "Not found." }, 404, origin);
    if (!env.ILOVEPDF_PUBLIC_KEY) return json({ error: "iLoveAPI is not configured. Add the ILOVEPDF_PUBLIC_KEY Worker secret." }, 503, origin);
    try {
      const incoming = await request.formData();
      const file = incoming.get("file");
      if (!(file instanceof File)) return json({ error: "Choose a DOCX file first." }, 400, origin);
      const filename = String(file.name || "document.docx").replace(/[^a-zA-Z0-9._ -]/g, "_").slice(0, 120);
      if (!filename.toLowerCase().endsWith(".docx")) return json({ error: "Only DOCX files are supported." }, 400, origin);
      if (!file.size || file.size > MAX_FILE_BYTES) return json({ error: "File must be smaller than 30 MB." }, 400, origin);

      const authResponse = await fetch(API + "/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_key: env.ILOVEPDF_PUBLIC_KEY })
      });
      const authBody = await authResponse.json().catch(() => ({}));
      if (!authResponse.ok || !authBody.token) throw new Error("iLoveAPI authentication failed. Check the project public key and API account settings.");
      const token = authBody.token;

      const startResponse = await apiRequest(API + "/start/officepdf/in", token, { method: "GET" });
      const start = await startResponse.json();
      if (!start.server || !/^[a-z0-9.-]+\.ilovepdf\.com$/i.test(start.server) || !start.task) throw new Error("iLoveAPI returned an invalid processing server or task ID.");

      const uploadForm = new FormData();
      uploadForm.set("task", start.task);
      uploadForm.set("file", file, filename);
      const uploadResponse = await apiRequest("https://" + start.server + "/v1/upload", token, {
        method: "POST",
        body: uploadForm
      });
      const uploaded = await uploadResponse.json();
      if (!uploaded.server_filename) throw new Error("iLoveAPI did not confirm the uploaded file.");

      const processResponse = await apiRequest("https://" + start.server + "/v1/process", token, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: start.task,
          tool: "officepdf",
          files: [{ server_filename: uploaded.server_filename, filename }]
        })
      });
      const processed = await processResponse.json();
      const taskStatus = processed?.status || processed?.task?.status;
      if (!["TaskSuccess", "TaskSuccessWithWarnings"].includes(taskStatus)) {
        throw new Error("iLoveAPI did not confirm a successful conversion" + (taskStatus ? " (" + taskStatus + ")" : "") + ".");
      }

      const downloadResponse = await apiRequest("https://" + start.server + "/v1/download/" + encodeURIComponent(start.task), token);
      const bytes = await downloadResponse.arrayBuffer();
      if (bytes.byteLength < 5 || bytes.byteLength > 100 * 1024 * 1024) throw new Error("The converted PDF has an unexpected size.");
      if (String.fromCharCode(...new Uint8Array(bytes.slice(0, 5))) !== "%PDF-") throw new Error("The conversion service did not return a PDF file.");

      const safeName = filename.replace(/\.docx$/i, "") + "-InfoJano.pdf";
      return new Response(bytes, {
        status: 200,
        headers: {
          ...cors(origin),
          "Content-Type": "application/pdf",
          "Content-Disposition": 'attachment; filename="' + safeName + '"',
          "Content-Length": String(bytes.byteLength),
          "Cache-Control": "no-store"
        }
      });
    } catch (error) {
      return json({ error: error?.message || "Conversion service error." }, 502, origin);
    }
  }
};
