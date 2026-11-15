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

## Notes and limitations

- ET-001 and ET-003 were confirmed from user-supplied mobile screenshots.
- ET-002 was confirmed from a user-supplied mobile screenshot. The start/end values were 11:05 PM and 12:05:25 PM; the page's stated behavior treats an end time earlier than the start time as the following day.
- ET-004 and ET-005 were confirmed from user-supplied mobile screenshots in this session. ET-004 addition produced 01:15:30 with “Following day”; ET-005 subtraction produced 22:30:00 with “Previous day”. Both new calculations appeared in Recent Calculations.
- Recent Calculations visibly showed each submitted calculation in the supplied screenshots.
- These checks confirm the displayed calculations for the specific test cases only; they do not establish complete browser compatibility or all edge cases.
- Copy Result and Share Result were visible but their actions were not yet functionally tested.
- Persistence after page refresh, Clear History, history maximum of five, Date + Time mode, keyboard accessibility, desktop layout, and broader mobile viewport/overflow behavior remain untested.
- Protected calculator hero design was not changed during QA.

## Next test

ET-006: Date + Time mode — verify a duration spanning midnight and a full date boundary. Continue one test at a time and append actual inputs, expected/observed outputs, status, and screenshot evidence.
