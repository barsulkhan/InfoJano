# Social Media QR Maker — Research Dossier

Last updated: 2026-11-17
Scope: `social-qr-maker.html` only, plus isolated QA infrastructure and this tool's records.
Production page: https://infojano.com/social-qr-maker.html
PR #247 (merged core fixes): https://github.com/barsulkhan/InfoJano/pull/247
PR #248 (draft/open QA branch; not approved to merge): https://github.com/barsulkhan/InfoJano/pull/248
Working branch: `qa/social-qr-playwright`

## 1. Scope, governance and exclusions

- This work is exclusively for Social Media QR Maker.
- Normal QR is a separate product at `qr-maker.html`; it must not be mixed into Social QR or modified as part of this work.
- Protected files include homepage, shared header/footer/assets, unrelated tools and already completed source outside the approved scope.
- Product-code changes in this effort are limited to `social-qr-maker.html`; browser QA dependencies/configuration live under `qa/browser/`.
- PR #247 was explicitly approved and merged. PR #248 is still draft/open and must not be merged or deployed without explicit user approval.
- No production deployment is claimed or verified by this dossier.

## 2. Research questions and findings

### 2.1 Bundle theme selection
Finding: Bundle mode could use the default platform theme because the implementation inspected the disabled platform selector rather than the active QR mode.
Resolution: derive the Bundle/Link-in-Bio styling decision from `#ij-qr-mode`.

### 2.2 Social URL validation
Finding: profile mode needed strict protocol and platform-host checks; advanced modes needed the same validation to avoid inconsistent acceptance.
Resolution: validate HTTP(S), reject credentials and deceptive host suffixes, apply platform host allowlists, validate usernames before URL construction, encode path components, and use the shared normalizer in Bundle and Link-in-Bio. WhatsApp numbers are constrained to 8–15 digits. The normalizer is exposed as `window.ijNormalizeSocialProfileUrl` for use across separate IIFEs.

### 2.3 Decoded Social Link Page safety
Finding: URL query payloads are untrusted input and must not be converted directly into outbound links.
Resolution: validate decoded name/bio/link fields, platform-label-to-host mapping and destination protocol/domain before rendering outbound anchors.

### 2.4 Honest generation status
Finding: the UI could report success before asynchronous QR generation had actually produced an image.
Resolution: await QR generation and only report success when the generation result confirms an image was produced.

### 2.5 Long Bundle/Link-in-Bio payloads
Finding: browser QA exposed QR generation overflow for longer hub URLs with error-correction level H.
Resolution: use error-correction level M for Bundle/Link-in-Bio payloads while retaining H for single-profile mode. The change was made on PR #248's branch and must remain covered by the CI suite.

### 2.6 Keyboard selection state
Finding: platform tiles needed a programmatically exposed group name and selected state.
Resolution: label the tile group and synchronize each tile's `aria-pressed` state with click and native select changes. Automated Enter-key and ARIA-state assertions were added. This is not a full assistive-technology audit.

### 2.7 QR image evidence gap
Finding: previous browser tests verified that a PNG data URI existed and the adjacent URL field was correct, but did not independently decode the QR image. Therefore the tests did not prove that the pixels in the PNG encoded the intended destination.
Resolution added on 2026-11-17: install QA-only `jsqr` and `pngjs`; decode actual PNG pixel data and compare the decoded QR text to the expected URL for each of the 12 profile platforms, Bundle and Link-in-Bio. This is a major step toward removing the need for a human to scan every test image.
Initial CI run #44132861727 exposed a real contrast problem: 13 passed, 1 skipped, 2 failed (the 12-platform decode test failed on Snapchat in both desktop and mobile). The screenshot showed the Snapchat QR's yellow modules were too close to the white background for reliable decoding. Fix applied on the PR branch: keep the Snapchat card yellow but render QR modules in near-black for high contrast. The rerun is pending; do not mark the decoder suite passed until CI confirms it.

## 3. Implemented changes

### PR #247 — merged
- Bundle theme selection follows the active QR mode.
- Profile URL validation uses protocol/platform-host allowlists and rejects credentials/deceptive host suffixes.
- Username validation and URL path-component encoding.
- Bundle and Link-in-Bio use consistent validation; WhatsApp number length is checked.
- Decoded hub payload validation before outbound link creation.
- QR generation is awaited and success is only reported after actual image creation.
- Shared URL normalizer exposed across IIFEs.

Merged squash commit: `7ba875f2480ce6a53cf2942566eafa6984ed0447`.

### PR #248 — draft/open, not merged
- Isolated Playwright harness in `qa/browser/`.
- Chromium desktop and Pixel 7 mobile emulation.
- Tests for 12 platforms, wrong-platform URLs, Bundle, Link-in-Bio, unsafe decoded payloads, mobile viewport, keyboard selection and ARIA pressed state.
- Bundle/Link-in-Bio QR error correction adjusted to handle longer payloads.
- Latest addition: decode generated PNG files and verify actual QR payload text.
- Workflow and documentation updates remain in this draft PR.

## 4. Test evidence

### Completed evidence from prior CI runs
- JavaScript inline block parsing: 5/5 passed.
- Source assertions: 6/6 passed.
- Isolated URL normalizer cases: 9/9 passed.
- GitHub Actions run #7: 13 passed, 1 expected skip, 0 failed.
  https://github.com/barsulkhan/InfoJano/actions/runs/44127825234
- GitHub Actions run #12: 15 passed, 1 expected skip, 0 failed.
  https://github.com/barsulkhan/InfoJano/actions/runs/44128659910
- Run #12 covered desktop Chromium and Pixel 7 emulation, 12-platform QR generation, Bundle, Link-in-Bio, invalid hosts, unsafe payload, mobile bounds and keyboard/ARIA state.

### Newly added evidence requirement
- Decode each generated QR PNG with `jsqr` using pixel data parsed by `pngjs`.
- Assert decoded profile payload equals each expected profile URL for all 12 platforms.
- Assert decoded Bundle and Link-in-Bio payload equals the generated hub URL.
- Status: awaiting CI rerun on the latest branch commits. The earlier run #12 does not include this newly added code and cannot be used as evidence for it.

## 5. What can be tested without a physical phone

Automatable:
- Actual QR PNG decodability and encoded payload correctness.
- Exact destination URL for each supported platform.
- Bundle/Link-in-Bio hub URL encoding and rendered destinations.
- Validation and malicious-payload rejection.
- PNG download event and filename.
- Desktop/mobile browser layout and keyboard interaction.
- Repeatable regression checks on every relevant PR.

Not fully replaceable by automation:
- Real camera focus, distance, glare, print quality and scan behavior across physical camera apps.
- Complete screen-reader experience across operating systems and assistive technologies.
- Production deployment and live CDN/browser verification, unless separately checked against the live site.

The physical scan is therefore a final interoperability confidence check, not a requirement to manually scan every generated QR once image decoding CI passes.

## 6. Current state and remaining work

1. Wait for GitHub Actions to run against the latest PR #248 commits after adding QR image decoding.
2. Inspect the workflow result and logs. If dependency install, decoder or image assertions fail, fix and rerun; record each failure and root cause here and in the QA log.
3. Reconcile README, QA log and Tool Index with the final CI evidence.
4. Perform a final changed-file audit to ensure protected files and `qr-maker.html` remain untouched.
5. Ask the user for one optional physical-camera scan of representative Profile and Bundle/Link-in-Bio output if they are willing; user does not need to scan all 12 profiles.
6. Obtain explicit approval before merging PR #248. Verify production only after a separately confirmed deployment.

## 7. Product backlog requiring separate research and approval

Dynamic QR editing, scan analytics and account-backed saved pages are not implemented by this static page. They require separate backend/API architecture, data retention and privacy review, security controls, cost/abuse analysis and explicit scope approval. Do not represent them as completed or silently add them to this PR.

## 8. Decision

Most QR correctness checks can be performed automatically by decoding the generated PNG in CI. A physical phone scan can be reduced to a small final interoperability check. Until the new QR-decoder CI run passes, the added decoder coverage is implemented but not yet verified. PR #248 remains unmerged and no production deployment is claimed.


## 2026-11-17 — QR decoder CI failure and contrast correction
- Workflow run #44132861727 failed only in the new all-platform QR decode test: 13 passed, 1 skipped, 2 failed (desktop and mobile variants).
- Downloaded and inspected the Playwright failure screenshot. The loop had advanced to Snapchat; its yellow QR modules (#D6B900) on white did not decode reliably.
- Root cause: the Snapchat brand accent was also used as the QR foreground, producing insufficient foreground/background contrast for machine decoding.
- Fix on PR #248 branch: use near-black QR modules for Snapchat while preserving the Snapchat yellow branded card and footer. Other platforms retain their selected theme accent.
- Commit: `5f35b40e40f26c7b98a9dfba88112a37a215f717`.
- Status: CI rerun pending. Do not claim fix verified until the new workflow run passes.
