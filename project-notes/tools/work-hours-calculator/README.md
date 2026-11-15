# Work Hours & Shift Calculator — Work Tracker

Last updated: 2026-11-15
Tool page: https://infojano.com/work-hours-calculator.html
Overall status: In progress — standalone page committed; initial source syntax/structure checks and focused source/logic audit passed; WH-001–WH-010 runtime/browser QA and current deployment/live verification pending.

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
- [x] [CARD-002] Multi-shift calculator MVP — standalone page committed; includes dated shift rows, unpaid breaks, overnight rollover, gross/net/decimal hours, daily and Monday–Sunday weekly summaries, configurable daily threshold, optional simple earnings estimate, CSV and opt-in local save. Source syntax and focused source/logic audit passed; runtime/browser QA pending.

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


### 2026-11-15 — GitHub Pages workflow verification
- Latest Pages workflow run #2550 for commit `f44e679ad5e8e0746061ea98c81b017605229485` completed with conclusion `success`; this commit includes the work-hours page, homepage directory link and sitemap update.
- Direct live URL/rendered-page verification remains pending because the available live-page inspection returned inaccessible. Functional and browser QA remain NOT RUN.

### 2026-11-15 — Work Hours QA resumed: source/logic audit
- Re-fetched the current handoff, tracking/research standards, index and Work Hours README/RESEARCH/QA log before continuing.
- Inspected the current page source for shift parsing, overnight rollover, break validation, daily/weekly aggregation, daily threshold estimate, simple earnings, CSV escaping/download and opt-in localStorage/clear/reset paths.
- Source/logic review PASS for WH-001/002 arithmetic paths and for the relevant aggregation, validation, CSV and storage implementation. This is not browser runtime evidence; WH-001–WH-010 remain NOT RUN in a real browser.
- QA evidence: [QA-TEST-LOG.md](QA-TEST-LOG.md), latest entry 2026-11-15. No application code changed; protected hero/banner areas preserved.
- Next: execute WH-001–WH-009 in a real browser, then responsive/desktop/accessibility and release verification. No interactive browser/computer-control tool is currently connected.

### 2026-11-15 — Expanded US time/pay SERP and adjacent intent research
- User asked to research as many related opportunities together as practical.
- Re-fetched the Work Hours tracker/research and inspected current work-hours-calculator.html source alongside elapsed/date/business-day pages.
- Expanded competitor review: Toggl, QuickBooks, ClockSlate, Ordio, HourPeak, TimeMath.tools and HiveDesk. Their feature expectations include weekly/biweekly periods, 12/24-hour entry, breaks, multiple punch pairs, daily/weekly totals, decimal hours, exports/print and optional pay/overtime.
- Current InfoJano page has multi-shift rows, unpaid breaks, overnight, daily/weekly totals, decimal output, configurable daily threshold, simple earnings estimate, CSV and opt-in local save. It does not currently establish a biweekly selector, independent weekly overtime subtotals, multi-punch pairs/day, print/PDF or maintained state overtime rules.
- Decision unchanged: GO for one Work Hours page; NO-GO for separate Time Card/Timesheet URLs. New candidates held for metrics: Business Hours, Decimal Hours Converter, Military Time Converter; Clock-Out should first be evaluated as a mode. Overtime legal engine remains out of scope.
- US DOL primary guidance was reviewed: covered nonexempt overtime is generally 1.5× after 40 hours in a fixed workweek; exemptions and state rules apply, and hours cannot be averaged across two workweeks. Do not market the current daily threshold or simple earnings estimate as legal overtime/payroll calculation.
- Exact US search volume/trend/KD/CPC/traffic potential remain N/A; no usable keyword-provider or GSC export.
- Detailed evidence: project-notes/tools/work-hours-calculator/RESEARCH.md §5 and elapsed-time research §18. Research commit db09fcf5a14ac221ae1d55c2d1a5617d444f028f.
- No application code, URL, metadata, sitemap or hero changed. Functional/browser QA and deployment verification remain pending.
- Next: finish WH-001–WH-009 QA, then decide whether a Business Hours or conversion micro-tool merits quantitative research/build.