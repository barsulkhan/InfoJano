# Work Hours & Shift Calculator — Work Tracker

Last updated: 2026-11-15
Tool page: https://infojano.com/work-hours-calculator.html
Overall status: In progress — standalone page committed; source syntax/structure checks passed; browser QA and deployment verification pending.

## Research dossier
- [RESEARCH.md](RESEARCH.md) — country/language screening, qualitative keyword clusters, live competitor review, metrics limitations and GO decision.
- Search volume/KD/CPC/trend are N/A because connected Ahrefs keyword metrics were unavailable. SEO demand and revenue are not validated.

## User-approved scope and constraints
- One distinct English Work Hours & Shift Calculator page; no thin country clones.
- Reuse the existing homepage hero banner's design/artwork on the new page. Do not modify the original homepage hero.
- Existing Elapsed Time Calculator hero and ID Card Print Studio hero remain protected.
- SEO page max-width 1360px with 8px side gutters.
- Browser-side calculations; local saving is opt-in and clearable.
- No legal/payroll advice, statutory overtime calculation, tax/deduction computation or employer-specific rule claims.

## Feature cards
### Completed
- [x] [CARD-001] Research and scope — competitor review, country/language screen, metrics limitations and GO decision saved in RESEARCH.md.

### In progress
- [x] [CARD-002] Multi-shift calculator MVP — standalone page committed; includes dated shift rows, unpaid breaks, overnight rollover, gross/net/decimal hours, daily and Monday–Sunday weekly summaries, configurable daily threshold, optional simple earnings estimate, CSV and opt-in local save. Source syntax check passed; browser/functional QA pending.

### Backlog
- [ ] [CARD-003] SEO metrics validation — collect country-level volume, trend, KD, CPC/currency and traffic potential from Google Keyword Planner/Search Console or authorized provider.
- [ ] [CARD-004] Browser QA — desktop/mobile, keyboard/accessibility, arithmetic, week boundary, CSV and localStorage.
- [ ] [CARD-005] Release verification — Pages workflow and live canonical/indexability check.

### Blocked
- None currently recorded.

## Bugs and follow-ups
- 2026-11-15 — Connected Ahrefs entitlement did not provide keyword metrics; values recorded as N/A, not zero. Product MVP may proceed under documented GO; SEO prioritization remains provisional.

## QA and release checklist
- [x] Source/syntax check — inline JavaScript compiled successfully; required canonical, hero artwork, width/gutter, CSV, localStorage and WebApplication schema source checks passed (2026-11-15).
- [ ] Functional tests
- [ ] Mobile browser QA
- [ ] Desktop browser QA
- [ ] Accessibility
- [ ] CSV spreadsheet compatibility
- [ ] GitHub Pages deployment
- [ ] Live canonical/indexability verification

## Detailed work log
### 2026-11-15 — Research and implementation kickoff
- Requested: prepare SEO page(s), explicitly reuse the main homepage hero banner.
- Inspected: latest homepage hero markup/CSS and artwork references; existing time calculator; sitemap; research/tracking standards and current elapsed-time research.
- Changed: created tracker and research dossier; created work-hours-calculator.html; linked it from the homepage tool directory and added it to sitemap.xml.
- Research: reviewed Toolsfy, Hopi, Double Crewed and Google Search Central spam guidance. Keyword metrics unavailable and marked N/A.
- Tests: inline JavaScript syntax PASS; source structure checks PASS. Functional arithmetic, CSV download, localStorage and browser QA NOT RUN.
- Commits: research `cd4361cbab2bb1e3f872b46bf7f1550bb9591d51`; tracker `ae2c79e6670bcb783e6c5581582916c4503d40b1`; QA plan `2ed3b69710597a92629b20ccf67ce1d5167e327b`; page `1bdebbdd47b66da75cc902a25dda5499a79ffd14`; homepage link `e20e46926e8f3edc12a90811086f0c466f4a9a02`; sitemap `7dbd0ebe0933ffb555883142f12f7159a819f72f`; tool index `25ec77957414748b9f4a1c19d36ccf39184dc338`. CI/deployment not checked.
- Issues: avoided a generic duplicate elapsed-time page.
- Pending: functional/browser QA, deployment verification and keyword metrics.
- Next: run the WH-001 basic shift arithmetic test, then continue one test at a time; verify live deployment separately.
- Protected areas preserved: homepage hero, Elapsed Time Calculator hero, ID Card Print Studio hero.

## Decisions and handoff
- 2026-11-15 — GO for one English multi-shift timesheet MVP; no country clones until local demand and localization are validated.
