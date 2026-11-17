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

## 2026-11-17 — Browser QA harness added (execution pending)

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
