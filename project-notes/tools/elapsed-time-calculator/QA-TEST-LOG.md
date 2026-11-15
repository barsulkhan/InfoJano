# Elapsed Time Calculator — Manual QA Test Log

Last updated: 2026-11-15
Live page: https://infojano.com/time-calculator.html
Related work tracker: [README.md](README.md)
QA type: User-performed manual mobile browser testing; evidence supplied as screenshots in the project conversation.

## Test results

| Test ID | Feature | Test inputs | Expected result | Observed result | Status |
|---|---|---|---|---|---|
| ET-001 | Basic Time Difference | Start 09:00 AM; End 05:30 PM; Break 0 min | Net 8h 30m; 510 min; 30,600 sec; 8.50 decimal hours | Net 8h 30m; gross 8h 30m; break 0; 510 min; 30,600 sec; 8.50 hours. New item appeared in Recent Calculations. | PASS |
| ET-002 | Overnight Time Difference / seconds precision | Start 11:05:00 PM; End 12:05:25 PM; Break 0 min. Calculator treats earlier end clock time as following day. | 13h 0m 25s; 780.42 min; 46,825 sec; 13.01 decimal hours | Displayed net/gross 13h 0m 25s; break 0; 780.42 min; 46,825 sec; 13.01 hours. Item appeared in Recent Calculations. | PASS |
| ET-003 | Break Duration deduction | Start 09:00 AM; End 05:30 PM; Break 30 min | Gross 8h 30m; break 30m; net 8h; 480 min; 28,800 sec; 8.00 decimal hours | Displayed gross 8h 30m; break 0h 30m; net 8h; 480 min; 28,800 sec; 8.00 hours. Item appeared in Recent Calculations. | PASS |
| ET-004 | Add Time with seconds and next-day rollover | Starting time 10:30:00 PM; operation Add; duration 2h 45m 30s | Calculated time 01:15:30 AM on the following day | Screenshot shows calculated time 01:15:30; starting time 22:30:00; duration 2h 45m 30s; operation Add; day adjustment Following day. New Add / Subtract entry appears in Recent Calculations. | PASS |
| ET-005 | Subtract Time with seconds and previous-day rollover | Starting time 01:15:30 AM; operation Subtract; duration 2h 45m 30s | Calculated time 10:30:00 PM on the previous day | Screenshot shows calculated time 22:30:00; starting time 01:15:30; duration 2h 45m 30s; operation Subtract; day adjustment Previous day. New Subtract entry appears in Recent Calculations. | PASS |
| ET-006 | Date + Time duration across midnight | Start 15 Nov 2026, 11:30 PM; End 16 Nov 2026, 01:45 AM | 0 days, 2h 15m 0s; 2.25 total hours; 135 total minutes; 8,100 total seconds | Screenshot shows total duration 0 days, 2 hours, 15 minutes, 0 seconds; total days 0; remaining time 2h 15m 0s; total hours 2.25; total minutes 135.00; total seconds 8,100. New Date + Time Duration entry appears in Recent Calculations. | PASS |
| ET-007 | Copy Result for Date + Time mode | Current result from ET-006 | Clipboard should contain the complete result summary and its duration/unit totals | User pasted into a notes app; screenshot shows Total duration 0 days, 2 hours, 15 minutes, 0 seconds; Total days 0; Remaining time 2h 15m 0s; Total hours 2.25; Total minutes 135.00; Total seconds 8,100. | PASS |
| ET-008 | Share Result for Date + Time mode | Current result from ET-006 | Native share sheet opens with a share payload containing the result summary | Android “Sharing text” sheet opened. Preview begins “InfoJano Time Calculator Result” and “Total duration: 0 days, 2 hours, 15 minutes, 0 sec…nds”. App targets including WhatsApp, Chrome and Quick Share are offered. Preview truncates the text visually; no recipient was selected, so end-to-end delivery and full payload contents were not verified. | PASS — share sheet launch confirmed; delivery not tested |
| ET-009 | Recent Calculations persistence after refresh | Previously saved Date + Time, Subtract and Add entries; refresh page | Previously saved recent calculations remain visible after page reload | After refresh, screenshot shows Date + Time Duration, Subtract (Previous day), Add (Following day), and two Time Difference records still in Recent Calculations. The active calculator form/result reset to its initial empty Time Difference state, while saved history remained. | PASS |

## Notes and limitations

- ET-001 and ET-003 were confirmed from user-supplied mobile screenshots.
- ET-002 was confirmed from a user-supplied mobile screenshot. The start/end values were 11:05 PM and 12:05:25 PM; the page's stated behavior treats an end time earlier than the start time as the following day.
- ET-004 and ET-005 were confirmed from user-supplied mobile screenshots. ET-004 addition produced 01:15:30 with “Following day”; ET-005 subtraction produced 22:30:00 with “Previous day”. Both new calculations appeared in Recent Calculations.
- ET-006 was confirmed from the user-supplied mobile screenshot: 15 Nov 2026 11:30 PM to 16 Nov 2026 01:45 AM. The result panel displayed 0 days, 2 hours, 15 minutes, 0 seconds; 2.25 hours; 135.00 minutes; and 8,100 seconds. The Date + Time Duration item appeared in Recent Calculations.
- ET-007 was confirmed from the user's pasted-content screenshot. The copied text contains the complete duration and all displayed totals. A separate clipboard-success toast was not captured, but successful paste confirms the copy action.
- ET-008 was confirmed from the Android share-sheet screenshot. The native share UI opened and displayed the expected InfoJano result title and beginning of the duration summary. The OS preview truncates the text; the screenshot alone does not prove whether the underlying payload is complete. No destination app was selected, so delivery was not tested.
- ET-009 was confirmed from the user's post-refresh mobile screenshot. The saved Date + Time, Subtract and Add records and two older Time Difference records remained visible after reload. The form/result returned to its initial empty Time Difference state.
- Recent Calculations visibly showed each submitted calculation in the supplied screenshots.
- These checks confirm the displayed calculations and actions for the specific test cases only; they do not establish complete browser compatibility or all edge cases.
- Clear History, keyboard accessibility, desktop layout, and broader mobile viewport/overflow behavior remain untested.
- Protected calculator hero design was not changed during QA.

## Source review (not a substitute for manual QA)

- `clearTimeHistory()` removes the `ijElapsedTimeHistoryV1` localStorage key and calls `renderTimeHistory()`.
- `renderTimeHistory()` renders “No recent calculations yet.” when the history array is empty.
- `getTimeHistory()` and `recordTimeCalculation()` each limit the list to five entries with `.slice(0,5)`.
- These are source-level findings only. ET-010 and the five-item cap still require runtime confirmation in a real browser.

## Next test

ET-010: Clear History — use the Clear history control and confirm that the recent-calculation list is cleared, with a suitable empty state. Then refresh and confirm the list remains empty.


### 2026-11-15 — Source review of Clear History and history cap
- Inspected current `time-calculator.html` history functions.
- `clearTimeHistory()` removes the `ijElapsedTimeHistoryV1` localStorage key and rerenders the list.
- `renderTimeHistory()` creates an empty list item reading “No recent calculations yet.” when no records exist.
- `getTimeHistory()` filters malformed entries and slices to five; `recordTimeCalculation()` also writes only the first five records.
- Result: source-level logic appears correct; ET-010 manual UI behavior and five-item cap runtime behavior remain NOT TESTED. No PASS claim.


### 2026-11-15 — Screenshot review: current live mobile layout
- User supplied a fresh mobile screenshot of `https://infojano.com/time-calculator.html`.
- Observed: shared header tagline is visibly bold and uses a blue-to-teal two-tone treatment; related-tool icons show distinct blue, teal, amber, and violet accents; the Explore More Free Tools section is visible; no lower duplicate “Back to InfoJano Home” link appears in the captured viewport (the header Home button remains).
- This confirms the latest shared tagline/icon/link styling is present in the live page screenshot at the time supplied. It is a screenshot-based visual check, not full responsive QA.
- ET-010 Clear History is NOT tested: the screenshot still shows five Recent Calculations entries, so the clear action has not yet been confirmed. Five-item history cap is source-reviewed only; runtime cap remains untested.
- Next: user should tap “Clear history” and share the resulting empty-state screenshot; then refresh once and confirm the list remains empty.


### 2026-11-15 — ET-010 Clear History: empty state confirmed
- User supplied a live mobile screenshot showing Recent Calculations with the message “No recent calculations yet.” and no calculation records.
- Result: Clear History action and empty-state rendering are visually confirmed (partial ET-010 PASS).
- The screenshot does not yet prove persistence after a page reload. Final ET-010 status remains pending until the user refreshes and confirms the list stays empty.
- Five-entry cap remains source-reviewed only; runtime cap test is still pending.


### 2026-11-15 — ET-010 Clear History persistence after refresh: PASS
- User supplied a second live mobile screenshot after refreshing the calculator page.
- The Recent Calculations section still displays “No recent calculations yet.” and contains no restored records.
- Result: Clear History empty-state and persistence-after-refresh are visually confirmed. ET-010 marked PASS based on the two sequential user screenshots (empty state before refresh and still empty after refresh).
- Remaining QA: five-entry cap runtime test; desktop visual QA; complete mobile responsive review; keyboard and screen-reader accessibility review.


### 2026-11-15 — Five-entry cap, responsive CSS and accessibility source audit
- ET-010 Clear History persistence: PASS (two user screenshots: empty state before refresh and still empty after refresh).
- Five-entry cap: source review PASS, runtime NOT TESTED. `getTimeHistory()` uses `.slice(0,5)` and `recordTimeCalculation()` writes `history.slice(0,5)` after prepending the newest entry.
- Responsive CSS: source review confirms media-query breakpoints at 480px, 760px, 850px and 1001px, plus `prefers-reduced-motion: reduce`. Full device/viewport sweep NOT TESTED.
- Accessibility source audit: 9 inputs; all have labels (7 `<label for>` associations and 2 `aria-label`); all 14 buttons have explicit `type`; 10 aria-label attributes; 2 aria-live attributes; no duplicate IDs. Dedicated `:focus-visible` styling not found; native focus behavior not visually verified. Keyboard navigation and screen-reader tests NOT TESTED.
- Desktop visual QA NOT TESTED: no interactive desktop browser session available. Do not report as passed.
- No app source changes made during this audit. Remaining work requires actual browser interaction/desktop viewport and assistive technology.


## SEO guide page QA — 2026-11-15

| ID | Check | Expected | Status |
|---|---|---|---|
| SEO-001 | New guide source structure | Correct title, description, self-canonical, H1, guide sections, FAQs and CTA to calculator | PASS — source inspection |
| SEO-002 | Structured data | Valid JSON-LD syntax for WebPage, BreadcrumbList and FAQPage | PASS — JSON.parse succeeded |
| SEO-003 | Internal links and sitemap | Calculator links to guide; sitemap includes guide; guide links to calculator | PASS — both links and sitemap entry verified |
| SEO-004 | Hero and protected areas | New guide uses homepage hero art assets; original homepage and calculator hero unchanged | PASS — original homepage and calculator source left unchanged |
| SEO-005 | Browser QA | Mobile/desktop layout, content rendering, navigation and accessibility | NOT RUN |
| SEO-006 | Deployment/indexing | Pages workflow success, live URL, canonical and indexability | NOT RUN |

### 2026-11-15 — SEO guide source validation
- Fetched the committed guide, calculator page and sitemap from GitHub after writes.
- PASS: SEO title, meta description, self-canonical, one H1, both reused homepage artwork paths, 1360px max-width/8px gutter, formula, overnight example, visible FAQ details, WebPage/BreadcrumbList/FAQPage JSON-LD parses as JSON, guide-to-tool and tool-to-guide links, sitemap entry.
- PASS: existing calculator hero markup/style still present; homepage index.html was not modified. Source checks do not verify rendered artwork or layout.
- Browser QA: NOT RUN. Pages deployment: initial latest run #2548 was in progress at check; must recheck after tracker commit.


### 2026-11-15 — Deployment workflow status
- GitHub Pages workflow run #2550: SUCCESS, commit `f44e679ad5e8e0746061ea98c81b017605229485` (contains the elapsed-time guide and latest tracker updates).
- Direct live URL verification unavailable in the current inspection channel; rendered/mobile/desktop QA remains NOT RUN.


## 2026-11-15 — Follow-up source QA (repository snapshot)

**Scope:** Re-fetched the latest handoff, tracking/research standards, tool index, elapsed-time tracker/research/QA log, `time-calculator.html`, `elapsed-time-calculator-guide.html` and `sitemap.xml` before testing. No application source files were changed.

### Static/source checks

| Test ID | Check | Result | Evidence |
|---|---|---|---|
| SRC-001 | Calculator self-canonical | PASS | Canonical points to `/time-calculator.html` |
| SRC-002 | Guide self-canonical | PASS | Canonical points to `/elapsed-time-calculator-guide.html` |
| SRC-003 | Sitemap membership | PASS | Both URLs found in repository `sitemap.xml` |
| SRC-004 | Bidirectional internal links | PASS | Calculator links to guide; guide links to calculator |
| SRC-005 | Guide heading structure | PASS | Exactly one H1 in guide source |
| SRC-006 | Guide layout constraint | PASS | 1360px max width and 8px horizontal gutters present |
| SRC-007 | Guide JSON-LD syntax | PASS | Embedded JSON-LD successfully parsed with JSON.parse |
| SRC-008 | Clock-only overnight rule | PASS | Source adds 86,400 seconds only when end is earlier than start |
| SRC-009 | Break validation | PASS | Source rejects break duration greater than gross elapsed duration |
| SRC-010 | Recent-history cap | PASS | `getTimeHistory()` read path and `recordTimeCalculation()` write path both slice to five |
| SRC-011 | Reduced-motion support | PASS | `prefers-reduced-motion: reduce` rules present in both page sources |
| SRC-012 | Visible guide FAQ | PASS | Multiple native `<details>` FAQ entries present |
| SRC-013 | Duplicate calculator IDs | PASS | No duplicate IDs detected in calculator source |
| SRC-014 | Button type declarations | PASS | All 14 calculator buttons have explicit button type |
| SRC-015 | Input-label source heuristic | PASS (heuristic only) | 9 inputs and label/aria-label coverage found; this does not prove screen-reader usability |
| SRC-016 | Inline JavaScript syntax | PASS | All three executable inline calculator scripts parsed successfully; JSON-LD excluded from JS parse and validated separately |

### Deterministic arithmetic checks (formula-level, not browser runtime)

| Case | Expected | Computed | Result |
|---|---:|---:|---|
| 09:00–17:30 | 30,600 seconds | 30,600 | PASS |
| 23:05:00–12:05:25 next day | 46,825 seconds | 46,825 | PASS |
| 09:00–17:30 less 30-minute break | 28,800 seconds | 28,800 | PASS |
| Equal start/end clock time | 0 seconds | 0 | PASS |

### Workflow and limitations

- Checked GitHub Actions latest runs: Pages build/deployment run #2570 for commit `824653a4458312cf60fa20acb579ed6487458a79` completed SUCCESS. This verifies the documentation/handoff commit deployment workflow, not browser rendering of this QA session's subsequent commits.
- Actual mobile/desktop browser rendering, five-entry history cap through UI, keyboard navigation, visible focus, screen-reader output, copy/share end-to-end, and DST transition behavior were NOT RUN. No interactive browser/computer-control session is available here.
- A first history-cap static assertion used an overly narrow regex and reported a false FAIL; direct inspection confirmed both getter and writer use `.slice(0,5)`. The corrected assertions PASS. No product defect was found from that check.
- No app code, SEO metadata, calculator hero, homepage hero or ID Card Print Studio hero changed.

### Next concrete QA step

When a real browser is available, perform the five-entry history test (create six different calculations and verify only the newest five remain), then inspect guide/calculator at mobile and desktop widths and run keyboard/focus and screen-reader checks. Add DST boundary runtime tests for date+time mode.


### 2026-11-15 — QA continuation attempt; interactive checks still blocked
- User said “Koro” to continue the remaining calculator/guide QA.
- Re-fetched the current default-branch calculator (time-calculator.html), SEO guide (elapsed-time-calculator-guide.html), sitemap, and QA ledger before continuing.
- Confirmed repository source still contains both calculator and guide URLs in sitemap; existing source QA evidence SRC-001–SRC-016 and formula checks remain recorded above.
- Checked available execution options in this session: no connected interactive browser/computer-control session or browser automation connector is exposed. A local Chromium binary exists in the shell environment, but the repository page source could not be retrieved into that environment through the available file-transfer route; no real browser session was run.
- Workflow lookup for documentation commit 6afaeed98338a36db4bfbacbcc94653299a36f74 returned no associated PR-triggered workflow runs; this endpoint does not verify the Pages workflow. Do not claim deployment status for that commit based on this lookup.
- New tests this session: no additional browser/runtime tests executed. Five-entry history cap runtime, desktop visual QA, full responsive viewport sweep, keyboard/focus, screen-reader, copy/share end-to-end and DST runtime remain NOT RUN.
- Hero instruction: user explicitly said not to revise the existing guide hero now. Future separately justified SEO pages must match the calculator tool hero, not the homepage hero; this requirement is recorded in README and handoff. Existing guide remains unchanged.
- Next concrete manual test: on the live calculator, create six distinct calculations, then inspect Recent Calculations. Expected: only the newest five remain. Capture a screenshot showing the five entries and share it so the runtime cap can be verified. After that, continue desktop visual and keyboard/focus checks.
- Protected areas: no application source or hero/banner files changed.
