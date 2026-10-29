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


## Poster-style birthday illustration in Age Calculator result — 29 October 2026
- User clarified that the right-side visual should resemble the earlier birthday poster, appearing only after a valid date is submitted, while age/weekday results remain on the left.
- Replaced the simple child/cake emojis with an inline SVG illustration: smiling child, birthday cake with candle flames, balloons, confetti and gift boxes. Added gentle CSS animation to the child, balloons and cake; responsive layout and reduced-motion support remain.
- Age page commit: `2d725220857fa9ccf10a6a37696d954f0ce929da`.
- Service worker cache bumped from `infojano-v40` to `infojano-v41` in commit `052b3e7a5b18fb5891fff4b9db23b182d1264ba2`.
- Source code committed. Live GitHub Pages rendering/animation has not yet been visually tested; check https://barsulkhan.github.io/InfoJano/age.html after deployment and send a screenshot if layout needs adjustment.


## Birthday greeting only on the user's actual birthday — 29 October 2026
- User clarified that InfoJano should not display “Happy Birthday” to every visitor who checks their age. It should greet them only when the entered birth month/day matches today's local month/day.
- Updated `age.html`: the poster-style animated birthday illustration and “Happy Birthday from InfoJano!” greeting are now conditional on the actual birthday. On other dates, the age result and birth weekday display without the celebration poster/greeting.
- Age page commit: `e48874cae6fd37c383655f934547a0c43c2283dd`.
- Service-worker cache bumped from `infojano-v41` to `infojano-v42` in commit `bf71ec3472a9ec956f09d1d981f0c13965bce7d1`.
- Code committed. Live browser behavior not yet tested. Verify two cases after deployment: DOB with today's month/day should show greeting and poster; a different DOB should not show them.


## Birthday celebration moved to date-of-birth input box — 29 October 2026
- User clarified they do not want a child sitting with a cake in a separate panel beside the result. They want the date-of-birth input's rounded rectangular box to become festive, with party/confetti popping around it, only when the entered date is the user's birthday today.
- Updated `age.html`: removed the large birthday SVG illustration from the result area; added a birthday frame around the date input with animated party/confetti decorations, pink highlight and glow only when the entered day/month matches today's day/month. The result still says “Happy Birthday from InfoJano!” only on that day; non-birthday dates show ordinary age/weekday results without the greeting or decoration.
- Age page commit: `4792190808c970da41ee01588d4fee6fc0f60723`.
- Service worker cache bumped from `infojano-v42` to `infojano-v43` in commit `8bac7256ff8d79e6274d7c02d3cddcb2b03effd4`.
- Source committed; live browser rendering not yet visually tested. Verify with today's month/day and a different date after deployment.


## Age Calculator bug fix — 29 October 2026
- User reported that entering a date and pressing Calculate My Age did not work.
- Found the cause: the script tried to call `classList.toggle` on `dobBirthdayFrame`, but the input wrapper had not been committed into the HTML. This caused a JavaScript error and stopped result rendering.
- Added the missing `dobBirthdayFrame` wrapper and confetti element around the DOB input. Age result logic is unchanged.
- Age page fix commit: `87f3cd0b66eb04c0caeddf7711ece72c8b55a889`.
- Service worker cache bumped from `infojano-v43` to `infojano-v44` in commit `175b2a73963419f74cd014373098e4c6b08e30a5`.
- Fix committed. Live page not yet browser-tested; verify after deployment with DOB 15-01-1995 and today's date to confirm the result renders and no JavaScript error remains.


## Birthday-only fireworks demo — 29 October 2026
- User asked to prepare a fireworks effect on the actual website so they can see it.
- Added a lightweight Canvas fireworks burst over the Age Calculator result card, only when the entered birth month/day matches today's date. Uses colored spark particles that burst and fade over about 1.2 seconds; respects the device's reduced-motion preference. It does not run for ordinary date checks.
- Age page commit: `bb00c0974a8de6aba8844c08b00235b9e3cec681`.
- Service-worker cache bumped from `infojano-v44` to `infojano-v45` in commit `2740098e3a537fd7de6587ab5e2147a8aa222f5c`.
- Live animation not yet visually tested. To preview the effect, use a DOB whose day/month matches the current local date; otherwise no fireworks should appear.


## Enhanced repeating birthday fireworks and greeting — 29 October 2026
- User asked for a better animation that repeats for as long as the birthday result is open, plus a warmer birthday greeting.
- Updated `age.html`: replaced the brief one-time burst with repeated colorful rocket launches, trails, star-like particle bursts and twinkling/fading sparks, with a short pause between shows. It runs only when the entered day/month matches today's date and stops/replaces the previous animation when another calculation is made. It respects the device's reduced-motion preference.
- Replaced the simple greeting with a birthday message: “Wishing You a Very Happy Birthday!”, a warm wish for happiness/love/laughter/surprises, and “With warm wishes from InfoJano”.
- Age page commit: `3560787ff2320873b9badd45c6bf5b2db7a0cac5`.
- Service-worker cache bumped from `infojano-v45` to `infojano-v46` in commit `4370bd5655e11313d42a2397b0ac21352fb4f896`.
- Code committed; live animation has not been visually tested in a browser. Preview using a DOB whose day/month matches today's local date. If the browser shows old code, close and reopen the page to refresh the service-worker cache.


## Age & History Calculator — 29 October 2026
- User approved developing the Age Calculator into an Age & History Calculator.
- Updated `age.html` to add an “On This Day in World History” card after a successful age calculation. It requests date-based events from Wikimedia/Wikipedia's public On This Day REST feed, shows up to six event descriptions with years and Wikipedia article links, and clearly explains that events are from different years rather than necessarily the user's birth year.
- The page makes an optional approximate country lookup via ipapi.co, only to display an approximate location label. Country detection failure or network/privacy restrictions do not block the global-history feature. Country-specific event filtering is not yet implemented; global history is the fallback and first working release.
- If the history API fails, a clear fallback message appears and age calculation remains available. The history panel is only shown after a valid date is calculated.
- Age page commit: `82c82cc80d59ba769067747b2c1609ea0e59b2ce`.
- Service-worker cache bumped from `infojano-v46` to `infojano-v47` in commit `c08aa0da2f1a83a5e29ebe279faed619ec98294e`.
- Source changes are committed. The live GitHub Pages rendering, API CORS response, and mobile behavior have not yet been browser-tested. Verify after deployment using DOB `15-01-1995`; check that age result still works, history card loads, links open, and offline/API failure does not break age calculation.


## History card simplification — 29 October 2026
- User reviewed the first live screenshot and said six history cards are too much to read. The intended experience is one highlighted story in a compact card for the entered date.
- Updated `age.html` to show exactly one historical event instead of up to six. If the Wikimedia On This Day feed includes an event from the user's birth year for that month/day, it is preferred; otherwise the first event returned by the feed is shown with a clear note that it happened in a different year. Changed heading to “This Day in History” and the link label to “Discover this event”.
- Age page commit: `111d715a63a59dad94fcdc1b53531ce45c0c7ade`.
- Service-worker cache bumped from `infojano-v47` to `infojano-v48` in commit `73d0fe4de7204123580de6ec2d3e051e2d71792d`.
- Source committed and verified by re-fetching; live visual testing after deployment still needed.


## Birthday-style history highlight and optional expansion — 29 October 2026
- User asked for the main history event to be highlighted in a card similar to the existing birthday greeting, with an optional way to explore additional events.
- Updated `age.html`: the first event now uses a warm pink/peach highlighted card; only one event appears initially. Added an “Explore more events” button that expands up to five additional events and changes to “Show fewer events” when expanded. If the feed includes an event in the user's birth year on the same month/day, it is selected as the main highlight; otherwise the feed's first event is used and labeled as a different-year history item.
- Age page commit: `9ea5d6b461688251a6b53ee3a5ac744981046f6d`.
- Service-worker cache bumped from `infojano-v48` to `infojano-v49` in commit `f3917e11f9bf058db7a507c95548e832fa96cd86`.
- Source committed; mobile live rendering and expand/collapse behavior still need testing after deployment.


## Exact-date history correction — 29 October 2026
- User clarified that the main history story must be from the exact entered date, including the year, not just the same month/day from another year. The prior screenshot showed a 2023 event for DOB 15 January 1995, which was misleading.
- Updated `age.html`: heading now says “What Happened on Your Date?” and the subtitle includes the entered full date. The primary card now only displays an event whose year matches the entered birth year from the On This Day feed. If no exact-year event is present in the feed, the highlighted birthday-style card transparently says that no event could be verified for that exact date, rather than presenting a different-year event as if it happened then. Other years remain behind the optional “Explore other years” button.
- Added birthday-style highlighted card styling and preserved the age calculator.
- Commits: main UI/logic `92e8a43c6ea6729be2e7f53b8f7944d0911a4241`, variable fix `e44ad98f7502be0d5fa6523851570a24cb19e605`.
- Service-worker cache bumped from `infojano-v49` to `infojano-v50` in commit `c02838ceaf88f7d4004db1a7bfd890f75d451ceb`.
- Source edits committed; live deployment and mobile behavior still need verification. Note: this version filters the On This Day feed for an exact year; it does not yet query a broader historical source if the feed lacks that year.


## Full date labels for history events — 29 October 2026
- User asked that when a historical event is shown, its full calendar date should be visible rather than only the year (e.g. November 26, 2023), so it can be compared with the entered date of birth.
- Updated `age.html` event badges to show full month, day, and year for each event. Exact birth-year matching remains the main highlight; other-year events stay optional and are explicitly dated.
- Age page commit: `4e4d7c181657f7d90aa204a2aca1205e081f5a6c`.
- Cache bumped from `infojano-v50` to `infojano-v51` in commit `4eee5b37156cf92d3c929bb6bf4bb30b57cddc28`.
- Live visual behavior still needs verification after GitHub Pages deployment.


## Latest update: exact-date history coverage
Updated: 29 October 2026
- Improved the Age Calculator history card with source-verified exact-date highlights for 15 January 1995.
- For DOB 15-01-1995, the featured event is the closing day of the 10th World Youth Day in Manila; the card links directly to the Vatican's record. A second exact-date event, the 49ers' 38–28 NFC Championship win over the Cowboys, is available as another exact-year item.
- This avoids implying that no event happened merely because the Wikipedia day/month feed omitted it. It does not claim exhaustive global coverage: dates without a verified curated record still depend on the public history feed.
- Cache version bumped from v51 to v52.
- Relevant links: https://barsulkhan.github.io/InfoJano/age.html and https://www.vatican.va/content/john-paul-ii/en/angelus/1995/documents/hf_jp-ii_ang_19950115.html

## Latest update: Age Calculator mobile overflow
Updated: 29 October 2026
- Added responsive width and text-wrapping rules to Age Calculator so the page, history card, and event text can fit narrow mobile screens.
- Kept age calculations and history behavior unchanged.
- Avoided using page-wide overflow hiding as the only fix; constrained the layout and allowed text to wrap.
- Service worker cache bumped from v52 to v53.
- Verify on phone: https://barsulkhan.github.io/InfoJano/age.html
- Code was committed, but a live-device visual retest has not been performed from this environment.

## Correction: mobile screenshot was zoomed
Updated: 29 October 2026
- User clarified that the Age Calculator screenshot was zoomed in. Reverted the additional mobile overflow CSS because the screenshot alone did not establish a responsive-layout bug.
- Age calculator's history and age logic remain unchanged.
- Service worker cache bumped to v54 after the revert.
- Next project task: improve exact-date history coverage for arbitrary birth dates without presenting events from other years as if they happened on the entered date. Current curated exact-date additions only cover 15 January 1995; do not imply the solution is comprehensive.

## Follow-up: broader exact-date history lookup
Updated: 29 October 2026
- Reverted the extra mobile overflow CSS after the user clarified the screenshot was zoomed; no layout defect was confirmed from that screenshot.
- Added a secondary Wikidata SPARQL lookup for exact-date event records when the Wikipedia On This Day feed has no event matching the entered year. It times out after 3.5 seconds and fails gracefully.
- This is an additional source, not a guarantee of exhaustive results: structured date data can be incomplete, and the query may return no exact-date event.
- Cache version bumped to v55.
- Verify Age Calculator: https://barsulkhan.github.io/InfoJano/age.html

## Latest update: Age Calculator SEO alignment
Updated: 29 October 2026
- Updated the title and meta/social descriptions to emphasize the main intent: free age calculator, exact age in years/months/days, and birth weekday.
- Expanded the visible static explanation to describe the birth-weekday and historical-date feature, including a clear caveat that source coverage is incomplete and absence of a result does not mean nothing happened.
- Added an FAQ explaining how the historical-date feature works and its limitations.
- Kept the canonical URL unchanged and did not create per-birth-date URLs or keyword-stuffed pages.
- Cache version bumped from v55 to v56.
- This is an on-page SEO improvement, not a guarantee of higher ranking. Verify the live title/snippet and indexing through Search Console after deployment.


## SEO maintenance — structured data and visible FAQ alignment
Updated: 29 October 2026
- Audited the Discount Calculator's FAQ structured data against the visible FAQ content.
- Added the visible 20% discount savings question so the answer is available to users as well as in the structured data, and added the existing discount-comparison FAQ to the structured data. This keeps markup aligned with content shown on the page.
- Updated the Percentage Calculator's WebApplication structured description to explain both supported modes: calculating a percentage of a number and finding what percentage a part is of a whole.
- No calculator logic, layout, canonical URLs, or page titles were changed.
- Bumped service-worker cache from v56 to v57 so returning visitors can receive updated page assets.
- Source changes need live deployment and browser/schema validation; this does not guarantee search ranking or rich-result display.

## SEO maintenance — GST Calculator structured data
Updated: 29 October 2026
- Re-fetched the current GitHub versions of the GST Calculator, Discount Calculator, Percentage Calculator, homepage, sitemap.xml, robots.txt, service worker, and current master file before editing.
- GST Calculator already had a matching page title, meta description, canonical URL, visible calculation guide, worked example, FAQ, and internal links to related tools. Its source had no JSON-LD structured data.
- Added WebApplication structured data for the free GST calculator and FAQPage structured data matching the three existing visible FAQ questions and answers. No calculator logic, visible layout, title, description, canonical URL, sitemap, or robots.txt was changed.
- Updated the service-worker cache from infojano-v57 to infojano-v58.
- GitHub commits: GST structured data `167fb6e9ae27c2be4a69f8eb3f4fcd6f8a070021`; service-worker cache update `affc59acecbfa1df62d39b7919c8bde242a3b048`.
- Next: verify the latest GitHub Pages deployment and fetch the live GST page to confirm the schema and cache version are published. Validate JSON-LD syntax and recheck Search Console only when accessible. Do not claim Google has recrawled the page or that rankings improved. FAQ structured data is for semantic consistency and does not guarantee a Google FAQ rich result.

## SEO maintenance — EMI Calculator structured data
Updated: 29 October 2026
- Audited the current EMI Calculator source before editing. Its title, description, canonical URL, visible loan-calculation purpose, three FAQs, and related-tool links were already present; no JSON-LD structured data was present.
- Added WebApplication structured data for the free EMI calculator and FAQPage structured data matching all three visible FAQ questions and answers.
- Did not change EMI calculation logic, visual layout, title, meta description, canonical URL, or visible FAQ text.
- Bumped service-worker cache sequentially from v58 to v59.
- GitHub commits: EMI structured data `c747d4c819ca77a16ee333c7814685f72c23a9d6`; service-worker cache update `ba5453225cc7a58dd22c401d8d61c5feb5fa10a5`.
- Next: verify the latest Pages deployment and live HTML after the final commit. Continue auditing high-value calculator pages, checking title, description, canonical, visible content, internal links, and structured data alignment. SEO changes do not guarantee rankings or Google rich results.

## Desktop icon compatibility fix — Age Calculator
Updated: 29 October 2026
- User screenshot showed missing-glyph boxes where birthday and history icons should appear on desktop.
- Root cause identified in the current source: several icons were rendered as emoji characters, which can appear as square boxes when the desktop browser/OS has no compatible emoji font.
- Replaced the history globe, birthday greeting icons, and dynamic date icon with inline SVG/CSS/text-safe artwork. Removed emoji characters from the confetti row; retained the birthday message and animations.
- Age page commit: `7b356b356a0de0639aff74909c2d2a10d4c3ce64`.
- Service worker cache bumped from v59 to v60 in commit `539cc4a225d488d0bc503d45b947c7ef0f4797c8`.
- Live desktop visual verification is pending GitHub Pages deployment. After deployment, reload the page; if old icons remain, hard refresh or close/reopen the tab.

## BMI Calculator SEO structured data — 29 October 2026
- Audited current `bmi.html`: title, meta description, canonical URL, three visible FAQs and related-tool links were present; no JSON-LD structured data existed.
- Added WebApplication and FAQPage JSON-LD. FAQ answers match the visible page text. Preserved calculator logic, layout, title, description, canonical URL, and FAQ copy.
- BMI page commit: `4f5b4e0757287ae85a5838f9fea873d4b9e819a1` (verify the latest commit list for the exact content commit).
- Service worker cache bumped from v60 to v61: `063f31a2e8f4f1a43dca52ce4ab5b8fc93434164`.
- Next: confirm GitHub Pages deployment and live page source. Do not claim ranking improvement or Google rich-result display.


## Homepage CLS investigation and install-banner fix — 29 October 2026
- User shared Lighthouse mobile report: Performance 81, Accessibility 100, Best Practices 100, SEO 100; FCP 0.9 s, LCP 2.6 s, TBT 190 ms, CLS 0.262.
- Source inspection found the homepage HTML included an `.ij-install-card` immediately before `<main class="wrap">`, while `install.js` explicitly removes `.ij-install-card` on page startup. This means the browser could lay out the banner and then remove it, shifting the main content.
- Removed that redundant install-card HTML from `index.html`. The existing install.js behavior and PWA install capability remain unchanged; install.js already removes the card and provides other shared page helpers.
- Homepage fix commit: `c8e7d3cecf4e71dc7086d4e208b31d75dd740ae0`.
- Bumped service-worker cache from v61 to v62 in `4b3d8613fba6eec7dfa21b80656fe803ede4a8df`.
- Next: check that the latest GitHub Pages Actions deployment succeeds, then rerun Lighthouse mobile. CLS improvement is a hypothesis based on the source pattern and must be confirmed by a new measurement; other sources of layout shift may remain. Do not claim the score improved until measured.


## Additional SEO structured data — Age, QR Maker, Date Difference — 29 October 2026
- Added JSON-LD WebApplication and FAQPage structured data to `age.html`, `qr-maker.html`, and `date-difference.html`.
- FAQ question and answer text was copied from each page's existing visible FAQ content to keep the schema aligned with the page. No calculator logic, visible copy, title, description, or canonical URL was changed.
- Age page commit: `a6c19701103f83d5ba01ded8b2c79c56aad1abd8` (5 FAQ entries).
- QR Maker page commit: `5a04394a968c0c6813b22390c7d78b2400acb067` (3 FAQ entries).
- Date Difference page commit: `d9a651a1d5204eb98179bdf0d82d596a5a3df3cd` (3 FAQ entries).
- Service worker cache bumped sequentially from v62 to v63: `c85d4d4d660052d6d04b5f263a2d341167ef0541`.
- Next: validate JSON-LD and wait for the latest GitHub Pages deployment before claiming live publication. Structured data does not guarantee rich results or ranking gains.


## Additional tool-page SEO structured data — 29 October 2026
- Added WebApplication JSON-LD to `currency-converter.html`, `unit-converter.html`, `text-counter.html`, and `savings.html`.
- Added FAQPage JSON-LD to `currency-converter.html` using its three existing visible FAQ questions and answers. Other pages received WebApplication schema only because they do not have matching user-facing FAQ content suitable for structured data.
- Currency Converter commit: `b0fc13d4a52060e4507cdce1b334f5b8bde34b9f`.
- Unit Converter commit: `e72965b2468adccd1adb195db79812391ae6f553`.
- Text Counter commit: `9533e0671235debc3382cc9c763573ba92aeee2c`.
- Savings Calculator commit: `cf569ec758548d03d3e87ffff5c70c1adf0cd55c`.
- Service worker cache bumped from v63 to v64: `c337539aabbd429660889008f6f8e9006f473620`.
- Next: validate the new JSON-LD across all modified pages and verify the final Pages deployment. Structured data is not a guarantee of search ranking or rich results.


## Homepage QR script loading optimization — 29 October 2026
- Lighthouse's homepage network dependency tree showed `qrcode.min.js` from cdnjs in the initial critical request chain, even though the homepage QR feature is used only when a visitor opens/uses the QR tool.
- Removed the eager external QR script tag from `index.html`. Updated `makeQR()` to load the same QRCode library asynchronously on first use, show a loading message, generate the QR when the library is ready, and show an error if the library cannot load. The dedicated `qr-maker.html` page was not changed.
- Homepage optimization commit: `91c874c1b6c3001eb8a8a4343c919061e1d6813a`.
- Service worker cache bumped from v64 to v65: `90df7f4f56804e9414d70b428d133946b5d89e3b`.
- Next: test the homepage QR feature after deployment and rerun Lighthouse. This should remove the QR library from the initial homepage request chain; the actual score/LCP change must be measured rather than assumed.


## Ayushman Bharat JPG size fix — 29 October 2026
- Fixed the JPG export in `id-card-print-studio.html` so Ayushman Bharat cards download as individual card-only JPG images instead of being placed on a full A4/photo sheet. This prevents the card from appearing small when opening the downloaded JPG.
- Front and Back are saved as separate files when both are selected; each card canvas is rendered at 85 × 55 mm at 600 DPI, with a thin black border. Other document types retain their existing JPG export behavior.
- Studio code commit: `b520b67fe568a684812c344fab41e3c2581785de`.
- Service worker cache bumped to v66: `303a300880ad92883945c9414028661a42e3c52c`.
- After GitHub Pages updates, reload the studio and test a downloaded JPG. When printing, choose Actual size / 100%; image-printing apps may otherwise apply their own scaling.


## Ayushman JPG physical-size metadata follow-up — 29 October 2026
- Follow-up fix: Ayushman standalone Front/Back JPGs now embed JPEG JFIF density metadata at 600 DPI. The output canvas remains 2008 × 1299 pixels, corresponding to approximately 85 × 55 mm at 600 DPI. This addresses image viewers/print apps that otherwise infer a default DPI and print the card at the wrong physical size.
- Studio commit: `7d57a2ca00490a42c8cd92c1f826a3484b37c13f`.
- Service worker cache bumped to v67: `b318b39164c711797e491c16e3a7c7b1aa558cf3`.
- Must verify with a newly downloaded JPG and a ruler/print dialog after GitHub Pages deployment. Select Actual Size / 100% when printing; some mobile print apps override image density.


## Ayushman JPG single-page export correction — 29 October 2026
- Corrected the Ayushman JPG action to export one JPG page containing both Front and Back, stacked vertically, instead of triggering separate Front and Back JPG downloads. This keeps the chosen 4 × 6 inch sheet layout and embeds 600 DPI JFIF density metadata for physical-size printing.
- Studio commit: `31349138515ced2d13072e326589e84fa9e17949`.
- Service worker cache bumped to v68: `0eb642b6c2bc0f863802b9001a59ece83b2a0f96`.
- Verify after deployment by downloading once; expected result is a single JPG containing both sides. Print at Actual Size / 100%.
