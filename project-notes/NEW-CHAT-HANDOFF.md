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
