# InfoJano — New Chat Handoff

Last updated: 2026-11-15
Repository: https://github.com/barsulkhan/InfoJano
Live site: https://infojano.com/

এই ফাইলটি নতুন ChatGPT chat-এ প্রথমে পড়তে হবে। এটি project context, user rules, current status এবং next action-এর handoff source। নতুন chat শুরু হলে প্রথম কাজ হবে এই ফাইল এবং linked tracker-গুলো পড়ে তারপর কাজ শুরু করা।

## নতুন ChatGPT chat-এর জন্য বাধ্যতামূলক নির্দেশনা

তুমি InfoJano project assistant হিসেবে কাজ করবে। নিচের নিয়মগুলো সবসময় অনুসরণ করবে; ব্যবহারকারীকে tracking-এর কথা বারবার বলতে বলবে না।

1. InfoJano-র যেকোনো tool-এ কাজ শুরু করার আগে `project-notes/TOOL-WORK-TRACKING-STANDARD.md` পড়বে।
2. Tool-এর `project-notes/tools/<tool-slug>/README.md` tracker খুলে আগের log, constraints, completed/in-progress/backlog/blocked cards পড়বে।
3. Tool tracker না থাকলে আলাদা folder ও README তৈরি করবে এবং `project-notes/TOOL-INDEX.md` আপডেট করবে।
4. কাজ শুরুর আগেই তারিখসহ log entry ও feature card লিখবে। কাজ চলাকালে progress/evidence আপডেট করবে। প্রতিটি session শেষে detailed log, pending list, next step ও handoff লিখবে।
5. Log-এ থাকবে: user request, inspected/changed files, implementation details, test names and pass/fail/not-run, PR/commit/workflow IDs and links, failures/root causes/fixes, incomplete work, blockers, next concrete action, protected areas preserved.
6. কাজ মাঝপথে থামলে কখনো Completed বলবে না। In progress/Blocked status এবং পরবর্তী পদক্ষেপ লিখে রাখবে।
7. Merge, CI, Pages deployment, APK build/release, mobile/desktop browser QA—প্রতিটি আলাদা করে verify করবে। Source-level check-কে browser QA বলবে না। Workflow success না হওয়া পর্যন্ত deployment/APK success বলবে না।
8. User-এর স্পষ্ট অনুমতি ছাড়া homepage Hero Banner, ID Card Print Studio Hero, অথবা কোনো explicitly protected hero/banner/design পরিবর্তন করবে না।
9. User-এর project progress ChatGPT Memory-তে নয়, GitHub repository project notes-এ রাখতে হবে।
10. সংক্ষিপ্ত shortcut: **“ট্র্যাক”** = সর্বশেষ tool-এর পূর্ণ status; **“ট্র্যাক <tool-name>”** = নির্দিষ্ট tool-এর status। তবে shortcut না বললেও tracking স্বয়ংক্রিয়ভাবে চালু থাকবে।
11. কাজ শেষে উত্তরে completed, successful, failed/blocked, pending এবং tracker link সংক্ষেপে জানাবে।
12. কোনো tool/action/browser access না থাকলে তা স্পষ্ট বলবে; ভিজ্যুয়াল QA হয়েছে বলে ভান করবে না।



## Mandatory research-first rule (new user requirement)
For every tool/major feature, do not start coding first. First complete a saved country/language SEO and market research dossier covering keyword clusters, monthly volume/trends, KD, CPC/currency, traffic potential, search intent/SERP, audience segments, direct/indirect and country-specific competitors, competitor feature gaps, monetization caveats, and how InfoJano can do better. Use `project-notes/TOOL-RESEARCH-STANDARD.md` and `project-notes/templates/TOOL-RESEARCH-TEMPLATE.md`; save each dossier as `project-notes/tools/<tool-slug>/RESEARCH.md`. Screen all plausible countries for each tool, then prioritize by evidence; do not blindly duplicate country pages. Record sources, access dates, provider/database, confidence and unavailable metrics. CPC is not publisher RPM or guaranteed revenue. Do not begin planned implementation until the research decision is documented; urgent bug fixes may use a logged minimal-research exception.

## Current repository documentation
- Rules: [TOOL-WORK-TRACKING-STANDARD.md](TOOL-WORK-TRACKING-STANDARD.md)
- Research rules: [TOOL-RESEARCH-STANDARD.md](TOOL-RESEARCH-STANDARD.md)
- Research template: [templates/TOOL-RESEARCH-TEMPLATE.md](templates/TOOL-RESEARCH-TEMPLATE.md)
- Tool index: [TOOL-INDEX.md](TOOL-INDEX.md)
- Elapsed Time Calculator tracker: [tools/elapsed-time-calculator/README.md](tools/elapsed-time-calculator/README.md)
- Legacy Elapsed Time Calculator notes: [elapsed-time-calculator-progress.md](elapsed-time-calculator-progress.md)

## Workflow improvement research
- [WORKFLOW-IMPROVEMENT-PLAN.md](WORKFLOW-IMPROVEMENT-PLAN.md) — proposed improvements: GitHub Project board, issue/PR templates, Playwright browser tests, CI gates, visual regression, accessibility/performance checks, generated status dashboard and actionable notifications. This is a research proposal; no automation from it has been installed yet.

## Current project status — 2026-11-15

### Elapsed Time Calculator
Tool page: https://infojano.com/time-calculator.html
Tracker: `project-notes/tools/elapsed-time-calculator/README.md`

Merged feature work:
- PR #219 — shared header alignment and live device-local hero clock. Commit `84bd768b17a5ba13c55f5cfece4a593cf6635f9c`.
- PR #220 — swap Start/End, Now controls, quick examples, seconds precision, decimal hours. Commit `a4b5017c1fd27061ca50aae63330e67e0af235bf`.
- PR #221 — optional break deduction and gross/net results. Commit `1887be9cf860519f5c4906dc101767e8aa846037`.
- PR #222 — add/subtract duration mode and day rollover. Commit `ff67d2198a9fe69eeeea4ea4a69a8c1546a73741`.
- PR #224 — date + time duration mode. Commit `46ecea5ee2eb113e316f81bcf681737ee2119330`.
- PR #225 — copy/share result and recent calculation history (max five). Commit `4bb2de85be0a0577fb2b4822fc299e96f05e0425`.
- PR #226 — APK workflow relative manifest start_url/scope validation fix.
- PR #227 — APK workflow relative manifest icon path validation fix. Commit `4ae9624fb8978b832d58e2b93f2e41091227dc80`.

Successful workflows:
- APK workflow run 43684495904: success — https://github.com/barsulkhan/InfoJano/actions/runs/43684495904
- Pages deployment run 43684495751: success — https://github.com/barsulkhan/InfoJano/actions/runs/43684495751

Known pending work:
- CARD-009: actual mobile and desktop visual browser QA. Previous session had no interactive browser tool, so this is still pending.
- CARD-010: evaluate related SEO landing pages only after keyword/page intent is confirmed; use max-width 1360px and 8px gutters.
- Accessibility review has not been recorded yet.

Protected constraints:
- Do not change Elapsed Time Calculator hero dimensions, layout, styling, artwork, or copy without explicit approval.
- Do not change homepage Hero Banner or ID Card Print Studio Hero without explicit permission.
- Future SEO landing pages: max-width 1360px and 8px side gutters.

## Next action when resuming
1. Read the standard and Elapsed Time Calculator tracker.
2. Continue from CARD-009; do not redo merged features.
3. If an interactive browser becomes available, perform real mobile and desktop QA for all three calculator modes, break deduction, copy/share, and recent history; record exact device/browser, results, defects and evidence.
4. If no interactive browser is available, do not claim QA. State the limitation and continue only with useful source-level checks or ask for browser evidence if needed.
5. Update the tool tracker and TOOL-INDEX after any new work.

## Reusable session start prompt

Use the maintained prompt file instead of relying on an old chat summary:
- [SESSION-START-PROMPT.md](SESSION-START-PROMPT.md)

Copy/paste prompt:

“আমি InfoJano Project Assistant হিসেবে তোমাকে চালু করছি। প্রথমে https://github.com/barsulkhan/InfoJano/blob/main/project-notes/SESSION-START-PROMPT.md পড়ো এবং সেখানে বলা handoff, tracking standard, tool index, সংশ্লিষ্ট tool tracker ও QA log-এর latest GitHub version নিজে খুলে যাচাই করো। আগের chat-এর memory বা এই prompt-এর পুরোনো status-এর ওপর নির্ভর করবে না। completed কাজ repeat করবে না। pending কাজ নিজে priority অনুযায়ী বেছে নেবে। প্রতিটি কাজ/test-এর evidence, exact result, status, dated log, commit/PR/workflow ও next step GitHub-এ update করবে। আমাকে একবারে একটি করে manual test দেবে; screenshot পেলে যাচাই করে QA log-এ লিখবে। কোনো test না করলে PASS বলবে না। protected hero/banner অনুমতি ছাড়া বদলাবে না। বাংলায় উত্তর দেবে। এখন latest GitHub state পড়ে আমাকে current status ও পরবর্তী একটিমাত্র কাজ জানাও।”

## Copy/paste starter prompt for a new chat

“আমরা InfoJano project চালাচ্ছি। প্রথমে এই GitHub handoff ফাইলটি পড়ো: https://github.com/barsulkhan/InfoJano/blob/main/project-notes/NEW-CHAT-HANDOFF.md । এরপর latest version-এ TOOL-WORK-TRACKING-STANDARD.md, TOOL-RESEARCH-STANDARD.md, TOOL-INDEX.md, SESSION-START-PROMPT.md এবং যে tool নিয়ে কাজ হবে তার README.md, RESEARCH.md ও QA-TEST-LOG.md পড়বে। নতুন tool/major feature-এ coding শুরুর আগে দেশভিত্তিক ও ভাষাভিত্তিক keyword research, search volume/trend, keyword difficulty, CPC/currency, traffic potential, search intent/SERP, audience, direct/indirect ও country-specific competitor analysis, competitor feature gaps, monetization caveats এবং InfoJano কীভাবে আরও ভালো হবে—এসব গবেষণা করে sources/date/provider/confidence-সহ project-notes/tools/<tool-slug>/RESEARCH.md-এ save করবে। সব plausible market screen করে evidence অনুযায়ী country priority ঠিক করবে; thin doorway page বানাবে না। CPC-কে publisher RPM বা নিশ্চিত আয় বলবে না। Research Go/Revise/No-Go decision নথিভুক্ত না করে planned coding শুরু করবে না; জরুরি bug fix হলে exception log করবে। এরপর ধাপে ধাপে implement, test, review, deploy করবে; আমাকে একবারে একটি manual test দেবে এবং evidence ছাড়া PASS বলবে না। merged কাজ repeat করবে না। Protected hero/banner অনুমতি ছাড়া বদলাবে না। সব progress GitHub-এ track করবে। Shortcut ‘ট্র্যাক’। বাংলায় উত্তর দেবে।”


## Latest autonomous SEO follow-up — 2026-11-15
- User instructed that Search Console has no updated report and asked the assistant to continue independently, finish quickly, and save every result.
- Latest Elapsed Time Calculator research is in `project-notes/tools/elapsed-time-calculator/RESEARCH.md`, sections 14.1–14.7. New public SERP review and qualitative country/language screening are saved; no numeric search volume/KD/CPC/trend/traffic estimates were invented.
- Current decision: retain `/time-calculator.html` as the utility and `/elapsed-time-calculator-guide.html` as the informational guide. No extra country clones or generic pages; no new feature build without demand/user approval.
- Source review confirms clock-only identical start/end returns zero; date+time mode uses local JavaScript Date parsing, so DST boundary behavior may depend on browser timezone rules. Runtime checks remain pending.
- Live URL/robots/sitemap web fetch returned internal inspection errors; no live-status or index verdict is available. GSC/Ahrefs quantitative access remains unavailable, but it is not a blocker for qualitative work.
- Latest documentation commits: RESEARCH `26af4a1724a83e108a00070164bd25c57dd83d0c`; README `4b38fbe137de84d52d7616171b722b4896cc3f14`; TOOL-INDEX `4afea227764c124442b36ebc06adf6dcafda501c`. Re-fetch files before relying on these SHAs as current.
- Next practical step: perform real-browser mobile/desktop and accessibility QA when an interactive browser session is available; do not wait for GSC just to continue source/QA work.


## Latest Elapsed Time Calculator QA update — 2026-11-15
- Follow-up source QA is recorded in `project-notes/tools/elapsed-time-calculator/QA-TEST-LOG.md` as SRC-001–SRC-016. All recorded source checks pass, including inline JavaScript syntax, canonical/sitemap/internal links, JSON-LD parsing, clock rollover, break validation, history cap source logic, reduced motion, IDs, button types and guide structure.
- Formula-level arithmetic checks pass for daytime duration, overnight seconds precision, break deduction and equal start/end (zero duration). These are not browser runtime tests.
- Actual mobile/desktop browser rendering, runtime five-entry cap, keyboard/focus, screen-reader, copy/share end-to-end and DST runtime checks remain NOT RUN due unavailable interactive browser/computer-control session.
- Pages workflow #2570 for prior handoff commit succeeded; it is not browser QA and predates the latest QA documentation commits. Check latest Actions run before claiming deployment for these commits.
- Latest QA documentation commits: QA log `40a1ba3ef1dc14ebbe24e5d98ab277d59519fbb4`; README `5594345be7467300f70161e173b778efb35a2a36`; TOOL-INDEX `16ffc40ce7f53f763e2b619a6ae549a384db4c26`.


## User clarification — future Elapsed Time SEO page hero (2026-11-15)
- User said not to revise the existing guide hero now, despite it using the homepage hero treatment/artwork rather than the tool's own hero.
- Mandatory design requirement for any future justified SEO landing page: use the existing Elapsed Time Calculator tool hero as the exact design reference (same layout, dimensions, visual styling, artwork, typography and copy treatment). Do not use the homepage hero as a substitute.
- The current research decision remains: only two URLs are justified — /time-calculator.html (interactive utility) and /elapsed-time-calculator-guide.html (how-to guide). No additional keyword/country pages are justified by the available evidence; Ahrefs numeric metrics are unavailable and no GSC export exists.
- Do not create duplicate/thin pages to satisfy a page-count target. Reopen CARD-010 only when a distinct intent is evidenced or a substantiated opportunity is approved.
- Existing calculator hero, homepage hero and ID Card Print Studio hero remain protected.


## QA continuation handoff — 2026-11-15
- User asked to continue remaining Elapsed Time Calculator/guide QA. Latest calculator, guide, sitemap and QA log were re-fetched.
- No interactive browser/computer-control session or browser automation connector is available; no new runtime/browser test was run. Existing SRC-001–SRC-016 and formula checks remain the latest verified evidence.
- Pending: runtime six-calculation/five-entry history cap; desktop and full responsive visual QA; keyboard/focus; screen-reader; copy/share end-to-end; DST runtime. Pages deployment for documentation commit 6afaeed98338a36db4bfbacbcc94653299a36f74 was not verified by PR-only workflow lookup.
- Next single manual test: create six distinct calculations in the live calculator and confirm only the newest five appear in Recent Calculations; ask user for a screenshot.
- Preserve the user instruction: do not revise the existing guide hero now. Any future justified SEO page hero must match the calculator hero, not homepage hero.


## Latest Elapsed Time Calculator QA evidence — 2026-11-15
- ET-011 Recent Calculations five-entry cap: runtime PASS. Sequential user screenshots show five entries before and after a sixth distinct calculation; after the sixth, exactly five remain, the new 2:11:37 PM record is first, and the prior oldest 2:07:49 PM record is evicted.
- Detailed evidence is recorded in `project-notes/tools/elapsed-time-calculator/QA-TEST-LOG.md`; tracker and tool index updated.
- Still pending: desktop visual QA, broader mobile viewport/overflow sweep, keyboard/focus, screen-reader, copy/share end-to-end delivery, and DST boundary runtime checks. No app source or protected hero/banner files changed.


## Current status correction — 2026-11-15
- The earlier QA continuation entry above listed the five-entry history cap as pending. That item has since been completed: ET-011 is runtime PASS, verified from sequential user screenshots showing six distinct calculations and only the newest five retained.
- Do not ask the user to repeat ET-011. Remaining QA: desktop visual, broader responsive viewport/overflow, keyboard/focus, screen-reader, copy/share end-to-end delivery and DST boundary runtime.


## QA status clarification — 2026-11-15
- User confirms copy/share and screen-reader testing have already been completed; these are not pending. Treat as user-confirmed completion and do not request repeat tests.
- The remaining explicit task is desktop browser visual QA. Do not report it passed until a desktop screenshot/session is reviewed.


## USA-first SEO planning — 2026-11-15
- Standing priority: target US audiences first for Elapsed Time Calculator-related SEO work; use US English phrasing, US conventions, US keyword/SERP evidence and competitor examples.
- Preliminary US keyword research and three candidate concepts (Work Hours, Time Card, Date & Time Duration) are saved in `project-notes/tools/elapsed-time-calculator/RESEARCH.md` §15.
- These are research candidates, not three approved URLs. Work Hours and Time Card likely overlap; Date & Time Duration may overlap the current calculator. Keep the current two-URL architecture until US SERP overlap and unique feature/content value are established. Time-zone intent requires real timezone conversion support.
- No app code, metadata, sitemap or hero artwork changed during this research pass.


## Latest US SEO research — Work Hours / Time Card (2026-11-15)
- Re-read the current handoff, tracking/research standards, tool research and README before continuing.
- Completed US-oriented public SERP/competitor review; detailed notes in `project-notes/tools/elapsed-time-calculator/RESEARCH.md` §16.
- Work Hours and Time Card intents substantially overlap in reviewed results. Recommend one consolidated US-focused Time Card / Work Hours tool/page concept; do not split into two URLs at present.
- Core feature gap: 7-day grid, per-day breaks, overnight shifts, daily/weekly totals, decimal hours, biweekly workweek-by-workweek calculation and print/CSV. Advanced payroll/state overtime requires legal/product review and disclaimers.
- Planning decision only; no app code, metadata, sitemap or page URL changed. Next: US SERP overlap research for Date & Time Duration vs existing elapsed-time calculator/guide.

## US Date & Time Duration research completed — 2026-11-15
- Re-fetched current handoff, tracking/research standards, index, elapsed-time README/RESEARCH/QA log, calculator and guide source before the research pass.
- Existing calculator source already implements Date + Time duration between two local date-time inputs, reporting days/remainder and total hours/minutes/seconds. It uses browser-local `Date` semantics; there is no endpoint timezone selector or explicit DST-crossing explanation. The existing guide already explains this mode.
- Qualitative US-oriented competitor review (Toggl, Count My Hours, CalculatorSoup, NumUtility, LiveTools, timezones.com, All Over Tools and Keito) shows generic date-time duration overlaps strongly with the existing calculator intent. Some competitors differentiate through calendar month/year breakdown, DST detection, timezone selection or business-day calculations; InfoJano does not currently offer all of those.
- Decision: NO-GO for a separate generic Date & Time Duration URL. Keep this keyword cluster mapped to `/time-calculator.html` and `/elapsed-time-calculator-guide.html`.
- Three-concept architecture: Work Hours + Time Card should be one consolidated weekly/biweekly shift-work concept (a Work Hours & Shift Calculator page already exists in the repository; do not create a duplicate Time Card URL); Date & Time Duration stays within the existing elapsed calculator; generic elapsed/time duration stays with existing calculator + guide.
- US volume/trend/KD/CPC/traffic potential for the exact date-time phrase cluster remain N/A; no controlled US top-10 export or usable GSC query/page/country export was available. Do not invent metrics or revenue estimates.
- Detailed evidence is in `project-notes/tools/elapsed-time-calculator/RESEARCH.md` §17; tracker and index updated. Research commit: `bf2789607dfbe8cb00672d8bb729c49b5cbaa82e`; README commit: `1709c3569b473cf83b91e663a300c20686e058a7`; index commit: `d8c5a43dc47e1d4dc58c67b81faa2e1c3a86d888`.
- No app code, SEO metadata, sitemap, URL or hero artwork changed. Existing calculator hero, homepage hero, ID Card Print Studio hero and existing guide hero remain untouched.
- Next: desktop visual QA for the elapsed calculator when a real desktop browser/screenshot is available; Work Hours functional/browser QA and deployment verification remain separately tracked in its README. Quantitative US SEO validation remains pending until a reliable keyword/GSC source is available.

## Expanded US time/date research handoff — 2026-11-15
- User requested that as many related opportunities as practical be researched together.
- Re-read current handoff, tracking/research standards, tool index, Elapsed Time and Work Hours README/RESEARCH, and source for current elapsed, work-hours, date-difference, business-days pages plus sitemap.
- Expanded public US-intent competitor review across Work Hours/Time Card/Timesheet, Date + Time Duration, Date Difference/Business Days, Business Hours, Decimal Hours Converter, Military Time Converter, Clock-Out/Clock-In, Overtime and Time Zone Duration.
- Repository audit: existing pages include /time-calculator.html, /elapsed-time-calculator-guide.html, /work-hours-calculator.html, /date-difference.html and /business-days-calculator.html. The Business Days page is explanatory content with CTA to date-difference; no embedded calculator form/script was found in its source. Date Difference manual text input uses DD-MM-YYYY, which needs US MM/DD/YYYY review. Other date URLs are present in sitemap and must be inspected before new date-tool work.
- Decisions: retain existing destinations; no separate Time Card/Timesheet, generic Date + Time Duration, Business Days, Overtime or Time Zone Duration URLs. Existing Work Hours page is the one multi-shift destination. New candidates for quantitative validation: Business Hours (strongest distinct candidate), Decimal Hours Converter, Military Time Converter. Clock-Out should first be evaluated as a Work Hours mode.
- Work Hours source includes multi-shift rows, breaks, overnight, daily/weekly totals, decimal output, configurable daily threshold, optional earnings estimate, CSV and opt-in local save. It does not establish a dedicated biweekly selector, independent weekly OT subtotals, multi-punch pairs/day, print/PDF or maintained state OT rules. WH-001–WH-009 functional QA remains pending.
- US DOL overtime guidance and OPM federal holiday schedule were reviewed; do not make universal legal/payroll or employer-holiday claims. Sources saved in research.
- Exact US volume/trend/KD/CPC/traffic potential remain N/A; Ahrefs entitlement insufficient and no usable GSC export/property report. No revenue estimate.
- Detailed research: elapsed RESEARCH.md §18; Work Hours RESEARCH.md §5. Commits: elapsed research 8fc1c6d1134e72e0a5bd9bd496bc92c78b7afbcb; Work Hours research db09fcf5a14ac221ae1d55c2d1a5617d444f028f; elapsed README cd872fa876b2fcfe0eb27b7c46e6091789aaacfc; Work Hours README bf8dcd4ed942b4bc8f77bff2c9ea36b68bfd6fb6; index 47d2fc61a413f50ff33111632ef35f09a0e86fa4.
- No app code, metadata, sitemap, URLs or protected hero artwork changed. Browser QA/deployment not claimed.
- Next: complete Work Hours functional QA; separately audit US date-input conventions and Business Days page utility; validate Business Hours/Decimal Hours/Military Time with a reliable US keyword source before any new build.


## Consolidated SEO research handoff — 2026-11-15
- Read the full master dossier before repeating keyword/competitor research: [project-notes/SEO-OPPORTUNITY-RESEARCH-US-2026-11-15.md](SEO-OPPORTUNITY-RESEARCH-US-2026-11-15.md).
- It consolidates current US-first research for elapsed time, Work Hours/Time Card, Business Hours, Decimal Hours, Military Time, Clock-Out, Overtime, Date/Business Days and Time Zones, including source caveats and Go/Hold/No-Go decisions.
- Latest batch attempted Ahrefs Keywords Explorer; provider returned “Insufficient plan”. KWS Trends and competitor-published estimates are directional only. Do not repeat the same research unless fresh data/provider access or a material SERP change is available.
- New distinct opportunity priority: Business Hours (HOLD pending metrics/spec), Decimal Hours (HOLD), Military Time (HOLD). Clock-Out should be considered inside Work Hours first. No new URL or implementation is approved by this dossier.
- Existing date-page source audit is not fully complete; remaining pages should be inspected before date architecture changes.
- User requests batching research and saving it to files to avoid repeated back-and-forth. Prefer completing all feasible related research in one batch, documenting unavailable data once, and updating this handoff.


## Work Hours QA resumed — 2026-11-15
- User instructed to return to the main InfoJano work and begin. Work resumed on the existing Work Hours & Shift Calculator QA rather than expanding SEO candidate research.
- Re-fetched current handoff, tracking/research standards, tool index, Work Hours tracker/research/QA log and page source.
- Focused source/logic audit recorded in `project-notes/tools/work-hours-calculator/QA-TEST-LOG.md`: basic/overnight arithmetic paths, date/week grouping, daily threshold, earnings estimate caveat, CSV quoting/serialization and opt-in localStorage/clear/reset reviewed.
- This is source review only. WH-001–WH-010 real browser/runtime checks remain NOT RUN; no connected interactive browser/computer-control tool is exposed in this session. Do not claim runtime QA or deployment.
- No application source changed. Protected homepage, Elapsed Time Calculator and ID Card Print Studio heroes preserved.
- Next: perform WH-001–WH-009 runtime checks in a real browser, then desktop/mobile/accessibility QA and verify the current Pages deployment/live URL. User does not want paid SEO tool spend; use free sources and qualitative analysis only.


## Work Hours source-validation fixes — 2026-11-15
- User asked to batch as much work as possible and keep only tasks requiring their input/device as manual items.
- Re-fetched current handoff, tracking/research standards, index, Work Hours README/RESEARCH/QA log, master SEO dossier and current `work-hours-calculator.html` before continuing.
- Fixed two source-level edge cases in `work-hours-calculator.html`: impossible calendar dates are now rejected by strict ISO-format plus calendar-component round-trip validation; blank or out-of-range daily threshold (valid range 0.25–24 hours) now shows a validation message and does not calculate misleading overtime-above-threshold totals.
- Commits: `56486dc6d83792b97f44d1edcbe8c8409577ff92` and follow-up regex correction `c15ecec44313503db91fb40f295dc127bd7a7565`.
- Updated Work Hours QA log, README tracker and TOOL-INDEX. Source snippets were re-fetched and inspected. No browser runtime, JavaScript compiler, CSV download, localStorage interaction, Pages deployment or live URL verification was performed in this session.
- WH-001–WH-010 remain NOT RUN as browser/runtime tests. User's manual input is needed only for live browser checks/screenshots if no interactive browser becomes available.
- SEO decision remains: create quality SEO pages when research supports distinct intent; existing Work Hours page is the consolidated Work Hours/Time Card/Timesheet destination. Business Hours, Decimal Hours and Military Time remain HOLD; no new URL should be built from unsupported demand claims. No paid SEO subscriptions or tools.
- Protected homepage hero, Elapsed Time Calculator hero and ID Card Print Studio hero were not modified.
- Next: verify the latest Pages workflow/live page; execute Work Hours validation and arithmetic in browser if available; otherwise batch source audits of remaining date pages and leave only live-browser tasks for the user.


## Latest service-worker / CI correction — 2026-11-15
- After Work Hours source validation changes, reviewed current GitHub Actions runs. APK workflow #682 failed during validation with `Tool page missing from service-worker cache: elapsed-time-calculator-guide.html`.
- Compared all 112 root tool HTML pages against `sw.js`; the only missing entries were `elapsed-time-calculator-guide.html` and `work-hours-calculator.html`.
- Added both paths to `sw.js`, bumped cache version to `infojano-v310`, and re-fetched the repository listing + service worker. Source parity check: 112 pages, zero missing entries.
- Fix commit: `e8a0beab9cb70643fa612230956cc106474a71f1`.
- Pages workflow #2624 for preceding handoff commit completed SUCCESS. APK #683 and Pages #2625 for the service-worker fix were queued at last check; do not claim their outcomes until rechecked.
- Failed APK #682 stopped at validation, before APK build/package/release steps; no APK release was produced by that run.
- Next: recheck latest Actions runs; continue source audit of date pages if CI is green. Keep user-only work to real browser visual/functional checks when needed.


## CI status follow-up — 2026-11-15
- APK workflow #683 now PASSED the “Validate tool icons, manifests, and APK matrix” step after the service-worker cache fix. It is still in “Build one APK for each remaining tool”; package-count verification, artifact upload and release publication remain pending.
- Latest Pages runs for the documentation commits were still processing at last check; Pages #2624 for an earlier commit succeeded. Recheck before stating final deployment status.


## Follow-up after user said “Koro” — 2026-11-15
- Rechecked GitHub Actions. Pages deployment run #2631 for commit `a123933a0fed29a5e18264ad6ac578d0e6c81727` completed SUCCESS. Earlier Pages runs for intermediate commits were cancelled because newer commits superseded them.
- APK workflow #683 for service-worker fix `e8a0beab9cb70643fa612230956cc106474a71f1` has passed its validation step; at latest check the sequential APK build step remained in progress. Package count, artifact upload and release steps had not run yet. Do not claim the APK release is complete.
- Re-audited existing date SEO pages: `days-between-dates-calculator.html`, `date-duration-calculator.html`, `add-subtract-date-calculator.html`, and `business-days-calculator.html` are informational landing pages, not embedded calculators; each CTA points to `date-difference.html`. The target calculator has date-range and business-day options, but no add/subtract-date mode was found in the inspected page scripts. Business-day holiday dates are user-entered; the page explicitly says US holidays are not auto-loaded.
- Decision: do not add a duplicate date-duration URL or claim add/subtract-date functionality exists in the target calculator. The add/subtract-date landing page's CTA/feature promise needs a dedicated functional destination or a revised honest scope before more SEO promotion. Date input currently uses DD-MM-YYYY in the main Date Difference calculator; review US locale presentation before claiming US-first UX.
- No source edits made to the date pages during this audit. Protected hero banners remain unchanged. Next: finish APK workflow status check; prioritize honest CTA/feature mapping and Work Hours browser QA; then build a distinct new SEO calculator only after feature scope and free-SERP evidence are solid.


## 2026-11-15 — Batch execution session started
- User explicitly requested: “Ek bari sob gulo kaj suru koro” (start all remaining tasks together). Proceed autonomously on repository work, preserve protected hero assets, and leave only real-device browser checks as user tasks.
- Re-read current handoff, tracking standard, research standard, tool index, master US SEO dossier, Work Hours tracker/research/QA, Elapsed Time tracker/QA and current source pages before edits.
- Free SERP review for add/subtract date intent: Timeanddate, DateMath, DayOffset, CalculatorsHub, TrackYourYear and others offer date offsets; competitors commonly handle days/weeks/months/years and clamp invalid month-end dates. No dependable free keyword volume/KD/CPC/GSC data obtained; mark metrics N/A, do not infer demand.
- Research gate decision: REVISE/GO for a functional add/subtract date calculator embedded into the existing `add-subtract-date-calculator.html` landing page (no new URL), because its current “Open Calculator” CTA points to `date-difference.html`, which does not provide date offset calculation. Preserve its existing hero and canonical URL. Implement browser-local Gregorian date arithmetic with explicit month-end clamp, quick presets, weekday result and copy action. Do not add automatic federal holiday logic or promise business-day arithmetic.
- Planned cards in the add-subtract-date tracker: embedded calculator; arithmetic/validation source tests; truthful CTA/content and related links; metadata/schema review. Browser visual/accessibility QA stays separate.
- Parallel workstreams: verify APK workflow #683 and Pages deployment; Work Hours source and runtime QA; Elapsed Time desktop/accessibility follow-up; date/business-day CTA/content audit. User device is only needed for visual/interaction checks unavailable to this session.


## Batch execution progress — 2026-11-15 (continued)
- APK workflow #683 completed SUCCESS: validation, all 23 APK builds, package-count verification, artifact upload and release publication. Verified GitHub release tag `infojano-tool-apps-v1.1.1` contains exactly 23 APK assets: https://github.com/barsulkhan/InfoJano/releases/tag/infojano-tool-apps-v1.1.1
- Existing `add-subtract-date-calculator.html` now includes a working date-offset calculator; no new URL created. Existing hero preserved. CTA changed from misleading `date-difference.html` link to in-page calculator anchor. Calculator supports start date, add/subtract, years/months/weeks/days, quick +7/+30/+90/+365 day presets, weekday + ISO date result, copy/reset, input validation and month-end clamping. Browser-local; no holiday or business-day logic claimed.
- Code commits: `c9d8bc99a9273f4dbc7c33b805a7b0de674ac424`, `f6265401f3317f11af61c0013c6f4f1b6abe9518`.
- Node `--check` syntax check PASS. Isolated Node arithmetic checks PASS for Jan 31 + 1 month (common/leap year), Mar 31 + 1 month, positive/negative days, leap day + 1 year, Jan 31 - 1 month, and impossible date rejection. No real browser interaction performed.
- Created tracker folder `project-notes/tools/add-subtract-date-calculator/` with README, RESEARCH and QA-TEST-LOG; added TOOL-INDEX entry. Research uses free SERP review; volume/KD/CPC remain N/A.
- User previously confirmed Elapsed Time copy/share and screen-reader checks were completed; treat these as user-reported completed checks, not re-run evidence. Desktop visual QA remains pending. Work Hours WH-001–WH-010 browser/runtime tests remain NOT RUN.
- Latest Pages deployment must be rechecked after these commits. Browser visual, focus/keyboard and clipboard permission checks still require an actual browser environment; none is available in this session.


## Deployment follow-up — 2026-11-15
- GitHub Pages run #2642 completed SUCCESS for commit `6810fdf2dd02d6bdef535b6def92673d2555d1b9`, which includes the add/subtract-date calculator implementation and tracker updates. Direct live-page fetch was inaccessible to the current browser tool; do not claim rendered page or browser interaction verified.
- APK workflow #685, triggered by the add/subtract page change, passed repository validation and was still in its APK build step at last check. The prior published release v1.1.1 was verified to contain exactly 23 APK assets.
- Add/Subtract Date Node syntax and arithmetic checks are PASS; real browser visual/interaction/accessibility QA remains pending.


## Latest CI completion — 2026-11-15
- APK workflow #685 completed SUCCESS for the date-offset page change: all 23 APKs built, package count verified, artifact uploaded and release published. Release tag `infojano-tool-apps-v1.1.1` has exactly 23 APK assets (rechecked after run): https://github.com/barsulkhan/InfoJano/releases/tag/infojano-tool-apps-v1.1.1
- Pages run #2642 succeeded for date-offset implementation commit + tracker docs. Documentation-only latest Pages run #2646 was in progress at last check.
- Work Hours browser/runtime tests remain NOT RUN; do not conflate APK/Pages CI with browser QA.
