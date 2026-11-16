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


## Work session — 2026-11-16 (Global English country-demand comparison — second pass)

### 1. Owner request and scope
- Requested: Continue the global English market research.
- Countries retained: US, Canada, Australia, UK, European countries, Brazil, Russia and China.
- Language constraint: English only across the site and product.
- Scope: Find country-level evidence for the head keyword, assess broad search-discovery context, refine provisional market priorities.
- No calculator code or design changes authorized or made.

### 2. Research and decisions
- Searched for country-level keyword evidence and official measurement methodology.
- Third-party KWS Trends report for "percentage calculator" displays approximately 1.9M average monthly searches worldwide across 121 countries; visible country estimates: US 1.0M (53%), UK 130K (6.8%), Australia 40K (2.1%), Germany 40K (2.1%), Canada 22K (1.2%), Spain 18K (0.9%), Italy 18K (0.9%). Source: https://www.kwstrends.com/keywords/us/percentage-calculator (accessed 2026-11-16).
- These are third-party estimates, not a Google Keyword Planner export; visible report does not disclose enough methodology to treat as audited. Figures cover the head term only. Brazil, Russia and China are not individually visible in the displayed top-country list; this is not evidence of zero searches.
- Kepios/DataReportal Digital 2026 report (published October 2025; GWI Q2 2025) gives monthly search-engine usage among internet users 16+: Brazil 92.9%, Canada 89.7%, UK 87.8%, Australia 87.6%, Germany 87.3%, France 83.8%, Russia 70.9%, China 61.1%. Source: https://learn.meltwater.com/rs/814-WJU-189/images/2026_Kepios_Digital_Global_Overview_Report.pdf?version=0. These are broad search-engine usage rates, not calculator demand, not Google-only, and not English-query shares.
- Google documentation confirms Keyword Planner provides location-specific average monthly search estimates but requires account setup/billing; Trends is normalized and sampled, not absolute volume. Sources: https://support.google.com/google-ads/answer/7337243?hl=en ; https://support.google.com/google-ads/answer/3022575?hl=en ; https://newsinitiative.withgoogle.com/resources/trainings/google-trends/understanding-the-data/
- Provisional priority refined: Tier 1 validation US/UK/Australia/Canada; Tier 2 Germany/France/Netherlands/other Europe; Tier 3 exploratory Brazil; Russia and China feasibility-first. This is a recommendation from limited evidence, not definitive market ranking.
- Detailed data, caveats, and measurement plan appended to `docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md`.

### 3. Baseline and risks
- Repository: `barsulkhan/InfoJano`, branch `main`.
- Research document prior blob SHA: `0d1fdd2b019e46c9eafa2ca3b602d99b8fa2d950`.
- No application source inspected or changed in this research-only pass.
- Risk: Third-party keyword estimates may vary by provider, match variants, database and date; broad search-engine use does not prove English search demand.

### 4. Issues / evidence gaps
- No consistent per-country volume matrix is yet available for the full keyword cluster.
- Brazil, Russia and China English head-term volumes remain unknown from accessible evidence.
- No Search Console data or Google Ads Keyword Planner export was available.
- Country-level keyword difficulty, CPC, SERP competition and ranking opportunity remain unverified.

### 5. Changes made
- Appended Section 11, "Country demand evidence — second pass", to `docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md`.
- No calculator source, metadata, UI, homepage, Hero, Header, logo or unrelated files changed.

### 6. Mistakes, failed attempts, and corrections
- No code mistakes or failed edits.
- Guardrail applied: did not treat missing country entries as zero demand or general search-engine usage as calculator search volume.

### 7. Verification
- Confirmed research document update committed to GitHub.
- Checked that source types and limitations are explicitly described.
- Not performed: Keyword Planner live export, full Trends country comparison, Search Console analysis, competitor interaction tests, or browser QA.

### 8. Commit and deployment
- Research document update commit: `9a675aa2332bd9a570d209f226391bf67694d6a4`.
- Project record update: this entry; resulting SHA to be confirmed.
- Branch: `main`.
- No application code deployment; production status unchanged and not verified.

### 9. Work checklist
- [x] Search for country-level head-term estimates.
- [x] Record visible US, UK, Australia, Germany, Canada, Spain and Italy estimates with caveats.
- [x] Add broad search-engine usage context for Brazil, Canada, UK, Australia, Germany, France, Russia and China.
- [x] Distinguish keyword demand from search-engine adoption and Google Trends indices.
- [x] Update provisional market tiers and next measurement requirements.
- [ ] Obtain consistent per-country monthly search volumes for all core English keywords.
- [ ] Obtain Google Trends exports with identical settings across target countries.
- [ ] Review InfoJano Search Console country/query data if available.
- [ ] Complete competitor SERP and UX comparison before product changes.
- [ ] Produce evidence-backed feature roadmap.

### 10. Next session handover
- Priority 1: Complete a consistent multi-country keyword dataset for the five core terms (percentage calculator, percentage change calculator, percent increase calculator, percentage difference calculator, reverse percentage calculator). Use Keyword Planner or a transparent provider with location-specific data; preserve source/date/methodology and mark unavailable markets as unknown.
- Preserve English-only UI and approved visual design. Do not add features or redesign before the roadmap is evidence-backed.


## Work session — 2026-11-16 (Core keyword evidence — third pass)

### 1. Owner request and scope
- Request: Continue the planned global English keyword research ("Ready koro").
- Scope: Validate the five core English keyword phrases and collect available country-level volume, CPC and competition evidence.
- Countries retained: US, UK, Canada, Australia, Europe, Brazil, Russia and China.
- Constraints: English-only site and content; do not translate pages; do not alter calculator code, approved Hero/Header, homepage, logo, shared navigation or unrelated tools.

### 2. Research and decisions
- Read the current project record and global English research document before starting.
- Searched public keyword reports and Google measurement documentation on 2026-11-16.
- Direct KWS Trends US report for "percentage change calculator" (updated 2026-11-09): SEO estimate 60,000 average monthly searches, SEO difficulty 72/100, estimated CPC USD $0.01. Its separate Google Ads / Keyword Planner panel reports 110,000 monthly searches, top-of-page bid USD $0.01–$0.01 and competition index 0/100. These are separate methodologies and are not merged. Source: https://www.kwstrends.com/keywords/us/percentage-change-calculator
- That report shows worldwide estimate ~120,000/month and visible country estimates: US 60,000, UK 22,000, Canada 8,000, Australia 6,500, India 4,400, New Zealand 1,300, Philippines 1,300, Hong Kong 1,100, Singapore 870, UAE 710, and 98 other countries combined 13,820.
- Direct KWS Trends US report for "percentage calculator" shows SEO estimate 1,000,000/month, SEO difficulty 65/100 and CPC USD $1.38; separate Keyword Planner panel 550,000/month, top-of-page bid USD $0.76–$2.00 and competition index 0/100. Source: https://www.kwstrends.com/keywords/us/percentage-calculator
- The same percentage-calculator report lists "percentage increase calculator" at 110,000/month and "percentage difference calculator" at 82,000/month as related keywords, not independent exact reports. The percentage-change report lists "percentage difference calculator" at 170,000/month as a related keyword. The conflicting related-keyword estimates are retained as a data discrepancy, not averaged.
- No reliable exact report for "reverse percentage calculator" was located in this pass.
- Google Trends documentation confirms normalized sampled 0–100 values are relative interest, not absolute volume: https://newsinitiative.withgoogle.com/resources/trainings/google-trends/basics-of-google-trends/
- Keywords Everywhere describes country-specific keyword volume checking and states that its bulk checker uses Google Keyword Planner data, but no authenticated bulk export was run: https://keywordseverywhere.com/tools/search-volume-checker/ and https://keywordseverywhere.com/tools/keyword-volume-checker/
- Interpretation: "percentage calculator" is the largest broad head term in available US evidence; "percentage change calculator" more closely matches InfoJano's core mode. Exact country-level evidence for the full five-keyword cluster is still incomplete. Missing data is unknown, not zero demand.

### 3. Baseline and risks
- Repository: barsulkhan/InfoJano, branch main.
- Starting research document blob SHA: 21acd22f2ee3242d83cf6417a227a682358656a2.
- Starting project-record blob SHA: 17c5619ce841df41c0aad8831b8fbe52bd32edeb.
- No application source file was changed.
- Risks: KWS Trends SEO estimates and its Keyword Planner panel are separate data streams; related-keyword values can conflict across seed reports. CPC and difficulty are estimates, not ranking guarantees. No authenticated bulk provider export or Search Console data was available.

### 4. Issues / evidence gaps
- Exact same-provider volume matrix for all five phrases across the target countries remains incomplete.
- "percent increase calculator" and "percentage difference calculator" evidence surfaced only as related-keyword values, not independent exact phrase reports.
- "reverse percentage calculator" exact volume remains unknown.
- No complete English-query volume evidence for Germany, France, Netherlands, Brazil, Russia or China was obtained.
- No Google Trends CSV export or InfoJano Search Console report was obtained.

### 5. Changes made
- Appended Section 12, "Core keyword evidence — third pass", to docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md.
- Added separate reporting for SEO estimates vs Keyword Planner panel values and recorded inconsistent related-keyword values without averaging.
- No calculator code, UI, metadata, design, homepage, Hero, Header, logo or unrelated files changed.

### 6. Mistakes, failed attempts, and corrections
- Tried opening guessed direct KWS Trends report URLs for percent increase, percentage difference and reverse percentage. Those exact URLs were inaccessible and are not treated as evidence.
- Avoided treating related-keyword proxy figures as exact phrase volumes.
- Avoided treating missing country rows or missing reports as zero demand.

### 7. Verification
- Research document update was committed to GitHub; commit SHA: 4284ea012501804a20b0b41e781aa52774e763ad.
- Web search results confirmed the two direct US report pages and their visible values.
- Not performed: authenticated Keyword Planner bulk export, full multi-country five-keyword matrix, Google Trends CSV export, Search Console analysis, browser QA or competitor interaction tests.
- No application behavior was tested because no application code changed.

### 8. Commit and deployment
- Research document commit: 4284ea012501804a20b0b41e781aa52774e763ad.
- Project record update: pending in this operation; resulting SHA to be confirmed.
- Branch: main.
- No application code deployment; live deployment remains unverified.

### 9. Work checklist
- [x] Read project record and research document before work.
- [x] Find and record a direct US report for "percentage change calculator".
- [x] Record country distribution for the percentage-change phrase where visible.
- [x] Record US head-term metrics and related-keyword proxies with caveats.
- [x] Separate SEO estimates from Keyword Planner panel values.
- [x] Update the research document with sources, discrepancies and limitations.
- [ ] Obtain a same-provider exact-phrase matrix for all five keywords across US, UK, Canada and Australia.
- [ ] Extend exact phrase data to Germany, France, Netherlands, Brazil, Russia and China where supported.
- [ ] Export Google Trends data using identical settings for relative trend comparison.
- [ ] Review Search Console query/country data if available.
- [ ] Complete competitor UX comparison and evidence-backed roadmap.

### 10. Next session handover
- Priority 1: Obtain a reproducible same-provider exact-match dataset for the five phrases and the full country set; keep English language and location settings fixed and record unsupported markets as unknown.
- First files: docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md and this project record.
- No product or design changes until keyword/competitor evidence supports a specific change.


## Work session — 2026-11-16 (Search intent and methodology review — fourth pass)

### 1. Owner request and scope
- Request: Continue the next research task ("Koro") from the existing keyword and country research.
- Scope: Deepen exact US keyword/search-result evidence, inspect provider methodology, and check whether available country data supports English-only market conclusions.
- Constraints: English-only website/content; no translations; do not modify application code, approved Hero/Header, homepage, logo, shared navigation or unrelated tools.

### 2. Research and decisions
- Read the latest project record and global English research document first.
- Reviewed KWS Trends exact US reports for "percentage calculator" and "percentage change calculator", its methodology and terms pages, and Google Trends methodology.
- "percentage calculator" report: 1,000,000 corrected average monthly searches; SEO difficulty 65/100; estimated CPC USD $1.38. Separate Google Ads Keyword Planner panel: 550,000 monthly searches; top-of-page bid USD $0.76–$2.00; competition index 0/100 (Low). Related phrases include "percentage increase calculator" 110,000, "percentage difference calculator" 82,000 and "percentage change calculator" 60,000. These related values are not all separate exact-match reports. Source: https://www.kwstrends.com/keywords/us/percentage-calculator
- "percentage change calculator" report: 60,000 corrected average monthly searches; SEO difficulty 72/100; estimated CPC USD $0.01. Separate Keyword Planner panel: 110,000 monthly searches; bid USD $0.01–$0.01; competition index 0/100. Worldwide 120,000/month, visible country distribution US 60,000, UK 22,000, Canada 8,000, Australia 6,500, India 4,400. Source: https://www.kwstrends.com/keywords/us/percentage-change-calculator
- KWS methodology says its corrected average combines Google Ads Keyword Planner and a second keyword database, benchmarked against Search Console and GA4 data from comparison sites. The separate Google Ads panel is Keyword Planner's own rounded data. SEO difficulty and intent/CPC fields use the second keyword database. Source: https://www.kwstrends.com/methodology
- KWS terms explicitly caution that search volume, CPC, difficulty and monthly values are estimates and may be incomplete, delayed or revised. Source: https://www.kwstrends.com/terms
- Google Trends remains a normalized 0–100 relative-interest metric, not absolute volume. Source: https://newsinitiative.withgoogle.com/resources/trainings/google-trends/basics-of-google-trends/
- Country review: percentage calculator visible distribution includes US, UK, Australia, Germany and Canada; percentage change report shows US, UK, Canada and Australia. No reliable exact country-level English query dataset for Brazil, Russia or China was obtained. Country distribution alone does not prove query language.
- Recommendation: Keep the primary page aligned to broad percentage calculator intent and make the three existing modes explicit. Do not create standalone increase/difference/reverse pages based only on related-keyword proxies; obtain exact reports and inspect SERPs first.

### 3. Baseline and risks
- Repository: barsulkhan/InfoJano, branch main.
- Starting research document blob SHA: f222f03ddac52cd1242378eee80d7bb722ca953f.
- Starting project-record blob SHA: dc026237f54fdf15e90327cd7c725195102a9fcd.
- No application source file was changed.
- Risks: KWS corrected averages and Keyword Planner panel are different measures; related keyword metrics can be seed-dependent. CPC and ad competition do not equal organic ranking difficulty. Country totals do not isolate English-language queries.

### 4. Issues / evidence gaps
- Exact independent reports for percent increase, percentage difference and reverse percentage are still missing.
- Same-provider exact-phrase country matrix for all five terms across all target countries remains incomplete.
- No evidence of English keyword demand for Brazil, Russia or China.
- No Search Console data or live Google Trends CSV export was available.

### 5. Changes made
- Appended Section 13, "Search-intent and source-methodology review — fourth pass", to docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md.
- Added report-level search intent, SERP observations, methodology clarification and market-language caveats.
- No calculator source, UI, metadata, design, homepage, Hero, Header, logo or unrelated files changed.

### 6. Mistakes, failed attempts, and corrections
- Search attempts for exact "percentage calculator" country reports in Germany, France, Netherlands, Brazil, Russia and China returned unrelated keyword pages; those pages were not used as proxies.
- Retained the difference between Google Ads competition and SEO difficulty rather than describing them as the same competition measure.
- No code edits or failed code changes.

### 7. Verification
- Confirmed two exact US report pages and the provider methodology/terms pages through public search results.
- Research document update commit: 2588faacca69252ea7584afc3a96054f870a7254.
- Not performed: exact phrase reports for the other three terms, authenticated bulk export, complete country matrix, Google Trends CSV export, Search Console analysis, competitor browser UX testing, calculator browser QA.
- No application behavior tested because no application code changed.

### 8. Commit and deployment
- Research document commit: 2588faacca69252ea7584afc3a96054f870a7254.
- Project record update: pending; resulting SHA to be confirmed.
- Branch: main.
- No application code deployment; production status remains unverified.

### 9. Work checklist
- [x] Read the project record and research document.
- [x] Recheck exact US percentage calculator and percentage change reports.
- [x] Inspect provider methodology and terms.
- [x] Record SERP competitors and informational/commercial intent split visible in reports.
- [x] Clarify the limitations of country shares and query-language assumptions.
- [x] Update the research brief with recommendations and gaps.
- [ ] Obtain independent exact reports for percent increase, percentage difference and reverse percentage.
- [ ] Obtain the five-keyword country matrix across the target markets with English-language settings.
- [ ] Export consistent Google Trends relative-interest data.
- [ ] Review Search Console query and country performance.
- [ ] Complete competitor SERP and UX comparison before proposing code changes.

### 10. Next session handover
- Priority 1: Investigate exact independent reports for the three remaining phrases and country-specific reports for Tier 1 markets. Confirm whether provider reports support an explicit English language filter; if not, state that limitation and avoid calling the numbers English-only demand.
- First files: docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md and this project record.
- Keep application and design unchanged until evidence justifies a specific change.


## Work session — 2026-11-16 (Refreshed keyword reports and bulk English checker — fifth pass)

### 1. Owner request and scope
- Request: Continue the keyword/country research ("Koro").
- Scope: Refresh the exact public reports, validate whether a reproducible country-specific English dataset can be collected, and document the next measurable action.
- Constraints: English-only site; no translation; no calculator code, approved Hero/Header, homepage, logo, shared navigation or unrelated files changed.

### 2. Research and decisions
- Read the current project record and research brief before starting.
- Refreshed public KWS Trends report for "percentage calculator": worldwide 1.9M/month across 121 countries; visible shares include US 1.0M, India 370K, UK 130K, Australia 40K, Germany 40K, Philippines 40K, Canada 22K, Taiwan 22K, Spain 18K, Italy 18K and 111 other countries 200K. Source: https://www.kwstrends.com/keywords/us/percentage-calculator
- Refreshed public report for "percentage change calculator": corrected average 60K/month; SEO difficulty 72/100; estimated CPC USD $0.01; separate Keyword Planner 110K/month, bid USD $0.01–$0.01 and competition index 0/100. Worldwide 120K/month; visible country estimates US 60K, UK 22K, Canada 8K, Australia 6.5K, India 4.4K, New Zealand 1.3K, Philippines 1.3K, Hong Kong 1.1K, Singapore 870, UAE 710 and 98 other countries 13.82K. Source: https://www.kwstrends.com/keywords/us/percentage-change-calculator
- Current related-keyword table in the percentage-change report shows "percentage increase calculator" 170K and "percentage difference calculator" 170K. These are related entries, not exact independent reports, and differ from earlier related-keyword values (110K and 82K). Retained as seed-dependent discrepancies.
- Verified KWS Trends bulk Keyword Planner checker description: up to 200 keywords, selected country, English, monthly searches, bid range, competition, monthly history and CSV export; public page says 20 lookups per browser/day, no sign-up. Source: https://www.kwstrends.com/google-ads-keyword-tool
- The web viewer cannot interact with this form or download its CSV; no bulk result dataset was obtained. This is an access limitation, not a claim that the tool failed.
- The bulk checker is the best next route to a consistent English country matrix, subject to actual country availability. Do not assume all target countries are supported.
- Global report country splits do not prove every query was typed in English. Mark missing cells unknown, not zero.

### 3. Baseline and risks
- Repository: barsulkhan/InfoJano, branch main.
- Starting research document blob SHA: f222f03ddac52cd1242378eee80d7bb722ca953f.
- Starting project-record blob SHA: d8bf89da50d4deb621359f130ae8e702aa2f9a50.
- No application source file changed.
- Risks: Corrected estimates differ from raw Keyword Planner numbers; related-keyword values vary by seed report; provider terms say estimates can be incomplete/revised. Bulk checker country availability must be confirmed in the actual form.

### 4. Issues / evidence gaps
- No direct exact independent report obtained for percent increase, percentage difference or reverse percentage.
- No bulk CSV results were retrieved because the tool's interactive form could not be operated in this environment.
- Full country matrix for US, UK, Canada, Australia, Germany, France, Netherlands, Brazil, Russia and China remains incomplete.
- Country report distribution does not isolate English language for every location.

### 5. Changes made
- Appended Section 14, "Updated keyword report evidence and bulk-data path — fifth pass", to docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md.
- Added refreshed report values, related-keyword discrepancies, bulk checker capability and access limitation.
- No calculator code, UI, metadata, design, homepage, Hero, Header, logo or unrelated files changed.

### 6. Mistakes, failed attempts, and corrections
- Attempted direct report URLs for percent-increase, percentage-difference and reverse-percentage exact reports; all three were inaccessible through the web viewer. They are not treated as data.
- The exact keyword report values for related terms differ by seed page; recorded the current values alongside earlier values rather than selecting one as definitive.
- Did not claim the bulk tool was run; only its documented capability was verified.

### 7. Verification
- Public report pages and bulk checker description were retrieved and reviewed.
- Research document commit: fd76d28baf516d1a7a9a65879b312c81fdde9380.
- Not performed: interactive bulk lookup, CSV download, exact reports for remaining three terms, full country matrix, Search Console export, Google Trends CSV, live SERP interaction, calculator browser QA.
- No application behavior tested.

### 8. Commit and deployment
- Research document commit: fd76d28baf516d1a7a9a65879b312c81fdde9380.
- Project record update: pending; resulting SHA to be confirmed.
- Branch: main.
- No application deployment; production status remains unverified.

### 9. Work checklist
- [x] Read project record and research brief.
- [x] Refresh public reports for percentage calculator and percentage change calculator.
- [x] Record current country distributions and related-keyword discrepancies.
- [x] Verify public bulk checker documentation for country-specific English Google Ads data and CSV output.
- [x] Document inability to operate the interactive checker in this environment.
- [ ] Run five exact keywords through bulk checker for US, UK, Canada and Australia.
- [ ] Run supported European, Brazil, Russia and China locations; record unsupported countries as unavailable.
- [ ] Save and inspect CSV outputs.
- [ ] Obtain exact phrase reports for increase, difference and reverse percentage.
- [ ] Review organic SERPs and Search Console data before product changes.

### 10. Next session handover
- Priority 1: Obtain the KWS bulk checker results for the five exact phrases across Tier 1 countries. If direct interactive access remains unavailable, request the exported CSV from the owner only as a last resort; do not ask for it if an interactive browser becomes available.
- First files: docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md and this project record.
- Keep application code and approved design untouched until evidence supports a specific implementation.


## Work session — 2026-11-16 (Country-matrix research access check)

### 1. Owner request and scope
- Request: Continue the next research step for the five exact English percentage-calculator phrases across target countries.
- Scope: Research only; inspect the current research brief and project record, test available structured keyword-data routes, and document outcomes.
- Constraints: English-only audience/content. No translations. No calculator code, homepage, Hero, Header, logo, shared navigation or unrelated tool changes.

### 2. Research performed
- Re-opened KWS Trends bulk checker. The public page documents up to 200 keywords, selected country, English-language Google Ads Keyword Planner figures, monthly searches, bids, competition, 12-month history and CSV export. Source: https://www.kwstrends.com/google-ads-keyword-tool (accessed 2026-11-16).
- Confirmed from Google's official help that Keyword Planner supports location and language targeting; Google requires billing information to access basic Keyword Planner features. Source: https://support.google.com/google-ads/answer/7337243?hl=en (accessed 2026-11-16).
- Tested the available Ahrefs Keywords Explorer endpoint as an alternative for exact phrase metrics by country. The service rejected the request with "Insufficient plan"; no result data was returned. The tool schema supports volume, difficulty, CPC, clicks and detected languages, but this is not a completed data pull.

### 3. Baseline and risks
- Repository: barsulkhan/InfoJano, branch main.
- Baseline project-record blob SHA: 2c7211a7a0205dee4eaec535e39e54b00b31fed8.
- Baseline research-document blob SHA: 4728588547b66fd30f1f93d60f89e2582917ab62.
- Latest known research commit before this session: fd76d28baf516d1a7a9a65879b312c81fdde9380.
- No application source file changed.
- Risk: Third-party estimates, Google Ads volumes and SEO metrics are distinct measurements. Missing country/keyword rows cannot be treated as zero.

### 4. Issues / findings
- KWS Trends page can be inspected but its interactive form cannot be submitted from the available web view; no CSV or country-matrix values obtained.
- Ahrefs structured keyword request is blocked by the connected plan entitlement.
- Google Ads Keyword Planner remains a viable route, but billing/account setup is required; no connected Google Ads account data was available.
- No new exact keyword-volume values were obtained. No claims made about English query demand in Brazil, Russia or China.

### 5. Changes made
- Appended Section 15 to docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md with the access attempts, exact outcome, source URLs and next measurement route.
- Appended this dated work session to docs/PERCENTAGE-CALCULATOR-PROJECT-RECORD.md.
- No application code, UI, metadata, design or deployment changes.

### 6. Mistakes and recovery
- No code or data-entry mistake. The Ahrefs query was attempted as an alternative, but it was blocked before returning data; it is recorded as blocked rather than treated as an empty dataset.
- No unsupported volume estimates were added.

### 7. Verification
- [x] Re-read current project record and research brief before work.
- [x] Re-opened and inspected the public KWS bulk-checker description.
- [x] Confirmed Google's official Keyword Planner location/language workflow and billing prerequisite.
- [x] Attempted Ahrefs structured lookup; recorded explicit entitlement error.
- [ ] KWS interactive country lookups and CSV exports — pending.
- [ ] Ahrefs country matrix — blocked by plan entitlement.
- [ ] Google Ads Keyword Planner country matrix — pending account access.
- [ ] Calculator browser QA and live deployment verification — still pending from earlier sessions.

### 8. Commit and deployment
- Research document update: pending commit verification.
- Project record update: pending commit verification.
- Branch: main.
- No application deployment; production status remains unverified.

### 9. Work checklist
- [x] Inspect baseline project records.
- [x] Try a second structured keyword-data source.
- [x] Record the source access limitation and official alternative.
- [ ] Obtain the five-keyword × country CSV matrix through a real interactive browser or Google Ads Keyword Planner.
- [ ] Review exact organic SERPs and Search Console before making SEO implementation changes.
- [ ] Keep English-only product scope and preserve approved design.

### 10. Next session handover
- Best next task: Run the five exact phrases in KWS Trends' interactive checker using a real browser and export CSVs, starting with US, UK, Canada and Australia.
- If browser interaction remains unavailable, the owner will need to grant an interactive browser/account route; do not invent results or request manual CSV work unless that is the only viable route.
- First inspect these two files: docs/PERCENTAGE-CALCULATOR-GLOBAL-ENGLISH-RESEARCH.md and docs/PERCENTAGE-CALCULATOR-PROJECT-RECORD.md.


## Work session — 2026-11-16 (Alternative bulk keyword sources)

### 1. Owner request and scope
- Request: Continue obtaining a consistent five-keyword English search-volume matrix by country.
- Scope: Research alternative public bulk keyword tools, document stated coverage/access/cost, and update durable project records.
- Constraints: English-only audience/content; no translations; no calculator code/design changes; preserve homepage, Hero, Header, logo and unrelated tools.

### 2. Research
- KWS Trends bulk checker advertises up to 200 keywords, country selection, English-language Google Ads Keyword Planner metrics and CSV export. Source: https://www.kwstrends.com/google-ads-keyword-tool (checked 2026-11-16).
- ToolerBox advertises up to 100 keywords, country selection, monthly volume, CPC, competition and CSV; free sign-in required beyond first three keywords. Visible supported countries: US, UK, Canada, Australia, India, New Zealand, South Africa and Global. Source: https://toolerbox.com/bulk-keyword-metrics/ (checked 2026-11-16).
- Apify actor advertises 45 countries, language override, 24 months of history and exports; stated price USD $2 per 1,000 keyword results. Source: https://apify.com/ws-admin/keyword-search-volume (checked 2026-11-16).
- Google Keyword Planner official help says billing information is required for basic access. Source: https://support.google.com/google-ads/answer/7337243?hl=en-IN (checked 2026-11-16).

### 3. Baseline and risks
- Repository: barsulkhan/InfoJano, branch main.
- Starting project-record blob SHA: a4e006941095782e1675710766045504b601e2cc.
- Starting research-document blob SHA: 486a469f1827ae96a45ff1972018bcff59d1e44b.
- No application code edited.
- Tool descriptions do not prove returned keyword volumes; sign-in, language filters and actual country options must be tested.

### 4. Issues / findings
- No interactive browser tool is available in this session to submit KWS Trends or ToolerBox forms.
- ToolerBox's visible free tier gates more than three keyword checks behind sign-in.
- Apify is paid; no paid run was authorized or performed.
- No new numeric search-volume results were retrieved. The five-keyword × country matrix remains incomplete.

### 5. Changes made
- Appended Section 16 to the research report with alternative providers, documented features, coverage, price and execution order.
- Appended this dated session to the project record.
- No calculator source, page UI, metadata, design, homepage or deployment changed.

### 6. Mistakes and recovery
- No implementation mistakes. Tool capability claims are distinguished from actual query results.
- No payment or sign-up was performed; paid Apify remains unused.

### 7. Verification
- [x] Read both current project documents before updating.
- [x] Reviewed public search results for KWS Trends, ToolerBox, Apify and official Google Keyword Planner help.
- [x] Recorded ToolerBox's visible country support and sign-in gate.
- [x] Recorded Apify advertised coverage and price; no purchase made.
- [ ] Run five exact phrases through ToolerBox.
- [ ] Run KWS bulk checker and save country CSVs.
- [ ] Verify language filter and coverage for DE, FR, NL, BR, RU and CN.
- [ ] Calculator browser QA and production deployment verification remain pending.

### 8. Commit and deployment
- Research update: pending commit verification.
- Project-record update: pending commit verification.
- Branch: main.
- No application deployment; live status remains unverified.

### 9. Work checklist
- [x] Identify alternative sources with documented capabilities.
- [x] Record access and cost limitations.
- [ ] Obtain actual query rows and CSV exports.
- [ ] Complete same-source country matrix for supported markets.
- [ ] Reassess SEO priorities only after exact phrase and country data exists.

### 10. Next session handover
- Best next task: Test ToolerBox free bulk checker for the five exact English phrases, starting with US, UK, Canada and Australia; confirm whether the sign-in gate can be used without payment.
- If interactive browser is still unavailable, do not claim data collection. Keep paid Apify unused unless the owner explicitly approves spending.
- First inspect research report Section 16 and this project record.
