# Add or Subtract Date Calculator — QA Test Log

Last updated: 2026-11-15
Live page: https://infojano.com/add-subtract-date-calculator.html
Work tracker: README.md

## Source / automated checks

| ID | Test | Expected | Result | Status |
|---|---|---|---|---|
| AD-001 | JavaScript syntax check with Node `node --check` | No parse errors | No output/errors | PASS |
| AD-002 | Jan 31 2026 + 1 month | Feb 28 2026 | Feb 28 2026 | PASS |
| AD-003 | Jan 31 2028 + 1 month | Feb 29 2028 | Feb 29 2028 | PASS |
| AD-004 | Mar 31 2026 + 1 month | Apr 30 2026 | Apr 30 2026 | PASS |
| AD-005 | Jan 1 2026 + 30 days | Jan 31 2026 | Jan 31 2026 | PASS |
| AD-006 | Jan 1 2026 - 1 day | Dec 31 2025 | Dec 31 2025 | PASS |
| AD-007 | Feb 29 2028 + 1 year | Feb 28 2029 | Feb 28 2029 | PASS |
| AD-008 | Jan 31 2026 - 1 month | Dec 31 2025 | Dec 31 2025 | PASS |
| AD-009 | Impossible input 2026-02-30 | Reject input | Returns null | PASS |
| AD-010 | Page source and CTA | Calculator present; CTA targets section | IDs present; CTA points to #date-offset-calculator | PASS |

## Runtime / visual QA still pending
- Manual browser tests: buttons, keyboard operation, clipboard permission behavior, mobile layout, desktop layout, screen-reader labels and focus visibility.
- Deployment: check latest GitHub Pages run and live page before claiming the change is live.
- Tests above are source-level and isolated Node arithmetic checks; they are not end-to-end browser QA.

| AD-011 | GitHub Pages build/deploy workflow | Successful deployment workflow for implementation + tracker commit | Run #2642 completed SUCCESS | PASS — workflow only; direct live rendering not independently fetched |
