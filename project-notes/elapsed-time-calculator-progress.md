# InfoJano — Elapsed Time Calculator Project Notes

Last updated: 2026-11-15

## User-approved constraints
- Do not change the existing Elapsed Time Calculator hero banner's dimensions, layout, styling, artwork, or copy while implementing calculator features.
- Do not change the homepage Hero Banner or the ID Card Print Studio Hero without separate explicit permission.
- Any future SEO landing page for this tool must use the same page-width standard as the main page: maximum width 1360px and 8px desktop/mobile side gutters, matching the current main content container.
- Save project progress in this repository, not ChatGPT Memory.

## Completed
### PR #219 — merged
- Scoped the shared header alignment to pages that contain the reference hero.
- Brand/logo and tagline remain on the left; All Tools, language selector, and Home are grouped on the right.
- Header inner container uses the same 1360px maximum width and 8px side gutters as the tool hero.
- Existing Elapsed Time Calculator hero clock now shows the visitor's device-local time; analog hands and digital seconds update every second.
- The hero's visual design and dimensions were not changed.

Merge commit: 84bd768b17a5ba13c55f5cfece4a593cf6635f9c

## Completed — core calculator enhancements
Branch: feature/elapsed-time-calculator-core-upgrades

Planned first five features:
1. Swap Start / End time values.
2. Use Now controls for either input, using device-local time.
3. Quick examples, including a cross-midnight shift.
4. Seconds-aware calculation and total seconds output.
5. Decimal hours output.

Implemented all five in `time-calculator.html` and merged via PR #220. Changes are isolated to the calculator page and do not edit the hero artwork or dimensions.

Merge commit: a4b5017c1fd27061ca50aae63330e67e0af235bf

## Validation checklist before merge
- [x] Run calculation logic checks: 09:00–17:30 = 8h 30m; 22:00–06:00 = 8h; 09:15–12:00 = 2h 45m; 09:00:30–09:01:45 = 1m 15s.
- [x] Review source for swap, both Use Now controls, and quick-example handlers.
- [x] Confirm PR #220 changed only `time-calculator.html` and this project note; hero source remains unchanged.
- [x] Merge PR #220.
- [ ] Visual browser QA on mobile and desktop.
- [x] Check GitHub Pages deployment after merge — Pages build/deployment run 43677856456 completed successfully.
- [ ] Visual browser QA on mobile and desktop (requires an interactive browser session).

## Completed — break deduction (PR #221, merged)
- Added an optional whole-minute break input, defaulting to 0.
- Calculator validates non-negative whole minutes and rejects a break longer than the elapsed duration.
- Results distinguish gross elapsed time, break deducted, and net working time; total minutes, total seconds, and decimal hours now describe the net duration.
- Overnight calculations remain supported. Existing hero markup and styles were not edited.
- Source-level checks passed for input, validation, overnight handling, output fields, and hero markup. Browser visual QA remains pending.
- Merge commit: 1887be9cf860519f5c4906dc101767e8aa846037

## Completed — add / subtract time mode (PR #222, merged)
- Added a mode switch between elapsed-time difference and adding/subtracting a duration from a starting clock time.
- Add/subtract mode accepts hours, minutes, and seconds, validates whole non-negative values (minutes and seconds limited to 0–59), and reports the resulting clock time plus previous/same/following day adjustment.
- Existing difference mode, break deduction, overnight handling, and hero markup/artwork remain in place.
- Source-level checks passed for mode switching, duration inputs, calculation dispatch, day rollover, existing break validation, and hero markup/artwork. Browser visual QA remains pending.
- Merge commit: ff67d2198a9fe69eeeea4ea4a69a8c1546a73741

## In progress — date + time duration mode
Branch: `feature/elapsed-date-time-duration-main`
- Added a third mode for calculating duration between two full date-and-time values using local `datetime-local` inputs.
- Requires both values and rejects invalid or non-increasing ranges; displays days plus remaining hours/minutes/seconds, total hours, total minutes, and total seconds.
- Existing time-difference and add/subtract modes are retained; hero markup and artwork are unchanged.
- All executable inline JavaScript passed syntax checks. Date-duration arithmetic checks passed for 25h 30m 15s and a 2-hour overnight interval; equal endpoints are rejected. Browser visual QA remains pending.

## Later roadmap
- Related SEO pages only after keyword/page intent is confirmed; follow the 1360px / 8px layout standard.
