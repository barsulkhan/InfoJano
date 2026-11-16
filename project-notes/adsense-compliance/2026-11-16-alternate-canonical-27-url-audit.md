# Search Console — 27 “Alternate page with proper canonical tag” examples
Date: 2026-11-16
Repository: barsulkhan/InfoJano
Evidence: three user-uploaded Search Console screenshots (27 visible example URLs) and current `main` HTML source.

## Screenshot URL inventory (27)

### Percentage calculator variants (10)
- https://infojano.com/percentage.html?mode=reverse
- https://infojano.com/percentage.html?mode=original
- https://infojano.com/percentage.html?mode=removeTax
- https://infojano.com/percentage.html?mode=whatPercent
- https://infojano.com/percentage.html?mode=marks
- https://infojano.com/percentage.html?mode=fraction
- https://infojano.com/percentage.html?mode=increase
- https://infojano.com/percentage.html?mode=multi
- https://infojano.com/percentage.html?mode=profit
- https://infojano.com/percentage.html?mode=difference
- https://infojano.com/percentage.html?mode=adjust
- https://infojano.com/percentage.html?mode=decimal

### Image resizer variants (7)
- https://infojano.com/image-resizer.html?preset=social-post
- https://infojano.com/image-resizer.html?preset=web-large
- https://infojano.com/image-resizer.html?preset=passport-photo
- https://infojano.com/image-resizer.html?mode=percent
- https://infojano.com/image-resizer.html?preset=a4
- https://infojano.com/image-resizer.html?mode=custom

### QR maker variants (5)
- https://infojano.com/qr-maker.html?type=link
- https://infojano.com/qr-maker.html?type=email
- https://infojano.com/qr-maker.html?type=text
- https://infojano.com/qr-maker.html?type=whatsapp
- https://infojano.com/qr-maker.html?type=phone

### Standalone pages (5)
- https://infojano.com/savings.html
- https://infojano.com/id-card-print-studio.html
- https://infojano.com/url-toolkit.html
- https://infojano.com/index.html
- (The screenshots show 27 rows total; this subsection contains four standalone URLs. The 27 total is 12 percentage + 6 image resizer + 5 QR + 4 standalone.)

## Source findings

- `percentage.html`: canonical and og:url both point to `https://infojano.com/percentage.html`. The twelve `?mode=` variants are query-state variants of the same tool and correctly consolidate to the clean page URL, assuming the query only selects calculator mode and does not represent distinct index-worthy content.
- `image-resizer.html`: canonical and og:url both point to `https://infojano.com/image-resizer.html`. The six query variants are tool presets/modes and correctly consolidate to the clean page URL, assuming they are functional state only.
- `qr-maker.html`: canonical and og:url both point to `https://infojano.com/qr-maker.html`. The five `?type=` variants are QR generator modes and correctly consolidate to the clean tool URL.
- `savings.html`: canonical and og:url both point to `https://infojano.com/savings.html`.
- `url-toolkit.html`: canonical and og:url both point to `https://infojano.com/url-toolkit.html`.
- `index.html`: canonical and og:url both point to `https://infojano.com/`, correctly consolidating `/index.html` to the homepage.
- `id-card-print-studio.html`: canonical points to `https://infojano.com/id-card-print-studio.html`, but og:url incorrectly pointed to the legacy GitHub Pages URL `https://barsulkhan.github.io/InfoJano/id-card-print-studio.html`. This metadata inconsistency was corrected on a non-production branch to use the same canonical custom-domain URL.

## Correction prepared

- Branch: `fix/gsc-alternate-canonical-metadata-2026-11-16`
- Commit: `37b354f6f38abcaee025a7df30e9978a7f24a4f7`
- Changed only the `og:url` value in `id-card-print-studio.html`.
- No production deployment or merge was performed.

## Assessment / remaining verification

The Search Console reason is “Alternate page with proper canonical tag”. For the query-parameter variants listed above, the clean canonical targets are present in source. This is expected behavior, not 27 broken pages, and these variants should not be individually forced into the sitemap or separately indexed. The canonical target pages should be the discoverable/indexable URLs.

The screenshots list 27 rows: 12 percentage variants, 6 image-resizer variants, 5 QR variants, and 4 standalone URLs (savings, ID Card Print Studio, URL Toolkit, and index.html). This reconciles the count.

Still required before claiming Google-side resolution:
1. Verify live HTTP 200 for each clean canonical target and ensure no redirect chain.
2. Inspect rendered/live canonical tags and response headers on the deployed site.
3. Confirm Search Console’s Google-selected canonical agrees with the user-declared canonical after recrawl.
4. Review whether query parameters change only UI state; if any produce genuinely distinct substantive content, revisit the canonical decision for that route.

Do not request indexing or run Validate Fix without explicit authorization. No production changes were made.
