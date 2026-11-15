import fs from "node:fs";
import path from "node:path";

const sourcePath = path.resolve("privacy-policy.html");
const source = fs.readFileSync(sourcePath, "utf8");
const hrefs = [...source.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)].map(match => match[1]);
const errors = [];

function decode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    errors.push("Invalid URL encoding: " + value);
    return value;
  }
}

function resolveLocalTarget(pathname, currentFile) {
  const clean = decode(pathname);
  let target = path.resolve(path.dirname(currentFile), clean.startsWith("/") ? clean.slice(1) : clean);
  if (!pathname || pathname === "/") target = path.resolve("index.html");
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, "index.html");
  if (!path.extname(target) && fs.existsSync(target + ".html")) target += ".html";
  return target;
}

for (const href of hrefs) {
  if (/^(?:https?:|mailto:|tel:|javascript:|data:|\/\/)/i.test(href)) continue;

  const hashIndex = href.indexOf("#");
  const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const fragment = hashIndex >= 0 ? decode(href.slice(hashIndex + 1).split("?")[0]) : "";
  const pathname = beforeHash.split("?")[0];
  const target = resolveLocalTarget(pathname, sourcePath);

  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
    errors.push(href + " -> missing local target " + path.relative(process.cwd(), target));
    continue;
  }

  if (fragment) {
    const html = fs.readFileSync(target, "utf8");
    const ids = [...html.matchAll(/\bid\s*=\s*(["'])(.*?)\1/gi)].map(match => match[2]);
    const names = [...html.matchAll(/<a\b[^>]*\bname\s*=\s*(["'])(.*?)\1/gi)].map(match => match[2]);
    if (!ids.includes(fragment) && !names.includes(fragment)) {
      errors.push(href + " -> missing fragment #" + fragment + " in " + path.relative(process.cwd(), target));
    }
  }
}

const sitemapPath = path.resolve("sitemap.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(match => match[1].trim());
const requiredSitemapUrls = [
  "https://infojano.com/privacy-policy.html",
  "https://infojano.com/contact.html"
];

if (!sitemap.includes("<urlset") || !sitemap.includes("</urlset>")) {
  errors.push("sitemap.xml is missing the urlset root element");
}
if (sitemapUrls.length === 0) errors.push("sitemap.xml contains no loc entries");
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push("sitemap.xml contains duplicate loc URLs");

for (const url of sitemapUrls) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || parsed.hostname !== "infojano.com") {
      errors.push("Unexpected sitemap URL origin: " + url);
    }
  } catch {
    errors.push("Invalid sitemap URL: " + url);
  }
}

for (const url of requiredSitemapUrls) {
  if (!sitemapUrls.includes(url)) errors.push("sitemap.xml is missing " + url);
}

const robots = fs.readFileSync("robots.txt", "utf8");
if (!/^\s*Sitemap:\s*https:\/\/infojano\.com\/sitemap\.xml\s*$/im.test(robots)) {
  errors.push("robots.txt does not reference the canonical sitemap.xml URL");
}

if (errors.length) {
  console.error("Privacy Policy link / sitemap checks failed:");
  for (const error of errors) console.error(" - " + error);
  process.exit(1);
}

console.log("Checked " + hrefs.length + " policy hrefs and " + sitemapUrls.length + " sitemap URLs; local targets, fragments, required sitemap entries and robots sitemap reference are valid.");
