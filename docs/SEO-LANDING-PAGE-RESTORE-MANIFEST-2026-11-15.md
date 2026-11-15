# InfoJano — Reversible SEO Landing Page Deactivation Manifest

Date: 2026-11-15
Time recorded: 16:49 +05:30
Active work branch: `audit/adsense-readiness-seo-cleanup-2026-11-15`
Exact pre-change snapshot branch: `archive/seo-landing-pages-before-cleanup-2026-11-15`
Snapshot base commit: `9b069a536b3b5f5ed4afac19f3de0257475c58ab`

## Purpose
These pages are temporarily excluded from Google indexing because the current landing-page source has very short visible content and/or overlaps with a more complete core tool page. This is a reversible search-indexing decision, not deletion or removal of tool functionality.

## Pages temporarily deactivated
Each page remains in the repository, remains directly accessible, and keeps its current functionality. Its HTML now contains `<meta name="robots" content="noindex,follow">` and its URL is removed from the active XML/text sitemaps.

| File | Pre-change visible words (approx., static source extraction) | Reason |
|---|---:|---|
| `decimal-number-to-words.html` | 164 | Very short landing copy; decimal conversion remains available through the main converter |
| `bulk-number-to-words.html` | 163 | Very short landing copy; bulk mode remains available |
| `words-to-number-converter.html` | 171 | Very short landing copy; reverse conversion remains accessible |
| `ordinal-number-converter.html` | 156 | Very short landing copy; ordinal mode remains accessible |
| `million-billion-converter.html` | 151 | Very short landing copy; number-scale conversion remains accessible |
| `lakh-crore-converter.html` | 152 | Very short landing copy; Indian scale conversion remains accessible |
| `number-to-words-uppercase.html` | 158 | Very short landing copy; uppercase output remains accessible |
| `number-to-words-for-cheque.html` | 164 | Overlaps with the retained `cheque-amount-in-words.html` page |
| `qr-choice.html` | 74 | Thin chooser/navigation page; actual QR creation and dedicated QR pages remain available |

## Pages retained from the Number to Words cluster
- `number-to-words.html` — main converter.
- `number-to-words-indian.html` — Indian grouping intent.
- `number-to-words-international.html` — international grouping intent.
- `rupees-in-words.html` — INR currency wording.
- `dollars-in-words.html` — USD currency wording.
- `cheque-amount-in-words.html` — cheque-specific amount wording.
- `bengali-number-to-words.html` and `hindi-number-to-words.html` — distinct localized language pages.

## Preservation guarantee and restore procedure
The branch `archive/seo-landing-pages-before-cleanup-2026-11-15` was created from the exact pre-cleanup `main` snapshot before any page deactivation or content edits. It contains the original full source of every page listed above. The active branch does not delete or overwrite the page bodies.

To restore the exact pre-cleanup versions later:
1. Start from the latest approved `main` branch.
2. Restore the listed files from `archive/seo-landing-pages-before-cleanup-2026-11-15` (for example, `git checkout archive/seo-landing-pages-before-cleanup-2026-11-15 -- decimal-number-to-words.html`).
3. Re-add their canonical URLs to `sitemap.xml`, `sitemap-infojano.xml` and `sitemap.txt`.
4. Reconcile internal links and verify each page's unique value before submitting any indexing request.
5. Run static and live QA. Request indexing only after the page is intentionally reactivated.

No text, design, metadata, schema or tool logic needs to be reconstructed from memory. The archive branch preserves the complete original files exactly.

## Status and limits
- This manifest records a temporary SEO decision only; it does not claim Google has deindexed any URL.
- `noindex` takes effect only after Google can crawl and process the page. Do not block these URLs in `robots.txt`.
- Do not request reindexing for these pages while the noindex directive remains.
- Revisit the list after the core tool pages and content are reviewed, using Search Console evidence if available.
