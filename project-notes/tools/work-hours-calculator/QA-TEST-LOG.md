# Work Hours & Shift Calculator — QA Test Log

Last updated: 2026-11-15

No implementation/browser tests have run yet. Source creation is not QA evidence.

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

## Work log
### 2026-11-15 — Initial test plan
- Implementation: not yet available.
- Source/automated tests: NOT RUN.
- Manual mobile/desktop QA: NOT RUN.
- Deployment/live QA: NOT RUN.
