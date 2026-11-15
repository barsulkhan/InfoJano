# Work Hours & Shift Calculator — Work Tracker

Last updated: 2026-11-15
Tool page: https://infojano.com/work-hours-calculator.html
Overall status: In progress — research saved; implementation starting; QA/deployment not run.

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
- [ ] [CARD-002] Multi-shift calculator MVP — multiple dated shifts, unpaid breaks, overnight handling, gross/net/decimal hours, daily and Monday–Sunday weekly summaries, optional simple earnings estimate, CSV and opt-in local save. Implementation starting; QA not run.

### Backlog
- [ ] [CARD-003] SEO metrics validation — collect country-level volume, trend, KD, CPC/currency and traffic potential from Google Keyword Planner/Search Console or authorized provider.
- [ ] [CARD-004] Browser QA — desktop/mobile, keyboard/accessibility, arithmetic, week boundary, CSV and localStorage.
- [ ] [CARD-005] Release verification — Pages workflow and live canonical/indexability check.

### Blocked
- None currently recorded.

## Bugs and follow-ups
- 2026-11-15 — Connected Ahrefs entitlement did not provide keyword metrics; values recorded as N/A, not zero. Product MVP may proceed under documented GO; SEO prioritization remains provisional.

## QA and release checklist
- [ ] Source/syntax checks
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
- Changed: created tracker and research dossier; scoped one genuinely distinct multi-shift Work Hours Calculator.
- Research: reviewed Toolsfy, Hopi, Double Crewed and Google Search Central spam guidance. Keyword metrics unavailable and marked N/A.
- Tests: implementation tests not run.
- PR/commit/workflow: research dossier commit recorded separately; implementation pending.
- Issues: avoided a generic duplicate elapsed-time page.
- Pending: page code, source checks, browser QA, deployment and keyword metrics.
- Next: implement page; update sitemap and homepage internal links without changing original hero.
- Protected areas preserved: homepage hero, Elapsed Time Calculator hero, ID Card Print Studio hero.

## Decisions and handoff
- 2026-11-15 — GO for one English multi-shift timesheet MVP; no country clones until local demand and localization are validated.
