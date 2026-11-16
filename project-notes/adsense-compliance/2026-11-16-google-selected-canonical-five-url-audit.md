# Search Console audit — 5 “Google chose different canonical” URLs
Date: 2026-11-16
Repository: barsulkhan/InfoJano
Evidence: user-provided Search Console screenshots and current main-branch HTML/sitemap source.

## URLs shown
1. https://infojano.com/resize-image-by-percentage.html
2. https://infojano.com/passport-id-photo-resizer.html
3. https://infojano.com/social-media-image-resizer.html
4. https://infojano.com/resize-image-to-pixels.html
5. https://infojano.com/print-document-image-resizer.html

## Source findings
- All five files exist on main.
- All five are present in sitemap.xml.
- Each declares a self-referencing canonical URL and matching og:url.
- Each has its own descriptive title, meta description, H1, and topic-specific H2 sections/FAQ content.
- All five share repeated template sections (“Easy to use”, “Flexible controls”, “Free & private”, “Open Image Resizer”, “Frequently asked questions”, “Explore Image Resizer guides”, “Resize Your Image with InfoJano”).
- Each links prominently to the main image-resizer.html page and uses query parameters to launch a mode/preset there.
- The main image-resizer.html page also links back to all five guides.

## Assessment
These are not parameter-only variants; they are separate guide/landing pages with some topic-specific explanatory content. The repeated boilerplate and strong links to one main tool page may contribute to Google treating the set as near-duplicates. However, the screenshot does not show Google's selected canonical URL for any of the five. It is not safe to assume Google selected image-resizer.html, or to change all five canonical tags without confirming the chosen target and evaluating the value of each unique landing page.

## Safe action taken
- No production source changed.
- No canonical tags or sitemap entries changed.
- No redirects added.
- No indexing request or Validate Fix.
- Source audit recorded on branch `audit/gsc-five-google-canonical-2026-11-16`.

## Required next evidence
Open URL Inspection for each listed URL (or at least one initially) and capture the “Google-selected canonical” and “User-declared canonical” fields. If Google consistently selects image-resizer.html, decide whether to consolidate the five guides to that canonical or retain distinct indexable landing pages by materially differentiating content and strengthening appropriate internal links. Do not blanket change canonicals without that evidence.
