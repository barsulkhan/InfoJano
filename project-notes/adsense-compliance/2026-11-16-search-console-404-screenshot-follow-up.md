# 2026-11-16 — User Search Console 404 screenshot follow-up

## Evidence received
User supplied five photos of Google Search Console on 2026-11-16. Screenshots show:
- Overview: 58 indexed, 49 not indexed.
- Not-indexed reasons: 27 alternate page with proper canonical; 13 Not found (404); 2 page with redirect; 5 duplicate where Google chose a different canonical; 2 crawled — currently not indexed.
- 404 report: 13 affected pages. The example table is paginated (10 rows on one page and 3 rows on the next).
- URL Inspection of `https://infojano.com/percentage-of-percentage-calculator.html$3<meta property=` shows: URL is not on Google; Page is not indexed: Not found (404); no referring sitemap detected; referring page `https://infojano.com/percentage-of-percentage-calculator.html`; last crawl Nov 16, 2026 1:09:06 AM; Googlebot smartphone; crawl allowed; page fetch failed 404; indexing allowed N/A; canonicals N/A.
- Screenshot example last-crawl dates are Nov 12–14, 2026 for the listed 404 samples.

## Screenshot transcription — 13 examples
First table page (10 rows):
1. `https://infojano.com/Height`
2. `https://infojano.com/remove-gst-from-total-calculator.html$3<script type=`
3. `https://infojano.com/increase-decrease-by-percentage-calculator.html$3<meta property=`
4. `https://infojano.com/(100)^ `
5. `https://infojano.com/number-to-words.html$3<meta property=`
6. `https://infojano.com/repeated-percentage-change-calculator.html$3<meta property=`
7. `https://infojano.com/what-percent-calculator.html$3<meta property=`
8. `https://infojano.com/profit-loss-percentage-calculator.html$3<meta property=`
9. `https://infojano.com/successive-percentage-change-calculator.html$3<meta property=`
10. `https://infojano.com/InfoJano/`

Second table page (3 rows):
11. `https://infojano.com/(100)`
12. `https://infojano.com/percentage-of-percentage-calculator.html$3<meta property=`
13. `https://infojano.com/percentage-difference-calculator.html$3<meta property=`

Transcription note: trailing whitespace/symbol on `/(100)^ ` is visually approximate from the photo; confirm exact encoded URL in Search Console before any redirect decision.

## Fresh source checks
Fetched current main-branch source for:
- `percentage-of-percentage-calculator.html`
- `percentage-difference-calculator.html`
- `remove-gst-from-total-calculator.html`
- `increase-decrease-by-percentage-calculator.html`
- `number-to-words.html`
- `repeated-percentage-change-calculator.html`
- `what-percent-calculator.html`
- `profit-loss-percentage-calculator.html`
- `successive-percentage-change-calculator.html`
- `404.html`

All nine affected calculator pages expose clean, closed canonical and Open Graph URL tags in current source. The relevant pages' canonical URLs point to the clean `.html` paths. Current code search for literal `$3<meta property=` and `$3<script type=` found only historical documentation/handoff matches, not a current source-code match. This does not prove that production HTTP responses are clean; live origin could not be fetched from this environment.
- `404.html` CTA points to `/`; page remains noindex/follow per prior source audit.
- `number-to-words.html` still contains intentional legacy `/InfoJano/` paths for its app manifest and helper scripts; this belongs to the separate dual-host path audit, not a confirmed explanation for the malformed metadata suffix.

## Assessment
- The malformed `$3<meta property=` / `$3<script type=` examples are not currently present as literal strings in the sampled current page sources. They may be stale historical URLs, or could originate from a deployed/cached output, template/build process, browser extension, or a source outside the inspected files. No cause is proven yet.
- Search Console explicitly shows the referring page for the Percentage of a Percentage malformed URL. The next investigation should inspect the live rendered HTML and raw HTTP response of the referring page and the malformed URL, plus any cached/service-worker response. These live checks remain blocked/unavailable in the current environment.
- `/Height`, `/(100)`, `/(100)^ `, and `/InfoJano/` are still untraced to a current internal source.
- Do not mass-redirect malformed paths or arbitrary strings. Redirect only after identifying a real, semantically equivalent destination and the originating link/source.
- Do not use Request Indexing or Validate Fix as a substitute for fixing the cause.

## Boundaries and actions
- No source/code edits, DNS/Worker changes, account settings, PR, merge, deployment trigger, Search Console validation, Request Indexing, or manual indexing action.
- Maintain the explicit 18-URL indexing hold (15 Number to Words Pro + 3 Countdown pages).
- Next safe work: exact internal-reference inventory for `/Height`, `/(100)`, `/(100)^ `, `/InfoJano/`; source/rendered response tracing for the malformed suffix; live HTTP checks when environment permits.


## 2026-11-16 — owner re-sent the 404 example-table screenshots

The two newly uploaded photographs independently confirm the 13-row transcription above: the first page shows rows 1–10 and the second shows rows 11–13. The visible malformed suffixes are literal $3<script type= or $3<meta property= in the displayed URL examples; the short odd paths are /Height, /(100)^ , /(100), and /InfoJano/.

No new cause is established by the re-sent screenshots. The earlier source audit remains the working assessment: the nine malformed metadata-suffix URLs correspond to a historical malformed SEO metadata defect fixed by merged PR #91; current sampled source has clean canonical/og:url tags and no literal $3 source string. These may be stale discovered URLs, but current live HTTP/rendered response remains unverified. The short paths remain untraced to a current source. Do not create broad redirects for these entries without evidence of an active source and a matching destination.

The owner does not need to transcribe the list again. Next useful user evidence, only if available: open /Height in URL Inspection and share the detailed Page indexing panel including referring page; then do the same for /InfoJano/ if its referring source is not apparent. This helps distinguish stale historical URLs from active internal links. No Request Indexing or Validate Fix.


## Further investigation performed after owner said “do the work”

### Confirmed historical source root cause for nine malformed URLs
Reopened the dedicated root-cause report and the current issue-status report. The nine malformed suffix examples exactly match broken canonical/Open Graph metadata in the pre-PR #91 source for those nine pages. PR #91 was merged on 2026-11-12 (merge commit 3d5c6d26a8119231e634f270c070bf8eff7997b0). The current main source has clean canonical and og:url values for all nine. Pages workflow #43797089152 succeeded on main head 778e4adb863f17679fbf6e301e2a021f30a6659f at 2026-11-16 03:16:27Z. The user's Search Console screenshot showed a 404 crawl around 1:09 AM on Nov 16 (timezone not shown), which is consistent with Google having crawled the earlier broken version. This is historical/source/deployment correlation, not proof of a fresh live response or recrawl. No extra redirects or source edits are warranted for these nine based on current evidence.

### Remaining four paths — fresh source-search result
- `/Height`: exact search found no href or route. The only `/Height` code token located in the relevant source search is the PDF image dictionary key `/Height` inside `image-to-pdf.html`; it is not a web link. No safe destination can be inferred.
- `/(100)`: exact source search found no matching href/link. No safe destination can be inferred.
- `/(100)^ `: screenshot transcription still includes uncertain trailing symbol/space. Formula-like percentage expressions exist in `percentage.html`, but exact source search did not find an anchor that emits this path. Exact encoded URL and its Search Console referring page are needed.
- `/InfoJano/`: this is a real legacy project-root path still referenced in current main by root PWA/helper and some pages (examples found: `install.js`, `sw.js`, `manifest.json`, `site-header.js`, `emi.html`, `extract-pdf-pages.html`, `pdf-to-jpg.html`, `word-converter.html`, `document-studio.html`, plus app manifests). This makes the legacy-path remediation relevant, but does not by itself prove which reference generated the Search Console 404.

### PR #237 status rechecked
Draft PR #237 remains open, not merged, and not deployed. It changes 89 files (471 additions / 469 deletions) and is still marked non-mergeable. A fresh compare against main now reports 105 commits ahead and 13 behind (diverged); actual conflicts must be reviewed and the broad patch revalidated before any merge decision. Do not merge, deploy, or rebase blindly. The PR is a prepared remediation, not a production fix.

### Live verification attempt
Tried opening the live custom-domain URLs for `/Height`, `/(100)`, `/InfoJano/`, `percentage.html`, and `image-to-pdf.html` in the available web browser. All were inaccessible through this environment, so HTTP status, redirect target, live HTML, and response headers remain unverified. GitHub source cannot substitute for live HTTP evidence.

### What the owner should inspect next in Search Console
The next useful manual evidence is not another screenshot of the aggregate 13-row table. Inspect `/Height` and `/InfoJano/` individually and send the detailed Page indexing panel showing the Referring page (and, if present, last crawl). For `/(100)` and the formula-like path, confirm the exact URL as displayed/copied by Search Console and its Referring page. Do not click Request Indexing or Validate Fix. No indexing hold was changed.

### Actions in this batch
Read-only GitHub source/search/PR checks and attempted live URL opens; updated this note only. No production code edits, DNS/Worker changes, PR edits, merge, deployment, Search Console submission, Request Indexing, or Validate Fix.
