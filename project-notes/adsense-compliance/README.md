# InfoJano — AdSense & Consent Compliance Tracker

Last updated: 2026-11-15
Site: https://infojano.com
Repository: https://github.com/barsulkhan/InfoJano
Overall status: In progress

Master research and execution order: [MASTER-RESEARCH-PLAN.md](MASTER-RESEARCH-PLAN.md)

Execution rule: follow the master plan's dependency order; do not select isolated next tasks without updating the plan.

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
- [ ] [CARD-006] Audit ads.txt live availability and publisher record — live body exact-match PASS from user screenshot; HTTP status/headers, HTTP+HTTPS redirects and AdSense crawler status remain unverified.

### Completed (audit/research evidence only; no production changes)
- [x] [CARD-001] Record current AdSense site-review status — user screenshot shows Getting ready; this completes the status observation, not Google's review.
- [x] [CARD-002] Audit Google Privacy & Messaging European regulations editor — published message, setup, settings and all four preview states inspected; no changes made.
- [x] [CARD-005] Check Google CMP listing and TCF v2.4 documentation — Google CMP ID 300 listing and official Google/IAB timeline/support reviewed; live TC signal remains unverified..

### Backlog
- [ ] [CARD-007] Finalize Privacy Policy URL/content and its connection from the consent message — draft PR exists; exact account vendor list, legal controller/jurisdiction and live runtime checks block finalization.
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
- [x] Current AdSense Site Details status rechecked after Request review — screenshot: Getting your site ready to show ads; Verify site ownership ✓; Review requested ✓; request time 15 Nov 2026, 7:19 (timezone not visible)
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
| AdSense site review | Site Details screenshot confirms **Getting your site ready to show ads**; Verify site ownership and Review requested both have green checks. Request time shown: **15 Nov 2026, 7:19** (timezone not visible). Google says checks usually take a few days, sometimes 2–4 weeks. | VERIFIED: prerequisites shown complete; WAITING on Google review | No further account action now; monitor status only |
| Google European CMP message | Published; English +31 languages; Consent and Manage options enabled in observed settings | CONFIGURATION OBSERVED | Live behavior still needs testing |
| Google CMP identity | CMP ID 300 is listed by Google as Google LLC CMP for Web and app | VERIFIED (identity/listing only) | Verify live runtime behavior |
| TCF v2.4 | IAB web-CMP deadline was 23 Oct 2026; Google says its Privacy & Messaging European message supports v2.4 | DOCS VERIFIED; SITE SIGNAL UNVERIFIED | Verify live TC string / CMP behavior |
| Consent revocation | Editor preview shows “Privacy and cookie settings”; live homepage browser Find showed 0/0 | NOT VERIFIED LIVE | Test on live site, ideally from EEA context |
| ads.txt repository source | Root ads.txt has the Google DIRECT seller record and certification authority ID; robots.txt does not block it | SOURCE PASS | Verify live HTTP response and AdSense crawler status |
| ads.txt live serving | Direct live fetch could not be completed; AdSense screenshot's “Not found” was low-confidence | UNVERIFIED | Inspect Site details and live URL; don't edit correct source without evidence |
| Privacy Policy page | Draft exists on PR #236 branch and Contact page cross-links it; not merged or live-verified | DRAFT / NOT PUBLISHED | Finish source inventory and runtime verification; obtain approval before merge |
| Privacy Policy data inventory | 117 HTML paths inventoried from repository tree; targeted searches confirm GA4, AdSense, YouTube Data API/embed, ipapi, Wikipedia/Wikidata, two exchange APIs, local storage, camera permission, and cdnjs/jsDelivr/unpkg/Google Fonts/FlagCDN | PARTIAL SOURCE AUDIT | Full per-page runtime reconciliation and account-specific ad vendor list remain outstanding |
| Public contact email | User supplied infojanowebsite@gmail.com; ownership/deliverability not independently tested | PROVIDED / NOT DELIVERABILITY-TESTED | Retain for contact/privacy requests; no further contact detail inferred |
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


### 2026-11-15 — User supplied expanded AdSense Site Details screenshots
- Evidence reviewed: two user screenshots of AdSense > Sites > infojano.com Site details.
- Exact visible status: “Getting your site ready to show ads”.
- “Verify site ownership” section has a green check. Expanded section displays AdSense code snippet verification method selected; this is UI evidence of completed ownership verification. No need to copy/paste or change the verification code now.
- “Review requested” section has a green check. Text says Google will run checks; this usually takes a few days, but in some cases can take 2–4 weeks. It also reminds the publisher to enter payment information to avoid delays.
- Request time visible in screenshot: **15 Nov 2026, 7:19**. Timezone is not shown, so no timezone is inferred.
- Result: site ownership verification and review request steps are complete in the AdSense UI. Overall site review is still **WAITING / Getting ready**, not approved yet. Do not submit another review request, remove/re-add the site, or alter verification method.
- Ads.txt details are not shown in these screenshots; live ads.txt remains unverified.
- Changed: tracker documentation only. No website source, DNS, AdSense settings, CMP settings, or production deployment changed.
- Next task chosen: continue independent public-source verification of ads.txt and privacy-policy link; if live inspection remains inaccessible, retain UNVERIFIED rather than ask user to repeat completed account steps.
- Protected areas preserved: all production code, DNS, AdSense/CMP settings and protected hero sections untouched.


### 2026-11-15 — Independent public URL verification attempt after Site Details review
- Chosen next task: attempt public verification of https://infojano.com/ads.txt and https://infojano.com/privacy-policy.html without asking the user to repeat account checks.
- Attempted direct public URL opens for both URLs through the available web inspection service. Both returned an internal inaccessible/error response. This is a TOOL ACCESS FAILURE, not evidence that either URL returns HTTP 404 or is down.
- GitHub source evidence remains unchanged: root ads.txt source exists and is correct; privacy-policy.html is absent from the repository tree and work-hours-calculator.html contains a link to it.
- Result: live ads.txt HTTP status/body/redirect and live Privacy Policy page status remain UNVERIFIED. No live HTTP 200 or 404 claim made.
- Next work: complete source-only third-party/library inventory across the remaining pages and identify every Privacy Policy-linked feature/data flow; prepare a draft outline only after that inventory. Legal publication remains blocked until public contact email and production data-flow confirmation are supplied.
- Changed: documentation only. No source, DNS, account setting, CMP setting or production state changed.


### 2026-11-15 — Privacy Policy data-flow inventory (source review, partial)
- Scope: read-only source inspection of homepage, image/PDF tools, Word Converter, Work Hours Calculator, QR tools, Age Calculator, Currency Converter, Document Studio, shared header and install/download helpers. No production changes.
- Confirmed source-level integrations / data flows:
  1. **Google Analytics 4** — measurement ID G-P8D7XRGVEF is embedded in the homepage and many tool pages (including Age, BMI, Discount, EMI, Savings, QR Maker, Image Resizer, Image-to-PDF). This indicates GA4 page measurement code is present in source; live firing/consent behavior is not verified.
  2. **Google AdSense** — homepage source loads pagead2.googlesyndication.com/pagead/js/adsbygoogle.js using the site's AdSense publisher client. This is source evidence only; it does not prove ads are currently served or exact cookie behavior.
  3. **Cloudflare Worker + iLoveAPI** — Word Converter's optional high-fidelity DOCX conversion sends the file to the configured HTTPS Worker /convert endpoint after an explicit per-upload consent checkbox. Worker forwards the DOCX to iLoveAPI (India region per UI text). Worker URL is stored in localStorage; explicit consent is not persisted. Exact production Worker URL/config and vendor contractual retention still need confirmation.
  4. **ipapi.co** — Age Calculator requests https://ipapi.co/json/ to obtain location data for its location-related experience. This sends a request to the IP geolocation provider; exact provider-side processing/retention is not established by source review.
  5. **Wikimedia services** — Age Calculator requests Wikipedia On This Day events and Wikidata SPARQL data. These are date/event content requests; inspect exact query fields and live behavior before final policy wording.
  6. **open.er-api.com** — Currency Converter requests latest exchange-rate data for the selected base currency; historical data is also fetched from a separate URL in source. Provider retention/analytics practices not established.
  7. **Public CDNs / libraries** — observed: cdnjs (QRCode.js, JSZip, PDF.js, pdf-lib, html2canvas), jsDelivr (PDF.js worker / JSZip fallbacks), unpkg (ZXing QR/barcode decoder), Google Fonts (Noto Sans Bengali / Inter), FlagCDN (currency flag images). Requests to these hosts expose ordinary network metadata such as IP address and user-agent; no provider-specific retention claims made.
  8. **Browser-local processing / storage** — Image Compressor, Image Resizer, Image-to-PDF, PDF-to-JPG, PDF page extraction and Document Studio describe/implement local browser processing. Work Hours Calculator uses localStorage only when Remember my entries is enabled; user can clear saved entries. QR Scanner requests camera only after user action and can decode uploaded images; QR Maker uses sessionStorage to pass scanned content between scanner and maker. Age Calculator stores birthday reminder preferences in localStorage and may use browser Notification API when permission is granted. Shared header stores language preference in localStorage.
- Source observations / caveats:
  - Image/PDF tool pages claim files are not uploaded to InfoJano's processing server; external CDN library requests still occur.
  - Word Converter standard conversion is browser-side; optional high-fidelity path is the exception and requires explicit user consent before upload.
  - Age Calculator's ipapi request means a blanket no-data-ever-leaves-the-browser claim would be inaccurate for that feature.
  - Currency Converter contacts a third-party exchange-rate API; selected base currency is included in the request URL.
  - Document Studio uses Google Fonts and html2canvas; source text states document content is processed locally.
- Not yet verified / gaps:
  - Full page-by-page scan of every HTML file and dynamically loaded script is incomplete.
  - Exact historical exchange-rate API endpoint and request payload need extraction.
  - Exact Worker URL and current production configuration need publisher confirmation; do not expose or invent it.
  - GA4 and AdSense runtime consent behavior, cookies, and actual network requests need browser DevTools verification.
  - CMP script injection and live revocation UI remain unverified.
  - No public Contact page / email was found at the guessed contact.html or about.html paths; this does not prove no contact details exist elsewhere.
  - Publisher/controller identity, public contact email, jurisdiction, InfoJano retention schedule and data subject request process remain unknown; do not invent.
- Status: PARTIAL INVENTORY — useful source evidence gathered, not complete enough for a final legal policy.
- Next task: continue source scan across remaining tool pages and shared scripts; then reconcile with publisher's current production configuration. Only after that prepare a draft for review. Do not publish without explicit approval.
- Changed: this tracker only. No source code, DNS, AdSense/CMP settings or production deployment changed.


### 2026-11-15 — Additional source scan: API calls and browser storage
- Expanded GitHub code search and inspected countdown-studio.html, bmi-toolkit.js, age.html and currency-converter.html.
- Additional integrations/data flows identified:
  - **YouTube Data API v3** in Countdown Studio: user may enter a public channel URL/handle and a Google Cloud API key; source says the key is used in the browser session only and refreshes the public subscriber count every 60 seconds while the page is open. API key is an input type password, but client-side use means it is not a server-side secret. UI instructs users to restrict the key to YouTube Data API v3 and website HTTP referrers. Exact API request and returned fields need inspection before final disclosure.
  - **YouTube embedded player**: Countdown Studio uses youtube-nocookie.com/embed for YouTube videos. This is an external embedded media request; actual cookies/network behavior depends on playback and browser context.
  - **Frankfurter API**: Currency Converter uses api.frankfurter.dev for historical exchange-rate queries; latest rates use open.er-api.com. Both providers are now recorded in the inventory.
  - **BMI local history**: bmi-toolkit.js saves up to 100 entries (date, weight, height, BMI) to localStorage only when user saves history; clear action removes it. This is potentially sensitive health-related personal data stored on the user's device; do not overstate privacy or imply it is sent to InfoJano based on this source alone.
  - **Age Calculator notifications**: birthday reminder preference (month/day/rule) is stored in localStorage; browser Notification permission is requested only when user enables reminder. Source says reminders are checked while the page is open; background delivery is not guaranteed.
- No source-level evidence found in the inspected files for navigator.geolocation; Age Calculator uses ipapi.co request instead. This is a code-search observation, not a full runtime network audit.
- Current privacy inventory remains PARTIAL. Need inspect exact YouTube API request, remaining tool pages, all shared scripts, and live GA4/AdSense/CMP network behavior. Do not publish legal policy yet.
- Changed: tracker only. No production code, account settings, DNS, CMP settings or deployment changed.


### 2026-11-15 — Resume AdSense / Privacy Policy work after clean-URL detour
- User instruction: return to the previously active AdSense and Privacy Policy work; clean-URL migration is paused.
- Re-opened and reviewed this tracker, NEW-CHAT-HANDOFF.md and TOOL-WORK-TRACKING-STANDARD.md from current main.
- Reconfirmed source evidence: privacy-policy.html is absent from main; work-hours-calculator.html links to /privacy-policy.html; ads.txt source is correct but live serving remains unverified; AdSense review is already submitted and Site Details previously showed Getting your site ready to show ads.
- No completed CMP editor audit or submitted AdSense review is being repeated.
- No production source, DNS, AdSense settings, CMP settings, PR merge or deployment changed in this resumed session.
- Clean URL migration remains isolated in draft PR #234 and is not part of this active task.
- Remaining policy blockers: publisher must provide a public contact email; full external-service/library inventory and current production feature confirmation are still required before final legal wording. Do not invent controller identity, jurisdiction, retention policy or contact details.
- Next action: continue independent repository inventory where tool limits permit; then ask for the one missing publisher input (public contact email) with exact instructions. Prepare draft for review only; no publish/deploy without explicit approval.


### 2026-11-15 — Publisher contact address received; Contact page drafted
- Publisher supplied the public contact address: `infojanowebsite@gmail.com`. This is user-provided; deliverability and ownership have not been independently verified.
- Created `contact.html` with a mailto contact link, issue-reporting guidance, accessible layout, canonical metadata and links to Home / Privacy Policy.
- Created `assets/contact-support.svg`, a lightweight custom InfoJano-style support illustration.
- Opened draft PR #235: https://github.com/barsulkhan/InfoJano/pull/235
- Branch: `feature/contact-page-and-support-artwork`. Not merged; not deployed to production.
- Source-level checks: files created successfully; live rendering, mobile browser QA, mailto behavior and email deliverability remain unverified.
- Privacy Policy remains blocked from final publication: complete service/library inventory and confirmation of current production behavior are still required. Do not invent publisher legal identity, jurisdiction or retention schedule. Once inventory is reconciled, prepare a draft for review; no production publish without explicit approval.
- Clean URL PR #234 remains separate and untouched.


### 2026-11-15 — Privacy Policy draft and Contact cross-link prepared
- User instruction: proceed with the remaining AdSense / Privacy Policy work as quickly as possible.
- Re-read current main handoff and work-tracking standard before continuing.
- Publisher contact email received: `infojanowebsite@gmail.com`; ownership/deliverability not independently tested.
- Created `privacy-policy.html` on isolated branch `feature/privacy-policy-adsense-compliance`. Draft covers Google Analytics 4, AdSense cookies/identifiers, Privacy & Messaging consent choices, locally stored tool preferences/history, browser-side file processing, optional DOCX external conversion, YouTube Data API/embed, ipapi.co, exchange-rate APIs, Wikimedia, and public CDN/library requests.
- Updated Contact page on the same branch to link the Privacy Policy.
- Google policy references checked on 2026-11-15:
  - Required AdSense privacy disclosures: https://support.google.com/adsense/answer/1348695
  - Publisher privacy disclosures: https://support.google.com/adsense/answer/10502938
  - AdSense cookie behavior: https://support.google.com/adsense/answer/7549925
  - Google partner-site data use: https://policies.google.com/technologies/partner-sites
- Important limitations: source inventory remains partial; live analytics/ad/cookie/consent runtime and complete third-party vendor list are not verified. Publisher legal entity/controller identity, jurisdiction, formal retention schedule, and request-handling process are not independently known. Policy avoids inventing those details and explicitly describes its inventory limitations.
- Tests: source-level HTML content created; automated HTML validation, browser/mobile QA, live URL response and accessibility checks NOT RUN. No production deployment or live publication verified.
- AdSense review: previously submitted; Site Details previously showed “Getting your site ready to show ads”. Do not resubmit or remove/re-add the site. Review status remains pending until rechecked in account.
- No AdSense/CMP settings, DNS, ads.txt, production code or deployment changed.
- Next: open reviewable PR for policy; finish page/service inventory and runtime verification; verify live Contact/Privacy URLs after merge/deployment. Only mark policy complete after source/runtime reconciliation and user review.


### 2026-11-15 — Privacy Policy provider-link and disclosure verification
- User instruction: continue and complete the remaining independently verifiable AdSense / Privacy Policy work; preserve the existing AdSense review request and do not publish or change production settings without approval.
- Re-read the current handoff, tracking standard, AdSense tracker, PR #236, Privacy Policy draft, Contact page and Word Converter source documentation before proceeding.
- Rechecked provider references against current public documentation:
  - Google AdSense Required content confirms the policy should disclose third-party ad cookies, Google/partner advertising cookies, and links to Ads Settings / aboutads.info; Google Publisher Policies additionally requires disclosure of cookies, web beacons, IP addresses or other identifiers and third-party ad-serving behavior.
  - Google explains that youtube-nocookie.com is its Privacy Enhanced Mode embed domain. Countdown Studio uses this domain for embedded YouTube videos; this reduces personalization based on embedded views but does not mean the embed makes no network request.
  - iLoveAPI is the accurate product/service name for the optional DOCX Office-to-PDF Worker flow. Repository backend documentation confirms the Worker calls iLoveAPI officepdf in the in region. iLoveAPI's current terms state that API-submitted files are deleted within a maximum of 48 hours; this is provider-side retention, not an InfoJano retention promise.
  - ipapi.co's official privacy page is reachable in search and identifies the provider as Kloudend, Inc.; do not infer its precise retention from this check.
  - ExchangeRate-API terms identify AYR Tech (Pty) Ltd and describe personal-data handling; source code also calls api.frankfurter.dev for historical rates. Do not conflate the two providers or invent a Frankfurter retention period.
  - Wikimedia's current official privacy policy URL resolves to its governance wiki English policy page.
- Source-level checks: backend/word-converter/README.md confirms Worker proxy architecture and iLoveAPI India region; its Worker URL is an account-specific placeholder/example, so no production endpoint is asserted. currency-converter.html confirms open.er-api.com current rates and api.frankfurter.dev historical rates. Countdown Studio source confirms youtube-nocookie.com. Contact page in this PR branch links to /privacy-policy.html and displays the user-supplied public email.
- Policy edits planned/applied in this PR branch only: correct iLovePDF API naming to iLoveAPI; link to iLoveAPI terms; disclose its maximum 48-hour API file deletion term as a provider term (not InfoJano retention); replace the outdated YouTube privacy link with Google's official Privacy Enhanced Mode documentation; clarify that the embed still makes a third-party request.
- External evidence: Google AdSense Required content https://support.google.com/adsense/answer/1348695 ; Google Publisher Policies https://support.google.com/publisherpolicies/answer/10437794 ; YouTube embed Privacy Enhanced Mode https://support.google.com/youtube/answer/171780 ; iLoveAPI terms https://www.iloveapi.com/terms ; iLovePDF privacy https://www.ilovepdf.com/help/privacy ; ipapi privacy https://ipapi.co/privacy/ ; ExchangeRate-API terms https://www.exchangerate-api.com/terms ; Wikimedia privacy policy https://foundation.wikimedia.org/wiki/Policy:Privacy_policy/en .
- Test results: repository source review PASS for cited files and provider identifiers; public documentation link/claim verification PASS for sources above. Automated HTML validation, full all-page inventory, browser rendering, live URL HTTP checks, CMP runtime/TC string and ad vendor list remain NOT RUN / UNVERIFIED.
- No source on main, DNS, AdSense account, CMP settings, ads.txt or production deployment changed. PR #236 remains a draft and unmerged.
- Pending: finish exhaustive remaining HTML/shared-script scan; confirm actual live feature/service configuration; run HTML validation; obtain real browser QA and live HTTP checks if access becomes available; then present final review and ask for explicit publication approval before merge.
- Protected homepage/tool hero sections and all production settings preserved.


### 2026-11-15 — Privacy Policy source validation and PR checkpoint
- Updated privacy-policy.html on PR #236 branch with corrected iLoveAPI naming and terms link, provider-stated 48-hour maximum API file retention caveat, and YouTube Privacy Enhanced Mode description plus official help link. Updated ExchangeRate-API link to its terms/privacy information and Wikimedia policy link to the official English page.
- Lightweight source structural validation: 183 HTML tags scanned; matching open/close tag stack with no mismatch or unclosed tags; no duplicate IDs; 21 href attributes detected. This is a simple structural scan, not a standards-complete HTML validator or browser test.
- Current policy file commit: 44f790b9bc861b6c41e4d693dbe8c78b3fc1edab. Tracker log commit before this checkpoint: 150eef605135ed71226401eb9ff5e2c949b5d7ea.
- PR #236 remains OPEN, DRAFT, UNMERGED. Latest commit checks endpoint returned total_count 0 (no check runs). A Cloudflare bot comment advertised a preview deployment for the earlier commit b00bf7f; this is a Worker preview, not proof that GitHub Pages website policy URL is live or deployed. Latest policy commit preview status has not been confirmed.
- Mergeability was reported true on the latest PR fetch; do not interpret this as legal approval or CI pass.
- Still pending: exhaustive inventory of remaining page scripts/assets, live browser/DevTools cookie/network/CMP test, live HTTP 200/body verification for ads.txt and policy page, full ad vendor disclosure, and user approval to publish. No settings, DNS, ads.txt or production changes made.


### 2026-11-15 — Consolidated source, vendor, provider and live-verification audit
- User request: complete as many remaining AdSense / Privacy Policy tasks as possible in one batch to reduce repeated manual steps. Continue to preserve prior permission boundaries: no CMP Publish changes, no DNS/ads.txt/production edits, and no merge of an incomplete legal notice.
- Re-read current NEW-CHAT-HANDOFF.md, TOOL-WORK-TRACKING-STANDARD.md, TOOL-RESEARCH-STANDARD.md and this tracker before work.
- Repository tree inspection: 117 HTML paths present on the PR branch (including the new privacy-policy.html); a focused set of repository code searches was run for fetch(), external script/style URLs, localStorage, sessionStorage, Notification, camera API, Google Analytics, AdSense, YouTube, ipapi, Wikimedia, exchange APIs and CDN hosts. This provides a broad inventory, but it is not a line-by-line manual audit of all 117 pages and not a live network capture.
- Confirmed external integrations/data flows from source:
  1. Google Analytics 4 (G-P8D7XRGVEF) appears on the homepage and multiple tool pages; source presence only, runtime firing/consent not verified.
  2. Google AdSense script is present in index.html; source presence does not prove ad serving.
  3. YouTube Data API v3 in Countdown Studio; visitor supplies channel reference and API key. Embedded YouTube media uses youtube-nocookie.com Privacy Enhanced Mode.
  4. ipapi.co/json request in Age Calculator; provider privacy policy says IP-address queries are stored in standard webserver logs for a limited time, but exact retention not specified in its FAQ. Source sends the request from the visitor browser.
  5. Wikipedia On This Day REST API and Wikidata SPARQL in Age Calculator.
  6. open.er-api.com latest exchange rates and api.frankfurter.dev historical rates in Currency Converter; selected currency pair/date parameters are sent in the request. Frankfurter states its public API does not collect/log personal data, IP addresses or request URLs, and is behind Cloudflare for aggregate traffic statistics.
  7. External resource hosts identified: cdnjs, jsDelivr, unpkg, Google Fonts / fonts.gstatic.com and FlagCDN. QR Scanner loads ZXing from unpkg; PDF/document tools load PDF.js, pdf-lib, JSZip, html2canvas and related libraries from public CDNs. Camera access is requested only after the QR Scanner Start Camera action; uploaded QR images are decoded in browser code.
  8. Browser storage: site language preference; optional work-hours and BMI history; age birthday reminder; Word Converter Worker URL; QR scanner/maker handoff via sessionStorage. No document.cookie usage was found in the focused search; this is not proof that third-party scripts never set cookies.
- Important confirmed configuration issue: backend/word-converter/src/index.js hardcodes ALLOWED_ORIGIN = https://barsulkhan.github.io and rejects other Origins. The worker README also says to update the origin if the site domain changes. Thus the repository Worker code does not currently authorize https://infojano.com; live Worker deployment/configuration and the optional converter's availability on the custom domain are unverified. No Worker or production setting was changed. Privacy Policy wording was softened to describe this route conditionally and disclose the origin limitation.
- Provider verification:
  - iLoveAPI official terms state all API-processed files are deleted within a maximum of 48 hours (unless a longer storage service is contracted). This is not the two-hour consumer-service rule. API docs show `officepdf` supports region `in` (India). Sources: https://www.iloveapi.com/terms and https://www.iloveapi.com/docs/api-reference.
  - ExchangeRate-API terms identify AYR Tech (Pty) Ltd and describe its service privacy/data handling: https://www.exchangerate-api.com/terms.
  - Frankfurter official documentation says its public API does not collect or log personal data, IP addresses or request URLs: https://frankfurter.dev/.
  - ipapi.co privacy page says IP address queries are stored in log files for a limited time, without a precise duration in the FAQ: https://ipapi.co/privacy/.
  - Google confirms youtube-nocookie.com is Privacy Enhanced Mode: https://support.google.com/youtube/answer/171780.
  - Google AdSense requires clear disclosure of third-party cookies, web beacons, IP addresses/identifiers, and opt-out choices. Google also says EU User Consent Policy publishers must clearly identify each party with whom data is shared and can view the ad technology partner list in AdSense. Sources: https://support.google.com/adsense/answer/1348695, https://support.google.com/adsense/answer/9012903, https://developers.google.com/third-party-ads/googleads-vendors.
- Policy branch updates: clarified iLoveAPI (not iLovePDF API) naming and 48-hour API deletion term; corrected YouTube privacy-enhanced embed explanation; added Google ATP/vendor directory references; enumerated known CDN/font/flag hosts; documented QR camera permission and browser-side decode; qualified the optional Worker route and its custom-domain Origin limitation; corrected provider policy links. Latest policy content commit: ec7db4d8102a3413e90bfa2d601b037cee3b69d4 (policy file blob SHA recorded separately in branch history).
- Live URL verification attempted again for https://infojano.com/privacy-policy.html, https://infojano.com/ads.txt and https://infojano.com/contact.html. The public web inspection service returned inaccessible/internal errors for all three. This is a tool-access failure, not proof of HTTP 404 or downtime. Live status/body/redirects remain UNVERIFIED.
- Source checks: main ads.txt still contains the Google DIRECT seller record; main robots.txt allows all crawlers and has no ads.txt disallow. SOURCE PASS only. Live serving/crawler status remain UNVERIFIED.
- Google AdSense vendor list: tracker screenshots show the commonly used 199-partner set selected, but the exact current account-selected names and vendor disclosure links were not exported. Google's own guidance says publishers must clearly identify each data-sharing party. This remains a material publication blocker; do not assume the public certified-vendor directory equals the exact selected account list.
- Validation: lightweight HTML tag-stack check previously passed for 183 tags/no duplicate IDs before the latest additions; after latest changes it must be rerun. No formal HTML validator, browser QA, DevTools cookie/network capture, EEA consent reject/revoke test, TC-string validation, or Pages workflow run has been completed for the latest commit. Latest PR check-run endpoint previously returned zero check runs.
- PR #236 remains OPEN, DRAFT, UNMERGED. Latest fetched mergeable flag was false; no merge attempted. The Cloudflare preview bot comment referred to an earlier commit and a Worker preview URL, not GitHub Pages production publication. Main branch remains at 497dfe2f676fd7ad6a9cd90e6a33b9d6bf15cf72.
- Remaining blockers: exact account-selected ad-tech vendor list; publisher legal/controller identity and jurisdiction not supplied; actual production Word Worker/feature availability; live consent/revocation and TC signal; live ads.txt and policy URL response; complete runtime service/cookie inventory. These cannot be safely inferred from source or public documentation.
- No source on main, production code, DNS, AdSense settings, CMP settings, ads.txt or protected hero/banner was changed. No Request review resubmission and no Publish changes action.


### 2026-11-15 — Final batch validation checkpoint
- Latest PR #236 head: `4fb937d58323aa4046d984105005ce94ff350db7`; policy file blob SHA `99150538b6eee7decbac4491da8b11acd48c4bd6`.
- Re-ran lightweight HTML structural scan after all policy edits: 189 tags, no mismatched closing tags, no unclosed tags, no duplicate IDs, and 15 external href links. This remains a custom structural check, not a full validator.
- GitHub Actions workflow runs associated with the latest PR commit: none returned. Check runs: none returned. No CI pass is claimed.
- Latest PR metadata: OPEN / DRAFT / UNMERGED. GitHub REST currently reports mergeable=true, mergeable_state=unstable; no merge attempted because legal/vendor/runtime disclosures remain incomplete. The PR wrapper's mergeable flag was inconsistent on one fetch; REST metadata was used for the latest check.
- Main branch SHA verified unchanged: `497dfe2f676fd7ad6a9cd90e6a33b9d6bf15cf72`. No production publication has occurred.
- Live URLs remain inaccessible to the inspection tool, so no HTTP 200/404 claim is made. AdSense review remains previously submitted; no repeat request.
- Next: obtain the exact currently selected ad technology provider names from the AdSense/Privacy & Messaging account and confirm publisher/controller legal identity + jurisdiction; then browser-test live consent/revocation, TC string, ads.txt and policy URL. Until those items are verified, keep PR draft and do not merge.


### 2026-11-15 — Expanded source inventory and advertising-vendor disclosure
- User asked to complete remaining work in one pass. Re-read the mandatory handoff, tool-work standard, research standard, AdSense tracker and current PR Privacy Policy source before proceeding.
- Expanded source inspection across representative high-integration pages and shared scripts. Confirmed source integrations: Google Analytics 4 on multiple pages; AdSense loader on homepage; Google Privacy & Messaging CMP observed in account (live runtime remains unverified); ipapi.co/json and Wikipedia On This Day + Wikidata SPARQL from Age Calculator; open.er-api.com current rates, api.frankfurter.dev historical rates, FlagCDN currency flags; YouTube Data API v3 and youtube-nocookie.com embeds in Countdown Studio; optional DOCX Worker endpoint placeholder/configuration in Word Converter with iLoveAPI provider documented by backend README; Google Fonts; cdnjs, jsDelivr and unpkg libraries; QR scanner camera permission and browser-side ZXing decoding; localStorage and notification preferences in relevant tools.
- Reviewed further source pages: index.html (GA4 + AdSense), age.html, currency-converter.html, countdown-studio.html, qr-maker.html, qr-scanner.html, image-compressor.html, image-resizer.html, image-to-pdf.html, pdf-to-jpg.html, extract-pdf-pages.html, document-studio.html, word-converter.html, BMI/work-hours/birthday tools, shared JS files and selected QR/document pages. The source inventory is materially broader but still not a guaranteed exhaustive scan of all 117 HTML pages and all runtime-loaded resources.
- Updated Privacy Policy third-party list to name Google Fonts and FlagCDN alongside cdnjs, jsDelivr and unpkg; existing list also covers Google, YouTube, ipapi, currency APIs, Wikimedia and Worker/iLoveAPI. Added a link to Google's current ad technology partner list and explained that eligible partners vary by configuration/region/auction and are surfaced through consent/vendor preferences where shown.
- Official Google documentation checked: ad technology partner list (https://support.google.com/adsense/answer/9012903); European-regulations message and vendor preference explanation (https://support.google.com/adsense/answer/10961068); Google publisher CMP requirements (https://support.google.com/adsense/answer/13554116). Google's current article says the European-regulations messages support TCF v2.4, but InfoJano's live TC string and runtime are still not verified. The actual account screenshot recorded previously showed 199 common ad partners selected; this is account/editor evidence, not a static list to hardcode into the policy.
- Live website HTTP checks attempted for https://infojano.com/, /ads.txt, /privacy-policy.html and /contact.html using available web inspection. All returned inaccessible/internal error, so status/body/HTTP response cannot be verified through this channel. Do not claim these endpoints are live or absent.
- Privacy Policy updated in PR branch only, commit 228301187c2ddea729dd29564e6d5b4007468c8a. No main-branch code, DNS, AdSense account, CMP settings, ads.txt or production deployment changed.
- Remaining blockers: no browser/DevTools access to test cookies, consent gating, TC string, revocation control, reject path, or runtime network/ad-vendor list; live URL fetch inaccessible; source review not yet exhaustive; policy operator legal identity/jurisdiction and data-subject controller details have not been supplied and must not be invented. No merge/publish action taken.
- Next: complete additional source queries/page scan; run available structural checks; inspect PR checks and current head; then report exactly what remains and request only necessary production approval if policy is otherwise accurate.


### 2026-11-15 — Final available checks and publication blockers
- Revalidated the Privacy Policy after latest edits: 191 HTML tags parsed by a lightweight stack scan; no mismatched or unclosed tags; no duplicate IDs; 24 href attributes (16 HTTPS external links). This is a basic structural check only, not a standards-complete HTML validator or browser QA.
- Verified Contact page on the PR branch contains the `/privacy-policy.html` cross-link. Verified policy source contains dynamic Google ad technology partner list link.
- Opened official provider pages: Google ATP partner list (https://support.google.com/adsense/answer/9012903); European regulations message/vendor preferences (https://support.google.com/adsense/answer/10961068); Google-certified CMP requirements (https://support.google.com/adsense/answer/13554116); YouTube Privacy Enhanced Mode (https://support.google.com/youtube/answer/171780); ipapi privacy (https://ipapi.co/privacy/); Wikimedia Foundation Privacy Policy (https://foundation.wikimedia.org/wiki/Policy:Privacy_policy/en). These pages were accessible and substantiate the linked descriptions. Google states publishers are responsible for correctly identifying parties with whom data is shared and that its Privacy & messaging UI can list vendors; actual InfoJano runtime/vendor list still must be inspected.
- PR #236 current head is 29fb6231fc195af31be13dfe514f7c2e7f96cbfb, open/draft/unmerged. GitHub API currently reports mergeable=true and mergeable_state=unstable. No GitHub Actions workflow runs and zero check-runs are associated with this head. The Cloudflare bot preview comment references an older commit and a Workers preview for the shortlink API service; it is not a preview or deployment of the static website Privacy Policy. Do not count it as site QA.
- Live URLs (homepage, /ads.txt, /privacy-policy.html, /contact.html) were attempted via available web inspection; all were inaccessible through that channel. No live HTTP status or response body can be asserted. No browser/DevTools capability is available in the connected toolset for CMP cookies, consent gating, TC string, rejection path, or revocation link verification.
- Privacy Policy branch file is at blob SHA fcd89ee43718ec765f37b8923acec1d9a81a8e21. Latest tracker update commit follows this entry. Source scan has reviewed selected high-integration pages and shared scripts, not all 117 HTML pages; mark full inventory as PARTIAL, not complete.
- Publication blockers remain: full exhaustive source/runtime inventory; live CMP/cookie/vendor and ads.txt verification; live policy URL verification after deploy; publisher/controller legal identity and jurisdiction details not supplied; no legal counsel review. No AdSense/CMP settings, DNS, main-branch code, ads.txt, or production deployment changed.
- User asked to do as much as possible in one pass. Completed all available repository/source/provider checks and documented evidence. Keep PR #236 draft; do not merge or claim legal/AdSense compliance until remaining blockers are resolved and explicit publish authorization is confirmed.


### 2026-11-15 — Fresh Google documentation cross-check (TCF version nuance)
- User asked to finish remaining items quickly and avoid spending excessive time. Re-read mandatory handoff, tracking standard, research standard and this tracker from main before acting.
- Fresh Google Help Center search returned two relevant but apparently inconsistent current pages: the AdSense page “About European regulations messages” says Privacy & Messaging European messages support IAB TCF v2.4 and states the mandatory deadline was 23 Oct 2026 (https://support.google.com/adsense/answer/10961068); another current Google Ad Manager troubleshooting page titled “Troubleshooting IAB EU TCF v2.3 implementation” says Google accepts TCF v2.3 strings and Google CMP supports v2.3 (https://support.google.com/admanager/answer/9999955). The pages may refer to different product/version contexts or be inconsistent. Do not state a single version as definitively verified for InfoJano; resolve against current AdSense account/report and actual live TC string. The editor preview CMP ID 300 is not runtime proof.
- Google's current AdSense Help “Set up and manage your CMP” says publishers must clearly identify every selected ad technology provider and provide provider data-use details; “About European regulations messages” explains the consent, manage options and vendor preferences journeys. These confirm the policy's need for an accurate dynamic vendor list and accessible user choices, but do not establish InfoJano's actual live behavior.
- Time-saving conclusion: repository/source edits and available documentation checks are done for this pass. The remaining three AdSense items (live revocation/CMP runtime, live TC string/consent behavior, live ads.txt HTTP/crawler access) cannot be completed safely from GitHub or static source alone; they require a real browser/account runtime. Policy publication also remains blocked by missing publisher/controller legal identity and jurisdiction and partial rather than exhaustive data-flow inventory.
- No CMP or AdSense account setting was changed; no Request review resubmission; no merge, production deployment, DNS or ads.txt changes. PR #236 remains draft and unmerged pending accuracy/live verification and publisher details.

### 2026-11-15 — Current-session source audit and PR handoff
- Requested: resume AdSense / Privacy Policy compliance from the existing tracker; verify PR #236 and branch state; complete safe repository-side checks without repeating prior work or changing live settings.
- Re-read current handoff, tracking standard, research standard and this compliance tracker before proceeding.
- PR #236 verified: open, draft, unmerged; base `main`; head branch `feature/privacy-policy-adsense-compliance`; observed head SHA before this tracker-only update: `acfeef78768502c4d48bd939e69dc908b8d2df20`. PR currently contains the Privacy Policy draft, Contact-page links and tracker update; no merge or deployment performed.
- Read-only source checks on the PR branch:
  - `privacy-policy.html`: doctype, title, canonical URL, single H1, sections 1–12, supplied public contact mailto and Contact-page link — PASS.
  - `contact.html`: at least two links to `/privacy-policy.html` — PASS.
  - root `ads.txt`: exactly one Google seller record, `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0` — SOURCE PASS.
  - `robots.txt`: global Allow and sitemap declaration — SOURCE PASS.
  - `sitemap.xml`: Privacy Policy URL is not present — FOLLOW-UP identified; not changed in this session.
  - Overall lightweight source assertions: 12 passed, 1 follow-up (sitemap inclusion). These are source assertions, not a full standards validator or live/browser QA.
- Public URL inspection attempted for homepage, `/ads.txt`, and `/privacy-policy.html`; all returned tool-level inaccessible/internal errors. This is not evidence of HTTP 404, and live response/body/redirect remains UNVERIFIED.
- Reconfirmed the remaining live tasks: CMP consent and rejection behavior, live privacy/cookie settings revocation/reopen flow, actual TCF signal/version, live ads.txt HTTP/crawler status, and production vendor/runtime inventory. Google AdSense review remains already submitted; do not resubmit.
- Legal publication blockers remain: publisher/controller legal identity and jurisdiction are unconfirmed; source inventory and runtime vendor/configuration audit are incomplete. Do not invent legal details or treat this draft as final legal advice.
- Changed: this tracker file only, on the existing PR feature branch. No policy HTML, Contact HTML, sitemap, application code, protected hero/banner, DNS, CMP/AdSense settings, production site or deployment changed.
- Tests: lightweight source assertions — 12 PASS / 1 follow-up; browser/runtime tests — NOT RUN; live URL checks — UNVERIFIED due inspection-tool errors; deployment — NOT RUN.
- Next single user action: open `https://infojano.com/ads.txt` directly in a browser and send the visible page screenshot (or exact text/status). Do not change any settings.

### 2026-11-15 — User screenshot confirms live ads.txt body
- Evidence: user-provided mobile Chrome screenshot of `https://infojano.com/ads.txt` (address bar shows the ads.txt path with a query suffix; rendered response body is visible).
- Exact visible body: `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`.
- Comparison: exact match with the single root `ads.txt` record on the PR branch and previously inspected main source.
- Result: LIVE BODY VISIBLE / CONTENT MATCH — PASS. The screenshot does not expose HTTP status code, response headers, redirect chain, cache behavior, or AdSense crawler diagnostics; those remain UNVERIFIED.
- No code, ads.txt, DNS, account settings, CMP settings, PR merge, production deployment or protected design changed.
- Next single user action: open `https://infojano.com/`, scroll to the bottom/footer, and send one screenshot showing whether “Privacy and cookie settings” or another privacy/cookie control is visible. Do not change any settings.

### 2026-11-15 — Live homepage footer privacy-control check
- Evidence: user reports that the live homepage footer still shows no “Privacy and cookie settings” link or other privacy/cookie control, consistent with the earlier browser Find result (0/0).
- Result: live revocation/settings control NOT FOUND in the checked homepage footer; CARD-003 remains In progress. This does not prove that no alternate CMP entry point exists elsewhere or in other regions/session states.
- No CMP editor setting, AdSense setting, source code, DNS, production content, PR merge or deployment changed.
- Next step: continue read-only source/runtime integration inspection and retain the requirement for a live consent/revocation test; do not ask the user to repeat the footer check.

### 2026-11-15 — Homepage CMP integration source inspection
- Read-only inspection of current `index.html` on both `main` and `feature/privacy-policy-adsense-compliance` (same blob SHA: `48732b0a88db6df6562456c4aca1712063af99a8`).
- Search terms checked: Funding Choices, Google Privacy & Messaging, Google FC, consent, CMP, cookie settings, and AdSense loader.
- Finding: homepage source contains the AdSense loader for publisher `ca-pub-2908196513377151` but no explicit Funding Choices / Google Privacy & Messaging CMP script or visible consent-revocation link in the inspected HTML.
- Interpretation: this is a source-level finding and may not capture account-side injection, tag-manager injection, or runtime scripts; it supports the user's live observation that no footer privacy control is visible, but does not alone prove the CMP never runs.
- CARD-003 remains In progress; CARD-004 remains In progress pending live consent/rejection and TC-string verification. No settings, code, DNS, production, PR merge or deployment changed.
- Next: inspect AdSense/Privacy & Messaging account evidence and live runtime separately. Do not ask the user to repeat the footer check; do not change CMP settings without explicit approval.

### 2026-11-15 — Master research plan established
- User direction: stop handling compliance as isolated one-off tasks; research the entire workstream first, save it as a durable file with an index, and define what happens first, later and when.
- Read current handoff, tracking standard, research standard, research template, tool index and this tracker.
- Created `MASTER-RESEARCH-PLAN.md` with official Google and IAB sources; current status matrix; ordered tasks and dependencies; P0/P1 priorities; legal, CMP, TCF, ads.txt, policy, review and release gates; issue register; limitations; approval rules; no-repeat decisions.
- Added AdSense & Privacy Compliance to `project-notes/TOOL-INDEX.md`.
- Research conclusions: prioritize diagnosing the missing live privacy/revocation entry point and verifying live TCF v2.4 behavior; finish publisher legal identity/jurisdiction and data inventory before finalizing policy; ads.txt body is verified but HTTP/crawler status is not.
- Decision: REVISE / PROCEED WITH READ-ONLY EVIDENCE COLLECTION; NO PRODUCTION IMPLEMENTATION YET.
- Next work must follow MASTER-RESEARCH-PLAN.md in dependency order, starting with remaining source-only data-flow inventory. Ask the publisher for legal identity/jurisdiction only when needed for policy finalization.
- No production code, CMP/AdSense setting, DNS, PR merge, sitemap, deployment or protected hero/banner changed.

### 2026-11-15 — First read-only data-flow inventory search batch
- Started D-001 from the approved master research order after saving the complete plan.
- Repository code search found additional concrete evidence in Countdown Studio (YouTube Data API v3 request), localStorage in Word Converter/BMI/site header/Age Calculator, QR sessionStorage handoff, QR Scanner camera permission, Currency Converter's open.er-api request and the Word Converter Worker source/config documentation.
- Detailed source-discovery findings and next inspection pass saved in `MASTER-RESEARCH-PLAN.md` §13.
- This is a partial discovery pass only. Full file-by-file source inspection and complete external-origin inventory remain OPEN; no compliance completion claimed.
- No production source, DNS, CMP/AdSense settings, sitemap, PR merge, deployment or protected design changed.

### 2026-11-15 — Universal timestamped task-file rule adopted
- User requires a task-named, date/time-stamped Markdown file after every distinct completed work package, saved directly in the existing task folder without creating folders; applies to all of the user's websites.
- Standard updated: `project-notes/TOOL-WORK-TRACKING-STANDARD.md` §2A; handoff updated: `project-notes/NEW-CHAT-HANDOFF.md`.
- Task evidence file: [2026-11-15-2318-universal-timestamped-task-log-standard.md](2026-11-15-2318-universal-timestamped-task-log-standard.md).
- Commits: `f00a2281e0e3` (standard), `951205b20559` (handoff), `1e3c17326a66` (task evidence file).
- The other three website repository names have not yet been supplied, so their individual repositories cannot be updated yet. Global rule is recorded in the InfoJano handoff and applies by default.
- No production/account/DNS/PR merge/deployment changes.

### 2026-11-15 — Source data-flow audit batch 02
- Full source inspected for 12 files covering Countdown Studio, QR Maker/Scanner, Currency Converter, Word Converter/Worker, Age Calculator, BMI toolkit, shared header and Privacy Policy.
- Confirmed source-level flows include YouTube Data API with visitor-entered API key, GA4 on sampled pages, QR camera/sessionStorage, exchange-rate APIs, optional DOCX upload to Worker/iLoveAPI, ipapi/Wikipedia/Wikidata, local BMI history and language preference.
- Detailed findings, caveats and next actions: [2026-11-15-2319-source-data-flow-audit-batch-02.md](2026-11-15-2319-source-data-flow-audit-batch-02.md) and MASTER-RESEARCH-PLAN.md §14.
- Task evidence file commit: `4f11ccdc3428`; research-plan commit: `659c7f2b2c36`.
- D-001 remains IN PROGRESS; exhaustive all-page source inventory and live runtime/config verification are not complete.
- No production code, settings, DNS, Worker binding, PR merge, deployment or protected design changed.

### 2026-11-15 — Homepage/shared-script audit batch
- Inspected 14 files including homepage, shared scripts and image/PDF utilities. Homepage source confirms GA4 + AdSense tags and no explicit CMP/TCF API marker in that source. Selected image tools also contain GA4; PDF utilities and Document Studio load third-party libraries/fonts.
- Detailed evidence: [2026-11-15-2320-homepage-shared-script-audit.md](2026-11-15-2320-homepage-shared-script-audit.md); master plan §15.
- Commits: plan `fa16fa93436d`; task log `c904bdae059f`.
- D-001 remains in progress; no exhaustive all-pages scan or live runtime consent test claimed.
- No production, settings, DNS, Worker, merge, deployment or protected design changes.

### 2026-11-15 — Finance/health-adjacent/QR page audit batch
- Inspected 12 additional page sources. GA4 tag confirmed in EMI, Loan Eligibility, Loan Interest, Savings, BMI and Password Generator; Document Studio loads Google Fonts/cdnjs. No explicit CMP marker found in this sample.
- Task evidence: [2026-11-15-2321-finance-health-qr-page-audit.md](2026-11-15-2321-finance-health-qr-page-audit.md); research details in MASTER-RESEARCH-PLAN.md §16.
- Task-plan commit: `67b0082e6b99`; task file commit: `f9785952885f`.
- D-001 remains in progress; this is a bounded source audit, not a complete sitewide inventory or runtime QA.
- No production/settings/DNS/merge/deployment changes.

### 2026-11-15 — Root-page inventory batch 03
- Inspected 12 additional page sources: 404, Aadhaar/Ayushman print guides, date/age tools, Bengali and bulk number conversion, birthday countdown and BMI support pages.
- Confirmed UIDAI/NHA references are outbound navigation links, not observed InfoJano data uploads; Add/Subtract Date loads Google Fonts; Birthday Countdown copy mentions notifications but source has no Notification API or reminder storage implementation; sampled local calculators/guides showed no direct API/storage/analytics markers.
- Evidence file: [2026-11-15-2323-root-page-inventory-batch-03.md](2026-11-15-2323-root-page-inventory-batch-03.md); master plan §17.
- Commits: research plan `182b51460e13`; task evidence `c39d9536ef51`.
- D-001 remains IN PROGRESS; this is a bounded sample, not full sitewide/runtime verification.
- No production code, policy, account settings, DNS, merge, deployment or protected design changed.

### 2026-11-15 — Root-page inventory batch 04
- Inspected 12 additional date/countdown/QR/number pages. GA4 found in Date Difference; Google Fonts referenced in Business Days, Date Duration and Days Between Dates. Other sampled pages had no direct network/storage/CMP marker in source.
- Task evidence: [2026-11-15-2324-root-page-inventory-batch-04.md](2026-11-15-2324-root-page-inventory-batch-04.md); master plan §18.
- Commits: plan `580d7b7aeb21`; task file `47e4291425f1`.
- D-001 remains in progress; after this batch, 67 root HTML files remain unreviewed in the branch tree. Live runtime tests not run.
- No production/policy/account/DNS/merge/deployment changes.

### 2026-11-15 — Root-page inventory batch 05
- Inspected 12 more pages covering Digital Ration Card, Discount, GST, QR, number words and ID Card Print Studio. GA4 confirmed on both Discount pages and GST Calculator; ID Card Print Studio loads PDF.js from cdnjs and states browser-side processing/no intentional server upload.
- Task evidence: [2026-11-15-2324-root-page-inventory-batch-05.md](2026-11-15-2324-root-page-inventory-batch-05.md); master plan §19.
- Commits: plan `71f591a1ce8d`; task file `41c7db3c816c`.
- D-001 remains in progress; live processing/network tests not run.
- No production, policy, account, DNS, merge or deployment changes.

### 2026-11-15 — Root-page inventory batch 06
- Inspected 12 more number-conversion, percentage and photo utility pages. GA4 confirmed in main Number to Words page; 11 other sampled pages had no direct network/storage/CMP marker. No upload endpoint was identified in Passport ID Photo Resizer source.
- Task evidence: [2026-11-15-2325-root-page-inventory-batch-06.md](2026-11-15-2325-root-page-inventory-batch-06.md); master plan §20.
- Commits: plan `407de166a124`; task file `eafc4a5fae7e`.
- D-001 remains in progress; 43 root HTML files remain unreviewed; live runtime tests not run.
- No production, policy, account, DNS, merge or deployment changes.

### 2026-11-15 — Root-page inventory batch 07
- Inspected 12 additional percentage/QR/photo pages. GA4 confirmed in Percentage Change, Portuguese Percentage and main Percentage pages; main Percentage stores up to 8 history entries locally under `ijPercentageHistory` with a clear action.
- Task evidence: [2026-11-15-2326-root-page-inventory-batch-07.md](2026-11-15-2326-root-page-inventory-batch-07.md); master plan §21.
- Commits: plan `c0fe0d2867bb`; task file `e6eef25c2ecc`.
- D-001 remains in progress; 31 root HTML files remain unreviewed; runtime tests not run.
- No production, policy, account, DNS, merge or deployment changes.

### 2026-11-15 — Root-page inventory batch 08
- Inspected 12 QR, image resize, GST and percentage pages. No direct analytics/network/storage/CMP marker found in this sample. Social QR Maker contains destination URL templates for social networks; sampled image resize pages show no upload endpoint in source.
- Task evidence: [2026-11-15-2326-root-page-inventory-batch-08.md](2026-11-15-2326-root-page-inventory-batch-08.md); master plan §22.
- Commits: plan `2653d1bc921e`; task file `33dc27353426`.
- D-001 remains in progress; 19 root HTML files remain unreviewed; live runtime tests not run.
- No production, policy, account, DNS, merge or deployment changes.

### 2026-11-15 — Root-page inventory batch 09
- Inspected 12 more time/text/QR/voter pages. GA4 confirmed in Text Counter, Time Calculator, Tip Calculator and Unit Converter; Time Calculator stores up to 5 history records locally under `ijElapsedTimeHistoryV1`. Voter guide links to ECI portal as outbound navigation.
- Task evidence: [2026-11-15-2327-root-page-inventory-batch-09.md](2026-11-15-2327-root-page-inventory-batch-09.md); master plan §23.
- Commits: plan `5184eca083eb`; task file `514db10182a9`.
- D-001 remains in progress; 7 root HTML files remain unreviewed; live runtime tests not run.
- No production, policy, account, DNS, merge or deployment changes.

### 2026-11-15 — Final root-page inventory batch 10
- Inspected final 7 root HTML pages. Work Hours Calculator optionally stores shift dates/times, breaks, overtime threshold, hourly rate and currency locally only after opt-in; clear and opt-out removal controls exist. Word-to-JPG/PDF/PNG pages are internal redirects to Word Converter; WhatsApp/WiFi QR source showed no API upload marker.
- Root HTML source-marker review is now recorded for all 116 root HTML files. This is not a full dynamic dependency or live runtime audit.
- Task evidence: [2026-11-15-2328-final-root-page-inventory-batch-10.md](2026-11-15-2328-final-root-page-inventory-batch-10.md); master plan §24.
- Commits: plan `7da8aa2b8c53`; task file `0cf6e175d26d`.
- Next phase: consolidate page-to-GA4/AdSense/API/CDN/storage map, inspect nested dependencies, reconcile Privacy Policy. CMP/TCF live verification and account-side configuration remain pending.
- No production, policy, account, DNS, merge or deployment changes.

### 2026-11-15 — Nested resource and Worker audit batch 11
- Inspected shared scripts, 5 CSS files, package/config JSON, a backup HTML and Worker source/docs. Confirmed optional Word Converter DOCX upload through Worker to iLoveAPI; BMI toolkit and Work Hours/Time/Percentage pages have browser-local histories; service worker uses Cache Storage. Shortlinks Worker is documented as an undeployed staging scaffold.
- Task evidence: [2026-11-15-2329-nested-resource-worker-audit-batch-11.md](2026-11-15-2329-nested-resource-worker-audit-batch-11.md); master plan §25.
- Commits: plan `b834fe09f99f`; task file `e8e4f4f78671`.
- Next: inspect PWA manifests and remaining resource tree; consolidate data flows and reconcile Privacy Policy. Live Cloudflare/provider/network checks remain pending.
- No production code/config/account/DNS/merge/deployment changes.

### 2026-11-15 — Consolidated source inventory and PWA manifest audit
- Consolidated all 116 root HTML source-marker scans, 14 JS files, 5 CSS files, 4 JSON/package files, all 29 app PWA manifests plus root manifest, Worker source/docs and nested backup page.
- GA4 explicit tag found in 24 root pages; AdSense loader found in homepage source only; no explicit CMP/TCF API marker in inspected root pages/shared JS. Runtime/account-side behavior remains unknown.
- Consolidated API/CDN, local storage, PWA, Word Converter optional upload, shortlinks scaffold and unresolved mismatches in MASTER-RESEARCH-PLAN.md §26.
- Task evidence: [2026-11-15-2330-consolidated-source-inventory-and-pwa-audit.md](2026-11-15-2330-consolidated-source-inventory-and-pwa-audit.md).
- Commits: plan `76482be21ded`; task file `651c36e09776`.
- Next: inspect desktop/Android shells and workflows, then compare the complete source inventory against Privacy Policy. Live CMP/TCF/account/network and publisher legal facts remain pending.
- No app code, policy, account, Cloudflare, DNS, merge, deployment or protected design changes.

### 2026-11-15 — Android and Windows desktop wrapper audit
- Inspected Android WebView shell and Electron wrappers. Android uses INTERNET, JavaScript/DOM storage, system file chooser and local Downloads bridge; no native sensitive permissions found in manifest. Desktop wrappers load hosted pages, sandbox Electron and route external links to system browser.
- Native shells inherit hosted website tags/APIs/storage; runtime testing and app distribution status remain unverified. Android WebView JS bridge has no explicit origin allowlist in inspected source; noted for a separate security review, not changed.
- Task evidence: [2026-11-15-2331-android-desktop-wrapper-audit.md](2026-11-15-2331-android-desktop-wrapper-audit.md); master plan §27.
- Commits: plan `01872d5f8fd6`; task file `ae24225a3f2f`.
- No native code, privacy policy, account, DNS, merge or deployment changes.

### 2026-11-15 — Privacy Policy source reconciliation and official-source verification
- Read the complete policy draft and reconciled it against all root-page source scans and shared dependencies. Identified gaps in local-storage examples, exact GA4 scope, Birthday Countdown notification wording, controller/jurisdiction, native-app coverage and live CMP/TCF evidence.
- Checked current official Google publisher disclosures, AdSense required content, Google revocation guidance, IAB TCF v2.4 timeline and iLoveAPI terms/security/docs. iLoveAPI's API-specific terms say max 48h while general terms/security/docs say 2h; retain as provider inconsistency pending confirmation.
- Detailed gap matrix: MASTER-RESEARCH-PLAN.md §28.
- Task evidence: [2026-11-15-2333-privacy-policy-source-reconciliation.md](2026-11-15-2333-privacy-policy-source-reconciliation.md).
- Commits: plan `431b93141e87`; task file `06084c8832ba`.
- No `privacy-policy.html` edits, account settings, CMP tags, Worker, DNS, merge or deployment changes.

### 2026-11-15 — Robots, ads.txt and sitemap source audit
- Inspected robots.txt, ads.txt and three sitemap files. robots allows all and references sitemap.xml; ads.txt source seller line matches prior user-verified body. sitemap.xml has 107 URLs vs 105 in two legacy lists; Work Hours and Elapsed Time Guide are the two additions. Nine root HTML files are omitted, including Privacy Policy/Contact/Countdown Studio plus likely intentional 404/verification/redirect/index aliases.
- Live direct HTTP fetch was inaccessible; HTTP 200, redirects, headers and AdSense crawler status remain unverified.
- Task evidence: [2026-11-15-2334-robots-adstxt-sitemap-audit.md](2026-11-15-2334-robots-adstxt-sitemap-audit.md); master plan §29.
- Commits: plan `74542ad9f595`; task file `93ce980af2d8`.
- No robots, ads.txt, sitemap, policy, DNS, merge or deployment changes.

### 2026-11-15 — Public Android and Windows app release verification
- GitHub release metadata confirms public prerelease `infojano-tool-apps-v1.1.1` with 23 APKs and `infojano-desktop-apps-v1.0.0` with 23 Windows EXEs. App wrappers are publicly downloadable; installs/usage are not proven. Dedicated Countdown Studio desktop workflow remains artifact-only, not public release.
- Privacy Policy should cover Android/Windows access surfaces because they load hosted InfoJano pages and inherit web processing; native runtime behavior remains untested.
- Proposed policy change list: MASTER-RESEARCH-PLAN.md §30.
- Task evidence: [2026-11-15-2335-public-app-release-and-policy-scope-audit.md](2026-11-15-2335-public-app-release-and-policy-scope-audit.md).
- Commits: plan `7b91eb378ace`; task file `38405102f514`.
- No app code or Privacy Policy edits; no account/DNS/merge/deployment changes.

### 2026-11-15 — Proposed Privacy Policy revision map and approval gates
- Converted source reconciliation into a section-by-section revision map covering legal identity, GA4 scope, local/session storage, CMP revocation, feature APIs, Word Converter upload, public Android/Windows wrappers, contact, retention and jurisdiction-specific rights.
- Added ordered implementation gates and exact publisher/runtime blockers in MASTER-RESEARCH-PLAN.md §31.
- Task evidence: [2026-11-15-2335-privacy-policy-revision-map.md](2026-11-15-2335-privacy-policy-revision-map.md).
- Commits: plan `a690b1ae974c`; task file `f694fffa85f7`.
- `privacy-policy.html` remains unchanged; no account, app source, DNS, merge or deployment changes.

### 2026-11-15 — AdSense research handoff refreshed
- Updated `project-notes/NEW-CHAT-HANDOFF.md` with full source inventory status, policy gap/revision map, public app prerelease evidence, sitemap/ads.txt status, official-source updates and blockers.
- Task evidence: [2026-11-15-2336-adsense-research-handoff-refresh.md](2026-11-15-2336-adsense-research-handoff-refresh.md).
- Commit: handoff `778a7bcb279d`; task file `a5d11dee83f7`.


### 2026-11-15 — Proposed Privacy Policy revision draft prepared
- Converted the completed source reconciliation into ready-to-review replacement/addition text for analytics scope, browser storage, notification mismatch, Word Converter external processing, Android/Windows wrappers and consent revocation.
- Kept legal controller identity/jurisdiction and live CMP/vendor/runtime facts as explicit blockers; no invented legal details or retention promise.
- Full proposal and seven publication gates: [2026-11-15-2342-proposed-privacy-policy-revision-draft.md](2026-11-15-2342-proposed-privacy-policy-revision-draft.md).
- Task file commit: `cf444e1244c3d9b333082b71aa679680989b6640`.
- `privacy-policy.html` remains unchanged. No CMP/AdSense settings, Worker, DNS, merge or deployment changes. PR #236 remains open/draft/unmerged at last check.


### 2026-11-15 — Publisher identity confirmed; policy operator details added
- User confirmed operator name Abdul Barik, location West Bengal, India, and that `infojanowebsite@gmail.com` is their email address.
- Added a concise operator/contact disclosure to `privacy-policy.html` on the review branch. Wording identifies an individual operator and does not claim a registered company.
- Policy commit: `641ff424df0103f020060c844d99afa4a86bda39`.
- Timestamped task record: [2026-11-15-2350-privacy-policy-operator-details.md](2026-11-15-2350-privacy-policy-operator-details.md); task file commit: `97f6cb5badfaf5aeb08c74d868507ca4f73442e1`.
- Production is unchanged; PR #236 remains draft/unmerged. Live CMP/TCF, AdSense vendor/crawler, runtime, Worker and QA checks remain open.


### 2026-11-15 — Privacy Policy source reconciliation applied on review branch
- Updated `privacy-policy.html` with evidence-backed details for Android/Windows wrappers, exact GA4 source scope, additional local/session storage examples, notification mismatch, optional DOCX/Worker/iLoveAPI processing and cautious consent-revocation wording.
- Lightweight structural validation passed: balanced opening/closing counts for key HTML tags; doctype/title/canonical checks passed. This is not a full HTML validator or browser QA.
- Live production URLs could not be inspected from the current environment; HTTP status/redirects, CMP runtime, ads.txt crawler access and production page state remain unverified. GitHub connector reports no PR workflow runs/status checks for current head.
- Task evidence: [2026-11-15-2358-policy-reconciliation-and-validation.md](2026-11-15-2358-policy-reconciliation-and-validation.md); task file commit: `04d23266154c1e43750bbae9d018bf76b7471075`.
- Policy content commit: `410df772673988da2b66c51a15fd54d4756097dd`.
- No production deployment, PR merge, AdSense/CMP settings, DNS, Worker or sitemap changes.


### 2026-11-15 — Combined consent, AdSense, runtime and QA batch
- Added homepage consent-revocation entry point using Google's documented `CONSENT_API_READY` callback and `googlefc.showRevocationMessage()`; added Policy footer route to that entry point.
- Added HTML5 validation + local-link CI workflow and a local policy-link checker. Manual checks: key tag counts balanced, no duplicate policy IDs, all local policy href targets exist.
- Account-side vendor/approval, live HTTP/crawler, CMP/TCF/network runtime, app device testing, and Worker production/retention checks remain blocked by unavailable account/live-network/device evidence; no success claims made.
- Full record: [2026-11-15-privacy-consent-live-audit-and-qa-batch.md](2026-11-15-privacy-consent-live-audit-and-qa-batch.md); task file commit: `b956f249332edd9bc3e87b73b948030ecbf8ecd7`.
- No production deployment, account setting, Worker config/secret, DNS or merge changed.


### 2026-11-15 — Privacy Policy QA failure fixed; successful CI rechecked
- Rechecked failed run #4 (43746063035): workflow linted both policy and the entire legacy homepage, producing 31 unrelated homepage lint errors; policy had one lowercase DOCTYPE error.
- Narrowed the QA workflow to validate only privacy-policy.html plus the existing local-link checker; corrected policy doctype to uppercase.
- Successful run #8: https://github.com/barsulkhan/InfoJano/actions/runs/43746323124 . HTML validation PASS; local-link check PASS with “Checked 26 hrefs; all local targets exist.” Job conclusion success.
- Follow-up review confirmed homepage consent entry-point source uses the CONSENT_API_READY callback and googlefc.showRevocationMessage(). This is source-only evidence, not live CMP proof.
- Detailed task record: [2026-11-15-1822-privacy-policy-qa-follow-up.md](2026-11-15-1822-privacy-policy-qa-follow-up.md); task file commit: c8e9161795845306e9fd8952208aed81fec4833d.
- Fix commits: workflow a31a106da2d4b62e462db16c23f46a680494d627; policy doctype d2f069349c152a798b970c310868e77dd62af828.
- Remaining: live CMP/revocation/TCF test, AdSense approval/vendor/crawler status, production HTTP headers/redirects, Android/Windows runtime, Worker production configuration and provider retention confirmation. PR #236 remains draft/unmerged; no deployment, account/DNS/Worker setting or protected design change.


### 2026-11-16 — Privacy Policy QA strengthened and live footer gap reconfirmed
- User screenshot of live homepage footer still shows no Privacy and cookie settings / Privacy Policy / Contact links. Main branch `index.html` at `48732b0a88db6df6562456c4aca1712063af99a8` contains none of these footer link markers; the PR branch does contain them and the consent callback source. This explains why the live screenshot does not yet reflect the branch work.
- Enhanced `scripts/validate-privacy-policy-links.mjs` to check local target files and URL fragments (IDs / anchor names), including the homepage revocation anchor.
- Successful PR workflow #14: https://github.com/barsulkhan/InfoJano/actions/runs/43747375957 . HTML5 validation PASS; link/fragment validation PASS; log says “Checked 26 hrefs; all local targets and fragments exist.”
- Current tested source commit: `a23a0ae7216915e1ade5a4141bfa40ec9fad4094`; task record: [2026-11-16-0003-privacy-policy-qa-strengthening.md](2026-11-16-0003-privacy-policy-qa-strengthening.md); task record commit: `0d3b3dfc0bf07085889e8353d5710c44953eb1c1`.
- PR #236 remains Draft, open, unmerged. No merge/deployment or account/DNS/Worker changes made. User approval for merge is still required. Live CMP/TCF, AdSense account/vendor/crawler, HTTP headers/redirects and Android/Windows runtime remain unverified.


### 2026-11-16 — Autonomous source-only quick wins after publication
- PR #236 was already merged; user screenshots now confirm the live Privacy Policy, Contact page, and homepage footer Privacy Policy/Contact links.
- Source audit found the root sitemap omitted both `privacy-policy.html` and `contact.html`. Added both URLs with lastmod 2026-11-16.
- Strengthened the QA script to check local policy href targets/fragments, sitemap root/URLs/no duplicates/canonical origin, required policy/contact URLs and the robots sitemap directive.
- Updated QA workflow triggers to run on main pushes as well as feature-branch pushes, and on PR changes to policy/contact/homepage/sitemap/robots/checker/workflow.
- Source checks: sitemap now has 110 unique URLs; required pages present; robots references canonical sitemap; homepage policy and consent-anchor source present; Contact links to policy.
- Commits: sitemap `50e55a37e8d0196ef2f0d33ecb37492b17f70fc2`; checker `ca4c43887b42268e6c7d263fd9f57683a8631ef7`; workflow `c89fbe7a6b0fc9ac11a449d28041acd8befcac84`.
- Detailed task record: [2026-11-16-0012-autonomous-source-quick-wins.md](2026-11-16-0012-autonomous-source-quick-wins.md); task commit `5ee555c438b84a8b1d98b381af0dfdd166c278af`.
- New main-push workflow execution could not be retrieved through the available GitHub workflow-run view; do not claim that run passed. Live CMP/TCF, AdSense account/vendor/crawler, HTTP headers/redirects, Android/Windows runtime and Worker production configuration remain queued for evidence.


### 2026-11-16 — Sitemap consistency and live endpoint check
- Sitemap now contains 110 URLs, including Privacy Policy and Contact, with no duplicates; all 110 URL paths map to files in the main-branch repository tree.
- QA checker now also validates sitemap origin, required URLs, matching repository files and robots.txt sitemap reference. Corrected the path-normalization regex after source inspection.
- Read-only live fetch attempts for policy, contact, sitemap, ads.txt and robots.txt were inaccessible in this environment. HTTP status/redirects/headers/crawler access remain UNVERIFIED; user screenshots remain evidence for visible pages and footer links.
- Latest checker commits: `efc33d8638140d3c808382ac7832bb195f1440ba` and regex correction `190f50bbd379f85039eccf7973ea3390c2d76cb5`.
- Task record: [2026-11-16-0013-sitemap-qa-and-live-check.md](2026-11-16-0013-sitemap-qa-and-live-check.md); commit `02cc7f6eac37357c6aa1ca3ac687160021e7b145`.
- The new expanded QA has not yet been confirmed by a workflow run on main; do not claim CI PASS for the latest checker.


### 2026-11-16 — Expanded QA CI confirmed PASS
- Found and inspected main push run #43748356041 for commit `190f50bbd379f85039eccf7973ea3390c2d76cb5`.
- HTML5 validation PASS; expanded policy link + sitemap + robots + repository-file checker PASS. Workflow/job conclusion SUCCESS.
- Additional repository search reconfirmed Privacy Policy links on homepage and Contact page; did not find a common shared policy footer across all tool pages. Sitewide link insertion is deferred pending a safe footer/template inventory.
- Source search reconfirmed homepage AdSense loader, GA4 marker presence, and optional third-party routes for Age, Currency, Countdown Studio and Word Converter. No live firing or ad-serving claims.
- Detailed task record: [2026-11-16-0014-qa-ci-confirmation-and-source-search.md](2026-11-16-0014-qa-ci-confirmation-and-source-search.md); commit `b661c80dce6f2053f01bb6077b51530bb2ca2841`.
- Workflow run: https://github.com/barsulkhan/InfoJano/actions/runs/43748356041


### 2026-11-16 — Contact page added to automated HTML QA
- Expanded HTML validation from Privacy Policy only to include Contact page.
- First run #43748627700 identified two existing Contact markup issues (lowercase doctype and raw ampersand in title/Open Graph title).
- Fixed both in `contact.html` (commit `29281c6e59fdbd701320eedf714a90e487b3bc4a`).
- Repair run #43748683497 was still in progress when recorded; do not claim the Contact page QA is PASS until that run completes.
- Task record: [2026-11-16-0015-contact-page-html-qa.md](2026-11-16-0015-contact-page-html-qa.md); commit `0230f0703f7ca00bde3d984513d0074c96849729`.


- Follow-up result: repair run #43748683497 completed SUCCESS. Privacy Policy HTML5 validation PASS, Contact HTML5 validation PASS, and policy links/sitemap/robots checker PASS. See [task record](2026-11-16-0015-contact-page-html-qa.md).


### 2026-11-16 — Shared privacy-link coverage on tool pages
- Inspected the shared `site-header.js`: its navigation had no Privacy Policy link, and several sampled tool pages had no page-level policy link.
- Added a conditional, unobtrusive shared footer with Privacy Policy and Contact links only when a page has no existing Privacy Policy link. Existing linked pages are not given a duplicate footer; header/nav and hero layouts remain unchanged.
- Source commit: `fc1649439ccb7e33524043600dc080ebef6d7d0d`.
- Task record: [2026-11-16-0016-shared-privacy-link-coverage.md](2026-11-16-0016-shared-privacy-link-coverage.md); commit `716a5da7def5c2cf284444400f2267e1f514f107`.
- Browser/mobile QA and live deployment/cache propagation are not yet verified. Next: wait for source CI, then spot-check one tool page with no existing policy link and one page with an existing link at desktop/mobile widths.


### 2026-11-16 — Shared footer QA workflow coverage
- Added `site-header.js` to the Privacy Policy QA workflow path filters so future shared footer changes run CI.
- CI run #43749910209 on commit `b4f58f1cd7d842cb74e30c391b70c0f2b3fa2165`: PASS. Privacy Policy and Contact HTML5 validation PASS; policy link/sitemap/robots checker PASS.
- Task record: [2026-11-16-0017-shared-footer-qa-trigger.md](2026-11-16-0017-shared-footer-qa-trigger.md); commit `d0f08953346f975432b6d63affd5e914dc23ce1d`.
- GitHub Pages deployment for this exact commit was still queued at the time of the CI check; browser/mobile visual QA and live cache propagation remain unverified.


### 2026-11-16 — Screenshot follow-up: privacy links added to 10 tool pages
- Reviewed the uploaded mobile screenshots and added direct Privacy Policy + Contact links to Image Resizer, Document Studio, Universal Word Converter, Image to PDF, PDF Page Extractor, QR Maker, Social QR Maker, URL Toolkit, Currency Converter and Unit Converter.
- Existing footer markup was retained; pages without a footer received a compact footer. Relative links support both the custom domain and repository project path.
- Task record: [2026-11-16-0017-screenshot-pages-privacy-links.md](2026-11-16-0017-screenshot-pages-privacy-links.md), commit `415062f31fed83f8c96f81bfcc4972fe5bccff06`.
- Live after-state/browser cache verification remains pending; no production/account settings or tool logic changed.
