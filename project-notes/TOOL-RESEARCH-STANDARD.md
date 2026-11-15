# InfoJano Tool Research Standard

This file defines the mandatory research gate for every new tool, major feature and SEO landing page. Read it together with TOOL-WORK-TRACKING-STANDARD.md.

## Before implementation, research:
1. User problem, jobs-to-be-done and search intent.
2. Country-specific keyword demand and local-language variants.
3. Search volume, trend, KD, CPC/currency, traffic potential, SERP features and intent where available.
4. Direct and indirect competitors, including country-specific SERP leaders.
5. Competitor product features, limitations, UX, mobile, speed, privacy, ads/pricing, localization and accessibility.
6. Audience segments, use cases, likely devices and geographic demand.
7. Monetization and advertiser value, with CPC clearly distinguished from publisher RPM/revenue.
8. Evidence-based ways InfoJano can be better: accuracy, simplicity, speed, privacy, free limits, export, localization, accessibility or workflow.
9. SEO/content architecture and whether country-specific pages offer distinct user value.
10. Sources, extraction dates, provider/database, assumptions, confidence and unavailable data.

## Country research rules
- Screen the full set of plausible markets for the tool, then prioritize using evidence. Do not blindly produce identical pages for every country.
- Include country code, language(s), script, local phrasing, spelling, transliteration, units/date/currency conventions.
- For multilingual countries, separate language clusters when search behavior differs.
- Record N/A when metrics are unavailable; never turn missing data into zero.
- Country/locale pages require distinct search demand and local usefulness; avoid doorway/thin pages.

## Metrics and interpretation
- Search volume is an estimate, not guaranteed visits.
- Keyword difficulty is provider-specific.
- CPC is advertiser bid value, not publisher RPM or actual revenue.
- Traffic potential is an estimate and depends on ranking/CTR.
- Audience estimates must identify their source and confidence.
- Do not combine incompatible providers without noting differences.

## Competitor rules
- Aim for 3–5 direct competitors and 2–3 adjacent alternatives where they exist.
- Record URLs, markets, observed date, features, strengths, limitations and evidence.
- Separate observed facts from inference; do not invent competitor weaknesses.
- End with a prioritized InfoJano feature-gap/differentiation plan.

## Per-tool file
Create `project-notes/tools/<tool-slug>/RESEARCH.md` using the template at `project-notes/templates/TOOL-RESEARCH-TEMPLATE.md`.

## Decision gate
Mark Research as Complete only when the required countries/languages have been screened, competitors reviewed, metrics and limitations documented, and a Go/Revise/No-Go recommendation recorded. This does not automatically authorize coding; follow the user's approval and project scope rules.
