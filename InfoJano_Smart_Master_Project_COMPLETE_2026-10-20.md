# InfoJano — Smart Master Project Archive (Complete Consolidated Edition)
Version: V7
Updated through: 20 October 2026
Status: ACTIVE — consolidated historical archive; SEO/Sitemap review is next; Aadhaar print-preview issue is on hold.
This is a continuity archive, not a verbatim export of every chat. Git history in the repository is the source of truth for committed code. Do not claim a commit is deployed or tested without evidence.

## 1. Project identity and purpose
- Project/brand: InfoJano
- Repository: https://github.com/barsulkhan/InfoJano
- Live website: https://barsulkhan.github.io/InfoJano/
- Main audience: global-first, mobile-first utility/information portal.
- Hosting: GitHub Pages, chosen to keep costs low.
- User works entirely from Android/mobile, has limited technical experience and budget; guide in Bengali, one clear step at a time, with copyable direct links.
- UX principle: “দেখে বুঝবে, চাপবে, কাজ হয়ে যাবে”.
- Categories include calculators, AI/technology guides, money/finance basics, document/PDF/image tools, education, jobs/careers and daily information.
- Preserve the original 16 working homepage tools and current design. Do not remove or casually rewrite existing tools.
- Do not promise search indexing, rankings, traffic or revenue.
- Track statuses separately: code edited, committed, deployed, user-tested, indexing requested, indexed.
- At end of each meaningful work session, update this master archive. The user has paused work now.

## 2. Core links
- Repository: https://github.com/barsulkhan/InfoJano
- Live homepage: https://barsulkhan.github.io/InfoJano/
- ID Card Studio: https://barsulkhan.github.io/InfoJano/id-card-print-studio.html
- GitHub Actions: https://github.com/barsulkhan/InfoJano/actions
- GitHub Pages deployments: https://github.com/barsulkhan/InfoJano/deployments
- Google Search Console: https://search.google.com/search-console
- Sitemap report: https://search.google.com/search-console/sitemaps?resource_id=https%3A%2F%2Fbarsulkhan.github.io%2FInfoJano%2F
- XML sitemap: https://barsulkhan.github.io/InfoJano/sitemap.xml
- Text sitemap: https://barsulkhan.github.io/InfoJano/sitemap.txt
- robots.txt: https://barsulkhan.github.io/InfoJano/robots.txt

## 3. Project history / checkpoints
- Earliest reported prototype: 2 Oct 2026; initial foundation/launch reported 3 Oct; V2 work reported 4 Oct. Historical dates from previous archive; not independently verified from original artifacts.
- Site V2 was reported live on 4 Oct. Main homepage is index.html. User tested and confirmed the original 16 tools worked.
- Project is installable as an Android PWA/web app; it is not a native APK.
- Photo/AI Studio feature was previously held on HOLD.
- 13 Oct: age.html created and committed; live URL: https://barsulkhan.github.io/InfoJano/age.html. Earlier task was linking it from index.html and continuing SEO pages.
- 16 Oct: sitemap.txt created with 21 URLs. Both sitemap.xml and sitemap.txt opened in browser, but Search Console reported “Couldn't fetch”, type “Unknown”, discovered pages 0.
- 17 Oct: Explore section updated across 22 tool pages with SVG icons, larger text and mobile two-column cards; deployment #127 was reported successful in prior conversation.
- Prior master archives are in ChatGPT Library:
  - InfoJano_Master_Project_Archive_v4_2026-10-17.md
  - InfoJano_Master_Project_Archive_v4_2026-10-15.md
  These contain the longer earlier project history and Search Console records. Keep them; this V5 supersedes them for the latest continuation point, not as a deletion/replacement.

## 4. Existing repository files observed on 19 Oct
The root listing includes at least:
- index.html
- age.html
- bmi.html
- currency-converter.html
- date-difference.html
- discount.html
- emi.html
- gst-calculator.html
- image-compressor.html
- image-resizer.html
- image-to-pdf.html
- id-card-print-studio.html
- loan-eligibility.html
- loan-interest.html
- number-to-words.html
- password-generator.html
- percentage.html
- percentage-change.html
- qr-maker.html
- savings.html
- text-counter.html
- time-calculator.html
- tip-calculator.html
- unit-converter.html
- download-progress.js
- install.js
- manifest.json
- sw.js
- robots.txt
- sitemap.xml
- sitemap.txt
- icon-192.png
- icon-512.png
- google4a4795e5c7c03eae.html (Google verification file)
- folders .github/, android/, app-manifests/
The repository's default branch is main. Use GitHub's current main tree for the definitive current inventory; this list is based on a recent API root listing and may not include every item due to output truncation.

## 5. Search Console / SEO status carried forward
From the V4 archive updated 17 Oct:
- Homepage was shown indexed.
- age.html shown indexed earlier and an indexing request had been accepted.
- bmi.html, currency-converter.html and date-difference.html were reported as requested earlier.
- loan-eligibility.html screenshot showed “URL is on Google” / “Page is indexed”.
- image-resizer.html screenshot showed “URL is on Google” / “Page is indexed”.
- image-to-pdf.html showed live URL available and later “Indexing requested”.
- number-to-words.html previously showed URL unknown to Google; request failed with “Quota Exceeded”.
- Six indexing requests accepted on 17 Oct (screenshots confirmed): percentage.html, qr-maker.html, text-counter.html, time-calculator.html, tip-calculator.html, unit-converter.html. These were requests, not proof of indexing. Do not resubmit unnecessarily.
- sitemap.xml: Search Console “Couldn't fetch”, discovered pages 0; URL inspection said URL available to Google, which is not proof the sitemap parses.
- sitemap.txt: submitted successfully but report also showed “Couldn't fetch”, discovered pages 0.
- Preserve both sitemap files and robots.txt. Do not blindly edit or repeatedly submit.
- Next SEO task when resumed: inspect GitHub Pages deployment status and Search Console details before changing sitemaps.

## 6. ID Card Studio — current active work, not yet correct
Main file: id-card-print-studio.html
Live page: https://barsulkhan.github.io/InfoJano/id-card-print-studio.html
The user has paused work after repeated failed Aadhaar stand-copy crop attempts. Do not claim the latest version works; latest user screenshot explicitly says “হয়নি” and shows two cards rendered tiny at the top of a mostly blank print-preview image. Treat Aadhaar image auto-crop as UNRESOLVED and high priority when resumed.

### Important preservation rules
- The approved Ayushman Bharat Card workflow is finalized; never change its behavior during Aadhaar work.
- PDF auto-detection function must remain unchanged during image-only Aadhaar changes. User explicitly requires that PDF behavior not change.
- Output size remains 85 × 55 mm at 300 DPI. Do not silently change to 85.6×54 or 85×54.
- Keep JPG quality at 0.99 (99%).
- Maintain existing PDF export settings and outer black cut border.
- Ayushman specifics (must preserve): JPG/PNG auto front/back split; PDF/scanned PDF retains original source page and manual crop for full Front/Back; output 85×55 mm, 300 DPI; thin black border on exact outer edge with no gap; preserve text, portrait, QR and colors; Ayushman PDF render scale 3.5 and contrast(1.07) saturate(1.06); cropToCard darkens only neutral mid-tone pixels (hi-lo <=24, luminance 58–185) by 42%; colored and already-black pixels unaffected. Keep these unchanged.
- Aadhaar image branch was previously darkening neutral mid-tone pixels across the whole card; this was removed in commit 4505ed70a89d2d6de3ebc9ec473aa6905e219d58 to preserve the portrait and its natural colors. Latest source uses high-quality resizing only for Aadhaar, while Ayushman processing remains unchanged.

### Aadhaar stand-copy crop requirements from user
- The sample is a scanned/photocopied Aadhaar letter with two printable card panels and no full black outer border.
- Use the scissors/dotted cutting line as the top edge for BOTH front and back.
- Use the red horizontal line beneath the Aadhaar number as a lower reference, but include the complete “আমার আধার, আমার পরিচয়” slogan/footer beneath that line, then leave 3–4 mm whitespace below the last text/mark.
- Determine left/right boundaries from the left and right ends of the scissors dotted line and red line, treating them as paired references.
- Same rule for back.
- Never cut text, portrait, QR or any part of the card. Keep a manual crop fallback.
- PDF auto-crop is a separate workflow based on actual border detection. Do not change it when fixing JPG/PNG scanned-image logic.
- The user complained about crop including the prior “আমার আধার, আমার পরিচয়” slogan at the top and missing/extra header content. A later screenshot showed the front and back card crops were mostly correct but the final print-preview was wrong: both card images appeared tiny at the top of a large mostly blank page, instead of arranged to fill the expected print layout. Therefore do not keep tweaking just the scissors detector without also diagnosing the print preview scaling/layout; there may be two distinct bugs.
- Latest user said “হয়নি” after showing this print preview screenshot. No further code changes after that feedback.
- Latest known commit: a7d9778eb68c3f03b3ef2ced0c47e75002eeaebc — “Narrow Aadhaar scissors line crop boundary”.
- Previous: 4505ed70a89d2d6de3ebc9ec473aa6905e219d58 — “Preserve Aadhaar portrait quality and refine scissors crop”.
- Earlier: 77f800a8f39aced7dfc927842c9743feaa4d9c02 — “Correct Aadhaar stand-copy crop boundaries”.
- 8fae2d51fbdfea2c1fd5d931e68464b5d76c25dc — “Fix Aadhaar stand-copy front and back crop detection”.
- fbe75d007ef882ddd3c62379a75f02f67d04900a — “Fix Aadhaar stand-copy scan crop detection”.
- 87557d95fb69e1108ef7976a56fee56329e37146 — “Narrow scissors-line search for scanned Aadhaar images”.
- 3b43a7c52f0c0f4b737b3eac7d2501faa12466b8 — “Improve Aadhaar print text darkness for JPG and PDF”.
- The user has become frustrated with repeated guess-based changes. When resuming, acknowledge the current crop/print-preview failure, inspect the actual current code and compare against source image geometry before changing. Avoid repeated speculative changes. If possible, get the original image file itself (not just screenshot of preview) so coordinates can be measured. Always check and preserve PDF detector and Ayushman code with byte-for-byte comparison when changing Aadhaar image logic.
- The user-provided sample has personal Aadhaar information. Do not echo their Aadhaar number/address back into the archive or responses.

## 7. Related saved files / useful assets
- Prior file InfoJano_Ayushman_Bharat_Code_Only.txt was created as a reference containing only Ayushman-specific code snippets; it is not a standalone runnable website.
- Prior master archives V3/V4 are in ChatGPT Library and should be preserved.
- Repository itself has commit history and is the source of truth for committed code.
- Full chat export is not guaranteed; archive is a structured history based on available messages and saved checkpoints, not a verbatim transcript.

## 8. Resume instructions for next chat
User paused project on 19 October 2026 and wants all project files/history preserved. Start by reading this archive and the prior V4 archives. Do not ask the user to repeat project history.
First task when user says resume:
1. Fetch the current main branch id-card-print-studio.html.
2. Confirm current latest commit and current Pages deployment status before claiming live behavior.
3. Diagnose why the latest print preview shows both cards tiny at the top of a mostly blank page. Separate preview-layout rendering from crop detection.
4. Use the user's intended cut geometry: scissors line as top, red Aadhaar-number line as reference, include full slogan/footer and 3–4 mm bottom gap; left/right from paired line extents.
5. Preserve PDF detector byte-for-byte and preserve Ayushman workflow; do not touch unrelated files.
6. Test/validate before stating success. If unable to run real browser testing, explicitly state that it is code-reviewed but not live-tested.
7. Only after the user confirms the Aadhaar result is correct, continue SEO/sitemap work or other project tasks.

## 9. Current stop status
As of 19 October 2026: user said they are not working further now and asked for all project files/history to be saved into a master file. This V5 archive is the continuation checkpoint. No claim that the latest Aadhaar build is correct or deployed.

## 10. Continuation update — 20 October 2026 (current checkpoint)
- Latest known studio commit: `0ca117b612c791d9d38d19ddafa107c7efe87dbf` — “Show JPG download button in ID Card Print Studio”.
- Current live-source file SHA reported by GitHub Contents API: `bcae1b858af16ffc770f2495b92d1f40726b1294`.
- The JPG button had been present in the HTML but hidden by `style="display:none"`. It was made visible and the section heading now says “Download print-ready PDF or JPG”. The visible label is “Download JPG (600 DPI)”. User confirmed the button appeared on their device.
- JPG handler currently uses a 600-DPI output canvas, high-quality image smoothing and JPEG quality 1.0. This increases output dimensions/file size; it does not restore detail missing from the source. Keep PDF settings unchanged.
- Manual crop: user explicitly decided to KEEP it. Do not remove or hide it. The user does not want to reply to further questions; continue with safe work without asking unnecessary confirmations.
- Background/shadow marks in the child's photo: deferred. Do not alter the photo/background processing until the user returns to it.
- Aadhaar small print-preview issue: explicitly deferred by user on 20 Oct. Do NOT test or modify this issue now. Revisit only when user asks.
- Language preference for technical project work: write code labels, code comments, technical reports and project notes in English. Give brief step-by-step user guidance in Bengali when needed.
- Current request: user wants to work on point 3 from the prior plan — SEO / Sitemap review — but first save this Smart Master Project archive. After saving, continue by inspecting GitHub Pages deployment and Search Console/sitemap status before editing any sitemap. Preserve `sitemap.xml`, `sitemap.txt`, and `robots.txt`; do not blindly edit or repeatedly submit.
- Code review checks completed for current studio source:
  - JPG download button is visible in source.
  - Manual crop controls/functions are still present.
  - 600-DPI JPG export is present.
  - Aadhaar PDF card detection function matches the locked backup byte-for-byte.
  - `cropToCard` function (including approved Ayushman behavior) matches the locked backup byte-for-byte.
  - Live source and backup HTML SHA differ because the live source includes the visible JPG button and the backup predates that UI visibility update. Do not overwrite the live source with the older backup.
- Do not claim the current site was browser-tested or that the GitHub Pages deployment succeeded unless independently confirmed. Code checks are not the same as user/device testing.
- Preserve the locked workflows for Ayushman Bharat, Aadhaar and Voter ID. No changes to crop, dimensions, borders, layout or PDF settings without explicit approval.


# HISTORICAL CONSOLIDATION — FROM PROJECT START THROUGH 20 OCTOBER 2026

This section consolidates earlier checkpoints that were saved separately in the ChatGPT Library, including:
- `InfoJano-Progress-Checkpoint-2026-10-13.txt`
- `InfoJano-Progress-Checkpoint-2026-10-13-SEO.txt`
- `InfoJano_Master_Project_Archive_v4_2026-10-17.md`
- `InfoJano_Master_Project_Archive_v5_2026-10-17-1.md`
- `InfoJano_Master_Project_Archive_v6_2026-10-17(2).md`
- The current 19–20 October studio/JPG updates.

The older files should remain preserved as historical snapshots. This file is now the single preferred continuation reference. This is a consolidated project history, not a verbatim export of every chat; uncertain historical dates and statuses are explicitly marked.

## A. Full chronological project history

### 2 October 2026 — earliest reported prototype
- A prior history-recovery note reported an `InfoJano-website-prototype.zip` and prototype work.
- The original ZIP and a full dated transcript were not independently recovered; treat this as the earliest reported lead, not proof of the absolute first day.

### 3 October 2026 — reported foundation/launch
- A prior note reported `InfoJano-Launch-Foundation-1.0.zip` and repository/launch work.
- Original ZIP/transcript not independently recovered. Treat as a historical checkpoint, not independently verified evidence.

### 4 October 2026 — V2 baseline and launch
- V2 recorded files: `index.html`, `robots.txt`, `sitemap.xml`, `README.md`; commit prefix `e72743b` recorded in earlier archive.
- V2 stage was recorded as a ten-tool homepage with search and mobile-first/privacy structure.
- V2.2 experienced a blank/loading issue; V2.1 was treated as the stable baseline.
- Photo/AI Studio was placed on HOLD.
- Live URL: https://barsulkhan.github.io/InfoJano/

### 12 October 2026 — 16 tools and Android PWA
- User confirmed the original 16 homepage tools worked.
- `manifest.json` had accidentally been named `manifest.jsonl`; it was corrected to `manifest.json`.
- Manifest contains InfoJano name/short name, `/InfoJano/` start URL and scope, standalone display, theme/background colors, and icon references.
- `icon-192.png` and `icon-512.png` were committed and live URLs opened successfully.
- User installed InfoJano on Android home screen as a PWA/web app. It is not a native APK.
- Maintain free/low-cost hosting, mobile-first UX, and existing 16 tools. Avoid unrelated changes.

### 13 October 2026 — PWA/offline behavior and SEO
- Created and committed `sw.js`; `index.html` registers `/InfoJano/sw.js`.
- Cache name: `infojano-v1`.
- Precache list: `/InfoJano/`, `/InfoJano/index.html`, `/InfoJano/manifest.json`, `/InfoJano/icon-192.png`, `/InfoJano/icon-512.png`.
- Install uses `cache.addAll(ASSETS)` and `skipWaiting`; activate deletes older `infojano-*` caches and claims clients; fetch is network-first with cache fallback and homepage fallback.
- Offline checks were reported successful for Age, Percentage, EMI, BMI, Discount and Date Difference while the app was open. User then reported that closing/reopening InfoJano with internet off also appeared to work. QR may require internet due to an external CDN. Treat these as user-reported tests, not independent browser automation.
- Google Search Console property verified for https://barsulkhan.github.io/InfoJano/.
- Sitemap XML then contained only the homepage URL. `robots.txt` opened and had:
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://barsulkhan.github.io/InfoJano/sitemap.xml`
- Homepage showed “URL is on Google” / “Page is indexed” in prior screenshot.
- Search Console Sitemap report showed `Couldn't fetch`, discovered pages 0. Resubmission on 13 October did not prove a fix.
- SEO direction agreed: add crawlable standalone pages for tools/guides without breaking existing tools.

### 13 October — Age Calculator and SEO checkpoint
- `age.html` created and reported live: https://barsulkhan.github.io/InfoJano/age.html
- Includes a functional age calculator, SEO metadata/canonical, mobile layout, and homepage link.
- Progress checkpoint recorded as `InfoJano-Progress-Checkpoint-2026-10-13-SEO.txt`.
- GitHub “Create new file” workflow was discussed for standalone SEO pages; user asked the assistant to save progress rather than being forced to type code manually.

### 14–15 October — standalone SEO pages and test notes
Standalone tool pages were created or worked on during this period. Known pages include:
- `age.html`
- `percentage.html`
- `emi.html`
- `bmi.html`
- `discount.html`
- `text-counter.html`
- `image-to-pdf.html`
- `image-compressor.html`
- `image-resizer.html`
- `currency-converter.html`
- `date-difference.html`
- `gst-calculator.html`
- `loan-eligibility.html`
- `loan-interest.html`
- `number-to-words.html`
- `password-generator.html`
- `qr-maker.html`
- `time-calculator.html`
- `tip-calculator.html`
- `unit-converter.html`
- `percentage-change.html`
- `savings.html`

Historical manual checks recorded:
- Percentage: 99% of 1999 = 1979.01.
- EMI: ₹500,000 at 8.5% for 5 years → EMI approx ₹10,258.27; interest approx ₹115,495.94; total repayment approx ₹615,495.94.
- BMI: 103 kg / 162 cm → BMI 39.2.
- Discount: ₹1,000 at 33% discount → ₹330 savings and ₹670 final price.
- Text Counter: “Abdul barik” → 2 words and 11 characters.
- Image to PDF: screenshot showed image selected, PDF created, and Download PDF link.
- Age page was created/tested.
- `image-compressor.html` code had been supplied/generated earlier, but its commit/live deployment/test status was not confirmed at that historical point; check current repository for present state.
- Percentage page was noted as not linked from homepage at one point; later the “Explore All Tools” section was added.

### 15–17 October — Search Console indexing workflow
- Homepage and `age.html` were reported indexed in screenshots.
- `bmi.html`, `currency-converter.html`, `date-difference.html` were previously reported as indexing requests.
- `loan-eligibility.html` showed “URL is on Google” / “Page is indexed”.
- `image-resizer.html` showed “URL is on Google” / “Page is indexed”.
- `image-to-pdf.html` showed URL available to Google and later “Indexing requested”.
- Other pages attempted/handled included `discount.html`, `emi.html`, `gst-calculator.html`, `image-compressor.html`, `loan-interest.html`, `number-to-words.html`, and `password-generator.html`; not every request has a confirmed acceptance record.
- `number-to-words.html` previously showed URL unknown/no referring sitemap; request failed with “Quota Exceeded”. It was not accepted at that time.
- On 17 October, green “Indexing requested” confirmation was recorded for exactly six pages:
  1. `percentage.html`
  2. `qr-maker.html`
  3. `text-counter.html`
  4. `time-calculator.html`
  5. `tip-calculator.html`
  6. `unit-converter.html`
- These are accepted requests, not proof of indexing. Do not submit again unnecessarily. Avoid repeated Loan Interest tests without reviewing this archive first.

### 16–17 October — sitemap.txt experiment
- `sitemap.xml` was displayed in browser with valid-looking XML `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` and 21 URL entries, but Search Console reported `Couldn't fetch`, `Sitemap could not be read`, and discovered pages 0.
- `sitemap.txt` was added on 17 October, one full URL per line, 21 URLs; commit prefix `7c185d4` was recorded with message “Add text sitemap”.
- Browser opened https://barsulkhan.github.io/InfoJano/sitemap.txt and showed all 21 URLs; Search Console showed a green “Sitemap submitted successfully” toast.
- Despite browser access and successful submission toast, both sitemap entries continued to show Type `Unknown`, Status `Couldn't fetch`, Discovered pages 0. Neither sitemap is confirmed working. Keep both files and `robots.txt`; do not blindly edit or repeatedly resubmit.

### 17 October — homepage links and canonical
- Added “Explore All Tools” section to `index.html` with direct links to 20 standalone tool pages. Commit: `81cfb769eb57beccee61040b29c11fa154c9d69e` (“Add direct links to standalone tool pages”).
- GitHub Actions deployment run `38999095763` was reported completed successfully.
- Read-back verification found all 20 `.html` links and no missing targets in the repository at that point. The live homepage had not been visually inspected by the assistant.
- Added homepage canonical:
  `<link rel="canonical" href="https://barsulkhan.github.io/InfoJano/">`
  immediately after the description meta tag. Commit: `5bece27615a43a907a2c75f76bcbb331cd09d914` (“Add canonical URL to homepage”).
- Read-back verified the canonical and that the “Explore All Tools” section remained with 20 links and no missing repository targets.
- GitHub Actions run `38999273283` was later confirmed completed with conclusion `success` for commit `5bece27615a43a907a2c75f76bcbb331cd09d914`.
- User also shared screenshot of GitHub Pages deployment #76 with overall Success and build/report/deploy jobs green. One visible warning concerned Node.js 20 deprecation for one or more actions; notices mentioned ubuntu-latest migration to Ubuntu 26 beginning 19 October. These were warnings/notices, not failed deployment. No workflow change should be made unless future run fails or a specific compatibility reason appears.

### 18–19 October — ID Card Print Studio locked workflows
Three workflows were finalized and locked:
1. Ayushman Bharat Card.
2. Aadhaar Card.
3. Voter ID.

Preservation rules:
- Do not change the approved crop, card dimensions, border, colors, front/back behavior, layout or PDF behavior without explicit request.
- Voter ID output is 85 × 55 mm at 300 DPI; front and back from top two faces of e-EPIC PDF, ignore lower voter-roll/notice content. Front upper-left photo, back upper-right QR/address. Keep black outer cut borders, with minimal gap between print and cut edge. Back bottom-edge adjustment was approved; front stays as finalized.
- Aadhaar top-clearance setting was finalized earlier as `topClearance=Math.max(sample*2,Math.round(h*.008))`; later user emphasized preserving approved crop geometry.
- Ayushman PDF processing is finalized; preserve render scale 3.5, contrast(1.07) saturate(1.06), exact crop and thin black border. Its cropToCard routine darkens only neutral mid-tone pixels where `hi-lo <= 24` and luminance is 58–185 by 42%; colored and already-black pixels are left alone. Do not modify this casually.
- Backups:
  - `backups/InfoJano-Ayushman-VoterID-FINAL-LOCKED-2026-10-19.html`
  - `backups/FINAL-LOCKED-RULES-2026-10-19.txt`
- The backup is not necessarily byte-identical to the latest live HTML after subsequent UI-only changes. Never overwrite the live file with an older backup without reviewing the diff.
- Ration-card feature research/plan was explicitly put on HOLD; no ration card code edits were made. Proposed future design: support West Bengal AAY, PHH, SPHH, RKSY-I and RKSY-II e-Ration Card PDFs; detect front/back; preserve QR/barcodes/colors/text; exclude excess whitespace; automatic physical size from aspect ratio; isolated workflow. Do not resume until user asks.
- Background/shadow artifacts in the child’s photo were deferred. Do not alter that image-processing logic until user asks.
- Manual crop controls remain in the studio. User explicitly decided to keep them; do not remove or hide them.

### 19–20 October — JPG download UI and quality
- Latest studio commit recorded: `0ca117b612c791d9d38d19ddafa107c7efe87dbf` — “Show JPG download button in ID Card Print Studio”.
- Current studio source SHA reported by GitHub Contents API: `bcae1b858af16ffc770f2495b92d1f40726b1294`.
- JPG button existed in HTML but was hidden with `style="display:none"`; it was made visible. Heading now says “Download print-ready PDF or JPG”, button label “Download JPG (600 DPI)”. User confirmed it appeared on device.
- JPG handler uses 600-DPI output canvas, high-quality image smoothing, JPEG quality 1.0. This increases output dimensions/file size; it cannot restore source detail that is not present. PDF settings were not intentionally changed.
- Current code review checks: JPG button visible; manual crop controls/functions present; 600-DPI JPG export present; Aadhaar PDF detector matches locked backup byte-for-byte; `cropToCard` matches locked backup byte-for-byte.
- Live source and backup HTML differ because the backup predates the UI visibility update. This is expected; do not restore older backup over current live source.
- No claim that 600-DPI JPG has been fully device-tested beyond user seeing the button. Need separate JPG/PDF output checks if user asks.

### 20 October — current user instructions
- User requested one complete Smart Master Project file containing history from the beginning through today, not merely today's notes. This consolidated V7 file is intended to fulfill that request.
- User said all technical labels, code comments, technical reports and project notes should be written in English. Continue speaking to the user in Bengali for simple guidance.
- User explicitly deferred Aadhaar’s small print-preview issue. Do not test or modify it now.
- User said keep manual crop. Do not remove or hide it.
- User deferred background/shadow marks in the child’s photo.
- Next task after archive save: SEO/Sitemap review. Inspect GitHub Pages deployment status and Search Console details before any sitemap changes. Preserve `sitemap.xml`, `sitemap.txt`, `robots.txt`. Do not claim indexing or sitemap success without evidence.

## B. Current repository inventory (latest known from GitHub, 20 October)
Known root files include:
- `index.html`, `age.html`, `bmi.html`, `currency-converter.html`, `date-difference.html`, `discount.html`, `emi.html`, `gst-calculator.html`, `image-compressor.html`, `image-resizer.html`, `image-to-pdf.html`, `id-card-print-studio.html`, `loan-eligibility.html`, `loan-interest.html`, `number-to-words.html`, `password-generator.html`, `percentage.html`, `percentage-change.html`, `qr-maker.html`, `savings.html`, `text-counter.html`, `time-calculator.html`, `tip-calculator.html`, `unit-converter.html`.
- `download-progress.js`, `install.js`, `manifest.json`, `sw.js`, `robots.txt`, `sitemap.xml`, `sitemap.txt`, `icon-192.png`, `icon-512.png`, Google verification HTML.
- Folders `.github/`, `android/`, `app-manifests/`, and `backups/`.
Use the current repository as source of truth if the inventory changes.

## C. Consolidated current status board
- Original homepage 16 tools: user-confirmed working historically; preserve.
- PWA installation: installed by user on Android; offline checks reported successful for several tools.
- Standalone SEO pages: 20 linked from homepage according to repository read-back on 17 Oct; deployment for canonical/link section confirmed success.
- Homepage canonical: committed and deployment confirmed success.
- Search Console: homepage indexed historically; some pages indexed historically; six requests accepted on 17 Oct; current index status for each URL must be checked live if needed.
- Sitemap XML: unresolved `Couldn't fetch` / 0 discovered pages in last recorded Search Console screenshots.
- Sitemap TXT: unresolved `Couldn't fetch` / 0 discovered pages despite live browser access and successful submission toast.
- ID Card Studio: three workflows locked; manual crop stays; JPG button now visible; background cleanup deferred; Aadhaar small preview explicitly on hold.
- Ration card: on hold, no code changes.
- Photo/AI Studio: on hold.
- Current next action: inspect Pages deployment / Search Console Sitemap report, then diagnose based on evidence. Do not change sitemap files or robots.txt blindly.

## D. Evidence and uncertainty policy
- A commit proves a change was saved to GitHub; it does not alone prove deployment or live browser behavior.
- A successful GitHub Pages workflow proves deployment workflow success; it does not prove Google indexing.
- “Indexing requested” means accepted for crawling, not indexed.
- Browser access to a sitemap does not prove Search Console parsed it.
- Historical dates 2 and 3 October are reported leads; original ZIP/transcripts were not independently recovered.
- The archive is a structured continuity record, not a verbatim full-chat export. Do not invent missing events. Preserve uncertainty markers.

## E. Resume prompt
“Continue InfoJano from the consolidated Smart Master Project V7. Read the full archive before making changes. Work in English for code labels/comments/technical reports and Bengali for user guidance. User is Android-only and wants one clear step at a time. Preserve all original 16 tools and locked card workflows. Manual crop remains. Do not work on the Aadhaar small print-preview issue or photo background cleanup until requested. Next: inspect GitHub Pages deployment and Google Search Console sitemap status before editing any sitemap. Do not claim success without evidence.”


## 22. 2026-10-24 — Dedicated icons for individual tools

- Added 22 separate SVG app icons under `app-icons/` for Age, BMI, Currency Converter, Date Difference, Discount, EMI, GST, Image Compressor, Image Resizer, Image to PDF, Loan Eligibility, Loan Interest, Number to Words, Password Generator, Percentage, Percentage Change, QR Maker, Savings, Text Counter, Time Calculator, Tip Calculator, and Unit Converter.
- Updated all 22 corresponding `app-manifests/*.webmanifest` files to use the tool-specific icon rather than the generic InfoJano home icon.
- Updated `sw.js` cache version to `infojano-v4` and added all 22 SVG icons to the offline precache list.
- Repository source audit confirmed 22 icon files, 22 manifests, and no tool icon missing from the service-worker asset list.
- Latest commit: `dc5d12dca9fbcfafa841ccd1cf2237fcd8920abc`.
- GitHub Pages deployment was still in progress at the time of this note: https://github.com/barsulkhan/InfoJano/actions/runs/40061953069
- Important limitation: the icons are custom branded SVG letter/symbol marks, not a full illustrated icon set. The home page already has its own InfoJano logo SVG. Actual Android installation/airplane-mode behavior must still be tested on a phone; installed apps may need reinstalling or clearing site data to refresh previously cached manifest icons.


## 23. 2026-10-24 — Image to PDF reorderable preview

- User showed the Image to PDF Converter preview with three selected Employment Bank card images and requested an easy way to rearrange their PDF page order by dragging an image to the desired position.
- Updated `image-to-pdf.html` with an animated instructional hint explaining hold-and-drag ordering, numbered page badges, grab labels, visual drag/drop states, desktop mouse drag-and-drop, and touch/pen long-press dragging.
- The preview order is synchronized back into the `selected` image array, so PDF pages should be generated in the new displayed order. Selecting new files resets the preview as before.
- Commit: `5bf1ce86df452ea740ba2e6f678b318b47fb9984`.
- GitHub Pages deployment triggered: https://github.com/barsulkhan/InfoJano/actions/runs/40063098118
- Verification pending: wait for the deployment workflow to finish, then test the live page with multiple images on desktop (mouse click-hold-drag) and Android (long-press-drag), and confirm the downloaded PDF page order. Do not claim live functionality until tested.


### Follow-up fix — 2026-10-24
- User reported that order numbers appeared in the Image to PDF preview but dragging did not move the images.
- Reworked the interaction to use unified pointer dragging: mouse drag starts on movement/hold; touch and pen use deliberate long-press then drag. Disabled native browser image drag, added pointer capture, and set touch-action to none on preview cards so vertical reordering can work.
- Fix commits: `884169bc6ed830de46985c662aa0a2e77e00fbf4` and `9a0579b79c3e708c3084e1a9358918153c51c7e4`.
- Deployment and live drag/drop behavior still need verification after the newest commit deploys. Test mouse and touch separately, then create a PDF and verify page order.
