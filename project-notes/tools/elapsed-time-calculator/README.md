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
- [ ] [CARD-009] Mobile and desktop visual browser QA — implementation is merged; no interactive browser session is available in this session. Source inspection only; live visual/interaction QA remains pending. Next: use a real interactive browser on mobile and desktop, verify layouts and all calculator modes, record actual findings and screenshots/evidence.
- [ ] [CARD-011] Date-duration results missing from recent history — source inspection of `time-calculator.html` shows `calculateDateDuration()` renders a result but does not call `recordTimeCalculation('Date + Time Duration')`; therefore date-duration results do not enter the recent-history list or reveal the copy/share actions through the shared recording hook. Next: implement the hook after successful date-duration output and run regression checks for all three modes.

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
- [x] GitHub Pages deployment: run 43684495751 — success. https://github.com/barsulkhan/InfoJano/actions/runs/43684495751
- [ ] Mobile browser QA — pending.
- [ ] Desktop browser QA — pending.
- [ ] Accessibility review — not yet recorded.
- [ ] Source review follow-up for CARD-011 — pending implementation and regression verification.

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
