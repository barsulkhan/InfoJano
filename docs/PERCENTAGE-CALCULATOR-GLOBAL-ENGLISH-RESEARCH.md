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
