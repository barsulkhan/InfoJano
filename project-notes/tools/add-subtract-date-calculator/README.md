# Add or Subtract Date Calculator — Work Tracker

Last updated: 2026-11-15
Tool page: https://infojano.com/add-subtract-date-calculator.html
Overall status: In progress — existing SEO page now contains a functional date-offset calculator; source syntax and arithmetic checks passed; GitHub Pages deployment succeeded for the implementation and tracker commits; browser visual/interaction QA pending.

## Research dossier
- [RESEARCH.md](RESEARCH.md) — free US-first qualitative SERP review, competitor comparisons, market/language screen, limitations and REVISE/GO decision.
- Metrics: volume, KD, CPC, trend and traffic potential remain N/A. No paid SEO tools used.

## User-approved scope and constraints
- Keep the existing URL/canonical; do not create another date calculator URL.
- Preserve the existing hero banner and overall landing-page hero treatment.
- Date math is Gregorian calendar arithmetic; year/month offset clamps to last valid target-month day; weeks/days use exact UTC day increments.
- No automatic US federal holiday calendar, business-day offset, legal deadline guarantee or timezone/time-of-day support.
- Save all progress in GitHub.

## Feature cards

### Completed
- [x] [CARD-001] Functional date-offset calculator embedded in existing landing page — start date, add/subtract direction, years/months/weeks/days, quick day presets, weekday/ISO result, copy, reset and validation. Commit `c9d8bc99a9273f4dbc7c33b805a7b0de674ac424` plus wiring commit `f6265401f3317f11af61c0013c6f4f1b6abe9518`.
- [x] [CARD-002] Source syntax and date arithmetic checks — Node syntax check and eight arithmetic/month-end cases plus invalid-date rejection passed; see QA log.

### In progress
- [ ] [CARD-003] Browser QA and deployment verification — manual visual, keyboard, clipboard, mobile and desktop checks not yet run.

### Backlog
- [ ] [CARD-004] Review US locale input/output examples and add more date-offset FAQ examples after browser QA.

## Bugs and follow-ups
- 2026-11-15 — Original CTA linked to date-difference calculator without date-offset mode; changed to anchor to the new functional calculator on this page.

## QA and release checklist
- [x] Source JavaScript syntax check (Node)
- [x] Isolated arithmetic checks for month ends, leap year, positive/negative days and invalid date
- [x] CTA target and calculator IDs source review
- [ ] Browser functional QA
- [ ] Mobile/desktop visual QA
- [ ] Keyboard/focus and screen-reader QA
- [x] GitHub Pages workflow #2642 SUCCESS for commit `6810fdf2dd02d6bdef535b6def92673d2555d1b9`; live URL direct fetch was inaccessible in this session, so browser rendering not independently confirmed

## Detailed work log
### 2026-11-15 — Correct the date-offset page product mismatch
- Requested: batch remaining InfoJano work autonomously.
- Inspected: current tracking/research standards, handoff, index, master US SEO dossier and date landing page/calculator sources.
- Research: free SERP results show direct competitors with add/subtract date tools; no reliable free metrics found.
- Changed: added browser-local date-offset calculator to existing page, replaced misleading CTA with in-page anchor, added quick presets, copy, reset, weekday/ISO output, input validation and month-end clamp explanation.
- Tests: Node syntax PASS; arithmetic cases PASS; impossible date rejected. Browser QA NOT RUN.
- Commits: `c9d8bc99a9273f4dbc7c33b805a7b0de674ac424`, `f6265401f3317f11af61c0013c6f4f1b6abe9518`.
- Protected areas: existing hero banner preserved; no new URL created.
- Still pending: browser visual/functional QA and Pages deployment verification.
- Next: monitor CI, check live page and proceed with Work Hours/Elapsed Time QA.

## Decisions and handoff
- 2026-11-15 — Use one existing add/subtract-date URL; don't create a duplicate. Business-day calculation remains separate and uses manually entered holiday exclusions.


### 2026-11-15 — Deployment pipeline verification
- Pages workflow #2642 completed SUCCESS for commit `6810fdf2dd02d6bdef535b6def92673d2555d1b9`, including the calculator implementation and tracker docs.
- Direct live-page retrieval through the available browser fetch failed; do not claim live browser rendering or interaction verified. Browser QA remains pending.
- APK workflow #685 for the calculator page change passed repository validation and was still building APKs at last check. The previous release tag v1.1.1 was independently verified to contain 23 APK assets.
