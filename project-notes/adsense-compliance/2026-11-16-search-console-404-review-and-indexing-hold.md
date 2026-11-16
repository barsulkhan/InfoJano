# Search Console 404 review and indexing hold — 2026-11-16

## User request
Fix the issues visible in the Search Console screenshots, and if any temporarily paused SEO pages appear, repair them where appropriate but do not submit them for indexing later.

## Screenshot facts
- Overview: 58 indexed, 49 not indexed.
- Not-indexed reasons: 27 alternate page with proper canonical; 13 Not found (404); 2 page with redirect; 5 duplicate where Google selected a different canonical; 2 crawled — currently not indexed.
- 404 list shows malformed URLs with `$3<meta property=` or `$3<script type=` appended to page filenames, plus `/Height`, `/(100)`, `/(100)^ `, and `/InfoJano/` examples.
- URL Inspection for a malformed Percentage of a Percentage URL reports 404, Googlebot smartphone, crawl allowed, page fetch failed, and referring page `https://infojano.com/percentage-of-percentage-calculator.html`.

## Repository inspection
- Current main source for the affected page group was re-fetched. Sampled canonical and Open Graph URL tags are clean and syntactically closed.
- GitHub code search for literal `$3` found only the historical PR #91 audit note in documentation, not a current source-file match. PR #91 is merged.
- This points to already-repaired metadata corruption / stale discovered URLs as the likely explanation for the `$3` cases, but live custom-domain output still needs verification.

## Change made
- `404.html`: changed the homepage CTA from `/InfoJano/` to `/`. The page remains `noindex,follow`.
- No arbitrary redirects were added for `/Height`, `/(100)`, `/(100)^ ` or other malformed paths because their source has not been established.

## SEO pages explicitly held from indexing
- 15 Number to Words Pro SEO landing pages remain Pending — not submitted.
- 3 Countdown country SEO pages remain Pending — not submitted.
- Do not submit/request indexing for these 18 pages in future batches unless the user explicitly authorizes it.

## Not done / external dependency
- No Search Console Request Indexing or Validate Fix action was taken.
- Live HTTP/redirect checks and a fresh Google crawl are not verified.
- Recheck the live referring page and malformed URL after deployment; only validate fixes once the clean source is live.

## Commits
- See the repository commits recorded in the conversation and the tracker/master-plan updates.
