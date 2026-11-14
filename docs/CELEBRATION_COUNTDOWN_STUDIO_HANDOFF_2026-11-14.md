# InfoJano Celebration Countdown Studio — Feature Branch Handoff

Updated: 14 November 2026
Repository: https://github.com/barsulkhan/InfoJano
Feature branch: `feature/celebration-countdown-studio-rebuild`
Base: current `main` at branch creation (main was not modified)

## Source archive reviewed

- Archive branch: `archive/countdown-studio-2026-11-14`
- Archive README: `archives/countdown-studio-2026-11-14/README.md`
- Original source commit recorded by archive README: `0abc79c06dc38754bcea25119ea5a53b5458c4fa`
- The archive branch is historically divergent from current main (initial comparison: 223 commits ahead / 64 behind; merge base `8d5e3bae076f163adf08d38fd49139cb96c97c6b`). Do not merge the archive branch wholesale.
- Current main HEAD at feature-branch creation: `6509905698c823d78e792396a4957e96f85e42e8`. Current main did not contain `countdown-studio.html` or its dedicated manifest; its Service Worker was `infojano-v304`.
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

## Separate native Windows desktop package prepared

- Added `desktop-app/countdown-studio/main.cjs` with a dedicated Electron window that opens `https://infojano.com/countdown-studio.html`, context isolation, sandboxing, no Node integration, and external handling for links outside the trusted origin.
- Added `desktop-app/countdown-studio/package.json` for x64 NSIS setup and portable EXE builds.
- Added `desktop-app/countdown-studio/README.md` documenting internet dependency, PWA distinction, unsigned installer warning, and release gating.
- Added `.github/workflows/build-countdown-studio-desktop.yml`. It is manual-dispatch only, runs only on `feature/celebration-countdown-studio-rebuild`, and uploads EXE outputs as a 30-day GitHub Actions artifact. It does not publish a public release or deploy the site.
- The desktop build has NOT been run in GitHub Actions yet. The production URL will only resolve to the new page after a separately approved merge/deploy; no installer download link is published before that.

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
- Native Windows Electron build, EXE file verification and launch test (workflow prepared but not yet run).
- Native desktop installer or offline desktop packaging.

## Safety / release constraints

- Do not merge this branch to main without the user's approval.
- Do not deploy this branch to the live website without the user's approval.
- Do not modify the main branch while feature work is in progress.
- Keep PWA and native desktop application work explicitly separate.
- Record further findings, commits, tests and unresolved decisions in this handoff.
