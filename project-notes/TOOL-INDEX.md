| Elapsed Time Calculator | tools/elapsed-time-calculator/ | In progress — US Work Hours/Time Card SERP review recommends one consolidated concept; US Date & Time Duration review finds overlap with existing Date + Time mode; no additional elapsed/date-time URL justified; quantitative metrics/GSC unavailable; desktop visual QA pending | 2026-11-15 | Complete desktop visual QA when browser access is available; revisit US metrics/GSC when reliable data is available |

Last updated: 2026-11-15

এই index-এ প্রতিটি tool-এর tracking folder, সামগ্রিক অবস্থা, সর্বশেষ কাজের তারিখ এবং পরবর্তী পদক্ষেপ থাকবে। বিস্তারিত ইতিহাস সংশ্লিষ্ট tool-এর README.md-তে। নতুন chat শুরুতে [SESSION-START-PROMPT.md](SESSION-START-PROMPT.md) ব্যবহার করো। Workflow উন্নয়নের প্রস্তাব: [WORKFLOW-IMPROVEMENT-PLAN.md](WORKFLOW-IMPROVEMENT-PLAN.md)। প্রতিটি tool-এর development-এর আগে [TOOL-RESEARCH-STANDARD.md](TOOL-RESEARCH-STANDARD.md) অনুসারে country-wise keyword ও competitor research বাধ্যতামূলক।

| Tool | Tracking folder | Overall status | Last updated | Next action |
|---|---|---|---|---|
| Elapsed Time Calculator | tools/elapsed-time-calculator/ | In progress — calculator + guide source checks PASS; ET-011 five-entry cap runtime PASS; Pages workflow #2550 SUCCESS; follow-up SERP/localization research and 16 static source checks saved; remaining desktop/responsive/accessibility/DST QA pending | 2026-11-15 | Run remaining desktop/responsive browser QA; keyboard/focus, screen-reader, copy/share end-to-end and DST runtime checks |
| Work Hours & Shift Calculator | tools/work-hours-calculator/ | In progress — MVP source checks PASS; expanded US SERP/adjacent cluster research saved; GO for one Work Hours page, no separate Time Card/Timesheet URLs; functional/browser QA and deployment verification pending; metrics N/A | 2026-11-15 | Run WH-001–WH-009 functional/CSV/localStorage tests, then mobile/desktop/accessibility QA and live URL check |


### 2026-11-15 — SEO page hero design requirement recorded
- User clarified that future Elapsed Time Calculator SEO landing pages must use the existing calculator hero as the exact design reference; the homepage hero is not an acceptable substitute. Existing guide is intentionally not being revised now.
- Research still supports only the calculator + guide two-page architecture. CARD-010 remains conditional; no extra page should be created without distinct intent/demand evidence.
- Detailed decision saved in tools/elapsed-time-calculator/README.md and NEW-CHAT-HANDOFF.md.


### 2026-11-15 — QA continuation status
- Re-fetched calculator, guide, sitemap and QA log; no new runtime/browser test was run because no interactive browser session is connected. Latest source/formula results remain unchanged.
- Five-entry history runtime, desktop/responsive, keyboard/focus, screen-reader, copy/share and DST checks remain pending. Detailed status in tools/elapsed-time-calculator/README.md and QA-TEST-LOG.md.


### 2026-11-15 — Elapsed Time Calculator five-entry history cap runtime PASS
- User-supplied sequential live mobile screenshots verify that after adding a sixth distinct calculation, Recent Calculations still displays exactly five; newest entry is first and the prior oldest entry is removed.
- ET-011 recorded PASS in the tool QA log. Remaining desktop/responsive/accessibility/DST checks are still pending.


### 2026-11-15 — QA status correction
- ET-011 five-entry history cap is runtime PASS from sequential user screenshots; remove it from pending lists. Remaining QA is desktop/responsive, keyboard/focus, screen-reader, copy/share end-to-end and DST runtime.


### 2026-11-15 — QA status clarification
- User confirms copy/share and screen-reader tests were already completed. Removed them from the pending list; do not ask to repeat them.
- Desktop visual QA is the remaining explicit manual check.


### 2026-11-15 — USA-first Elapsed Time SEO research started
- User set USA as the primary audience. Preliminary US keyword estimates and three page concepts are saved in `tools/elapsed-time-calculator/RESEARCH.md` §15.
- Work Hours and Time Card appear overlapping; investigate SERP overlap before separate URLs. Date & Time Duration needs intent separation from the current calculator. No new page approved or coded.


### 2026-11-15 — US Work Hours / Time Card SERP review
- Qualitative competitor review found substantial overlap between “work hours calculator” and “time card calculator”. Plan one consolidated US-focused concept/URL, not separate thin pages. Feature gaps and safeguards saved in `tools/elapsed-time-calculator/RESEARCH.md` §16.
- Repository inspection confirms a Work Hours & Shift Calculator page/tracker already exists; no second Time Card URL recommended.

### 2026-11-15 — US Date & Time Duration SERP review
- Existing `time-calculator.html` already supports date-time duration across multiple dates; the guide also explains this mode. Qualitative competitor review (Toggl, Count My Hours, CalculatorSoup, NumUtility, LiveTools and timezone-focused alternatives) found substantial generic intent overlap.
- Decision: no separate generic Date & Time Duration URL. Keep phrase cluster mapped to `/time-calculator.html` and `/elapsed-time-calculator-guide.html`; only consider a future distinct calendar-date/business-hours/timezone feature if demand and scope justify it.
- Detailed source/competitor evidence, feature gaps, metrics limitations and consolidated three-concept architecture saved in `tools/elapsed-time-calculator/RESEARCH.md` §17. No app code, metadata, sitemap or hero changed.


### 2026-11-15 — Expanded US time/date utility opportunity audit
- Reviewed additional clusters together: Business Hours, Business Days, Date Difference, Decimal Hours, Military Time, Clock-Out, Overtime, Time Zone Duration, Work Hours/Time Card/Timesheet and Date + Time Duration.
- Confirmed existing repository destinations for Work Hours, Date Difference, Business Days and Elapsed/Date-Time Duration; no duplicate URLs recommended.
- New candidates held for quantitative US validation: Business Hours, Decimal Hours Converter and Military Time Converter. Clock-Out should first be tested as a mode within Work Hours. Overtime and Time Zone Duration remain out of scope until the required legal/timezone logic exists.
- Full evidence: tools/elapsed-time-calculator/RESEARCH.md §18 and tools/work-hours-calculator/RESEARCH.md §5.
