# Social Media QR Maker — QA Test Log

Last updated: 2026-11-17
Source under test: `social-qr-maker.html`
Source merged to `main`; browser QA branch: `qa/social-qr-playwright`

## 2026-11-17 — Source implementation review

| ID | Test | Expected | Result | Evidence / notes |
|---|---|---|---|---|
| SQ-001 | Bundle mode theme selection | Bundle mode uses Social Links theme even when platform selector retains Instagram | Implemented; runtime not run | `makeQR()` now derives `isBundle` from `ij-qr-mode` |
| SQ-002 | Single-profile URL host validation | Only selected platform's supported host is accepted | Implemented; runtime not run | `profileUrl()` checks URL protocol, credentials and platform host allowlist |
| SQ-003 | Username URL construction | Username cannot inject path/query/fragment characters | Implemented; runtime not run | Username is checked and path component encoded |
| SQ-004 | Bundle validation | Each populated social field is validated against its platform; WhatsApp number is 8–15 digits | Implemented; runtime not run | `ijBuildAdvancedPayload()` routes each field through `profileUrl()` |
| SQ-005 | Link-in-Bio validation | Each social destination and WhatsApp number is validated before encoding | Implemented; runtime not run | Same shared `profileUrl()` validation path |
| SQ-006 | Decoded hub safety | Invalid fields, unsafe protocols and unapproved destination domains are not rendered as links | Implemented; runtime not run | Hub renderer filters payload fields and validates label/domain mapping |
| SQ-007 | Generation status | Success is announced only after QR PNG generation succeeds | Implemented; runtime not run | Build handler awaits `makeQR()`; function returns true/false |
| SQ-008 | 12 platform profile paths | Each supported platform opens the intended destination | Not run | Requires browser interaction and destination/scan testing |
| SQ-009 | PNG output and scan reliability | Downloaded PNG opens and scans on multiple devices | Not run | Requires browser/device |
| SQ-010 | Mobile/desktop visual and accessibility QA | Responsive layout, focus order, keyboard use and status announcements work | Not run | Requires real browser/device |

## Test environment and limitations
- Repository source was reviewed and edited through GitHub.
- No browser automation or live device is connected in this session.
- No claim is made that runtime, visual, accessibility, download, scan, deployment or production tests passed.
- The normal QR page was not changed and is not part of this QA scope.

## 2026-11-17 — Static JavaScript and URL validation checks

- Extracted all five inline JavaScript blocks (excluding JSON-LD and external script tags) from the latest committed source and compiled each with the JavaScript parser: **5/5 PASS**.
- Executed the isolated profile URL normalizer with a URL test double:
  - Instagram username -> expected profile URL: PASS
  - YouTube @handle -> expected channel URL: PASS
  - Valid Facebook URL accepted: PASS
  - Facebook URL submitted under Instagram rejected: PASS
  - `javascript:` scheme rejected as a username: PASS
  - deceptive `instagram.com.evil.test` host rejected: PASS
  - username path injection rejected: PASS
  - valid 8–15 digit WhatsApp number normalized: PASS
  - too-short WhatsApp number rejected: PASS
- Source assertions: bundle theme reads active QR mode; shared validator is exposed for advanced modes; decoded hub destination allowlist is present; QR builder awaits and checks the generation result: **6/6 PASS**.
- Important correction during review: the shared URL normalizer is explicitly exposed as `window.ijNormalizeSocialProfileUrl` so the separate advanced-mode script can call it. This avoids a cross-IIFE scope error.
- These are source/parser and isolated function checks, not browser tests. Real QR library rendering, canvas export, link page rendering, scan reliability, responsive visuals and accessibility remain NOT RUN.

## Pull request and CI status — 2026-11-17
- PR #247: https://github.com/barsulkhan/InfoJano/pull/247 — **merged** by squash commit `7ba875f2480ce6a53cf2942566eafa6984ed0447`
- Changed-file audit: exactly four files — `social-qr-maker.html`, `project-notes/TOOL-INDEX.md`, and the new Social QR README/QA log.
- Confirmed `qr-maker.html` (Normal QR) and all other source pages are absent from the PR changed-file list.
- PR-triggered workflow runs returned none; combined commit status returned no checks. CI is therefore **not run / no status**, not PASS.
- PR is closed/merged. Cloudflare preview bot reported preview build/deployment success for the earlier branch commit; that is not evidence of the production website deployment.

## 2026-11-17 — Browser QA harness added (execution pending; PR #248 open)

| ID | Test | Expected | Result | Evidence / notes |
|---|---|---|---|---|
| SQ-011 | 12-platform browser QR generation | Each platform creates a designed PNG and expected destination | Added; not run | `qa/browser/tests/social-qr-maker.spec.js` |
| SQ-012 | Wrong-platform host rejection | Instagram rejects a Facebook URL | Added; not run | Playwright browser assertion |
| SQ-013 | Bundle mode and landing page | Social Links QR generates, downloads and opens valid Instagram/WhatsApp links | Added; not run | Playwright browser assertion |
| SQ-014 | Link-in-Bio generation | Name, bio and Instagram destination render on the generated page | Added; not run | Playwright browser assertion |
| SQ-015 | Link-in-Bio invalid host | Mismatched host is rejected before QR generation | Added; not run | Playwright browser assertion |
| SQ-016 | Mobile controls | Primary button and bundle field remain within mobile viewport | Added; not run | Pixel 7 Chromium emulation |

- Added isolated Playwright configuration under `qa/browser/` and workflow `.github/workflows/social-qr-browser-tests.yml`.
- Workflow triggers on pull requests changing Social QR or the isolated QA harness, plus manual dispatch.
- Test execution is pending: no Node package installation or browser binaries were available in the current tool environment.
- Physical QR scanning and screen-reader/manual accessibility checks remain outside automated emulation.

- Draft PR #248: https://github.com/barsulkhan/InfoJano/pull/248.
- PR file audit lists eight QA/tracking/workflow files only; `social-qr-maker.html` and `qr-maker.html` are unchanged by this PR.
- First workflow run #3 is queued/in progress: https://github.com/barsulkhan/InfoJano/actions/runs/44125592825. Dependency installation completed; Chromium installation is in progress. Browser test result is not yet available.


## 2026-11-17 — Playwright browser QA result (GitHub Actions run #7)

- Workflow run #7: https://github.com/barsulkhan/InfoJano/actions/runs/44127825234 — **SUCCESS**.
- Job: Social QR — Chromium desktop and mobile — **SUCCESS**.
- Browser suite: **13 passed, 1 skipped, 0 failed** (15.1 seconds).
- Passed desktop Chromium scenarios: 12-platform PNG generation, wrong-platform host rejection, Bundle QR + landing page + PNG download, Link-in-Bio rendering, Link-in-Bio host rejection, and unsafe decoded payload rejection.
- Passed mobile Chromium scenarios: same six scenarios plus mobile control visibility/viewport bounds.
- One expected skip: mobile-layout-only test is skipped in desktop project.
- During QA, a real long-payload QR overflow was fixed by using QR error-correction level M for Bundle/Link-in-Bio while retaining H for single-profile QR. The unsafe-payload assertion was corrected to verify the original maker UI remains and no unsafe link/profile is rendered.
- This is automated Chromium desktop + Pixel 7 emulation evidence. Physical-device QR scan, manual keyboard/screen-reader/accessibility review, and production deployment verification remain pending.
- PR #248 remains draft/open and is not merged. Do not merge or deploy without explicit approval.


## 2026-11-17 — Keyboard accessibility follow-up and CI run #12

- Source improvement: social platform tile controls now form a labelled group (`role="group"`, `aria-label="Choose a social platform"`) and expose selected state with `aria-pressed` true/false. The click and select-change synchronization keeps the state in step with the native platform select.
- Added a Playwright keyboard test: focus the Facebook tile, activate with Enter, confirm the native select changes and the pressed state updates for Facebook/Instagram.
- GitHub Actions run #12: https://github.com/barsulkhan/InfoJano/actions/runs/44128659910 — **SUCCESS**.
- Result: **15 passed, 1 expected skip, 0 failed** across Chromium desktop and Pixel 7 mobile emulation. Keyboard selection/pressed-state test passed in both projects.
- Earlier run #11 also passed after the platform-state markup change: 13 passed, 1 expected skip, 0 failed.
- These are automated keyboard interaction and ARIA-state assertions, not a complete screen-reader audit. Manual screen-reader review and physical-device QR scanning remain pending.
- PR #248 remains draft/open and unmerged; no deployment performed.


## 2026-11-17 — QR PNG payload decoding added (CI rerun pending)

- Identified an evidence gap: earlier browser tests asserted that the generated image was a PNG and that the adjacent text field contained the expected URL, but did not independently inspect the QR image's encoded contents.
- Added QA-only `jsqr` and `pngjs` dependencies in `qa/browser/package.json`.
- New test helper decodes the PNG pixel data from the generated image's base64 data URI.
- Added exact payload assertions for all 12 profile QR codes, Bundle QR, and Link-in-Bio QR.
- Expected: each decoded QR payload equals the corresponding profile URL or generated `?hub=` URL.
- Implementation committed to PR #248 branch; a new GitHub Actions run must pass before these new checks can be marked PASS.
- Physical phone camera scan remains an optional final interoperability check; automated decoding now independently verifies the image's QR payload.


## 2026-11-17 — Decoder CI found Snapchat contrast defect

- Run #44132861727: **FAILURE** — 13 passed, 1 skipped, 2 failed (same all-12-platform decoder test on desktop and mobile).
- Failure evidence: QR decoder could not decode the generated Snapchat image. Inspected CI screenshot; yellow Snapchat QR modules on white background were low contrast.
- Root cause: brand accent #D6B900 was reused as the QR module color.
- Fix committed on PR #248 branch: QR modules for Snapchat now use near-black while the surrounding card retains the Snapchat yellow theme.
- Fix commit: `5f35b40e40f26c7b98a9dfba88112a37a215f717`.
- New CI run required to verify; status pending.


## 2026-11-17 — QR image decoding and Snapchat contrast fix verified

- GitHub Actions run #44133825130: https://github.com/barsulkhan/InfoJano/actions/runs/44133825130 — **SUCCESS**.
- Result: **15 passed, 1 expected skip, 0 failed** in Chromium desktop and Pixel 7 mobile emulation.
- The test decoded generated PNG pixel data and checked exact payloads for all 12 social profile platforms, Bundle QR and Link-in-Bio QR.
- Snapchat's QR uses near-black modules while the card remains yellow; decoder assertions now pass on desktop and mobile.
- Existing wrong-host, unsafe payload, landing-page, download, mobile bounds and keyboard/ARIA assertions passed.
- The single skip is the mobile-only viewport assertion in the desktop project; it runs in the mobile project.
