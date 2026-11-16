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

### Pending merge (explicitly not merged)
- [ ] PR #237 — legacy `/InfoJano/` path compatibility across custom-domain pages/PWA. Draft, open; mergeability currently reported false. Needs conflict/rebase or GitHub mergeability refresh and final review.
- [ ] PR #238 — align ID Card Print Studio `og:url` with its canonical custom-domain URL, plus 27-URL audit note. Draft, open; mergeability currently reported false. Needs conflict/rebase or GitHub mergeability refresh and final review.
- [ ] PR #239 — five image-resizer guide sidebar copy refinements. Draft, open; mergeable currently true. Latest associated workflow run #43806628836 (“Privacy Policy QA”) completed successfully. This workflow is not a full SEO/canonical validation.
- No PR has been merged or deployed. Do not merge/deploy or submit indexing requests without explicit authorization.

### Additional work completed in this batch
- Re-fetched all five edited guide pages from PR #239 branch.
- Confirmed each still has its self-referencing canonical URL and the new topic-specific sidebar paragraph.
- Confirmed five different sidebar paragraphs are present; no canonical tags were changed.
- Attempted live URL fetch for the two redirect variants and canonical homepage through the available web fetch. All three requests were inaccessible through that fetch, so live redirect verification remains blocked and no HTTP status/hop count is claimed.

### Next task taken up
- The next safe task is to continue a repository-only quality audit of the five guide pages and PR #239, then examine remaining Search Console categories where source evidence exists.
- For Google-selected canonical resolution, the exact Google-selected canonical values remain necessary; source changes cannot directly force Google's selection.
- No Validate Fix, indexing request, deployment, or merge was performed.


### PR #239 patch review
- Reviewed all five file patches and confirmed each changes only the intended sidebar paragraph; canonical tags, og:url, sitemap and main article body are untouched.
- Re-read all five files from the PR branch; all five self-canonical URLs still match their page URLs and the five sidebar paragraphs are distinct.
- PR #239 reports mergeable=true; associated Privacy Policy QA run #43806628836 succeeded. This QA workflow does not prove Google canonical selection.
- PR #237 and #238 currently report mergeable=false; investigate GitHub's branch/base divergence or conflict state before either can be merged.
