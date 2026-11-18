import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const excluded = new Set(["google4a4795e5c7c03eae.html"]);
const pages = fs.readdirSync(root).filter((name) => name.toLowerCase().endsWith(".html") && !excluded.has(name));
const failures = [];

for (const page of pages) {
  const source = fs.readFileSync(path.join(root, page), "utf8");
  if (!/site-header\.js|site-footer\.js/.test(source)) {
    failures.push(`${page}: missing shared header/footer loader`);
  }
}

const header = fs.readFileSync(path.join(root, "site-header.js"), "utf8");
const footer = fs.readFileSync(path.join(root, "site-footer.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

if (!header.includes("site-footer.js")) failures.push("site-header.js: does not load site-footer.js");
for (const label of ["Home", "All Tools", "Privacy Policy", "Contact", "Privacy and cookie settings"]) {
  if (!footer.includes(label)) failures.push(`site-footer.js: missing footer label "${label}"`);
}
for (const required of ["Global Everyday Utility Portal", "Privacy-minded", "Mobile-first", "Português:", "discount-pt-br.html", "percentage-pt-br.html"]) {
  if (!footer.includes(required)) failures.push(`site-footer.js: missing shared footer content "${required}"`);
}
if (!footer.includes("ij-global-footer-intro")) failures.push("site-footer.js: missing shared footer intro container");
if (!footer.includes("showRevocationMessage")) failures.push("site-footer.js: missing Google Privacy & Messaging revocation hook");
if (!footer.includes("CONSENT_API_READY")) failures.push("site-footer.js: missing CONSENT_API_READY callback");
if (footer.includes("a.hidden=true")) failures.push("site-footer.js: privacy-settings link must not be hidden until CMP readiness");
if (!footer.includes("Google privacy settings are still unavailable")) failures.push("site-footer.js: missing visible fallback when Google CMP is unavailable");
if (!footer.includes("callbackQueue.push({'CONSENT_API_READY':openRevocation})")) failures.push("site-footer.js: revocation must be invoked through Google CONSENT_API_READY callbackQueue");
if (!footer.includes("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2908196513377151")) failures.push("site-footer.js: AdSense/Privacy Messaging loader is not installed globally");
if (!header.includes(".ij-social-hero")) failures.push("site-header.js: social QR hero is missing from shared hero styling");
if (!footer.includes("bindPrivacySettings(settings,status)")) failures.push("site-footer.js: privacy settings must be bound on every page, not homepage only");
if (!sw.includes('"/InfoJano/site-footer.js"')) failures.push("sw.js: shared footer script is not precached");
for (const required of ["contact.html", "privacy-policy.html"]) {
  if (!fs.existsSync(path.join(root, required))) failures.push(`missing required public page: ${required}`);
}

if (failures.length) {
  console.error("Global footer validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Global footer source validation passed for ${pages.length} public HTML pages (Google verification file excluded).`);
