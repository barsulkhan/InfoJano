# InfoJano — AdSense & Consent Compliance Tracker

Last updated: 2026-11-15
Site: https://infojano.com
Repository: https://github.com/barsulkhan/InfoJano
Overall status: In progress

## User-approved scope and constraints
- Continue the existing Google AdSense account/site configuration audit for infojano.com.
- User confirms that the AdSense **Request review** action has already been submitted. Do not ask them to submit it again unless the account explicitly requests a new action.
- Give the user one simple manual instruction at a time, in Bengali. If text entry is required, provide exact copyable text.
- Do not change website code, DNS, AdSense settings, PR merge state, or production website without explicit user approval.
- Do not press **Publish changes** or alter CMP settings during audit.
- Preserve all existing records; do not repeat completed tasks.

## Feature cards

### In progress
- [ ] [CARD-001] Verify current AdSense site-review status after the user-submitted Request review — acceptance: inspect current Site Details status and record exact visible status; do not infer approval from request submission.
- [ ] [CARD-002] Audit Google Privacy & Messaging European regulations message — inspect all four preview states and current setup without publishing.
- [ ] [CARD-003] Verify live Privacy and cookie settings / consent-revocation link — acceptance: locate and test the live link, not just the editor preview.
- [ ] [CARD-004] Verify Google-certified CMP and EEA consent behavior — distinguish editor metadata from actual live behavior.
- [ ] [CARD-005] Verify TCF v2.4 compatibility and related vendor/consent signals using current Google/IAB documentation and available evidence.
- [ ] [CARD-006] Audit ads.txt live availability and publisher record — do not edit or deploy without approval.

### Backlog
- [ ] [CARD-007] Review Privacy Policy URL/content and its connection from the consent message.
- [ ] [CARD-008] Review Privacy & Messaging configuration recommendations after evidence collection; propose changes for user approval before applying.

## Current evidence and observations (user screenshots / confirmations)
- 2026-11-15 — User confirms **Yes**, the AdSense Request review action has already been performed. Exact current Site Details status after submission has not yet been rechecked in this session.
- AdSense Privacy & Messaging > European regulations > Messages shows a published message named “European regulations message - infojano.com”; the visible row showed English (en), +31 more languages, and Published.
- The message editor Setup preview shows infojano.com, default language English, 31 additional languages selected.
- User choices shown in the editor: Consent ON; Manage options ON; Do not consent OFF; Close (do not consent) OFF; Optimize consent message ON.
- European regulations Settings screenshots showed: Automatically include common ad partners (199 partners); “Allow Google to maximize message coverage” unchecked; DSA transparency control unchecked; RTB partner creative consent check unchecked; Legitimate interest controls checked; Enable by default checked; Consent mode for advertising unchecked; IAB TCF Special Feature 2 unchecked; own purposes 0 selected.
- These are observations only. No setting was changed and no recommendation has yet been applied.
- Consent Message Editor has four preview states: Consent (1 of 4), Manage options (2 of 4), Ad partners (3 of 4), Revocation link (4 of 4).
- Ad partners preview displayed “Confirm our vendors”, “TCF vendors”, “Accept all” and “Confirm choices”. User reports the TCF vendors label did not open a list when clicked. Treat as preview behavior, not a failed live vendor-list test.
- Revocation link preview footer visibly displayed “Privacy and cookie settings”, “Managed by Google”, “Complies with IAB TCF”, and “CMP ID 300”. This is editor-preview evidence only; it does not prove live-site rendering or current TCF v2.4 signal validity.
- User opened https://infojano.com and used browser Find for “privacy and cookie settings”; screenshot showed 0/0 matches on the page at the time. This indicates the exact text was not found by browser Find, not that every possible consent/revocation UI path is absent.
- Styling editor was inspected; no styling changes were made.
- User has not pressed Publish changes during this audit.

## Historical AdSense notes to preserve
- Existing AdSense account connection was previously merged in PR #66; do not repeat this work.
- AdSense ads.txt authorization was previously merged in PR #95 (merge commit recorded in docs/04_InfoJano_Master_CURRENT_2026-11-12.md).
- Root ads.txt exists in GitHub main, but the historical master notes say live https://infojano.com/ads.txt response was not verified. Recheck only as an audit; do not change code without approval.
- Earlier records said ads should remain disabled until approval and ads.txt placement/serving are verified. Do not claim ads are serving solely because Auto ads is ON.

## QA and release checklist
- [ ] Current AdSense Site Details status rechecked after Request review
- [ ] Live privacy/cookie settings link found and tested
- [ ] Consent, Manage options, Ad partners, Revocation link reviewed
- [ ] Google CMP live behavior verified separately from editor preview
- [ ] EEA consent choices and reject path verified
- [ ] TCF v2.4 compatibility verified from current authoritative documentation/evidence
- [ ] ads.txt exact live response verified
- [ ] User approval obtained before any settings/code/DNS/production change
- [ ] No Publish changes action without explicit approval

## Detailed work log

### 2026-11-15 — Resume AdSense review and Privacy & Messaging audit
- Requested: continue InfoJano from the current AdSense Site Details / Privacy & Messaging state; preserve all work; ask whether Request review was already submitted; audit Review, Privacy & Messaging, Google-certified CMP, EEA Consent and TCF v2.4.
- Inspected: GitHub handoff, tracking standard, research standard, tool index, migration supplement and current master notes; user-provided AdSense screenshots.
- User confirmation: Request review = Yes. The current Site Details status after submission is not yet rechecked.
- Inspected screenshots: published European regulations message; Setup choices; European regulations Settings; Styling panel; all four preview states; Ad partners and Revocation link previews.
- Tests and results:
  - Editor preview states inspected from user screenshots — observed.
  - Browser Find for “privacy and cookie settings” on live infojano.com — 0/0 matches in user screenshot.
  - Live click/behavior of revocation link — NOT RUN.
  - Live consent/reject behavior — NOT RUN.
  - CMP ID 300 / IAB TCF footer — visible in editor preview only; not independent live verification.
  - TCF v2.4 — NOT VERIFIED.
  - ads.txt live HTTP/body — NOT RUN in this session.
- Changed: no website source, DNS, AdSense setting, PR, merge, or production state changed. A project tracking note is being created to preserve this audit.
- Issues: privacy/cookie settings text was not found by browser Find on the live homepage screenshot; root cause unknown. The Ad partners preview's TCF vendors label did not open for the user; no live vendor-list test was performed.
- Still pending: recheck Site Details status; continue audit one manual step at a time; verify live revocation link and consent behavior; authoritative TCF v2.4 verification; ads.txt live check.
- Next step: ask user to open AdSense > Sites > infojano.com and send a screenshot of the current status after the already-submitted Request review.
- Protected areas preserved: no code, DNS, AdSense settings, PR merge, or production website changes; Publish changes not pressed.

## Decisions and handoff
- 2026-11-15 — Request review was already submitted per user confirmation. Never ask to submit it again by default; inspect the current status first.
- 2026-11-15 — Continue in Bengali with one short manual instruction at a time.