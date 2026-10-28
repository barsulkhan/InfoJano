# InfoJano Smart Master Project — Latest
Updated: 28 October 2026
Repository: https://github.com/barsulkhan/InfoJano
Live site: https://barsulkhan.github.io/InfoJano/

## Important working rules
- Continue from this file in a new chat. User works from Android mobile, prefers Bengali/Romanized Bengali and copyable links.
- Take the lead on technical tasks; explain only the essential steps the user must perform.
- Do not make speculative visual/code changes. Inspect existing code first, change the smallest relevant area, then verify the exact edited block.
- Preserve existing tools and workflows. In particular, don't break the ID Card Print Studio's manual crop, front/back selection, print dimensions, PDF/JPG export, or any unrelated document rules.
- After changing web assets, update service-worker cache version sequentially and record the change.
- Do not claim visual/PDF testing succeeded unless actually tested with the user's original file.

## Latest work: Ayushman card PDF crop and portrait quality
User showed an original Ayushman Bharat PM-JAY PDF and screenshots of InfoJano-generated card. Problems:
1. Back-side top heading/text was being clipped by automatic crop.
2. Portrait looked artificially dark/marked compared with the original PDF.

Changes committed to GitHub:
- Commit `2668461d0ddb1b6e35a8a8fd7943d482971eccdb`: extra top margin for Ayushman PDF Back crop detector.
- Commit `37c0c89493152178ab2829d8503c3d82a875a191`: service-worker cache bumped to v28.
- Commit `22d8f6f08fcbc836210d597d1eafd5345710c57d`: removed artificial darkening of Ayushman image pixels and removed contrast/saturation filter on rendered Ayushman PDF pages.
- Commit `8ebcb5b0109a9113c4c27b2b0149c42d11716968`: cache bumped to v29.
- Commit `fdc81b8475661d1e0e2d3290c8e1287db22f02f6`: changed Ayushman PDF handling to preserve each full PDF page as a manual-crop source, instead of relying on automatic ink-bound detection that could clip heading text.
- Commit `d8706663cf9b35f2d23440473b19ab2afdebd1ef`: cache bumped to v30.

Current live tool:
https://barsulkhan.github.io/InfoJano/id-card-print-studio.html

Current expected workflow for Ayushman PDF:
1. Select “Ayushman Bharat Card”.
2. Upload original PDF.
3. Choose the original full PDF page in “Original source to crop”.
4. Manually draw crop around only the complete top card face, including all orange header and bottom orange band, and excluding the instruction panel below.
5. Press “Use crop as Front” or “Use crop as Back”.
6. Inspect preview before exporting PDF/JPG.
The code now preserves original PDF page pixels (no artificial darkening/filter). The PDF branch should supply full page with label “full PDF page (manual crop)”. Need verify the actual live page reflects this after GitHub Pages deploy and the browser has refreshed; do not claim user’s PDF was directly tested by us.

Important caution:
- User previously said “file save carefully, avoid these mistakes”. Do not make further guess-based edits. Before editing again, fetch current `id-card-print-studio.html` and `sw.js`, inspect exact current blocks, then apply the minimal change.
- If user reports crop still wrong, ask for a screenshot showing the crop selection box or preview; adjust based on the exact evidence. Do not reintroduce automatic PDF crop without robust testing.
- When opening the live tool after deploy, advise a hard refresh/reopen or close/reopen tab to avoid stale service-worker cache.

## Site and SEO
- GitHub repository: https://github.com/barsulkhan/InfoJano
- Homepage: https://barsulkhan.github.io/InfoJano/
- Sitemap XML: https://barsulkhan.github.io/InfoJano/sitemap.xml
- Sitemap TXT: https://barsulkhan.github.io/InfoJano/sitemap.txt
- robots.txt: https://barsulkhan.github.io/InfoJano/robots.txt
- Google Search Console: https://search.google.com/search-console/
- Sitemap report: https://search.google.com/search-console/sitemaps

Search Console state as of 28 Oct 2026:
- Homepage inspection said “URL is on Google” / indexed.
- Page indexing report showed 21 indexed and 0 currently affected in one view.
- Sitemap reports for sitemap.xml and sitemap.txt showed “Couldn't fetch” / discovered 0, despite the XML opening normally in a browser and the sitemap URL live test saying “URL is available to Google”. The sitemap itself does not need to be indexed.
- Do not repeatedly resubmit or alter sitemap without inspecting a fresh detailed error; wait and recheck after a reasonable interval. Sitemap status is not proof that all site pages are broken.

## PWA
- Service worker cache is now `infojano-v30` after the latest crop/portrait changes.
- Manifest uses `/InfoJano/` start_url and scope, with app icons.
- If the latest code doesn't appear, refresh/reopen after deployment; service worker cache version is intended to trigger new assets.

## General project context
- InfoJano is a mobile-first global everyday utility/information portal, built and maintained from Android with limited budget.
- Main categories: calculators, AI & technology, money & finance, documents/online services, weather/daily info, education, jobs/careers, trending.
- User wants straightforward, accessible UI, PWA installability and SEO pages.
- Preserve existing tool pages/features and previous design decisions unless specifically asked to change them.
- Earlier master files: `InfoJano_Smart_Master_Project_COMPLETE_2026-10-20.md` and `InfoJano_Smart_Master_Project_LATEST_2026-10-25.md` (if present in chat/library). This file is the current checkpoint and focuses on changes through 28 Oct 2026.

## Next actions
1. Verify GitHub Pages has deployed commit `fdc81b8475661d1e0e2d3290c8e1287db22f02f6` and service worker `v30`.
2. User tests the Ayushman PDF using manual crop and checks full header/text and portrait in the preview/export.
3. If any clipping remains, inspect crop selection and source page screenshot first; avoid blind coordinate tweaks.
4. Continue Sitemap/Search Console follow-up separately; don't mix SEO changes into ID-card crop fixes.


## Update after master checkpoint: wider card cutting gap
Date: 28 October 2026
- User asked to increase the physical cutting gap between Front and Back card faces because the previous 5 mm gap was too narrow to cut comfortably.
- Updated `id-card-print-studio.html` commit: `816d4a0147ff955627b564bafb0c1743d0bc911e`.
- Gap is now 10 mm in the layout preview, PDF export and JPG export for side-by-side and stacked layouts.
- Fit validation was updated to account for the larger gap, so export should warn if cards no longer fit the selected paper.
- Updated service worker cache from `infojano-v30` to `infojano-v31` in commit `7e86fd3f65d8816ae929959ca477aff292e3c7b9`.
- Live test/physical print not yet verified. After GitHub Pages deploy, user should refresh/reopen the tool and inspect preview before printing at Actual size / 100%.

## Checkpoint update — 28 October 2026 (Sitemap alignment and Ayushman crop paused)
- User asked to pause the Ayushman card crop/print-size issue and continue other InfoJano work. Do not modify that crop workflow further until revisited.
- Current service-worker cache in `sw.js`: `infojano-v32`. The latest crop-related commit `333659471dac6e88a1fcc8c84e39c1822fe3686f` adds `trimAyushmanOuterWhitespace(canvas)` to trim blank margins accidentally included in a manual Ayushman crop; cache bump commit `2fc17654b3991f77a34e4ac08cd6790031314932`. This change has NOT been tested with the user's original PDF or physical print.
- Sitemap audit found `sitemap.xml` was missing `passport-photo-maker.html` and `pdf-to-jpg.html`, while `sitemap.txt` was missing `discount-pt-br.html` and `percentage-pt-br.html`.
- Fixed `sitemap.xml` in commit `3971ff4681f927480604ca8cbb1e5c5b5d833722` and `sitemap.txt` in commit `8a74342f2b6a25361dd4559288a226b7db4fcedd`. Both now list the same 28 page URLs.
- This is a repository content check only; live GitHub Pages deployment and Google Search Console sitemap status still need a follow-up check. Do not claim Google has fetched/indexed these pages. Recheck after deployment settles.
- Next non-Ayushman priorities: (1) verify the live sitemap URLs after deployment, (2) use Google Search Console Performance > Search results > Queries and Countries to guide SEO updates for Discount and Percentage calculators, (3) continue checking remaining SEO pages and homepage tool links without speculative redesign.

## SEO update — 29 October 2026
- User shared a Google Search Console Performance screenshot for the last 3 months: 2 clicks, 83 impressions, 2.4% average CTR, average position 30.4. Visible queries included “percentage calculator online” (2 impressions), “count percentage online”, “percentage calculator”, “percentage calculate”, “discount calculator online”, “count percentage”, “28 percent of 170”, and “sentence counter”. The screenshot shows only part of the query list; these are early, low-volume signals, not enough to infer long-term performance.
- Updated only SEO title and meta description on `discount.html` and `percentage.html` to align naturally with the visible queries. Existing calculator functionality, layout, canonical URLs, and on-page guides were not changed.
- Discount page commit: `8ffc49bcb96d7e1f1f1e9504b4ac8f80f81fc2d0`. New title: “Discount Calculator Online: Sale Price & Savings | InfoJano”.
- Percentage page commit: `178c9a8f58f9bda16bf072aa681acd57df153a00`. New title: “Free Online Percentage Calculator | InfoJano”.
- Updated service-worker cache to `infojano-v33` in commit `7664e075a0f9e944a5f6b742fffee70347eda4bd`.
- These are repository edits verified by fetching the updated file content; not yet confirmed deployed on GitHub Pages or measured for ranking/traffic impact. Recheck live page source after deployment and compare Search Console performance after several weeks.

## Search Console page-filter follow-up — 29 October 2026
- User shared a 3-month Search Console report filtered to the Discount Calculator URL.
- Report cards: 0 clicks, 42 impressions, 0% CTR, average position 18.
- Visible query row: “discount calculator online” with 1 impression and 0 clicks. Query table does not show all page impressions, likely because only some queries are visible; do not assume the other impressions are from this exact query.
- Interpretation: early low-volume data; average position 18 is not the same as fixed rank for every search. Do not make another title/description edit immediately because the title/description were just updated in repo on 29 Oct and Search Console data may include pre-update dates. Wait for new data after deployment; recheck over the next few weeks.
- Next step when user returns to GSC: inspect the Percentage Calculator page filter similarly, then compare both pages. Do not make speculative edits without enough query data.

## Search Console follow-up — 29 October 2026
- User shared page-filtered Search Console screenshots (last 3 months).
- Discount page report: 42 impressions, 0 clicks, 0% CTR, average position 18. The visible Queries table shows “discount calculator online” with 1 impression and 0 clicks. This is too little query-level data to conclude the title is poor.
- Percentage page report: 24 impressions, 0 clicks, 0% CTR, average position 55.5. Visible queries include “percentage calculator online” (2 impressions), “count percentage online”, “percentage calculator”, “percentage calculate”, “count percentage”, “28 percent of 170”, and “calculate percentage”, each with very low impressions.
- Interpretation: the pages are receiving early Google exposure, but the Percentage page's average position is low; improve usefulness/relevance and monitor after enough data accumulates rather than repeatedly changing title tags. No code changes were made based solely on these screenshots.

## Percentage calculator functionality improvement — 29 October 2026
- Based on the Search Console report (24 impressions, 0 clicks, average position 55.5) and visible queries such as “percentage calculator online”, “count percentage”, and “28 percent of 170”, inspected `percentage.html`.
- Found a mismatch: page copy described both “X% of Y” and “X is what percent of Y?” but the calculator only supported the first operation.
- Added a two-mode selector so users can calculate (1) a percentage of a number and (2) what percentage a part is of a whole. Added validation preventing division by zero; existing canonical URL, layout, FAQ, and other page sections retained.
- Commit: `22be50d691a3713abbb4b1b69cc3aac02b8ae23f`.
- Bumped service worker cache to `infojano-v34` in commit `5ee3d7bace28adf4df4be3edf8dbe04496f0f1e1`.
- Code changes were committed and source re-fetched for inspection. Interactive browser testing/live deployment not yet confirmed; test both modes with examples after GitHub Pages deploy: 20% of 150 should be 30; 25 is 12.5% of 200.

## Discount calculator improvement — 29 October 2026
- Search Console screenshot showed 42 impressions and 0 clicks for `discount.html`, average position 18; visible query “discount calculator online” had only one impression, so the sample remains small.
- Added a second calculation mode to `discount.html`: calculate the discount amount and percentage from original price plus sale price. Existing mode for sale price from a discount percentage remains available.
- Validation handles missing/invalid values, original price zero, and sale price greater than original price.
- Commit: `fcecb0785719f08ce21eaca9b01692182b6d3e40`.
- Bumped service-worker cache to `infojano-v35` in commit `b35892046916070868c7086f5d0f1d79818d09fa`.
- Repository source was fetched and exact changes were checked; live interactive testing not yet confirmed. Test examples after deployment: original 1000 with 20% discount => save 200, sale price 800; original 1000 and sale price 800 => discount 200 / 20%.

## GST calculator improvement — 29 October 2026
- Inspected `gst-calculator.html` before editing. Existing calculator supported price before GST only.
- Added a mode selector for price before GST or final price including GST. Both modes show the pre-tax price, GST amount, and total price. Existing rates (0%, 3%, 5%, 12%, 18%, 28%) and canonical URL retained.
- Commit: `eaf66aad279b01b195c952b4bdb9d13cfd0f13c9`.
- Bumped service-worker cache to `infojano-v36` in commit `93dbd0f0aa1a74fa4bae69049f61bbe036db8c7c`.
- Source changes were committed and inspected; live interactive testing is not confirmed. Test examples after deployment: 1000 before GST at 18% => GST 180, total 1180; 1180 including 18% GST => pre-tax 1000, GST 180.

## Age calculator improvement — 29 October 2026
- Inspected `age.html`: it calculated exact years, months and days, while the page title/description also promised weeks and days.
- Added total elapsed calendar days and total full weeks plus remaining days to the result, using UTC date arithmetic for the elapsed-day count to avoid daylight-saving hour differences.
- Existing manual DD-MM-YYYY input, future-date validation, canonical URL, and age calculation remain unchanged.
- Commit: `b6d94d70891f11e85e407dc9db1a77d487de1a10`.
- Bumped service-worker cache to `infojano-v37` in commit `929d1527cb22103ab2320220a018583111ec0dc8`.
- Source change committed and checked by re-fetching; interactive live testing not confirmed. After deployment, test a known date and verify the total-day count against a calendar/date calculator.



## Birthday weekday feature — 29 October 2026
- User asked whether people search for the weekday on which they were born. Search results show this is a real search intent, although monthly search volume has not been verified.
- Added birthday weekday to the existing Age Calculator rather than creating a separate page. After a valid date is entered, the result now prominently shows “You were born on a [weekday]” alongside exact age and total days/weeks.
- Updated page title, meta description, social title/description, and added a focused FAQ explaining how to find the birth weekday. Existing DD-MM-YYYY entry and age calculation were retained.
- Age page commit: `5a00d2661e8c3e15e9376f19c56ad0190f86db4c`.
- Service worker cache bumped from `infojano-v37` to `infojano-v38` in commit `51d2faaeb33c0d4751d18df5e52fcfd52ea29f01`.
- Source edits are committed; live deployment and interactive browser testing have not been confirmed. After deployment, test DOB `15-01-1995` and verify it reports Sunday. Live tool: https://barsulkhan.github.io/InfoJano/age.html

## Next practical plan
1. Check the live Age Calculator after GitHub Pages deploy and verify birthday weekday, exact age, total days, and full weeks.
2. Only after that works, review Search Console query data over several weeks; avoid creating a separate weekday page until there is evidence of demand.
3. Continue one calculator at a time: test real examples, preserve existing behavior, update service-worker cache, and record every change in this master file.
4. Keep the Ayushman card print/crop workflow paused until the user is ready to test it with the original PDF; do not print more cards before checking the preview and physical dimensions.


## Birthday celebration visual beside Age Calculator result — 29 October 2026
- User clarified the design should be implemented on the actual InfoJano website, not as a standalone mockup.
- Updated `age.html` to use the previously empty right side of the result card for a responsive birthday celebration panel with cake, balloons, confetti-style colors, and a “BIRTHDAY JOY” caption. Result text remains on the left; on narrow mobile screens the illustration scales down.
- Age page commit: `4ffce898b086f4824a6c2dfaac7e37f2470745bf`.
- Bumped service-worker cache from `infojano-v38` to `infojano-v39` in commit `df91892e6589914cfa3a761ce2398c07cc24155e`.
- Repository updates committed. Visual rendering on the live GitHub Pages site has not yet been tested. After deployment, open https://barsulkhan.github.io/InfoJano/age.html, calculate an age, and inspect both desktop/mobile layout before further visual adjustments.


## Animated birthday child in Age Calculator — 29 October 2026
- User asked for a closer match to the birthday celebration reference design, specifically a child illustration on the right with animation.
- Updated `age.html` result card: the right-side celebration panel now includes a child emoji, cake, balloons, a Happy Birthday caption, animated child bounce, floating balloons, gentle cake wiggle, and sparkle motion. Responsive sizing and reduced-motion accessibility support are included.
- Age page commit: `37805e48c6449596c61f3befa51db8baf4ce4a84`.
- Service worker cache bumped from `infojano-v39` to `infojano-v40` in commit `5ae5d036f3859e332cc57d0b97e5aa7f6557ac25`.
- Repository source updates are committed. Live visual appearance and animation on GitHub Pages have not yet been tested. Check https://barsulkhan.github.io/InfoJano/age.html after deployment on mobile; if the old view remains, close and reopen the page.
