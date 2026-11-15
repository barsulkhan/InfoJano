# Work Hours & Shift Calculator — QA Test Log

Last updated: 2026-11-15

Source-only checks were run after page creation. Inline JavaScript syntax and key source-structure checks passed. Browser/functional tests have not run; source checks are not browser QA.

| ID | Feature | Inputs/action | Expected result | Status | Evidence |
|---|---|---|---|---|---|
| WH-001 | Basic shift | 09:00–17:30, 30-minute unpaid break | Gross 8h30m; net 8h; decimal 8.00 | NOT RUN | — |
| WH-002 | Overnight | 22:00–06:00, 45-minute break | Gross 8h; net 7h15m; decimal 7.25; overnight indicated | NOT RUN | — |
| WH-003 | Multiple shifts | Two entries on one date | Correct row and daily totals | NOT RUN | — |
| WH-004 | Weekly grouping | Entries across Sunday/Monday boundary | Monday–Sunday buckets correct | NOT RUN | — |
| WH-005 | Daily threshold | Daily total exceeds configured threshold | Overtime only above user-set threshold; no legal claim | NOT RUN | — |
| WH-006 | Earnings estimate | Net hours × hourly rate | Simple estimate only; no tax/premium/deduction | NOT RUN | — |
| WH-007 | CSV | Export populated week | Valid CSV header, entries and totals | NOT RUN | — |
| WH-008 | Validation | Missing/invalid times; break exceeds duration | Clear validation; invalid row excluded | NOT RUN | — |
| WH-009 | Local save | Remember on/off; clear saved data | Saves only when enabled; clear removes local copy | NOT RUN | — |
| WH-010 | Responsive/accessibility | Mobile, desktop, keyboard | No overflow; labels/focus/controls usable | NOT RUN | — |

## Source checks (2026-11-15)\n- Inline JavaScript syntax: PASS (compiled with the JavaScript engine; no syntax error).\n- Source structure: PASS — canonical URL, both reused homepage hero artwork assets, 1360px max width, 8px side gutters, CSV export path, opt-in localStorage and WebApplication JSON-LD found.\n- Functional arithmetic, real CSV file, localStorage behavior, browser rendering, accessibility and deployment: NOT RUN.\n\n## Work log
### 2026-11-15 — Initial test plan
- Implementation: `work-hours-calculator.html` created and committed; functional/browser tests remain NOT RUN.
- Source/automated tests: NOT RUN.
- Manual mobile/desktop QA: NOT RUN.
- Deployment/live QA: NOT RUN.


### 2026-11-15 — Deployment workflow status
- GitHub Pages workflow run #2550: SUCCESS, commit `f44e679ad5e8e0746061ea98c81b017605229485`.
- Direct live URL check, browser QA and functional tests WH-001–WH-010 remain NOT RUN.


### 2026-11-15 — Work Hours QA resumed: focused source/logic audit
- Request: return to InfoJano's main work and begin the pending Work Hours & Shift Calculator QA; honor the user's instruction to avoid paid SEO tools.
- Re-fetched before work: current handoff, tracking standard, research standard, tool index, Work Hours README, RESEARCH.md, QA-TEST-LOG.md, page source and research template.
- Inspected source paths in `work-hours-calculator.html`: `parseTime()`, `getEntries()`, overnight gross calculation, break validation, `mondayOf()`, daily/weekly aggregation, threshold estimate, earnings estimate, CSV serialization/download, opt-in localStorage, clear/reset handlers and live status message.
- Source/logic findings:
  - PASS (source inspection): 09:00–17:30 produces 510 gross minutes; a 30-minute break is deducted to 480 net minutes; decimal output is net minutes / 60 to two places (8.00).
  - PASS (source inspection): 22:00–06:00 is treated as next-day rollover (480 gross minutes); 45-minute break leaves 435 minutes (7.25 decimal hours).
  - PASS (source inspection): daily totals are keyed by shift date; weekly totals use Monday as the bucket start and group by shift start date. This matches the documented overnight attribution rule.
  - PASS (source inspection): daily threshold excess is calculated per date from that day's net minutes; UI wording says it is based on the user's setting and not a legal/payroll determination.
  - PASS (source inspection): earnings estimate is net hours × entered rate; the visible text excludes premiums, taxes and deductions.
  - PASS (source inspection): CSV cells are quoted and embedded quotes doubled; output includes UTF-8 BOM, CRLF rows, shift details and summary totals.
  - PASS (source inspection): localStorage write is gated by the Remember checkbox; turning it off removes the stored key; Clear saved data removes the key while retaining current on-screen rows; Reset clears entries and stored data.
  - PASS (source inspection): missing/invalid date/time, equal start/end and break greater than gross duration are rejected; invalid rows are excluded from calculations and export is blocked while errors exist.
- Important limitation: these are source/logic inspections, not real browser functional tests. No connected interactive browser/computer-control tool is available in this session. WH-001–WH-010 remain NOT RUN as runtime/browser tests; no CSV file download, localStorage UI interaction, keyboard or responsive rendering was executed.
- Application source was not changed. Protected homepage hero, Elapsed Time Calculator hero and ID Card Print Studio hero were not changed.
- Next concrete step: run WH-001–WH-009 in a real browser, capture actual outputs/download/storage behavior, then desktop/mobile/accessibility review and release verification. Do not claim runtime PASS from this source audit.


### 2026-11-15 — Input-validation defect fix (source review)
- Reopened the current page source after the focused audit and identified two edge cases worth correcting before browser QA:
  - JavaScript Date normalizes impossible calendar dates (for example, an out-of-range day) unless the parsed year/month/day are checked against the constructed date.
  - Clearing the required daily-threshold field converts the empty string to numeric zero; the previous calculation then treated every positive daily total as above-threshold time.
- Updated `work-hours-calculator.html`: strict YYYY-MM-DD format and round-trip calendar-component validation now reject impossible dates; the daily threshold now must be within the visible input range 0.25–24 hours, otherwise a clear validation message is shown and the overtime estimate is not calculated.
- Source inspection after the change: PASS — fetched source contains the strict date regex, calendar-component round-trip checks, threshold range guard and guarded daily-OT calculation. This is a source inspection only; no browser/runtime test or syntax compiler was available in this session.
- Commits: date/threshold fix `56486dc6d83792b97f44d1edcbe8c8409577ff92`; strict date-regex correction `c15ecec44313503db91fb40f295dc127bd7a7565`.
- WH-001–WH-010 remain NOT RUN as browser/runtime tests. Protected homepage, Elapsed Time Calculator and ID Card Print Studio heroes remain unchanged.
- Next: run WH-008 invalid-date/threshold behavior and WH-001/002 arithmetic in a real browser, then continue WH-003–WH-009 and responsive/desktop QA.
