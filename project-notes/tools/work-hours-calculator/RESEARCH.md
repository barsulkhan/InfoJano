# Work Hours & Shift Calculator — SEO Research
Research status: Preliminary GO for differentiated MVP; search-demand validation open.
Last researched: 2026-11-15
Proposed URL: https://infojano.com/work-hours-calculator.html

## Executive summary
A dated multi-shift timesheet is materially different from the existing single-interval elapsed-time calculator. The new page should let users add multiple shifts, subtract unpaid breaks, handle overnight shifts, see daily and Monday–Sunday weekly totals, convert net time to decimal hours and export CSV. Build one global English page first. Confidence is medium for feature fit, low for demand/revenue until keyword metrics are available.

## Country and language screening
| Priority | Country | Code | Language/script | Candidate queries | Demand metrics |
|---|---|---|---|---|---|
| P1 | India | IN | English; Hindi/Devanagari; Bengali/Bengali script if localized | work hours calculator; shift hours calculator; timesheet calculator; काम के घंटे कैलकुलेटर; কাজের ঘণ্টা হিসাব | N/A |
| P2 | United States | US | English | work hours calculator; time card calculator; hours worked calculator | N/A |
| P2 | United Kingdom | GB | English | hours calculator; shift hours calculator; unpaid break calculator | N/A |
| P3 | Bangladesh | BD | Bengali/Bangla script and English | কাজের সময় ক্যালকুলেটর; কাজের ঘণ্টা হিসাব; শিফটের সময় হিসাব | N/A |
| P3 | Australia | AU | English | timesheet calculator; shift hours calculator | N/A |
| P3 | Canada | CA | English/French | work hours calculator; calculateur d'heures de travail | N/A |

India is first priority for initial product relevance; UK competitor evidence is useful for feature comparison. The MVP remains English/global. Do not create country clones until distinct demand and complete localization are evidenced. Date display follows browser locale; CSV dates use ISO format.

## Keyword clusters (qualitative only)
| Cluster | Candidate phrase | Intent | Volume | KD | CPC | Traffic potential |
|---|---|---|---:|---:|---:|---:|
| Primary | work hours calculator | Calculator | N/A | N/A | N/A | N/A |
| Primary | shift hours calculator | Calculator | N/A | N/A | N/A | N/A |
| Primary | timesheet calculator | Calculator | N/A | N/A | N/A | N/A |
| Secondary | hours worked calculator | Calculator | N/A | N/A | N/A | N/A |
| Secondary | calculate work hours with breaks | Calculator/how-to | N/A | N/A | N/A | N/A |
| Secondary | weekly work hours calculator | Calculator | N/A | N/A | N/A | N/A |
| Secondary | decimal hours calculator | Calculator | N/A | N/A | N/A | N/A |
| Local candidate | কাজের ঘণ্টা হিসাব | BD Bengali | Calculator | N/A | N/A | N/A | N/A |
| Local candidate | काम के घंटे कैलकुलेटर | IN Hindi | Calculator | N/A | N/A | N/A | N/A |

Ahrefs Keywords Explorer returned “Insufficient plan” in the connected entitlement during the previous keyword research. No metrics are invented; N/A is not zero. Validate country volume, trends, KD, CPC/currency, traffic potential and SERP features with Google Keyword Planner/Search Console or an authorized metrics plan.

## SERP and competitor review (2026-11-15)
| Market | Competitor | URL | Observed capabilities |
|---|---|---|---|
| India/global | Toolsfy | https://www.toolsfy.in/tools/work-hours-timesheet-calculator | Multiple dated shifts, unpaid breaks, overnight handling, daily/weekly totals, configurable daily overtime threshold, optional hourly rate, CSV export, opt-in localStorage and clear action |
| UK | Hopi | https://hopi.co.uk/hours-calculator/ | Single interval, unpaid break, overnight handling, hours/minutes and decimal hours, worked examples, browser-only processing |
| UK | Double Crewed | https://doublecrewed.co.uk/tools/shift-calculator | Date-aware shift, unpaid breaks, decimal/clock hours, UK daylight-saving clock-change controls, no pay/legal assessment |

Google Search Central policy source: https://developers.google.com/search/docs/essentials/spam-policies. It identifies doorway abuse and scaled-content abuse; therefore avoid near-duplicate locale pages and keyword-only pages.

## Audience and use cases
- Hourly/shift workers: multiple shifts, breaks, overnight work and weekly totals; mobile-first.
- Freelancers/contractors: net hours, decimal hours and CSV handoff; desktop spreadsheet use.
- Small teams: simple arithmetic summaries, not a full attendance/payroll platform.
- Part-time workers/students: weekly time totals.

## Monetization
Potential advertiser categories: workforce scheduling, time tracking, payroll/accounting and small-business tools. CPC, country split and publisher RPM are N/A/unknown. CPC is not publisher RPM. Keep calculator free and do not gate calculations.

## Differentiation
- Real multi-shift ledger rather than a single start/end interval.
- Show gross duration, unpaid break and net duration per row.
- Overnight end-before-start rolls to the following day.
- Daily and Monday–Sunday weekly aggregation; overnight shift is attributed to its start date for daily totals.
- Decimal hours and CSV export.
- Client-side processing; optional local save with a clear-data control.
- Explicitly disclaim statutory overtime, tax, deductions, pay premiums and employer policy determinations.

## Architecture
- One page: /work-hours-calculator.html targeting work hours calculator, shift hours calculator, timesheet calculator and hours worked calculator.
- Existing /time-calculator.html remains the canonical destination for elapsed time, time difference, add/subtract and date-time duration.
- No country/language clones at this stage.

## Decision
**GO for one differentiated product MVP.** SEO demand and monetization prioritization remain provisional because keyword metrics are unavailable. Scope: multiple dated shift rows, start/end/break, overnight handling, gross/net/decimal outputs, daily and Monday–Sunday weekly totals, configurable daily threshold, optional simple earnings estimate, CSV, opt-in localStorage, practical examples and FAQ. No legal/payroll claims or country clones.

## Sources and limitations
- Toolsfy: https://www.toolsfy.in/tools/work-hours-timesheet-calculator — live page inspected 2026-11-15.
- Hopi: https://hopi.co.uk/hours-calculator/ — live page inspected 2026-11-15.
- Double Crewed: https://doublecrewed.co.uk/tools/shift-calculator — live page inspected 2026-11-15.
- Google Search Central: https://developers.google.com/search/docs/essentials/spam-policies — doorway/scaled content guidance.
- Ahrefs Keywords Explorer: prior connected-plan request returned “Insufficient plan”; metrics unavailable.

## 5. Expanded US adjacent-cluster review (2026-11-15)

A broader audit was completed alongside the Elapsed Time Calculator research. Full candidate matrix and sources are saved in `project-notes/tools/elapsed-time-calculator/RESEARCH.md` §18. This section records the implications specific to the existing Work Hours product.

### 5.1 Additional US competitor findings

Newly reviewed pages include:
- Toggl Time Card: weekly/biweekly, 12/24-hour entry, unpaid breaks, daily/weekly totals, overtime/pay and CSV.
- QuickBooks Time Card: weekly/biweekly, 5/7-day options, configurable overtime/pay inputs and daily punch rows.
- ClockSlate: weekly/biweekly, split shifts, direct daily totals, decimal output, CSV/print/share and optional local save.
- Ordio Timesheet: one/two weeks, weekly overtime per workweek, hourly rate, gross-pay estimate, CSV/PDF.
- HourPeak: multiple shifts/day, weekly/biweekly, optional hourly rate and overtime modes, Excel/CSV/PDF.
- TimeMath.tools: quick weekly ledger, 12/24-hour, optional break/pay/OT settings and paste-friendly inputs.
- HiveDesk: separate timecard, timesheet, overtime and decimal-hours calculators.

**SERP implication:** Work Hours, Time Card and Timesheet remain highly overlapping for a full weekly ledger. Separate URLs would risk splitting the same task. Keep one Work Hours page and map related phrases there.

### 5.2 Current product gap confirmed

Current `work-hours-calculator.html` source has multiple dated shift rows, unpaid break, overnight handling, daily/weekly totals, decimal hours, configurable daily threshold, optional simple earnings estimate, CSV and opt-in localStorage. It does not yet demonstrate a dedicated two-week period selector, independent workweek overtime summaries, multiple punch pairs within a single day row, print/PDF output or maintained state overtime rules.

Priority sequence:
1. Complete WH-001–WH-009 functional/CSV/localStorage QA already defined in the tool QA log.
2. Verify date/week boundary, overnight attribution and decimal precision.
3. Consider a biweekly display only after user demand and product scope are confirmed; if added, calculate each seven-day workweek independently rather than averaging hours across a pay period.
4. Add print/PDF only if user need and QA justify it.
5. Keep statutory overtime/state-specific rules out of scope until a maintained legal-source review and product/legal approval exist.

### 5.3 Federal overtime caution (primary source)

U.S. Department of Labor guidance states that covered, nonexempt employees generally receive at least 1.5 times their regular rate for hours over 40 in a workweek; a workweek is a fixed recurring 168-hour period and hours cannot be averaged across multiple weeks. Exemptions and state rules apply. Source: https://www.dol.gov/agencies/whd/overtime/ . This supports a strong disclaimer: the current configurable daily threshold and optional earnings estimate are not a legal overtime/payroll determination.

### 5.4 New adjacent clusters — do not split the Work Hours page prematurely

- **Clock-Out Calculator:** a separate reverse-planning task exists in US SERPs (Shift Ledger, HourPunch, WorkHourTools, MyClockOut). First consider a simple “Find clock-out time” mode within Work Hours; a separate URL needs its own demand/SERP proof.
- **Decimal Hours Converter:** dedicated pages (Clockspot, Ordio, TimoDesk, CalcuTools, TimeToDecimal) offer bidirectional conversion, precision and batch conversion. Current Work Hours shows decimal totals but is not a general-purpose bidirectional/batch converter. Treat as a separate micro-tool candidate, pending metrics.
- **Military Time Converter:** standalone 12h/24h conversion pages exist (iSObj, TimeAndDuration), but timecard tools also include a 12/24h toggle. Validate demand before a standalone page.
- **Business Hours Calculator:** separate SLA/opening-hours task; not the same as shift-work totals. Candidate should be evaluated in its own research/spec rather than added as a Time Card feature.
- **Overtime Calculator:** distinct payroll/legal task with high maintenance risk; no legal-rule engine approved.

### 5.5 Metrics and country scope

Exact US search volume, trend, KD, CPC and traffic potential remain N/A for these additional clusters. Ahrefs entitlement was insufficient and no usable GSC export was supplied. CPC is not publisher RPM. US remains primary; UK, India, Canada, Australia and Bangladesh remain secondary localization hypotheses, not validated demand markets. No country clone recommended.

### 5.6 Decision

**Retain GO for the existing single Work Hours & Shift Calculator page; NO-GO for separate Time Card/Timesheet URLs.** New candidate research (Business Hours, Decimal Hours, Military Time and Clock-Out) is HOLD pending quantitative US metrics and current Work Hours QA. No new code or URL is approved by this research update.
