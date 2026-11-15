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
- [ ] [CARD-003] Verify live Privacy and cookie settings / consent-revocation link — editor preview exists; live link and reopen behavior still unverified.
- [ ] [CARD-004] Verify Google-certified CMP and EEA consent behavior — CMP identity verified; live runtime behavior still unverified.
- [ ] [CARD-006] Audit ads.txt live availability and publisher record — source pass; live HTTP response and crawler status unverified.

### Completed (audit/research evidence only; no production changes)
- [x] [CARD-001] Record current AdSense site-review status — user screenshot shows Getting ready; this completes the status observation, not Google's review.
- [x] [CARD-002] Audit Google Privacy & Messaging European regulations editor — published message, setup, settings and all four preview states inspected; no changes made.
- [x] [CARD-005] Check Google CMP listing and TCF v2.4 documentation — Google CMP ID 300 listing and official Google/IAB timeline/support reviewed; live TC signal remains unverified..

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

### 2026-11-15 — Independent Google/IAB and repository compliance audit
- Requested: use the user's 30-minute window to complete every part that can be verified independently; avoid repeating already completed editor review.
- Re-read: current AdSense tracker, current project handoff and repository standards.
- Official Google documentation reviewed:
  - Google AdSense European regulations messages: https://support.google.com/adsense/answer/10961068?hl=en
  - Google-certified CMP requirements/list: https://support.google.com/adsense/answer/13554116?hl=en
  - Google CMP setup: https://support.google.com/adsense/answer/7670013?hl=en
- Official IAB Europe timeline reviewed:
  - Notification dated 16 July 2026: https://iabeurope.eu/wp-content/uploads/TCF_V-CMP_comms_TCFpoliciesV5.0.bAndSpecificationsV2.4ConfirmationOf-theTimeline_160726_IABEurope.pdf
  - TCF v2.4 published 23 July 2026; web CMP new-disclosure deadline 23 October 2026; mobile app/CTV deadline 23 February 2027. The web deadline has passed as of this audit date.
- Verified against current Google certified CMP list: Google LLC CMP, TCF CMP ID 300, platform Web and app. This matches the CMP ID 300 displayed in the user's editor preview. This verifies the identity/listing, not the live website's runtime signals.
- Google states its Privacy & Messaging European regulations messages have been updated to support IAB TCF v2.4. The user's published Google European regulations message is therefore the right supported route; still need live/runtime verification to establish the site's emitted TC string and current CMP behavior.
- Google says consent revocation must remain available after initial choice; when reopened via a revocation link or site privacy settings, the message must show three choices: Do not consent, Consent, Manage options. The user's editor preview displays a Revocation link footer, but live availability is unverified.
- Repository checks:
  - Current main tree contains root ads.txt; exact contents are `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`. This matches Google's documented ads.txt line format and DIRECT relationship format. The publisher ID is omitted from this summary where not needed.
  - robots.txt allows all paths and points to https://infojano.com/sitemap.xml; no ads.txt disallow rule was found.
  - Current main tree contains NO privacy-policy.html or other privacy/cookie policy page. Search found a footer link to /privacy-policy.html in work-hours-calculator.html, so that link appears to point to a missing page in the current tree. This is a concrete repository defect, but creating legal policy text or deploying a new policy page requires the publisher's accurate data-processing, retention, third-party and contact details plus explicit approval.
  - No `Privacy and cookie settings` or CMP/revocation string was found by repository code search. Google CMP may inject this dynamically, so source search alone cannot prove runtime absence.
- Live checks attempted:
  - HTTPS root ads.txt, HTTP root ads.txt, www ads.txt and homepage could not be fetched by the available web inspection service (internal inspection error). Therefore HTTP status, redirect chain, body as served, Googlebot access and live page rendering remain UNVERIFIED.
  - User's prior browser Find screenshot showed 0/0 matches for “privacy and cookie settings”; this is consistent with a missing visible link but not conclusive because CMP UI may be injected or appear only for EEA visitors.
- Settings review decision:
  - Do not enable/disable Consent Mode, legitimate-interest purposes, DSA, RTB creative checks, Special Feature 2 or other options by guesswork. These controls depend on actual data uses and legal disclosures. In particular, Consent Mode is a separate optional integration for Google Ads/Analytics consent signals; it is not the same as whether the Google CMP is certified.
  - User's Special Feature 2 control was OFF in the screenshot. No evidence was found that InfoJano itself uses this feature; leave it OFF unless an actual use case is established.
  - The Ad partners preview's TCF vendors label failing to open remains an editor-preview observation only; Google documentation describes vendor preferences as the control that opens the vendor list. A live browser interaction is needed to diagnose it.
- Tests and results:
  - Official CMP list ID 300 and platform: PASS.
  - TCF v2.4 web timeline: PASS (authoritative IAB PDF).
  - Google Privacy & Messaging v2.4 support: PASS (Google help).
  - ads.txt source contents: PASS.
  - robots.txt crawler permission: PASS (source).
  - privacy-policy.html repository existence: FAIL / missing.
  - live ads.txt HTTP/Googlebot fetch: NOT RUN / tool could not access.
  - live CMP revocation link and TC string: NOT RUN.
  - current AdSense site review status: NOT RUN (requires signed-in account view).
- Changed: tracker documentation only. No website code, DNS, AdSense setting, CMP setting, PR, merge or production deployment changed. Publish changes not pressed.
- Pending / blockers: signed-in Site Details screenshot; EEA-region live CMP test; revocation link click and three-button reopen behavior; runtime TCF v2.4 TC string verification; ads.txt direct HTTP 200/body and Googlebot crawl confirmation; legal policy page content and approval.
- Next single user action: open AdSense > Sites > infojano.com and share a screenshot of the current review/status card. After that, continue to the live revocation test.
- Protected areas preserved: homepage hero, ID Card Print Studio hero, all calculator/tool heroes, source code, DNS and production settings untouched.

- Additional IAB Europe policy clarification reviewed (29 May 2026): TCF web UI must display standard explanation text alongside Features and feature illustrations; Special Feature 2 was renamed to “Identify devices based on information actively requested”. Source: https://iabeurope.eu/wp-content/uploads/TCF_V-CMP_comms_TCFpoliciesAmendmentsMulti-deviceConsentTCFUIimprovementsSpecialFeature2Clarification_290526_IABEurope.pdf
- The user's first-layer two-choice configuration (Consent + Manage options) is a documented Google European-message layout; Google also documents a three-button layout. This alone is not evidence of a defect. However, the revocation/reopen state must expose Do not consent, Consent and Manage options. Do not enable/disable the first-layer reject option solely from assumption; verify legal/user experience and account's live behavior.
- CMP ID 300 is explicitly listed as Google LLC CMP (Web and app), so no third-party CMP purchase or installation is indicated by current evidence.


### 2026-11-15 — User screenshot: current AdSense Sites status
- User supplied a fresh screenshot of AdSense > Sites > Manage your sites.
- The row for infojano.com visibly shows **Approval status: Getting ready**. The status filter tabs include Ready, Getting ready, Requires review and Needs attention.
- This is the current account UI evidence; it supersedes the earlier “status not yet rechecked” note.
- Interpretation: site is not currently shown as Ready/approved, nor shown in Requires review or Needs attention. Do not infer rejection or a need to resubmit. User previously confirmed Request review was already submitted; do not ask them to submit again.
- The screenshot's “Ads.txt status” appears to show “Not found” (low-resolution image; text is not sufficiently sharp to treat as definitive). Must recheck by opening the infojano.com row/details or a sharper screenshot before marking ads.txt live status. The “Last updated” field is also not reliably legible.
- Next manual check: click the infojano.com row to open Site details and inspect any displayed review details / ads.txt explanation. Do not click Request review or change any settings.
- Tests: current approval status — OBSERVED: Getting ready; detailed reason/status details — NOT VISIBLE / NOT VERIFIED; ads.txt status — POSSIBLY “Not found”, LOW-CONFIDENCE and pending confirmation.
- No account setting, website source, DNS or production state changed.


### 2026-11-15 — Follow-up: Google status definitions and live URL checks
- Reviewed current official Google AdSense help: https://support.google.com/adsense/answer/12170222?hl=en
  - “Getting ready” means Google is running checks; Google says review usually takes a few days and can take 2–4 weeks in some cases.
  - Google explicitly warns not to remove the site and resubmit, because this can delay the process.
  - “Not found” ads.txt means no ads.txt file was found when the AdSense crawler last crawled the site.
  - “Ready” means site is ready to show ads; “Needs attention” means issues must be fixed.
- Current screenshot status therefore means wait for Google's checks; no re-submission or removal is indicated. User already confirmed Request review was submitted.
- Additional context: Google AdSense community expert answers in recent threads state ads.txt is not required for the initial site review and may remain Not found while a new site is awaiting review; treat community replies as secondary guidance, not official policy.
- Attempted live URL inspection for https://infojano.com/ads.txt, https://infojano.com/robots.txt, and https://infojano.com/privacy-policy.html; web inspection service returned internal inaccessible errors for all three. Live HTTP status, redirects, response body and page availability remain UNVERIFIED (not evidence that URLs are down).
- No code, DNS, AdSense settings, CMP settings or production changes made.
- Current next steps within audit scope: user may open the infojano.com row in AdSense Sites to view status details and ads.txt details if desired; do not press Request review, remove/re-add site, or publish CMP changes. The repository's missing privacy-policy.html remains a source-level blocker; drafting/deploying legal policy requires accurate publisher disclosures and explicit approval.

### 2026-11-15 — Privacy Policy and ads.txt source audit (requested first)
- User asked to proceed with the Privacy Policy / ads.txt work first.
- Re-read latest project handoff and mandatory work-tracking/research standards before continuing.
- ads.txt source: root ads.txt exists on main and contains one Google DIRECT seller record with the required Google certification authority ID.
- robots.txt contains User-agent: * and Allow: /; no crawler block for ads.txt was found.
- This is a SOURCE PASS only. Live HTTPS/HTTP root response, redirects, HTTP 200, exact body served, and Google crawler access are still UNVERIFIED because live inspection requests failed. Do not edit a correct source record just because AdSense UI screenshot may show Not found.
- Privacy-policy page: no privacy-policy.html exists in current main tree, while work-hours-calculator.html footer links to /privacy-policy.html; this is a confirmed broken source-level link.
- Source-derived data processing findings:
  - GA4 gtag script with the same measurement ID is present in the homepage and multiple tool pages. Google Analytics default collection may include user/session statistics, approximate geolocation, browser/device information, and a first-party _ga identifier cookie (Google documentation).
  - Image Compressor source says image processing occurs in-browser and images are not uploaded to an InfoJano server.
  - Image-to-PDF source says browser-side processing and no server upload.
  - PDF-to-JPG source says browser-side processing; PDF.js is loaded from a public CDN.
  - Work Hours Calculator source says calculations are local; entries are saved in localStorage only when the user enables Remember my entries.
  - Word Converter has an optional high-fidelity route. The UI requires an explicit checkbox consent before uploading the DOCX; the browser sends the file to the configured HTTPS Cloudflare Worker, and the Worker forwards it to iLovePDF API. The browser stores the Worker URL in localStorage. The source's UI text says iLoveAPI India region. iLovePDF's API terms state API-processed files are deleted within a maximum of 48 hours (not the consumer service's 2-hour rule); exact contractual account settings should be checked before making a stronger claim.
  - Public CDNs are used for libraries; the exact inventory of all external libraries/vendors across every page still needs a full pass.
- Google AdSense official required-content guidance says the privacy policy must disclose Google/third-party ad cookies, web beacons/IP addresses/other identifiers, third-party vendors/ad networks and user opt-out options. Google Analytics default collection and AdSense cookie disclosures also need to be covered accurately.
- Legal-policy drafting is BLOCKED pending publisher-supplied contact email and confirmation that the source-derived inventory reflects the currently enabled production features/services. Do not invent an email, legal entity, jurisdiction, retention schedule for InfoJano, or data controller identity. Do not publish a placeholder policy.
- Official sources consulted: Google AdSense required content (https://support.google.com/adsense/answer/1348695); Google Publisher Policies privacy disclosures (https://support.google.com/adsense/answer/10502938); Google Analytics data collection (https://support.google.com/analytics/answer/11593727); Google AdSense cookie use (https://support.google.com/adsense/answer/7549925); iLovePDF Privacy Policy (https://www.ilovepdf.com/help/privacy); iLovePDF Terms (API file retention) (https://www.ilovepdf.com/help/terms).
- Changed: tracker documentation only. No app source, privacy page, ads.txt, DNS, AdSense setting, CMP setting, or production deployment changed.
- Next action: obtain the public privacy contact email to publish in the policy; then complete a full external-service inventory and prepare a reviewable draft before deployment. Independently, user can open the ads.txt status details in AdSense; do not press Request review or remove/re-add the site.

## At-a-glance status dashboard (2026-11-15)
This dashboard is the current handoff snapshot. Keep it updated whenever a check is completed, a defect is confirmed, a decision is made, or a manual action is requested.

| Area | Current result | Status | Next action |
|---|---|---|---|
| AdSense site review | User already submitted Request review; latest Sites screenshot showed **Getting ready** | WAITING on Google | Do not resubmit/remove site; check status later |
| Google European CMP message | Published; English +31 languages; Consent and Manage options enabled in observed settings | CONFIGURATION OBSERVED | Live behavior still needs testing |
| Google CMP identity | CMP ID 300 is listed by Google as Google LLC CMP for Web and app | VERIFIED (identity/listing only) | Verify live runtime behavior |
| TCF v2.4 | IAB web-CMP deadline was 23 Oct 2026; Google says its Privacy & Messaging European message supports v2.4 | DOCS VERIFIED; SITE SIGNAL UNVERIFIED | Verify live TC string / CMP behavior |
| Consent revocation | Editor preview shows “Privacy and cookie settings”; live homepage browser Find showed 0/0 | NOT VERIFIED LIVE | Test on live site, ideally from EEA context |
| ads.txt repository source | Root ads.txt has the Google DIRECT seller record and certification authority ID; robots.txt does not block it | SOURCE PASS | Verify live HTTP response and AdSense crawler status |
| ads.txt live serving | Direct live fetch could not be completed; AdSense screenshot's “Not found” was low-confidence | UNVERIFIED | Inspect Site details and live URL; don't edit correct source without evidence |
| Privacy Policy page | No privacy-policy.html in current main tree; work-hours-calculator.html links to /privacy-policy.html | SOURCE DEFECT CONFIRMED | Prepare accurate policy after publisher details are confirmed |
| Privacy Policy data inventory | GA4; browser-local image/PDF tools; optional DOCX-to-Cloudflare-Worker-to-iLovePDF flow; localStorage use documented | PARTIAL INVENTORY | Finish full page-by-page third-party/library and production-config audit |
| Public contact email | Not yet supplied/confirmed | BLOCKED | User to provide a public contact email or Contact-page screenshot |
| Production changes | None made; no Publish changes pressed | PROTECTED | Obtain explicit approval before any code/settings/DNS/publish change |

### Decisions already made — do not redo
1. Do not ask the user to submit AdSense Request review again; it has already been submitted.
2. Do not remove and re-add the site while status is Getting ready.
3. Do not change CMP toggles (including Consent Mode, Special Feature 2, legitimate-interest or DSA/RTB controls) without evidence and explicit approval.
4. Do not modify ads.txt just because the AdSense UI may show Not found; repository source is already correct and live serving is not yet established.
5. Do not publish a placeholder Privacy Policy or invent contact/legal entity/jurisdiction/retention details.
6. Do not change production, website code, DNS, AdSense/CMP settings, or protected hero sections without explicit approval.

### Work tracking rule
- Record every completed inspection with the evidence source and outcome (PASS / FAIL / UNVERIFIED / WAITING).
- Record each confirmed defect separately from a suspected issue.
- Record decisions and “do not repeat” instructions.
- Update the “At-a-glance status dashboard”, detailed work log, and next single user action together when state changes.
- The next manual instruction must be only one small action in Bengali, with exact click path and the specific screenshot/text requested.


### 2026-11-15 — Tracker cleanup and next-action handoff
- User instruction: maintain one durable AdSense folder/tracker so completed checks are not repeated; continue the next task independently where possible.
- Re-read the repository's current NEW-CHAT-HANDOFF.md, TOOL-WORK-TRACKING-STANDARD.md, TOOL-RESEARCH-STANDARD.md and this AdSense tracker before proceeding.
- Corrected feature-card states to distinguish completed evidence gathering from pending live/runtime verification:
  - CARD-001 completed as a status observation: user screenshot showed “Getting ready”; Google review itself remains WAITING.
  - CARD-002 completed as an editor audit: published European message, settings and four preview states inspected; no settings changed.
  - CARD-005 completed as a documentation/listing check: Google CMP ID 300 and TCF v2.4 documentation checked; live emitted TC signal remains UNVERIFIED.
  - CARD-003, CARD-004 and CARD-006 remain in progress because they require live browser/account evidence.
- Reconfirmed no source files, DNS, AdSense settings, CMP settings or production state changed; Publish changes was not pressed.
- The next step that requires the user is a single read-only account inspection: AdSense > Sites > click the infojano.com row (not Request review), then capture the Site details panel showing review status and ads.txt details. This is needed because the assistant cannot access the user's signed-in AdSense UI.
- After the Site details evidence, resume independent live CMP/revocation and ads.txt checks; do not repeat the editor audit or re-submit review.
- Protected areas preserved: homepage hero, ID Card Print Studio hero, tool heroes, website code, DNS and production settings untouched.
