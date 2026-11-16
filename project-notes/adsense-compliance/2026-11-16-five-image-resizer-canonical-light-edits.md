# Five image-resizer canonical-signal edits
Date: 2026-11-16
Repository: barsulkhan/InfoJano

## Request
Make light edits to point 3 (five URLs flagged “Duplicate, Google chose different canonical than user”) and address Google's selected-canonical issue.

## Changes prepared
A single existing sidebar paragraph was made topic-specific on each page:
- `resize-image-by-percentage.html`: proportional scaling example and percentage-mode intent.
- `passport-id-photo-resizer.html`: directs users to verify the receiving authority's photo rules; clarifies pixel resizing is not compliance validation.
- `social-media-image-resizer.html`: distinguishes square social graphics and 16:9 thumbnails; reminds users to check current platform upload rules.
- `resize-image-to-pixels.html`: focuses on exact pixel dimensions and aspect-ratio control.
- `print-document-image-resizer.html`: distinguishes page-size presets from final physical print size/DPI.

Only one sidebar paragraph per page changed (5 insertions, 5 deletions). Main body, URLs, self-referencing canonical tags, og:url, and sitemap entries were left unchanged.

## Draft PR
- PR #239: https://github.com/barsulkhan/InfoJano/pull/239
- Branch: `improve/gsc-image-resizer-canonical-signals-2026-11-16`
- Draft, open, not merged or deployed.

## What this can and cannot do
These modest edits strengthen topic-specific context and reduce identical sidebar copy. They do NOT force Google to select these URLs as canonical. Google's selected canonical is determined by Google after crawling and processing the live pages. Search Console URL Inspection is not available through the connected tools in this session; the supplied URL Inspection image was too blurred to read the selected canonical values.

## Remaining
1. Review and merge/deploy PR only with the owner's authorization.
2. After deployment and recrawl, inspect each of the five URLs in Search Console and record both user-declared and Google-selected canonical.
3. If Google still selects another canonical, compare its exact chosen target, rendered content, redirects, internal links and duplicate similarity before considering canonical consolidation.
4. Do not claim Google-selected canonical is fixed until Search Console confirms it.

No indexing request or Validate Fix was submitted.
