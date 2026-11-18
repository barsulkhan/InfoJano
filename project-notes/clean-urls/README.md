# InfoJano Clean URL Migration — Work Tracker

Last updated: 2026-11-15
Overall status: In progress — pilot prepared on feature branch; not deployed.

## User-approved scope
- User requested that InfoJano page URLs no longer display the `.html` extension.
- Goal: clean trailing-slash URLs, preserve existing `.html` entry points with redirects, update canonical/structured metadata and sitemaps, then verify live behavior.
- Do not merge or deploy to production until build and route checks pass. Do not alter protected hero designs.

## Findings
- Repository has a root CNAME containing infojano.com and 115 HTML files.
- No `.htaccess`, `_redirects`, `_config.yml`, or `.nojekyll` existed in main at inspection time.
- Source layout is compatible with GitHub Pages/Jekyll branch publishing; GitHub Pages docs state that branch publishing uses Jekyll by default unless Jekyll is disabled with `.nojekyll`.
- GitHub Pages does not provide Apache `.htaccess` server rewrites. Jekyll permalink + redirect pages are the applicable repository-level route.
- Official GitHub Pages dependency list currently includes jekyll-redirect-from 0.16.0. Its redirects are generated HTML refresh redirects, not HTTP 301 server responses.

## Feature cards
### Completed
- [x] [CARD-001] Hosting/routing source audit — CNAME and repo tree inspected; no existing rewrite config found.
- [x] [CARD-002] Create isolated clean-URL pilot — branch `feature/clean-urls-migration`; enabled jekyll-redirect-from and configured image-resizer route `/image-resizer/`, with legacy `/image-resizer.html` redirect metadata; canonical/OG/schema URL references updated by replacing exact old URL in page source.

### In progress
- [ ] [CARD-003] Validate GitHub Pages/Jekyll build and both pilot routes — no Pages build or live browser test has run yet.
- [ ] [CARD-004] Expand clean URLs to all public HTML pages — 115 HTML files exist; must preserve homepage, 404 page, special alias pages, internal links, canonical tags, structured data, sitemap.xml and sitemap-infojano.xml.
- [ ] [CARD-005] Verify legacy URL redirect behavior and SEO metadata after deployment.

## Detailed work log
### 2026-11-15 — Clean URL migration requested
- Requested: remove `.html` from all public InfoJano page URLs.
- Inspected: CNAME, root file tree, 404.html, robots.txt, sitemap.xml, sitemap-infojano.xml, image-resizer.html, repository workflow list and mandatory project work-tracking standards.
- Found: GitHub Pages/Jekyll static hosting pattern; no Apache rewrite file or custom redirect config. 115 HTML files. Sitemap currently contains .html URLs.
- Research: GitHub Pages official docs describe Jekyll processing and Pages plugin configuration; pages.github.com/versions.json lists jekyll-redirect-from 0.16.0. Plugin docs state redirects are generated HTML refresh pages, not server-side 301s.
- Changed on branch only: created _config.yml enabling jekyll-redirect-from; added front matter to image-resizer.html with permalink /image-resizer/ and redirect_from /image-resizer.html; updated exact canonical/OG/schema URL occurrences to the clean route.
- Tests: source inspection only. Jekyll build NOT RUN; GitHub Pages deployment NOT RUN; live URL/redirect browser QA NOT RUN.
- Production: unchanged; branch not merged.
- Next: run Pages build/route validation for pilot; then migrate all public pages in controlled batches and update internal links/sitemaps.
- Protected areas preserved: homepage hero, ID Card Print Studio hero, all other hero designs and production pages unchanged.
