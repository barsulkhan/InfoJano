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


## Expanded Search Console query evidence (additional user screenshots, 14 Nov 2026)
The user supplied further pages of the same 3-month Queries table (rows 1–83). The site-level scorecards remained 32 clicks, 1.05K impressions, 3.1% CTR, average position 21.3. All individual query rows visible across these screenshots showed 0 clicks; this does NOT mean the site had zero clicks overall. The screenshot's graph covers roughly 10 Oct–11 Nov 2026 and showed recent impression growth, but does not establish the exact current-day click count.

Additional visible queries and impressions:
- free online qr code maker — 4
- qr maker online — 4
- create qr code free online — 4
- count percentage online — 3
- subtract from date — 3
- qr code generator free — 3
- online qr code maker — 3
- make a qr code online free — 3
- gen qr code free — 3
- date difference calculator — 2
- difference between two dates — 2
- free qr code maker — 2
- calculadora porcentagem online — 2
- calculadora de desconto — 2
- qr code generator free online — 2
- create qr code online — 2
- online qr maker — 2
- qr code maker online — 2
- create qr code free — 2
- qr code generator online — 2
- qr maker free — 2
- make qr code online free — 2
- create a qr code online — 2
- qr code maker free online — 2
- dot bmi calculator — 1
- calculadora online de porcentagens — 1
- date difference between two dates — 1
- percentage calculator — 1
- loan interest calculation formula — 1
- percentage calculate — 1
- get percentage online — 1
- difference between two days — 1
- difference between 2 dates — 1
- generate qr code free — 1
- generate qr online — 1
- porcentagem online calculadora — 1
- qr online generator — 1
- working out interest on a loan — 1
- character sentence — 1
- výpočet percenta — 1
- how to calculate loan interest per annum — 1
- how to compute loan interest per annum — 1
- qr code create free — 1
- text count — 1
- calculating interest on a loan — 1
- create online qr code — 1
- how to calculate interest on a loan — 1
- passport photo resizer software free — 1
- calculate percentage — 1
- generate qr code online — 1
- online qr code generate — 1
- qr code maker online free — 1
- figure interest on a loan — 1
- calculation of loan interest — 1
- generate qr code — 1
- loan interest formula — 1
- qr code create online — 1
- free generate qr code online — 1
- how to work out interest on a loan — 1

Interpretation and caution:
- QR creation is the largest visible query cluster by variety, with many phrase variants. This suggests a shared intent cluster, not proof that many separate pages are needed. Map variants to the actual landing URL first.
- Loan-interest searches form a second distinct intent cluster, including formula/how-to phrasing. Verify whether the site has a relevant calculator/page and whether Google is showing it for informational or calculator intent.
- Date-difference and percentage searches appear in multiple languages; inspect country/device and the actual landing pages before changing language targeting or page copy.
- The Portuguese/Spanish/Czech-language queries suggest international impressions, but the sample is too small to decide localization strategy.
- A few queries such as "character sentence", "text count", and "passport photo resizer software free" should be mapped to exact pages; do not assume these are irrelevant or that their target pages need changes.
- All these are tiny impression counts (mostly 1–4); avoid making title or page changes based on a single impression. Prioritize query clusters and page-level aggregate evidence.

## Additional current research (checked 14 Nov 2026)
7. Google Search Console Help — Performance report tasks and use cases:
   https://support.google.com/webmasters/answer/17010961?hl=en
   Key lesson: click a query row, then open Pages to identify which URL Google showed for that query. For low-CTR pages, inspect the title/snippet and query alignment. Segment and compare periods; do not diagnose from query text alone.
8. Ahrefs — The Free Tools SEO Strategy (Ryan Law, 16 Jul 2026):
   https://ahrefs.com/blog/the-free-tools-seo-strategy/
   Additional lesson: Ahrefs describes free utility pages as satisfying action-oriented searches better than an article alone can. It recommends validating the actual SERP/page types and finding tool opportunities rather than assuming keyword volume means a tool will rank. Its reported traffic is Ahrefs' own case, not a forecast for InfoJano.

## Next evidence request / exact Search Console workflow
For the next pass, use the same Search results report and date range:
1. Open Queries and tap the query "make qr code online"; then open Pages and capture the resulting URL row(s), clicks, impressions, CTR and position.
2. Repeat for "how do i calculate interest on a loan" and "bmi calculator".
3. Then remove query filter, open Pages, sort by Impressions (descending), and share the first 10 rows with clicks, impressions, CTR and position.
4. If possible, export the report as CSV with dimensions query + page and include country/device for a separate breakdown.
This page-level mapping is the missing evidence needed to choose a specific, safe change. No source-code edits are justified by the query screenshots alone.


## Query-to-page mapping evidence — QR (user screenshot, 14 Nov 2026)
Selected query shown in the screenshot: **"qr code create online"** (note: this is not the earlier query "make qr code online").
- Date range: last 3 months (10 Oct–11 Nov 2026 shown on graph)
- Clicks: 0
- Impressions: 1
- CTR: 0%
- Average position: 97
- Pages tab shows one URL only: `https://barsulkhan.github.io/InfoJano/qr-maker.html`
- This is a single impression at a very low average position; it is not enough to diagnose a title/snippet CTR problem or infer demand.
- It does confirm that Google associated this query with the QR Maker page.

Source inspection of current main `qr-maker.html` (blob SHA `8be6599fc9a9f7571278bf60753da1574eaa81cc`):
- Title: "Free Online QR Code Maker & Generator | Create QR Codes - InfoJano"
- Description: "Create a QR code online free for links, text, WiFi, WhatsApp, email and contacts. Use this free online QR code maker to generate and download a QR code."
- Canonical: `https://infojano.com/qr-maker.html`
- Open Graph URL also points to `https://infojano.com/qr-maker.html`.
Interpretation:
- The canonical tag already points from the GitHub Pages alias document to the preferred custom domain URL. Do not change title/description/canonical based on this one impression.
- Important follow-up is to verify in Search Console URL Inspection whether the GitHub Pages alias is indexed, what Google-selected canonical is, and whether the custom-domain URL is indexed. Check the canonical live URL and sitemap/canonical consistency.
- No source change or merge is justified by this screenshot. Keep Hero Section unchanged.
Status: Query-page mapping confirmed; canonical consolidation check pending.
