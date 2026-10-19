# InfoJano — Smart Master Project Archive
Version: V6
Updated: 20 October 2026
Status: ACTIVE — SEO/Sitemap review is next; Aadhaar print-preview issue is on hold.
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
