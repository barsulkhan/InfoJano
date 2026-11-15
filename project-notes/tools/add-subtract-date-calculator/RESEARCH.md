# Add or Subtract Date Calculator — SEO Research

Research status: REVISE / GO for improving the existing URL with a working calculator; no new URL approved.
Last researched: 2026-11-15
Tool page: https://infojano.com/add-subtract-date-calculator.html
Work tracker: README.md

## 1. Executive summary
- Problem solved: calculate a future or past calendar date from a chosen start date using years, months, weeks and days.
- Primary user: people planning deadlines, reminders, returns, subscriptions, billing cycles, project dates and anniversaries.
- Market: US English is the initial page language/market; date input uses the browser-native date control, output uses US English date wording.
- Main recommendation: retain the existing canonical URL and add the actual calculator to it. Do not create another date-calculator URL.
- Confidence: medium for feature/intent fit; low for quantified search demand and revenue because no free, reliable keyword metrics or Search Console export were available.

## 2. Scope and user intent
- Core job: answer “what date is N days/weeks/months/years before or after this date?”
- Inputs: start date, add/subtract direction, whole nonnegative years/months/weeks/days.
- Output: resulting calendar date, weekday, ISO date and calculation summary.
- Calendar rule: years/months applied as a combined calendar-month offset; clamp to the last valid day of the target month; weeks/days then applied as exact UTC calendar-day steps.
- Not in scope: business-day offsets, federal holiday presets, timezone/time-of-day, legal deadline rules.

## 3. Country and language opportunity matrix

| Priority | Country | Code | Language(s)/script | Candidate queries | Demand evidence | CPC/currency | Difficulty | Notes |
|---|---|---|---|---|---|---|---|---|
| P1 | United States | US | English | add days to date; date calculator; subtract days from date; what date is 30 days from now | Live SERP competitor pages; no independent volume source | N/A USD | N/A | US-first wording and month/day/year examples; native date input |
| P2 | United Kingdom | GB | English | add days to a date; date calculator; subtract days | Qualitative SERP only | N/A GBP | N/A | Browser-native input; avoid US-only holiday assumptions |
| P2 | Canada | CA | English/French | add days to date; calcul date; ajouter des jours à une date | Not validated | N/A CAD | N/A | French localization would need separate content and QA |
| P2 | Australia | AU | English | add days to date; date calculator | Not validated | N/A AUD | N/A | Local spelling/date conventions require separate review |
| P2 | India | IN | English/Hindi/Bengali | date calculator; add days to date; तारीख में दिन जोड़ें; তারিখের সাথে দিন যোগ | Not validated | N/A INR | N/A | Do not publish translated doorway pages without localization |
| P3 | Bangladesh | BD | Bengali/English | তারিখ যোগ বিয়োগ ক্যালকুলেটর; date calculator | Not validated | N/A BDT | N/A | Bengali UI/content requires separate demand and QA |

## 4. Keyword clusters

| Cluster | Keyword | Country | Language | Intent | Monthly volume | KD | CPC | Traffic potential | Trend | Source/date |
|---|---|---|---|---|---:|---:|---:|---:|---|---|
| Date offset | add days to date | US | English | Tool | N/A | N/A | N/A | N/A | N/A | SERP review 2026-11-15 |
| Date offset | date calculator | US | English | Tool | N/A | N/A | N/A | N/A | N/A | SERP review 2026-11-15 |
| Date offset | subtract days from date | US | English | Tool | N/A | N/A | N/A | N/A | N/A | SERP review 2026-11-15 |
| Long-tail | what date is 30 days from today | US | English | Immediate answer/tool | N/A | N/A | N/A | N/A | N/A | SERP review 2026-11-15 |
| Long-tail | what date was 90 days ago | US | English | Immediate answer/tool | N/A | N/A | N/A | N/A | N/A | SERP review 2026-11-15 |

### SERP features and ranking page types
- Search results show direct interactive calculators and date-calculation reference pages.
- Intent is predominantly tool/action oriented; a static article alone is insufficient.
- Search result snippets may answer simple offsets directly; a calculator should support arbitrary start dates and mixed calendar units.

## 5. SERP review

| Country | Keyword | Observed top pages | SERP features | Dominant intent | Opportunity/gap | Checked date |
|---|---|---|---|---|---|---|
| US | date calculator add/subtract | Timeanddate, DateMath, DayOffset, CalculatorsHub, TrackYourYear | Calculator snippets/pages, FAQs and examples | Interactive tool | Existing InfoJano page lacked the promised calculator; close that product gap without a duplicate URL | 2026-11-15 |
| US | add days to date | DayOffset, DateMath, CalculatorsHub | Quick offsets, date input and result | Interactive tool | Keep simple, fast, browser-local calculator with clear month-end rule | 2026-11-15 |

## 6. Competitor landscape

| Competitor | URL | Direct/indirect | Market | Features observed | Strengths / gaps | Evidence/date |
|---|---|---|---|---|---|---|
| timeanddate | https://www.timeanddate.com/date/ | Direct | Global | Date to date, add/subtract calendar dates and business-date tools | Established breadth; InfoJano can offer a focused page | Search result 2026-11-15 |
| DateMath | https://datemath.app/tools/date-calculator | Direct | US/global | Add/subtract days, weeks, months, years; date difference; month-end examples | Detailed semantics and broad tool set; InfoJano should clearly explain its own rule | Search result 2026-11-15 |
| DayOffset | https://dayoffset.com/ | Direct | US | Add/subtract, quick presets, date difference, copy/calendar actions | Good fast workflow; InfoJano implements quick presets and copy | Search result 2026-11-15 |
| CalculatorsHub | https://calculatorshub.us/time/date-calculator/ | Direct | US | Multiple date units, business-day option and difference mode | Broad combined calculator; InfoJano avoids scope creep into holidays/business days | Search result 2026-11-15 |
| TrackYourYear | https://trackyouryear.com/tools/date-add | Direct | Global | Years/months/weeks/days and month-end clamp | Focused tool; similar arithmetic semantics | Search result 2026-11-15 |

## 7. Audience segments
| Segment | Market/language | Need | Device/context | Confidence |
|---|---|---|---|---|
| Personal planning | US English | reminders, trips, anniversaries | Mobile/desktop | Inferred from intent |
| Work/project planning | US English | due dates, milestones, project offsets | Desktop/mobile | Inferred from intent |
| Billing/subscription planning | US English | renewal and billing dates | Mobile/desktop | Inferred from intent |

## 8. Monetization and advertiser value
- CPC by keyword/country: unavailable; no paid keyword tools used.
- Advertiser categories may include productivity, project management and calendar software, but this is a hypothesis.
- Publisher RPM/revenue cannot be inferred from SERP presence or CPC; no forecast is made.
- Keep page useful and lightweight; do not add intrusive ad assumptions.

## 9. InfoJano differentiation plan
- Fix the primary product mismatch: calculator now exists on the landing page itself.
- Browser-local arithmetic; no date data is uploaded or stored.
- Explicit month-end clamp rule and visible weekday result.
- Quick day presets and copy action.
- Do not claim federal holiday/business-day arithmetic or legal deadline compliance.
- Preserve existing page hero, design and canonical URL.

## 10. Recommended SEO/content architecture
| Page/locale | Target cluster | Search intent | Unique value | Internal links | Priority |
|---|---|---|---|---|---|
| /add-subtract-date-calculator.html | add/subtract date offsets | Interactive tool | Functional calendar offset tool and month-end explanation | Date Difference, Days Between Dates, Business Days | P1 |

## 11. Go / revise / no-go decision
- Decision: REVISE / GO.
- Rationale: existing page has a clear date-offset intent and a broken destination mismatch; current main date calculator did not expose add/subtract mode.
- Approved scope: implement an offset calculator inside the existing URL, no new URL.
- Not approved: automatic holiday calendars, business-day arithmetic, new locale clones, separate duplicate date calculator.
- User approval needed: none for this corrective implementation within the existing page's stated purpose.

## 12. Sources, methods and limitations
| Source/provider | URL | Market | Observation | Access date | Reliability/limitations |
|---|---|---|---|---|---|
| timeanddate | https://www.timeanddate.com/date/ | Global | Offers date difference and add/subtract date calculators | 2026-11-15 | Direct competitor page surfaced in web search |
| DateMath | https://datemath.app/tools/date-calculator | US/global | Calendar offset units and month-end rules | 2026-11-15 | Direct competitor page surfaced in web search |
| DayOffset | https://dayoffset.com/ | US | Add/subtract, presets, copy result | 2026-11-15 | Direct competitor page surfaced in web search |
| CalculatorsHub | https://calculatorshub.us/time/date-calculator/ | US | Date offset and difference modes | 2026-11-15 | Direct competitor page surfaced in web search |
| TrackYourYear | https://trackyouryear.com/tools/date-add | Global | Date offset and month-end clamp | 2026-11-15 | Direct competitor page surfaced in web search |

Limitations: free SERP review is qualitative, not exhaustive; no Google Search Console export or reliable free country-level volume/KD/CPC data was available. Do not represent N/A as zero demand.

## 13. Research work log
### 2026-11-15 — Existing page correction research
- Countries/languages screened: US, UK, Canada, Australia, India, Bangladesh.
- Keywords/clusters: date calculator, add days to date, subtract days from date, date offset, 30 days from today, 90 days ago.
- Competitors: timeanddate, DateMath, DayOffset, CalculatorsHub, TrackYourYear.
- Findings: competitors offer interactive date offset tools; InfoJano landing page promised the feature but CTA linked to a calculator that did not provide it.
- Decision: implement on existing canonical page; no new URL.
- Unknowns: reliable volume/KD/CPC, Search Console query performance, ranking potential.
