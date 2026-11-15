# Elapsed Time Calculator — Work Tracker

Last updated: 2026-11-15
Tool page: https://infojano.com/time-calculator.html
Overall status: In progress — feature work merged; mobile/desktop visual browser QA pending

## User-approved scope and constraints
- Existing Elapsed Time Calculator hero banner dimensions, layout, styling, artwork and copy must remain unchanged unless the user explicitly approves a hero change.
- Homepage Hero Banner and ID Card Print Studio Hero must not be changed without separate explicit permission.
- Future SEO landing pages for this tool must follow max-width 1360px and 8px side gutters.
- Save all durable project progress in this repository.

## Feature cards

### Completed
- [x] [CARD-001] Shared header alignment and live local clock — PR #219; merge 84bd768b17a5ba13c55f5cfece4a593cf6635f9c. Header alignment standardized on reference-hero pages; hero clock uses device-local time and updates seconds/analog hands every second.
- [x] [CARD-002] Core elapsed-time controls and precision — PR #220; merge a4b5017c1fd27061ca50aae63330e67e0af235bf. Swap Start/End, Now controls for both fields, quick examples including overnight, seconds-aware calculation, total seconds and decimal hours.
- [x] [CARD-003] Break deduction — PR #221; merge 1887be9cf860519f5c4906dc101767e8aa846037. Optional whole-minute break, validation, gross/break/net output, overnight support.
- [x] [CARD-004] Add/subtract duration mode — PR #222; merge ff67d2198a9fe69eeeea4ea4a69a8c1546a73741. Add/subtract hours/minutes/seconds from a starting clock time and show day rollover.
- [x] [CARD-005] Date + time duration mode — PR #224; merge 46ecea5ee2eb113e316f81bcf681737ee2119330. Local datetime inputs; days and remaining time; total hours/minutes/seconds.
- [x] [CARD-006] Copy/share result and recent history — PR #225; merge 4bb2de85be0a0577fb2b4822fc299e96f05e0425. Copy and share results for all modes; localStorage recent history capped at five; clear history.
- [x] [CARD-007] APK manifest relative start_url/scope validation — PR #226; merged. Workflow now resolves relative manifest start_url and scope against manifest URL before path validation.
- [x] [CARD-008] APK manifest relative icon path validation — PR #227; merge 4ae9624fb8978b832d58e2b93f2e41091227dc80. Workflow resolves relative icon src against manifest URL before checking repository asset.

### In progress
- [ ] [CARD-009] Mobile and desktop visual browser QA — implementation is merged; no interactive browser session is available in this session. Source inspection only; live visual/interaction QA remains pending. User supplied mobile screenshot QA: ET-001–ET-009 passed (ET-008 confirms Android share-sheet launch; final delivery not tested). Next: continue manual QA from ET-010, then complete remaining mobile/desktop visual and interaction QA when browser access is available.
- [x] [CARD-011] Date-duration results missing from recent history — fixed and merged via PR #229 (squash merge `69ad8a8865cedfc6df952fa87dae8598f904ad27`). `time-calculator.html` now calls `recordTimeCalculation('Date + Time Duration')` after valid output, enabling recent history and shared Copy/Share action visibility. Current default-branch file re-fetched and hook presence confirmed. Runtime/browser regression and post-merge deployment verification remain separate pending checks.

### Backlog
- [ ] [CARD-010] Review related SEO landing page opportunities — only after keyword and page intent are confirmed; follow 1360px max width and 8px gutters.

### Blocked
- None currently recorded.

## Bugs and follow-ups
- 2026-11-15 — APK workflow validator incorrectly interpreted relative manifest start_url/scope; corrected in PR #226.
- 2026-11-15 — APK workflow validator incorrectly interpreted relative manifest icon src; corrected in PR #227.
- Browser visual QA remains open, not a confirmed bug.

## QA and release checklist
- [x] Source/syntax checks for executable inline JavaScript blocks (reported in PR #224/#225 work).
- [x] Calculation logic checks: 09:00–17:30 = 8h30m; 22:00–06:00 = 8h; 09:15–12:00 = 2h45m; 09:00:30–09:01:45 = 1m15s.
- [x] Date duration checks: 25h30m15s; 2-hour overnight interval; equal endpoints rejected.
- [x] APK workflow: run 43684495904 — success. https://github.com/barsulkhan/InfoJano/actions/runs/43684495904
- [x] GitHub Pages deployment before CARD-011: run 43684495751 — success. https://github.com/barsulkhan/InfoJano/actions/runs/43684495751
- [x] GitHub Pages deployment after PR #229 — run 43685533520 succeeded for the latest main commit `3e1d25497dd893b71275fb547131c4bf52a32b47` (includes PR #229 and tracker updates). https://github.com/barsulkhan/InfoJano/actions/runs/43685533520
- [ ] Mobile browser QA — pending.
- [ ] Desktop browser QA — pending.
- [ ] Accessibility review — not yet recorded.
- [x] Source review follow-up for CARD-011 — merged in PR #229; runtime/browser regression still pending.

## Detailed work log

### 2026-11-15 — Shared header alignment and live hero clock (PR #219)
- Requested: standardize header alignment and show live device-local clock in existing hero.
- Inspected/changed: shared header behavior and site-header.js.
- Result: brand/tagline left; All Tools, language selector and Home right; 1360px max width and 8px gutters; local clock updates every second.
- Validation: merge recorded; no browser visual QA evidence recorded here.
- Merge: 84bd768b17a5ba13c55f5cfece4a593cf6635f9c.
- Protected areas: homepage Hero Banner and ID Card Print Studio Hero not changed. Existing calculator hero design intended to remain intact.

### 2026-11-15 — Core calculator enhancements (PR #220)
- Requested: swap times, Now controls, examples, seconds precision and decimal hours.
- Changed: time-calculator.html and project progress notes.
- Checks: 09:00–17:30 = 8h30m; 22:00–06:00 = 8h; 09:15–12:00 = 2h45m; 09:00:30–09:01:45 = 1m15s. Source review for handlers.
- Result: PR #220 merged; deployment workflow previously recorded successful in legacy notes.
- Pending: mobile/desktop visual QA.
- Protected areas: hero markup/artwork/dimensions preserved.

### 2026-11-15 — Break deduction (PR #221)
- Requested: optional break deduction.
- Changed: optional whole-minute break input; rejects negative/non-integer values and break longer than elapsed duration; displays gross, break and net totals.
- Checks: source-level validation and overnight handling reviewed.
- Result: merged via PR #221, commit 1887be9cf860519f5c4906dc101767e8aa846037.
- Pending: browser visual QA.
- Protected areas: hero markup/styles not edited.

### 2026-11-15 — Add/subtract time mode (PR #222)
- Requested: calculate a new clock time by adding/subtracting a duration.
- Changed: mode switch; hours/minutes/seconds inputs; minute/second range validation; day rollover output.
- Checks: source-level mode, dispatch, rollover and existing break validation reviewed.
- Result: merged via PR #222, commit ff67d2198a9fe69eeeea4ea4a69a8c1546a73741.
- Pending: browser visual QA.
- Protected areas: hero markup/artwork retained.

### 2026-11-15 — Date + time duration mode (PR #224)
- Requested: duration between two complete date-time values.
- Changed: local datetime inputs and detailed day/time/total-unit outputs.
- Checks: inline JS syntax; 25h30m15s; 2-hour overnight; equal endpoints rejected.
- Result: merged via PR #224, commit 46ecea5ee2eb113e316f81bcf681737ee2119330. Pages run 43678793677 succeeded (legacy note).
- Pending: browser visual QA.
- Protected areas: hero markup/artwork unchanged.

### 2026-11-15 — Copy/share and recent calculation history (PR #225)
- Requested: copy/share results and keep recent calculations.
- Changed: Copy Result, Share Result, browser localStorage history capped at five and clear-history action; clipboard fallback and Web Share fallback.
- Checks: executable inline JS syntax; hooks for all three modes; clipboard/share handlers; five-item cap.
- Result: merged via PR #225, commit 4bb2de85be0a0577fb2b4822fc299e96f05e0425. Pages run 43684296478 succeeded (legacy note).
- Pending: browser visual QA.
- Protected areas: hero markup/artwork retained.

### 2026-11-15 — APK workflow manifest path fixes (PR #226 and #227)
- Requested: resolve APK workflow failures after feature merge.
- Inspected: APK workflow validator and Countdown Studio manifest relative paths.
- Issue 1: validator assumed absolute start_url/scope; actual relative values were valid. PR #226 changed validation to resolve paths against manifest URL; manifest was not modified.
- Issue 2: validator mishandled relative icon src ../infojano-mark.svg. PR #227 resolves icon URL against manifest URL before checking repo path; manifest and icon asset were not changed.
- Result: PR #227 merged, commit 4ae9624fb8978b832d58e2b93f2e41091227dc80.
- APK workflow: run 43684495904 succeeded.
- Pages deployment: run 43684495751 succeeded.
- Pending: mobile/desktop visual browser QA.
- Protected areas: homepage Hero Banner and ID Card Print Studio Hero were not changed.

### 2026-11-15 — Tracking process established
- Requested: create a reusable per-tool work tracking process with dated detailed logs and a one-word shortcut.
- Changed: added TOOL-WORK-TRACKING-STANDARD.md and TOOL-INDEX.md; created this per-tool tracker.
- Shortcut: “ট্র্যাক” shows latest status; “ট্র্যাক <tool-name>” shows a named tool's status. Tracking is automatic for every tool task; user need not repeat the instruction.
- Pending: visual browser QA remains the next actionable item.

## Decisions and handoff
- Continue from CARD-009; do not repeat merged feature implementation.
- First next action is mobile and desktop visual QA when a real interactive browser is available.
- If browser QA finds defects, create a new card and dated log entry before fixing.
- Never change the protected hero areas without explicit permission.


### 2026-11-15 — Resume handoff; CARD-009 source inspection
- Requested: resume InfoJano from NEW-CHAT-HANDOFF.md and follow the mandatory per-tool tracking standard without repeating merged feature work.
- Inspected: `project-notes/NEW-CHAT-HANDOFF.md`, `project-notes/TOOL-WORK-TRACKING-STANDARD.md`, `project-notes/TOOL-INDEX.md`, this tracker, legacy `project-notes/elapsed-time-calculator-progress.md`, and current `time-calculator.html` from the repository default branch.
- Changed: tracker only; added CARD-011 after source inspection identified that `calculateDateDuration()` does not call the shared `recordTimeCalculation()` hook. This means date-duration results are not saved to recent history and the shared result-action visibility hook is not triggered for that mode. This is a source-level finding, not browser QA.
- Tests and results: source inspection of the date-duration handler and shared history/copy-share hooks — finding confirmed by code path review; automated test not run. Mobile/desktop browser QA — not run; no interactive browser tool is available in this session.
- PR/commit/workflow: none created in this session. Existing merged PRs and successful workflow runs remain as previously documented; not re-verified here.
- Issues and resolution: CARD-011 recorded as a new in-progress follow-up; no code change made yet.
- Still pending: implement CARD-011 with regression coverage; perform real mobile and desktop browser QA for CARD-009; accessibility review; later assess CARD-010 only after keyword/page intent confirmation.
- Next step: inspect current GitHub branch/PR/test setup, fix CARD-011 on a feature branch if safe, run available source-level checks, then return to CARD-009 when an interactive browser is available.
- Protected areas preserved: no files outside project notes were modified; Calculator Hero, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.


### 2026-11-15 — CARD-011 fix submitted (PR #228)
- Requested: continue from CARD-009, avoid redoing merged work, and maintain repository tracking. During source inspection, the date-duration path was found to skip the common result-recording hook.
- Inspected: current default-branch `time-calculator.html`; focused on `calculateDateDuration()`, `recordTimeCalculation()`, `renderTimeHistory()`, and shared result-action visibility.
- Changed: created branch `fix/date-duration-history-actions`; added `recordTimeCalculation('Date + Time Duration')` immediately after successful date-duration result rendering. Only `time-calculator.html` changed on the feature branch.
- Tests and results: source-level placement check passed (expected output block found and hook insertion confirmed). No JavaScript syntax/test suite execution and no interactive runtime/browser test in this session. PR workflow lookup for commit `3253d2690ece6082e970e8aa1eadf1cd74d655c4` returned no workflow runs at the time checked; CI status therefore not verified.
- PR/commit/workflow: PR #228 https://github.com/barsulkhan/InfoJano/pull/228; branch commit `3253d2690ece6082e970e8aa1eadf1cd74d655c4`. Latest metadata: open, unmerged, mergeable=false. GitHub check-runs endpoint returned 0 checks; commit status is pending with 0 statuses. CI is not verified; do not merge yet.
- Issues and resolution: missing date-duration history/copy-share hook addressed in proposed change; awaiting review/checks and runtime validation.
- Still pending: PR #228 checks/review/merge; regression tests for all three modes; CARD-009 actual mobile/desktop browser QA; accessibility review; CARD-010 SEO intent research.
- Next step: inspect why PR #228 is non-mergeable and why no checks are registered; resolve any real conflict or CI trigger issue, then re-check. After merge verify Pages deployment separately. Then perform browser QA when an interactive browser is available.
- Protected areas preserved: only `time-calculator.html` changed on the feature branch; calculator hero, homepage Hero Banner, and ID Card Print Studio Hero were not edited.


### 2026-11-15 — PR #228 status refresh
- Requested: verify the newly opened CARD-011 pull request and its checks before treating the fix as complete.
- Inspected: PR #228 metadata, commit check-runs endpoint, and commit combined-status endpoint.
- Changed: tracker only; recorded refreshed CI/merge state.
- Tests and results: check-runs returned 0; combined commit status is `pending` with 0 statuses. PR state is open/unmerged and API metadata reports `mergeable=false`. No CI success or merge is claimed.
- PR/commit/workflow: PR #228 https://github.com/barsulkhan/InfoJano/pull/228; commit `3253d2690ece6082e970e8aa1eadf1cd74d655c4`; no associated workflow run surfaced.
- Issues and resolution: mergeability and absent CI status remain unresolved; no speculative merge or conflict fix attempted.
- Still pending: determine whether a real merge conflict exists or checks are not configured/triggered; run required regression validation; merge only after safe checks. CARD-009 interactive visual QA also pending.
- Next step: inspect PR diff/base comparison and repository workflow configuration to determine mergeability/CI cause.
- Protected areas preserved: no source or hero/banner changes made in this status-check step.


### 2026-11-15 — CARD-011 merged; deployment verification pending
- Requested: continue the calculator work, preserve all prior merged features and maintain detailed GitHub tracking.
- Inspected: PR #229 diff (one-line change in `time-calculator.html`), refreshed PR metadata, branch comparison, commit status, Actions run list, and current default-branch `time-calculator.html`.
- Changed: PR #229 merged by squash; current default-branch source contains `recordTimeCalculation('Date + Time Duration')` immediately after valid date-duration output. PR #228 was closed unmerged because its branch had fallen three commits behind main after tracker updates; replacement PR #229 was created from current main and had no behind commits.
- Tests and results: PR diff scope verified as one insertion in `time-calculator.html`; branch compare before merge was ahead by 1 / behind by 0; post-merge default-branch fetch confirmed the hook is present. Runtime regression tests not run. GitHub Actions runs query for merge commit returned 0 runs; combined status pending with 0 statuses. Web reader could not access the live page. No Pages deployment success is claimed.
- PR/commit/workflow: PR #229 https://github.com/barsulkhan/InfoJano/pull/229 — merged; squash commit `69ad8a8865cedfc6df952fa87dae8598f904ad27`. Superseded PR #228 https://github.com/barsulkhan/InfoJano/pull/228 — closed unmerged. No associated workflow run found for merge commit.
- Issues and resolution: CARD-011 source defect fixed and merged. Deployment status remains unverified; browser QA remains unavailable.
- Still pending: verify GitHub Pages deployment for PR #229; run functional regression for date-duration history/copy/share plus all three calculator modes; perform real mobile and desktop visual QA (CARD-009); accessibility review; defer CARD-010 until keyword/page intent is confirmed.
- Next step: inspect Pages/deployment configuration and available deployments for the merge commit; if no automated deploy is triggered, verify through an authorized deployment mechanism or await site publication. Then complete runtime/browser QA in an interactive browser.
- Protected areas preserved: only one line in `time-calculator.html` changed; Calculator Hero dimensions/layout/styling/artwork/copy, homepage Hero Banner, and ID Card Print Studio Hero remain unchanged.


### 2026-11-15 — Resume CARD-009; deployment verified and source QA pass
- Requested: resume the last active InfoJano task rather than only summarize it; the active task is CARD-009 mobile/desktop visual browser QA, with post-PR #229 deployment verification as a prerequisite.
- Inspected: current default-branch `time-calculator.html`, tracker and latest GitHub Actions runs. Reviewed responsive breakpoints, all three mode containers and state toggles, labels/ARIA state, result live region, history controls, copy/share hooks, and calculation dispatch/validation paths.
- Changed: tracker and tool index only; marked post-PR #229 Pages deployment verified and added this source-QA log. No application source or protected hero was changed.
- Tests and results: GitHub Pages run #2478 / run ID `43685533520` completed with conclusion `success` for latest main commit `3e1d25497dd893b71275fb547131c4bf52a32b47`; this commit includes the CARD-011 merge. Static source QA confirmed viewport meta, responsive breakpoints at 480/760/850/1001px, mobile one-column workspace at <=850px, mobile hero/grid rules, reduced-motion support, three mode buttons with `aria-pressed`, labeled inputs, `role=status`/live result, recent-history list, copy/share handlers, and date-duration hook. No new definite source defect was established by this inspection. The live page URL could not be opened by the available web reader, and no interactive browser/Computer Use tool is available in this session; therefore no real visual screenshots, viewport rendering, touch/keyboard interaction, clipboard/share, or localStorage runtime test is claimed.
- PR/commit/workflow: PR #229 merged; deployment run https://github.com/barsulkhan/InfoJano/actions/runs/43685533520 succeeded. Superseded PR #228 remains closed unmerged.
- Issues and resolution: post-merge deployment uncertainty resolved by successful Pages run. CARD-009 remains open because real browser QA is not possible in this tool session.
- Still pending: use a real mobile viewport and desktop browser to verify hero/workspace sizing, horizontal overflow, control tap targets, all mode transitions, calculations, localStorage history, clear history, clipboard fallback and native share; record actual screenshots/findings. Accessibility review remains pending.
- Next step: perform live visual and interactive QA in an actual browser session; if defects are observed, create a new card before code changes. Keep protected hero areas unchanged.
- Protected areas preserved: only tracking documentation updated in this step; Calculator Hero, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.


### 2026-11-15 — User-performed mobile QA: basic difference and break deduction
- Requested: save each manually tested feature and its observed result in a durable test file in the repository.
- Inspected: user-supplied mobile screenshots for basic Time Difference, overnight/seconds precision, and Break Duration.
- Changed: created `project-notes/tools/elapsed-time-calculator/QA-TEST-LOG.md` and recorded ET-001 through ET-003 with exact inputs, expected values, observed values, pass status, evidence notes, and remaining test coverage.
- Tests and results:
  - ET-001 PASS — 09:00 AM to 05:30 PM, 0 break: 8h30m, 510 minutes, 30,600 seconds, 8.50 decimal hours; Recent Calculations entry visible.
  - ET-002 PASS — 11:05:00 PM to 12:05:25 PM, 0 break: 13h0m25s, 780.42 minutes, 46,825 seconds, 13.01 decimal hours; Recent Calculations entry visible. Earlier end clock time is interpreted as next day.
  - ET-003 PASS — 09:00 AM to 05:30 PM, 30-minute break: gross 8h30m, break 30m, net 8h, 480 minutes, 28,800 seconds, 8.00 decimal hours; Recent Calculations entry visible.
- PR/commit/workflow: QA log created in commit 47f1b6caecf6b79d8847de52fc07678036a898e2; no application source changed and no PR or deployment needed for this documentation-only update.
- Issues and resolution: no calculation mismatch observed in these three screenshot-backed test cases. Copy/share, refresh persistence, clear history, five-item cap, other modes, desktop and accessibility remain untested.
- Next step: ET-004 Add / Subtract Time mode; continue guided one-feature-at-a-time manual QA and append each result to QA-TEST-LOG.md.
- Protected areas preserved: no application source or hero/banner files changed.


### 2026-11-15 — User-performed mobile QA: Add Time and next-day rollover (ET-004)
- Requested: continue one manual test at a time and verify Add / Subtract Time mode.
- Inspected: user-supplied mobile screenshot of the live Elapsed Time Calculator.
- Test: Starting time 10:30:00 PM; operation Add; duration 2 hours, 45 minutes, 30 seconds.
- Expected: 01:15:30 AM on the following day.
- Observed: result panel displayed calculated time 01:15:30, starting time 22:30:00, duration 2h 45m 30s, operation Add, and day adjustment “Following day”. The new calculation was visible in Recent Calculations.
- Result: ET-004 PASS — screenshot-backed user-performed mobile test. QA evidence recorded in `QA-TEST-LOG.md`.
- Changed: QA log and this tracker only; no application source changed. No PR or deployment required for this documentation-only update.
- Still pending: ET-005 subtraction/previous-day rollover; Date + Time mode; Copy/Share actions; refresh persistence, Clear History and five-item cap; real mobile/desktop visual QA; accessibility review.
- Next step: ask user to run ET-005 only, then compare screenshot and record the result.
- Protected areas preserved: no application source or hero/banner files changed; Calculator Hero dimensions/layout/styling/artwork/copy, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.


### 2026-11-15 — User-performed mobile QA: Subtract Time and previous-day rollover (ET-005)
- Requested: verify subtraction with seconds and previous-day rollover, continuing one manual test at a time.
- Inspected: user-supplied mobile screenshot of the live Elapsed Time Calculator.
- Test: Starting time 01:15:30 AM; operation Subtract; duration 2 hours, 45 minutes, 30 seconds.
- Expected: 10:30:00 PM on the previous day.
- Observed: result panel displayed calculated time 22:30:00, starting time 01:15:30, duration 2h 45m 30s, operation Subtract, and day adjustment “Previous day”. The new Subtract entry appeared in Recent Calculations.
- Result: ET-005 PASS — screenshot-backed user-performed mobile test. QA evidence recorded in `QA-TEST-LOG.md`.
- Changed: QA log and this tracker only; no application source changed. No PR or deployment required for this documentation-only update.
- Still pending: ET-006 Date + Time mode; Copy/Share actions; refresh persistence, Clear History and five-item cap; real mobile/desktop visual QA; accessibility review.
- Next step: ask user to run ET-006 only, then compare screenshot and record the result.
- Protected areas preserved: no application source or hero/banner files changed; Calculator Hero dimensions/layout/styling/artwork/copy, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.


### 2026-11-15 — User-performed mobile QA: Date + Time duration across midnight (ET-006)
- Requested: verify a Date + Time interval spanning midnight and a calendar-date boundary.
- Inspected: user-supplied mobile screenshot of the live Elapsed Time Calculator.
- Test: Start 15 Nov 2026, 11:30 PM; End 16 Nov 2026, 01:45 AM.
- Expected: 0 days, 2 hours, 15 minutes, 0 seconds; 2.25 total hours; 135 total minutes; 8,100 total seconds.
- Observed: result panel displayed 0 days, 2 hours, 15 minutes, 0 seconds; total days 0; remaining time 2h 15m 0s; total hours 2.25; total minutes 135.00; total seconds 8,100. The Date + Time Duration item appeared in Recent Calculations.
- Result: ET-006 PASS — screenshot-backed user-performed mobile test. QA evidence recorded in `QA-TEST-LOG.md`.
- Changed: QA log and this tracker only; no application source changed. No PR or deployment required for this documentation-only update.
- Still pending: ET-007 Copy Result; Share Result; refresh persistence, Clear History and five-item cap; real mobile/desktop visual QA; accessibility review.
- Next step: ask user to test Copy Result for the current Date + Time output, then record the observed result.
- Protected areas preserved: no application source or hero/banner files changed; Calculator Hero dimensions/layout/styling/artwork/copy, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.


### 2026-11-15 — User-performed mobile QA: Copy Result (ET-007)
- Requested: test Copy Result for the Date + Time output and paste it into a notes app to verify the clipboard contents.
- Inspected: user-supplied screenshot of the pasted note.
- Expected: copied text contains the complete duration summary and all total-unit values.
- Observed: pasted content contains Total duration (0 days, 2 hours, 15 minutes, 0 seconds), Total days (0), Remaining time (2h 15m 0s), Total hours (2.25), Total minutes (135.00), and Total seconds (8,100).
- Result: ET-007 PASS — successful paste confirms the copy action and complete summary content. No separate success toast was captured; this is not required to establish that clipboard paste succeeded.
- Changed: QA log and this tracker only; no application source changed. No PR or deployment required for this documentation-only update.
- Still pending: ET-008 Share Result; refresh persistence, Clear History and five-item cap; real mobile/desktop visual QA; accessibility review.
- Next step: ask user to tap Share Result and report/show the resulting share sheet or fallback.
- Protected areas preserved: no application source or hero/banner files changed; Calculator Hero dimensions/layout/styling/artwork/copy, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.


### 2026-11-15 — User-performed mobile QA: Share Result / Android share sheet (ET-008)
- Requested: verify Share Result opens the native Android share UI and displays the Date + Time result payload.
- Inspected: user-supplied screenshot of Android's “Sharing text” sheet.
- Expected: native share sheet opens with the result summary available to share.
- Observed: Android “Sharing text” sheet opened. Preview begins with “InfoJano Time Calculator Result” and “Total duration: 0 days, 2 hours, 15 minutes, 0 sec…nds”. Suggested destinations include WhatsApp, Chrome and Quick Share. The OS preview truncates the visible text; no destination was selected, so end-to-end delivery and complete underlying payload were not verified.
- Result: ET-008 PASS for native share-sheet launch and visible payload preview only; recipient delivery remains untested. QA evidence recorded in `QA-TEST-LOG.md`.
- Changed: QA log and this tracker only; no application source changed. No PR or deployment required for this documentation-only update.
- Still pending: ET-009 Recent Calculations persistence after refresh; Clear History and five-item cap; real mobile/desktop visual QA; accessibility review.
- Next step: ask user to reload the calculator and check whether the recent Date + Time, Subtract and Add entries remain.
- Protected areas preserved: no application source or hero/banner files changed; Calculator Hero dimensions/layout/styling/artwork/copy, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.


### 2026-11-15 — User-performed mobile QA: Recent Calculations persistence after refresh (ET-009)
- Requested: reload the calculator and verify saved Date + Time, Subtract and Add entries remain.
- Inspected: user-supplied mobile screenshot after page refresh.
- Expected: previously saved records remain in Recent Calculations.
- Observed: Date + Time Duration, Subtract (Previous day), Add (Following day), and two earlier Time Difference records remain visible. The active calculator form/result reset to the initial empty Time Difference state while saved history remained.
- Result: ET-009 PASS — screenshot-backed user-performed mobile test. History persistence after reload is confirmed for the visible records.
- Changed: QA log and this tracker only; no application source changed. No PR or deployment required for this documentation-only update.
- Still pending: ET-010 Clear History; confirm five-record cap; real mobile/desktop visual QA; accessibility review.
- Next step: ask user to tap Clear history and capture the resulting state.
- Protected areas preserved: no application source or hero/banner files changed; Calculator Hero dimensions/layout/styling/artwork/copy, homepage Hero Banner, and ID Card Print Studio Hero remain untouched.
