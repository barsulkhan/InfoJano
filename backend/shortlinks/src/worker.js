/**
 * InfoJano Short Link API — staging scaffold
 * Deploy only after creating a Cloudflare Worker + D1 binding and setting secrets.
 * Anonymous link creation is intentionally disabled: POST requires ADMIN_API_TOKEN.
 */
const CODE_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CODE_LENGTH = 7;
const MAX_DESTINATION_LENGTH = 2048;
const DEFAULT_ORIGIN = "https://barsulkhan.github.io";

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers },
  });
}
function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGIN || DEFAULT_ORIGIN).split(",").map(v => v.trim());
  if (!origin || allowed.includes(origin)) {
    return {
      "access-control-allow-origin": origin || allowed[0],
      "access-control-allow-methods": "GET,POST,DELETE,OPTIONS",
      "access-control-allow-headers": "Content-Type,Authorization",
      "access-control-max-age": "86400",
      "vary": "Origin",
    };
  }
  return {};
}
function isAuthorized(request, env) {
  const expected = env.ADMIN_API_TOKEN;
  if (!expected) return false;
  const auth = request.headers.get("Authorization") || "";
  return auth === "Bearer " + expected;
}
function ipv4Parts(host) {
  if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return null;
  const parts = host.split(".").map(Number);
  return parts.every(n => n >= 0 && n <= 255) ? parts : [];
}
function isPrivateDestination(url) {
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.$/, "");
  if (host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal")) return true;
  const ip = ipv4Parts(host);
  if (ip) {
    if (ip.length !== 4) return true;
    const [a,b] = ip;
    return a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) ||
      (a === 198 && (b === 18 || b === 19));
  }
  if (host.includes(":")) {
    return host === "::" || host === "::1" || host.startsWith("fc") ||
      host.startsWith("fd") || host.startsWith("fe8") || host.startsWith("fe9") ||
      host.startsWith("fea") || host.startsWith("feb") || host.startsWith("ff") ||
      host.startsWith("::ffff:") || host.startsWith("2001:db8");
  }
  return false;
}
function validateDestination(raw) {
  if (typeof raw !== "string" || !raw.trim()) throw new Error("Enter a destination URL.");
  if (raw.length > MAX_DESTINATION_LENGTH) throw new Error("Destination URL is too long (maximum 2,048 characters).");
  let url;
  try { url = new URL(raw.trim()); } catch { throw new Error("Enter a complete URL including https:// or http://."); }
  if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Only HTTP and HTTPS destinations are allowed.");
  if (!url.hostname || url.username || url.password) throw new Error("Destination URL has an invalid hostname or embedded credentials.");
  if (isPrivateDestination(url)) throw new Error("Private, local and reserved network destinations are not allowed.");
  return url.toString();
}
function randomCode() {
  const bytes = new Uint8Array(CODE_LENGTH);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, b => CODE_ALPHABET[b % CODE_ALPHABET.length]).join("");
}
function getDevice(userAgent = "") {
  if (/tablet|ipad/i.test(userAgent)) return "tablet";
  if (/mobile|android|iphone/i.test(userAgent)) return "mobile";
  return "desktop";
}
function getReferrerDomain(value) {
  if (!value) return "direct";
  try { return new URL(value).hostname.toLowerCase().slice(0, 253) || "unknown"; }
  catch { return "unknown"; }
}
async function createLink(request, env) {
  if (!isAuthorized(request, env)) return json({ error: "Unauthorized. Link creation is restricted during the staging phase." }, 401);
  let body;
  try { body = await request.json(); } catch { return json({ error: "Request body must be valid JSON." }, 400); }
  let destination;
  try { destination = validateDestination(body.url); } catch (e) { return json({ error: e.message }, 400); }
  const alias = typeof body.alias === "string" ? body.alias.trim() : "";
  const code = alias || randomCode();
  if (!/^[A-Za-z0-9_-]{4,32}$/.test(code)) return json({ error: "Alias must be 4–32 characters using letters, numbers, hyphen or underscore." }, 400);
  const expiresAt = body.expires_at ? Number(body.expires_at) : null;
  const now = Math.floor(Date.now() / 1000);
  if (expiresAt !== null && (!Number.isSafeInteger(expiresAt) || expiresAt <= now || expiresAt > now + 31536000)) {
    return json({ error: "Expiry must be a future Unix timestamp within one year." }, 400);
  }
  try {
    await env.DB.prepare(
      "INSERT INTO links (code, destination_url, created_at, expires_at, status) VALUES (?, ?, ?, ?, 'active')"
    ).bind(code, destination, now, expiresAt).run();
    const base = (env.SHORT_BASE_URL || "https://short.example.invalid").replace(/\/$/, "");
    return json({ code, short_url: base + "/" + code, destination_url: destination, expires_at: expiresAt }, 201);
  } catch (e) {
    if (String(e.message || e).toLowerCase().includes("unique")) return json({ error: "That short code is already in use. Choose another alias." }, 409);
    return json({ error: "Could not save this link. Check the database binding and try again." }, 500);
  }
}
async function redirectLink(code, request, env, ctx) {
  if (!/^[A-Za-z0-9_-]{4,32}$/.test(code)) return new Response("Invalid short link.", { status: 404 });
  const row = await env.DB.prepare(
    "SELECT code, destination_url, expires_at, status FROM links WHERE code = ? LIMIT 1"
  ).bind(code).first();
  const now = Math.floor(Date.now() / 1000);
  if (!row || row.status !== "active" || (row.expires_at && row.expires_at <= now)) {
    return new Response("This short link is unavailable or has expired.", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
  }
  const day = new Date().toISOString().slice(0, 10);
  const referrer = getReferrerDomain(request.headers.get("Referer"));
  const device = getDevice(request.headers.get("User-Agent") || "");
  ctx.waitUntil(Promise.all([
    env.DB.prepare("UPDATE links SET clicks_total = clicks_total + 1 WHERE code = ?").bind(code).run(),
    env.DB.prepare(
      "INSERT INTO daily_clicks (code, click_date, referrer_domain, device_type, clicks) VALUES (?, ?, ?, ?, 1) ON CONFLICT(code, click_date, referrer_domain, device_type) DO UPDATE SET clicks = clicks + 1"
    ).bind(code, day, referrer, device).run(),
  ]).catch(() => {}));
  return Response.redirect(row.destination_url, 302);
}
async function getStats(code, request, env) {
  if (!isAuthorized(request, env)) return json({ error: "Unauthorized." }, 401);
  const link = await env.DB.prepare(
    "SELECT code, destination_url, created_at, expires_at, status, clicks_total FROM links WHERE code = ? LIMIT 1"
  ).bind(code).first();
  if (!link) return json({ error: "Short link not found." }, 404);
  const daily = await env.DB.prepare(
    "SELECT click_date, referrer_domain, device_type, clicks FROM daily_clicks WHERE code = ? ORDER BY click_date DESC LIMIT 90"
  ).bind(code).all();
  return json({ link, daily: daily.results || [] });
}
async function disableLink(code, request, env) {
  if (!isAuthorized(request, env)) return json({ error: "Unauthorized." }, 401);
  const result = await env.DB.prepare("UPDATE links SET status = 'disabled' WHERE code = ?").bind(code).run();
  if (!result.meta?.changes) return json({ error: "Short link not found." }, 404);
  return json({ code, status: "disabled" });
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    try {
      if (url.pathname === "/health" && request.method === "GET") return json({ ok: true, service: "InfoJano Short Link API", mode: "staging-scaffold" }, 200, cors);
      if (url.pathname === "/api/links" && request.method === "POST") return createLink(request, env).then(r => withCors(r, cors));
      const match = url.pathname.match(/^\/([A-Za-z0-9_-]{4,32})$/);
      if (match && request.method === "GET") return redirectLink(match[1], request, env, ctx);
      const stats = url.pathname.match(/^\/api\/links\/([A-Za-z0-9_-]{4,32})\/stats$/);
      if (stats && request.method === "GET") return getStats(stats[1], request, env).then(r => withCors(r, cors));
      const disable = url.pathname.match(/^\/api\/links\/([A-Za-z0-9_-]{4,32})$/);
      if (disable && request.method === "DELETE") return disableLink(disable[1], request, env).then(r => withCors(r, cors));
      return json({ error: "Not found." }, 404, cors);
    } catch {
      return json({ error: "Unexpected server error." }, 500, cors);
    }
  },
};
function withCors(response, headers) {
  const merged = new Headers(response.headers);
  for (const [key, value] of Object.entries(headers)) merged.set(key, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: merged });
}
