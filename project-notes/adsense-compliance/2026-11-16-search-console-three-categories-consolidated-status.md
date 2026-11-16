# Search Console screenshot work — consolidated status
Date: 2026-11-16
Repository: barsulkhan/InfoJano
Scope: the 27 alternate-canonical examples, 2 redirect examples, and 5 “Duplicate, Google chose different canonical than user” examples supplied by the site owner.

## Executive status

| Search Console category | Count | Work completed | Still outstanding |
|---|---:|---|---|
| Alternate page with proper canonical tag | 27 | All 27 screenshot URLs transcribed and source canonical tags checked; parameter variants consolidate to their clean tool URLs; one Open Graph URL inconsistency found and corrected on a draft branch. | Live HTTP/rendered canonical and Google recrawl confirmation. |
| Page with redirect | 2 | Both screenshot URLs identified as `http://infojano.com/` and `http://www.infojano.com/`; homepage source canonical and sitemap use `https://infojano.com/`. | Live redirect status, hop count, and final destination not verified; hosting/DNS-level configuration not changed. |
| Duplicate, Google chose different canonical than user | 5 | All five URLs identified; source files exist, each has a self-referencing canonical and matching og:url, all five are in sitemap. Reviewed content structure and internal links. | Google-selected canonical value remains unreadable in the latest uploaded URL Inspection photo; no canonical changes made. |

## 1. 27 alternate canonical examples

The screenshot inventory reconciles to 27:
- 12 percentage calculator mode URLs
- 6 image resizer mode/preset URLs
- 5 QR maker type URLs
- 4 standalone URLs: savings.html, id-card-print-studio.html, url-toolkit.html, index.html

Source findings:
- percentage.html declares https://infojano.com/percentage.html for its query-mode variants.
- image-resizer.html declares https://infojano.com/image-resizer.html for its query-mode/preset variants.
- qr-maker.html declares https://infojano.com/qr-maker.html for its query-type variants.
- savings.html and url-toolkit.html declare their own canonical URLs.
- index.html declares https://infojano.com/ as canonical.
- id-card-print-studio.html had a legacy GitHub Pages og:url inconsistent with its custom-domain canonical. A one-line og:url correction was prepared on branch `fix/gsc-alternate-canonical-metadata-2026-11-16`, commit `37b354f6f38abcaee025a7df30e9978a7f24a4f7`, Draft PR #238 (not merged/deployed).

Interpretation: query-state URLs are expected alternates if parameters only select tool modes/presets. Do not individually index these variants.

Related report:
`project-notes/adsense-compliance/2026-11-16-alternate-canonical-27-url-audit.md`

## 2. Two redirect examples

Screenshot URLs:
- http://infojano.com/
- http://www.infojano.com/

Source facts:
- `CNAME` contains `infojano.com`.
- Homepage `index.html` declares canonical and og:url as `https://infojano.com/`.
- `sitemap.xml` uses the HTTPS non-www site URLs.
- No repository-level `.htaccess`, `_redirects`, `netlify.toml`, or `vercel.json` was found.

Assessment: these look like alternate host/protocol forms expected to redirect to the canonical HTTPS non-www homepage. This is not proof that live redirects are correctly configured. Live HTTP status, final URL, and redirect hop count were not checked; no hosting/DNS change was made.

## 3. Five Google-selected canonical examples

Screenshot URLs:
1. https://infojano.com/resize-image-by-percentage.html
2. https://infojano.com/passport-id-photo-resizer.html
3. https://infojano.com/social-media-image-resizer.html
4. https://infojano.com/resize-image-to-pixels.html
5. https://infojano.com/print-document-image-resizer.html

Source facts:
- All five HTML files exist.
- All five are included in sitemap.xml.
- All five declare their own self-referencing canonical and matching og:url.
- Each has a topic-specific title, meta description, H1 and topic-specific explanatory sections/FAQ.
- They also share several template sections and link strongly to `image-resizer.html`, with query parameters used to launch modes/presets.
- The five also cross-link between related image-resizer guides.

Assessment: shared boilerplate and strong links to the main tool may contribute to Google selecting another canonical, but the actual Google-selected URL is not yet known. The most recent URL Inspection photograph is too blurred to read the canonical fields. Therefore no canonical or sitemap change was made.

Related report:
`project-notes/adsense-compliance/2026-11-16-google-selected-canonical-five-url-audit.md`

## Current outcome / what is fixed

- Completed: source-level inventory and canonical audit for all 27 alternate URLs.
- Prepared but not production-released: ID Card Print Studio og:url correction in Draft PR #238.
- Verified in source: homepage canonical consistency for the two HTTP/www redirect examples.
- Completed: source inventory and canonical/sitemap/content review for the five duplicate-canonical URLs.
- Not verified: live redirects, live canonical response, and Google's selected canonical values.
- Not done: merge, deployment, Google indexing request, or Search Console “Validate Fix”.

## Exact next evidence needed

For the five duplicate-canonical URLs, capture a sharp URL Inspection screenshot showing both:
- User-declared canonical
- Google-selected canonical

For the two redirect URLs, verify live HTTP response chains for both URLs, ending at `https://infojano.com/`.

For the 27 alternate URLs, post-deployment live canonical and Google recrawl confirmation is still needed; no separate indexing request for parameter variants is recommended.

## Release and safety constraints

No production deployment, merge, Google indexing request, or Validate Fix was performed as part of this consolidated report. The 18 Number-to-Words Pro and Countdown SEO URLs previously placed on hold remain excluded from indexing requests.


## 2026-11-16 follow-up — merge queue and next work

### Merge queue — explicitly marked pending
- [ ] **PR #237** — legacy `/InfoJano/` path compatibility across custom-domain pages/PWA. Open, Draft, not merged. Latest GitHub metadata call reports `mergeable=false`; inspect branch/base conflict or refresh mergeability before considering merge. Associated Privacy Policy QA run #43799984619 passed.
- [ ] **PR #238** — align ID Card Print Studio `og:url` with its canonical custom-domain URL. Open, Draft, not merged. Latest GitHub metadata call reports `mergeable=false`; inspect branch/base conflict or refresh mergeability before considering merge. Associated Privacy Policy QA run #43801541371 passed.
- [ ] **PR #239** — five image-resizer guide sidebar copy refinements. Open, Draft, not merged. Latest GitHub metadata call reports `mergeable=false` (earlier audit recorded mergeable=true, so current status must be refreshed before merge). Associated Privacy Policy QA run #43806648510 passed.
- No merge, deployment, indexing request, or Validate Fix was performed. Prior release/indexing constraints remain in force.

### Latest verification
- PR #237 head: `49977ee5867daddbbaf92e94bff080158f318304`.
- PR #238 head: `70243b2d2a77cb2d9564acb74964f6210f847c2a`.
- PR #239 head: `03cb5f0b2f9a7c4b27bda966b2bf35dcbb72b81d`.
- All three associated Privacy Policy QA workflows completed successfully. These are not full SEO/canonical, redirect, or runtime tests.
- Re-fetched all five PR #239 pages: each has a self-referencing canonical and the intended distinct sidebar paragraph.
- Live fetch attempts for `http://infojano.com/`, `http://www.infojano.com/`, and `https://infojano.com/` were inaccessible through the available web fetch; no HTTP status, redirect destination, or hop count is claimed.

### Next repository-only work
- [x] Verify PR #239's five changed files still preserve canonical tags and contain the intended distinct copy.
- [ ] Inspect why GitHub currently reports all three PRs as not mergeable; do not merge.
- [ ] Continue source-only audit of remaining Search Console issues with available URL evidence.
- [ ] Keep exact Google-selected canonical values and live redirect verification flagged as externally blocked until readable Search Console details and live HTTP evidence are available.

### Outstanding user/device evidence
- [ ] Clear URL Inspection capture for each of the five duplicate-canonical URLs, showing both user-declared and Google-selected canonical.
- [ ] Live redirect chain for both HTTP/www homepage variants ending at `https://infojano.com/`.
- [ ] Post-deployment live canonical and Google recrawl confirmation for the 27 alternate URLs.
- [ ] No Google “Validate Fix” or indexing request until explicitly authorized; the 18 Number-to-Words Pro and Countdown URLs remain on hold.
