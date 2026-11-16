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


## 2026-11-16 — five readable URL Inspection screenshots received

The owner supplied readable Search Console screenshots for all five URLs in the “Duplicate, Google chose different canonical than user” group. All five show the same selected-canonical pattern:

| URL | User-declared canonical | Google-selected canonical |
|---|---|---|
| `resize-image-by-percentage.html` | `https://infojano.com/resize-image-by-percentage.html` | `https://barsulkhan.github.io/InfoJano/resize-image-by-percentage.html` |
| `passport-id-photo-resizer.html` | `https://infojano.com/passport-id-photo-resizer.html` | `https://barsulkhan.github.io/InfoJano/passport-id-photo-resizer.html` |
| `social-media-image-resizer.html` | `https://infojano.com/social-media-image-resizer.html` | `https://barsulkhan.github.io/InfoJano/social-media-image-resizer.html` |
| `resize-image-to-pixels.html` | `https://infojano.com/resize-image-to-pixels.html` | `https://barsulkhan.github.io/InfoJano/resize-image-to-pixels.html` |
| `print-document-image-resizer.html` | `https://infojano.com/print-document-image-resizer.html` | `https://barsulkhan.github.io/InfoJano/print-document-image-resizer.html` |

Common visible signals on the detailed Page indexing screenshots:
- Status: “Duplicate, Google chose different canonical than user”.
- Crawl allowed: Yes.
- Page fetch: Successful.
- Indexing allowed: Yes.
- Each Google-selected canonical is the corresponding legacy GitHub Pages project-site URL.

Additional screenshot detail:
- The Social Media Resizer screenshot shows “Sitemaps: Temporary processing error”; this is recorded as a Search Console observation only, not proof that the sitemap file is broken.
- The first Percentage Resizer screenshot showed a separate Page availability / tested-page panel with “Only determined after indexing”; a later detailed Page indexing screenshot for the same URL clearly showed the legacy GitHub URL as Google-selected canonical. Preserve both observations; the detailed indexing result is the evidence for this duplicate-canonical category.

## Updated interpretation

This is now direct Search Console evidence—not merely a source-code suspicion—that Google selected the legacy `barsulkhan.github.io/InfoJano/` version for all five pages at the time of the supplied reports. It still does not prove why Google selected it or that a code change will force Google to switch. Likely contributing signals must be tested, including historical links/discovery, internal links, redirect behavior, and the deployed canonical/metadata signals.

## PR review after receiving the screenshots

Fresh GitHub metadata and compare checks:
- PR #237: open Draft, not merged, GitHub reports `mergeable=false`; branch is diverged from main (105 commits ahead, 10 behind), 89 files changed. It includes broad path, manifest, install helper and service-worker changes. It also changes `id-card-print-studio.html`, which overlaps PR #238. The service worker derives its base from its registration scope and rewrites its precache list; this needs dedicated project-site and custom-domain runtime testing before release.
- PR #238: open Draft, not merged, `mergeable=false`; diverged (3 ahead, 4 behind), 2 files changed. It corrects ID Card Print Studio metadata and adds the 27-URL audit note.
- PR #239: open Draft, not merged, `mergeable=false`; diverged (6 ahead, 3 behind), 6 files changed. It changes one sidebar paragraph on each of the five pages and adds its audit note.
- “Diverged” means both main and the PR branch have commits the other does not. It does not by itself identify exact conflicting files. PR #237 and #238 both edit `id-card-print-studio.html`, so that overlap must be reconciled deliberately.
- The PR-linked workflow runs are named “Privacy Policy QA”; passing those workflows is not evidence of full SEO, redirect, PWA, service-worker or browser-runtime correctness.

No PR was merged, no production deployment was made, and no Google indexing request or Validate Fix was submitted during this review.


## New Search Console overview screenshot — two additional categories identified

The owner supplied a wider “Why pages aren’t indexed” overview screenshot. It shows five rows:

| Reason | Pages | Validation |
|---|---:|---|
| Alternate page with proper canonical tag | 27 | Not Started |
| Not found (404) | 13 | Not Started |
| Page with redirect | 2 | Not Started |
| Duplicate, Google chose different canonical than user | 5 | Not Started |
| Crawled - currently not indexed | 2 | Not Started |

The 27, 2 redirect and 5 duplicate-canonical groups were already audited in the sections above. Newly discovered groups:
- **Not found (404): 13 pages.** Exact URLs and whether these are intentional removals, broken internal links, stale sitemap entries, or legacy paths are not visible in this overview screenshot. Do not redirect or recreate pages until the URL list and intended destinations are reviewed.
- **Crawled - currently not indexed: 2 pages.** Exact URLs and page content are not visible. Need URL Inspection details and page-level review before deciding whether to improve content, internal linking, canonical signals, or take no action.

Validation for all five categories is shown as “Not Started” in this screenshot. Do not click Validate Fix yet. Request the detailed URL list for the 13 404s and the two crawled-not-indexed pages; a clear screenshot of each category's example URL table is sufficient to begin source-level checks.

No fixes are claimed for these two newly discovered categories at this stage.


## Updated task board — after detailed /Height inspection screenshot

The owner supplied the requested URL Inspection details for `/Height`. Mark the following as completed evidence collection, not as a resolved production issue:
- [x] Obtained Search Console referring-page evidence for `/Height`: `https://infojano.com/image-to-pdf.html`.
- [x] Recorded crawl facts: 404; Googlebot smartphone; crawl allowed; last crawl Nov 14, 2026 12:31:37 PM (timezone not shown); no referring sitemap; canonical N/A.
- [x] Rechecked current `image-to-pdf.html` source: `/Height` appears in PDF object dictionary strings, not as an HTML href. This is a plausible clue, not a proven extraction mechanism.

### Remaining tasks — explicitly marked pending
- [ ] **404 /Height:** determine whether PDF-generation output is exposed/discoverable to Google and how the PDF dictionary token became a URL. No redirect or code fix until confirmed.
- [ ] **404 /InfoJano/:** obtain detailed URL Inspection screenshot with referring page and last crawl; then finish dual-host path audit.
- [ ] **404 /(100):** confirm exact URL and detailed referring page.
- [ ] **404 formula-like path /(100)^ :** confirm exact URL encoding/trailing character and detailed referring page.
- [ ] **PR #237:** review 89 changed files, resolve branch divergence/overlaps, run path/PWA/service-worker QA; currently Draft, not mergeable, not merged/deployed.
- [ ] **PR #238 and #239:** review divergence/overlap and QA before any merge; currently Draft, not merged/deployed.
- [ ] **27 alternate canonical URLs:** source audit recorded; live preferred-canonical destinations and internal/sitemap consistency still need confirmation.
- [ ] **2 redirect URLs:** verify exact redirect destinations, status codes and chains from live HTTP evidence.
- [ ] **5 Google-selected canonical duplicates:** user screenshots now show Google selected the legacy GitHub Pages URLs; remediation and live post-deploy Google selection remain pending.
- [ ] **2 crawled-not-indexed URLs:** obtain exact URLs and inspect each page's content, canonical, indexability and internal links.
- [ ] **AdSense/privacy:** live revocation link/CMP/TCF behavior and ads.txt HTTP/crawler checks remain pending; AdSense site review is already submitted and should not be resubmitted.
- [ ] **18 held SEO pages:** 15 Number-to-Words Pro + 3 Countdown pages remain intentionally NOT submitted for indexing.

### Permission boundaries retained
The owner's permission in chat is to mark and continue unfinished work. Earlier explicit release constraints remain: no production code changes outside draft PRs, no PR merge, no deployment, no Search Console Request Indexing, and no Validate Fix. Do not treat this task-board update as authorization to cross those release gates. Documentation updated only.
