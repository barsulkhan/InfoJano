# 2026-11-16-0019 — Custom-domain path audit and ads.txt HTTP verification

Date: 2026-11-16
Repository: https://github.com/barsulkhan/InfoJano
Production domain under review: https://infojano.com
Status: SOURCE FINDINGS RECORDED; LIVE HTTP RESPONSE UNVERIFIED; NO PRODUCTION CODE CHANGED

## Scope
Read-only continuation after the user authorized autonomous execution and asked that each sequential task be saved in the existing `project-notes/adsense-compliance/` folder.

## Findings — path/base URL audit
The current main-branch source contains a mixed hosting-path model:
- `site-header.js` computes `ROOT` as `/` on the custom domain and `/InfoJano/` on `barsulkhan.github.io`.
- `install.js` still registers `/InfoJano/sw.js` with `/InfoJano/` scope unconditionally, and loads `theme.js` / `related-apps.js` from `/InfoJano/` unconditionally.
- `sw.js` still sets `HOME = "/InfoJano/"`, precaches a long list of `/InfoJano/...` paths, and uses cache name `infojano-v311`.
- Root `index.html` links its manifest at `/InfoJano/manifest.json`.
- `manifest.json` uses `/InfoJano/` for `id`, `start_url`, and `scope`.
- Numerous tool pages still have hardcoded `/InfoJano/` links/scripts/assets. GitHub code search surfaced examples in `extract-pdf-pages.html`, `pdf-to-jpg.html`, `word-converter.html`, `document-studio.html`, `emi.html`, BMI pages and QR pages.
- This is a confirmed source inconsistency, but it does not by itself prove that every such path is broken on the production host. The repository also has a GitHub Pages project-site URL, so a safe fix must preserve both hosting modes or explicitly retire one after checking repository Pages/custom-domain configuration.

## Impact / risk
On `infojano.com`, paths beginning `/InfoJano/` may resolve to a non-existent nested directory instead of the domain root. This can affect navigation, manifest loading, service-worker registration/scope, cached assets, app install/update behavior, and crawler-discovered links. A broad blind replacement could break GitHub Pages project-site hosting; therefore no mass rewrite was made.

## Next implementation sequence
1. Inspect repository Pages configuration, CNAME, deployment workflow, manifest usage, and all path construction patterns.
2. Build a complete inventory of hardcoded `/InfoJano/` references by category (navigation, scripts, styles, images, manifests, SW, canonical/SEO).
3. Decide a dual-host-safe base-path strategy from actual Pages configuration and source evidence.
4. Implement the smallest coherent change on a dedicated branch, preserving both supported origins if both are configured.
5. Validate all local links/assets and SW scope for each host mode; run privacy QA and any relevant build checks.
6. Confirm GitHub Pages workflow result and live custom-domain responses separately. Do not equate merge/CI with live HTTP proof.

## ads.txt / crawler verification
- Existing user screenshot evidence confirms the visible HTTPS body matches the repository seller record.
- Current Google AdSense help says the crawler needs a root-domain reachable file, HTTP 200 (or an acceptable in-scope redirect), robots access, valid formatting, and access over both HTTP and HTTPS. It warns that a 404 response invalidates the file even if a response body appears, and crawl/status reflection may take time. Source: https://support.google.com/adsense/answer/7679060?hl=en
- Search engine retrieval surfaced Google's official documentation but did not provide a direct response header/status for `https://infojano.com/ads.txt` or `http://infojano.com/ads.txt`. Therefore both live status/redirect chains, headers and AdSense dashboard crawler status remain UNVERIFIED.
- `robots.txt` source previously inspected allows crawling generally and does not show an ads.txt-specific block; this is source evidence, not live crawler proof.

## Evidence boundary
- Source files inspected directly from main: `404.html`, `index.html`, `install.js`, `site-header.js`, `sw.js`, `manifest.json`, representative tool pages, privacy QA workflow and validator.
- The 404 homepage CTA already points to `/` and remains `noindex,follow`.
- No code, DNS, Worker, CMP, AdSense settings, PR merge, deployment, Search Console action or indexing request was performed in this task.
- The 18-page indexing hold remains in force.
