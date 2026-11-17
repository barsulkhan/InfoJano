# Social Media QR Maker — Work Tracker

Last updated: 2026-11-17
Tool page: https://infojano.com/social-qr-maker.html
Source: `social-qr-maker.html`
Overall status: In progress — core fixes merged; automated browser QA passed; QR PNG payload-decoding assertions added and awaiting CI rerun

## User-approved scope and constraints
- Complete only the unfinished Social Media QR Maker work.
- Keep Normal QR (`qr-maker.html`) and Social Media QR (`social-qr-maker.html`) as separate products with separate behavior.
- Do not modify Normal QR source, shared header, homepage, protected/previously completed files, or unrelated tools.
- No new Normal QR features are to be copied into Social QR.
- Product-code changes remain limited to `social-qr-maker.html`; automated QA infrastructure is isolated under `qa/browser/` and its dedicated workflow.
- Normal QR source, shared site layout and unrelated completed tools remain protected.

## Feature cards

### Completed
- [x] [CARD-001] Bundle mode theme — choose bundle styling from the active QR mode, not the disabled platform selector.
- [x] [CARD-002] Social URL validation — validate HTTP(S) URLs against the selected platform's allowed domains; validate usernames before constructing profile URLs; apply consistent validation to bundle and Link-in-Bio inputs.
- [x] [CARD-003] Social Link Page destination safety — validate decoded hub payload fields and destination domains before creating outbound links.
- [x] [CARD-004] Honest generation status — wait for asynchronous QR generation and show success only when a PNG was actually produced.

### In progress
- [x] [CARD-005] Source and script syntax verification — all five inline JavaScript blocks parse; six source assertions and nine isolated URL-normalizer tests pass.
- [x] [CARD-006] Automated functional/browser QA — GitHub Actions run #12 passed: 15 passed, 1 expected desktop-only skip, 0 failed across Chromium desktop and Pixel 7 emulation. Keyboard platform selection and ARIA pressed-state checks passed; physical scan and manual screen-reader review remain pending.
- [x] [CARD-008] Isolated Playwright harness — desktop/mobile Chromium config, 8 browser scenarios, scoped PR workflow and README added; GitHub Actions run #12 passed (15 passed, 1 expected skip, 0 failed). PR #248 remains draft/open and unmerged.

### Backlog / blocked
- [ ] [CARD-007] Dynamic QR editing, scan analytics and account-backed saved pages — not present in this static page; requires a separately researched backend/API, privacy/security design, and explicit scope approval.

## Bugs and follow-ups
- 2026-11-17 — Bundle mode could render with the default Instagram theme because the code checked the disabled platform selector instead of the selected QR mode — fixed in CARD-001.
- 2026-11-17 — Profile mode accepted arbitrary HTTP(S) hosts and advanced modes did not consistently validate social destinations — hardened in CARD-002.
- 2026-11-17 — Decoded `?hub=` data could supply arbitrary external destinations — filtered by platform/domain allowlist in CARD-003.
- 2026-11-17 — UI could announce success before asynchronous QR generation finished — corrected in CARD-004.

## QA and release checklist
- [x] JavaScript syntax check (5/5 inline blocks parsed):
- [x] Source assertions for mode, URL allowlists, hub payload validation, and generation result (6/6):
- [x] 12-platform functional tests (Chromium):
- [x] Bundle mode tests (generation, landing page and PNG download):
- [x] Link-in-Bio generation and decoded-page tests:
- [ ] Physical-device PNG scan reliability:
- [x] Mobile browser QA (Pixel 7 emulation):
- [x] Desktop browser QA (Chromium):
- [x] Automated keyboard/ARIA state assertions (not a full screen-reader audit):
- [x] Pull request CI browser checks (run #12 passed; latest QR-decoder enhancement awaits rerun):
- [x] Merge: PR #247 merged to main (commit `7ba875f2480ce6a53cf2942566eafa6984ed0447`)
- [ ] GitHub Pages deployment: not yet independently verified

## Detailed work log

### 2026-11-17 — Social QR completion bug-fix session
- Requested: complete remaining Social Media QR work while leaving previously completed files untouched and keeping Normal QR separate.
- Inspected: current `social-qr-maker.html`, tool work-tracking standard, research standard, tool index, and current master/project records.
- Changed: only `social-qr-maker.html` in this branch; added this tracker and QA ledger; updated tool index.
- Tests and results: source implementation re-fetched after each commit; source-level assertions and actual JS syntax/browser tests remain to be recorded. No real browser is connected in this session.
- PR/commit/workflow: PR #247 merged to `main` by squash commit `7ba875f2480ce6a53cf2942566eafa6984ed0447`. Next QA harness is in PR #248 (draft): https://github.com/barsulkhan/InfoJano/pull/248.
- Issues and resolution: fixed bundle theme selection, platform/domain URL validation across modes, decoded hub destination validation, asynchronous generation status reporting, and cross-IIFE validator scope.
- Still pending: real browser and device QA; verify QR scan behavior and actual image downloads. Dynamic editing/analytics/account storage remain blocked pending backend research and approval.
- Next step: run the new isolated Playwright suite; retain manual physical-device QR scan and accessibility QA as separate evidence.

- Protected areas preserved: `qr-maker.html`, shared scripts/assets, homepage, headers/footers and unrelated tool pages were not edited.

### 2026-11-17 — Next task: isolated browser QA harness
- Requested: merge the completed Social QR bug-fix PR and start the next unfinished work.
- Merge verified: PR #247 is closed/merged; squash commit `7ba875f2480ce6a53cf2942566eafa6984ed0447`.
- Inspected: Social QR DOM IDs and QR generation/download behavior, mandatory work-tracking standard, and the existing workflow-improvement proposal. The proposal already recommends a Playwright harness isolated from the static site root.
- Added on branch `qa/social-qr-playwright`: `qa/browser/package.json`, Playwright config, Social QR-only browser specs, README and `.github/workflows/social-qr-browser-tests.yml`.
- Planned automated coverage: 12 platforms, wrong-host rejection, Bundle QR + Social Links page, Link-in-Bio rendering/validation, PNG download, mobile control bounds.
- Tests: not executed in this environment; dependency installation/browser binaries are unavailable here. The new workflow will execute in GitHub Actions after PR creation. No claim of browser test pass.
- Protected areas: no changes to `social-qr-maker.html` after the merge, `qr-maker.html`, shared header/assets, homepage or unrelated tools.
- Next: inspect PR #248 browser workflow once GitHub Actions reports; fix failures before merge. Physical phone scanning and accessibility remain manual.

### 2026-11-17 — Browser QA harness PR opened
- Created draft PR #248: https://github.com/barsulkhan/InfoJano/pull/248.
- PR changed-file audit: exactly eight QA/tracking/workflow files; neither QR product source is changed in this PR.
- JavaScript parser checks and package.json parse passed. GitHub Actions run #3 is in progress (dependency install passed; Chromium install in progress); browser test result not yet available.
- The test suite is isolated to Social QR; no Normal QR feature or source was copied.


### 2026-11-17 — Automated browser QA passed
- GitHub Actions run #7 completed successfully: 13 passed, 1 expected skip, 0 failed.
- Desktop Chromium and Pixel 7 mobile emulation passed profile QR generation (all 12 platforms), wrong-host rejection, Bundle QR/landing page/download, Link-in-Bio rendering/validation, unsafe decoded payload rejection, and mobile viewport checks.
- Bundle/Link-in-Bio QR overflow fixed by using QR error-correction level M for long hub URLs; single-profile QR retains level H.
- PR #248 remains draft/open and unmerged. Physical device scan, manual accessibility QA and deployment verification remain pending.


### 2026-11-17 — Keyboard accessibility follow-up
- Platform tile group now has an accessible name and each tile exposes the selected state through `aria-pressed`.
- Keyboard Enter selection and state synchronization verified in desktop and mobile Chromium by Actions run #12: 15 passed, 1 expected skip, 0 failed.
- Full screen-reader testing and physical QR scanning remain manual follow-ups.


### 2026-11-17 — QR image decoding automation added
- Added isolated QA-only dependencies `jsqr` and `pngjs` under `qa/browser/package.json`; no website/runtime dependency added.
- Extended Playwright tests to decode the actual generated PNG pixel data and compare the QR payload with the expected profile URL for all 12 platforms.
- Added the same image-decoding assertion for Bundle and Link-in-Bio QR output, checking that the encoded destination is exactly the generated `?hub=` URL.
- This closes an important gap: prior browser tests checked that a PNG existed and that the text field held the expected URL, but did not independently decode the image itself.
- Latest code commit: `7bd2094c727857447a2afa9c54d7732b55ac715c`; CI rerun is required before marking these new assertions passed.
- Physical-device scanning remains useful as a final real-camera interoperability check, but should no longer be needed to prove the PNG contains the intended QR payload.


### QR decoder follow-up — Snapchat contrast issue found
- New PNG decoding tests caught a real issue missed by the previous UI-only checks: Snapchat's yellow QR modules had insufficient contrast against white for reliable decoding.
- The card remains Snapchat yellow, but the QR matrix now uses near-black modules to preserve brand presentation while improving scan contrast.
- Fix commit: `5f35b40e40f26c7b98a9dfba88112a37a215f717`.
- Awaiting CI rerun before marking QR decoding as passed.
