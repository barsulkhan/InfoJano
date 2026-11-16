# 2026-11-16 — Root cause confirmation for malformed Search Console 404 URLs

## Executive result
The nine malformed Search Console examples ending in $3<meta property= or $3<script type= directly match broken canonical/Open Graph metadata that was present in the pre-PR #91 source and was repaired by merged PR #91. The historical bad tag strings are visible in the PR diff for the exact nine screenshot pages.

PR #91: Repair malformed SEO metadata across HTML pages; merged 2026-11-12; merge commit 3d5c6d26a8119231e634f270c070bf8eff7997b0.
PR: https://github.com/barsulkhan/InfoJano/pull/91

The current main-branch source for all nine pages has clean canonical and og:url values. Pages deployment workflow #43797089152 completed SUCCESS on main HEAD 778e4adb863f17679fbf6e301e2a021f30a6659f at 2026-11-16 03:16:27Z. The Search Console screenshot's latest shown crawl is Nov 16, 2026 1:09 AM; that crawl appears to predate the successful Pages deployment later that morning (the screenshot does not explicitly label its timezone, so no exact offset comparison is claimed). Thus the 404s are consistent with Google having crawled old broken HTML before the current Pages deployment. This is strong source/history correlation, not live HTTP proof.

## Exact matching screenshot pages
The following nine screenshot examples were also changed by PR #91; the PR diff shows malformed metadata before the fix and clean metadata after it:
1. remove-gst-from-total-calculator.html — old canonical ended $3<script type=application/ld+json>.
2. increase-decrease-by-percentage-calculator.html — old canonical and og:url ended $3.
3. number-to-words.html — old canonical and og:url ended $3.
4. repeated-percentage-change-calculator.html — old canonical and og:url ended $3.
5. what-percent-calculator.html — old canonical and og:url ended $3.
6. profit-loss-percentage-calculator.html — old canonical and og:url ended $3.
7. successive-percentage-change-calculator.html — old canonical and og:url ended $3.
8. percentage-of-percentage-calculator.html — old canonical and og:url ended $3.
9. percentage-difference-calculator.html — old canonical and og:url ended $3.

This exact correspondence explains the nine metadata-suffix URLs in the user's 13-row 404 report. PR #91's merged source fixes them; no additional production source fix is presently indicated by repository evidence.

## Four remaining 404 examples — not yet explained
- /Height
- /(100)
- /(100)^ (trailing whitespace/symbol transcription from photo is approximate)
- /InfoJano/

Source-search checks:
- /Height appears in image-to-pdf.html only as the PDF dictionary key /Height for image height; this is not an HTML link or route.
- /(100)^ appears in percentage.html as part of a mathematical formula expression containing division by 100 and an exponent; no direct anchor/link to that path was found by exact source search.
- No exact source href for /Height, /(100), or /(100)^ was found.
- /InfoJano/ is a known legacy project-site root path still used by some root PWA/helper files and pages. The 404 CTA itself was corrected to / in prior work. A complete root HTML path inventory and dual-host-safe remediation is tracked separately in Task 0020.

## Deployment evidence
- Pages workflow #43797089152: completed SUCCESS, head SHA 778e4adb863f17679fbf6e301e2a021f30a6659f, updated 2026-11-16T03:16:27Z.
- APK workflow #43794247117: completed SUCCESS, head SHA 947f399eb900ca05fe4f068bd98bb8cf5746bda7.
- This verifies GitHub Actions outcomes only. The custom-domain live HTTP response remains inaccessible from this environment. Do not claim Googlebot currently receives the fixed source until a live fetch/browser or Search Console recrawl verifies it.

## Recommended next actions
1. Do not add redirects for the nine malformed metadata URLs; their originating metadata defect has already been corrected in PR #91. Let Google recrawl the clean canonical pages.
2. Do not request indexing or Validate Fix yet. First obtain a fresh live URL Inspection/test-live result for representative pages and confirm the current rendered canonical/og:url.
3. Investigate the four residual paths independently. No blanket redirect.
4. Keep the 18 SEO page indexing hold unchanged.
5. Continue dual-host path audit separately; do not conflate /InfoJano/ with the repaired $3 metadata issue.

## Permission and change log
- Read-only PR diff/history/source/workflow verification.
- Documentation updates only; no production code, DNS, account settings, PR merge, deployment trigger, Search Console Request Indexing or Validate Fix action.