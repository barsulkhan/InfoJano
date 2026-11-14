# InfoJano Celebration Countdown Studio — Feature Branch Handoff

Updated: 14 November 2026
Repository: https://github.com/barsulkhan/InfoJano
Feature branch: `feature/celebration-countdown-studio-rebuild`
Base: current `main` at branch creation (main was not modified)

## Source archive reviewed

- Archive branch: `archive/countdown-studio-2026-11-14`
- Archive README: `archives/countdown-studio-2026-11-14/README.md`
- Original source commit recorded by archive README: `0abc79c06dc38754bcea25119ea5a53b5458c4fa`
- Preserved source: `countdown-studio.html`
- Preserved PWA manifest: `app-manifests/countdown-studio.webmanifest`
- Master handoff fully reviewed from `docs/InfoJano_READ_HUB_MASTER_HANDOFF_2026-11-13.md` on the archive branch (848 lines).

## Preserved feature scope

1. Event countdown presets: Event, Birthday, Wedding, Holiday, Exam, Launch, Valentine, New Year and Graduation.
2. Date/time, time-zone selection, custom message and live days/hours/minutes/seconds preview.
3. Celebration themes: Birthday confetti, Fireworks, Romantic, Gold, Ocean, Neon and Pastel.
4. Photo/video URL gallery and multiple local photo/video uploads.
5. Countdown share link and local-device save.
6. YouTube Data API v3 subscriber goal, channel handle/channel-ID lookup, 60-second refresh, goal share link and downloadable PNG progress card.

## Important behavior / limitations retained

- YouTube connection requires the visitor's own YouTube Data API key. The key is entered in the browser and is not saved to local storage or included in share links. Users should restrict the key to YouTube Data API v3 and the site's HTTP referrers.
- YouTube may round subscriber counts to three significant figures.
- Goal share links are snapshots, not live shared API connections.
- Device-uploaded photos/videos are local to that browser/device and are not embedded in share links. Public media URLs are required for other viewers.
- The PWA manifest is for browser-based installability. It is not a native Windows/macOS desktop application.
- Existing per-tool Windows installers are Electron web wrappers that open hosted pages and require internet; native/offline desktop packaging is a separate workstream and is not included here.

## Current branch implementation

- Added `countdown-studio.html` from the preserved archive.
- Added `app-manifests/countdown-studio.webmanifest`.
- Updated `sw.js`: cache `infojano-v304` -> `infojano-v305`; added Countdown Studio HTML and manifest to precache.
- Fixed a malformed literal backslash-n between the YouTube Connect and Refresh event-listener statements. In the archived source this was present in the JavaScript code line and could prevent the entire inline script from parsing.
- Fixed media slideshow timer lifecycle: rebuilding a gallery now clears its previous interval, and closing the celebration overlay clears its slideshow interval. This prevents repeated media edits / overlay closes from leaving orphaned timers.

## Static source checks completed

- Manifest parses as JSON.
- Page links the dedicated manifest and loads `install.js` and `site-header.js`.
- Manifest icon target `../infojano-mark.svg` exists in the feature branch.
- Shared dependencies `install.js`, `site-header.js`, `index.html`, and `birthday-countdown-calculator.html` exist in the feature branch.
- No duplicate HTML IDs found.
- No missing element IDs among static `$("id")` references.
- Local file uploads are included in the media-item collection and use object URLs for same-device previews.
- Gallery rebuild and celebration-close paths now clean up slideshow timers.
- The malformed YouTube listener sequence is corrected.
- Both Countdown Studio HTML and its manifest are present in the Service Worker precache.
- Feature branch currently differs from main in exactly four files: the new HTML page, the new manifest, `sw.js`, and this branch handoff document. The branch is 5 commits ahead of main and 0 commits behind at the latest comparison.

## Not yet verified

- Real browser JavaScript runtime / syntax execution (the malformed listener was corrected and static checks pass, but a browser parser/runtime test has not yet been run).
- Responsive visual QA on desktop and mobile.
- Countdown behavior across time zones and DST boundaries.
- YouTube API success, invalid key, quota, hidden subscriber count and refresh failure paths.
- Public media URLs, local file previews, video playback, gallery timer cleanup and celebration overlay lifecycle.
- Share-link round trip, local storage restore and PNG export.
- PWA install prompt, Service Worker activation/update and offline navigation.
- Native desktop installer or offline desktop packaging.

## Safety / release constraints

- Do not merge this branch to main without the user's approval.
- Do not deploy this branch to the live website without the user's approval.
- Do not modify the main branch while feature work is in progress.
- Keep PWA and native desktop application work explicitly separate.
- Record further findings, commits, tests and unresolved decisions in this handoff.
