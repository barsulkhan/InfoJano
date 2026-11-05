/**
 * InfoJano Word Converter — CloudConvert high-fidelity DOCX → PDF proxy.
 * API key is stored only as the Cloudflare Worker secret CLOUDCONVERT_API_KEY.
 */
const ALLOWED_ORIGIN = "https://barsulkhan.github.io";
const API = "https://api.cloudconvert.com/v2";
const MAX_FILE_BYTES = 30 * 1024 * 1024;

function cors(origin) {
  const allowed = origin === ALLOWED_ORIGIN;
  return {
    "Access-Control-Allow-Origin": allowed ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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
function validOrigin(request) {
  return request.headers.get("Origin") === ALLOWED_ORIGIN;
}
async function cc(env, path, init = {}) {
  const response = await fetch(API + path, {
    ...init,
    headers: {
      "Authorization": "Bearer " + env.CLOUDCONVERT_API_KEY,
      "Content-Type": "application/json",
      ...(init.headers || {})
    }
  });
  const body = await response.text();
  let data;
  try { data = body ? JSON.parse(body) : {}; } catch { data = { message: body }; }
  if (!response.ok) {
    const message = data?.message || data?.errors?.[0]?.message || "CloudConvert request failed.";
    throw new Error(message);
  }
  return data;
}
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      if (!validOrigin(request)) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (!validOrigin(request)) return json({ error: "Origin not allowed." }, 403, origin);
    if (!env.CLOUDCONVERT_API_KEY) return json({ error: "Converter service is not configured yet." }, 503, origin);

    const url = new URL(request.url);
    try {
      if (request.method === "POST" && url.pathname === "/start") {
        const input = await request.json();
        const filename = String(input?.filename || "document.docx").replace(/[^a-zA-Z0-9._ -]/g, "_").slice(0, 120);
        const size = Number(input?.size || 0);
        if (!filename.toLowerCase().endsWith(".docx")) return json({ error: "Only DOCX files are supported." }, 400, origin);
        if (!Number.isFinite(size) || size <= 0 || size > MAX_FILE_BYTES) return json({ error: "File must be smaller than 30 MB." }, 400, origin);

        const created = await cc(env, "/jobs", {
          method: "POST",
          body: JSON.stringify({
            tasks: {
              "upload-docx": { operation: "import/upload" },
              "convert-pdf": { operation: "convert", input: "upload-docx", input_format: "docx", output_format: "pdf", engine: "office" },
              "export-pdf": { operation: "export/url", input: "convert-pdf" }
            }
          })
        });
        const job = created?.data;
        const uploadTask = job?.tasks?.find(task => task.name === "upload-docx");
        const form = uploadTask?.result?.form;
        if (!job?.id || !form?.url || !form?.parameters) throw new Error("CloudConvert did not return the upload form.");
        return json({
          jobId: job.id,
          upload: { url: form.url, parameters: form.parameters }
        }, 200, origin);
      }

      if (request.method === "GET" && url.pathname === "/result") {
        const jobId = url.searchParams.get("jobId") || "";
        if (!/^[0-9a-f-]{30,40}$/i.test(jobId)) return json({ error: "Invalid job ID." }, 400, origin);
        const result = await cc(env, "/jobs/" + encodeURIComponent(jobId));
        const job = result?.data;
        if (job?.status === "error") return json({ error: "CloudConvert could not convert this document." }, 422, origin);
        const exportTask = job?.tasks?.find(task => task.name === "export-pdf");
        if (exportTask?.status !== "finished") return json({ status: "processing" }, 202, origin);
        const file = exportTask?.result?.files?.[0];
        if (!file?.url) throw new Error("The converted PDF is not available.");
        const pdfResponse = await fetch(file.url);
        if (!pdfResponse.ok) throw new Error("Could not retrieve the converted PDF.");
        const bytes = await pdfResponse.arrayBuffer();
        if (bytes.byteLength < 5 || bytes.byteLength > 100 * 1024 * 1024) throw new Error("The converted PDF has an unexpected size.");
        // Best-effort cleanup after the result is safely in memory.
        cc(env, "/jobs/" + encodeURIComponent(jobId), { method: "DELETE" }).catch(() => {});
        return new Response(bytes, {
          status: 200,
          headers: {
            ...cors(origin),
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="InfoJano-High-Fidelity.pdf"',
            "Content-Length": String(bytes.byteLength),
            "Cache-Control": "no-store"
          }
        });
      }
      return json({ error: "Not found." }, 404, origin);
    } catch (error) {
      return json({ error: error?.message || "Conversion service error." }, 502, origin);
    }
  }
};
