# InfoJano — current project handoff for next ChatGPT chat
Updated: 2026-11-16
Repository: https://github.com/barsulkhan/InfoJano
Default branch: `main`
Live site: https://infojano.com/

## Read this first in the next chat
This is the current source of truth for the user's ongoing InfoJano Search Console / AdSense / privacy work. Reopen this file and the linked tracker/reports before doing anything. Continue in Bengali, use simple explanations, and give one small user-side instruction at a time. Do not make the user repeat screenshots or facts already recorded here.

### Operating boundaries — important
- The user has authorized continuing investigation and marking all unfinished items.
- The user has **not** authorized merging PRs, deploying production, submitting Google Request Indexing, or clicking Search Console Validate Fix. Earlier explicit release/indexing holds remain in force.
- No production code changes directly on `main`; any proposed source fix must be isolated in a draft PR and tested first.
- No DNS, Cloudflare Worker, secrets, AdSense account settings, legal identity, or publisher settings changes without specific authorization.
- Do not submit the 18 held SEO pages: 15 Number-to-Words Pro pages + 3 Countdown pages.
- AdSense site review has already been submitted; do not resubmit.
- Never claim Google changed its selected canonical, indexed a page, or accepted a validation until fresh Search Console evidence proves it.
- Keep “source inspected”, “draft PR prepared”, “merged”, “deployed”, and “live verified” as separate states.

## Latest work completed in this chat

### 0. Resume audit — 2026-11-16 17:01 +05:30
- Read the handoff and linked consolidated Search Console tracker, 404 investigation, Master Research Plan and historical pause note before resuming.
- New read-only audit: [2026-11-16-1700-resume-audit-height-and-pr-refresh.md](2026-11-16-1700-resume-audit-height-and-pr-refresh.md).
- `/Height`: current `image-to-pdf.html` contains `/Height` in two PDF serializers: legacy `makePdf()` (no call site found) and active `buildPdf()` (called by the Create PDF handler). Both are PDF dictionary keys, not links. PDF Blob/object URL is created only after user action; AndroidBridge uses a separate save path. Google extraction remains a hypothesis. A narrow runtime-assembled key mitigation is possible but NOT prepared; actual browser/PDF regression test is required first.
- Fresh PR metadata: #237/#238/#239 remain open Draft, unmerged and undeployed, but GitHub currently reports `mergeable=true` / `mergeable_state=clean` for all. Compare against current main: #237 105 ahead / 18 behind; #238 3 ahead / 12 behind; #239 6 ahead / 11 behind. #237 and #238 both edit `id-card-print-studio.html`; #239 has no overlap with #238. Their current check-runs succeeded, but are not complete PWA/SEO/runtime QA.
- Documentation-only update saved; no code, PR branch, merge, deploy, indexing or validation action.
### 1. Five duplicate-canonical pages — screenshots all received
All five Search Console screenshots show:
- Status: “Duplicate, Google chose different canonical than user”.
- Crawl allowed: Yes; Page fetch: Successful; Indexing allowed: Yes.
- User-declared canonical is the corresponding `https://infojano.com/<page>.html`.
- Google-selected canonical is the corresponding `https://barsulkhan.github.io/InfoJano/<page>.html`.

The five URLs:
1. `resize-image-by-percentage.html`
2. `passport-id-photo-resizer.html`
3. `social-media-image-resizer.html`
4. `resize-image-to-pixels.html`
5. `print-document-image-resizer.html`

The user's screenshots directly prove the selected-canonical mismatch at the time shown. They do not prove why Google chose the legacy URL or that source changes will force a change.

### 2. Search Console overview — current counts shown by user
- Alternate page with proper canonical: 27
- Not found (404): 13
- Page with redirect: 2
- Duplicate, Google chose different canonical: 5
- Crawled — currently not indexed: 2
- All five category validations showed “Not Started” in the screenshot.

### 3. 13 404 examples — full list recorded
Malformed historical metadata-style URLs (9):
- `/remove-gst-from-total-calculator.html$3<script type=`
- `/increase-decrease-by-percentage-calculator.html$3<meta property=`
- `/number-to-words.html$3<meta property=`
- `/repeated-percentage-change-calculator.html$3<meta property=`
- `/what-percent-calculator.html$3<meta property=`
- `/profit-loss-percentage-calculator.html$3<meta property=`
- `/successive-percentage-change-calculator.html$3<meta property=`
- `/percentage-of-percentage-calculator.html$3<meta property=`
- `/percentage-difference-calculator.html$3<meta property=`
Other paths (4):
- `/Height`
- `/(100)^ ` (exact trailing symbol/space uncertain from photo)
- `/(100)`
- `/InfoJano/`

The nine malformed URLs correspond to a historical malformed canonical/Open Graph metadata defect fixed in merged PR #91 (merge commit `3d5c6d26a8119231e634f270c070bf8eff7997b0`). Current sampled main source has clean canonical and og:url values for all nine. A Pages workflow on main succeeded. However, live HTTP and fresh Google recrawl are not verified. Do not add redirects for these nine based only on stale Search Console examples.

### 4. /Height — detailed screenshot and source trace
User supplied URL Inspection screenshot for `https://infojano.com/Height`:
- Page indexing: Not found (404)
- Referring page: `https://infojano.com/image-to-pdf.html`
- No referring sitemap detected
- Last crawl: Nov 14, 2026, 12:31:37 PM (timezone not shown)
- Googlebot smartphone; crawl allowed Yes; fetch failed 404
- Canonical fields N/A

Current main source `image-to-pdf.html` (blob SHA `291ce0c589bf7a172d2027e1126906b081cc405e`) was inspected in detail:
- The only literal `/Height` in that file is a PDF dictionary key emitted by the JavaScript PDF generator: `/Type /XObject /Subtype /Image /Width ... /Height ... /ColorSpace /DeviceRGB ...`.
- It is not an HTML href or route.
- Static HTML contains a hidden download anchor. JavaScript builds the PDF in-browser as a Blob and only after the user selects images and clicks Create PDF does it create a temporary object URL and unhide the download anchor. No pre-existing public PDF file/link is present in source.
- Android WebView saves through `window.AndroidBridge.savePdf` and keeps the anchor hidden.
- Plausible hypothesis: Google extracted the PDF dictionary token from the JavaScript source and interpreted `/Height` as a URL path. This is **not proven**.
- Do not redirect /Height to the tool or homepage without a semantically valid destination.
- A possible draft-only mitigation could avoid exposing the slash-prefixed literal token in embedded JavaScript while preserving the generated PDF's correct PDF dictionary. This requires a browser/runtime regression test that generates a PDF and verifies the PDF image dictionary still contains `/Height`. Do not modify production directly.
- Live HTTP/browser verification is unavailable in this environment; do not claim live response checked.

### 5. Other three unusual 404 paths
- `/InfoJano/`: current main contains multiple legacy project-root references in root PWA/helper files and some pages; PR #237 attempts broad host-aware remediation. Need detailed Search Console URL Inspection screenshot showing Referring page and last crawl.
- `/(100)`: no exact current href/link found. Need exact URL Inspection screenshot and Referring page.
- `/(100)^ `: exact URL encoding/trailing character uncertain. Need URL Inspection screenshot showing exact URL and Referring page.
Only ask the user for the next evidence that is actually needed; do not ask for another aggregate 404 list.

## Open draft PRs — all unmerged and not deployed
- PR #237: https://github.com/barsulkhan/InfoJano/pull/237
  - Legacy `/InfoJano/` path/PWA/service-worker remediation.
  - 89 files changed; 471 additions / 469 deletions.
  - Branch `fix/search-console-404-paths-2026-11-16`, head `49977ee5867daddbbaf92e94bff080158f318304`.
  - Fresh GitHub metadata: Draft/open/unmerged, `mergeable=true` / `clean`; current compare is diverged, 105 ahead and 18 behind main. Broad 89-file patch. Must inspect/reconcile carefully; dedicated service-worker/PWA runtime tests needed.
- PR #238: https://github.com/barsulkhan/InfoJano/pull/238
  - ID Card Print Studio og:url correction and 27 URL audit note.
  - Branch `fix/gsc-alternate-canonical-metadata-2026-11-16`, head `70243b2d2a77cb2d9564acb74964f6210f847c2a`.
  - Fresh GitHub metadata: Draft/open/unmerged, `mergeable=true` / `clean`; current compare diverged (3 ahead, 12 behind). Overlaps `id-card-print-studio.html` with PR #237.
- PR #239: https://github.com/barsulkhan/InfoJano/pull/239
  - Topic-specific sidebar text refinements on five image-resizer guides.
  - Branch `improve/gsc-image-resizer-canonical-signals-2026-11-16`, head `03cb5f0b2f9a7c4b27bda966b2bf35dcbb72b81d`.
  - Fresh GitHub metadata: Draft/open/unmerged, `mergeable=true` / `clean`; current compare diverged (6 ahead, 11 behind).
- All three associated CI runs were “Privacy Policy QA”; passing those is not full SEO, redirect, PWA, service-worker or runtime validation.
- PR #237 and #238 both touch `id-card-print-studio.html`; reconcile overlap deliberately.
- No PR merge, deployment, Request Indexing or Validate Fix has occurred.

## Other Search Console categories still pending
- 27 Alternate page with proper canonical: source audit completed. 12 percentage query variants, 6 image-resizer query variants, 5 QR-maker query variants, plus `savings.html`, `id-card-print-studio.html`, `url-toolkit.html`, `index.html`. Most query variants correctly canonicalize to clean tool URLs. ID Card og:url correction is prepared in PR #238, not live. Live checks remain outstanding.
- 2 Page with redirect: screenshot showed `http://infojano.com/` and `http://www.infojano.com/`. Source canonical/sitemap use HTTPS non-www, but live redirect status/destination/chain are unverified.
- 2 Crawled — currently not indexed: exact URLs not yet received. Ask for the example URL table screenshot when appropriate, then inspect each.
- Do not click Validate Fix until source/live causes are resolved and release gates are explicitly authorized.

## AdSense / Privacy / compliance context
- AdSense review already submitted; status previously “Getting your site ready to show ads”. Do not resubmit.
- PR #210 and #211 are merged; PR #236 was approved and squash merged (`0131c77a0ec8d9efbee53a332f77b54e3813cd6b`).
- Privacy Policy and Contact pages plus homepage links were confirmed live by user screenshot.
- Privacy QA run #43794141231 passed: 115 root HTML pages, 26 policy hrefs, 110 sitemap URLs.
- Homepage CMP callback source exists; live behavior not tested.
- ads.txt body matched expected seller line in user's screenshot; HTTP status/headers/robots/crawler recognition not verified.
- Live CMP/TCF consent/revocation behavior, ads.txt HTTP checks, legal identity/jurisdiction and provider retention facts remain outstanding. Do not invent legal facts.
- Source data flows include GA4, AdSense, YouTube, ipapi.co, ExchangeRate-API, Frankfurter, Wikimedia, Cloudflare Worker + iLoveAPI for optional Word converter, CDNs/fonts, local storage, QR camera only after user action, local image decoding, Android WebView and Windows Electron.
- Android source audit: INTERNET permission only; cleartext disabled; WebView JS/DOM storage, file chooser and AndroidBridge Downloads. No native camera/location/contacts/mic/notification permission. WebView bridge origin allowlist remains a security review item.
- Electron source audit: contextIsolation, sandbox, nodeIntegration disabled; navigation restricted; external links system browser.
- Do not change AdSense settings, DNS, Worker, secrets, native releases or legal disclosures without specific evidence/authorization.

## 18-URL indexing hold — must remain held
Do not submit or request indexing for:
- 15 Number-to-Words Pro SEO pages: `number-to-words-indian.html`, `number-to-words-international.html`, `rupees-in-words.html`, `dollars-in-words.html`, `cheque-amount-in-words.html`, `decimal-number-to-words.html`, `bulk-number-to-words.html`, `words-to-number-converter.html`, `bengali-number-to-words.html`, `hindi-number-to-words.html`, `ordinal-number-converter.html`, `million-billion-converter.html`, `lakh-crore-converter.html`, `number-to-words-uppercase.html`, `number-to-words-for-cheque.html`.
- 3 Countdown pages: `countdown-timer-india.html`, `countdown-timer-bangladesh.html`, `countdown-timer-usa.html`.

## Current source-of-truth reports
1. Consolidated Search Console tracker:
   https://github.com/barsulkhan/InfoJano/blob/main/project-notes/adsense-compliance/2026-11-16-search-console-three-categories-consolidated-status.md
2. 404 screenshot + source investigation:
   https://github.com/barsulkhan/InfoJano/blob/main/project-notes/adsense-compliance/2026-11-16-search-console-404-screenshot-follow-up.md
3. Full AdSense/privacy research plan:
   https://github.com/barsulkhan/InfoJano/blob/main/project-notes/adsense-compliance/MASTER-RESEARCH-PLAN.md
4. Older pause/handoff (historical; this current handoff supersedes it):
   https://github.com/barsulkhan/InfoJano/blob/main/project-notes/adsense-compliance/2026-11-16-new-chat-handoff-and-pause.md

## Suggested next work sequence
1. Prepare and run a focused browser/runtime regression test for the actual Image-to-PDF flow; only then decide whether to create a minimal draft-only mitigation for `/Height`.
2. Obtain /InfoJano/ URL Inspection Referring page screenshot when user is available.
3. Obtain exact URL + Referring page for /(100) and /(100)^.
4. Obtain the two Crawled-not-indexed example URLs.
5. Review and reconcile PR #237–239 branches carefully, including overlap and PWA/service-worker QA.
6. Recheck all release/live/Google evidence before recommending any merge or validation.
7. Ask for separate explicit confirmation before any merge, deployment, Google Request Indexing or Validate Fix.

## Latest action in the preceding chat
- Source-only investigation of `image-to-pdf.html` completed and recorded.
- Documentation updated in main; no code changes, PR edits, merge, deployment, Google indexing or validation action.


## Resume audit record
See [2026-11-16-1700-resume-audit-height-and-pr-refresh.md](2026-11-16-1700-resume-audit-height-and-pr-refresh.md) for the latest source trace and PR comparison details.


### PR #237 static source review — 2026-11-16
- Compared `sw.js`, `install.js`, root `manifest.json`, and representative app manifests between main and PR #237.
- Host-specific ROOT in `install.js` and scope-derived BASE in `sw.js` are internally consistent in the sampled files. All 198 non-empty precache entries (plus the intentional empty root entry) exist in the PR tree; no duplicate non-empty precache entries found.
- Root manifest and three sampled app manifests use relative URLs that resolve correctly from their manifest locations. This is static source evidence only, not a complete 89-file review or browser/device test. Verify both custom domain and GitHub Pages installed PWA before release.
- Detailed record: [2026-11-16-1700-resume-audit-height-and-pr-refresh.md](2026-11-16-1700-resume-audit-height-and-pr-refresh.md).


## Whole-site readiness audit — 2026-11-16
- Research-first whole-site audit started per user's instruction. Initial official Google Search/AdSense requirements and 335-file main-branch inventory recorded in [2026-11-16-whole-site-readiness-audit.md](2026-11-16-whole-site-readiness-audit.md).
- Initial representative source audit confirmed root PWA files still use legacy `/InfoJano/` paths on main (`index.html`, `manifest.json`, `install.js`, `sw.js`); PR #237 already addresses this broadly and must be reconciled/tested, not duplicated.
- `privacy-policy.html` explicitly notes provider/live behavior and CMP revocation control are not fully verified; don't remove caveats or claim compliance without verifying facts.
- Full 335-file per-page audit and coordinated remediation are still pending. No production code changed, no PR merged, no deployment, no Search Console Request Indexing/Validate Fix, and no AdSense review resubmission.


## Expanded whole-site audit update — 2026-11-16
- Static source inspection covered all 117 HTML files in main. 110 sitemap URLs are unique and all map to repository files; `countdown-studio.html` is the one ordinary indexable canonical page absent from sitemap, pending intent/live check.
- `savings.html` has two H1 elements; prepared minimal H1→H2 semantic fix in draft PR #240. Static count 2→1. PR #240 currently reports mergeable=false; investigate before approval.
- `id-card-print-studio.html` main still has og:url on legacy GitHub Pages host while canonical uses infojano.com. PR #238 carries correction; overlaps #237 on this same file, so reconcile deliberately.
- Three Word format alias pages are noindex canonical aliases but their main-branch redirect/helper/manifest paths use legacy /InfoJano/; PR #237 switches them to relative paths.
- Full findings and limitations recorded in [2026-11-16-whole-site-readiness-audit.md](2026-11-16-whole-site-readiness-audit.md).
- No merge/deploy, Google indexing/validation, AdSense resubmission or live account/legal/hosting change. 18 SEO URL indexing hold remains.

- PR #240 branch refreshed on latest main; compare now shows 1 ahead / 0 behind (single `savings.html` change). GitHub mergeability metadata may lag; visual QA still required.
- Audit log added to adsense-compliance README. Latest report update is linked above.

- PR #240 CI run #43861117912 completed successfully. Its only job is `validate`, which validates Privacy Policy HTML5 markup, policy links, sitemap and robots reference. This is not a dedicated heading/accessibility/browser visual test.

## Evening execution update — 2026-11-16

### Consolidated draft work
- PR #243: https://github.com/barsulkhan/InfoJano/pull/243 — open, draft, mergeable, based on current main; 94 files, 2 commits, 0 commits behind. Consolidates the old host-relative path/PWA work, ID Card canonical social/structured-data URL, five image-resizer sidebar clarifications, and Savings Calculator duplicate-H1 correction.
- PR #243 explicitly preserves hero/banner content and styling, page header content/markup, logo artwork, and existing InfoJano brand text. Document Studio's header block was restored byte-for-byte from main after detecting that its header link/logo paths had been included in the older broad branch.
- Savings Calculator: hero H1 unchanged; calculator card title is now H2 with a scoped class preserving its prior 27px font size, margin and color. Static count 2 H1 -> 1.
- All 29 changed root/webmanifest JSON files parse successfully. GitHub Actions run #46 passed; note this workflow only validates Privacy Policy HTML and policy/sitemap/robots links, not PWA runtime.
- Smaller drafts #240, #241 and #242 contain subsets of #243; #237 is the original broad path draft. Do not merge duplicates separately.

### Still blocked / do not guess
- Browser visual QA, live HTTP and PWA install/offline regression remain unverified; do not claim production behavior fixed until tested.
- Search Console /Height issue: PDF serializers contain /Height as a PDF dictionary key; source-only extraction hypothesis is unproven. Do not change serializer without PDF output regression testing.
- countdown-studio.html is self-canonical and indexable in source but absent from sitemap. Live route could not be verified, so do not add it yet.
- Privacy/CMP live injection, regional consent/reject/manage/revoke flows and TCF signals, ads.txt HTTP/crawler state, AdSense vendor/account state, Worker/CORS/log retention, and native app runtime remain owner/live checks.
- Keep all 18 Number-to-Words Pro + Countdown SEO URLs on indexing hold. Do not send Request Indexing or Validate Fix.

### Owner guardrails reaffirmed
- No hero banner, page header, logo or InfoJano brand-name design changes.
- No merge, deploy, Search Console indexing/validation, AdSense resubmission, DNS/Cloudflare/Worker/account/legal/publisher changes without separate explicit approval.
