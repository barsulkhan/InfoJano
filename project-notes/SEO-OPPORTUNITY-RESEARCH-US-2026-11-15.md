# InfoJano — Consolidated SEO & Tool Opportunity Research (US-first)

Research date: 2026-11-15
Primary market: United States (US English)
Secondary markets screened: UK, India, Canada, Australia, Bangladesh
Status: Broad research batch saved; quantitative validation partial; no implementation authorization implied.

## 1. Executive summary

This dossier consolidates the current elapsed-time, work-hours/time-card, date/business-day, business-hours, decimal-hours, military-time, clock-out, overtime and timezone opportunity research. It is intended to reduce repeated research sessions and serve as the durable starting point for future decisions.

**Current decisions**
- Keep the existing elapsed-time calculator and guide as the two-page elapsed-time architecture.
- Keep one existing Work Hours page for work-hours, time-card, timesheet and weekly-hours intent; do not split overlapping intents into multiple pages.
- Do not create another generic date/time-duration, date-difference or business-days page before auditing the existing pages and their actual utility.
- Business Hours is the strongest distinct new-tool candidate, but remains HOLD pending reliable keyword metrics and a precise product spec.
- Decimal Hours Converter and Military Time Converter are distinct smaller opportunities; hold pending demand/competitor validation and prioritization.
- Treat Clock-Out as a possible mode inside Work Hours before considering a separate URL.
- Overtime is high legal/product-maintenance risk; no legal-rule engine is approved.
- Time-zone duration is NO-GO until the product supports explicit IANA zones, DST transitions and ambiguous/nonexistent local times.
- No application code, page metadata, sitemap, URLs or protected hero artwork was changed in this research batch.

## 2. Quantitative US keyword evidence

### 2.1 Third-party estimates available

| Keyword | US monthly searches | SEO difficulty | CPC (USD) | Trend/context | Source |
|---|---:|---:|---:|---|---|
| time calculator | 610,000 | 77 | $1.42 | KWS Trends estimated 12-month average; report says approx. -14% vs prior 12 months | https://www.kwstrends.com/keywords/us/time-calculator |
| time card calculator | 150,000 | 62 | $8.38 | KWS Trends estimate; approx. -6% YoY | https://www.kwstrends.com/keywords/us/time-card-calculator |
| time duration calculator | 110,000 | 28 | N/A | KWS Trends estimate; approx. -20% YoY | https://www.kwstrends.com/keywords/us/time-duration-calculator |
| hours calculator | 250,000 | N/A | $2.80 | KWS Trends related report; its Google Ads/Keyword Planner line separately shows 368,000 searches and $0.68–$4.91 top-of-page bid | https://www.kwstrends.com/keywords/us/hours-calculator |
| work hours calculator | 82,000 | 34 | $2.06 | Related keyword row under hours-calculator report; informational intent label | https://www.kwstrends.com/keywords/us/hours-calculator |
| hours worked calculator | 55,000 | 65 | $2.06 | Related keyword row under hours-calculator report | https://www.kwstrends.com/keywords/us/hours-calculator |
| weekly hours calculator | 5,400 | 65 | $2.35 | Related keyword row under hours-calculator report | https://www.kwstrends.com/keywords/us/hours-calculator |
| hours to decimal calculator | 11,000 | 19 | N/A | Related keyword row under hours-calculator report | https://www.kwstrends.com/keywords/us/hours-calculator |
| time to decimal calculator | 12,000 | 24 | N/A | Related keyword row under time-calculator report | https://www.kwstrends.com/keywords/us/time-calculator |
| time zone converter | 670,000 | 93 | N/A | KWS Trends estimate; approx. -35% vs prior 12 months; broad term, not a direct time-duration target | https://www.kwstrends.com/keywords/us/time-zone-converter |

**Important source caveats**
- KWS Trends is a third-party keyword report. Values are estimates, not verified InfoJano Search Console impressions or visits.
- Some pages also display Google Ads Keyword Planner figures; those differ from the provider's average-volume estimate and must not be blended as though they are the same series.
- CPC is an advertiser bid metric, not publisher RPM, ad revenue or a revenue forecast.
- Keyword difficulty is provider-specific. Do not compare it directly to another provider's KD.
- Search volume does not equal achievable traffic. Traffic potential for the new candidates is N/A unless a provider report explicitly supplies it.
- Ahrefs Keywords Explorer was queried in this research session for US candidate metrics but returned **Insufficient plan**. No Ahrefs volume/KD/CPC/traffic-potential data was retrieved.
- No usable Google Search Console export/property data was available in the inspected project context.

### 2.2 Military-time demand evidence — separate query pattern

A Military Time Converter competitor published US Google Ads/DataForSEO monthly averages retrieved 2026-10-01 for 48 exact queries of the form “HHMM military time”:
- 1700 military time: 49,500/month
- 1500, 1600, 1800, 1900: 40,500/month each
- The page reports 513,890 combined searches across those 48 listed time-specific queries, with afternoon/evening queries dominating.
- This is **not** the monthly volume for the generic keyword “military time converter”. It is a long-tail query set, and its methodology is competitor-published; treat as directional evidence only.
Source: https://miltimeconverter.com/most-searched-military-times/

A recent Ahrefs blog reports Clockify's military-time converter attracted an estimated 31,200 US organic visits/month at one point, and its decimal-hours converter around 2,400. These are third-party page-traffic estimates in a blog article, not InfoJano forecasts.
Source: https://ahrefs.com/blog/the-free-tools-seo-strategy/

### 2.3 Metrics still unavailable

| Candidate | US volume | KD | CPC | Traffic potential | Status |
|---|---|---|---|---|---|
| Business hours calculator | N/A | N/A | N/A | N/A | Need exact keyword-set validation |
| Decimal hours converter | N/A for exact head term; related “hours to decimal calculator” 11K and “time to decimal calculator” 12K as above | Related KDs 19/24 | N/A | N/A | Directional adjacent demand only |
| Military time converter | N/A for generic head term | N/A | N/A | N/A | Exact HHMM query pattern has published evidence, not generic converter metrics |
| Clock-out calculator | N/A | N/A | N/A | N/A | SERP reviewed qualitatively |
| Overtime calculator | N/A | N/A | N/A | N/A | Broad commercial/legal SERP; needs exact keyword report |
| Business days calculator | N/A in this batch | N/A | N/A | N/A | Existing page audit more important than new URL |

## 3. Existing InfoJano architecture and source audit

Source files were re-fetched from the repository. This is a source inspection, not browser QA.

| Existing page | Source-level functionality/content found | SEO/product implication |
|---|---|---|
| /time-calculator.html | Clock difference, add/subtract, Date + Time duration, break deduction, decimal output, history/copy/share. Date+Time uses device-local datetime input and JavaScript Date milliseconds. | Keep canonical utility for elapsed/time-duration intent. Do not create generic duplicate. |
| /elapsed-time-calculator-guide.html | Informational guide for clock intervals, overnight intervals, breaks, decimal hours and date-time mode. | Keep as companion guide; do not revise its protected hero without approval. |
| /work-hours-calculator.html | Multiple dated shift rows, unpaid breaks, overnight handling, daily/weekly totals, decimal hours, configurable daily threshold, simple earnings estimate, CSV, opt-in local save. | Single Work Hours/Time Card/Timesheet destination. Functional QA remains a separate gate. |
| /date-difference.html | Calendar date difference; years/months/weeks/days; inclusive option; working-day option; Saturday option; custom holidays; exact time totals and countdown/date helpers. Manual date text input uses DD-MM-YYYY. | US-first review should address MM/DD/YYYY discoverability/input expectations. |
| /business-days-calculator.html | Informational/landing content describes workday counting, weekends and custom holidays. Source inspection found no calculator form or calculation script; CTA leads to date-difference page. | Do not create another Business Days URL. Audit page promise, usefulness and CTA alignment before any content changes. |
| /days-between-dates-calculator.html | Existing sitemap page; title/canonical target days between dates. | Inspect page's actual calculator behavior and overlap before consolidation. |
| /date-duration-calculator.html | Existing sitemap page; title/canonical target years/months/days between dates. | Inspect behavior and overlap; avoid duplicate date-duration pages. |
| /add-subtract-date-calculator.html | Existing sitemap page; title/canonical target adding/subtracting days, weeks, months and years. | Keep distinct only if actual functionality and SERP intent justify it. |

Date-page follow-up source audit is not a recommendation to delete or rewrite any page. First compare page content, calculator functionality, internal links, canonicals, schema and sitemap entries.

## 4. US search intent and competitor landscape

### 4.1 Work Hours / Time Card / Timesheet

Observed competitor set:
- Toggl Time Card: https://toggl.com/online-tools/time-card-calculator
- QuickBooks Time Card: https://quickbooks.intuit.com/time-tracking/resources/time-card-calculator/
- ClockSlate: https://clockslate.com/time-card-calculator/
- Ordio Timesheet: https://www.ordio.com/en/tools/timesheet-calculator
- HourPeak: https://hourpeak.com/
- TimeCardCalculator.app: https://timecardcalculator.app/en/calculators/
- TimeMath.tools: https://timemath.tools/
- HiveDesk: https://www.hivedesk.com/calculators

Common observed features include weekly/biweekly layouts, 12/24-hour inputs, daily punches, breaks, daily/weekly totals, decimal time, optional pay/overtime, CSV/Excel/PDF/print and sometimes multiple shifts/day.

**Decision: GO on existing Work Hours page only.** The query families substantially overlap for a full weekly ledger. Map work hours calculator, time card calculator, timesheet calculator, hours worked calculator and weekly hours calculator to one well-built page rather than splitting URLs.

Current gaps to consider only after functional QA:
1. Workweek start configuration.
2. A two-week display with each fixed workweek calculated independently.
3. Multiple punch pairs within a day, if user demand supports it.
4. Print/PDF export.
5. Clear explanation of decimal hours and break treatment.

### 4.2 Business Hours Calculator

Observed competitor set:
- TimeDifference.io: https://timedifference.io/business-hours-calculator/
- FreeToolCabin: https://freetoolcabin.com/business-hours-calculator/
- Merondis: https://www.merondis.com/tools/date-time/business-hours-calculator
- ByteTools: https://bytetools.bytevancer.com/business-hours-calculator
- Redmoon: https://redmoonbusinessdatecalculators.com/calculators/business-hours/
- Adjacent business-hours/opening-hours product: Picktime https://www.picktime.com/free-tools/business-hours-calculator
- Adjacent business-days/work-hours product: Intious https://intious.com/tools/business-days-calculator/

Distinct job: calculate elapsed time only inside configured business schedules (e.g. SLA response windows), not a person's actual work shifts and not simply a count of business days.

Potential MVP specification:
- Start and end date/time.
- Select operating weekdays.
- Per-day open and close windows; support split windows where justified.
- Optional daily break/closed interval.
- User-entered holiday/closure dates; do not silently assume federal holidays apply to every employer.
- Clear endpoint inclusion and timezone assumptions.
- Output business minutes/hours plus a transparent day-by-day breakdown.
- Handle intervals spanning weekends, overnight schedules and partial opening days with explicit rules.

**Decision: HOLD — strongest distinct new candidate.** Before coding, obtain a validated US keyword cluster, inspect 3–5 direct SERPs in a controlled US search, and settle edge-case semantics. Do not claim SLA compliance or guarantee contractual response-time calculations.

### 4.3 Decimal Hours Converter

Observed competitor set:
- Clockspot: https://www.clockspot.com/tools/decimal-hours-converter
- Ordio: https://www.ordio.com/en/tools/decimal-hours-calculator
- TimoDesk: https://timodesk.com/tools/decimal-hours-calculator
- CalcuTools: https://calcutools.com/time/decimal-hours-calculator/
- TimeToDecimal: https://timetodecimal.app/
- Clockify page traffic example: cited in Ahrefs free-tools article above.

Distinct job: bidirectional conversion between HH:MM / hours+minutes / minutes and decimal hours, potentially with batch paste and selectable precision. Existing InfoJano calculators output decimal hours but do not constitute a dedicated general batch converter.

Product safeguards:
- Explain 7:30 = 7.50 decimal hours, not 7.30.
- Make rounding precision explicit.
- Distinguish display rounding from payroll/punch rounding.
- Batch mode should preserve row mapping and report invalid entries.
- Avoid implying payroll compliance.

**Decision: HOLD.** Small, clear utility opportunity; prioritize only after exact US metrics and SERP gap are established.

### 4.4 Military Time Converter

Observed competitor set:
- Clockify military-time converter: https://clockify.me/military-time-converter
- iSObj: https://isobj.com/tools/military-time-converter/
- TimeAndDuration: https://timeandduration.com/tools/military-time-calculator
- Military Time Converter research page: https://miltimeconverter.com/most-searched-military-times/
- OnTheClock's military-time keyword evidence: https://ahrefs.com/websites/ontheclock.com

Distinct job: convert 12-hour AM/PM and 24-hour/military formats in both directions; provide a compact reference chart.

Product safeguards:
- Accept leading-zero forms such as 0705.
- Validate 00:00–23:59.
- Handle noon and midnight carefully (12 AM = 00:00; 12 PM = 12:00).
- Avoid implying timezone conversion.
- Mobile-first single-field conversion and copy action; chart as supporting content.

**Decision: HOLD.** Generic exact head-term volume/KD/CPC not validated in this batch. Long-tail exact-time demand and competitor page traffic suggest a potentially useful lightweight tool, but do not overstate it.

### 4.5 Clock-Out / Clock-In Calculator

Observed competitors:
- Shift Ledger: https://www.scheduleledger.com/clock-out-calculator/
- HourPunch: https://hourpunch.com/clock-out-calculator
- WorkHourTools: https://workhourtools.com/calculators/clock-out-calculator
- MyClockOut: https://www.myclockout.com/clock-in-calculator

Distinct job: calculate target clock-out time from start time + desired paid hours + unpaid break, or reverse-calculate start time from desired finish.

**Decision: HOLD as a mode inside Work Hours first.** Do not create another URL until independent query demand and a clearly distinct SERP are established.

### 4.6 Overtime / time-and-a-half / double-time

Observed competitors:
- Toggl: https://toggl.com/online-tools/overtime-calculator
- RightSums: https://rightsums.com/tools/overtime-calculator
- QuickBooks and HiveDesk calculators (above).

US DOL guidance: covered, non-exempt employees generally receive at least 1.5× regular rate for hours over 40 in a fixed workweek; exemptions and state rules apply; hours cannot be averaged across two weeks. Source: https://www.dol.gov/agencies/whd/overtime/

Federal holidays published by OPM apply to federal employee schedules; private employers, state rules and individual workplaces may differ. Source: https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/

**Decision: HOLD / high risk.** No universal legal overtime engine. If ever built, limit initial product to user-configured estimates, clearly label assumptions, distinguish gross from net pay and do not state what an employer legally owes without maintained jurisdictional review.

### 4.7 Date Difference / Business Days / Date Duration

Observed competitor set:
- timeanddate workdays: https://www.timeanddate.com/date/workdays.html
- CalculatorSoup date difference: https://www.calculatorsoup.com/calculators/time/date-difference-calculator.php
- Intious: https://intious.com/tools/business-days-calculator/
- BiznTools: https://bizntools.com/time-pay/business-days-calculator
- ClockSlate: https://clockslate.com/business-days-calculator/
- WorkHourMath: https://workhourmath.com/work-days-calculator.html
- OPM federal holidays: https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/

**Decision: NO-GO for another generic URL.** Existing date-difference/business-days/date pages already occupy this territory. Audit actual utility, DD-MM-YYYY manual input vs US MM/DD/YYYY expectations, content overlap, canonicals and internal linking before changing anything.

### 4.8 Date & Time Duration / Time Zone Duration

- Generic date-time duration overlaps current Time Calculator Date + Time mode and its guide. **NO-GO separate generic URL.**
- Cross-timezone duration is a different job, but current product is device-local. It requires IANA timezone selection, daylight-saving transitions, ambiguous/nonexistent local times, date-line crossings and robust test fixtures. **NO-GO until product support exists.**

## 5. Country and language screening

| Priority | Market | Language/script and query hypotheses | Local conventions / product implications | Evidence status |
|---|---|---|---|---|
| P1 | US | English: time calculator, work hours calculator, time card calculator, business hours calculator, decimal hours, military time | MM/DD/YYYY, AM/PM default with 24-hour option, USD, fixed workweek, federal vs state/private holiday distinction | Strongest available third-party keyword evidence for time/time-card/work-hours; other clusters incomplete |
| P2 | UK | English: hours calculator, timesheet calculator, business hours calculator | DD/MM/YYYY, 24-hour examples, GBP, bank holidays and UK employment rules | Qualitative only; no new market metrics validated |
| P2 | India | English, Hindi/Devanagari, Bengali/Bengali script; work hours/time conversion terms | DD/MM/YYYY, 12/24-hour familiarity, INR, state and employer holiday calendars | Some broad hours report estimates India as a large market; tool-specific new-cluster demand unvalidated |
| P2 | Canada | English/French: work hours calculator / calculateur d'heures de travail | CAD, province-specific rules/holidays, local timezone differences | Qualitative only |
| P2 | Australia | English: timesheet, shift hours, business hours | DD/MM/YYYY, AUD, state/territory holidays and DST | Qualitative only |
| P3 | Bangladesh | Bengali/English: কাজের ঘণ্টা হিসাব, কাজের সময়, সময় রূপান্তর | DD/MM/YYYY, BDT, organization-specific weekend (often Friday/Saturday) | Qualitative hypothesis only; no keyword metrics |
| P3 | Other English/Asian markets | Philippines, Malaysia, New Zealand, South Africa and UAE may be relevant depending on tool | Local date, currency, workweek and language must be validated | Screened as hypotheses, not ranked by verified tool demand |

**Localization rule:** US-first does not mean every page should be duplicated for each country. Create a localized page only where a distinct query set, SERP and local utility justify it. No country clone is approved.

## 6. Audience and jobs-to-be-done

| Segment | Primary job | Likely device/context | Product value |
|---|---|---|---|
| Hourly/shift workers | Add shifts, subtract unpaid breaks, calculate weekly paid time | Mobile during/after shift; desktop for payroll review | Fast multi-shift entry, clear daily and weekly totals |
| Small business managers | Sum employee schedules and review hours | Desktop/tablet | CSV/print, configurable workweek, transparent assumptions |
| Customer support/SLA operators | Count business time between ticket start and resolution | Desktop | Configurable operating windows, closures and audit breakdown |
| Payroll/bookkeeping users | Convert clock time to decimal hours | Desktop spreadsheet workflow | Batch conversion, precision and CSV |
| Students, healthcare, military-adjacent users | Convert 12h/24h times | Mobile quick lookup | Instant bidirectional conversion and reference chart |
| Freelancers/contractors | Calculate net hours and decimal totals | Mobile + desktop | Privacy-first client-side processing and export |

These are product/use-case hypotheses based on observed query and competitor patterns, not measured audience-size estimates.

## 7. InfoJano differentiation priorities

1. **Accuracy first:** publish assumptions beside results; explicit overnight, endpoint, break and rounding semantics.
2. **Privacy:** client-side processing where feasible; state clearly whether data is stored locally and provide clear-data controls.
3. **No signup / no paywall for core calculation:** retain the simple utility proposition.
4. **Mobile usability:** large inputs, keyboard-appropriate time/date controls, no horizontal overflow.
5. **Accessible results:** labels, keyboard support, screen-reader announcements and non-color-only status.
6. **Useful exports:** CSV/print only where they solve a real workflow.
7. **US conventions:** MM/DD/YYYY examples, AM/PM default with 24-hour support, USD when pay is included.
8. **No unsupported claims:** no payroll/legal guarantees, no timezone conversion claim without timezone engine, no false holiday assumptions.
9. **Distinct page purpose:** each URL must satisfy a different user job and SERP; do not make pages just to target synonyms.

## 8. Prioritized opportunity register

| Priority | Opportunity | Decision | Next gate |
|---:|---|---|---|
| 1 | Existing Work Hours / Shift Calculator | GO existing page only | Finish WH-001–WH-009 functional/CSV/localStorage QA and browser QA |
| 2 | Business Hours Calculator | HOLD; strongest new candidate | Get US keyword metrics and finalize exact schedule/holiday/endpoint semantics |
| 3 | Decimal Hours Converter | HOLD | Validate exact keyword cluster and batch-conversion SERP gap |
| 4 | Military Time Converter | HOLD | Validate generic query metrics and assess standalone vs embedded converter |
| 5 | Clock-Out mode | HOLD inside Work Hours first | User need and mode-level scope; no separate URL yet |
| 6 | Existing date/business-days pages | Audit only | Inspect remaining source files and compare intent, utility, canonicals, internal links |
| 7 | Overtime calculator | HOLD / high risk | Legal-source maintenance and product/legal review required |
| 8 | Generic Date & Time Duration page | NO-GO | Existing calculator + guide overlap |
| 9 | Time-zone duration page | NO-GO until engine exists | IANA zones, DST, ambiguous/nonexistent local times and test coverage |

## 9. Work Hours US product scope and legal safeguards

Existing page already supports multiple dated shifts, unpaid breaks, overnight handling, daily/weekly totals, decimal output, a configurable daily threshold, simple earnings estimate, CSV and opt-in local storage.

Before expanding features:
1. Complete the existing WH-001–WH-009 test plan.
2. Verify overnight attribution, week boundaries, break validation, decimal precision, CSV escaping and localStorage clear behavior.
3. Consider week-start configuration and biweekly display only after QA; calculate each fixed workweek independently.
4. Consider print/PDF only if it solves a user need and is tested.
5. Keep statutory/state overtime out of scope until maintained legal research and approval exist.

## 10. Research limitations and confidence

- Confidence: **medium** for observed competitor feature/intent separation; **low-to-medium** for market sizing; **low** for monetization and new-candidate demand.
- KWS Trends US reports supplied estimates for broad time/time-card/hours clusters; not every exact candidate has metrics.
- Ahrefs API returned “Insufficient plan” in this session.
- No usable GSC report/export was available.
- No controlled, location-verified US top-10 SERP export was produced in this batch; competitor review is qualitative public-page inspection.
- Traffic potential for Business Hours, Decimal Hours, Military Time and Clock-Out remains N/A.
- CPC is not publisher RPM. Do not derive revenue from CPC × search volume.
- No browser, mobile/desktop visual QA or runtime tests were performed as part of this research batch.

## 11. Sources and access date

All public pages below were reviewed or used as research evidence on 2026-11-15 unless a source explicitly states an earlier data extraction date.

### Keyword/market evidence
- KWS Trends — US time calculator: https://www.kwstrends.com/keywords/us/time-calculator
- KWS Trends — US time card calculator: https://www.kwstrends.com/keywords/us/time-card-calculator
- KWS Trends — US time duration calculator: https://www.kwstrends.com/keywords/us/time-duration-calculator
- KWS Trends — US hours calculator and related keywords: https://www.kwstrends.com/keywords/us/hours-calculator
- KWS Trends — US time zone converter: https://www.kwstrends.com/keywords/us/time-zone-converter
- Military time query dataset: https://miltimeconverter.com/most-searched-military-times/
- Ahrefs free-tools strategy and Clockify converter traffic examples: https://ahrefs.com/blog/the-free-tools-seo-strategy/

### Competitors and primary safeguards
- Work/time card: Toggl, QuickBooks, ClockSlate, Ordio, HourPeak, TimeCardCalculator.app, TimeMath.tools, HiveDesk (URLs in §4.1).
- Business hours: TimeDifference.io, FreeToolCabin, Merondis, ByteTools, Redmoon, Picktime (URLs in §4.2).
- Decimal: Clockspot, Ordio, TimoDesk, CalcuTools, TimeToDecimal (URLs in §4.3).
- Military: Clockify, iSObj, TimeAndDuration, Military Time Converter, OnTheClock (URLs in §4.4).
- Clock-out: Shift Ledger, HourPunch, WorkHourTools, MyClockOut (URLs in §4.5).
- Date/business days: timeanddate, CalculatorSoup, Intious, BiznTools, ClockSlate, WorkHourMath (URLs in §4.7).
- US DOL overtime: https://www.dol.gov/agencies/whd/overtime/
- OPM federal holidays: https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/
- Google Search Central spam policies: https://developers.google.com/search/docs/essentials/spam-policies

## 12. Dated research work log

### 2026-11-15 — Consolidated US-first research batch
- Request: user asked to complete as much related research in one batch as possible and save findings in files to avoid repeated sessions.
- Re-read: latest handoff, work-tracking standard, research standard, research template, tool index, elapsed-time README/RESEARCH, Work Hours README/RESEARCH.
- Inspected: existing time calculator, work-hours calculator, date-difference page, business-days page, days-between-dates page, date-duration page, add/subtract-date page and sitemap references.
- Research: refreshed US keyword evidence; reviewed business-hours, decimal-hours, military-time, clock-out, overtime and date/business-days competitor sets; attempted Ahrefs Keywords Explorer for US candidate metrics.
- Result: Ahrefs returned “Insufficient plan”; no Ahrefs metrics retrieved. KWS Trends and competitor-published data used only with provider/source caveats.
- Saved: this consolidated dossier. Handoff and index should link to this file after commit.
- Tests: research/source inspection only; no browser QA, functional test, deployment or application change.
- Pending: complete remaining date-page source audit; validate exact candidate keyword sets through an authorized data source; complete Work Hours QA; perform remaining browser QA when available.
- Protected areas preserved: homepage hero, Elapsed Time Calculator hero, existing guide hero and ID Card Print Studio hero were not changed.
