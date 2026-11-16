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
