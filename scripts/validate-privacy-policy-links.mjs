import fs from "node:fs";
import path from "node:path";

const source = fs.readFileSync("privacy-policy.html", "utf8");
const hrefs = [...source.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)].map(m => m[1]);
const errors = [];
for (const href of hrefs) {
  if (/^(?:https?:|mailto:|tel:|javascript:|data:|#)/i.test(href)) continue;
  const clean = decodeURIComponent(href.split(/[?#]/, 1)[0]);
  if (!clean) continue;
  const target = path.resolve(process.cwd(), clean.startsWith("/") ? clean.slice(1) : clean);
  if (!fs.existsSync(target)) errors.push(`${href} -> missing ${path.relative(process.cwd(), target)}`);
}
if (errors.length) {
  console.error("Broken local links in privacy-policy.html:");
  for (const error of errors) console.error(" - " + error);
  process.exit(1);
}
console.log(`Checked ${hrefs.length} hrefs; all local targets exist.`);
