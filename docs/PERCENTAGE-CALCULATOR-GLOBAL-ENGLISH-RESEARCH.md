# InfoJano Percentage Calculator — Global English Market Research

Research date: 2026-11-16
Scope: English-language users across multiple countries. English only; no translated interfaces or localized language pages.
Status: Initial desk research, not a quantitative market-size or keyword-volume study.

## 1. Owner decisions and guardrails

- Target a global audience, not only the United States.
- The website, calculator UI, guides, FAQs, metadata, and support copy remain English-only.
- Consider country-specific search intent, examples, number conventions, and use cases without creating non-English versions.
- Preserve the approved Percentage Calculator design, Hero, Header, logo, homepage, and unrelated tools.
- Do not claim country traffic shares, keyword volumes, or market sizes without reliable data.

## 2. Countries and market hypotheses

These are research hypotheses and audience segments to validate, not proven demand rankings.

| Market | English-first audience angle | Example use cases to investigate | Notes / validation needed |
|---|---|---|---|
| United States | General consumer, student, retail, business | discounts, sales tax, tips, salary changes, business growth | Competitive and broad baseline market |
| Canada | English-speaking consumers, students, small businesses | discounts, tax-inclusive/exclusive price checks, salary and budget changes | Canada also has French-speaking users, but no French UI will be built per owner decision |
| Australia | Consumers, students, small businesses | GST-related price checks, discounts, wage and revenue changes | Keep examples educational; do not present tax advice |
| United Kingdom | Consumers, students, retail and finance users | VAT-inclusive/exclusive price checks, discounts, pay rises, inflation comparisons | English-first market |
| Germany, France, Netherlands, Nordics and other European markets | People comfortable searching for English tools; international students and professionals | percentage change, margin/discount, growth and comparison | Do not assume all residents prefer English; validate actual English query demand |
| Brazil | English-searching professionals, students, cross-border commerce | discounts, price changes, exchange-rate percentage moves, business metrics | No Portuguese interface; English search audience only |
| Russia | English-searching professionals, students and international users | percentage change, comparison, discounts, growth | Access, platform availability and search-channel feasibility require validation |
| China | English-searching professionals, students and international users | percentage change, comparison, business metrics | Google access/search behavior differs; validate realistic discovery channels and site reachability |

## 3. Competitor scan (public pages reviewed 2026-11-16)

| Competitor | Observed public feature positioning | Implication for InfoJano |
|---|---|---|
| CalculatorSoup | Separate percentage, increase, decrease, change and difference calculators; also tax/tip-related calculators | Related task coverage and strong explanatory pages matter |
| OmniCalculator | Broad calculator library; percentage page covers common percentage questions | Compete on clarity, speed, focused UX and useful long-tail pages |
| W3Schools | Four percentage tasks on one page, instant results and formula explanation | Formula transparency and immediate feedback are expected patterns |
| Utiliby | Multi-part percentage suite including reverse, successive changes, CSV and print | Batch/history/export can differentiate a focused tool |
| CalculatorSoup alternative page | Four kinds of percentage questions with worked guidance | Educational content supports user confidence and search relevance |
| ToolkitJar / Gera Tools / other newer tools | Multi-mode suite, step-by-step formulas, local/browser privacy claims | Feature parity is rising; avoid adding features without user value |

Competitor pages reviewed:
- https://www.calculatorsoup.com/calculators/percent-calculators.php
- https://www.omnicalculator.app/percentage-calculator
- https://www.w3schools.com/tools/tool_percentage_calculator.php
- https://utiliby.com/tools/everyday-calculators/percentage-calculator/
- https://calculator-soup.com/percentage-calculator/
- https://toolkitjar.com/tools/percentage-calculator
- https://geratools.com/percentage-calculator
- https://any-toolkit.com/percentage-calculator

This is a feature scan of visible public pages, not a full usability, traffic, ranking, or conversion audit.

## 4. Initial keyword clusters (qualitative; volumes not measured)

Core:
- percentage calculator
- percentage change calculator
- percent increase calculator
- percent decrease calculator
- percentage difference calculator
- reverse percentage calculator
- calculate percentage change between two numbers

Task-specific:
- discount percentage calculator
- percentage off calculator
- price increase calculator
- percentage growth calculator
- percentage decrease calculator
- percentage change formula
- how to calculate percentage increase
- how to calculate percentage difference

Business / education:
- sales growth percentage calculator
- revenue growth calculator
- profit margin percentage calculator (separate formula intent; avoid conflating with percentage change)
- grade percentage calculator
- test score percentage calculator
- month over month percentage change
- year over year percentage change

Country-modified discovery tests:
- percentage calculator Canada
- percentage calculator Australia
- percentage calculator UK
- percentage calculator Germany / Europe
- percentage calculator Brazil
- percentage calculator Russia
- percentage calculator China

These are candidate phrases for validation, not verified top keywords or volume estimates. Country modifiers may have low demand; compare them against generic English queries in each market.

## 5. Localization without translation

Owner decision: English only. Country-aware usability may still include:
- Correctly parse decimal point and decimal comma where unambiguous; avoid silently misreading ambiguous input.
- Keep a clear, consistent default display format and consider an explicit number-format preference only if research supports it.
- Test CSV delimiter and decimal conventions with spreadsheet applications; CSV interoperability is not guaranteed by changing display formatting alone.
- Use relevant English examples: sales tax/GST/VAT as arithmetic examples, discounts, salary changes, revenue growth, grade scores.
- Do not make tax/legal/financial advice claims. Label examples as calculations, not jurisdictional guidance.
- Use country-specific pages only when there is unique, useful English content; avoid thin duplicate doorway pages.

## 6. Search measurement plan

Google Trends reports normalized, sampled interest (0–100), not absolute search counts. It can compare interest by geography and time, but must not be presented as monthly search volume.
- Compare a consistent set of core phrases in Trends with Worldwide and individual target countries.
- Record date range, geography, search type, category, and exact query/topic selection.
- Use Search Console after pages receive impressions to assess actual country, query, CTR, and position data.
- Use a reputable keyword platform only for volume estimates; record its country database, date, and whether figures are estimates.
- Separate observed data from hypotheses and recommendations.

Google documentation:
- Trends methodology and normalized values: https://newsinitiative.withgoogle.com/resources/trainings/google-trends/basics-of-google-trends/
- Google Trends comparison help: https://support.google.com/trends/answer/17261722?hl=en

## 7. Initial product recommendations (hypotheses)

Priority A — protect and polish the current core:
1. Keep the three existing modes: Percentage Change, Reverse %, Percentage Difference.
2. Keep batch calculations, history, copy and CSV export; these are useful differentiators.
3. Ensure every mode has concise English instructions, examples, formula and clear edge-case handling.
4. Make the number-input behavior explicit and safe across decimal conventions.

Priority B — add only after evidence:
1. Dedicated discount / percent-off workflow if keyword and user data support it.
2. Dedicated percent-of and what-percent-of modes if search demand and competitor gap justify them.
3. Month-over-month / year-over-year business examples or workflow only if search intent supports it.
4. A downloadable batch CSV template if user behavior indicates a need.

Do not expand into VAT/GST calculators, profit margin calculators, currency converters, or tax tools merely because they contain percentages; those are distinct intents and may require separate formulas or regulatory caveats.

## 8. Market prioritization — provisional

Recommended research order, not a claim of traffic ranking:
1. US, UK, Canada, Australia — English search ecosystems and strong relevance for a single English product.
2. English-query audiences in Germany, Netherlands and other European countries — validate country-level interest.
3. Brazil — test English query demand and international business/student use cases.
4. Russia and China — validate discovery channels, reachability, and English-query demand before investment.

## 9. Gaps and next research tasks

- [ ] Collect a consistent Google Trends comparison for core keywords across target countries and save exact settings/screenshots or export.
- [ ] Obtain country-level keyword volume estimates from a credible keyword database; do not infer from Trends.
- [ ] Review InfoJano Search Console country/query data if connected or supplied by owner.
- [ ] Inspect competitor page structure, mobile UX, page speed, accessibility and actual calculator behavior in a browser.
- [ ] Map competitor features against InfoJano and identify evidence-backed gaps.
- [ ] Create a prioritized roadmap with impact, effort, confidence, and evidence.
- [ ] Validate number input and CSV interoperability in target locales without translating the interface.

## 10. Sources and limitations

Sources accessed 2026-11-16:
- Competitor pages listed in Section 3.
- Google News Initiative, Google Trends basics: https://newsinitiative.withgoogle.com/resources/trainings/google-trends/basics-of-google-trends/
- Google Trends Help, compare search interest: https://support.google.com/trends/answer/17261722?hl=en

Limitations:
- No reliable country-level monthly search volumes were obtained in this initial pass.
- No country traffic share or audience size was asserted.
- Competitor claims describe visible page features only; no independent traffic, ranking, or conversion data was obtained.
- Russia and China market access and search-channel suitability remain unverified.


## 11. Country demand evidence — second pass (2026-11-16)

### 11.1 Public third-party keyword estimate for the head term

A public KWS Trends report for the exact phrase **"percentage calculator"** reports:
- Worldwide: approximately 1,900,000 average monthly searches across 121 countries.
- United States: approximately 1,000,000 (53%).
- United Kingdom: approximately 130,000 (6.8%).
- Australia: approximately 40,000 (2.1%).
- Germany: approximately 40,000 (2.1%).
- Canada: approximately 22,000 (1.2%).
- Spain: approximately 18,000 (0.9%).
- Italy: approximately 18,000 (0.9%).
- The remaining 111 countries together: approximately 200,000 (11%).

Source: https://www.kwstrends.com/keywords/us/percentage-calculator (accessed 2026-11-16; report labels figures as average monthly searches and country shares).

**Important limitations:** This is a third-party estimate, not a direct Google Keyword Planner export. The report does not provide a transparent per-country methodology in the visible result, and country list is truncated. The data is for the head term only, not the entire keyword cluster. Do not treat these figures as audited or guaranteed traffic. Brazil, Russia and China are not individually listed in the visible top-country table; this does NOT mean they have zero searches.

### 11.2 What this suggests (interpretation, not measured fact)

- US is the largest single market in this particular third-party head-term estimate.
- UK, Australia, Germany and Canada appear as meaningful secondary markets in the same estimate.
- Canada is smaller than UK/Australia/Germany in this report for this exact phrase, but it should remain in the target set because the product is English-only and the market has an English-speaking audience.
- The report does not validate the English-query opportunity in Brazil, Russia or China. Those markets remain exploratory rather than priority markets until country-level English query data is obtained.
- Search-volume estimates alone do not predict InfoJano traffic; ranking difficulty, SERP features, competition, CTR, product quality and site authority also matter.

### 11.3 Search discovery context (not calculator demand)

The Kepios / DataReportal Digital 2026 report search-engine-use chart (source report published October 2025; GWI Q2 2025 survey) reports the percentage of internet users aged 16+ who use search engines monthly:
- Brazil 92.9%
- Canada 89.7%
- UK 87.8%
- Australia 87.6%
- Germany 87.3%
- France 83.8%
- Russia 70.9%
- China 61.1%

Source: https://learn.meltwater.com/rs/814-WJU-189/images/2026_Kepios_Digital_Global_Overview_Report.pdf?version=0

These are general search-engine usage rates, NOT percentage-calculator keyword volumes, not Google-only shares, and not evidence that users in these markets search in English. They only provide broad context about search as a discovery behavior. Survey methodology and audience composition can affect comparisons.

### 11.4 Reliable next measurement step

Google's official Keyword Planner can provide average monthly search estimates for a selected location and keyword set, but requires a Google Ads account setup with billing information. It allows keyword ideas and location-specific historical metrics:
- https://support.google.com/google-ads/answer/7337243?hl=en
- https://support.google.com/google-ads/answer/3022575?hl=en

Google Trends is useful for relative country interest and seasonality, but it is sampled and normalized to 0–100, not absolute volume:
- https://newsinitiative.withgoogle.com/resources/trainings/google-trends/understanding-the-data/

To complete the quantitative comparison, use the same English keyword set and date range for each market in Keyword Planner (or a clearly identified equivalent data provider). Keep exact match/location/language/network settings consistent. Record missing or low-volume results as such; never convert a Trends index into monthly searches.

### 11.5 Revised provisional priority

1. **Tier 1 validation:** US, UK, Australia, Canada — strongest immediate fit for a single English interface and visible third-party head-term demand.
2. **Tier 2 validation:** Germany, France, Netherlands and other European markets — test English query demand separately; broad internet search use does not prove English keyword demand.
3. **Tier 3 exploration:** Brazil — strong general search-engine use in the cited survey, but English percentage-calculator query volume remains unverified.
4. **Tier 3 / feasibility first:** Russia and China — English query demand, search platform distribution, connectivity and site reachability must be checked before investment.

This tiering is a planning recommendation based on product-language fit plus limited external indicators, not a definitive market-size ranking.


## 12. Core keyword evidence — third pass (2026-11-16)

### 12.1 Directly reported US keyword estimates

A current public KWS Trends report for the exact phrase **"percentage change calculator"** (United States, Google Web Search; report updated 2026-11-09) shows:
- Average monthly searches: approximately 60,000 (third-party SEO estimate).
- 12-month average SEO difficulty: 72/100, labelled higher competition.
- Estimated CPC: USD $0.01.
- Its separate Google Ads / Keyword Planner panel reports 110,000 monthly searches, top-of-page bid USD $0.01–$0.01 and competition index 0/100 (low).
- The report's worldwide estimate is approximately 120,000/month; visible country breakdown: US 60,000 (50%), UK 22,000 (18%), Canada 8,000 (6.7%), Australia 6,500 (5.4%), India 4,400 (3.7%), New Zealand 1,300 (1.1%), Philippines 1,300 (1.1%), Hong Kong 1,100 (0.9%), Singapore 870 (0.7%), UAE 710 (0.6%), and 98 other countries combined 13,820 (12%).

Source: https://www.kwstrends.com/keywords/us/percentage-change-calculator (accessed 2026-11-16).

**Do not combine the SEO estimate and Keyword Planner panel as if they were one metric.** The same page reports materially different values (60K vs 110K) because the provider's SEO estimate and Google's rounded Keyword Planner data are separate sources/methods. Use them as separate fields and retain the discrepancy.

The US "percentage calculator" report (updated 2026-10-28) shows approximately 1,000,000 average monthly searches, SEO difficulty 65/100, estimated CPC USD $1.38, and a separate Keyword Planner monthly-search figure of 550,000 with top-of-page bid USD $0.76–$2.00 and competition index 0/100. The same report lists "percentage increase calculator" at 110,000 and "percentage difference calculator" at 82,000 as related-keyword estimates, not as independently opened exact-keyword reports.

Source: https://www.kwstrends.com/keywords/us/percentage-calculator (accessed 2026-11-16).

### 12.2 What is and is not measured for the five-keyword set

| Target phrase | Evidence available in this pass | Status |
|---|---|---|
| percentage calculator | US: SEO estimate 1,000,000/month; separate Keyword Planner panel 550,000/month. Worldwide and visible country breakdown recorded in Section 11. | Direct US report; estimates differ by source/method |
| percentage change calculator | US: SEO estimate 60,000/month; separate Keyword Planner panel 110,000/month. Country breakdown recorded above. | Direct US report; estimates differ by source/method |
| percent increase calculator | "percentage increase calculator" appears as a related keyword in the US head-term report at 110,000/month; this is not the exact requested wording and not a separate opened report. | Related-keyword proxy only; exact phrase unverified |
| percentage difference calculator | Appears as a related keyword in the US head-term report at 82,000/month and in the percentage-change report at 170,000/month; those related-keyword values conflict and are not independent exact-keyword reports. | Related-keyword proxies only; do not treat as a confirmed exact volume |
| reverse percentage calculator | No usable exact report located in this pass. | Unknown |

The 170,000 related-keyword value for "percentage difference calculator" is shown in the percentage-change report's related-keyword list; the 82,000 value is shown in the percentage-calculator report. Different seed reports may have different datasets, definitions or update times. The inconsistency is recorded rather than averaged.

### 12.3 Geographic coverage and remaining gaps

- The percentage-change report supplies a visible country breakdown for US, UK, Canada and Australia, giving better evidence for the Tier 1 English markets for this one exact phrase.
- The percentage-calculator head-term report supplies visible country estimates for US, UK, Australia, Germany and Canada.
- No same-provider, exact-phrase country matrix was obtained for all five target keywords across Germany, France, Netherlands, Brazil, Russia and China.
- No reliable evidence was found to establish zero demand in any country; missing country rows remain unknown.
- No live Google Trends CSV export was obtained in this pass. Google Trends values must remain relative indices, not monthly volume.

### 12.4 Research interpretation (not measured fact)

1. "Percentage calculator" is the broadest measured head term in the available US evidence, but it is also likely to contain broader intent than the specific three-mode tool.
2. "Percentage change calculator" has a smaller reported volume, but its intent maps more closely to InfoJano's core Percentage Change mode.
3. The related-keyword estimates suggest possible demand for increase and difference workflows, but exact keyword reports are needed before deciding whether to create dedicated landing pages.
4. "Reverse percentage calculator" remains a validation gap. Its lack of a surfaced report must not be interpreted as no demand.
5. The apparent CPC and difficulty values are provider estimates, not a ranking forecast. They do not establish InfoJano's ability to rank.

### 12.5 Source methodology and cautions

- KWS Trends identifies its data sources as Google Ads Keyword Planner, Google Trends, a keyword database and a web-traffic panel; individual report pages distinguish SEO estimates from Google Ads Keyword Planner fields.
- Google Ads Keyword Planner volumes are rounded ranges; KWS Trends also warns that Keyword Planner figures can differ from its average monthly search estimates.
- Google Trends is sampled and normalized to a 0–100 index, not absolute search counts. Google explains this methodology here: https://newsinitiative.withgoogle.com/resources/trainings/google-trends/basics-of-google-trends/
- Keywords Everywhere describes a separate country-by-country volume checker and states that its Search Volume Checker sources data from Google Keyword Planner through its API. No authenticated bulk check was run in this session: https://keywordseverywhere.com/tools/search-volume-checker/ and https://keywordseverywhere.com/tools/keyword-volume-checker/

### 12.6 Next measurement actions

- [ ] Obtain one exact-phrase, same-provider matrix for all five target phrases across US, UK, Canada and Australia.
- [ ] Extend the same settings to Germany, France, Netherlands, Brazil, Russia and China where the provider supports them; record unsupported markets as unknown.
- [ ] Capture language = English, search network, location, date window, match setting, source, and refresh date for every export.
- [ ] Separate average monthly search estimates, Keyword Planner ranges, CPC and competition into distinct columns.
- [ ] Obtain Google Trends CSVs with consistent settings for relative trend/seasonality only.
- [ ] Check InfoJano Search Console after access is available; actual impressions and clicks should supersede third-party estimates for the site's own performance.


## 13. Search-intent and source-methodology review — fourth pass (2026-11-16)

### 13.1 US search-result evidence for the broad and core terms

The US KWS Trends report for **"percentage calculator"** (Google Web Search; updated 2026-10-28) reports:
- Corrected average monthly searches: 1,000,000; estimated SEO difficulty: 65/100; estimated CPC: USD $1.38.
- Separate Google Ads Keyword Planner panel: 550,000 monthly searches; top-of-page bid USD $0.76–$2.00; competition index 0/100 (labelled Low).
- Related terms include "percentage increase calculator" at 110,000, "percentage difference calculator" at 82,000, and "percentage change calculator" at 60,000. These are related-keyword table values, not all separate exact-match reports.
- 88% of related keywords with an intent label are informational and 12% commercial (labels can overlap).
- Top organic results include PercentageCalculator.net, Calculator.net, DadsWorksheets, OmniCalculator and CalculatorSoup.

Source: https://www.kwstrends.com/keywords/us/percentage-calculator

The US KWS Trends report for **"percentage change calculator"** (Google Web Search; updated 2026-11-09) reports:
- Corrected average monthly searches: 60,000; estimated SEO difficulty: 72/100; estimated CPC: USD $0.01.
- Separate Google Ads Keyword Planner panel: 110,000 monthly searches; top-of-page bid USD $0.01–$0.01; competition index 0/100 (Low).
- Worldwide estimate: 120,000/month, of which US 60,000 (50%), UK 22,000 (18%), Canada 8,000 (6.7%), Australia 6,500 (5.4%); India 4,400 (3.7%).
- 95% of related keywords with an intent label are informational and 5% commercial (labels can overlap).
- Top organic results include CalculatorSoup, PercentageCalculator.net, Percent-Change.com and OmniCalculator.

Source: https://www.kwstrends.com/keywords/us/percentage-change-calculator

### 13.2 Methodology clarified

KWS Trends' methodology page says its corrected average monthly search estimate combines Google Ads Keyword Planner and a second keyword database, with corrections benchmarked against Search Console impressions and Google Analytics 4 sessions from comparison websites. Its separate Google Ads panel displays Keyword Planner's own rounded figures. The two numbers can differ and should remain separate fields.

The same methodology page says:
- SEO difficulty, related-keyword CPC and intent labels come from the second keyword database.
- Estimated CPC is the midpoint of Google's top-of-page bid range.
- Google Trends interest is a normalized 0–100 series, not an absolute search count.
- Search volume, CPC, difficulty and monthly figures are estimates and may be incomplete or revised.

Sources:
- https://www.kwstrends.com/methodology
- https://www.kwstrends.com/terms
- https://newsinitiative.withgoogle.com/resources/trainings/google-trends/basics-of-google-trends/

### 13.3 Country evidence quality check

- For "percentage calculator", the visible worldwide distribution includes US 1,000,000; UK 130,000; Australia 40,000; Germany 40,000; Canada 22,000, plus other countries. These are global report country shares for this one phrase, not proof that each query was typed in English in each country.
- For "percentage change calculator", the report explicitly shows US, UK, Canada and Australia country estimates, but does not show a complete country matrix for Germany, France, Netherlands, Brazil, Russia or China in its visible top-country list.
- The attempt to locate exact "percentage calculator" reports for Germany, France, Netherlands, Brazil, Russia and China did not return matching exact phrase reports. Search results for unrelated German and French queries are not used as substitutes.
- No evidence in this pass establishes English-query demand for Brazil, Russia or China. Keep those markets as unverified feasibility tests, not proven demand markets.

### 13.4 Product / SEO implications (reasoned recommendations)

1. Keep the primary page focused on the exact core task family and make the distinction between percentage change, percentage difference and reverse percentage explicit. The high informational share in the related terms supports clear worked examples and formulas.
2. The core page should target the broad "percentage calculator" intent while making its three modes immediately discoverable; a separate "percentage change calculator" content target may be worth testing because it maps directly to the main mode.
3. Do not create standalone increase, difference or reverse pages solely from related-keyword numbers. First obtain exact phrase reports and inspect the live SERP/page intent for each.
4. Do not use CPC as a proxy for organic ranking difficulty. The percentage calculator report shows low Google Ads competition alongside SEO difficulty 65/100; these are different metrics.
5. Do not infer country-specific English demand from a country's share of a worldwide report. Require a country-specific report with language/query settings documented, or validate later with Search Console.

### 13.5 Remaining evidence gaps

- [ ] Exact independent report for "percent increase calculator" (US and other target countries).
- [ ] Exact independent report for "percentage difference calculator" (US and other target countries).
- [ ] Exact independent report for "reverse percentage calculator" (US and other target countries).
- [ ] Country-specific English query dataset for all five terms across US, UK, Canada, Australia, Germany, France, Netherlands, Brazil, Russia and China.
- [ ] Confirm provider's country report language settings and whether country-level counts are limited to Google Web Search without language filtering.
- [ ] Export Search Console queries and country performance once owner access is available.
- [ ] Review current SERPs for all exact phrases before choosing new pages or metadata.


## 14. Updated keyword report evidence and bulk-data path — fifth pass (2026-11-16)

### 14.1 Refreshed US reports (public KWS Trends pages)

The currently indexed US report for **"percentage calculator"** displays a worldwide total of 1,900,000 average monthly searches across 121 countries and the following visible country distribution: US 1,000,000 (53%), India 370,000 (19%), UK 130,000 (6.8%), Australia 40,000 (2.1%), Germany 40,000 (2.1%), Philippines 40,000 (2.1%), Canada 22,000 (1.2%), Taiwan 22,000 (1.2%), Spain 18,000 (0.9%), Italy 18,000 (0.9%), and 111 other countries 200,000 (11%). This is a global report country distribution for the selected phrase, not an English-language-only count for every country.

Source: https://www.kwstrends.com/keywords/us/percentage-calculator

The currently indexed US report for **"percentage change calculator"** displays:
- Corrected average monthly searches: 60,000; 12-month average SEO difficulty: 72/100; estimated CPC: USD $0.01.
- Separate Google Ads Keyword Planner figure: 110,000 monthly searches; top-of-page bid USD $0.01–$0.01; competition index 0/100 (Low).
- Worldwide corrected estimate: 120,000/month across 108 countries. Visible distribution: US 60,000 (50%), UK 22,000 (18%), Canada 8,000 (6.7%), Australia 6,500 (5.4%), India 4,400 (3.7%), New Zealand 1,300 (1.1%), Philippines 1,300 (1.1%), Hong Kong 1,100 (0.9%), Singapore 870 (0.7%), UAE 710 (0.6%), and 98 other countries 13,820 (12%).
- Related-keyword table currently lists "percentage increase calculator" at 170,000 and "percentage difference calculator" at 170,000. These are related-keyword entries, not independent exact reports, and differ from values in the percentage-calculator seed report. Preserve as seed-dependent estimates, not settled exact volumes.

Source: https://www.kwstrends.com/keywords/us/percentage-change-calculator

### 14.2 Bulk Keyword Planner option verified

KWS Trends publishes a separate bulk keyword checker. Its page says it accepts up to 200 keywords, returns Google Keyword Planner average monthly searches, top-of-page bid range, competition and monthly history, and provides a CSV download. The page explicitly states that results are for the country selected and in English; volumes are rounded by Google. The public page advertises 20 lookups per browser per day and no sign-up.

Source: https://www.kwstrends.com/google-ads-keyword-tool

**Access limitation:** The web viewer can inspect the tool description but cannot operate its interactive form or submit keyword batches. Therefore no actual bulk result rows or CSV were retrieved in this session. Do not claim the bulk dataset has been collected.

### 14.3 Keyword comparison status

| Exact target phrase | Latest evidence | Confidence / limitation |
|---|---|---|
| percentage calculator | US report: 1,000,000 corrected average monthly; separate Keyword Planner panel previously visible at 550,000. Country distribution visible worldwide. | Direct phrase report; two volume methods differ |
| percentage change calculator | US report: 60,000 corrected average monthly; separate Keyword Planner 110,000; country split US/UK/Canada/Australia visible. | Direct phrase report; two volume methods differ |
| percent increase calculator | Related keyword currently shown at 170,000 in percentage-change report; previously 110,000 in percentage-calculator report. | Related keyword only; seed-dependent discrepancy |
| percentage difference calculator | Related keyword currently shown at 170,000 in percentage-change report; previously 82,000 in percentage-calculator report. | Related keyword only; seed-dependent discrepancy |
| reverse percentage calculator | No exact report or usable related-keyword estimate located. | Unknown |

### 14.4 Market and language interpretation

- The bulk checker is the most practical reproducible next source because it explicitly documents country selection and English-language results.
- Its description supports country-by-country checks for Tier 1 markets (US, UK, Canada, Australia) and potentially supported additional countries. The form must be operated to discover the actual available country list; do not assume Russia or China are supported.
- The KWS Trends global country distributions are not sufficient to prove that searches in Germany, Brazil, Russia or China are English-language searches.
- Keep all missing country/keyword cells marked unknown, not zero.
- CPC and Google Ads competition are paid-search metrics; they do not replace SEO difficulty or organic SERP analysis.

### 14.5 Next actions
- [ ] Run the KWS Trends bulk checker for the five exact English phrases, separately for US, UK and Canada, then Australia and supported European/Brazil/Russia/China locations.
- [ ] Save the CSV output and record country, retrieval date, exact phrase, monthly searches, bid low/high, competition and monthly history.
- [ ] If a country is not offered, record it as unsupported by this provider rather than zero.
- [ ] Compare bulk Keyword Planner values with corrected average monthly estimates in individual reports without merging them.
- [ ] Review actual top-10 organic SERPs for the five phrases before final SEO page recommendations.
- [ ] Reconcile the site strategy with actual Search Console data when access exists.


## 15. Follow-up attempt to obtain a consistent country matrix — 2026-11-16

### 15.1 Sources and actions attempted
- Re-opened the KWS Trends bulk checker. Its public page documents up to 200 keywords, country selection, English-language Google Ads Keyword Planner data, average monthly searches, top-of-page bid range, competition, 12-month history and CSV export. The page also says 20 lookups per browser per day and no sign-up. Source: https://www.kwstrends.com/google-ads-keyword-tool (accessed 2026-11-16).
- The page's text-rendered view exposes the form labels but not a usable submission interface or result rows. No bulk lookup or CSV export could be completed from this session.
- Checked the available Ahrefs Keywords Explorer overview as an alternate structured source. Its schema supports exact keyword metrics by country, including volume, difficulty, CPC, clicks and detected keyword languages. The actual request for the five phrases across US, GB, CA, AU, DE, FR, NL, BR, RU and CN was rejected by the connected service with **Insufficient plan**. No Ahrefs data was returned; no figures are inferred from this failed request.
- Ahrefs documentation/schema: https://docs.ahrefs.com/docs/api/reference/introduction (tool schema inspected 2026-11-16).
- Google's official Keyword Planner instructions confirm that monthly search estimates can be filtered by location and language, but basic access requires completing Google Ads account setup with billing information. Source: https://support.google.com/google-ads/answer/7337243?hl=en (accessed 2026-11-16).

### 15.2 Result
- No new exact-phrase country volume observations were obtained in this pass.
- The planned five-keyword × ten-country matrix remains uncollected. Missing values remain **unknown**, not zero.
- The public KWS page's claim that it uses English data is documented, but the interactive data retrieval has not been performed.
- The Ahrefs alternative is technically suitable in schema but blocked by the connected plan entitlement. Do not report this as an Ahrefs keyword-volume result.

### 15.3 Practical next route
1. Use the KWS Trends interactive page in a real browser session and export one CSV per country; start with US, UK, Canada and Australia.
2. If that page cannot be operated, use Google Ads Keyword Planner with location set country-by-country, language set to English, and Google Search network consistently. Google states billing setup is required for basic Keyword Planner access.
3. Keep volume, CPC/bids, ad competition and SEO difficulty in separate fields. Do not combine provider estimates or treat missing values as zero.
4. Extend to Germany, France, Netherlands, Brazil, Russia and China only where English-language filtering is explicitly available and documented.

### 15.4 Research checklist
- [ ] KWS interactive lookup / CSV: pending browser interaction.
- [ ] Ahrefs exact phrase matrix: blocked by connected plan entitlement.
- [ ] Google Ads Keyword Planner country matrix: pending account access.
- [x] Confirmed the public checker supports country selection and documents English-language data.
- [x] Confirmed the Google Ads official workflow allows location/language settings and requires account setup with billing information.
