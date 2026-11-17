# Social Media QR Maker — Work Tracker

Last updated: 2026-11-17
Tool page: https://infojano.com/social-qr-maker.html
Source: `social-qr-maker.html`
Overall status: In progress

## User-approved scope and constraints
- Complete only the unfinished Social Media QR Maker work.
- Keep Normal QR (`qr-maker.html`) and Social Media QR (`social-qr-maker.html`) as separate products with separate behavior.
- Do not modify Normal QR source, shared header, homepage, protected/previously completed files, or unrelated tools.
- No new Normal QR features are to be copied into Social QR.
- Work is limited to the Social QR page and its tracking records on branch `fix/social-qr-maker-completion`.
- No merge, deployment, or production release is authorized by this work session.

## Feature cards

### Completed in this branch (source implementation; QA still pending)
- [x] [CARD-001] Bundle mode theme — choose bundle styling from the active QR mode, not the disabled platform selector.
- [x] [CARD-002] Social URL validation — validate HTTP(S) URLs against the selected platform's allowed domains; validate usernames before constructing profile URLs; apply consistent validation to bundle and Link-in-Bio inputs.
- [x] [CARD-003] Social Link Page destination safety — validate decoded hub payload fields and destination domains before creating outbound links.
- [x] [CARD-004] Honest generation status — wait for asynchronous QR generation and show success only when a PNG was actually produced.

### In progress
- [x] [CARD-005] Source and script syntax verification — all five inline JavaScript blocks parse; six source assertions pass; nine isolated URL-normalizer tests pass. Browser QA remains separate.
- [ ] [CARD-006] Functional/browser QA — test all 12 platform profile paths, bundle, Link-in-Bio, download, scan behavior, error states, and desktop/mobile layout in a real browser.

### Backlog / blocked
- [ ] [CARD-007] Dynamic QR editing, scan analytics and account-backed saved pages — not present in this static page; requires a separately researched backend/API, privacy/security design, and explicit scope approval. Not silently added to this bug-fix batch.

## Bugs and follow-ups
- 2026-11-17 — Bundle mode could render with the default Instagram theme because the code checked the disabled platform selector instead of the selected QR mode — fixed in CARD-001.
- 2026-11-17 — Profile mode accepted arbitrary HTTP(S) hosts and advanced modes did not consistently validate social destinations — hardened in CARD-002.
- 2026-11-17 — Decoded `?hub=` data could supply arbitrary external destinations — filtered by platform/domain allowlist in CARD-003.
- 2026-11-17 — UI could announce success before asynchronous QR generation finished — corrected in CARD-004.

## QA and release checklist
- [ ] JavaScript syntax check:
- [ ] Source assertions for mode, URL allowlists, hub payload validation, and generation result:
- [ ] 12-platform functional tests:
- [ ] Bundle mode tests:
- [ ] Link-in-Bio generation and decoded-page tests:
- [ ] PNG download and scan reliability:
- [ ] Mobile browser QA:
- [ ] Desktop browser QA:
- [ ] Keyboard/accessibility checks:
- [ ] Pull request checks:
- [ ] Merge: not authorized
- [ ] GitHub Pages deployment: not authorized / not run

## Detailed work log

### 2026-11-17 — Social QR completion bug-fix session
- Requested: complete remaining Social Media QR work while leaving previously completed files untouched and keeping Normal QR separate.
- Inspected: current `social-qr-maker.html`, tool work-tracking standard, research standard, tool index, and current master/project records.
- Changed: only `social-qr-maker.html` in this branch; added this tracker and QA ledger; updated tool index.
- Tests and results: source implementation re-fetched after each commit; source-level assertions and actual JS syntax/browser tests remain to be recorded. No real browser is connected in this session.
- PR/commit/workflow: commits are listed in the branch history; no PR or merge created yet.
- Issues and resolution: fixed bundle theme selection, platform/domain URL validation across modes, decoded hub destination validation, asynchronous generation status reporting, and cross-IIFE validator scope.
- Still pending: real browser and device QA; verify QR scan behavior and actual image downloads. Dynamic editing/analytics/account storage remain blocked pending backend research and approval.
- Next step: complete static source checks, then open a reviewable PR; do not merge/deploy without explicit approval.
- Protected areas preserved: `qr-maker.html`, shared scripts/assets, homepage, headers/footers and unrelated tool pages were not edited.
