# InfoJano Image Resizer SEO Landing Pages — Checkpoint

Date: 8 November 2026
Status: IN PROGRESS — feature branch only; not merged or live.

## Branch and baseline
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: `seo/image-resizer-feature-landing-pages`
- Base main commit: `3cc7efd677b24c0d1a6e9bf83c73fc28e1e69676`

## Pages created
1. `resize-image-to-pixels.html` — custom pixel dimensions.
2. `resize-image-by-percentage.html` — percentage mode (1–500%).
3. `passport-id-photo-resizer.html` — existing passport/ID photo presets; no acceptance guarantee.
4. `social-media-image-resizer.html` — profile, square social post and YouTube thumbnail presets.
5. `print-document-image-resizer.html` — A4/A5/A6 and document pixel presets.
6. `resize-image-for-website.html` — web large/medium/small presets.

## Tool and SEO integration
- `image-resizer.html`: supports mode/preset query routing and links to all six guides.
- `sitemap.xml`: six landing-page URLs added.
- `sw.js`: six pages added to precache; cache version advanced from `infojano-v253` to `infojano-v254`.
- Both Master Project Files updated with this checkpoint.

## Accuracy constraints
- Existing tool accepts JPG/PNG/WebP input and offers JPG/PNG/WebP output, custom pixel dimensions, aspect ratio control, percentage 1–500%, quality 40–100%, and fixed presets.
- No editable cm/mm, configurable DPI, target-KB resizing, automatic crop, batch resize, or official photo compliance is claimed.
- Fixed preset dimensions may stretch an image because the current preset handler disables aspect-ratio lock. User should inspect the output.

## Pending verification
- Re-fetch all changed files from this branch and check metadata, canonical, FAQ JSON-LD, CTA URLs, internal links and sitemap entries.
- Parse modified inline JavaScript and confirm the route handlers point to the intended existing buttons.
- Confirm Service Worker cache is v254 and all six pages are in precache.
- Create a review pull request. Do not merge without user approval.
- After merge, verify GitHub Pages deployment and test CTA mode/preset selection on an Android browser. Do not claim Live Tested before this is done.
