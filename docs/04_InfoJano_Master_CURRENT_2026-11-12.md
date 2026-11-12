# InfoJano — Master Project (Portfolio Edition)
Updated: 8 November 2026 | Status: Existing project; fresh live/deployment verification required.

## Identity
Global-first mobile-first everyday utility/information portal, built from Android with limited budget. Accessible simple UI and PWA installability are priorities.

## Links
Repository: https://github.com/barsulkhan/InfoJano
Known Pages URL: https://barsulkhan.github.io/InfoJano/
Actions: https://github.com/barsulkhan/InfoJano/actions
Search Console: https://search.google.com/search-console/
Sitemap XML: https://barsulkhan.github.io/InfoJano/sitemap.xml
Sitemap TXT: https://barsulkhan.github.io/InfoJano/sitemap.txt
robots.txt: https://barsulkhan.github.io/InfoJano/robots.txt
ID Card Print Studio: https://barsulkhan.github.io/InfoJano/id-card-print-studio.html

## Categories
Calculators; AI & Technology; Money & Finance; Documents/Online Services; Weather/Daily Info; Education; Jobs/Careers; Trending.

## Preserve existing work
Preserve tool pages and workflows unless specifically requested. ID Card Print Studio must retain manual crop, front/back selection, print dimensions and PDF/JPG export. Fetch current source and inspect exact code before editing; make smallest safe change. Update service-worker cache sequentially after asset changes. Never claim a user-file PDF/visual test passed unless performed with the original file. Never claim live deployment until Actions succeeds and live URL is checked.

## Last known checkpoint from Library records (28–29 Oct 2026)
- 28 Oct master recorded service worker cache `infojano-v30`.
- 29 Oct restart file recorded GST and EMI pages with WebApplication and FAQPage JSON-LD; cache moved v57 → v58 → v59.
- The 29 Oct note said latest Pages deployment for master-update commit `a6d503730698040ac2629affc0804ab697be6525` was pending at that time.
- Therefore v59 supersedes v30 as last known cache, but current cache and deployment must be freshly checked. Do not assume the pending deployment later succeeded.
- Search Console snapshot: homepage indexed; one view showed 21 indexed/0 affected; sitemap reports said “Couldn't fetch” / discovered 0 although XML opened and URL live test said available. Recheck; don't blindly resubmit or edit sitemap.
- Ayushman PDF crop work: preserve full PDF page as manual-crop source; user still needed to test original PDF preview/export.

## SEO/PWA checks
Review SEO page-by-page without breaking calculator logic/metadata. Validate structured data against visible content. Inspect sitemap/robots from fresh evidence. Audit service-worker precache paths and external dependencies before offline changes. QR Maker previously relied on api.qrserver.com and ZXing from unpkg.com; ID Card Print Studio used third-party PDF libraries — recheck current source. Android installation and airplane-mode tests require real device checks.

## Cost rules
Keep InfoJano separate from the three new sites. No paid domain, hosting, API, subscription or service without explicit approval. Do not migrate platform or alter repo architecture without a clear reason and approval.

## Immediate next tasks
1. Check latest GitHub Actions deployment.
2. Inspect current `sw.js` and record actual cache version.
3. Check live homepage, GST, EMI and ID Card Print Studio.
4. Ask user to test Ayushman PDF manual crop on Android if still pending.
5. Recheck Search Console sitemap status separately.
6. Update this file with verified results and commit hashes.

## Resume instruction
"এই InfoJano Master File অনুযায়ী কাজ চালিয়ে যাও। আগে GitHub-এর বর্তমান source, Actions deployment এবং live site যাচাই করো। তারপর Next Task করো। পুরোনো feature নষ্ট করবে না।"

## Most recent active task — Image Resizer six SEO landing pages (8 Nov 2026)
This is the immediate priority when work resumes. Do not skip it or restart unrelated planning.

Six requested feature-specific SEO pages:
1. Resize Image to Pixels
2. Resize Image by Percentage
3. Passport & ID Photo Resizer
4. Social Media Image Resizer
5. A4, A5, A6 Print Resizer
6. Website Image Resizer

Last known work state (from the latest project conversation; must be freshly verified):
- The six page files, URL routing, sitemap entries and service-worker cache update were prepared on a feature branch.
- PR #15: https://github.com/barsulkhan/InfoJano/pull/15
- At the last known check, PR #15 was open, not merged, clean, and 18 commits ahead of main.
- Cache version noted for this branch: `v254`.
- Cloudflare Worker build was reported successful, but that does NOT establish GitHub Pages deployment or live pages.
- Latest known main Pages deployment #1933 succeeded before PR #15; it does NOT prove these six pages are live.
- Android testing and Search Console indexing were not confirmed.

First morning task (mandatory sequence):
1. Open PR #15 and check its current state, base/head branches, changed files and merge status.
2. If still open, inspect the diff carefully and confirm all six page files, internal links, sitemap entries, canonical URLs, metadata, and service-worker cache update are correct. Do not merge automatically without user approval if merge action is consequential; report findings and ask if approval is needed.
3. If already merged, inspect the latest GitHub Actions Pages deployment and confirm it succeeded after the merge commit.
4. Read exact six filenames/slugs from the actual source; do not guess URL slugs.
5. Open each of the six exact live URLs and verify HTTP/page content. Record results individually.
6. Confirm actual service-worker cache version from current `sw.js`; do not rely on branch note `v254`.
7. Only after deployment/live checks, report which pages are live. Search Console indexing is a separate check and must not be conflated with deployment.

Useful links:
- PR #15: https://github.com/barsulkhan/InfoJano/pull/15
- Actions: https://github.com/barsulkhan/InfoJano/actions
- Repo: https://github.com/barsulkhan/InfoJano
- Pages: https://barsulkhan.github.io/InfoJano/

Important distinction: original Image Resizer tool UI changes were previously deployed (historical commits `0400cc9` and `8d87691`, cache `infojano-v155`). These are NOT the same as the six new SEO landing pages.


## 9 Nov 2026 — Six Image Resizer SEO landing-page premium hero redesign

User requested the six pages be redesigned to match the approved main Image Resizer reference: light-blue premium hero, dark high-contrast heading and description on the left, a distinct large illustration on the right, clear primary/secondary CTAs, benefit strip, three feature cards, clean article/FAQ/related links and bottom CTA. Preserve each page's SEO copy, FAQ, canonical metadata and tool routing.

### Implemented on GitHub
- New branch: `design/image-resizer-hero-premium-v2`
- PR #19: https://github.com/barsulkhan/InfoJano/pull/19
- PR #19 merged successfully (squash) to `main`. Merge commit: `78c5040eb1b5b713cc7d3747cf09b3208286f20c`.
- Six page hero SVGs replaced with individual illustrations for pixel sizing, percentage scaling, passport/ID photo, social/video graphics, A4/A5/A6 print and responsive website images.
- Shared `image-resizer-landing.css` rebuilt: stronger explicit hero text contrast, premium light-blue gradient, illustration treatment, buttons, benefits, cards, article blocks, sidebar, FAQ and responsive mobile rules.
- `sw.js` cache updated to `infojano-v256`; verified all six page paths and shared CSS remain in precache list.
- PR #19 changed 8 files: six HTML pages, shared CSS, and `sw.js`.

### Source validation
All six main-branch HTML files checked after the PR changes: each has exactly one accessible SVG hero illustration, canonical URL, shared stylesheet link, FAQ section and Image Resizer CTA. Six files: `resize-image-to-pixels.html`, `resize-image-by-percentage.html`, `passport-id-photo-resizer.html`, `social-media-image-resizer.html`, `print-document-image-resizer.html`, `resize-image-for-website.html`.

### Deployment status at handoff
- GitHub Pages `pages build and deployment` run ID `42569334906` for merge commit `78c5040...` completed with `success` (checked 9 Nov 2026). Deployment workflow is confirmed successful. However direct live URL/HTTP checks could not be completed from this environment (network DNS unavailable and web viewer could not access the host); Android visual verification is still pending.
- APK build run ID `42569335210` was also in progress; separate from Pages deployment.
- Direct live page retrieval was blocked by unavailable network DNS/web viewer; therefore the Pages workflow is successful but actual rendered live content has not been independently verified. User must inspect on Android and may need hard refresh/clear site data if the old service-worker cache persists.

### Exact live URLs to verify after deployment
1. https://barsulkhan.github.io/InfoJano/resize-image-to-pixels.html
2. https://barsulkhan.github.io/InfoJano/resize-image-by-percentage.html
3. https://barsulkhan.github.io/InfoJano/passport-id-photo-resizer.html
4. https://barsulkhan.github.io/InfoJano/social-media-image-resizer.html
5. https://barsulkhan.github.io/InfoJano/print-document-image-resizer.html
6. https://barsulkhan.github.io/InfoJano/resize-image-for-website.html

Next exact task: poll Pages run `42569334906`; when success, open all six URLs, verify new hero SVG and legible dark heading on Android/mobile, verify CSS loads, then record deployment and visual QA. Do not start unrelated work.


## 10 Nov 2026 — BMI Toolkit Phase 1 completed and deployed

### User direction and non-negotiable design constraints
- User approved proceeding with the urgent BMI Toolkit implementation and authorized the merge/deployment for this work.
- Preserve the existing main BMI hero banner exactly. User declared the hero design final; do not modify its design or markup unless explicitly requested.
- Keep the BMI page uncluttered and mobile-first while adding tools.
- Google search visitors must land on the exact relevant BMI feature when they click from a feature-specific SEO page, not merely the generic calculator.
- Continue implementation one feature at a time. Ask the user only for real device-side checks or decisions that cannot be made safely without them.
- BMI is a screening tool, not a diagnosis. Adult BMI tools must not be presented as valid child/teen assessments; child/teen BMI needs age- and sex-specific percentile references.

### Existing BMI pages and URLs
1. Main BMI calculator: https://barsulkhan.github.io/InfoJano/bmi.html
2. BMI Calculation Guide: https://barsulkhan.github.io/InfoJano/bmi-calculation-guide.html
3. BMI Weight Categories: https://barsulkhan.github.io/InfoJano/bmi-weight-categories.html
4. Healthy Weight Range: https://barsulkhan.github.io/InfoJano/bmi-healthy-weight-range.html
5. BMI Health Guide: https://barsulkhan.github.io/InfoJano/bmi-health-guide.html

### Phase 1 implementation merged to main
- PR #62: https://github.com/barsulkhan/InfoJano/pull/62
- Branch: `feature/bmi-toolkit-expansion-phase1`
- PR was marked ready for review, then squash-merged with the user's explicit authorization.
- Merge commit: `59d55da3e85a6c180d23c6e0cbfde1daa311a901`.
- Main page changes: added a compact BMI Toolkit below the existing BMI calculator area; linked `bmi-toolkit.css` and `bmi-toolkit.js`; added a stable anchor for the calculator input form.
- Files added: `bmi-toolkit.css`, `bmi-toolkit.js`.
- Files changed: `bmi.html`, `bmi-calculation-guide.html`, `bmi-weight-categories.html`, `bmi-healthy-weight-range.html`, `bmi-health-guide.html`.
- The original main BMI hero markup was compared between `main` and the feature branch and found byte-for-byte unchanged.

### Phase 1 tools and deep links
Five tools are available in the main BMI Toolkit:
1. BMI Prime — `bmi.html?tool=prime`; calculates BMI divided by 25 from the main calculator inputs.
2. Waist-to-Height Ratio — `bmi.html?tool=waist`; asks for waist and height in centimetres and provides a cautious general adult screening guide.
3. BMI History — `bmi.html?tool=history`; stores date, weight, height and BMI locally in browser `localStorage`, with clear-history control and a 100-entry cap. Data remains on the user's device/browser.
4. Healthy Weight Range — `bmi.html?tool=healthy`; estimates adult reference weight range from BMI 18.5–24.9 for the entered height.
5. Print / Save as PDF — `bmi.html?tool=report`; opens the browser print dialog for printing or saving a PDF.

SEO CTA routing:
- `bmi-calculation-guide.html` → `bmi.html?focus=calculator`.
- `bmi-weight-categories.html` → `bmi.html?tool=prime`.
- `bmi-healthy-weight-range.html` → `bmi.html?tool=healthy`.
- `bmi-health-guide.html` → `bmi.html?tool=waist`.

### Service Worker cache fix and deployment
- After merging PR #62, a review identified that the new BMI Toolkit assets and the four BMI SEO pages were missing from the Service Worker precache list.
- Corrected `sw.js` directly on `main`; cache version bumped from `infojano-v272` to `infojano-v273`.
- Added precache entries for `bmi-toolkit.css`, `bmi-toolkit.js`, `bmi-calculation-guide.html`, `bmi-weight-categories.html`, `bmi-healthy-weight-range.html`, and `bmi-health-guide.html`.
- Service Worker commit: `69c8bf028eb52b1bef269edbe3ec6c125fa73a13`.
- GitHub Pages workflow run `42824132156` completed successfully; deployment job succeeded (checked 10 Nov 2026).
- Therefore source changes are merged and the GitHub Pages deployment workflow succeeded. Direct HTTP/rendered page inspection and real Android visual/interaction testing were not performed in this session. Do not claim those tests passed.
- APK build workflow run `42824132197` was still in progress at the last check; separate from Pages deployment. Do not claim APK build/release completed until rechecked.

### QA performed in source / GitHub
- JavaScript syntax compilation passed in V8.
- Verified toolkit markup appears once, CSS and JS assets are linked, five buttons exist with matching handlers, calculator focus route exists, and CSS brace balance is zero.
- Verified all four SEO page CTA routes point to their matching deep links.
- Verified main BMI hero markup unchanged between main and feature branch.
- Service Worker cache version and six added paths were checked in `sw.js`.
- No real mobile browser interaction/visual screenshot test was performed. User should test on Android and report any issue.

### Live test links
Main page: https://barsulkhan.github.io/InfoJano/bmi.html
- BMI Prime: https://barsulkhan.github.io/InfoJano/bmi.html?tool=prime
- Waist-to-Height: https://barsulkhan.github.io/InfoJano/bmi.html?tool=waist
- BMI History: https://barsulkhan.github.io/InfoJano/bmi.html?tool=history
- Healthy Weight Range: https://barsulkhan.github.io/InfoJano/bmi.html?tool=healthy
- Print / PDF Report: https://barsulkhan.github.io/InfoJano/bmi.html?tool=report

SEO pages:
- https://barsulkhan.github.io/InfoJano/bmi-calculation-guide.html
- https://barsulkhan.github.io/InfoJano/bmi-weight-categories.html
- https://barsulkhan.github.io/InfoJano/bmi-healthy-weight-range.html
- https://barsulkhan.github.io/InfoJano/bmi-health-guide.html

### Approved BMI roadmap — next sequential work
User previously approved all of these feature ideas. Implement one at a time, preserving the existing BMI hero and approved page layout:
Priority next:
1. Body Fat Calculator.
2. BMR Calculator.
3. Daily Calorie Calculator.
4. Child & Teen BMI Calculator — only with validated age- and sex-specific CDC/WHO percentile reference data and correct growth-chart interpretation; never apply adult BMI categories.
5. Ideal Weight Calculator.
6. Waist-to-Hip Ratio Calculator.
7. BMI Comparison Tool.
8. PDF/print report and progress chart improvements, if not already covered by the Phase 1 report.

Additional approved SEO clusters/pages to research and build only when the matching feature is ready: BMI Calculator for Men, BMI Calculator for Women, BMI Calculator for Children, BMI Calculator for Teens, BMI Calculator kg/cm, BMI Calculator feet/inches, BMI Prime Calculator, Waist-to-Height Ratio Calculator, Ideal Weight Calculator, and BMI vs Body Fat. Validate keyword intent/search demand before asserting volumes. Keep English SEO keywords for the global audience.

### Next exact action when resuming in a new chat
1. Read this Master Project file first and continue from the BMI Toolkit checkpoint; do not restart old tasks or ask the user to repeat the background.
2. Recheck latest GitHub Actions APK build run `42824132197` and report its actual conclusion only; Pages deployment run `42824132156` is already success.
3. Ask the user for a brief Android test of the five BMI Toolkit tools/deep links if not already completed. Distinguish any user-side test from source validation.
4. Then start the next approved BMI feature: Body Fat Calculator, in its own small, tested branch/PR. Keep the BMI hero markup/design unchanged. Add a matching feature-specific SEO page/deep link only after the calculator is implemented and validated.
5. Do not modify unrelated pages, homepage design/icons, or ID Card Print Studio.

### New-chat handoff prompt (copy and paste)
"InfoJano project resume করো। প্রথমে Library-র `/Website Control Center/04_InfoJano_Master.md` Master Project file সম্পূর্ণ পড়ে নাও। 10 Nov 2026-এর BMI Toolkit Phase 1 checkpoint থেকে কাজ চালাও। PR #62 merge হয়েছে, merge commit `59d55da3e85a6c180d23c6e0cbfde1daa311a901`; Service Worker commit `69c8bf028eb52b1bef269edbe3ec6c125fa73a13`; cache `infojano-v273`; GitHub Pages deployment run `42824132156` success। প্রথমে APK build run `42824132197`-এর status recheck করো। তারপর BMI Toolkit-এর Android test নিয়ে এগোও এবং পরবর্তী Body Fat Calculator feature আলাদা branch/PR-এ তৈরি করো। Existing BMI hero একদম পরিবর্তন করবে না। Master file না পড়ে কোনো কাজ শুরু করবে না।"

---

## 10 November 2026 — Body Fat Calculator Phase 1 / PR #63 checkpoint

### APK build verification
- GitHub Actions APK build run `42824132197` was checked and reported successful.
- Workflow: Build InfoJano Tool APKs; branch `main`; commit `69c8bf0`.
- Java 17 setup, icon/manifest validation, APK build, package-count verification, artifact upload, and GitHub Release publishing all passed.
- Artifact: `InfoJano-Tool-APKs`, approximately 988 KB, retained by GitHub Actions; release workflow publishes individual APKs.
- Run URL: https://github.com/barsulkhan/InfoJano/actions/runs/42824132197
- This is build validation only. Physical Android installation and in-device testing have NOT yet been completed.

### Body Fat Calculator implementation
- Dedicated feature branch: `feature/body-fat-calculator-phase1`.
- Draft PR #63: https://github.com/barsulkhan/InfoJano/pull/63
- PR remains OPEN and DRAFT; do not merge or deploy to live until Android/device QA is complete and user approval is obtained.
- Files changed only: `bmi.html`, `bmi-toolkit.js`, `bmi-toolkit.css`, `sw.js`.
- Added Body Fat % tool entry to existing BMI Toolkit navigation.
- Implemented adult-only US Navy circumference estimation equations (male/female reference equations), inputs for age, height, waist/abdomen, neck, and hip for female equation; optional fat mass and lean mass estimates when main BMI weight is available.
- Added validation: age 18–120, measurement bounds, equation-specific circumference checks, and reject estimates outside supported 2–75% output range. Added note that estimate is not diagnosis and not intended for pregnancy, children, or teens.
- Updated feature-branch Service Worker cache to `infojano-v274`; toolkit JS/CSS are included in precache.
- Main BMI hero section was compared byte-for-byte with the feature branch: unchanged. User explicitly requires BMI Hero Design to remain untouched.
- Latest branch commit after validation refinements: `796600ef1ff695c5cc3f473475c33f5289639722`.
- JavaScript syntax compilation passed.
- Formula spot checks: male example (175 cm, abdomen 90 cm, neck 38 cm) = 20.78%; female example (165 cm, waist 75 cm, neck 32 cm, hip 100 cm) = 30.24%.
- Invalid male circumference guard checked. A female invalid test sample demonstrated the formula's negative result and is rejected by the calculator's output-range guard.
- No new SEO landing page created yet; add only after calculator validation.

### Remaining work / safety gates
1. Run Android Chrome visual and interaction tests for the BMI Toolkit and Body Fat Calculator; user-side physical device testing remains pending.
2. Verify APK installation and app behavior on Android when a suitable downloadable APK is made available.
3. Check PR #63 CI/check status and Pages behavior; no feature-branch CI run had been found at the initial check.
4. Do not merge PR #63 or update live site without explicit user permission after QA.
5. Keep homepage, unrelated tools, and ID Card Print Studio untouched.

### Chat reliability note — 10 Nov 2026
- User reported repeated generic ChatGPT error dialog: “An error has occurred. Please try again later.” Screenshot showed it while background work was displaying Master Log update / Library file verification steps.
- Library listing was rechecked after that interruption: `/Website Control Center/04_InfoJano_Master.md` was still version 4, so the attempted checkpoint upload had NOT yet been confirmed. Retry the Library update and verify version increment before claiming it saved.
- Keep user-facing progress chatter minimal; report only meaningful completion or blockers. Do not claim a Library save until listing/read confirms the new version.

---

## 2026-11-10 — Body Fat Calculator Phase 1 QA continuation

- APK workflow run `42824132197` independently rechecked: completed successfully on `main` commit `69c8bf028eb52b1bef269edbe3ec6c125fa73a13`.
- APK artifact `InfoJano-Tool-APKs` exists, 988,073 bytes, artifact ID `13769395438`, not expired; expires 2026-12-10. It was built from `main` before Body Fat Calculator PR changes, so it does NOT contain the new Body Fat Calculator UI/code.
- Draft PR #63 remains open and unmerged: https://github.com/barsulkhan/InfoJano/pull/63
- PR head commit after QA refinement: `796600ef1ff695c5cc3f473475c33f5289639722`. PR metadata now reports mergeable=true and mergeable_state=clean; keep draft/unmerged until the device validation gate is completed.
- Body Fat Calculator validation refinement committed to `feature/body-fat-calculator-phase1`: input bounds added for age 18–120, height 100–250 cm, waist 30–250 cm, neck 15–100 cm, hip 30–250 cm; clearer male/female reference equation labels and measurement guidance added. Existing body-fat result bounds (2–75%) remain enforced.
- JavaScript syntax compilation passed using `new Function(source)`.
- Formula spot checks: male reference input 175 cm / 90 cm abdomen / 38 cm neck => 20.78%; female reference input 165 cm / 75 cm waist / 32 cm neck / 100 cm hip => 30.24%. Invalid male circumference guard correctly rejects waist <= neck. A female test with invalid/implausible measurements generated a negative estimate and is rejected by the 2–75% output guard.
- BMI Hero section compared byte-for-byte with `main`: unchanged. Only intended PR files are changed: `bmi.html`, `bmi-toolkit.js`, `bmi-toolkit.css`, `sw.js` (cache `infojano-v274`).
- Physical Android Chrome/device interaction testing cannot be truthfully marked complete from remote repository inspection. No Android device/browser automation tool is connected in this session. Live site remains on `main` and does not yet include PR #63. Do not merge or claim live testing complete until a preview/deployment or device QA is available.
- No homepage or ID Card Print Studio changes. No standalone SEO landing page until calculator validation is complete.

## 2026-11-10 — User-authorized live deployment: Body Fat Calculator

- User explicitly instructed: if the calculator is complete, make the website live; if work remains, complete it. User cannot review source code and asked the assistant to handle the implementation without requiring code-level decisions from them.
- PR #63 was moved from Draft to Ready for review and merged by squash after source-level validation. PR: https://github.com/barsulkhan/InfoJano/pull/63
- Merge commit on `main`: `2337c2327287cbdf802754a9a4cb261dcbef157f`.
- Merged changes are limited to BMI Toolkit files: `bmi.html`, `bmi-toolkit.js`, `bmi-toolkit.css`, `sw.js`. Existing BMI Hero Design was verified unchanged before merge. Service Worker cache in feature branch is `infojano-v274`.
- JavaScript syntax compilation and formula spot checks passed; input bounds and adult-only safeguards are implemented. This is an estimate only, not a clinical body composition measurement.
- GitHub Pages deployment run `42828981613` started on merge commit; status was still `in_progress` at last check. Do NOT report website as live until this run concludes successfully and the deployed page is verified.
- APK build workflow run `42828984748` also started on merge commit; status was still `in_progress` at last check. Earlier APK artifact `13769395438` predates this merge and does NOT contain Body Fat Calculator.
- Remaining work: poll Pages run `42828981613` and APK run `42828984748`; confirm Pages success and test live BMI page URL. If APK build succeeds, inspect artifact contents and share the correct user-facing install/download route. Physical Android device interaction still cannot be independently completed remotely; do not claim it was done. If any live issue is found, fix on a separate branch and deploy safely.
- User requested minimal progress chatter and no code-review burden. Do not ask user to inspect code or make technical decisions; report only clear outcomes and any genuinely unavoidable device-side limitation.
- Deployment follow-up: GitHub Pages deployment run `42828981613` completed with `success` on merge commit `2337c2327287cbdf802754a9a4cb261dcbef157f` at 2026-11-10 13:56:09Z. This confirms the GitHub Pages deployment job succeeded; browser/device visual verification remains separate.
- APK workflow run `42828984748` is still building. Java/Gradle setup and manifest/icon validation passed; Gradle APK build step was in progress at last check. No new artifact is available yet. Continue polling before claiming APK build success.

## 2026-11-10 — SEO landing-page architecture audit

- User clarified the core SEO goal: each search intent should have its own standalone, indexable landing page; a search visitor should land on the exact relevant page and then use a clear CTA to enter the matching main tool page. Do not make the user review code or decide technical details.
- Audited current `main` GitHub tree and `sitemap.xml`: 72 HTML files in repository (includes 404, index, Google verification and backup files); sitemap currently contains 66 URL entries. Sitemap and robots files are present; robots.txt points to sitemap.xml.
- Confirmed 18 dedicated SEO-targeted pages across four clusters:
  1. Image Resizer: 6 standalone pages (pixels, percentage, passport/ID, social media, print A4/A5/A6, website images).
  2. BMI: 4 guide/landing pages (calculation guide, weight categories, healthy weight range, health guide).
  3. Age: 4 focused pages (age in days, birthday countdown, day-of-week-born, historical events on birthday).
  4. Date: 4 focused pages (add/subtract date, business days, date duration, days between dates).
- Source audit of all 18 files: all have unique page titles, meta descriptions and canonical URLs, and all link to a relevant main tool URL. The 14 Image Resizer/BMI/Age pages checked include FAQPage structured data; the four Date pages currently do not show FAQPage JSON-LD in source and need structured-data/content audit before being marked fully optimized.
- Image Resizer six pages and BMI four pages are editorial/feature landing pages that lead into the main tool via relevant links/deep links. Age and Date focused pages are standalone intent-targeted calculator pages themselves and also link to the relevant main tool/page; they are not all just explanatory articles.
- Critical distinction: presence in sitemap and successful Pages deployment does NOT mean Google has indexed/ranked each page. Google Search Console URL inspection/indexing status must be checked separately; no verified index count or ranking claim is made here.
- SEO strategy is aligned with the user's intended funnel in source architecture, but full funnel QA still needs checks for every CTA target, internal links, structured data validity, mobile rendering, deployed URLs and Search Console indexing.
- Do not modify homepage or ID Card Print Studio. Continue page-by-page with small branches/PRs, preserve current design, use English keywords for global audience, and update sitemap/Service Worker cache when adding pages/assets.

## 2026-11-10 — BMI expansion: first new feature BMR Calculator (PR #64)

### User's confirmed workflow and design direction
- Do not spend time changing or reworking existing BMI features already present in the toolkit (BMI Prime, Waist-to-Height Ratio, BMI History, Healthy Weight Range, Print Report, Body Fat Calculator).
- Research additional features that can be added to the BMI/health toolkit. Work one feature at a time, not a batch of SEO pages.
- For each new feature: research competitor calculators and Google search intent/keywords; implement and validate the calculator; create one standalone SEO landing page; use the existing BMI main hero banner design as the visual reference for the new feature's landing-page hero; include a direct deep link from that SEO page to the exact feature in the main BMI tool; only then move to the next feature.
- Preserve the existing BMI main page hero exactly. Do not redesign it or unrelated homepage / ID Card Print Studio components.
- User does not want code-review requests; provide plain-language outcomes only. Do not mark physical Android testing complete unless actually performed.

### Research: next feature selection — BMR
- Competitor research indicates common BMR calculators offer Mifflin-St Jeor as the default formula, age/sex/height/weight inputs, and often an optional activity factor to estimate TDEE; some competitors offer formula comparisons and body-fat-dependent Katch-McArdle estimates.
- Selected first new feature: adult BMR Calculator using Mifflin-St Jeor. Keep activity-based TDEE as a clearly separate optional estimate, not confuse it with BMR.
- Formula sources reviewed: Mifflin-St Jeor equation and original study reference; Academy of Nutrition and Dietetics evidence summary; Endotext reference table. Sources: https://mifflinstjeor.com/mifflin-st-jeor-equation/ ; https://www.andeal.org/vault/pq132.pdf ; https://www.endotext.org/wp-content/uploads/pdfs/dietary-treatment-of-obesity.pdf
- Competitor UX reviewed: https://tdee.co/bmr-calculator ; https://www.themifflin.com/bmr-calculator ; https://tdeecalculator.fitness/methodology/
- Keyword clusters to target: BMR calculator, basal metabolic rate calculator, calculate BMR, BMR calculator for men, BMR calculator for women, resting calorie calculator, Mifflin-St Jeor calculator. Search-volume figures are estimates; validate in Google Keyword Planner/Search Console before making volume claims.
- Broader related future opportunities identified from competitor research: TDEE calculator, calorie deficit / maintenance calorie calculator, weight loss calorie calculator, macro calculator, protein calculator, ideal weight calculator, waist-to-hip ratio calculator. Child/teen BMI requires age- and sex-specific percentile reference data and is not an adult BMI formula reuse.

### Implementation branch and PR
- Branch: `feature/bmr-calculator-seo-phase1`
- Draft PR #64: https://github.com/barsulkhan/InfoJano/pull/64
- PR head commit at creation: `118bebb8104ee0f1d84a9bfc3d6101ff4d2db228`.
- Changes on branch: `bmi-toolkit.js`, `bmi.html`, `bmr-calculator.html`, `sw.js`, `sitemap.xml`, `sitemap.txt`.
- Added BMR Calculator entry in BMI Toolkit nav and `bmi.html?tool=bmr` deep link handler.
- BMR uses Mifflin-St Jeor: male = 10×kg + 6.25×cm − 5×age + 5; female = 10×kg + 6.25×cm − 5×age − 161.
- Inputs: equation reference, adult age 18–100, weight 30–300 kg, height 100–250 cm, and optional activity level. Shows BMR and separate activity-adjusted TDEE estimate.
- Created standalone SEO page `bmr-calculator.html`, canonical URL `https://barsulkhan.github.io/InfoJano/bmr-calculator.html`, with a hero based on the existing BMI hero banner markup/design, formula explanation, FAQ, and CTA to `bmi.html?tool=bmr`.
- Added BMR landing page to XML and TXT sitemap; Service Worker precache entry added and cache bumped to `infojano-v275`.
- Existing BMI hero markup and existing BMI features were not intentionally modified.

### Source QA so far
- JavaScript syntax compilation passed.
- Formula spot checks: male age 30, 80 kg, 180 cm = 1,780 kcal/day; female age 30, 65 kg, 165 cm = 1,370.25 kcal/day.
- BMR SEO page canonical and direct CTA were checked; Service Worker precache contains new page; cache reads `infojano-v275`.
- At first combined check, the HTML nav check was performed against a stale fetched copy; a subsequent fresh fetch confirmed the BMR button exists in `bmi.html`.
- PR #64 remains Draft and unmerged. No Pages deployment or live URL validation has been performed for BMR. Do not merge/deploy until full source review and QA; physical Android testing cannot be claimed complete.

### Next actions
1. Re-fetch current branch files and inspect all six changed-file diffs; confirm `data-bmi-tool="bmr"`, JS description/handler, page CTA deep link, XML/TXT sitemap entry, and cache v275.
2. Validate BMR arithmetic/inputs, TDEE activity multipliers and result messaging; consider whether to add unit conversion (lb/in) before finalizing.
3. Review new landing-page hero on mobile/desktop source layout against BMI hero design; keep main BMI hero byte-for-byte unchanged.
4. Validate sitemap XML syntax, page metadata, FAQ structured data if added (only when visible FAQ content matches), and all URLs.
5. Run appropriate checks, then merge and verify Pages deployment + exact live URL before reporting live.
6. Once BMR feature and its one SEO page are complete, research and build the next single new feature. Do not bulk-create unrelated SEO pages.

---

## 2026-11-10 — BMI Toolkit: BMR Calculator completed and merged

### GitHub delivery
- Feature branch: `feature/bmr-calculator-seo-phase1`
- Pull request: https://github.com/barsulkhan/InfoJano/pull/64
- PR #64 merged successfully using squash merge.
- Merge commit: `03356cbd73cd78cb885491fff17835be6f94c6d7`

### Implemented
- Added adult BMR Calculator to BMI Toolkit using Mifflin-St Jeor equation.
- Added BMR Toolkit navigation entry and direct deep-link support: `bmi.html?tool=bmr`.
- Inputs: equation reference (male/female), age 18–100, weight 30–300 kg, height 100–250 cm.
- Optional TDEE estimate using activity multipliers 1.2, 1.375, 1.55, 1.725, 1.9. Added BMR-only mode so TDEE can be skipped.
- Dedicated SEO page: `bmr-calculator.html` with title, meta description, canonical URL, Open Graph metadata, formula explanation, FAQ content and two direct CTAs.
- BMR SEO hero styling now follows the original BMI hero visual system, including neon orbit border, floating illustrations, matching pills and mobile responsive layout. Original BMI hero itself was not edited.
- Added BMR page to `sitemap.xml`, `sitemap.txt` and Service Worker precache.
- Service Worker cache version: `infojano-v275`.

### QA performed
- JavaScript syntax compilation passed after final changes.
- Query routing verified in source: `?tool=bmr` opens BMR panel.
- BMR nav entry and two SEO-page deep links verified.
- SEO title, description, canonical and Open Graph metadata present.
- Hero animation and mobile layout CSS verified; removed conflicting mobile override.
- XML/TXT sitemap entries and Service Worker precache entry verified.
- Mifflin-St Jeor spot-check examples: male 30 years / 80 kg / 180 cm = 1,780 kcal/day; female 30 years / 65 kg / 165 cm = 1,370.25 kcal/day.
- GitHub Actions workflow run list and commit status checks returned no entries. Therefore do not claim CI/Pages deployment succeeded based on Actions evidence.
- Live page access through web verification was unavailable at time of checkpoint. Verify exact live URL and deployment before telling user it is live. No physical Android device test performed.

### Exact intended URLs
- SEO page: https://barsulkhan.github.io/InfoJano/bmr-calculator.html
- Main BMI page with BMR tool opened: https://barsulkhan.github.io/InfoJano/bmi.html?tool=bmr

### Next work
- Confirm GitHub Pages deployment/live URLs and mobile rendering when verifiable.
- Once BMR live verification is complete, research and build the next single feature (likely TDEE Calculator) with its own standalone SEO page. Continue one feature at a time; do not change homepage, ID Card Print Studio or existing BMI tools without explicit permission.

---

## 2026-11-10 — InfoJano Domain Purchase Record (Screenshot Verified)

- Domain purchased: `infojano.com`
- Registrar / purchase website: Spaceship (`spaceship.com`)
- Order date shown on purchase confirmation: November 10, 2026
- Registration term: 1 year
- Order total shown: USD $9.68 (subtotal $10.58, savings/discount $0.90)
- Free domain privacy: Included
- Auto-renew: ON at time of screenshot; confirm whether user wants to keep this enabled.
- Screenshot indicates the domain order was completed (“Made it! You're ready to unbox and get set up”).
- Important: final INR amount actually charged by bank/card is not visible in this screenshot. Do not record a rupee amount until user provides receipt/payment statement. The screenshot shows USD $9.68, not INR.
- Hosting/website builder/email trial offers shown on the page are optional add-ons; screenshot does not establish that the user purchased them. Do not assume any hosting or email plan was purchased.
- Order ID visible in screenshot: partially visible; do not transcribe/store the full order ID from this image.

### Information still needed to complete domain record
1. Actual INR amount debited (or bank/card transaction screenshot with sensitive card/account details hidden).
2. Confirm whether auto-renew should remain ON or be turned OFF.
3. Confirm whether any optional hosting, email, or website-builder add-on was separately purchased (the screenshot only shows offers to add trials).
4. If available, provide the Spaceship receipt/invoice PDF or email confirmation for exact payment/tax details. Never share passwords, OTPs, or full card details.

### User workflow instruction
For this active InfoJano workstream, assume follow-up work refers to the current InfoJano app/tool unless the user explicitly switches context. The user will open a separate new chat when starting work on another app; do not mix other app projects into the active InfoJano task.

### Domain payment amount update — 2026-11-10 (SBI SMS verified)
- Bank debit confirmed by SBI transaction SMS: INR 930.00.
- Transaction date/time: 10 November 2026, 20:06:39 IST.
- Payment method: SBI Debit Card (last four digits 1290, as shown in SMS).
- Spaceship invoice final cost: USD $9.68; subtotal USD $10.58; discount USD $0.90.
- The INR 930 bank debit is the actual charged amount to use in the project expense record; USD $9.68 is the invoice currency amount.
- Security: do not store the full transaction number, card details, account balance, phone number, or other unnecessary personal data from the SMS.
- Registrar: Spaceship; domain `infojano.com`; 1-year registration; invoice dated 10 November 2026; free privacy included.
- Auto-renew was shown ON in the purchase confirmation screenshot. User has not yet confirmed whether to keep it ON or turn it OFF.
- No hosting, email, or website-builder add-on purchase has been confirmed; the screenshots showed optional offers only.

---

## 2026-11-11 — Custom domain, logo and AdSense checkpoint; root-path migration audit

### User-confirmed current state
- Custom domain: `infojano.com`, purchased from Spaceship; DNS configuration completed.
- GitHub Pages custom-domain DNS check reported successful; HTTPS enabled.
- Logo fix PR #65 merged.
- Existing AdSense account connected by PR #66; Google site review is pending.
- Ads are NOT active yet. PR #66 only adds the AdSense publisher loader script to the homepage head; no ad units or Auto ads were enabled by that PR.

### GitHub verification (11 Nov 2026)
- Repository: `barsulkhan/InfoJano`, default branch `main`.
- PR #65 `Fix homepage logo path for custom domain`: merged; merge commit `bd873f80f04eb14a31f2be5935ffaacf4a42487a`. It changes the favicon and logo image paths from `/InfoJano/infojano-mark.svg` to `/infojano-mark.svg`. It does NOT change the homepage link `href="/InfoJano/"`.
- PR #66 `Add AdSense code for InfoJano site verification`: merged; merge commit `d058478d60451e29e05cfe1fb38c09922e7ae6a5`. It adds the existing publisher loader script for publisher `ca-pub-2908196513377151`; no ad placements/units were added.
- Latest `main` commit observed: `d058478d60451e29e05cfe1fb38c09922e7ae6a5`.
- GitHub Pages deployment run `42847487820` for commit `d058478d` completed `success` on 10 Nov 2026.
- APK build run `42847490153` for commit `d058478d` completed `success` on 10 Nov 2026.
- `CNAME` file content is `infojano.com`.
- Current `sw.js` cache is `infojano-v275` (verified from main source). Do not bump cache unless service-worker assets/logic are actually changed.

### Critical finding — incomplete migration from GitHub project path to custom-domain root
The source audit found many remaining `/InfoJano/` and `barsulkhan.github.io/InfoJano/` references. PR #65 fixed only the logo and favicon image URLs, not the site-wide base path. Examples verified in `main` at commit `d058478d`:
- `index.html`: manifest link still `/InfoJano/manifest.json`; canonical and Open Graph URLs still use `https://barsulkhan.github.io/InfoJano/`; homepage logo/home link still points to `/InfoJano/`; scripts still load from `/InfoJano/`.
- `manifest.json`: `id`, `start_url`, `scope` and icon paths still use `/InfoJano/`.
- `install.js`: registers `/InfoJano/sw.js` with `/InfoJano/` scope and loads helper scripts from `/InfoJano/`.
- `site-header.js`: shared navigation root remains `/InfoJano/`.
- `sw.js`: `HOME` and all precache paths still use `/InfoJano/`.
- `robots.txt` and `sitemap.xml`: sitemap directive and all sitemap URLs still use `https://barsulkhan.github.io/InfoJano/...`.
- Tool-specific web manifests (including BMI, EMI, Age, QR Maker, PDF converter, and others) still use `/InfoJano/` in their IDs, start URLs and scopes.
- GitHub code search also found old `/InfoJano/` internal links in `404.html`, PDF/Word tool pages, Document Studio and other pages. This is a site-wide migration issue, not only a homepage logo issue.

### Next priority — do not start unrelated feature work before this is resolved
1. Perform a complete, inventory-based migration audit for the custom-domain root. Include all HTML, CSS, JS, JSON, webmanifest, robots, sitemap, redirects and PWA/service-worker paths. Separate intentional legacy GitHub Pages URLs from active runtime references.
2. Prepare a dedicated branch/PR to migrate active site URLs to `https://infojano.com/` and root-relative paths, while preserving every tool's behavior and existing SEO content. Do not perform blind replacements inside unrelated historical notes/backups.
3. Update canonical URLs, Open Graph/Twitter URLs, JSON-LD site URLs, sitemap XML/TXT, robots.txt, main and tool-specific manifests, shared navigation, script paths, 404 fallback, service-worker HOME/ASSETS and cache version consistently.
4. Verify every referenced local asset/path exists in the repository; validate JSON/webmanifest/XML, check duplicate/incorrect paths, and verify internal links and deep links. Preserve homepage design, all calculators, QR Toolkit, Image Resizer, BMI/BMR, and ID Card Print Studio code/behavior.
5. Confirm GitHub Pages deploy success and test exact custom-domain URLs after deployment. Verify PWA installability and service-worker registration/scope on `infojano.com`; real Android install/offline checks remain a separate device-side test.
6. Verify Google AdSense site-review status separately. Keep ads disabled until Google approves the site and the exact `ads.txt` publisher record/placement plan is confirmed. Do not invent or add ad units.
7. Once the custom-domain migration is complete and verified, resume the existing BMI roadmap from the BMR/TDEE checkpoint; do not repeat PR #65 or #66.

### Verification limitation
- Direct live-domain retrieval through the current web viewer was unavailable during this audit, so no claim is made that the logo, custom-domain homepage, manifest, sitemap, or tool URLs were visually/HTTP tested in a browser during this turn.
- GitHub Pages workflow success confirms deployment job completion, not that all custom-domain paths resolve correctly.

---

## 2026-11-11 — Percentage Calculator competitor research and upgrade plan

### Existing InfoJano source audit (main branch)
- `percentage.html` already exists as a basic SEO-enabled calculator page; do NOT create a duplicate generic percentage-calculator URL without a distinct search intent.
- Existing page title: `Percentage Calculator Online – Find Any Percentage | InfoJano`; current description targets finding X% of a value and what percentage one number is of another.
- Current calculator supports only two modes: (1) find X% of a number; (2) find what percent one number is of another.
- Current page has a basic H1, brief explanation, simple form, short formula/example, three FAQ items, related-tool links, WebApplication and FAQPage JSON-LD. It does not currently present a dedicated designed hero banner.
- Existing separate `percentage-change.html` targets percentage increase/decrease with its own title/canonical and formula. Keep its distinct intent and avoid duplicating its core content in the generic page.
- Current generic percentage page still has old GitHub Pages canonical/OG/hreflang URLs and `/InfoJano/` manifest/script/header paths. These are part of the wider custom-domain root migration; do not make isolated live-path edits that conflict with the migration.

### Competitor / SERP feature research
Reviewed public search results and competitor pages on 11 Nov 2026:
- Omni Calculator: four core modes — percentage of a value, what percent X is of Y, reverse percentage (X is P% of what), and increase/decrease by a percentage. It pairs the calculator with detailed explanations, worked examples and FAQs. Source: https://www.omnicalculator.com/math/percentage
- RapidTables: percent of a value, X as a percentage of Y, reverse whole-value calculation, percentage change, plus fraction/decimal/percent conversion. Sources: https://www.rapidtables.com/calc/math/percentage-calculator.html and https://www.rapidtables.com/calc/math/Percentage_Calculator.html
- W3Schools: four modes, instant updates while typing, visible formula/workings, and browser-local calculations. Source: https://www.w3schools.com/tools/tool_percentage_calculator.php
- Calcist: five modes, adding reverse percentage and percentage difference, live results, copy result and shareable result link, with local processing. Source: https://calcist.com/percentage-calculator/
- Calculator Junction: six modes including percentage of a number, part/whole, reverse percentage, percentage change, percentage difference, and marks/score percentage with grade/progress/target score. Source: https://www.calculatorjunction.com/percentage-calculator
- Even Figures: formula and assumptions shown, related-result table, CSV export, browser-only calculation. Source: https://evenfigures.com/percentage/
- Pearson: percentage increase/decrease with inverse solving for original/new/percentage, summary table, steps, mini chart, gauge and repeated percentage increase. Source: https://www.pearson.com/channels/calculators/percentage-increase-calculator
- Omni's documentation highlights multi-way inputs/outputs, share result, clear/reload, saved inputs, units, and explanatory calculator articles. Source: https://www.omnicalculator.com/reports/documentation

### Keyword and search-intent map (qualitative; no search-volume claims)
- Primary: `percentage calculator`, `percentage calculator online`, `percent calculator` — broad informational + transactional/tool intent.
- Core secondary: `what is X percent of Y`, `calculate percentage of a number`, `X is what percent of Y`, `percentage of a number calculator`, `find percentage` — basic calculation intent.
- Reverse: `reverse percentage calculator`, `X is P percent of what`, `find original number from percentage` — inverse calculation intent.
- Comparison/change: `percentage change calculator`, `percentage increase calculator`, `percentage decrease calculator`, `percentage difference calculator` — compare two values; keep percentage-change page distinct and link between them.
- Education/use cases: `percentage calculator for marks`, `exam marks percentage calculator`, `test score percentage`, `percentage formula`, `how to calculate percentage`, `percent to fraction`, `percent to decimal` — study/learning and conversion intent.
- Commerce/business: `discount percentage calculator`, `price increase calculator`, `markup percentage calculator`, `profit margin percentage calculator`, `tax percentage calculator`, `tip percentage calculator` — use-case intent; route specialist intents to existing Discount/GST/other tools rather than stuffing all into one page.
- Actual monthly volume, competition scores and keyword difficulty were not obtained from Google Keyword Planner/Search Console in this research. Validate priorities later using Search Console query impressions/clicks and a keyword-data source; treat the above as SERP-derived query themes, not volume-ranked keywords.

### Recommended product upgrades (prioritised)
P0 — essential competitive parity:
1. Add mode: `X is P% of what?` (reverse percentage).
2. Add mode: increase/decrease a number by a percentage, showing both new value and absolute amount changed.
3. Add mode: percentage change from old value to new value (link to dedicated page; decide whether to keep a compact mode in the hub or route to the specialist page).
4. Add mode: percentage difference between two values using the average as denominator; clearly distinguish it from percentage change.
5. Live calculation as values are typed, visible formula with substituted values, step-by-step working, copy result, reset/clear, sensible precision controls.
6. Robust zero/negative/decimal validation and plain-language edge-case messages; avoid division-by-zero and clearly explain percentage change from zero is undefined.

P1 — meaningful differentiators:
7. Marks/score mode: marks obtained / total marks, percentage, marks lost, optional target percentage and marks still needed; grade bands only if user-configurable or based on a clearly stated grading scale.
8. Quick presets/examples (10%, 15%, 18%, 20%, 25%, 50%, 75%) and sample scenarios.
9. Shareable calculation URL (encode only calculation values/mode in query parameters; no personal data), plus copy result including formula.
10. Result comparison mini table or simple bar/progress visual; accessible, mobile-first, no chart bloat.
11. Percent ↔ decimal ↔ fraction conversion as an optional compact utility, if it does not overcrowd the main calculator.
12. Optional CSV export only if users have a real multi-row use case; not a P0 requirement.

### Proposed SEO / hero design direction
- Upgrade the existing `percentage.html` landing page instead of creating a duplicate generic page. Keep `percentage-change.html` as its separate search-intent page.
- Hero: premium InfoJano visual style, prominent `Percentage Calculator` H1, concise value proposition, subtle animated percent symbol / numerical transformation motif, clear tool CTA and small benefit labels (Free, instant results, browser-based only if implementation confirms local processing).
- Place the calculator near the top, ideally integrated with a clearly labelled mode selector and compact result panel; keep mobile inputs and buttons thumb-friendly.
- Below calculator: short mode guide, formulas with worked examples, common use cases, comparison of percentage change vs percentage difference, FAQs matching visible content, and related internal links to Discount, GST, Percentage Change and relevant calculators.
- Proposed title: `Percentage Calculator – Find Any Percent, Increase & Decrease | InfoJano` (refine to avoid promising modes until implemented).
- Proposed description: `Calculate a percentage of a number, find what percent one value is of another, reverse percentages, and work out percentage changes with clear formulas and step-by-step results.` (use only after these modes exist).
- Add page-specific WebApplication structured data and FAQPage only when visible FAQ text matches exactly. Structured data does not guarantee rich results.

### Google guidance and limitations
- Google recommends descriptive, concise page titles and warns against keyword stuffing; Google may generate title links from title, H1, prominent content and links. Source: https://developers.google.com/search/docs/appearance/title-link
- Google recommends helpful, original, people-first content rather than pages created mainly to attract search traffic. Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google says crawlable, contextual internal links help users and discovery; avoid stuffing keywords into anchor text. Source: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- This is qualitative competitor/keyword research, not measured search volume or a ranking forecast. No code changes, PR, deployment, or live visual test were performed in this research step.

### Execution order / project constraints
1. Complete and verify the custom-domain root migration first, as previously prioritised in this master file; then use `https://infojano.com/` for canonical, OG, manifest and runtime paths.
2. Create a dedicated feature branch for the Percentage Calculator enhancement; inspect all current source and tests first.
3. Implement P0 modes and formula/edge-case QA before visual polish; then build the premium hero and mobile responsive layout.
4. Upgrade the existing `percentage.html` SEO landing page, do not create a duplicate generic page. Keep the separate `percentage-change.html` intent and existing Discount/GST pages distinct.
5. Validate calculations against known examples and edge cases, run JS/HTML/JSON-LD validation, check internal links and manifests, then request review before merge/deploy according to project approval rules.
6. Update Service Worker cache sequentially only if cached files change; verify cache paths and version.
7. Add this work to the master file and verify GitHub Pages deployment/live URLs only after a successful deployment.

---

## 2026-11-11 — Percentage Calculator: 17 SEO page hero standardisation and handoff

### User-approved visual direction and constraints
- User asked that all 17 dedicated Percentage Calculator SEO landing pages use the same hero banner design as the main Percentage Calculator page (`percentage.html`).
- Preserve the approved main Percentage Calculator hero as the visual reference. The SEO pages should match its layout, proportions, typography, hero illustration/visual, buttons and overall styling consistently.
- User specifically reviewed the New Life neon border animation and requested it to match the Currency Converter reference, with the neon glow slightly outside the hero edge rather than appearing to travel inside the banner.
- User also requested the left-to-right text light-sweep effect (12-second sweep, as in the approved hero styling).
- The tagline `Smart Tools for Everyday Life` must remain visible in the shared site header; do not omit it on any page.
- Keep the hero height/proportions aligned with the approved main Percentage Calculator hero. Hero contents/illustration should remain proportionate and not oversized.
- Breadcrumb `InfoJano Home > [page name]` should align to the left edge of the hero banner; remove any stray extra line/underline below the hero and align neon border corners with the hero's exact edges.
- User explicitly said to remove Quick Percentage / quick preset calculation buttons or prefilled quick-calculation shortcuts from the main calculator UI; users should enter values themselves. Do not reintroduce these controls without permission.
- Do not change unrelated calculator logic, SEO copy, homepage, header, or ID Card Print Studio.

### PR #85 implementation status (reported in conversation; recheck source if further edits are requested)
- PR #85: https://github.com/barsulkhan/InfoJano/pull/85
- User was told PR #85 merged and GitHub Pages deployment succeeded.
- The reported change was to standardise the hero banners across all 17 Percentage Calculator SEO pages to match the main Percentage Calculator page, including neon/New Life styling and the left-to-right text light sweep.
- The exact merge commit, workflow run ID, individual changed-file list and independent direct-live visual/HTTP checks were not captured in the available handoff. Do not invent them; retrieve PR #85 and Actions details from GitHub before relying on them.
- User was told the separate APK build workflow had failed; this is independent of the successful Pages deployment and must not be described as a website deployment failure.

### The 17 Percentage Calculator SEO pages
1. `percent-of-number-calculator.html`
2. `what-percent-calculator.html`
3. `reverse-percentage-calculator.html`
4. `percentage-increase-calculator.html`
5. `percentage-decrease-calculator.html`
6. `percentage-difference-calculator.html`
7. `increase-decrease-by-percentage-calculator.html`
8. `original-price-before-discount-calculator.html`
9. `profit-loss-percentage-calculator.html`
10. `exam-marks-percentage-calculator.html`
11. `target-marks-calculator.html`
12. `percentage-of-percentage-calculator.html`
13. `repeated-percentage-change-calculator.html`
14. `successive-percentage-change-calculator.html`
15. `percentage-to-decimal-converter.html`
16. `percentage-to-fraction-converter.html`
17. `remove-gst-from-total-calculator.html`

### Related prior SEO work
- PR #76: https://github.com/barsulkhan/InfoJano/pull/76 — reported merged successfully.
- PR #76 optimized all 17 percentage SEO pages for short keywords and natural-language search queries; added unique title/meta descriptions, OG/Twitter metadata, page-specific H1/intro/guides/formulas/examples, three FAQs per page with matching FAQ structured data, and retained canonical URLs and CTA links.
- PR #76 also reportedly updated Service Worker cache from `infojano-v276` to `infojano-v277` and added the 17 pages to precache. Verify current `sw.js` before assuming cache version.
- PR #75: https://github.com/barsulkhan/InfoJano/pull/75 — reported merged; connects SEO-page CTAs to the main Percentage Calculator with correct mode query parameters.
- Main Percentage Calculator: https://infojano.com/percentage.html

### Resume QA — first task next time
1. Read this Master Project file first.
2. Fetch PR #85 from GitHub and confirm merged state, merge commit, changed files and exact hero CSS/HTML changes.
3. Check the GitHub Pages deployment workflow associated with the PR #85 merge commit; confirm the deploy job succeeded.
4. Inspect all 17 exact live URLs on `https://infojano.com/` and verify each hero visually/content-wise; do not claim independent visual QA unless actually performed.
5. Confirm the neon/New Life glow sits just outside the hero edge, follows the Currency Converter reference, and does not create an unwanted extra underline/line below the banner.
6. Confirm left-to-right title light sweep, site-header tagline, breadcrumb alignment, hero height, mobile responsiveness and proportional hero contents.
7. Confirm Quick Percentage presets/shortcuts remain removed from the main calculator as requested; do not add sample/pre-filled calculations.
8. Confirm the 17 pages' SEO metadata, FAQ content/schema, canonical URLs and CTA deep links remain intact.
9. Recheck `sw.js` cache version and precache entries from current `main`; do not rely on old notes.
10. Keep APK build status separate from GitHub Pages deployment status.

### New-chat handoff prompt (copy/paste)
"InfoJano কাজ আবার শুরু করো। প্রথমে Library-র `/Website Control Center/04_InfoJano_Master.md` সম্পূর্ণ পড়বে। সর্বশেষ কাজ Percentage Calculator-এর ১৭টি SEO পেজে main Percentage Calculator-এর মতো একই Hero Banner standardise করা; PR #85 merge এবং GitHub Pages deployment success বলে জানানো হয়েছিল, কিন্তু পরের ধাপে GitHub থেকে PR #85, merge commit ও Pages deployment নিজে recheck করবে। এরপর ১৭টি live page-এর hero, Currency Converter-এর মতো New Life neon glow (hero edge-এর সামান্য বাইরে), বাম থেকে ডানে 12-second text light sweep, header tagline `Smart Tools for Everyday Life`, breadcrumb alignment এবং stray bottom line QA করবে। Main Percentage Calculator থেকে Quick Percentage presets/shortcuts সরানোর নির্দেশ আছে—এগুলো ফিরিয়ে আনবে না; মানুষ নিজেরা সংখ্যা লিখবে। কোনো unrelated design, homepage, header বা ID Card Print Studio পরিবর্তন করবে না। আগে যাচাই, তারপর প্রয়োজন হলে ছোট safe fix; live deployment নিশ্চিত না করে success বলবে না।"


## 2026-11-11 — Percentage Calculator 17-page Hero QA, PR #86 merge and Pages deployment

### User authorization and PR #86
- User explicitly authorized merge of PR #86 and requested final GitHub Pages deployment + 17-page QA.
- PR #86: https://github.com/barsulkhan/InfoJano/pull/86
- Purpose: fix the only source-level exception found in the 17-page audit: `remove-gst-from-total-calculator.html` lacked the breadcrumb and used a narrow `.wrap` container unlike the other percentage SEO pages.
- Change limited to that one file: added left-aligned `InfoJano Home > Percentage Tools > Remove GST from Total Calculator` breadcrumb and widened/standardised `.wrap` to 1200px with mobile-safe side padding. Existing hero CSS/markup, calculator logic, SEO metadata, schema and FAQ were retained.
- PR #86 squash-merged successfully. Merge commit: `f7bf892dc8170c541329f8975ea7883753a94565`.
- PR #86 changed exactly one file (2 additions, 1 deletion). No homepage, shared header, main Percentage Calculator, unrelated calculators, or ID Card Print Studio files were changed.

### GitHub Pages deployment
- Pages workflow run: `43025341857` (run #2058).
- Commit: `f7bf892dc8170c541329f8975ea7883753a94565`.
- Final result: `completed / success`.
- Jobs `build`, `deploy`, and `report-build-status` all completed successfully.
- Run URL: https://github.com/barsulkhan/InfoJano/actions/runs/43025341857
- APK build workflow is separate and must not be conflated with Pages deployment.

### Main-branch source QA after PR #86 merge
All 17 pages were fetched from `main` after merge and source-checked:
- All 17 contain exactly one `.ij-master-hero.ij-unified-currency-hero` hero section.
- All 17 have a left breadcrumb (`.crumb`) and load `site-header.js`.
- All 17 contain New Life/neon animation (`ijPercentageNewLife`, 8-second animation declaration), 12-second title light sweep (`ijPercentageTitleSweep`), and 12-second pill sweep (`ijPercentagePillSweep`).
- All 17 include mobile CSS breakpoint at max-width 600px.
- All 17 include calculator and formula CTA anchors.
- Quick preset buttons are absent from all 17 SEO page markup; the main `percentage.html` also has no quick preset button markup. Some legacy styling/helper references remain in the main page source but are not rendered as preset buttons; do not re-add any preset controls.
- Shared `site-header.js` contains the required tagline `Smart Tools for Everyday Life`.
- The 17 SEO hero style blocks are effectively the same. One page has a harmless newline-only formatting difference; the reverse-GST page has its required `.wrap` layout override. No visual screenshot comparison was possible in this environment.

### Direct live URL / visual verification limitation
- Attempts to open the 17 `https://infojano.com/...` URLs through the web viewer failed with host inaccessible/internal error. Direct HTTP requests also failed because DNS resolution was unavailable in the execution environment.
- Therefore: GitHub Pages workflow deployment is confirmed successful and source-level QA is complete, but direct live HTTP/visual browser QA and real Android mobile interaction are NOT confirmed. Do not claim that the 17 live pages were visually inspected.
- User can open the links from the chat on Android; if stale cached styling appears, perform a hard refresh / clear site data only if needed. Do not change Service Worker cache version without checking current `sw.js` and whether any cached assets actually changed.

### Exact 17 live URLs
1. https://infojano.com/exam-marks-percentage-calculator.html
2. https://infojano.com/increase-decrease-by-percentage-calculator.html
3. https://infojano.com/original-price-before-discount-calculator.html
4. https://infojano.com/percent-of-number-calculator.html
5. https://infojano.com/percentage-decrease-calculator.html
6. https://infojano.com/percentage-difference-calculator.html
7. https://infojano.com/percentage-increase-calculator.html
8. https://infojano.com/percentage-of-percentage-calculator.html
9. https://infojano.com/percentage-to-decimal-converter.html
10. https://infojano.com/percentage-to-fraction-converter.html
11. https://infojano.com/profit-loss-percentage-calculator.html
12. https://infojano.com/remove-gst-from-total-calculator.html
13. https://infojano.com/repeated-percentage-change-calculator.html
14. https://infojano.com/reverse-percentage-calculator.html
15. https://infojano.com/successive-percentage-change-calculator.html
16. https://infojano.com/target-marks-calculator.html
17. https://infojano.com/what-percent-calculator.html

### Next exact task
- Ask user to open the 17 links on Android (or a representative set plus the reverse-GST page) and confirm hero visuals, header tagline, breadcrumb alignment, light sweep/neon effect and mobile layout. Record device-side results separately from source QA.
- Do not change unrelated pages/designs. Do not reintroduce Quick Percentage presets.

## 11 November 2026 — Percentage Calculator 17 SEO pages: PR #86 merged and Pages deployed

### PR #86 — GST page alignment fix
- User explicitly authorised merge and deployment on 11 Nov 2026.
- PR #86: https://github.com/barsulkhan/InfoJano/pull/86 — closed and merged.
- Merge commit: `f7bf892dc8170c541329f8975ea7883753a94565` (2026-11-11 13:01:06 UTC).
- PR changed only `remove-gst-from-total-calculator.html` (one file). Added the missing breadcrumb `InfoJano Home > Percentage Tools > Remove GST from Total Calculator` and aligned the `.wrap` container to max-width 1200px with 16px side padding. Calculator logic and hero content were not changed.

### GitHub Pages deployment
- Pages workflow run: https://github.com/barsulkhan/InfoJano/actions/runs/43025341857
- Run ID `43025341857`, merge commit `f7bf892...`; completed with `success`.
- Jobs `build`, `deploy`, and `report-build-status` all completed successfully.
- Separate APK workflow run `43025342395` failed. This is unrelated to GitHub Pages; do not describe it as a website deployment failure.

### Final source QA of the 17 Percentage Calculator SEO pages
- Checked the 17 page source files on `main` after the merge. All 17 contain one main-style Percentage hero, the shared `site-header.js`, New Life neon keyframe, 12-second title and pill sweep keyframes, and mobile breakpoint CSS (`max-width:600px`).
- Breadcrumb present on all 17 after PR #86; GST page exception corrected.
- Confirmed `site-header.js` still contains the tagline `Smart Tools for Everyday Life`.
- Confirmed quick preset button markup is absent from the 17 SEO pages. Do not reintroduce Quick Percentage preset buttons on the main calculator; no calculator logic or preset-related helper cleanup was part of PR #86.
- `sw.js` currently reports cache `infojano-v277` (checked on main). No cache change was made in PR #86 because the modified GST HTML is not recorded as a cache-version change in this PR; re-audit precache policy if future asset changes occur.
- GST source after merge: breadcrumb present, wrapper max-width 1200px, exactly one hero.

### Visual/live verification limitation
- GitHub Pages deployment job success is confirmed. Direct live HTTP/rendered visual inspection and real Android viewport testing could not be independently completed in this environment. Therefore neon position just outside the hero edge, exact breadcrumb pixel alignment, stray bottom-line absence and mobile appearance are source-checked but not visually certified on a real device. Ask user to inspect on Android after refresh if visual confirmation is needed.

### Exact 17 Percentage SEO page URLs
1. https://infojano.com/percent-of-number-calculator.html
2. https://infojano.com/what-percent-calculator.html
3. https://infojano.com/reverse-percentage-calculator.html
4. https://infojano.com/percentage-increase-calculator.html
5. https://infojano.com/percentage-decrease-calculator.html
6. https://infojano.com/percentage-difference-calculator.html
7. https://infojano.com/increase-decrease-by-percentage-calculator.html
8. https://infojano.com/original-price-before-discount-calculator.html
9. https://infojano.com/profit-loss-percentage-calculator.html
10. https://infojano.com/exam-marks-percentage-calculator.html
11. https://infojano.com/target-marks-calculator.html
12. https://infojano.com/percentage-of-percentage-calculator.html
13. https://infojano.com/repeated-percentage-change-calculator.html
14. https://infojano.com/successive-percentage-change-calculator.html
15. https://infojano.com/percentage-to-decimal-converter.html
16. https://infojano.com/percentage-to-fraction-converter.html
17. https://infojano.com/remove-gst-from-total-calculator.html

### Scope protection
- No changes to homepage, shared header, main Percentage Calculator, other calculators, or ID Card Print Studio in PR #86.
- Continue to distinguish GitHub Pages workflow success from APK workflow failure and from direct browser/device visual verification.


---

## 11 November 2026 — Full HTML SEO metadata audit: PR #91 OPEN / handoff checkpoint

### User instruction
User requested that all remaining HTML audit work be handled together, then explicitly asked for a complete remaining-task checklist, all errors/lessons/problems to be documented in this main Master Project file, and a ready-to-copy new-chat handoff. This section is the authoritative continuation checkpoint. Do not lose this task when starting a new chat.

### Current GitHub status — important
- Repository: https://github.com/barsulkhan/InfoJano
- Live custom domain: https://infojano.com/
- PR #91: https://github.com/barsulkhan/InfoJano/pull/91
- Branch: `fix/full-html-seo-metadata-audit-2026-11-11`
- PR title: `Repair malformed SEO metadata across HTML pages`
- Latest verified PR state: OPEN, NOT MERGED. Latest head SHA: `118dd2605f00d97eaa721a0072322d6e359316f5`.
- Latest PR statistics at the last check: 75 files changed, 148 additions, 147 deletions.
- Latest API result reported `mergeable: false`; no Pages workflow run was returned for the latest head SHA. Do not merge until the reason for mergeability=false is diagnosed and all patch/source QA passes.
- No live deployment of PR #91 changes has happened. The current live site remains on the last successfully deployed main commit until a future merge/deploy is verified.
- PR #91 was originally opened with 66 files and 130 additions/130 deletions. Follow-on corrections expanded it to 75 files. The user has NOT authorized merging PR #91 yet.

### Work already performed on PR #91 branch
- Removed accidental `$3` suffix corruption from canonical and Open Graph URL tags across the original affected pages.
- IMPORTANT discovery: the initial cleanup removed `$3` but also accidentally removed the closing `">` from a number of tags. This was caught by inspecting actual patch output. Many affected files have since been repaired on the PR branch by restoring complete tags.
- Fixed additional files on PR branch:
  - `google-maps-location-qr-code-generator.html`: malformed canonical and OG URL tags repaired.
  - `passport-id-photo-resizer.html`: canonical/OG references moved to custom domain; old GitHub Pages domain references in logo/image/script URLs also replaced with `https://infojano.com/`.
  - `image-resizer.html`: favicon path corrected from `/InfoJano/infojano-mark.svg` to `/infojano-mark.svg`.
  - `percentage-to-decimal-converter.html` and `percentage-to-fraction-converter.html`: missing favicon link added.
  - `word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html`: page-specific canonical URLs changed from `word-converter.html` to each alias page's own URL. These pages are `noindex,follow`; inspect redirect/canonical strategy carefully before deciding if this is the correct long-term treatment. Do not index thin/duplicate alias pages without a reason.
  - `remove-gst-from-total-calculator.html`: malformed canonical tag fixed on PR branch; this file needs re-fetch and verification because an earlier first attempt did not complete, then a later branch update was recorded at commit `99cb26f3c641d853770734cf71a06c4bfd025ec8`.
- PR branch changes after original creation include follow-on metadata repairs; latest head SHA is listed above.
- `id-card-print-studio.html` was not part of PR #91's changed-file list. It remains protected and must never be edited without explicit user permission.
- Homepage `index.html` is not part of the intended changes; no homepage design or icons were changed.

### Audit scope / current inventory
- `main` root contains 89 HTML files (tree audit performed 11 Nov 2026).
- Special files and exceptions:
  - `404.html`: `noindex,follow`; canonical/OG omission is acceptable if intentionally configured as a 404 page. Do not force indexable metadata.
  - `google4a4795e5c7c03eae.html`: Google verification file; do not add ordinary SEO metadata or alter its verification token.
  - `id-card-print-studio.html`: protected page; excluded from PR #91 and all future unrelated changes.
  - `index.html`: homepage canonical/OG point to `https://infojano.com/`; do not change design/layout.
  - `word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html`: `noindex,follow`; keep excluded from sitemap/indexing unless a clear product/SEO decision says otherwise.
- `qr-choice.html`, `qr-maker.html`, `qr-scanner.html` had duplicate favicon declarations. Likely harmless but can be simplified only if safe and consistent; not a blocker.
- `remove-gst-from-total-calculator.html` was identified as malformed on `main` during audit and corrected on PR branch; verify latest branch source.

### Known remaining issues / TODO checklist — do not mark complete until verified

#### A. PR #91 correctness and GitHub mergeability
- [ ] Fetch PR #91 latest details and exact changed-file list; confirm latest head SHA.
- [ ] Diagnose `mergeable:false` (check branch protection, conflict status, merge state, API error details). Do not force merge.
- [ ] Fetch and inspect full PR patch. Confirm only intended SEO metadata corrections; no broad content/layout/JS changes or unintended file rewrites.
- [ ] Specifically verify that all canonical tags end in a valid `">` and are followed by a newline/next tag; no `<meta>` tag accidentally swallowed into canonical href.
- [ ] Specifically verify all `og:url` tags end in `">` and are not concatenated with adjacent tags.
- [ ] Search all changed files for literal `$3` in canonical/OG tags.
- [ ] Verify `remove-gst-from-total-calculator.html` canonical has no `$3` and is syntactically closed.
- [ ] Check duplicate canonical and duplicate `og:url` count (one each for indexable pages, unless documented exception).
- [ ] Confirm PR #91 changed-file list does NOT include `index.html` or `id-card-print-studio.html`.
- [ ] Run HTML parser/validator or robust source regex QA across all 89 root HTML files, not only a handful of samples.
- [ ] Only after PR diff and source QA are clean, report PR ready for user approval. Do NOT merge without explicit approval.

#### B. Complete all-89-page metadata inventory
- [ ] Re-fetch every root HTML file from the latest PR branch (or main + PR overlay) and build a structured report: canonical count/URL, `og:url` count/URL, robots directive, favicon count/path, legacy-domain reference count, `$3` count, and parse errors.
- [ ] For every indexable page (`index,follow` or no robots meta), confirm canonical and OG URL are correct for the custom domain and match the intended canonical page.
- [ ] For pages with no robots meta, treat as indexable by default unless other evidence indicates otherwise.
- [ ] For noindex/redirect/verification pages, document the exception instead of blindly adding canonical/OG tags.
- [ ] Check all `rel=icon`/shortcut icon paths resolve to a real asset. Use custom-domain root paths for the custom domain, not GitHub Pages `/InfoJano/` paths.
- [ ] Check missing favicon gaps beyond the two percentage converters already fixed.
- [ ] Review duplicate favicon declarations on QR pages; remove duplicates only if safe and consistent.
- [ ] Search for legacy `https://barsulkhan.github.io/InfoJano/` references in canonical, OG, twitter image, JSON-LD URLs, script/style links and runtime URLs. Classify each occurrence; update only when a live custom-domain path is correct. Do not blindly replace arbitrary references.
- [ ] Inspect any legacy references still found in `passport-id-photo-resizer.html` after branch change; previous source sample showed old GitHub Pages references in `og:image`, `twitter:image`, JSON-LD WebSite URL, `site-header.js` and `install.js`. The latest branch commit attempted a global base-domain replacement in this file; verify all references are gone and asset paths are valid.
- [ ] Check `resize-image-by-percentage.html`, `resize-image-for-website.html`, `resize-image-to-pixels.html`, `social-media-image-resizer.html`, `print-document-image-resizer.html` and all other resizer pages for canonical/OG consistency with custom domain.
- [ ] Confirm no accidental canonical changes on intentionally redirected aliases. Word aliases are noindex; verify actual redirect/duplicate content strategy before changing their canonical policy again.
- [ ] Confirm sitemap only contains intended indexable canonical URLs and does not include noindex alias pages or verification/404 pages.

#### C. Validation / deployment after approval
- [ ] Validate HTML parseability for all 89 files; validate JSON-LD blocks are parseable JSON and URL fields use the intended custom domain.
- [ ] Validate favicon URLs and key asset URLs exist in repository tree.
- [ ] Validate robots.txt and sitemap consistency separately; do not infer sitemap fetch status from HTML audit.
- [ ] After explicit user approval, merge PR #91 using squash with expected latest head SHA.
- [ ] Fetch Pages workflow for the merge commit and confirm `build`, `deploy`, and report jobs succeed.
- [ ] Check current `sw.js` cache version and precache list. Do not bump cache merely because HTML metadata changed unless the project's cache strategy requires it; document actual version.
- [ ] Test representative exact live URLs after deployment (homepage, remove-GST, QR scanner, Google Maps QR, passport resizer, percentage converter pages, word converter, BMI/GST/EMI as appropriate). Try all changed pages if the runtime allows.
- [ ] If network/DNS/web viewer cannot reach `infojano.com`, state that deployment workflow succeeded but direct HTTP/visual verification is not confirmed. Do not claim live pages visually verified.
- [ ] Android visual and interaction testing remains separate and needs actual device/user feedback.

#### D. Master project file maintenance
- [ ] Update this file again with final audit totals, verified exact results, merge commit, Pages run ID, cache version, and live URL check status after completion.
- [ ] Do not delete or overwrite historical project notes; append a dated checkpoint.

### Mistakes and lessons learned — mandatory safeguards
1. Do not perform blind string replacement on malformed HTML tags. The first `$3` removal caused missing closing quotes/angle brackets in several tags. Always inspect resulting exact tag strings and run a parser/regex validator before committing.
2. Do not assume the PR patch is safe because the commit succeeded. Fetch and inspect the full PR patch and representative changed files after every batch.
3. Avoid using a regex that matches a filename only up to the next whitespace/tag boundary if the source tag itself is malformed. Prefer a controlled parser or exact full-string replacement with known boundaries.
4. Do not mix source QA, GitHub Actions deployment success, live HTTP success, and Android visual QA. These are four separate evidence levels and must be reported separately.
5. Do not mark a PR deployed before it is merged and a Pages deployment run for the merge commit succeeds.
6. PR #91's `mergeable:false` is a hard stop. Diagnose first; never force merge or imply it's ready.
7. Avoid editing all pages in a broad batch without per-file validation. Use small batches, fetch latest branch SHA for every file, update only exact intended file, and re-read it after update.
8. When changing old domain references, distinguish canonical/OG/JSON-LD from assets/scripts/runtime references. Some root paths differ between GitHub Pages project hosting (`/InfoJano/`) and custom-domain hosting (`/`). Check actual site configuration and file existence before replacement.
9. `id-card-print-studio.html` is protected. `index.html` homepage design is protected. No shared header or calculator logic edits in this SEO metadata task.
10. Do not add canonical/OG tags blindly to 404, Google verification, noindex aliases or redirect pages. Respect their intended indexing behavior.
11. Word-to-JPG/PDF/PNG aliases are currently marked `noindex,follow`; keep their indexing state and verify whether they should be redirects/aliases before changing canonical policy.
12. Do not say the 89-page audit is complete until every file is accounted for in a report and exceptions are explicitly documented.

### Immediate next action in the next chat
Start by reading this entire master file, then continue PR #91 from the current head SHA `118dd2605f00d97eaa721a0072322d6e359316f5`. First diagnose `mergeable:false`, then fetch full patch and repair/validate `remove-gst-from-total-calculator.html` plus all 75 changed files. After that complete the full 89-file metadata matrix. Do not merge without user approval. Do not touch homepage or ID Card Print Studio.

### New-chat handoff prompt — copy and paste
"InfoJano HTML SEO Audit এখান থেকে চালিয়ে যাও। প্রথমে Library-র `/Website Control Center/04_InfoJano_Master.md` সম্পূর্ণ পড়বে, বিশেষ করে `11 November 2026 — Full HTML SEO metadata audit: PR #91 OPEN / handoff checkpoint` অংশ। PR #91: https://github.com/barsulkhan/InfoJano/pull/91, branch `fix/full-html-seo-metadata-audit-2026-11-11`, latest known head SHA `118dd2605f00d97eaa721a0072322d6e359316f5`, 75 files changed, এখনও OPEN/NOT MERGED, latest `mergeable:false`; কোনো live deployment হয়নি। আগে mergeability=false-এর কারণ খুঁজে বের করো, তারপর পুরো PR patch inspect করো। প্রথম `$3` cleanup-এ কিছু canonical/og:url tag-এর closing `\">` হারিয়ে গিয়েছিল—এই ভুল যেন আর না হয়। সব 75 changed file এবং মোট 89 root HTML page parser/regex দিয়ে যাচাই করো; `$3`, malformed canonical/OG, duplicate/missing tags, favicon paths, legacy GitHub Pages domain, robots/noindex exceptions, sitemap consistency পরীক্ষা করো। `remove-gst-from-total-calculator.html`-এর canonical সর্বশেষ branch-এ ঠিক আছে কিনা বিশেষভাবে যাচাই করো। 404, Google verification, noindex Word aliases এবং protected `id-card-print-studio.html`-এ অকারণে canonical/OG বা পরিবর্তন করবে না। Homepage `index.html` design, shared header ও calculator logic পরিবর্তন করবে না। সব QA clean হলে PR ready বলে জানাবে; আমার স্পষ্ট অনুমতি ছাড়া merge করবে না। Merge/deploy/live HTTP/Android QA আলাদা করে রিপোর্ট করবে এবং কাজ শেষে এই Master File আবার update করবে।"

---

## 11 November 2026 — Full HTML metadata audit / PR #91 handoff (NOT MERGED)

### Current status — important
- Active PR: #91 — https://github.com/barsulkhan/InfoJano/pull/91
- Branch: `fix/full-html-seo-metadata-audit-2026-11-11`
- Purpose: repair malformed SEO metadata and standardise HTML-page canonical, Open Graph and favicon metadata across the site.
- Last verified PR snapshot in the previous session: OPEN, NOT MERGED; 75 files changed, 148 additions and 147 deletions; `merged_at = null`; GitHub reported `mergeable: false`.
- Last known branch HEAD: `118dd2605f00d97eaa721a0072322d6e359316f5` (re-fetch before use; branch may have moved).
- A workflow-run lookup for that HEAD returned no workflow runs. Therefore no PR-head QA workflow or deployment is confirmed.
- Do not merge PR #91 unless the user explicitly authorises it. Do not claim these fixes are live. Live website remains unchanged by this open PR.

### Audit scope and known findings
- Root HTML inventory counted 89 HTML pages.
- A widespread malformed-tag issue was found: canonical and/or `og:url` tags had literal `$3` suffixes and in some cases broken/missing closing quote/angle bracket.
- Initial broad regex repair was faulty: it removed `$3` but left some canonical and OG tags without the closing `\">`. This was discovered by inspecting the PR patch. A follow-up repair was applied across the original 66 affected files, closing the tags. This is a key lesson: never trust a regex replacement or commit count alone; parse/inspect the resulting HTML and test every affected file.
- Follow-up corrections were added on the PR branch for:
  1. `google-maps-location-qr-code-generator.html` — malformed canonical and OG URL repaired.
  2. `passport-id-photo-resizer.html` — canonical/OG/icon and legacy GitHub Pages root references changed to `https://infojano.com/`.
  3. `image-resizer.html` — favicon path corrected from `/InfoJano/infojano-mark.svg` to `/infojano-mark.svg`.
  4. `percentage-to-decimal-converter.html` — missing favicon added.
  5. `percentage-to-fraction-converter.html` — missing favicon added.
  6. `word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html` — canonical set to each page's own URL because the pages were marked `noindex,follow`; verify their actual page/redirect behaviour before changing canonical policy again.
  7. `remove-gst-from-total-calculator.html` — malformed canonical repaired (follow-up commit known as `99cb26f3c641d853770734cf71a06c4bfd025ec8`).
- `word-converter.html` also had malformed canonical and OG metadata and was included in the main repair set.
- `percentage-to-decimal-converter.html` and `percentage-to-fraction-converter.html` had missing favicon links; fixed on branch.
- `passport-id-photo-resizer.html` had legacy `https://barsulkhan.github.io/InfoJano/` canonical/OG/icon and script/asset references. A broad root replacement changed all such references in that file to the custom domain. Verify every replaced asset URL exists and loads at `https://infojano.com/`; do not assume that replacing the domain alone guarantees valid paths.
- `qr-choice.html`, `qr-maker.html`, `qr-scanner.html` showed duplicate favicon declarations; likely harmless, but inspect and consolidate only if safe and clearly needed.
- `index.html`, `bmi.html`, `emi.html`, and `gst-calculator.html` were already correct at the time of audit.
- `404.html` has `noindex,follow` and no canonical/OG; this may be an intentional exception. Verify rather than force a canonical.
- `google4a4795e5c7c03eae.html` is a Google verification file and is exempt from ordinary SEO metadata changes.
- `id-card-print-studio.html` is protected and MUST NOT be edited without explicit permission. It still contains legacy GitHub Pages canonical/OG references; record this as a deliberate unresolved exception, not an accidental omission. Do not include it in bulk replacements.
- Homepage design, icons, shared header, calculator logic and unrelated tools must remain untouched.

### Known mistakes / lessons learned during this audit
1. Regex replacement introduced/left malformed HTML tags. Future fixes must validate full opening tags, closing quote and `>`; run an HTML parser or explicit structural checks on all files.
2. A changed-files count (66 → 75) is not proof of correctness. Inspect actual diffs and final branch file contents.
3. Replacing the legacy domain globally in a page can unintentionally alter script/asset URLs. Check each resulting URL/path and ensure the file exists on the custom domain.
4. Canonical/noindex handling needs page-intent review. The three Word-to-* pages are `noindex,follow`; self-canonical was chosen in the branch, but verify if these are real content pages or redirect/alias pages before approving.
5. Duplicate favicon tags are a separate cleanup issue, not evidence of canonical failure.
6. A successful Pages workflow would prove deployment pipeline completion, not direct live HTTP/rendered visual verification. Keep these statuses separate.
7. PR #91 was reported `mergeable:false`; do not assume this is transient. Investigate the exact merge conflict/state before asking for approval.
8. The open PR has not been merged and must not be described as deployed or live.

### Remaining work — resume checklist (mark off only after evidence)
- [ ] Re-fetch PR #91; confirm current state, base/head refs, latest head SHA, changed files, additions/deletions, mergeable state and mergeable_state.
- [ ] Diagnose why GitHub reports `mergeable:false`; inspect compare endpoint/base vs head and identify conflicts. Do not merge while unresolved.
- [ ] Inspect PR #91 patch, especially the original 66 regex-repaired files, to ensure every canonical and OG tag is syntactically complete and the intended URL is exact.
- [ ] Audit all 89 root HTML pages from the PR branch head (not stale main): count canonical tags; verify one correct canonical for each indexable page; verify `og:url` exists and matches canonical where appropriate; check quote/`>` closure; search for `$3` in canonical/OG tags.
- [ ] Confirm favicon declarations on applicable pages and verify every favicon URL/path exists. Review duplicate declarations in the QR pages.
- [ ] Search all unprotected HTML pages for legacy `barsulkhan.github.io/InfoJano` canonical/OG references. Treat normal historical links/assets separately; do not blindly replace all strings.
- [ ] Verify custom-domain asset URLs introduced in `passport-id-photo-resizer.html`, including scripts, styles and icons, actually resolve to the correct resources.
- [ ] Review `word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html` canonical/noindex/redirect behaviour; decide correct canonical policy from actual page intent.
- [ ] Confirm `404.html` and Google verification HTML remain intentionally exempt.
- [ ] Compare protected `id-card-print-studio.html` on branch vs base/main and verify byte-for-byte unchanged. Never modify it without user approval.
- [ ] Inspect changed-file diff to ensure only intended metadata/favicons/approved page-level URL fixes; no homepage redesign, shared header, calculator logic or unrelated code changes.
- [ ] Run HTML validation (at minimum parse every root HTML file), metadata-specific assertions, link/path checks and JS syntax checks if scripts changed.
- [ ] Re-fetch workflow/check status for the latest PR head; do not infer success from empty/old workflow results.
- [ ] Once all checks pass and PR becomes mergeable, report findings and ask user for explicit merge approval. Do not merge on your own.
- [ ] After user-approved merge, verify merge commit, GitHub Pages Actions build/deploy/report jobs, then independently check live custom-domain URLs and report direct HTTP/rendered verification limitations honestly.
- [ ] Update this master file again with final audit evidence, PR/merge SHA, workflow run ID, cache version if changed, and live QA results.

### Exact current project links
- Live custom domain: https://infojano.com/
- GitHub Pages backup: https://barsulkhan.github.io/InfoJano/
- Repository: https://github.com/barsulkhan/InfoJano
- PR #91: https://github.com/barsulkhan/InfoJano/pull/91
- Actions: https://github.com/barsulkhan/InfoJano/actions

### New-chat handoff — copy and paste this as the first message
"InfoJano কাজ এখান থেকে চালিয়ে যাও। প্রথমে Library-র `/Website Control Center/04_InfoJano_Master.md` Master Project file পড়বে, বিশেষ করে `11 November 2026 — Full HTML metadata audit / PR #91 handoff` অংশটি। আমাদের এখনকার কাজ PR #91: https://github.com/barsulkhan/InfoJano/pull/91 । এটি এখনও OPEN এবং NOT MERGED; শেষবার 75 files changed, 148 additions/147 deletions, branch `fix/full-html-seo-metadata-audit-2026-11-11`, last known HEAD `118dd2605f00d97eaa721a0072322d6e359316f5`, GitHub `mergeable:false` দেখিয়েছিল। প্রথমে বর্তমান PR status/head/merge conflict যাচাই করবে। তারপর Master File-এর checklist অনুযায়ী সব 89 HTML page audit করবে—canonical, og:url, closing tags, `$3`, favicon paths, custom-domain assets, noindex/canonical policy এবং diff scope। আগের regex repair-এ malformed closing tags থাকার ভুল হয়েছিল, তাই এবার প্রতিটি final HTML parse/validate করবে। Passport page-এর domain replacement-এ asset URL-ও বদলেছে—সেগুলো পরীক্ষা করবে। 404 এবং Google verification page-এর exemption যাচাই করবে। `id-card-print-studio.html` একদম স্পর্শ করবে না; এটি protected এবং পুরোনো canonical/OG exception হিসেবে থাকবে যতক্ষণ না আমি অনুমতি দিই। Homepage/header/design/calculator logic বদলাবে না। PR #91 merge করবে না—সব QA শেষ হলে আমাকে রিপোর্ট করে অনুমতি চাইবে। Merge ও Pages deployment না হওয়া পর্যন্ত live site পরিবর্তিত হয়েছে বলবে না। কাজের প্রতিটি verified update Master File-এ যোগ করবে।"

---

# PR #91 — Full HTML Audit Continuation Checkpoint (2026-11-11)

## Current PR identity and status
- Repository: `barsulkhan/InfoJano`
- PR: https://github.com/barsulkhan/InfoJano/pull/91
- Title: `Repair malformed SEO metadata across HTML pages`
- State at audit: OPEN; NOT MERGED; no deployment authorized.
- Base branch: `main`
- Base SHA: `8a81465af7c48e13c259c42dfe12de5dedb8a7da`
- Head branch: `fix/full-html-seo-metadata-audit-2026-11-11`
- Exact audited HEAD: `c50724f5bf6f4199d6b26927f4410d09d98aa135`
- GitHub reports `mergeable: true`; no merge conflict currently reported.
- PR reports 73 changed files, 153 additions and 152 deletions.
- Compare result: 157 commits ahead, 0 behind (base is ancestor of head).
- Commit workflow-runs result: no workflow runs returned for this HEAD. Combined commit status returned no status checks. Manual QA therefore does not have a green CI run to rely on.
- Do not merge without the user's explicit approval.

## Audit scope and methods
- Audited all 73 HTML files changed in PR #91 from the exact HEAD SHA above.
- Also audited the 16 unchanged root HTML files to complete the 89-page root HTML inventory.
- Checked canonical/OG URL counts and exact URL values, robots directives, favicon declarations, `$3` residue, legacy GitHub Pages canonical references, structural tag matching, selected asset paths, protected file hashes, sitemap membership, service worker/cache identity, and relevant JavaScript block identity.
- Do not use broad regex replacement for repairs. Continue using page-by-page source inspection and narrowly scoped edits only.

## Verified positive results
- All 72 changed pages other than `404.html` have exactly one canonical URL and exactly one `og:url` value.
- For all 72, canonical and `og:url` exactly match `https://infojano.com/<same-file-name>.html`.
- `404.html` correctly remains a noindex/404 exception without canonical or `og:url`; its favicon now uses `/infojano-mark.svg`.
- No `$3` suffix remains in canonical or `og:url` tags in the 73 changed files.
- No legacy `barsulkhan.github.io/InfoJano` canonical value was found in the 73 changed files.
- The 16 unchanged root files were checked separately. `index.html` and normal indexable pages have the expected custom-domain canonical/OG values. The three `word-to-*` aliases are intentional `noindex,follow` pages whose canonical points to `word-converter.html`; Google verification HTML has no SEO metadata; `id-card-print-studio.html` remains the protected legacy-domain exception.
- The six files that had legacy favicon paths on the base branch (`404.html`, `pdf-to-jpg.html`, `word-converter.html`, `extract-pdf-pages.html`, `image-resizer.html`, `document-studio.html`) were checked on the PR HEAD and now use `/infojano-mark.svg`.
- `passport-id-photo-resizer.html` on PR HEAD uses custom-domain canonical/OG/image URLs and the custom-domain favicon. Its JSON-LD block parses successfully and uses `https://infojano.com` URLs. Its referenced assets (`image-resizer-landing.css`, `image-resizer-premium.css`, `site-header.js`, `install.js`, `infojano-logo.svg`, `infojano-mark.svg`) exist in the repository.
- All changed files have a favicon declaration. A few legacy pages have duplicate icon/shortcut-icon declarations; this is harmless duplication and should not be cleaned up as part of this PR unless separately approved.
- The three Word aliases (`word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html`) remain `noindex,follow` and canonicalize to the main `word-converter.html`, not self-canonical. Preserve this intended alias/canonical relationship unless later evidence requires a change.
- Protected content verification by exact Git blob SHA/content:
  - `index.html`: identical between base and PR HEAD (`acf56ed5d544abee134e62e5ccee2320c8352041`).
  - `id-card-print-studio.html`: identical (`1220afb5c23429dc66a31e7b38b95492b52391c0`).
  - `site-header.js`: identical (`3f17c6da2d65d25f1b0a69cb130095aa1ca66052`).
  - `bmi.html`: identical (`f6522cccb17b3db132b1fc9cc8e2207cf7816d74`).
  - `bmi-toolkit.js` and `bmi-toolkit.css`: identical to main.
  - `percentage.html` inline script blocks are identical to main; only non-script source/metadata differs.
- `sw.js` is unchanged between main and PR HEAD. Current cache name is `infojano-v278` (update prior notes that said v277/v278 only after checking latest HEAD).
- `robots.txt`, `sitemap.xml`, `sitemap.txt`, `manifest.json`, and `CNAME` are unchanged between main and PR HEAD. `robots.txt` points to `https://infojano.com/sitemap.xml`.
- `sitemap.xml` contains 84 URLs. It excludes the 404 page, Google verification HTML and the three noindex Word aliases.

## Existing issues found during the 89-page structural audit — NOT introduced by PR #91
A source-level structural tag scan flagged six existing mismatched closing tags. Base `main` was checked for each and has the same mismatch, so these are pre-existing and not caused by PR #91:
1. `age-in-days-calculator.html` — one extra `</h1>` (1 opening h1, 2 closing h1).
2. `birthday-countdown-calculator.html` — one extra `</h1>`.
3. `day-of-week-born-calculator.html` — one extra `</h1>`.
4. `what-happened-on-my-birthday.html` — one extra `</h1>`.
5. `percentage.html` — one extra `</div>` (28 opening div, 29 closing div).
6. `qr-maker.html` — one extra `</svg>` (30 opening svg, 31 closing svg); this file is unchanged in PR #91.
Do not silently modify these in PR #91. Create a separate, narrowly scoped HTML cleanup after user approval/review. In particular, do not change `percentage.html` calculator logic or layout without permission.

## Additional audit findings / separate pending work
- Sitemap TXT has 63 URLs while sitemap XML has 84. Every TXT URL is present in XML, but 21 XML URLs are missing from TXT: four BMI guide pages and 17 percentage-tool pages. Review whether sitemap.txt is intentionally a smaller curated subset; if not, synchronize in a separate change.
- Word alias redirects still use `/InfoJano/word-converter.html?...` in meta refresh, `location.replace`, fallback links and manifest/install paths. Although their canonical/noindex policy is correct, these redirect paths may fail on the `infojano.com` custom domain. Treat as a separate custom-domain migration fix; do not mix into PR #91 without review.
- The service worker and main web manifest still use `/InfoJano/` project-site paths (`HOME = "/InfoJano/"`, manifest `id/start_url/scope = "/InfoJano/"`). This is an existing PWA/custom-domain migration concern, not changed by PR #91.
- `id-card-print-studio.html` still has legacy GitHub Pages canonical and OG URLs and no favicon. It is explicitly protected; do not edit without permission.
- Historical backups, desktop wrapper, Android build configuration and GitHub Actions still contain GitHub Pages URLs. These are not part of the current root HTML PR audit and should be classified separately before any migration.

## PR #91 scope review
- The PR modifies HTML files only; it does not modify `index.html`, `id-card-print-studio.html`, `site-header.js`, `bmi-toolkit.js` or `bmi-toolkit.css`.
- `percentage.html` script blocks are unchanged.
- Some safe custom-domain asset-path updates exist in the image-resizer pages and passport page, and favicon-path updates exist on affected pages. The referenced passport assets were verified present.
- No calculator JavaScript logic change was observed in the audited PR changes.
- No live deployment has been performed because PR remains unmerged.

## Current decision and next actions
- PR #91 remains OPEN and NOT MERGED.
- Merge conflict: none reported by GitHub (`mergeable: true`).
- CI: no workflow runs/status checks returned for the audited HEAD; do not call CI green.
- Do not merge without explicit user permission.
- Before final approval, review the six pre-existing structural mismatches and decide whether to create a separate cleanup PR; review the 21 sitemap.txt omissions; review Word alias redirect paths on custom domain; keep PWA `/InfoJano/` migration separate.
- After any new commit, repeat QA against the new exact HEAD SHA and update this Master File again. Never claim complete without verification.

## One-task execution log — 2026-11-11

### Task 1: Remove the redundant closing heading tag from `age-in-days-calculator.html`
- Scope: exactly one HTML structural correction in one unprotected page. No batch replacement and no calculator logic changes.
- PR: #91 (`fix/full-html-seo-metadata-audit-2026-11-11`).
- Commit created: `43d652fd57191aa023a3fc1bdda1569761466ec8`.
- File blob after change: `4761b2aef53ebf2913ff6da49b6b983437b116e1`.
- Change: removed exactly one redundant `</h1>` from the `Age in Days` heading.
- Verification: fetched the file again from the PR branch; confirmed 1 opening `<h1>` and 1 closing `</h1>`, and the duplicate closing sequence is absent.
- PR state after commit: OPEN, NOT MERGED. No merge action taken.
- Next task (not started): inspect and, if appropriate, correct the extra closing `</h1>` in `birthday-countdown-calculator.html` as a separate one-file task. Repeat verification and Master File save before starting another task.

### Operational rule reaffirmed
Work on one task at a time. After the single change, verify it from GitHub, then save and verify this Master File before starting another task. If the Master File save fails, stop and resolve the save problem; do not continue to the next code task. Never merge PR #91 without explicit user approval.

---

# 12 November 2026 — Header + Hero design visual verification checkpoint

## User feedback and current status
- User reported that the live website does not appear to reflect the supplied Header + Hero design as expected.
- Do NOT mark the Header + Hero redesign as fully complete based only on PR merge or GitHub Pages deployment.
- Current status: PARTIALLY IMPLEMENTED; VISUAL QA AND CSS CONFLICT REVIEW PENDING.

## PR #93 verified facts
- PR: https://github.com/barsulkhan/InfoJano/pull/93
- Title: Apply refreshed InfoJano header and hero design.
- State: CLOSED and MERGED.
- Merge commit: `28ef816178b7c2533e3a634eaf7629eacfa343c0`.
- PR changed one file (`index.html`), with 79 additions and 2 deletions.
- The merged source contains a style block `infojano-header-hero-user-code-refresh` near the end of `index.html`.
- The supplied design was adapted, not copied literally: existing navigation and live search/filter behavior were retained; existing SVG hero illustrations were retained instead of absent PNG assets; mobile nav is hidden at max-width 768px.
- The source also contains earlier legacy/cascade-fix style blocks with high-specificity `!important` declarations. These may override parts of the newer design. This is a concrete CSS cascade conflict risk and must be reviewed before declaring visual completion.
- A live rendered-page inspection attempt could not access `https://infojano.com/` from the current inspection environment. Do not claim visual live verification.

## Pending one-task-at-a-time actions
- [ ] Inspect current live homepage on desktop and mobile (prefer user-provided screenshots if browser rendering is unavailable).
- [ ] Compare the exact supplied Header + Hero reference code against merged `index.html`, section by section.
- [ ] Audit CSS cascade order/specificity for `body header.header`, `.header .top`, `.brand`, `.nav`, `#home .hero`, `.hero-art`, `.hero-content`, `.hero h1`, `.hero p`, `.search`, `.chips`, and mobile breakpoints.
- [ ] Identify the smallest conflicting declarations; do not perform broad CSS rewrites or regex replacements.
- [ ] Prepare a narrow correction PR only after the conflict is identified; preserve search, category filters, navigation, tool grid, and protected files.
- [ ] Verify the corrected desktop and mobile rendered result before marking the redesign complete.

## Separate pending APK workflow fix
- PR #94: https://github.com/barsulkhan/InfoJano/pull/94
- Title: Fix Discount Calculator APK installer validation.
- State at last verified checkpoint: OPEN, NOT MERGED.
- Branch: `fix/discount-apk-installer-validation`.
- Commit: `4cd7cf3dbf804b4ed79626ee579229c51365c571`.
- One-line change: add `<script src="/InfoJano/install.js" defer></script>` to `discount.html` before `</body>`.
- Original failure: APK workflow assertion `Missing installer script: discount.html`; website Pages deployment is separate and unaffected.
- [ ] Wait for explicit user merge approval. Do not merge without approval.
- [ ] After approved merge, rerun/verify APK workflow and confirm artifact count; do not claim 23 APKs succeeded until verified.

## Operating rule
Do not mark PR merge, Pages deployment, or source-level CSS presence as proof that the requested design is visually correct. Record implementation and visual QA as separate statuses. Continue one small task at a time and preserve the user's approval requirement for merges.

---

# 12 November 2026 — Header + Hero first diagnostic audit (Version 22 checkpoint)

## User's active instruction
- Continue InfoJano from this checkpoint; Header + Hero only.
- The user's complete previously supplied HTML/CSS remains the canonical reference. Do not substitute a redesign or approximate it.
- Do not modify other homepage sections, calculator logic, or protected files. Do not merge any PR without explicit user approval.
- Work in small steps. After each verified task, update and re-read this Master File.

## Master file and reference status
- Read `/Website Control Center/04_InfoJano_Master.md` completely (1,020 lines) before work.
- The saved conversation context confirms the user's exact complete Header + Hero HTML/CSS was supplied on 11 Nov 2026, including selectors, responsive breakpoint, float animation/keyframes, inline SVG logo, search icon, markup, image paths, benefits and category chips.
- The canonical visual requirements include a sticky white header, inline SVG logo, light-blue gradient hero panel, left and right illustrations, centered "Your Everyday Online Tools" heading, search, benefits and category chips; hide hero artwork on mobile.
- Important: the verbatim original code is not embedded in this Master File. Preserve the fact that it exists as the canonical reference; do not claim a line-by-line literal comparison against the original pasted code has been completed unless that exact original code is available in the active context.

## Live site inspection — 12 Nov 2026
- URL inspected: https://infojano.com/
- A live browser inspection completed without making site changes.
- Desktop report: header and hero render; inline SVG brand mark and both hero image assets load; navigation, heading, subtitle, search, four benefit chips and five category chips are present; no broken image or visible rendering error was reported.
- Current live hero assets reported by the browser: `/assets/hero-left.svg` and `/assets/hero-right.svg`.
- The two saved user reference screenshots were inspected directly. They show: a white header with blue IJ mark, vertical divider, InfoJano wordmark/tagline, Home, Tools dropdown, Blog, About, Contact and circular search icon; hero with two-line heading, gradient/underlined Everyday plus accent strokes, left document+chart+calculator illustration with foliage, right browser/QR/image/upload illustration with foliage, centered search button labelled Search, icon-led benefits, and icon-led chips with Calculators highlighted blue.
- One browser summary described a light-blue header; a later computed-style attempt returned unrelated selectors/classes (`.nav-bar`, `.nav-links`, `/assets/app.css`) that do not exist in the current GitHub `index.html`. Treat that computed-style report as unreliable; do not use it as proof of actual live computed CSS.
- The first browser inspection did not provide a reliable mobile viewport screenshot; mobile rendered QA remains pending.
- A separate live HTML fetch successfully confirmed the current live homepage content and both `/assets/hero-left.svg` and `/assets/hero-right.svg` image URLs. The live extracted content matches the main-branch heading/subtitle and homepage text. Keep live HTML evidence distinct from computed-style evidence.

## GitHub source audit — current main
- Repository: `barsulkhan/InfoJano`; file: `index.html`; current fetched main blob SHA at audit: `97af7647f629edf460aa78eefaf3e087de0f2d5a`.
- PR #93 is confirmed merged; merge commit `28ef816178b7c2533e3a634eaf7629eacfa343c0`; one file changed (`index.html`), 79 additions and 2 deletions.
- Header DOM uses an inline SVG `.brand-logo`; header navigation contains Home, All Tools, Guides, About and Search.
- Hero DOM contains two `<img>` illustrations (`/assets/hero-left.svg`, `/assets/hero-right.svg`), `.hero-content`, heading, subtitle, search, four `.hero-benefits` and five `.chips` category buttons. Search/filter handlers and category actions remain wired in source.
- PR #93 did not literally replace the complete homepage header/hero markup with the user's supplied full reference implementation; it adapted styling around the existing DOM and behavior. Existing illustrations were retained rather than replacing them with the exact reference artwork. This is a confirmed source-level reason the result may not look identical.

## CSS cascade findings — confirmed source facts
- `index.html` contains multiple historical design/cascade style blocks before the new `infojano-header-hero-user-code-refresh` block.
- The `infojano-homepage-cascade-fix-2026` block uses `html body header.header` with `!important`. This selector has greater specificity than the later `body header.header` selector in the PR #93 block, so its important background/background-image/border/shadow declarations can continue to win in the cascade.
- That older block also applies `!important` to hero chips, hero grid-template declarations, illustration SVG sizing, and responsive rules. A concrete conflict is `#home .hero .chips button` in the earlier cascade-fix block versus `#home .chips button` in PR #93: both use `!important`, but the earlier selector has higher specificity (one extra `.hero` class), so its white background, muted text, border and padding win over the newer lower-specificity declarations. This prevents the new chip style from fully taking effect. A property-by-property cascade audit is still required for the remaining declarations.
- The pre-existing `infojano-final-home-design-2026` block defines a grid-based `#home .hero` with `!important`; PR #93 later changes the same hero to `display:flex!important` with matching selector specificity and later source order. Flex wins for `display`, while leftover `grid-template-columns` declarations become inactive rather than controlling the flex layout.
- The current hero HTML uses `<img>` elements, so the new `#home .hero-art img` selector does match the current DOM. Earlier `.hero-art svg` declarations are legacy/inactive for these image elements; do not misdiagnose them as the direct cause of missing artwork.
- Header background conflict is also present: the earlier selector list `body header.header, html body header.header` has greater specificity than the later PR selector `body header.header`, and both use `!important`. The earlier near-white `rgba(255,255,255,.98)` background therefore wins over the later pure `#fff`; this is a small shade difference, not the main fidelity failure.

## First diagnostic conclusion
- Confirmed fidelity gap: PR #93 was an adaptation of the existing header/hero DOM and existing illustrations, not a literal application of the complete user-supplied reference code. The two illustration assets match the broad document/calculator and QR/browser/image/upload subject matter, but omit foliage and the richer dimensional styling shown in the approved reference images.
- Confirmed CSS conflict: the earlier higher-specificity `html body header.header` rule wins the near-white header background; the earlier higher-specificity `#home .hero .chips button` rule wins key chip styles over PR #93. The hero `display:flex!important` from PR #93 wins over the older grid display because the selector specificity is equal and the PR block is later; leftover grid-template declarations are inert while display is flex.
- Not yet confirmed: exact computed-style winners and mobile appearance, because the browser inspection did not produce a mobile viewport rendering or computed-style trace.
- No source files or GitHub branches were changed in this diagnostic task. No PR was created or merged.

## Next exact task — small-step continuation
1. Completed: inspect both current SVG assets and compare them with the two saved reference screenshots. Current SVGs reproduce the broad document/calculator and QR/browser/image/upload subject matter, but omit the foliage and richer dimensional treatment shown in the reference images.
2. Completed first-pass cascade map: confirmed the header background specificity conflict and the chip-button specificity conflict described above. Remaining header/hero properties and responsive behavior still need a complete selector-by-selector audit.
3. Obtain a reliable mobile viewport screenshot or user-provided Android screenshot before making any mobile correction. The automated computed-style report was inconsistent with the actual HTML and must not be trusted.
4. The exact verbatim user-pasted HTML/CSS is not present in the Master File or Library search results available in this session; the two user reference screenshots are saved and inspected. Do not reconstruct and call it the exact original code. Recover the verbatim code before literal recreation; if it cannot be retrieved from the earlier conversation, ask the user to re-share it at implementation time.
5. Only after the remaining findings are established, propose one narrow Header + Hero-only correction branch/PR. Preserve search/filter/navigation and every other homepage section. Never merge without explicit user approval.

## 12 November 2026 — Detailed Header + Hero source comparison (Version 23 checkpoint)

### Saved visual reference inspected
- Two saved user reference images were opened directly from Library: `InfoJano Everyday Tools Hero(1).png` and `InfoJano Everyday Tools Hero.png`.
- The first image shows the blue hexagonal IJ logo, vertical divider, InfoJano wordmark with red `Jano`, tagline, Home active pill, Tools dropdown, Blog, About, Contact and circular search control.
- The hero reference has a two-line title (`Your Everyday` / `Online Tools`), gradient `Everyday` with underline/swoosh and three accent strokes, soft pale-blue background/waves, two large side illustrations with foliage and sparkles, centered search with visible `Search` text, four icon-led benefit badges, and five icon-led category chips with Calculators highlighted blue.
- The second image is a close variation: it uses a slightly different logo treatment and the labels `Image Tools`, `QR Tools`, and `All Tools` in the category row. The first image is the primary exact visual reference unless the user later chooses the second variant.

### Actual current main markup compared with reference
- Header currently has Home, All Tools, Guides, About and an icon-only search button. It does not have Tools dropdown, Blog or Contact.
- Current logo is an inline SVG, but there is no vertical divider between the mark and wordmark.
- Hero heading markup is a single line: `Your <span>Everyday</span> Online Tools`; no explicit line break, underline element/pseudo-element or decorative accent strokes exist.
- Search button markup contains only `⌕`; it does not display the word `Search`.
- Benefit badges use simple text glyphs (`✓`, `ϟ`, `✓`, `▯`) rather than the distinct illustrated icons in the reference.
- Category chips have no icons and no active/highlight class for the first Calculators chip.
- Existing SVGs (`assets/hero-left.svg`, `assets/hero-right.svg`) contain the right broad subject matter (document/chart/calculator; browser/QR/image/upload) but are simpler, omit the reference foliage, and do not match the full glossy dimensional treatment. Their GitHub blob SHAs are `ae6b21a2ce2fd63668ae324f717087e1d20f659c` and `41d0778383319756231e8489bb42fc48459733cb` respectively.

### Property-by-property CSS cascade audit — verified source order and specificity
- Header background: earlier `html body header.header` is more specific than later `body header.header`; both are `!important`. Earlier near-white `rgba(255,255,255,.98)` wins over later `#fff`. The practical color difference is small; sticky positioning and white header appearance are retained.
- Header `.top`: the older `body header.header .top` and later PR selector have equal specificity; PR #93 appears later and wins where both declare the same property. The 1200px max-width from PR #93 therefore overrides the earlier 1500px max-width.
- Brand and nav: the later PR selectors for `.brand`, `.tag`, `.nav`, and `.nav button` are equal or more specific than the earlier cascade-fix declarations, so the PR rules win on overlapping properties. No confirmed high-specificity blocker was found for these styles.
- Hero container: older and newer `#home .hero` selectors have equal specificity. PR #93 is later and sets `display:flex!important`; this wins over the earlier `display:grid!important`. Older `grid-template-columns` declarations remain in the cascade but are inert while the computed display is flex. Earlier `position`, `overflow`, `isolation`, and pseudo-element wave styling are not all reset by PR #93 and can remain active.
- Hero artwork: actual markup uses `<img>`, so `#home .hero-art img` is a valid selector and the PR's width/max-width rule applies. Earlier `#home .hero-art svg` rules do not target these `<img>` elements. Do not report an img/svg selector mismatch as the cause.
- Hero heading and paragraph: older and newer `#home .hero h1` / `#home .hero p` selectors have equal specificity; the later PR block wins on overlapping declarations. The remaining visual failure is missing markup (line break, underline/sparks), not proof that the older heading CSS wins.
- Search: later PR `#home .search`, input and `.primary` selectors are equal in specificity to earlier matching `#home` selectors and are later in source order; no confirmed old-rule blocker was found for their overlapping declarations. The button still lacks the visible `Search` label in HTML.
- Benefits: PR #93's later `#home .hero-benefits span` declarations override the earlier lower-specificity/non-important badge rules. The mismatch is mainly the glyph-only icon markup and layout, not a confirmed CSS override.
- Category chips: confirmed important conflict. Earlier `#home .hero .chips button` has higher specificity than later `#home .chips button`; both use `!important`. Earlier white background, muted text, border and padding win. This is a real CSS reason the later chip appearance does not fully apply. Separately, the markup lacks category icons and an active state, so CSS alone cannot reproduce those reference details.
- Mobile: existing CSS hides `.hero-art` at max-width 760px and PR #93 hides it at max-width 768px; this agrees with the saved reference's mobile artwork hiding requirement. PR #93 also hides the entire `.nav` at max-width 768px; current markup has no hamburger control. Actual mobile viewport rendering has not been reliably verified.

### Diagnostic conclusion
- The primary reason PR #93 does not match the reference is incomplete HTML/visual implementation, not a blanket legacy CSS override. The PR added 79 CSS/markup lines but retained the existing header navigation, simple text glyphs, existing SVG artwork and most existing hero markup.
- Two actual cascade conflicts are confirmed: near-white header background specificity (minor visual effect) and the higher-specificity chip-button rule (material visual effect).
- No changes were made to `index.html`, any calculator, or any other GitHub file during this audit. No new branch or PR was created. PR #93 remains merged; no PR merge action was taken in this session.
- The exact verbatim HTML/CSS pasted by the user earlier is not recoverable from the Master File or Library search in this session. The two saved visual references are available. Do not claim the screenshots are the verbatim code or recreate the original code by guessing.

### Next task
- Before implementation, recover the exact user-pasted HTML/CSS from the earlier conversation if available. If it cannot be recovered, ask the user to re-share that code at implementation time.
- Then prepare a one-file, Header + Hero-only correction on a new branch, using the reference code exactly while preserving existing search/filter handlers and all content below the hero. Fix only the confirmed chip specificity collision within this scope; avoid global CSS rewrites.
- Test desktop and mobile rendering with a reliable viewport/screenshot method. Verify the header links, search input/button, category filters, tool grid, and reduced-motion behavior. Do not merge without explicit user approval.

## 12 November 2026 — User-supplied Header + Hero code applied to implementation branch

### User instruction and canonical reference
- User explicitly instructed: "তোমাকে কোড টা সেন্ড করলাম তুমি সেটাকে কাজে লাগাও।" Treat the complete Header + Hero HTML/CSS they pasted in this conversation as the canonical implementation reference. Do not ask them to resend it.
- Reference styling: white sticky header, 1200px header inner width, 45px logo, InfoJano wordmark with red Jano and tagline; pale blue-to-white hero gradient, max-width 1200px, 60px desktop vertical padding, floating side illustrations, centered headline/search, four benefit pills, five category chips; at <=768px stack hero, hide side artwork, 32px heading.
- Preserve existing live InfoJano nav, search/filter behavior and lower homepage content rather than deleting working functionality just because the pasted visual snippet omits those elements.

### Implementation completed on GitHub
- Repository: `barsulkhan/InfoJano`.
- Created branch: `feat/header-hero-user-reference-fix` from `main`.
- Updated only `index.html` on that branch. The base `main` blob at branch creation was `97af7647f629edf460aa78eefaf3e087de0f2d5a`.
- First implementation commit: `bd510d895f7ff6993d2f0a65e599676fa91ffbd6`.
- Follow-up stylesheet comment cleanup commit: `4fda307c0a15ee3c6d29ea2821993a254cf49175`.
- Added a final, higher-specificity cascade correction (`html body header.header`) so the legacy `html body header.header` important rule cannot override the user-approved white header. Applied the user's desktop/mobile header and hero dimensions, gradient, artwork float, typography, search styling, benefits and chips.
- Kept the existing inline SVG logo, current nav links, search input id `search` with `oninput="filterTools()"`, search action `searchFocus()`, category handlers `quickFilter(...)` / `clearFilter()`, and all homepage sections after the hero unchanged.
- The exact pasted reference mentioned root assets `/hero-left.png` and `/hero-right.png`, but those PNGs are not in the repository. Reused existing, verified `/assets/hero-left.svg` and `/assets/hero-right.svg` rather than adding broken image paths or inventing new artwork.

### Pull request and verification status
- Opened draft PR #96: https://github.com/barsulkhan/InfoJano/pull/96
- PR title: `Apply approved InfoJano Header & Hero design`.
- PR is OPEN, DRAFT, and NOT MERGED. Do not merge until the user explicitly approves.
- PR currently changes only `index.html`; GitHub reports 1 changed file, 68 additions, 0 deletions, 1 commit at PR creation (a second cleanup commit was pushed afterward; re-fetch PR/branch to confirm current count and head SHA before reporting).
- Desktop/mobile visual screenshot testing, functional browser testing, GitHub Actions checks, Pages deployment and live-domain verification are still PENDING. Do not mark the design complete or claim it is live until these are verified.
- The current implementation is an incremental CSS implementation against the existing DOM, not a full HTML replacement. It deliberately retains navigation and functional handlers. If exact visual fidelity requires richer artwork or additional visual markup from the supplied code, assess that after screenshot QA; do not modify lower homepage sections.

### Next actions
1. Fetch PR #96 and branch head to verify latest commit, diff and checks.
2. Inspect the PR diff to confirm only Header + Hero styling is changed and no lower sections or JS handlers were modified.
3. Obtain reliable desktop and mobile rendering screenshots; verify header, hero, search, chips, all tool cards, navigation and reduced-motion behavior.
4. If checks pass, present PR #96 to the user for review and explicit merge permission. Never merge automatically.
5. After user approval and merge, verify Pages deployment and live site before marking complete.

## 12 November 2026 — Hero Banner width alignment PR #97 merged and Pages deployment verified

### User-approved change
- User clarified the exact alignment target: the Hero Banner left edge must align with the left edge of the blue Popular Tools icon; the Hero Banner right edge must align with the right edge of the "25 tools" count label.
- This is a width/alignment correction, not a height increase.

### GitHub implementation and merge
- Repository: `barsulkhan/InfoJano`.
- Branch: `fix/hero-banner-align-popular-tools`.
- Changed only `index.html`, adding CSS block `infojano-hero-align-popular-tools-v1`.
- CSS sets the desktop hero width to `calc(100% - 36px)` with 18px horizontal margins, and a mobile adjustment to `calc(100% - 24px)` with 12px horizontal margins.
- PR #97: https://github.com/barsulkhan/InfoJano/pull/97 — title: `Align hero banner with Popular Tools section`.
- User explicitly instructed: "মার্ক করে ওয়েবসাইটটি লাইভ কর"; this authorized merge and deployment.
- PR #97 merged successfully using squash. Merge commit: `bbcf42cb65c7d703b1524499e18a874d41bbfba9`.
- Verified PR state `closed`, `merged=true`, merged at `2026-11-12T03:14:21Z`.

### Deployment
- GitHub Actions `pages build and deployment` for merge commit `bbcf42cb65c7d703b1524499e18a874d41bbfba9` completed with conclusion `success` at `2026-11-12T03:15:01Z`.
- Deployment run: https://github.com/barsulkhan/InfoJano/actions/runs/43146841772.
- Live site: https://infojano.com.
- Therefore the code is merged and the GitHub Pages deployment workflow succeeded.

### QA status — do not overstate
- Automated live-browser geometry inspection returned internally inconsistent/misidentified element coordinates and failed to reliably confirm the exact alignment. It also did not reliably confirm the new CSS block, despite the `main/index.html` source containing it.
- First live browser pass at approximately 1000px viewport reported nonmatching element edges; second pass reported impossible/reversed element coordinate interpretation and did not actually establish a 1440px viewport. Treat these geometry reports as unreliable, not as proof of alignment or failure.
- Source verification on `main` confirmed the new CSS block exists in `index.html`; blob SHA `d3732463bc163c5cd8e2848c54b86135636d9cd1`.
- **Completed:** PR merged; Pages deployment workflow successful; new CSS source present on main.
- **Pending:** trustworthy visual confirmation of the exact desktop left/right alignment and mobile rendering on the live website. Ask user for a fresh browser screenshot if a reliable visual test is unavailable; do not claim exact pixel alignment has been visually verified.
- Do not change any other homepage sections or protected files without permission.

### Master File update — 12 November 2026 (PR #97)
- Status marked: PR #97 merged; GitHub Pages deployment workflow completed successfully.
- Live URL: https://infojano.com
- Merge commit: `bbcf42cb65c7d703b1524499e18a874d41bbfba9`.
- Deployment run: https://github.com/barsulkhan/InfoJano/actions/runs/43146841772 (conclusion: `success`).
- Change: Hero Banner horizontal width alignment adjustment intended to line up with Popular Tools heading icon on the left and the “25 tools” label on the right; mobile margins also adjusted.
- Main branch source check confirms the CSS block `infojano-hero-align-popular-tools-v1` is present in `index.html` (blob `d3732463bc163c5cd8e2848c54b86135636d9cd1`).
- QA caution: live browser geometry inspection was inconsistent and did not reliably prove exact pixel alignment. Therefore the implementation is deployed, but exact desktop alignment and mobile visual appearance remain pending reliable visual confirmation. Do not mark visual QA complete until verified.
- Next: ask the user for a fresh live-site screenshot if needed, compare the hero left/right edges against the Popular Tools icon and tool-count label, then make only a narrowly scoped correction if required. Do not change other homepage sections or protected files without permission.

### User confirmation — 12 November 2026: Hero Banner alignment visually confirmed
- The user has now explicitly confirmed: “হিরো ব্যানারের আইল্যান্ড্মেন্ট ঠিক হয়ে গেছে” (Hero Banner alignment is fixed).
- Update the project status: Hero Banner horizontal alignment correction from PR #97 is accepted by the user as visually correct; mark this item COMPLETE.
- PR #97 remains merged; GitHub Pages deployment remains verified successful (workflow run `43146841772`, conclusion `success`).
- Live site: https://infojano.com
- Do not reopen the alignment task unless the user reports a new issue.
- No other homepage sections or protected files were changed as part of this alignment correction.

---

# 12 November 2026 — PR #99 EMI installer fix and APK workflow checkpoint

## PR #99 — merged
- Repository: `barsulkhan/InfoJano`.
- PR: https://github.com/barsulkhan/InfoJano/pull/99
- Title: `Fix missing installer script on EMI calculator`.
- User explicitly instructed to merge this PR.
- PR #99 was squash-merged successfully.
- Merge commit: `2113d8ea3eb090d3791cf478d9ac202d1a0a2973`.
- Scope: one-line change in `emi.html` adding `<script src="/InfoJano/install.js" defer></script>`; no EMI calculator logic or page design changed.

## Workflows after PR #99 merge
- APK workflow run: https://github.com/barsulkhan/InfoJano/actions/runs/43150315869
  - Run name: `Build InfoJano Tool APKs`.
  - Trigger commit: `2113d8ea3eb090d3791cf478d9ac202d1a0a2973`.
  - The job reached `Validate tool icons, manifests, and APK matrix` and that step reported `failure`; APK build, package count, artifact upload and release steps were skipped.
  - At the last poll, GitHub still showed the job as `in_progress` while the validation step was failed. A subsequent workflow log download returned 404 (`BlobNotFound`), so the exact assertion/error is NOT YET KNOWN. Do not guess that another page is missing; retrieve the completed job log or rerun after diagnosing.
- Pages build/deployment run: https://github.com/barsulkhan/InfoJano/actions/runs/43150315713
  - At the last observed workflow-list poll, status was `in_progress`; no success conclusion had yet been verified. Recheck before claiming deployment.
- Prior known Pages deployment for PR #98 merge commit `68d89166479fe527beb98071a104f817965a3548` succeeded: run `43149978208`. This does not prove the PR #99 commit is deployed.

## Related preceding fixes
- PR #91 SEO metadata repair was merged. Merge commit: `3d5c6d26a8119231e634f270c070bf8eff7997b0`.
- Favicon audit: all 73 HTML files changed in PR #91 were checked; all 73 contain favicon links and `infojano-mark.svg` exists on `main`. A few root-level files use relative rather than absolute favicon paths; no broken path was demonstrated, so no unnecessary edits were made.
- PR #98 fixed the missing installer script on `discount.html`; merged commit `68d89166479fe527beb98071a104f817965a3548`. Its Pages workflow run `43149978208` succeeded. The subsequent APK workflow failed at `emi.html`, which led to PR #99.

## Current status
- [x] PR #99 merged with explicit user approval.
- [x] One-line EMI installer reference change verified in PR scope before merge.
- [x] PR #98 Pages deployment workflow success verified.
- [ ] Verify Pages deployment run `43150315713` for PR #99 commit; do not assume success.
- [ ] Re-fetch APK workflow run `43150315869` and its latest job/step status.
- [ ] Obtain the exact validation failure log for run `43150315869`; previous log download returned 404, so exact error remains unknown.
- [ ] Diagnose the validator failure from evidence, make only the smallest safe correction, and create a separate PR if code change is required.
- [ ] Do not report APK build/release as successful until all validation, build, count, artifact and release steps pass.
- [ ] Update this Master File after the next verified major step.

## Next exact task
1. Recheck Actions runs `43150315869` (APK) and `43150315713` (Pages).
2. If the APK run has completed, retrieve its job log and identify the exact failed assertion. If logs are unavailable, rerun the workflow only after confirming the existing failed step and current `main` source; do not invent a missing filename.
3. Fix only the proven cause, verify source and workflow, and open a small PR. Do not merge without the user's explicit approval.
4. Keep the existing homepage design, protected files and unrelated calculator logic unchanged.

## New-chat handoff
"InfoJano project resume করো। প্রথমে Library-র `/Website Control Center/04_InfoJano_Master.md` Master Project file পড়বে। সর্বশেষ checkpoint: PR #99 (`Fix missing installer script on EMI calculator`) আমার অনুমতিতে squash-merge হয়েছে; merge commit `2113d8ea3eb090d3791cf478d9ac202d1a0a2973`; `emi.html`-এ শুধু `/InfoJano/install.js` script reference যোগ হয়েছে। APK workflow run `43150315869`-এ validation step failed, কিন্তু exact assertion এখনও জানা নেই—log download 404/BlobNotFound দিয়েছে; অনুমান করে আরেকটি HTML page পরিবর্তন করবে না। Pages workflow run `43150315713` সর্বশেষে in_progress ছিল, recheck করতে হবে। প্রথমে এই দুই Actions run-এর বর্তমান status এবং exact failure log যাচাই করো। তারপর প্রমাণিত কারণের smallest safe fix করো, আলাদা PR খোলো, merge-এর আগে আমার অনুমতি নেবে। APK build/release সফল বলবে না যতক্ষণ সব ধাপ pass না করে। প্রতিটি major verified update Master File-এ সংরক্ষণ করবে।"

---

# 12 November 2026 — Batch APK installer audit and successful release (PR #100)

## User direction
- User objected to repeated one-error-at-a-time fixes and asked that the remaining issues be handled together in one batch.
- Response: audit all 23 APK target pages listed in `.github/workflows/build-tool-apks.yml` before making the fix.

## Full 23-target audit
- Audited all 23 page targets in the APK workflow against their manifest links and `install.js` reference.
- Two pages were missing the installer script:
  - `image-resizer.html`
  - `percentage.html`
- The other 21 manifest-backed APK target pages already had installer references.
- `id-card-print-studio.html` is in the APK target matrix but does not have a same-named `app-manifests/id-card-print-studio.webmanifest` link. This audit did not change that page or its protected source; the workflow validator iterates manifest-backed pages and the APK target matrix separately.

## PR #100 — merged
- PR: https://github.com/barsulkhan/InfoJano/pull/100
- Title: `Fix all missing installer scripts in APK tool pages`.
- Branch: `fix/all-missing-apk-installer-scripts`.
- Changes: exactly two HTML files, two additions, zero deletions.
- Added `<script src="/InfoJano/install.js" defer></script>` to `image-resizer.html` and `percentage.html`.
- No calculator logic, page layout, SEO metadata, homepage section, or protected ID Card Print Studio source changed.
- User's broad instruction to do all the remaining fixes together authorized this narrow batch correction and merge.
- Squash merge commit: `394686ffbdb5038d9590c29b317ebdb8689b6198`.

## Verification after PR #100
- APK workflow: https://github.com/barsulkhan/InfoJano/actions/runs/43154046988 — completed, conclusion `success`.
- Verified all job steps passed: icon/manifest/APK matrix validation, building one APK for each remaining tool, verifying APK package count, uploading workflow artifact, and publishing the tool APK release.
- Pages build and deployment: https://github.com/barsulkhan/InfoJano/actions/runs/43154047003 — completed, conclusion `success`.
- Both workflows ran against merge commit `394686ffbdb5038d9590c29b317ebdb8689b6198`.
- **APK build and release are now verified successful: 23 APK targets validated and built, package-count check passed, artifact upload passed, and release publish step passed.**

## Current status
- [x] Full audit of 23 APK workflow target pages completed.
- [x] Both missing installer references fixed together in PR #100.
- [x] PR #100 merged.
- [x] APK workflow completed successfully, including package count, artifact upload and release publishing.
- [x] GitHub Pages deployment completed successfully.
- [ ] If the user wants, provide the APK release/artifact link after retrieving and verifying the exact release URL and downloadable assets; do not guess an asset URL.
- [ ] Continue with the next InfoJano priority from this Master File; do not invent a new priority or alter protected homepage sections without permission.

## New-chat handoff
"InfoJano project resume করো। প্রথমে `/Website Control Center/04_InfoJano_Master.md` পড়বে। Latest checkpoint: user asked to batch-fix all remaining APK installer errors. Audited all 23 APK workflow targets; only `image-resizer.html` and `percentage.html` lacked `install.js`. Both were fixed together in PR #100 and squash-merged as `394686ffbdb5038d9590c29b317ebdb8689b6198`. APK workflow run `43154046988` succeeded including validation, all APK builds, package count, artifact upload and release publishing. GitHub Pages deployment run `43154047003` also succeeded. Do not repeat those fixes. Next, retrieve the verified release and asset URL if APK delivery is requested, then continue the next pending project task in this Master File. Preserve protected homepage sections and files; do not mark any unverified item complete."

## 2026-11-12 — Full HTML Hero Banner Audit (87 root-level pages)

### Audit scope and method
- Audited all 87 root-level `.html` files on the `main` branch, excluding `index.html` and the Google verification file.
- Checked page markup for a visible hero/banner container with an H1 inside it; a CSS class alone was not counted as a completed hero.
- This was a read-only audit. No site files were changed as part of this check.

### Result
- 68 of 87 pages contain a hero/banner section with an H1.
- 19 pages do not contain a full hero/banner section.
- Of those 19, 7 are utility/locale/redirect pages where a full hero may not be needed: `404.html`, `discount-pt-br.html`, `percentage-pt-br.html`, `qr-choice.html`, `word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html`.
- 12 actual tool pages have no full hero/banner and should be considered for a coordinated hero-banner upgrade:
  1. `gst-calculator.html`
  2. `id-card-print-studio.html`
  3. `loan-eligibility.html`
  4. `loan-interest.html`
  5. `number-to-words.html`
  6. `password-generator.html`
  7. `percentage-change.html`
  8. `savings.html`
  9. `text-counter.html`
  10. `time-calculator.html`
  11. `tip-calculator.html`
  12. `unit-converter.html`

### Important observations
- Some pages without a hero place the H1 directly inside the calculator card, e.g. GST, loan, number-to-words, password, percentage-change, savings, text-counter, time, tip, and unit converter.
- `id-card-print-studio.html` starts with a compact header/title and then the tool card; preserve its calculator/document workflow and do not alter protected functionality.
- No banner implementation work has been started or merged from this audit.

### Pending work / next step
- Present the 12-page missing-hero list to the user and obtain approval for the visual implementation scope.
- If approved, create one coordinated PR for all 12 pages, reusing the approved InfoJano hero visual language while adapting each illustration, title, subtitle, benefits, and mobile layout to the tool.
- Do not change homepage design or calculator/document logic. Keep the changes limited to banner markup and scoped CSS, and verify all 12 pages before merge.

---

# 12 November 2026 — Migration verification addendum (GitHub audit)

This addendum corrects older checkpoint statements using the live GitHub repository state checked on 12 November 2026.

## Verified repository records
- The 4 November archive DOES exist in the repository root: `InfoJano_Smart_Master_Project_COMPLETE_2026-11-04.md` (approximately 460 KB). Preserve it; do not overwrite it.
- The 28 October historical master also exists: `InfoJano_Smart_Master_Project_LATEST_2026-10-28.md`.
- The complete 1,322-line Library master `04_InfoJano_Master.md` has been transferred to `docs/04_InfoJano_Master_CURRENT_2026-11-12.md`. The full source was read in two sections and reassembled; verified transfer length 1,322 lines / 142,766 characters. This GitHub copy is the current project handoff copy, while the original Library file remains unchanged.
- The migration supplement is at `docs/INFOJANO_MASTER_MIGRATION_SUPPLEMENT_2026-11-12.md`.

## Corrected current PR states
- PR #91 — CLOSED and MERGED. Merge commit: `3d5c6d26a8119231e634f270c070bf8eff7997b0`. Older sections saying OPEN/NOT MERGED are historical checkpoints and are superseded by this verified state.
- PR #94 — OPEN, NOT MERGED. Discount Calculator APK installer validation remains pending; do not merge without explicit user approval.
- PR #95 — CLOSED and MERGED. AdSense ads.txt authorization merge commit: `c633fdf3365187d5e6cbe25aab3fea012836c53a`.
- PR #100 — CLOSED and MERGED. All missing APK installer references batch fix; merge commit: `394686ffbdb5038d9590c29b317ebdb8689b6198`. APK workflow run `43154046988` and Pages run `43154047003` succeeded.
- PR #101 — CLOSED and MERGED. Savings Calculator hero banner; merge commit: `0ea8cf26b47dc0714b0e727020e52578debad0c7`.
- PR #102 — CLOSED and MERGED. Savings Calculator supplied hero design; merge commit: `30912225f073cd03cae18a51d02444b206603989`.
- PR #103 — CLOSED and MERGED. Full Savings Calculator page design; merge commit: `c5b668865514269c6199f1a4564d23aac8aab869`. Pages run `43164275666` and APK run `43164275672` succeeded.
- PR #85 and #86 are CLOSED (merged) in the current repository state.

## Current source/deployment facts
- Current `sw.js` cache constant is `infojano-v278`.
- Root `ads.txt` exists in GitHub main and contains the publisher authorization line supplied by the user. PR #95 is merged. Direct access to `https://infojano.com/ads.txt` could not be verified by the available browser inspection, so live HTTP availability remains UNVERIFIED; do not claim the previous 404 is fixed until a direct HTTP check succeeds.
- Latest successful Pages deployment before the migration-document commits was run `43164275666` for PR #103 merge commit `c5b6688...`.
- The Pages workflow for migration commit `aa62dfc4246e96f26e61e4f530ade7e103be886a` was still in progress at the time of this audit (run `43180830692`). Recheck the latest run after the final documentation commit; do not infer deployment success from the source commit alone.

## Items not fully migrated / still pending
- The exact verbatim Header + Hero HTML/CSS pasted by the user is not embedded in this master file or the migration supplement. The file preserves design requirements, screenshots/visual descriptions, source-audit findings and the instruction not to guess. The exact original code itself remains NOT TRANSFERRED; recover it from the original conversation if accessible, otherwise ask the user to provide it again before literal implementation.
- The separate USAJIO Personal Finance, Health & Fitness, and AI & Software website projects are intentionally not mixed into this InfoJano repository. Their separate master records still need to be located and migrated to their own appropriate project repositories/files if the user wants a complete multi-site migration.
- MobilePro remains a separate shop-demo project and must not be merged into InfoJano.
- Live mobile visual QA, direct custom-domain HTTP verification, ads.txt live response, and PR #94 are not marked complete by this documentation transfer.

## Transfer operating rule
Keep the original historical master/archive files intact. Use this current master plus the migration supplement for handoff. Reconcile current GitHub state before relying on any historical PR/cache/deployment status.


---

# 12 November 2026 — Percentage Calculator final update and handoff

## User requirements and completed work
- Replace the plain-text list with 21 interactive app-style feature cards. Each card shows a tool icon, name and short explanation; clicking selects the matching operation in the main calculator and scrolls/focuses its input.
- Place all 21 cards ABOVE the “How to calculate a percentage” guide.
- Expand Percentage Calculation Examples / Explainer, Percentage Calculator FAQs, and Common Percentage Calculator Questions to the same full content width as the hero (remove narrow 900px caps).
- Give feature icons distinct colours.
- Preserve the hero and calculator logic. No homepage redesign or unrelated page changes.

## Merged PRs
- PR #123: https://github.com/barsulkhan/InfoJano/pull/123 — 21 feature cards. Merge commit `40c8bd8b894b7b03bf8a9fd3f49c541b4cd29e91`.
- PR #124: https://github.com/barsulkhan/InfoJano/pull/124 — moved cards above guide; full-width explainer/FAQ/Common Questions panels; eight-colour app-icon palette; changed only `percentage.html` and `sw.js`. Merge commit `ae043c38d1982f86d9c303d1a7898c4d61f663bb`.
- PR #124 preserved hero and calculator JavaScript. Existing favicon file `infojano-mark.svg` was confirmed in repo; no favicon source was removed or replaced.
- Service worker cache bumped from `infojano-v281` to `infojano-v282`.

## Deployment status
- GitHub Pages deployment run `43228323251` for merge commit `ae043c38d1982f86d9c303d1a7898c4d61f663bb` completed successfully.
- Workflow: https://github.com/barsulkhan/InfoJano/actions/runs/43228323251
- APK workflow run `43228323782` was queued at last check; recheck if needed.
- Live page: https://infojano.com/percentage.html
- Deployment success is verified, but live desktop/mobile visual QA and actual browser-tab favicon rendering still need direct inspection.

## Pending QA
- [ ] Inspect live page on desktop and mobile; confirm all panels match hero width and there is no horizontal overflow.
- [ ] Test all 21 cards select the correct mode and focus the main calculator.
- [ ] Confirm favicon/page icon renders in the browser tab. Do not replace it without evidence of a defect.
- [ ] Recheck APK workflow run `43228323782` if APK status is relevant.
- [ ] Record only verified visual QA results here.

## Next-chat handoff
"InfoJano project resume করো। প্রথমে GitHub repo `barsulkhan/InfoJano`-এর `docs/04_InfoJano_Master_CURRENT_2026-11-12.md` এবং `docs/INFOJANO_MASTER_MIGRATION_SUPPLEMENT_2026-11-12.md` পড়বে। Latest work: PR #123 and #124 merged; latest merge commit `ae043c38d1982f86d9c303d1a7898c4d61f663bb`; Pages workflow `43228323251` success; cache `infojano-v282`. 21 coloured feature cards are above the percentage guide; explainer, FAQ and Common Questions sections have full-width rules. Next task: visually inspect live `https://infojano.com/percentage.html` desktop/mobile, verify all 21 card actions and favicon, then update this same GitHub master file. Do not save project files to ChatGPT Library. Keep all canonical handoff notes inside this InfoJano GitHub repo. Preserve historical archives, homepage and calculator logic."

## Storage instruction
The user explicitly said not to save project files in ChatGPT Library. The canonical project source-of-truth and handoff notes must remain inside the InfoJano GitHub repository. Do not delete or overwrite historical master/archive files.


---

# 12 November 2026 — Percentage Calculator Live Visual QA checkpoint

## Source and deployment verification
- Re-fetched `percentage.html` from `main`; blob SHA: `7f4c26a50730cf0f5a38f77ae2f5c2ff3e997ca3`.
- Re-fetched `sw.js`; current cache remains `infojano-v282`.
- GitHub Pages deployment run `43228323251` was inspected at job level. `build`, `report-build-status`, and `deploy` all completed with conclusion `success`.
- No source files were changed during this QA pass.

## Static UI and interaction audit
- Confirmed all 21 feature cards are present, have 21 unique `data-percent-mode` values, matching calculator mode options, individual target URLs, and the shared `choosePercentageFeature` handler.
- Confirmed each card mode is represented in the calculator's mode configuration; no card has a missing matching option.
- Confirmed the launcher section appears before the “How to calculate a percentage” guide.
- Confirmed the feature-card grid has responsive 3-column / 2-column / 1-column breakpoints, and distinct icon colour rules for all card positions.
- Confirmed the click handler selects the matching mode, updates the calculator UI, scrolls to the calculator and focuses the primary input.
- Confirmed no duplicate HTML IDs.
- Confirmed the main calculator, feature launcher, how-to guide, explainer, FAQ and common-questions panels have explicit full-width layout rules in the current source.
- Confirmed the page links to `/infojano-mark.svg`; the SVG file exists in the repository root and is valid SVG source.
- Confirmed reduced-motion CSS handling is present.

## Live visual QA — blocked, not passed
- Attempted to retrieve `https://infojano.com/percentage.html` and the GitHub Pages fallback URL from the available browser/network environment. Both attempts failed because DNS resolution/network access was unavailable in this session.
- Therefore desktop rendering, Android/mobile rendering, real horizontal-overflow checks, live card click/focus behavior and actual browser-tab favicon rendering remain UNVERIFIED.
- Do not mark Live Visual QA complete based only on source inspection or a successful deployment workflow.

## Current status and next action
- [x] Source-level audit of 21 cards and mode-option mapping.
- [x] Source-level responsive/full-width CSS and favicon asset checks.
- [x] Pages deployment job success rechecked.
- [ ] Live desktop visual inspection.
- [ ] Live Android/mobile visual inspection and horizontal-overflow check.
- [ ] Test all 21 cards in the live browser for correct mode selection and focus.
- [ ] Verify the favicon actually renders in a browser tab.
- Next: retry direct live access when network/DNS is available. If browser access remains unavailable, obtain current desktop and Android screenshots plus one interaction check from the user before changing any code. Do not repeat the completed source audit or modify unrelated files.


---

# 12 November 2026 — Percentage Calculator SEO and Brazil CTR audit (PR #126)

## User request
- Improve Google Search visibility and click-through relevance for the Percentage Calculator.
- Reuse the Brazil-related Portuguese search terms shared in the earlier conversation.
- Audit and correct all Percentage Calculator SEO landing pages, not only the main calculator.

## Recovered Brazil query context
- Prior user-approved query set included:
  - `porcentagem online`
  - `calculadora porcentagem online`
  - `calculadora online de porcentagens`
  - `porcentagem online calculadora`
  - `calculadora porcentagem`
  - `calculadora de desconto`
- Earlier Search Console screenshot observation: Brazil 502 impressions, 1 click, CTR 0.2%, average position 12.5. Queries included `porcentagem online`, `calculadora porcentagem online`, and `calculadora de desconto`. This is a historical screenshot observation, not fresh live Search Console data.
- Search intent mapping: the percentage terms belong on `percentage-pt-br.html`; `calculadora de desconto` belongs on `discount-pt-br.html`, not the general percentage landing page.
- Longer keyword variants are present in the Brazilian Portuguese percentage page's visible content. Do not stuff all variants into every English feature page.

## Full 17-page English SEO audit
Audited the 17 Percentage Calculator SEO pages from PR #85, plus the related `remove-gst-from-total-calculator.html` page from PR #86, main `percentage.html`, and both Brazilian Portuguese landing pages.
- Confirmed all 17 English SEO landing pages are included in `sitemap.xml`.
- Confirmed each audited English feature page has its own unique title and meta description, a self-referencing canonical URL, WebApplication structured data and FAQ structured data.
- Confirmed the main English and Brazilian Portuguese percentage pages have reciprocal `en` / `pt-BR` / `x-default` alternate links.
- Confirmed the Brazilian Portuguese discount page has matching locale alternates for the English discount page.
- No need to add Portuguese hreflang tags to English feature pages that do not have translated counterparts.
- No changes to calculator logic, hero/layout, homepage, sitemap, service worker or other protected files.

## PR #126 — open, not merged
- PR: https://github.com/barsulkhan/InfoJano/pull/126
- Branch: `seo/percentage-brazil-ctr-refresh`
- Changed files: exactly `percentage.html`, `percentage-pt-br.html`, `discount-pt-br.html`.
- Main English Percentage Calculator title shortened from 76 to 52 characters; description shortened from 175 to 143 characters. Matching Open Graph, Twitter and WebApplication description values were updated.
- Brazilian Portuguese percentage title refined to `Calculadora de Porcentagem Online Grátis | InfoJano`; description refined to match the Portuguese online-percentage intent. Open Graph and Twitter descriptions now match the SEO description.
- Brazilian Portuguese discount title shortened to `Calculadora de Desconto Online Grátis | InfoJano`; title and description metadata aligned across SEO, Open Graph, Twitter and WebApplication data.
- Final discount-page metadata check confirmed meta description, Open Graph description and Twitter description match exactly.
- Latest branch commit after metadata consistency correction: `8683eba08ca103ba18ce5779402041b9f6257c52`.
- PR #126 is OPEN and NOT MERGED. Do not claim changes are live or Google has recrawled them.

## Pending Google Search validation
- [ ] Review fresh Search Console Performance data by country = Brazil, page, query, device, clicks, impressions, CTR and average position.
- [ ] Verify which URL currently receives each Brazil query; especially confirm whether `calculadora de desconto` is landing on the discount page.
- [ ] After merge/deployment, request recrawl for the changed URLs if Search Console allows; a request is not proof of indexing.
- [ ] Recheck indexed/canonical URL state and performance after Google recrawls. Do not promise ranking or CTR improvements.
- [ ] Ask the user for a Search Console page/query export or screenshot if account data is not available through a connected source.
- [ ] Do not repeat the completed 17-page static metadata/sitemap audit unless source changes.

## New-chat handoff
"Continue InfoJano Percentage Calculator SEO from GitHub. Read this master and migration supplement. PR #126 is open/not merged and contains the measured SEO metadata corrections for `percentage.html`, `percentage-pt-br.html`, and `discount-pt-br.html`. The 17 English SEO pages have already been audited for unique title/description, canonical, WebApplication/FAQ schema and sitemap inclusion. Brazil terms recovered: `porcentagem online`, `calculadora porcentagem online`, `calculadora online de porcentagens`, `porcentagem online calculadora`, `calculadora porcentagem`, `calculadora de desconto`. Map the discount term to `discount-pt-br.html`. Next inspect PR #126 and get fresh Search Console page/query/country data; don't claim Google indexing or CTR change until verified. Do not save any project file in ChatGPT; GitHub only."

## 12 November 2026 — Percentage Calculator 17 SEO pages: match the current main hero design

### Why this correction was required
- The current percentage.html main hero is the light-blue ID Card Studio-style hero: compact percentage icon, page title with animated light-sweep word, four feature tiles, two overlapping animated percentage cards on the right, and a four-item benefit strip.
- The 17 SEO pages still used the older dark-blue ij-master-hero.ij-unified-currency-hero banner introduced by the earlier PR #85 work. That earlier hero no longer matched the current main Percentage Calculator design.
- The user explicitly asked to study the current main hero first, then standardise all 17 SEO page heroes with accurate sizing and responsive proportions.

### Implemented on the dedicated branch
- Branch: design/percentage-seo-hero-match-current-main
- The same current main-page hero structure and scoped styling were applied to all 17 dedicated Percentage SEO pages listed below.
- Each page retains its own H1 and page-specific hero description. The shared visual now includes the same percentage icon, four feature tiles, two overlapping animated percentage cards, and four benefit pills.
- SEO titles are allowed to wrap naturally on desktop so long page-specific headings do not overflow the text column. Tablet and mobile layouts use responsive two-column/stacked arrangements and centered mobile headings.
- The old hero's Calculate Now and Learn the Formula in-page links were retained in a compact action row immediately below the hero, so the main hero's dimensions stay aligned with the current reference.
- Existing page-specific percentage.html?mode=... CTA, calculator form, guide, FAQ, structured data, canonical metadata, related links, and page scripts were preserved.
- Only the 17 SEO page files and sw.js are intended to change. No main Percentage Calculator, homepage, shared header, sitemap, calculator logic, or other tool page is changed.

### The 17 updated SEO pages
1. exam-marks-percentage-calculator.html
2. increase-decrease-by-percentage-calculator.html
3. original-price-before-discount-calculator.html
4. percent-of-number-calculator.html
5. percentage-decrease-calculator.html
6. percentage-difference-calculator.html
7. percentage-increase-calculator.html
8. percentage-of-percentage-calculator.html
9. percentage-to-decimal-converter.html
10. percentage-to-fraction-converter.html
11. profit-loss-percentage-calculator.html
12. remove-gst-from-total-calculator.html
13. repeated-percentage-change-calculator.html
14. reverse-percentage-calculator.html
15. successive-percentage-change-calculator.html
16. target-marks-calculator.html
17. what-percent-calculator.html

### Service Worker
- All 17 SEO HTML pages are present in the Service Worker precache list.
- Previous cache: infojano-v282.
- Updated cache on the branch: infojano-v283, commit acd605746f770559210b895548d152f1bd4755d7.
- This cache bump is required so returning visitors can receive the revised precached HTML.

### Source QA completed
- All 17 branch files were re-fetched and audited after editing.
- Each page has exactly one .ij-id-hero.ij-percentage-id-hero hero, four feature tiles, both percentage card illustrations, one benefit strip, and the new hero stylesheet.
- The old dark-blue hero markup and old hero stylesheet are absent.
- Both in-page action links point to existing #calculator and #percentage-guide anchors.
- The original page-specific main-calculator mode link remains present.
- Canonical link, WebApplication schema, FAQPage schema, and site-header.js remain present on all 17 pages.
- The main percentage.html reference file itself was not changed.
- The branch was created from current main and was initially 0 commits behind. Final PR diff must be checked to confirm only the 17 pages, sw.js, and this master file are included.

### Not yet completed
- PR creation/review and user approval to merge.
- GitHub Pages deployment after merge.
- Direct live HTTP/rendered visual inspection and real Android desktop/mobile viewport QA. Source checks do not substitute for visual device verification.
- Do not claim the new hero is live until the PR is merged and the post-merge Pages deployment succeeds.

### Next steps
1. Open the dedicated PR and review its complete changed-file list and diff.
2. Wait for the user's merge approval; do not merge automatically.
3. After approval and merge, verify the GitHub Pages deployment tied to the merge commit.
4. Open the 17 live URLs and inspect desktop/mobile hero proportions, heading wrapping, card illustration overlap, tile alignment, breadcrumb alignment, and action links. Record any live visual test limitations separately.

- PR #127: https://github.com/barsulkhan/InfoJano/pull/127 — OPEN, NOT MERGED. Branch: design/percentage-seo-hero-match-current-main. It contains exactly the 17 SEO pages, sw.js, and this master file. User approval is required before merge.

## PR #127 — Merge confirmation (12 November 2026)
- PR #127, Match all 17 Percentage SEO heroes to the current main banner, was successfully squash-merged into main.
- Merge commit: a1bea5bb05d2278ee4d15d49ad8cff859ab385ed.
- The merged scope is the 17 SEO page files, sw.js (cache v283), and this master checkpoint.
- The 17 page source QA checks remain as recorded above.
- Post-merge GitHub Pages deployment and live desktop/mobile visual QA are still pending verification. The available commit-workflow lookup returned no PR-triggered workflow runs for the merge commit; this is not proof of deployment success or failure.
- Do not mark the live design complete until the Pages deployment and live rendering have been verified.



## 12 Nov 2026 — Percentage SEO hero illustration motion fix (pending review)
- User requested gentle animation on the two overlapping percentage-card illustrations across all 17 Percentage SEO landing pages, with no other visual/content changes.
- Added independent, subtle vertical float and slight tilt motion to both front and back cards on all 17 pages. Existing fixed transforms remain intact; animation uses individual `translate` and `rotate` properties so prior important transform overrides do not suppress movement.
- Respects `prefers-reduced-motion: reduce` by disabling both card animations.
- No hero copy, layout, card sizes, illustration markup, calculator logic, SEO metadata, breadcrumbs, buttons, or other sections changed.
- Confirmed all 17 pages are already in the service-worker precache list; bumped cache from `infojano-v283` to `infojano-v284` so clients refresh updated page CSS.
- Branch: `fix/percentage-seo-hero-card-motion`. PR and deployment/live verification are pending. Do not mark complete until source QA, Pages Actions and live rendering are checked.
- Separate clarification still pending: user mentioned improving the design of some numbered/tile text on the main page; do not change this until the exact elements are confirmed.


## 12 Nov 2026 — Percentage SEO hero motion merge and deployment verification
- PR #128, "Restore subtle animation on Percentage SEO hero cards", was successfully squash-merged into main.
- Merge commit: 74647612e92bd74b9b5c172afe06572d7ee106fe.
- Verified main contains service-worker cache infojano-v284 and the front/back card animation keyframes in the Percentage SEO page source.
- GitHub Pages deployment run #2106 for the exact merge commit completed successfully (success).
- The APK build workflow run #403 for the same commit also completed successfully.
- This confirms source merge and Pages deployment. Direct live browser rendering and Android/desktop visual QA have not yet been completed; do not claim visual QA complete.
- Separate open Percentage SEO metadata PR #126 remains pending review/merge; it is not part of the animation fix and must be tracked separately.
- User's separate request to improve the numbered/feature text styling on the main Percentage Calculator page remains ambiguous and untouched pending clarification.


## 12 Nov 2026 — Percentage Calculator remaining SEO and main hero polish
- PR #126 ("Improve Percentage Calculator SEO snippets for English and Brazil") was merged successfully as commit 39c76d4cd08930ff760528e753d3d0bd9fc32676. It updates the English main Percentage Calculator title/description and Brazilian Portuguese percentage/discount metadata; no calculator logic or layout changes.
- Follow-up design task is isolated to percentage.html: polished the four hero feature tiles and four benefit-strip items with stronger card hierarchy, differentiated icon treatments, refined spacing, subtle hover states, and responsive 2-column mobile layout. Text, calculator logic, hero layout, and unrelated pages are unchanged.
- Service worker cache bumped to infojano-v285 for the main-page style update.
- Branch: design/percentage-main-hero-feature-polish. Pending PR review/merge, Pages deployment, and direct desktop/mobile visual QA.


## 12 Nov 2026 — Remaining Percentage Calculator tasks merged
- PR #126 SEO snippet update merged successfully: 39c76d4cd08930ff760528e753d3d0bd9fc32676. GitHub Pages deployment for this commit completed successfully. Verified the English main page title/description and both Brazilian Portuguese page title/descriptions on main.
- PR #129 main Percentage Calculator hero feature/benefit design polish merged successfully: b7f19ba5ac364c28a088367c970e084f5423208d. The four feature tiles and four benefit items now have refined card styling, icon treatments, spacing, hover feedback, and responsive mobile two-column layout. Calculator logic and page copy were not changed.
- Service Worker cache on main is infojano-v285. Source verification passed for the new styles and reduced-motion support.
- GitHub Pages deployment for PR #129 commit is currently queued/in progress (run 43248468327). Do not mark the main-page styling live until this deployment succeeds and a browser/mobile visual check is completed.


## 2026-11-12 — Percentage Calculator final deployment verification
- PR #129 (main Percentage Calculator hero feature tiles and benefit strip polish) is merged at `b7f19ba5ac364c28a088367c970e084f5423208d`.
- GitHub Pages deployment for that merge completed successfully: run #43248468327, conclusion `success`.
- Service Worker cache version: `infojano-v285`.
- Source and deployment are verified. Remaining check: direct live visual QA on actual mobile and desktop viewports; do not mark visual QA complete until rendered appearance is inspected.
- Main page: https://infojano.com/percentage.html
- Deployment run: https://github.com/barsulkhan/InfoJano/actions/runs/43248468327


## 2026-11-12 — Reusable Hero Banner and Feature Layout Design Standards
These standards are the default reference for future InfoJano tool/calculator pages. Apply them consistently unless the user approves a different design. Do not redesign the homepage or protected pages without explicit permission.

### Hero banner composition
- Build a clear visual hierarchy: eyebrow/category label when useful, one prominent H1, concise supporting subtitle, and the primary visual or calculator preview.
- Keep the headline and subtitle readable, with intentional line length, line-height, alignment, and spacing. Avoid crowding the hero with excess copy.
- Use supporting feature tiles only when they add value. Give each tile a clear icon, short heading, and concise description.
- Use cohesive surfaces (subtle gradients where appropriate, restrained borders, radius, and soft shadows); maintain strong contrast and a polished, consistent icon treatment.
- Keep the banner balanced across desktop and mobile. Define responsive behavior deliberately; do not simply shrink the desktop composition.

### Below-hero feature and benefit content
- Use a consistent grid and equal, intentional gaps. Align icon, heading, and description within each item.
- Keep card heights, padding, typography hierarchy, and baseline alignment consistent where practical.
- Preserve enough whitespace between cards and between icon, title, and body copy. Prevent text collisions, cramped wrapping, or uneven spacing.
- Use desktop columns appropriate to the content (often four for four short items) and a mobile two-column layout when readable; collapse to one column if the content needs more width.
- Add restrained hover/focus feedback and honor `prefers-reduced-motion`. Animation must never impair reading or interaction.
- Prioritize accessibility, responsive behavior, readability, and performance over decorative effects.

### Mandatory banner specification to record before creating each future banner
For every new banner, document and agree on these details before implementation:
1. **Placement and purpose:** page name, section, target audience, and what the banner should communicate.
2. **Canvas dimensions:** exact desktop width × height in pixels and aspect ratio; exact mobile width × height and aspect ratio (or the responsive sizing rule if fluid). Do not assume dimensions from a previous banner.
3. **Safe area:** text/logo/button safe-zone dimensions and margins; note any crop-sensitive region.
4. **Content inventory:** exact headline, subtitle, optional label, CTA text, logo/brand elements, and any supporting labels or badges.
5. **Photo/visual asset specifications:** whether a photo/illustration is needed; subject and composition; source or generation approach; exact displayed/rendered image width × height (or container ratio), aspect ratio, crop/fit mode, focal point, and mobile crop behavior. Record the source/export dimensions and file format/weight target when relevant.
6. **Layout measurements:** text and visual column proportions, alignment, gaps, padding, spacing between heading/subtitle/CTA, and feature-card dimensions.
7. **Typography and visual style:** font family/weight, heading and body sizes for desktop and mobile, line-height, colors, contrast, card treatment, icon style, and animation behavior.
8. **Responsive and accessibility checks:** mobile/tablet/desktop breakpoints, text wrapping, image crop, contrast, keyboard/focus states, and reduced-motion behavior.
9. **Delivery and QA:** asset filename/path in the GitHub repo, exported dimensions, file size, page files changed, cache version if needed, and verified screenshots/live checks.

### Implementation and change-control rules
- Never invent or silently choose a banner's exact dimensions or photo crop when those affect the design; record the specification first or ask the user to approve it.
- Keep the approved copy and existing calculator functionality unchanged unless the user explicitly requests edits.
- Avoid unrelated page, homepage, SEO, or shared-component changes.
- After implementation, verify the source, responsive CSS, asset dimensions/weight, GitHub diff, deployment, and actual rendered mobile/desktop appearance. Do not mark visual QA complete without inspecting the rendered page.
- Keep this standard in the InfoJano GitHub master file and use it as the checklist for future banners and hero sections.


## 2026-11-12 — Full Sitemap and canonical source audit
- Audited all 88 URLs listed in the current `sitemap.xml` against the GitHub main source tree. All 88 corresponding HTML files exist.
- All 88 sitemap pages have a title, meta description, and canonical tag in source; none of the audited sitemap pages declares `noindex`.
- Found one canonical defect: `id-card-print-studio.html` pointed to the old GitHub Pages URL. Corrected it to `https://infojano.com/id-card-print-studio.html`.
- Found legacy sitemap inconsistencies: `sitemap-infojano.xml` contained 58 old `barsulkhan.github.io/InfoJano/` URLs; `sitemap.txt` contained only 67 custom-domain URLs. Both are being synchronized to the same 88 canonical custom-domain URLs in `sitemap.xml`.
- `robots.txt` allows crawling and declares `https://infojano.com/sitemap.xml`.
- The three `word-to-*.html` utility route files are intentionally `noindex,follow` and canonicalize to `word-converter.html`; they are not sitemap targets. The 404 page is also correctly noindex and excluded.
- Metadata length review found several long titles/descriptions that may be truncated in search snippets; this is a presentation optimization, not an indexing block. Further copy review should be prioritized after live GSC data.
- Important limitation: source audit does not establish HTTP status, Google crawl state, indexed status, or URL Inspection outcomes. Google Search Console access is required to verify those. Do not claim all 48 remaining URLs are indexable or submit-ready until GSC inspection is completed.
- Proposed correction branch: `fix/indexing-sitemap-canonical-audit`. Await PR review, merge, Pages deployment, then submit/refresh sitemap in Search Console and inspect eligible URLs.
