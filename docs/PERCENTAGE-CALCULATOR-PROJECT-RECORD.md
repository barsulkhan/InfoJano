# InfoJano — Percentage Calculator Project Record

Last updated: 2026-11-16
Repository: `barsulkhan/InfoJano`
Working branch: `main`

## Purpose of this file

This is the durable project handover and change log for the Percentage Change Calculator work. Update this file after every future task so decisions, completed work, test notes, and next steps are not lost between conversations.

## Important change-control rules

1. Do not change the InfoJano homepage, homepage hero, global header, logo, shared navigation, or unrelated tools as part of this calculator project.
2. Do not change the approved Percentage Change Calculator hero/header design, dimensions, artwork, or page layout unless the owner explicitly asks.
3. Make changes only within the requested tool/page and its directly related assets.
4. Before editing, inspect the current file and preserve existing working features.
5. After editing, verify the changed code paths and record the commit SHA here.
6. Do not claim a change is live until deployment is independently verified.
7. Keep a known-good Git commit as a rollback point before substantial changes.

## Approved design and layout decisions

- The approved Percentage Change Calculator page uses the ID Card Print Studio page as the design reference.
- The tool hero is the approved light-blue, two-sided showcase design with the percentage/calculator illustration and benefit chips.
- The tool header has the InfoJano brand/logo area and the three expected navigation controls: All Tools, language selector, and Home / Back to Home as applicable to the page.
- The calculator and result are arranged side-by-side on desktop and stacked responsively on narrow screens.
- Keep the established spacing, header proportions, hero size, typography, and blue visual language. Do not redesign these without explicit approval.
- The owner has explicitly rejected unnecessary homepage/hero redesigns in the past. Homepage must remain out of scope.

## Current feature inventory

The following items are present in the current `percentage-change.html` file as recorded during the 2026-11-16 work:

- Percentage Change mode (old value and new value).
- Reverse Percentage mode (final value, rate, increase/decrease direction; calculates original value).
- Percentage Difference mode (symmetric comparison using the average of the absolute values).
- Result summary and step-by-step calculation breakdown.
- Copy Result.
- Browser-local Calculation History.
- History CSV export and Clear History.
- Batch calculator, with up to 100 input rows.
- Batch CSV export.
- Related tools, formula/guide content, and FAQs.

## Completed changes and commits

| Commit | Change |
|---|---|
| `c1d1057` | Added Percentage Difference mode and improved copied result labels. |
| `498bd5b` | History restore now retains calculation mode and Reverse % inputs; history labels and CSV columns distinguish calculation types. |
| `88d18b8` | Expanded Batch Calculator to support Percentage Change, Reverse %, and Percentage Difference. |
| `63af8a8` | Tightened batch row-format validation for the selected mode. |

Earlier related work may exist in repository history. The entries above are the latest calculator feature changes known at the time this record was created.

## Batch input formats

- Percentage Change: `old value, new value`
- Reverse %: `final value, rate, direction`; direction may be `increase` or `decrease`, and defaults to increase if omitted.
- Percentage Difference: `first value, second value`
- Up to 100 non-empty rows per batch.
- Batch results can be exported to CSV.

## Verification checklist for the latest batch update

Run these checks in the browser before considering the feature fully verified:

1. Percentage Change: `80, 100` should return +25.00%; `100, 80` should return -20.00%.
2. Reverse %: `120, 20, decrease` should return original value 150.
3. Reverse %: `240, 20, increase` should return original value 200.
4. Percentage Difference: `80, 100` should return 22.22%; reversing the pair should return the same result.
5. Invalid rows should show a clear error while valid rows still calculate.
6. More than 100 rows should be rejected with a clear message.
7. CSV export should include calculation type and the relevant values/result.
8. Switching batch modes should update the format hint and placeholder.
9. Confirm the normal calculator, History restore, Copy Result, and History CSV still work.
10. Check desktop and mobile layouts; no overflow or broken controls.

These are test instructions, not a claim that every check has already been run.

## Known limitations / research status

- The earlier request for competitor research, US-first audience research, search demand, competitor feature comparisons, and a prioritized product roadmap has not yet been completed as a sourced research study in this project record.
- Do not invent search volumes, audience country shares, competitor keyboard support, or market-size figures. Research these from current sources and cite sources in a separate research section/file before using them for product decisions.
- Live deployment status has not been independently verified from the available work. GitHub commits do not by themselves prove the production website has updated.

## Next work queue

### Priority 1 — QA and correctness
- Run the verification checklist above on the live/staging page.
- Check edge cases: zero values, negative values, decimal values, very large/small numbers, invalid text, blank rows, and reverse decrease at/above 100%.
- Verify locale formatting and CSV compatibility.
- Fix only confirmed defects, preserving the approved design.

### Priority 2 — User-focused improvements (after QA)
- Consider keyboard accessibility: logical tab order, Enter-to-calculate where appropriate, visible focus states, and screen-reader announcements for result updates.
- Consider paste-friendly batch input and clearer row-level validation.
- Consider downloadable example CSV/template.
- Consider an option to copy a single batch row or all results.
- Any addition should be evaluated against performance, usability, accessibility, and maintenance cost before implementation.

### Priority 3 — Research before broader feature expansion
- Research direct competitors and their percentage-change / reverse-percentage / percentage-difference / batch features.
- Research US search intent and keyword demand using dated, credible sources.
- Identify likely audience segments and use cases; do not assert country usage shares without analytics or credible data.
- Produce a sourced research brief, competitor matrix, feature prioritization (impact/effort), and phased work schedule.
- Keep sourced findings separate from hypotheses and recommendations.

## Update log

### 2026-11-16
- Created this durable project record.
- Recorded current known feature scope, design protections, recent commits, QA checklist, research gaps, and next work queue.


## Mandatory ongoing work log — owner instruction (2026-11-16)

The owner requires a complete, dated record for every task performed on this tool. This is mandatory; do not skip updates, even for small fixes.

For every work session, append a dated entry recording:

- **Request and scope:** what the owner asked for, which tool/page/files are in scope, and what must not be touched.
- **Research:** questions investigated, competitor/keyword/audience findings, source URLs and access dates, and which statements are facts, estimates, or hypotheses. If no research was done, explicitly say so.
- **Baseline:** current commit/file state inspected before editing and any known-good rollback commit.
- **Issues found:** every bug, visual issue, incorrect behavior, root cause if known, and reproduction steps.
- **Changes made:** exact files/sections changed, behavior added/removed, and why.
- **Mistakes and recovery:** any incorrect assumption, accidental change, failed attempt, regression, or user correction; record what was wrong and how it was corrected. Never hide mistakes.
- **Verification:** tests actually run, input values, expected and actual results, devices/browsers if known, and anything not tested. Never mark untested work as verified.
- **Commit/deployment:** commit SHA, branch, and deployment status. Clearly distinguish committed, deployed, and live-verified.
- **Work checklist:** mark each item exactly as `[x] Complete`, `[ ] Pending`, or `[!] Blocked`; include the next action and priority.
- **Next session handover:** the single best next task, dependencies, risks, and files to inspect first.

Do not overwrite or silently rewrite earlier dated entries. Append a new dated entry so the full history remains auditable. Correct a past entry only by adding a dated correction note that explains what changed and why.

At the start of every future session on this tool, read this record before making changes. At the end of every session, update this record in the same work session and commit the code and log together where practical. If the log cannot be updated, stop and tell the owner rather than claiming the work is fully recorded.

### Work status snapshot — 2026-11-16

- [x] Percentage Change mode recorded.
- [x] Reverse % mode recorded.
- [x] Percentage Difference mode recorded.
- [x] History mode restoration and CSV labeling changes recorded.
- [x] Batch modes for Change, Reverse %, and Difference recorded.
- [ ] Browser QA of all three batch modes and regression checks — pending owner test / browser verification.
- [ ] Full sourced US-focused competitor, keyword, audience and feature research — pending.
- [ ] Deployment/live verification — pending.

### Correction / clarification — 2026-11-16

Earlier project notes listed commit short SHAs inconsistently. The authoritative source for the current state is the GitHub commit history on `main`; future log entries must record the full 40-character commit SHA returned by GitHub. The recent batch work was committed in two steps: feature implementation followed by exact row-format validation. The validation commit is `63af8a897de00c1e239ffadfe62283c65c13e291`. Do not infer production deployment from either commit.


## Work session — 2026-11-16 (Batch Calculator QA and parser correction)

### 1. Owner request and scope
- Requested: Continue the next planned task after the owner said to start work.
- Scope: QA of `percentage-change.html`, focused on all three Batch Calculator modes and nearby existing features.
- Explicit constraints: Do not alter the approved tool Hero, Header, logo, homepage, or unrelated tools.

### 2. Research and decisions
- External market/competitor research: Not performed in this session; this was a code QA and bug-fix session.
- Decision: Fix the confirmed batch input parsing issue before adding any new feature.

### 3. Baseline and risks
- Repository/branch: `barsulkhan/InfoJano`, `main`.
- Starting file blob SHA: `91f497e3bbda960e918aac2bbd1f15c68ba1c83f`.
- Files inspected: `percentage-change.html`, this project record, and `docs/TOOL-WORK-LOG-STANDARD.md`.
- Preserved: Percentage Change, Reverse %, Percentage Difference, History, Copy Result, CSV export, approved Hero and Header.
- Risk: Incorrect newline/tab parsing could cause multiline batch inputs to be treated as a single row or split incorrectly.

### 4. Issues found
- Confirmed issue: Batch parser used over-escaped regex patterns for line and cell splitting. The source had a pattern equivalent to matching literal backslash sequences instead of actual CR/LF and tab separators.
- Confirmed issue: The example placeholders for Change and Difference modes contained inconsistent escaped newline sequences, so examples could display literal \\n text rather than separate lines.
- Reproduction: Paste multiple comma-separated rows into Batch mode; parser's newline splitting did not correctly use the line break separator.
- Root cause: Backslashes were doubled when the earlier batch feature code was inserted.

### 5. Changes made
- File: `percentage-change.html`.
- Corrected batch line splitting to use CR/LF newline parsing.
- Corrected cell splitting to use tab, comma, and semicolon separators.
- Corrected multiline placeholders for Change, Reverse %, and Difference modes.
- No Hero, Header, logo, homepage, or unrelated page layout changes.

### 6. Mistakes, failed attempts, and corrections
- The prior batch implementation contained incorrect escaping. This was an implementation mistake and is recorded as such.
- During the placeholder correction, an initial scripted replacement expected a sequence that was already correctly escaped; the operation stopped before writing any file. The actual remaining incorrect sequences were then identified and corrected in a subsequent successful commit.

### 7. Verification
- Static source assertions passed for: newline parser, tab/comma/semicolon parser, all three multiline placeholders, all three mode options, 100-row cap, invalid-row filtering, Reverse 100% decrease guard, CSV calculation-type column, existing History/Copy controls, and preservation of Hero/Header markup.
- Arithmetic checks (calculated directly from the formulas):
  - Change 80 → 100 = +25.00%.
  - Change 100 → 80 = -20.00%.
  - Reverse: final 120 after 20% decrease → original 150.
  - Reverse: final 240 after 20% increase → original 200.
  - Difference: 80 and 100 → 22.22% (approximately).
- Browser/device QA: Not performed in this session. Live deployment not verified. These are static checks and formula checks, not proof of live browser behavior.

### 8. Commit and deployment
- Fix commit 1: `a1e02affd4e4b9ce0135cbf3fbe899174d36d1c2` — corrected batch line and cell parser escaping.
- Fix commit 2: `872b43bb276ab63e49481f109d93e16a798a8f11` — corrected multiline example placeholders.
- Branch: `main`.
- Deployment: Pending / not independently verified.

### 9. Work checklist
- [x] Static QA of batch parser and mode wiring.
- [x] Correct newline and tab parsing.
- [x] Correct multiline placeholders for all modes.
- [x] Formula spot checks for Change, Reverse %, and Difference.
- [ ] Browser QA on desktop and mobile — pending.
- [ ] Test actual CSV downloads in a browser — pending.
- [ ] Verify History restore for all three modes in a browser — pending.
- [ ] Verify production deployment — pending.

### 10. Next session handover
- Priority 1: Browser-test all three Batch modes with multi-line data, tab-separated data, invalid rows, and the 100-row boundary.
- Priority 2: Test CSV downloads, History restore, Copy Result, and mobile layout.
- First file to inspect: `percentage-change.html`.
- Do not redesign or modify the approved Hero/Header.


## Work session — 2026-11-16 (Follow-up QA and live-test availability check)

### 1. Owner request and scope
- Requested: Continue the next QA step ("Koro").
- Scope: Check whether browser/live QA can be performed, inspect CI evidence, and retain the tool-only scope.
- Constraints: No changes to approved Hero, Header, homepage, logo, or unrelated tools.

### 2. Research and decisions
- No external market research performed; this session was QA validation.
- Attempted to open the production page at `https://infojano.com/percentage-change.html` using the available web viewer; it returned inaccessible. No browser automation or interactive browser control is available in this session.
- Checked GitHub commit CI status and commit-associated workflow runs for `872b43bb276ab63e49481f109d93e16a798a8f11`; GitHub returned no statuses and no associated workflow runs. Therefore CI/browser success cannot be inferred.

### 3. Baseline and risks
- Repository: `barsulkhan/InfoJano`, branch `main`.
- Latest tool-file commit at start of this check: `872b43bb276ab63e49481f109d93e16a798a8f11`.
- Inspected current `percentage-change.html` source and prior QA notes.
- Risk: Static source checks cannot prove runtime behavior in a real desktop/mobile browser.

### 4. Issues / findings
- No additional code defect confirmed by this follow-up check.
- Live page accessibility could not be confirmed through the available viewer.
- No GitHub CI status or workflow run was associated with the parser fix commit.

### 5. Changes made
- No application code changed in this session.
- No visual/layout changes made.

### 6. Mistakes, failed attempts, and corrections
- Earlier assistant said it would browser-test directly; this environment does not provide interactive browser automation, and the available web viewer cannot access the production URL. Corrected the expectation here rather than claiming a browser test passed.

### 7. Verification
- Reconfirmed source-level assertions from the previous session: correct CR/LF row splitting, tab/comma/semicolon cell splitting, multiline examples, three batch modes, 100-row cap, invalid-row filtering, reverse 100% decrease guard, CSV mode column, and presence of History/Copy and approved Hero/Header markup.
- Recomputed expected formula spot-check values: +25.00%, -20.00%, Reverse decrease original 150, Reverse increase original 200, Difference 22.22%.
- Not run: interactive desktop browser, mobile browser, real CSV download, localStorage History restore, keyboard navigation, or production visual regression.
- These source/formula checks are not a substitute for browser QA.

### 8. Commit and deployment
- No application code commit in this follow-up session.
- Project record update is committed separately on `main`.
- Deployment/live status: Not verified.

### 9. Work checklist
- [x] Recheck parser and batch feature source assertions.
- [x] Recheck arithmetic examples.
- [x] Check available CI status and workflow-run evidence.
- [ ] Interactive desktop QA — pending a browser session / owner-side browser test.
- [ ] Interactive mobile QA — pending.
- [ ] CSV download and History restore browser tests — pending.
- [ ] Production deployment/live verification — pending.

### 10. Next session handover
- Next task: Complete interactive browser QA of the deployed tool.
- Owner can help unblock this by opening the page and testing the three Batch modes; capture any issue/screenshot. If an interactive browser tool becomes available, run the full checklist directly.
- First file: `percentage-change.html`.
- Preserve approved Hero/Header; do not add more features until QA is complete.


## Work session — 2026-11-16 (Owner-supplied mobile QA screenshots and CSV export review)

### 1. Owner request and scope
- Requested: Record the latest QA evidence ("Koro") and identify the next task.
- Scope: Percentage Calculator mobile screenshots, all three Batch Calculator modes, Batch CSV sample, and Calculation History CSV.
- Constraints: Preserve the approved calculator design and existing layout. Do not touch homepage, Hero/Header, logo, shared navigation, or unrelated tools.

### 2. Research and decisions
- External competitor, keyword, and audience research: Not performed in this QA session.
- Decision: Treat owner-supplied screenshots and exported CSV files as evidence for the specific cases shown; do not generalize them to untested cases or claim a complete browser QA pass.

### 3. Baseline and risks
- Repository: `barsulkhan/InfoJano`, branch `main`.
- Starting project-record commit: `48e155f3692fd0b5b19a6f614ae9d7092329f6b1`.
- Read the mandatory work-log standard and this complete project record before updating it.
- No application source file was changed in this session.
- Known-good rollback point remains the previously recorded calculator source commits; no new code commit was made.

### 4. Issues found / findings
- No calculation defect was demonstrated by the supplied screenshots.
- Clarification: 80 → 100 returning 22.22% is correct in Percentage Difference mode (absolute difference 20 divided by average 90); the same pair returns +25.00% in Percentage Change mode (20 divided by starting value 80). Earlier concern that 22.22% was inconsistent is withdrawn; the mode labels and History entries distinguish the two calculations.
- Screenshot evidence shows the three Batch modes returning the expected sample results:
  - Percentage Change: 80→100 = +25.00%; 800→3000 = +275.00%; 500→700 = +40.00%.
  - Percentage Difference: 80/100 = 22.22%; 800/3000 = 115.79%; 500/700 = 33.33%.
  - Reverse % (all Increase): final 80 at 100% → original 40; final 800 at 3,000% → original 25.806452; final 500 at 700% → original 62.5.
- Owner-supplied mobile screenshots show the History, Batch results, and guide sections fitting within the captured narrow-screen viewport. This is screenshot-based visual evidence, not a full interaction or device/browser compatibility test.

### 5. Changes made
- No application code or design changes.
- This project record is being extended with the new QA evidence and the corrected interpretation of Percentage Difference.
- No unrelated files or features touched.

### 6. Mistakes, failed attempts, and corrections
- Earlier assistant described the 80→100 Percentage Difference result as a possible inconsistent denominator. That interpretation was incorrect because it overlooked that the screenshot was in Percentage Difference mode, whose denominator is the average of the two absolute values. Corrected based on the visible mode selector, step-by-step formula, History label, and exported CSV.
- No failed code change or regression occurred in this session.

### 7. Verification
- Owner-supplied screenshot: Percentage Change Batch — 3/3 visible rows match expected results.
- Owner-supplied screenshot: Percentage Difference Batch — 3/3 visible rows match expected results.
- Owner-supplied screenshot: Reverse % Batch — 3/3 visible rows match expected original values.
- File inspected: `infojano-percentage-calculator-batch.csv` — parsed as 3 rows × 8 columns; Calculation type is `difference` for all rows; results are 22.222222, 115.789474, and 33.333333; Difference values are 20, 2200, and 200. These match the Percentage Difference formula.
- File inspected: `infojano-percentage-change-history (1).csv` — parsed as 6 rows × 8 columns; includes one Difference, two Reverse, and three Change records. All six percentage results match their respective formulas: 22.222222%, -20%, +20%, -20%, +25%, and -87.5%. Reverse rate is 20 for the two Reverse entries; non-Reverse rows leave it blank. Saved-at values are ISO UTC timestamps.
- Screenshot evidence also shows History entries and both batch result tables.
- Not verified: actual CSV opening/rendering in Excel or Google Sheets; CSV encoding/BOM and delimiter behavior across locales; Batch CSV export for Change and Reverse modes; History restore interaction; Copy Result; invalid-row handling; 100-row boundary; zero/negative/decimal/extreme-value edge cases; keyboard/accessibility behavior; full desktop/mobile responsive regression; production deployment/live status.
- Important scope: the two supplied CSVs prove sample exports/data for Difference Batch and History only. They do not prove all CSV export modes or all spreadsheet applications.

### 8. Commit and deployment
- No application code commit in this session.
- Project-record update only; full resulting commit SHA to be recorded after GitHub confirms it.
- Branch: `main`.
- Deployment: No code deployment performed; production live status remains unverified.

### 9. Work checklist
- [x] Review owner screenshots for Percentage Change Batch sample results.
- [x] Review owner screenshots for Percentage Difference Batch sample results.
- [x] Review owner screenshots for Reverse % Batch sample results.
- [x] Inspect and formula-check the supplied Difference Batch CSV (3 rows).
- [x] Inspect and formula-check the supplied History CSV (6 records).
- [x] Correct the earlier misinterpretation of 22.22% as a possible formula inconsistency.
- [ ] Test Change Batch CSV export with a real downloaded file.
- [ ] Test Reverse % Batch CSV export with a real downloaded file.
- [ ] Open both supplied CSVs in Excel or Google Sheets and check encoding/column parsing.
- [ ] Test History restore, Copy Result, invalid rows, and the 100-row boundary.
- [ ] Complete broader edge-case and accessibility QA.
- [ ] Independently verify production deployment/live page.
- [ ] Complete sourced competitor, US search-intent, and audience research before product expansion.

### 10. Next session handover
- Priority 1 next task: Validate remaining CSV paths — export Change Batch and Reverse % Batch files, then open the supplied and new CSVs in a spreadsheet application to check encoding, columns, numeric precision, and UTC timestamps.
- First file to inspect if code work becomes necessary: `percentage-change.html`; do not change code unless a reproducible defect is found.
- Preserve the approved Hero/Header and current visual design. No new features or redesign until the remaining QA gaps are closed.


## Work session — 2026-11-16 (Global English market research — initial pass)

### 1. Owner request and scope
- Requested: Start research for the Percentage Calculator with global coverage, explicitly including Canada, Brazil, Australia, European countries, Russia, China and the US.
- Owner clarification: English only. No translated interface, translated pages, or non-English UI.
- Scope: Desk research, public competitor feature scan, initial English keyword clusters, global market hypotheses and a research plan.
- Constraints: Preserve approved calculator design, Hero, Header, logo, homepage and unrelated tools. No application code changes in this research phase.

### 2. Research and decisions
- Researched public competitor pages and Google Trends methodology on 2026-11-16.
- Competitor pages reviewed: CalculatorSoup, OmniCalculator, W3Schools, Utiliby, Calculator-Soup alternative, ToolkitJar, Gera Tools and Any-Toolkit. Publicly visible features include multiple percentage modes, worked formulas, explanatory content, browser-side calculation/privacy claims, batch/export/print features on some tools.
- Initial finding: InfoJano already has a useful differentiator in three-mode batch calculation, history and CSV export; competitors demonstrate that clear formula explanations and related percentage tasks are common expectations.
- Keyword clusters drafted: core percentage calculator/change/increase/decrease/difference/reverse terms; discount/price change terms; business and education terms; country-modified English phrases.
- Critical measurement note: Google Trends uses sampled, normalized 0–100 interest, not absolute search volume. No country-level monthly search volumes or audience shares were obtained in this pass.
- Market prioritization is provisional, not a proven ranking: first validate US/UK/Canada/Australia; then English-query audiences in Europe and Brazil; then Russia and China after checking search-channel access and reachability.
- Owner language rule applied: all product and SEO content remains English-only. Country relevance may be reflected in examples, number conventions and research, not translated UI.
- Sources and detailed findings are in `docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md`.

### 3. Baseline and risks
- Repository: `barsulkhan/InfoJano`, branch `main`.
- Starting project-record commit: `8d25acde75121b4964cd7ac13da9678eb9bf7438`.
- Read the full project record before work.
- Fetched current `percentage-change.html` as baseline (approximately 102,810 characters); no application source changes made.
- Risk: Public competitor page snapshots do not prove traffic, rankings, conversion, or live interaction quality. Search interest cannot be converted into search volume without a separate source.

### 4. Issues found
- No application code defect investigated or confirmed in this research session.
- Evidence gap: country-level keyword volume, country traffic share, Search Console data, Russia/China discovery-channel feasibility, and spreadsheet locale compatibility remain unknown.

### 5. Changes made
- Created `docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md` with competitor scan, qualitative keyword clusters, market hypotheses, English-only localization strategy, initial recommendations, source links, limitations and next research tasks.
- No application code, UI, design, metadata or unrelated files changed.

### 6. Mistakes, failed attempts, and corrections
- Earlier broad global strategy had mentioned translated language versions. Owner explicitly rejected this. This session corrected the strategy to English-only; no translation work was started.
- No code edits or failed code changes in this session.

### 7. Verification
- Confirmed the new research document was created in GitHub.
- Research statements distinguish visible competitor features from unverified traffic/market assumptions.
- Not performed: Google Trends country-by-country export/comparison, keyword database volume analysis, Search Console analysis, interactive competitor UX tests, accessibility or page-speed benchmarks.

### 8. Commit and deployment
- Research document commit: `46b034ca81fd435fc6d60d689722942b6ebfe365`.
- Project record update: this entry; resulting full SHA to be confirmed.
- Branch: `main`.
- No application code deployment. Production status unchanged and not verified.

### 9. Work checklist
- [x] Confirm global target-market scope and English-only rule.
- [x] Conduct initial public competitor feature scan.
- [x] Draft qualitative English keyword clusters.
- [x] Document country hypotheses and provisional research order.
- [x] Create global English research brief in GitHub.
- [ ] Compare Google Trends for the same core queries across target countries and preserve exact settings/results.
- [ ] Obtain credible country-level keyword volume estimates.
- [ ] Review InfoJano Search Console query/country performance if data access is available.
- [ ] Complete competitor UX, mobile, accessibility and page-speed review.
- [ ] Produce evidence-backed feature gap matrix and prioritized roadmap.
- [ ] Validate number parsing and CSV compatibility across target locale conventions.

### 10. Next session handover
- Priority 1: Build a reproducible country comparison for the same English keyword set (percentage calculator, percentage change calculator, percent increase calculator, percentage difference calculator, reverse percentage calculator) across US, Canada, UK, Australia, selected European countries, Brazil, Russia and China. Record Trends settings and avoid presenting index values as search volumes.
- First files: `docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md`, then `percentage-change.html` only if a code change is justified.
- Preserve English-only UI and approved design. Do not create translated pages or redesign the Hero/Header.
