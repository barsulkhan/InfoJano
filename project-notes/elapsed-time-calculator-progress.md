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
- [ ] Check GitHub Pages deployment after merge.

## Later roadmap
- Break deduction.
- Add/subtract time mode.
- Date + time duration mode.
- Copy/share result and recent calculation history.
- Related SEO pages only after keyword/page intent is confirmed; follow the 1360px / 8px layout standard.
