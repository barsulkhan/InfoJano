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
- Product-code changes remain limited to `social-qr-maker.html`; automated QA infrastructure is isolated under `qa/browser/` and its dedicated workflow.
- Normal QR source, shared site layout and unrelated completed tools remain protected.

## Feature cards

### Completed in this branch (source implementation; QA still pending)
- [x] [CARD-001] Bundle mode theme — choose bundle styling from the active QR mode, not the disabled platform selector.
- [x] [CARD-002] Social URL validation — validate HTTP(S) URLs against the selected platform's allowed domains; validate usernames before constructing profile URLs; apply consistent validation to bundle and Link-in-Bio inputs.
- [x] [CARD-003] Social Link Page destination safety — validate decoded hub payload fields and destination domains before creating outbound links.
- [x] [CARD-004] Honest generation status — wait for asynchronous QR generation and show success only when a PNG was actually produced.

### In progress
- [x] [CARD-005] Source and script syntax verification — all five inline JavaScript blocks parse; six source assertions and nine isolated URL-normalizer tests pass.
- [ ] [CARD-006] Functional/browser QA — run the new Playwright suite for all 12 platforms, bundle, Link-in-Bio, PNG download, error states and desktop/mobile emulation; physical scan and accessibility review remain manual.
- [ ] [CARD-008] Isolated Playwright harness — test files, desktop/mobile Chromium config and PR workflow added on `qa/social-qr-playwright`; execution/CI evidence pending.

### Backlog / blocked
- [ ] [CARD-007] Dynamic QR editing, scan analytics and account-backed saved pages — not present in this static page; requires a separately researched backend/API, privacy/security design, and explicit scope approval.

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
- [x] Merge: PR #247 merged to main (commit `7ba875f2480ce6a53cf2942566eafa6984ed0447`)
- [ ] GitHub Pages deployment: not yet independently verified

## Detailed work log

### 2026-11-17 — Social QR completion bug-fix session
- Requested: complete remaining Social Media QR work while leaving previously completed files untouched and keeping Normal QR separate.
- Inspected: current `social-qr-maker.html`, tool work-tracking standard, research standard, tool index, and current master/project records.
- Changed: only `social-qr-maker.html` in this branch; added this tracker and QA ledger; updated tool index.
- Tests and results: source implementation re-fetched after each commit; source-level assertions and actual JS syntax/browser tests remain to be recorded. No real browser is connected in this session.
- PR/commit/workflow: PR #247 merged to `main` by squash commit `7ba875f2480ce6a53cf2942566eafa6984ed0447`; no PR workflow runs or status checks were returned.
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
- Next: create PR for isolated QA harness, inspect workflow result and fix any test failures; physical phone scanning and accessibility remain manual.
