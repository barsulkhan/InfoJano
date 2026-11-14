# InfoJano Countdown Country Pages — SEO Research & Completion
Date: 14 November 2026
Pages: India, Bangladesh, United States
Scope: on-page SEO, search-intent mapping, technical discovery and measurement handoff.

## Target URLs
- https://infojano.com/countdown-timer-india.html
- https://infojano.com/countdown-timer-bangladesh.html
- https://infojano.com/countdown-timer-usa.html

## Keyword map (intent-led targets, not measured search-volume claims)

### United States — highest priority
Primary: free online countdown timer; countdown timer USA; online countdown clock.
Secondary: full screen countdown timer; shareable countdown timer; days until event; event countdown clock.
Use-case clusters: Thanksgiving countdown; Halloween countdown; Christmas countdown; New Year's Eve countdown; Independence Day countdown; birthday countdown; wedding countdown; graduation countdown; school/exam deadline countdown.
Local relevance: US time zones; Eastern Time countdown; Central Time countdown; Mountain Time countdown; Pacific Time countdown; Alaska Time; Hawaii-Aleutian Time; daylight saving time.
Search intent: user wants to set a future event date/time, see a live clock, display it full-screen or share it. Page must lead directly to Countdown Studio and explain that the event's city/region timezone must be used.

### India
Primary: free countdown timer India; online countdown timer India.
Secondary: countdown clock online; full screen countdown; shareable event countdown.
Use-case clusters: birthday countdown; wedding/anniversary countdown; exam countdown; result/deadline countdown; Diwali countdown; Holi countdown; Eid countdown; Independence Day countdown; New Year countdown.
Local relevance: Indian Standard Time; IST UTC+05:30; India event time.
Search intent: a free online event timer that can be configured for an India event, shown full screen and shared.

### Bangladesh
Primary: countdown timer Bangladesh; free online countdown timer Bangladesh.
Secondary: online countdown clock; full screen countdown; shareable countdown link.
Use-case clusters: Eid countdown; birthday countdown; wedding countdown; exam countdown; result countdown; admission deadline countdown; Pohela Boishakh/Bengali New Year countdown; New Year countdown.
Local relevance: Bangladesh Standard Time; BST UTC+06:00; moon-sighting date verification.
Search intent: create a personal event timer using the confirmed local date/time, show full screen and share.

## On-page implementation completed in this branch
- Rewrote unique page titles and meta descriptions for each country's actual intent.
- Synchronized Open Graph titles/descriptions with the page metadata; added og:site_name and Twitter summary metadata.
- Added concise, visible setup instructions with natural primary/secondary keyword coverage.
- Added a US-specific timezone explainer covering Eastern, Central, Mountain, Pacific, Alaska and Hawaii-Aleutian time; explicitly notes local exceptions and daylight-saving differences.
- Preserved canonical URLs, visible FAQs, matching FAQPage JSON-LD, WebPage JSON-LD, BreadcrumbList JSON-LD and existing Countdown Studio CTA.
- Preserved flag-free visual hero and did not add a Birthday Countdown Calculator CTA or cross-link.
- The three country pages already cross-link to each other and to Countdown Studio.
- All three URLs were already present in sitemap.xml and sw.js precache; sitemap entries now have lastmod 2026-11-14 and service-worker cache bumped to infojano-v307.

## Keyword validation status
No verified Google Keyword Planner monthly-search/competition export or Google Search Console query report was available during this implementation. Therefore no search volumes, CPCs, competition scores, current rankings, clicks, impressions or CTR are claimed.
For measured keyword data, use Google Ads Keyword Planner with separate location filters (United States, India, Bangladesh), English language first, Google Search network, and compare 12-month average plus recent 3-month trend. Export the ideas and forecasts. Then compare actual organic queries/pages in Search Console over 3 months and 12 months.
Keyword Planner access may require a completed Google Ads account setup and billing information; do not launch ads or incur spend for this organic SEO task.

## Competitor and SERP research notes
Observed public examples and differentiators:
- CountUsDown: no-signup shared links, synchronized absolute event moment, timezone-aware viewing, embed, preset event types.
- tick.to: embed, fullscreen, editable shared timer, extension and named links.
- timer.ad: URL-encoded timer settings, no-account share links, timezone-aware event moment, privacy-focused positioning.
- utoolgo countdown: quick presets, timezone selection, fullscreen, end alert, autosave and shareable links.
- TekPulse: timer/stopwatch/preset workflows and India-specific IST context.
These are feature/positioning observations, not a measured ranking or traffic comparison. Do not copy competitor text. InfoJano should emphasize the free configurable event countdown, full-screen display, shareable link, local time-zone guidance and easy access from Countdown Studio.

## Technical SEO / crawlability checklist
- Canonical URL: one self-referencing canonical per page.
- Index directive: index,follow.
- Title and description: unique, visible-content aligned, natural language.
- OG/Twitter: page-specific title/description.
- Structured data: WebPage, BreadcrumbList and FAQPage are present; FAQ answers must remain identical in substance to visible FAQ copy.
- Internal links: all three country pages link to each other and Countdown Studio; CTA is a crawlable anchor.
- Sitemap: all three URLs included with lastmod 2026-11-14.
- robots.txt: allows crawling and points to https://infojano.com/sitemap.xml.
- Service worker: all three pages precached; cache name bumped to infojano-v307.
- Mobile CSS and reduced-motion handling remain present.

## Google policy / expectations
- Helpful, original, readable content and crawlable internal links matter more than repeating exact-match keywords.
- Sitemap submission helps discovery but does not guarantee crawling or indexing.
- URL Inspection recrawl requests are available only to a verified Search Console owner/full user; requests do not guarantee indexing and may take days or weeks.
- FAQ structured data may remain valid schema, but Google generally limits FAQ rich results to authoritative government and health sites; do not promise FAQ rich-result display for InfoJano.
- Do not promise ranking position or indexing date.

## Sources
- Google Search Central SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google crawling/indexing technical guidance: https://developers.google.com/search/docs/fundamentals/get-started
- Google sitemap overview: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google recrawl/indexing requests: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Google FAQ rich result change: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Google Ads Keyword Planner guide: https://support.google.com/google-ads/answer/7337243
- Competitor examples: https://countusdown.com/ ; https://tick.to/ ; https://timer.ad/about ; https://utoolgo.com/countdown ; https://tekpulse.in/tools/countdown-timer

## Remaining account-dependent measurement tasks
1. Import a Keyword Planner CSV/export for each of the three locations to replace estimates/qualitative priority with actual metrics.
2. Inspect Search Console Performance by exact page URL and country; record queries, clicks, impressions, CTR and average position.
3. Use URL Inspection for the three canonical URLs after the Pages deployment is successful; request indexing once per changed URL if needed.
4. Recheck Pages workflow and actual live URLs before calling the changes live.
