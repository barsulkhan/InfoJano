# InfoJano Audience Growth Research Playbook

Updated: 14 November 2026
Repository: https://github.com/barsulkhan/InfoJano
Live site: https://infojano.com/

## Purpose
A durable operating file for growing real, relevant audiences for InfoJano. This is not a promise of traffic or rankings. Every initiative must be tied to user demand, evidence, implementation quality, and measured outcomes.

## Non-negotiable working rules
- Use the latest Google Search Console evidence and inspect the actual page/source before recommending edits.
- Research the current search results, credible case studies, competitor tools/pages, and official platform guidance before each substantial growth task.
- Separate facts from hypotheses. Record the source, date checked, market/country, query intent, and confidence.
- Never copy competitors' text, design, code, or proprietary methods. Learn the user problem they solve and create a better original experience.
- Prefer improving pages already receiving impressions over publishing large volumes of thin or repetitive pages.
- Do not create pages/features just because a keyword appears attractive; validate intent, demand, relevance to InfoJano, and whether we can deliver genuinely better utility.
- Keep the user's strict Hero Section protection rule: no changes to any page Hero Section without explicit approval. Preserve BMI hero and other finalized designs.
- No paid tools, domains, hosting, APIs, subscriptions, ads, or purchases without explicit approval.
- Do not claim Google indexing, rankings, traffic growth, browser QA, or deployment without direct evidence.
- Record each completed work item with a stable ID, status, evidence, files/PR/commit, and next measurement date.

## Current evidence snapshot (user-provided screenshot, 14 Nov 2026)
Google Search Console Performance, last 3 months:
- Clicks: 32
- Impressions: 1.05K
- Average CTR: 3.1%
- Average position: 21.3
Visible query rows included:
- "make qr code online" — 10 impressions, 0 clicks
- "how do i calculate interest on a loan" — 10 impressions, 0 clicks
- "gen qr code online" — 8 impressions, 0 clicks
- "make qr online" — 7 impressions, 0 clicks
- "create qr code online free" — 6 impressions, 0 clicks
- "bmi calculator" — 5 impressions, 0 clicks
- "porcentagem online" — 5 impressions, 0 clicks

Interpretation:
- These are small early signals, not enough to infer stable keyword demand or page-level performance.
- Visible QR queries suggest QR creation intent; loan-interest and BMI queries suggest separate calculator intents. Confirm the exact landing page for each query in Search Console before changing anything.
- A 2–3 day period with no extra clicks is not proof that the site has stopped working. Search Console's recent-data view can have a delay; check date completeness and compare like-for-like periods.
- The screenshot's 3-month totals do not reveal the last 2–3 days' page/query breakdown. Do not pretend that they do.

## Initial research findings (web checked 14 Nov 2026)
1. Google Search Central — Helpful, reliable, people-first content:
   https://developers.google.com/search/docs/fundamentals/creating-helpful-content
   Key lesson: create for a defined audience; demonstrate first-hand usefulness; add original information/analysis; make pages satisfying and trustworthy. Avoid mass-produced pages, shallow rewrites, and content made only to attract search traffic.
2. Google Search Essentials:
   https://developers.google.com/search/docs/essentials
   Key lesson: use the language people search with in prominent, accurate page elements; make links crawlable; tell relevant communities about genuinely useful products; follow spam policies.
3. Google SEO Starter Guide:
   https://developers.google.com/search/docs/fundamentals/seo-starter-guide
   Key lesson: unique and useful content, clear titles/snippets, readable structure, relevant internal/external links, and accurate page descriptions. No magic word count or guaranteed ranking formula.
4. Google Search Console Performance report:
   https://support.google.com/webmasters/answer/10268906
   Key lesson: use clicks, impressions, CTR and position together; segment by query, page, country, device and search appearance rather than relying on site-wide totals.
5. Google Search Console recent data announcement:
   https://developers.google.com/search/blog/2024/12/recent-data-search-console
   Key lesson: the 24-hour view is designed to show recent data with a delay of a few hours; recent data still needs completeness checks.
6. Ahrefs, "The Free Tools SEO Strategy" (16 Jul 2026):
   https://ahrefs.com/blog/the-free-tools-seo-strategy/
   Key lesson: a genuinely useful free tool can satisfy an action-oriented query better than an article. Ahrefs reports its own free writing tools reached nearly one million US organic visits/month at peak; this is a company-reported case, not a forecast for InfoJano. The transferable principle is to build a distinct tool that solves a real query better than alternatives, then support it with clear explanatory content and distribution.

## Audience growth operating method
For each work item:
1. **Discover intent** — identify the exact user task behind a query (calculate, convert, create, compare, understand, download, print, etc.).
2. **Inspect evidence** — Search Console query + page + country + device + date comparison; inspect actual SERP competitors and their page experience; use keyword/backlink research only where available and licensed.
3. **Inspect InfoJano** — source code, functionality, mobile layout, page speed/accessibility where measurable, title/snippet, canonical/indexability, structured data, internal links, and whether the tool truly completes the task.
4. **Find the gap** — what competing results offer; what they fail to explain or support; what original advantage InfoJano can deliver.
5. **Choose one hypothesis** — state expected user benefit and measurable leading indicator. Do not bundle unrelated changes.
6. **Implement narrowly** — preserve existing features and protected hero sections; add no unbuilt feature claims.
7. **Verify** — source checks, workflow checks, actual browser/device checks, deployment checks, and indexing checks are recorded separately.
8. **Measure** — compare an appropriate pre/post window after enough data accrues; avoid judging on 2–3 days or tiny samples.
9. **Keep / revise / revert** — decide from evidence and document why.

## Work-item ID format
Use stable IDs:
- GROW-YYYYMMDD-### for audience/SEO research and experiments.
- TECH-YYYYMMDD-### for technical quality work supporting growth.
Every entry should include:
- Goal and target audience/query
- Evidence and source links (with date checked)
- Competitor examples and what was learned (not copied)
- InfoJano gap/opportunity
- Hypothesis and success metric
- Exact files changed / PR / commit SHA
- QA status (source, workflow, browser/device, live deployment, indexing)
- Measurement window and observed result
- Decision: keep, improve, revert, or wait

## Initial priority hypotheses (not yet approved as code changes)
### GROW-20261114-001 — QR intent landing-page conversion
Why: visible Search Console queries include multiple QR-code creation variants. First map each query to its actual page in GSC, then compare the live QR maker against top results for speed, ease, customization, download formats, scan reliability, mobile usability, and clear explanation. Improve the existing page only where a real gap is proven. Do not publish near-duplicate QR pages targeting synonyms.
Success measures: query/page impressions, clicks, CTR, average position trend, successful tool completion if analytics are available.
Status: Research signal identified; page-level mapping and competitor audit pending.

### GROW-20261114-002 — Loan-interest query relevance
Why: a visible query asks "how do i calculate interest on a loan". Determine which InfoJano page (if any) received the impression. Compare intent and calculator coverage before deciding whether an existing calculator needs a missing calculation mode or a dedicated guide. Do not assume this query maps to an existing page.
Success measures: relevant query impressions/clicks, calculator completion, clear and correct examples.
Status: Research signal identified; page mapping and intent validation pending.

### GROW-20261114-003 — BMI search result opportunity
Why: "bmi calculator" appears with low impressions and no click in the visible sample. Existing BMI calculator and guide pages already exist. Inspect actual query-to-page mapping, SERP intent, title/snippet, and mobile experience before any edit. Do not modify the finalized BMI hero without explicit permission.
Success measures: BMI query/page CTR and clicks over a sufficient comparison window; functional completion and user satisfaction.
Status: Research signal identified; page mapping and SERP audit pending.

## Research quality safeguards
- Distinguish official Google guidance from vendor case studies and personal opinions.
- For competitor observations, capture the URL, query, date, country/device context, observed feature, and the user problem it solves.
- Treat reported competitor traffic and case-study numbers as directional claims, not guaranteed outcomes.
- Avoid keyword stuffing, doorway pages, scaled low-value AI content, fake reviews, link schemes, and misleading schema.
- Do not invent search volume, traffic, conversion, ranking, or competitor metrics.
- External news is useful only when it changes platform rules, search behavior, technology, or distribution opportunities; do not chase news for its own sake.

## Next research action
Start with a Search Console page-level mapping of the visible QR, loan-interest, BMI, and Portuguese percentage query rows. For each query, identify the exact page, country/device distribution, impressions/clicks/CTR/position, and compare the latest complete 28 days with the preceding 28 days. Then perform a small competitor/SERP audit for the highest-opportunity cluster. No code change should be made until that evidence is available.
