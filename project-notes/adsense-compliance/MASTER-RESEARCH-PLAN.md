# InfoJano — AdSense & Privacy Compliance Master Research Plan

Last researched: 2026-11-15
Status: RESEARCH BASELINE SAVED — execution not yet authorized
Repository: https://github.com/barsulkhan/InfoJano
Site: https://infojano.com
Related tracker: README.md
Related PR: https://github.com/barsulkhan/InfoJano/pull/236

## 0. Purpose and operating rules

This document is the single ordered plan for the current AdSense / Privacy Policy compliance work. It replaces scattered, one-task-at-a-time decisions with a dependency-aware sequence. It is a research and execution plan, not legal advice and not proof of compliance.

Hard constraints:
- AdSense Request review has already been submitted. Never submit it again unless the account itself explicitly requests a new review and the user authorizes it.
- PR #236 remains draft and unmerged until separately approved.
- No CMP setting, AdSense setting, DNS, production code, sitemap, deployment, Publish changes, or PR merge without explicit user approval.
- Preserve homepage hero/banner, ID Card Print Studio hero, all protected tool heroes and design.
- Never invent publisher legal identity, controller name, jurisdiction, address, retention period, legal basis, vendor list, or data flow.
- Do not repeat completed editor audits, submitted review, ads.txt content comparison, or the user's live footer check.
- Give the user one small manual instruction at a time, only when an actual user-side action is necessary.
- Keep source checks, editor previews, live browser tests, HTTP checks, account diagnostics, deployment and legal review as separate evidence classes.

## 1. Executive status snapshot (evidence available on 2026-11-15)

| Workstream | Current evidence | Status | What would close it |
|---|---|---|---|
| AdSense site review | User screenshots showed ownership verified, Review requested, status “Getting your site ready to show ads” | WAITING — not approved yet | Wait for Google result; inspect Site Details only if status changes or Google requests action |
| Request review | User confirmed it was already submitted | COMPLETE — do not repeat | None unless Google explicitly asks |
| Google Privacy & Messaging editor | Published European regulations message; setup/settings and four preview states inspected previously | EDITOR AUDIT COMPLETE | Runtime validation remains separate |
| CMP identity | Google CMP ID 300 visible in editor preview and documented as Google CMP | IDENTITY / EDITOR EVIDENCE ONLY | Verify actual live runtime and emitted signals |
| Revocation link | Editor preview shows “Privacy and cookie settings”; user reports live homepage footer has no such link; homepage source has no explicit CMP/Funding Choices integration | LIVE CONTROL NOT FOUND | Identify supported account-side injection or approved integration; test on live site |
| Consent / rejection | Prior screenshots show Consent and Manage options enabled; no live reject path test | NOT VERIFIED LIVE | Region-appropriate live browser test of first view, reject/no-consent, manage and save |
| TCF | Google CMP documentation and IAB TCF v2.4 deadline researched; live TC String not captured | DOCS RESEARCHED / LIVE SIGNAL UNKNOWN | Inspect live `__tcfapi` availability and TCData / string with a valid regional test session |
| ads.txt | User screenshot shows live body exactly matching source seller line | LIVE BODY CONTENT PASS | HTTP status/headers, HTTP and HTTPS behavior, redirect, robots and AdSense dashboard crawler status |
| Privacy Policy draft | `privacy-policy.html` exists on PR #236 branch; source structure and contact links checked | DRAFT ONLY | Complete inventory, legal identity/jurisdiction, vendor/configuration reconciliation, user legal review |
| Contact details | User supplied `infojanowebsite@gmail.com`; email ownership/deliverability not independently checked | SUPPLIED / UNVERIFIED | Publisher confirms it remains the public contact and can receive requests |
| Publisher legal identity | Not supplied/confirmed | BLOCKED | Publisher supplies exact legal person/entity name and public business/contact details appropriate for disclosure |
| Jurisdiction | Not supplied/confirmed | BLOCKED | Publisher confirms country/state or applicable establishment/jurisdiction; do not infer from traffic or device location |
| Production deployment | No deployment authorized for PR #236 | NOT DEPLOYED | Explicit user approval after review and successful checks |

## 2. Research findings — requirements and interpretation

### 2.1 Google consent requirements
Google's official publisher guidance says publishers serving personalized ads to users in the EEA and UK must use a Google-certified CMP integrated with IAB TCF; Switzerland is also covered by the stated requirement. Google Privacy & Messaging European regulations messages are one supported Google CMP path. Google notes its certification review is not a certification of full legal compliance with TCF or privacy law.

Operational consequence:
- Do not equate “Google CMP ID 300 shown in preview” with successful live CMP operation.
- Confirm the real page loads the intended CMP, displays appropriate choices in the relevant region, and produces usable signals before ad tags process consent-dependent requests.
- Do not change ad-personalization, legitimate-interest, DSA, RTB, Consent Mode or Special Feature settings by guesswork.

### 2.2 Revocation / withdrawal
Google's Privacy & Messaging guidance explicitly assigns publishers responsibility for a persistent mechanism for EEA/UK users to revoke previously made data decisions. Its suggested link/button label is “Privacy and cookie settings”. The link must lead to a functioning route that reopens the privacy choice interface; a static label, editor preview or browser Find result is insufficient.

Observed InfoJano gap:
- Editor preview previously displayed the revocation footer.
- User's live homepage footer check again found no privacy/cookie settings control.
- Homepage `index.html` source on main and PR branch has AdSense loader but no explicit Funding Choices / Google Privacy & Messaging CMP script or visible revocation control.
- Account-side or dynamically injected scripts may exist; source inspection alone cannot rule those out.

### 2.3 TCF v2.4 timing and signals
IAB Europe’s 16 July 2026 timeline confirms:
- Web CMP new-disclosure implementation deadline: 23 October 2026.
- Mobile app / CTV deadline: 23 February 2027.
This is a current web-site priority, not a future optional task.

Google's publisher integration guidance says an IAB-registered TCF CMP creates the TC string and Google ad tags consume it. If consent for Google Purpose 1 (device storage/access) is absent, Google says its ad tag should not be called. Actual behavior must be tested, not inferred from editor controls.

TCF v2.4 evidence to collect:
- Is `__tcfapi` present on the live page?
- Does `ping` identify the CMP and report loaded status?
- Does `getTCData` / event listener return a non-empty TC string after the user's choice?
- Does the string decode to the expected CMP ID/version and reflect the actual choice?
- Does revocation reset or update signals and reopen the choice journey?
- Are v2.4 web disclosures / updated GVL data actually reflected by the live CMP?
Never fabricate a TC string or infer validity from the footer badge.

### 2.4 Privacy Policy disclosures
Google publisher policies require a privacy policy disclosing data collection, sharing and use resulting from Google products, including cookies, web beacons, IP addresses and other identifiers; users must be told third parties may place/read cookies or use identifiers due to ad serving. Google's AdSense required-content guidance also expects disclosure of third-party ad vendors and relevant opt-out information.

A defensible policy needs to match actual production behavior:
- data categories and purposes;
- Google Analytics and AdSense processing;
- cookies/local storage and consent choices;
- advertising technology providers selected in the live account;
- each feature's external API, CDN, embedded media or upload route;
- browser-local storage and file processing;
- contact/privacy request route;
- retention only where the publisher/provider has confirmed it;
- controller identity and applicable jurisdiction only after publisher confirmation.

Do not publish the current draft as final while it explicitly says the inventory is partial and live behavior is not fully verified.

### 2.5 ads.txt
Google says the crawler must be able to reach the root-domain file, the response must be HTTP 200, robots.txt must not block it, formatting must be valid, and both HTTP and HTTPS access/redirect behavior should be checked. AdSense may take days, and for low-ad-request sites up to a month, to reflect changes.

Current InfoJano evidence:
- Source line: `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`.
- User screenshot of live `https://infojano.com/ads.txt` visibly shows the exact same line.
- This proves visible response body content and exact match, but not status code, headers, redirect chain or AdSense crawler status.

### 2.6 AdSense review readiness
Google's site-readiness guidance covers unique/original useful content, clear navigation and good user experience. The review process can take days and sometimes 2–4 weeks. Current site status is “Getting your site ready to show ads” based on the previously supplied account screenshot. Do not repeatedly request review. Monitor for a new status or explicit Google action.

## 3. Ordered execution roadmap and dependency gates

| Order | ID | Task | Priority | Depends on | Evidence / acceptance criteria | User involvement |
|---:|---|---|---|---|---|---|
| 0 | R-001 | Consolidate research, evidence, status and this plan | P0 | None | This dossier, index and tracker linked and dated | None |
| 1 | L-001 | Confirm publisher/controller legal identity | P0 | None | Exact legal name/person/entity and whether public-facing name differs | One direct question when ready |
| 2 | L-002 | Confirm publisher jurisdiction / establishment | P0 | L-001 | Publisher-confirmed country and relevant jurisdiction; no inference | One direct question |
| 3 | D-001 | Complete page-by-page source data-flow inventory | P0 | None | All HTML, shared JS, worker config references, storage, APIs, embeds, analytics/ad tags catalogued | None unless production-only facts needed |
| 4 | D-002 | Reconcile inventory with actual production configuration | P0 | D-001 | Confirm enabled/disabled features, Worker status/domain, analytics/ad tags, actual vendors | User/account evidence only where inaccessible |
| 5 | P-001 | Reconcile Privacy Policy draft with verified inventory and legal details | P0 | L-001, L-002, D-002 | No unsupported claims; provider/vendor and rights/contact disclosures accurate | User reviews legal facts |
| 6 | C-001 | Read-only audit of Google Privacy & Messaging account configuration | P0 | Existing editor evidence | Capture current published message, settings, selected vendors, message status and account diagnostics; no Save/Publish | One screenshot request if needed |
| 7 | C-002 | Determine why CMP/revocation entry point is absent on live page | P0 | C-001, live source/runtime evidence | Distinguish account configuration, script delivery, domain targeting, tag injection and browser/region effects | Possibly one controlled browser test |
| 8 | C-003 | Verify first-visit EEA consent and no-consent/reject journey | P0 | C-002 | Fresh consent state; choices are clear; no positive signal before affirmative consent; record runtime evidence | One guided test at a time |
| 9 | C-004 | Verify Manage options, vendor list, save and reopen behavior | P0 | C-003 | Purpose/vendor disclosures load and saved choice is respected | One guided test |
| 10 | C-005 | Verify revocation link and re-consent journey | P0 | C-002–C-004 | Persistent “Privacy and cookie settings” entry point reopens settings; withdrawal resets/updates choices and signals | One guided test |
| 11 | T-001 | Verify live TCF v2.4 signals and vendor disclosures | P0 | C-003–C-005 | Capture CMP identity/version, TC string, event status and v2.4 web disclosure evidence; decode/validate | Guided DevTools/browser evidence if necessary |
| 12 | A-001 | Verify ads.txt HTTP/HTTPS response and redirects | P1 | Existing visible body pass | HTTP status 200 or valid redirect to 200 on both schemes, headers/body exact, no soft-404 | Can be performed independently |
| 13 | A-002 | Verify robots/crawler and AdSense dashboard ads.txt status | P1 | A-001 | robots allow; Site Details shows recognized/authorized; record crawl status/date | User screenshot for AdSense account |
| 14 | P-002 | Add Privacy Policy to sitemap if appropriate and validate URL links | P1 | P-001 and PR review | Sitemap URL, canonical, robots, footer/contact links consistent | Code change requires approval |
| 15 | Q-001 | Final compliance matrix and risk review | P0 | P-001, T-001, A-002 | Every item PASS / FAIL / UNVERIFIED with evidence and owner | None |
| 16 | G-001 | User reviews policy, CMP proposal and PR diff | P0 | Q-001 | Explicit written approval for each intended change | Required |
| 17 | R-002 | Implement only approved changes on isolated branch | P0 | G-001 | Small scoped commits, tests, no protected design changes | Approval required |
| 18 | R-003 | PR review, merge and production deployment | P0 | R-002, tests | Explicit merge/deploy authorization; CI and deployment independently pass | Required |
| 19 | R-004 | Post-deploy live regression QA | P0 | R-003 | Consent, revocation, TCF, policy, ads.txt and page rendering rechecked | One final evidence pass |

Priority interpretation:
- P0 = blocks a defensible compliance decision or safe release.
- P1 = important verification that can run in parallel and should be closed before declaring the workstream complete.
- P2 = optional improvement, not a current blocker.

## 4. Parallel work allowed (without changing production)

These can proceed while legal details or user screenshots are pending:
1. Finish source-only data inventory (D-001).
2. Prepare an evidence map of existing screenshots and completed checks.
3. Validate PR source structure, canonical, links, sitemap relationship and text claims.
4. Perform HTTP/HTTPS read-only checks where tools allow; if unavailable, mark UNVERIFIED.
5. Prepare a CMP troubleshooting decision tree without changing settings.

Do not perform source changes merely because a possible issue is found. Record finding, impact, proposed fix and required approval first.

## 5. Explicit stop / approval gates

No action in the following groups without explicit user approval:
- CMP toggles, vendor selection, message settings, Consent Mode, legitimate-interest, DSA/RTB, Special Feature 2, publish changes.
- AdSense account settings, site removal/re-add, Request review resubmission, ad serving changes.
- DNS, redirects, robots.txt, ads.txt, source HTML/JS, sitemap, Worker configuration, deployment.
- PR #236 merge or production publication of Privacy Policy.
- Any modification to homepage hero/banner, ID Card Print Studio hero or protected design.

Legal identity and jurisdiction are facts the publisher must supply; assistant must not guess them from the user's location, repository owner name, email address, or traffic.

## 6. Existing decisions — do not repeat

- AdSense Request review was already submitted; do not submit again.
- Ownership verification and review-request steps were shown complete in user screenshots; do not redo.
- Google Privacy & Messaging editor audit and four preview states were already inspected; do not repeat the full editor tour.
- CMP ID 300 is editor/documentation evidence, not proof of live behavior.
- ads.txt visible body was verified by user screenshot and exactly matches the source line; do not ask for the same screenshot again.
- Live homepage footer was checked by user and no privacy/cookie settings link was visible; do not ask for the same footer check again.
- Homepage source inspection found AdSense loader but no explicit CMP/Funding Choices script or revocation link in index.html; dynamic/account-side injection remains possible.
- PR #236 is draft and unmerged; never merge without approval.
- No production code, DNS, CMP/AdSense settings or deployment changed in the current research session.

## 7. Current issue register

| Issue | Severity | Evidence | Status | Next action |
|---|---|---|---|---|
| No live privacy/cookie settings entry point | Critical for revocation journey | User live footer report + index.html source inspection | OPEN | Diagnose CMP account-to-live integration |
| Live CMP behavior unknown | Critical | Editor preview only; no runtime test | OPEN | Live regional consent test |
| Live TC string/version unknown | Critical | TCF docs reviewed; no live signal | OPEN | TCF API/TCData inspection |
| Publisher legal identity unknown | High | Not provided | BLOCKED | Ask publisher |
| Jurisdiction unknown | High | Not provided | BLOCKED | Ask publisher |
| Data inventory partial | High | Repository scans documented in tracker | OPEN | Complete page/shared script inventory |
| Policy draft not final | High | PR text warns inventory/config incomplete | OPEN | Reconcile after facts |
| ads.txt HTTP status/crawler status unknown | Medium | Visible body only | OPEN | HTTP headers + dashboard |
| Privacy Policy absent from sitemap on PR branch | Medium | Source check | FOLLOW-UP | Decide after policy approval and URL validation |
| AdSense site review pending | External dependency | User screenshot “Getting your site ready” | WAITING | Wait for Google; don't resubmit |

## 8. Research source register (official sources; accessed 2026-11-15)

| Source | What it supports | URL |
|---|---|---|
| Google — CMP requirements for EEA/UK/Switzerland publishers | Certified CMP + TCF requirements and Google CMP options | https://support.google.com/adsense/answer/13554116?hl=en |
| Google — Set up and manage CMP | Provider disclosure and consent setup guidance | https://support.google.com/adsense/answer/7670013?hl=en |
| Google — Publisher integration with IAB TCF | TC string generated by CMP and consumed by Google ad tags; Purpose 1 caveat | https://support.google.com/adsense/answer/9804260?hl=en |
| Google — Guidelines for Privacy & Messaging | Publisher responsibility for revocation link and recommended label | https://support.google.com/admanager/answer/12226986 |
| Google — IAB requirements and European regulations messages | Default no-consent states, wording, withdrawal behavior | https://support.google.com/adsense/answer/10207733 |
| Google — Privacy & Messaging JavaScript API | googlefc API, rendering revocation entry points, test/debug parameters | https://developers.google.com/funding-choices/fc-api-docs?hl=en |
| IAB Europe — TCF policies | Current TCF policies version and participant obligations | https://iabeurope.eu/iab-europe-transparency-consent-framework-policies/ |
| IAB Europe — 16 July 2026 timeline letter | TCF v2.4 web disclosure deadline 23 Oct 2026; app/CTV deadline 23 Feb 2027 | https://iabeurope.eu/wp-content/uploads/TCF_V-CMP_comms_TCFpoliciesV5.0.bAndSpecificationsV2.4ConfirmationOf-theTimeline_160726_IABEurope.pdf |
| Google — Privacy disclosures | Required Google data/cookie/identifier disclosures | https://support.google.com/publisherpolicies/answer/10437794?hl=en |
| Google — AdSense required content | Third-party ad vendor and opt-out disclosures | https://support.google.com/adsense/answer/1348695?hl=en |
| Google — ads.txt crawler requirements | HTTP 200, root domain, robots, both HTTP/HTTPS, formatting and crawl delay | https://support.google.com/adsense/answer/7679060?hl=en |
| Google — AdSense site readiness | Unique/original content, navigation, user experience | https://support.google.com/adsense/answer/7299563?hl=en |
| Google — Not ready to show ads | Ad code, crawler, content and review troubleshooting | https://support.google.com/adsense/answer/12176698?hl=en |
| Google — Site status | Getting ready and ads.txt status interpretation | https://support.google.com/adsense/answer/12170222?hl=en |

## 9. Limitations and facts not established

- This is a documentation and planning research pass, not a legal opinion.
- The user's country/device location is not evidence of the publisher's legal establishment or governing law.
- Public documentation does not reveal the exact vendor list selected in this AdSense account.
- Editor screenshots do not prove the live page loads the CMP or emits a valid TC string.
- A visible ads.txt body does not reveal HTTP status, response headers or crawler status.
- A repository scan does not establish every production runtime request or account-side injected script.
- No quantitative site traffic, EEA audience share, revenue, RPM, or AdSense approval prediction is asserted.
- Some Google Help pages and TCF version materials can be updated; re-check authoritative docs before any final implementation or legal sign-off.

## 10. Research decision

**Decision: REVISE / PROCEED WITH EVIDENCE COLLECTION; NO PRODUCTION IMPLEMENTATION YET.**

Rationale:
- The overall task can proceed safely as read-only research and verification.
- The visible ads.txt body is correct.
- The live revocation entry point is currently absent from the user's homepage check and needs highest-priority diagnosis.
- The TCF v2.4 web disclosure deadline has passed; actual live CMP behavior and signal must be verified urgently.
- Privacy Policy publication is blocked by unconfirmed legal identity/jurisdiction and incomplete production data inventory.
- Any implementation requires explicit user approval after the complete evidence and proposal are presented.

## 11. Next execution sequence

1. Complete D-001 source inventory without changing code.
2. Ask for publisher legal identity and jurisdiction together only when the next step actually requires those facts.
3. Diagnose the CMP missing revocation entry point using read-only account/runtime evidence.
4. Verify EEA consent/reject/manage/revoke and TCF v2.4 signals.
5. Close ads.txt HTTP/crawler status.
6. Reconcile and revise PR #236 only after verified facts and explicit approval.
7. Present one complete proposed change set and obtain explicit permission before implementation, merge or deployment.

## 12. Session log

### 2026-11-15 — Master research and dependency plan
- User request: stop isolated task-by-task execution; research the whole AdSense and Privacy Policy compliance effort first, save the research in a file, maintain an index, and establish what must happen first, later, and when.
- Re-read the handoff, work tracking standard, research standard, research template, TOOL-INDEX and current AdSense tracker.
- Researched official Google AdSense, Google Privacy & Messaging API, Google Publisher Policies, IAB Europe TCF policies and the IAB v2.4 transition timeline.
- Key findings: live revocation link is publisher responsibility; Google suggests “Privacy and cookie settings”; TC string must be generated by registered CMP and consumed by Google ad tags; TCF v2.4 web disclosure deadline 23 Oct 2026; ads.txt crawler requires HTTP 200, root-domain reachability, robots allowance, valid formatting and HTTP/HTTPS coverage.
- Saved ordered phases, dependencies, priorities, approval gates, issue register, source register and explicit no-repeat decisions in this file.
- No source code, settings, DNS, production, PR merge or deployment changed.
- Research confidence: high for official platform requirements; medium for mapping requirements to InfoJano due unavailable live runtime/account diagnostics; low/unknown for legal identity and jurisdiction until publisher confirms.

## 13. Source inventory continuation — first read-only search batch (partial)

Date: 2026-11-15
Scope: repository-wide GitHub code search on main/default branch; this is discovery evidence, not a complete file-by-file audit.

| Area | Source evidence found | Interpretation / follow-up |
|---|---|---|
| YouTube Data API | `countdown-studio.html` calls `https://www.googleapis.com/youtube/v3/channels` with channel lookup and a visitor-entered API key; refreshes while page is open | Disclose the request fields and key handling accurately; inspect the full source and any embedded player path |
| Browser storage | `word-converter.js`, `bmi-toolkit.js`, `site-header.js`, `age.html` contain localStorage use | Map each key, data category, opt-in condition, retention/clear behavior and whether any value leaves the browser |
| Session storage | `qr-maker.html` and `qr-scanner.html` use `infojano-qr-prefill` to transfer scanned text between pages | Record that QR content may persist for the current tab session; inspect clear/consumption behavior |
| Camera | `qr-scanner.html` calls camera through ZXing/browser media APIs after user action | Confirm permission timing and whether frames are processed locally; avoid claiming no external requests from library loading |
| Currency API | `currency-converter.html` calls `https://open.er-api.com/v6/latest/{base}`; historical data also uses Frankfurter (previous tracker evidence) | Record base-currency request path and actual response fields; provider retention remains unknown |
| Word conversion | `word-converter.html`, `word-converter.js`, `backend/word-converter/src/index.js`, and backend README exist | Worker source currently has an origin allowlist for GitHub Pages; custom-domain availability and production Worker binding must be confirmed; file upload occurs only on optional high-fidelity route after consent |
| External libraries | Search found cdnjs, jsDelivr and unpkg fallbacks for PDF.js/JSZip and other libraries | Need complete inventory across all HTML and dynamically imported modules |
| Ad/CMP integration | Homepage `index.html` has AdSense loader but no explicit CMP script in the inspected source | Account-side/dynamic injection is still possible; runtime network inspection remains mandatory |

### Discovery limits
- GitHub search excerpts are not exhaustive and search covers the default branch, not necessarily every PR-only file.
- This batch does not prove every page has been inspected.
- No live requests, cookies, browser storage, CMP API, TC string, or network payloads were inspected.
- D-001 remains OPEN / IN PROGRESS; do not mark the data inventory complete.

### Next read-only source inventory pass
1. Fetch the full source for every discovered file and inspect each relevant function, not only search excerpts.
2. Enumerate all root-level HTML files and shared JS/CSS/worker files; classify each external origin and data flow.
3. Search for analytics IDs, AdSense tags, consent APIs, fetch/XHR/WebSocket, script/link/font/image origins, storage keys, file uploads, camera/geolocation/notifications.
4. Compare the complete inventory with the current Privacy Policy draft and mark each disclosure accurate / missing / uncertain.
5. Record any production-only configuration as publisher-confirmation required; do not guess or expose secrets.

## 14. Source data-flow audit — full-file sample batch (2026-11-15)

Scope: fetched complete raw source for 12 selected files on `feature/privacy-policy-adsense-compliance`: `countdown-studio.html`, `qr-maker.html`, `qr-scanner.html`, `currency-converter.html`, `word-converter.html`, `word-converter.js`, `backend/word-converter/src/index.js`, `backend/word-converter/README.md`, `age.html`, `bmi-toolkit.js`, `site-header.js`, and `privacy-policy.html`.

### Confirmed source observations

| File / feature | Source-level data flow | Privacy implications / questions |
|---|---|---|
| `countdown-studio.html` | YouTube Data API v3 `/youtube/v3/channels` receives `part=snippet,statistics`, user-provided channel lookup and API key; page refreshes count every 60 seconds while connected. YouTube no-cookie embed host is also referenced. | API key is entered by the visitor and sent to Google API in query parameters; inspect whether the visitor is told this and verify embed loading/consent behavior. Event settings including optional media URL and theme are stored in localStorage key `ij-countdown-studio-v1`. |
| `qr-maker.html` | GA4 tag uses measurement ID `G-P8D7XRGVEF`; ZXing library loaded from unpkg; sharing/copy uses browser APIs. | GA4 firing/consent gating unknown; QR content should be treated as user-provided potentially sensitive data. |
| `qr-scanner.html` | ZXing from unpkg; camera access requested only after user presses Start and browser media permission is invoked; scanned text passed to QR Maker through sessionStorage key `infojano-qr-prefill`. | Explain camera permission and browser-local decoding only if confirmed; verify whether frames or decoded text are transmitted (source suggests local decode, but external library download still contacts CDN). |
| `currency-converter.html` | Latest rates fetched from `open.er-api.com/v6/latest/{base}`; historical rates fetched from `api.frankfurter.dev/v2/rates?base=`; flag images from `flagcdn.com`. | Base currency and requested historical range/pair are disclosed to providers by request URL; provider-side retention/analytics unknown. |
| `word-converter.html` / `word-converter.js` | JSZip, docx-preview and PDF.js loaded from jsDelivr/cdnjs/unpkg fallback CDNs; optional high-fidelity route POSTs FormData to configured HTTPS Worker `/convert`; Worker URL stored in localStorage. | Standard route vs upload route must be distinguished in policy; confirm actual production Worker URL/binding, retention and provider contract. |
| `backend/word-converter/src/index.js` | Worker code calls iLoveAPI `https://api.ilovepdf.com/v1`; source allowlist observed as `https://barsulkhan.github.io`. | Current allowlist appears to name GitHub Pages origin, not the custom domain; production custom-domain route must be confirmed. Never infer live Worker binding from README placeholder. |
| `age.html` | GA4; `ipapi.co/json/`; Wikipedia On This Day REST; Wikidata SPARQL; localStorage birthday reminder and per-day reminder marker; Notification API only when permission is granted. | IP geolocation request reveals visitor IP to provider; birthday data stays in browser storage in inspected code; notification permission is user-triggered. Verify GA consent gating. |
| `bmi-toolkit.js` | Stores up to 100 entries containing date, weight, height and BMI in localStorage; clear action removes the key. | Health-adjacent personal data stored locally; policy should say browser-local only if no server sync exists. No server transfer identified in this JS file. |
| `site-header.js` | Stores selected interface language in localStorage key `infojano-language`. | Preference data is local; no external transfer found in this file. |
| `privacy-policy.html` | Existing policy references Google, AdSense vendor list, Google ad settings, ipapi, ExchangeRate-API, Frankfurter, Wikimedia, iLovePDF/iLoveAPI. | References are present but must be reconciled against exact live feature integrations, vendor list and legal controller facts; links alone do not prove complete disclosure. |

### Cross-cutting signals
- GA4 measurement ID `G-P8D7XRGVEF` appears in selected files; this sample does not establish whether it is present on every page or whether Consent Mode / CMP gating is active.
- Third-party script/CDN origins identified in this sample: Google Tag Manager, unpkg, jsDelivr, cdnjs, FlagCDN, Google APIs, ipapi, Wikimedia, ExchangeRate-API and Frankfurter.
- Browser storage identified in this sample: countdown configuration, QR scanner-to-maker handoff, Worker URL, birthday reminder markers, BMI history and language preference.
- No secrets or actual visitor data were copied into this report.

### Limitations / status
- This is a 12-file full-source sample, not a complete audit of all 100+ root HTML pages and shared scripts.
- A bulk raw-file scan across every root HTML/JS file was attempted but not completed because the tool-call limit was reached; no exhaustive scan result is claimed.
- No production browser network log, live cookies/storage inspection, account-side vendor export, Worker production binding, or third-party retention contract was inspected.
- D-001 remains IN PROGRESS. All source findings above are SOURCE-VERIFIED only.

### Next D-001 work
1. Continue root-page inventory in small batches, prioritizing pages with analytics, APIs, file uploads, device permissions and embedded media.
2. Inspect all shared scripts and the full homepage tag setup.
3. Compare each observed external host and storage category with the draft policy; record missing/uncertain statements.
4. Ask publisher to confirm production Worker URL and whether the Word Converter custom domain is enabled; do not change Worker/DNS.
5. Keep account-side CMP/AdSense vendor inventory separate from repository source evidence.

## 15. Shared scripts, homepage and file-tool source audit (2026-11-15)

Scope: complete raw-source inspection of 14 selected files on the PR branch: `index.html`, shared scripts `site-header.js`, `sw.js`, `theme.js`, `related-apps.js`, `download-progress.js`, `install.js`, `image-resizer-advanced.js`; and `image-compressor.html`, `image-resizer.html`, `image-to-pdf.html`, `pdf-to-jpg.html`, `extract-pdf-pages.html`, `document-studio.html`.

### Findings
- Homepage `index.html` contains GA4 measurement ID `G-P8D7XRGVEF` and AdSense loader with publisher client `ca-pub-2908196513377151`. No Funding Choices / Google Privacy & Messaging / `__tcfapi` / `googlefc` marker was found in this inspected homepage source. Account-side or dynamically injected runtime behavior remains unknown.
- Selected image utility pages (Image Compressor, Image Resizer, Image-to-PDF) also contain the GA4 measurement ID. This confirms GA4 is present on these selected pages only; it is not a complete all-pages count.
- Image Compressor includes a fetch used to retrieve a generated download link/blob; the inspected line alone does not establish an upload to InfoJano or third-party processing.
- PDF-to-JPG and Extract PDF Pages load PDF.js/pdf-lib-related assets from cdnjs; Document Studio loads Google Fonts and cdnjs-hosted libraries.
- `site-header.js` stores the interface language in localStorage; no external request found in this shared script.
- `sw.js` contains fetch handlers for service-worker cache/network behavior; this is same-origin request handling in the inspected code, not by itself a third-party data recipient.
- `theme.js`, `related-apps.js`, `download-progress.js`, `install.js`, and `image-resizer-advanced.js` showed no direct external API, browser storage, analytics or consent API markers in the inspected source excerpts.
- No CMP API or consent-gating code was found in the inspected homepage/shared script set. This remains source evidence only.

### Limits
- This is a 14-file selected batch, not every root HTML file.
- Search for a marker in a file does not prove the absence of all dynamic imports, embedded components or runtime account-side injection.
- No browser network capture, consent-state test, cookie inspection or live tag execution test was performed.

### Next
- Continue source batches across remaining pages with personal data, calculators, embeds and external APIs.
- Build a consolidated page-to-vendor matrix and distinguish global tags (GA4/AdSense) from feature-specific APIs/CDNs.
- Check whether analytics/ads tags are gated by consent at runtime; do not alter tags or CMP settings without explicit approval.

## 16. Finance, health-adjacent, QR and contact page audit (2026-11-15)

Scope: complete raw source fetched for 12 selected pages: `emi.html`, `loan-eligibility.html`, `loan-interest.html`, `savings.html`, `bmi.html`, `bmr-calculator.html`, `barcode-scanner-online.html`, `bulk-qr-generator.html`, `url-toolkit.html`, `document-studio.html`, `password-generator.html`, and `contact.html`.

### Findings
- GA4 measurement ID `G-P8D7XRGVEF` is present in the inspected EMI, Loan Eligibility, Loan Interest, Savings, BMI and Password Generator pages. This extends the confirmed sample list; it is not yet a complete page count.
- BMR Calculator, Barcode Scanner Online, Bulk QR Generator and Contact page showed no GA4/AdSense/CMP/network/storage marker in the inspected raw source. This is a source-level marker check, not proof that no dynamically loaded or shared tag executes.
- Document Studio loads Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) and cdnjs assets.
- URL Toolkit's `http://.` match is an HTML placeholder/validation string, not evidence of a real third-party recipient.
- No direct CMP API or TCF marker found in this selected batch.
- No new upload endpoint or external API was confirmed in the inspected lines for these selected pages.

### Limits / next
- This 12-page batch does not establish global GA4 coverage or absence of tags on uninspected pages.
- Continue inventory across remaining root HTML pages and classify pages by shared tag presence, data input sensitivity, external requests and permission APIs.
- Inspect dynamic scripts and shared header inclusion behavior; compare with the final GA4/AdSense tag map.

## 17. Root-page inventory batch 03 — public information, date and BMI support pages (2026-11-15)

Scope: complete raw source fetched for 12 remaining root HTML pages: `404.html`, `aadhaar-card-print.html`, `add-subtract-date-calculator.html`, `age-in-days-calculator.html`, `ayushman-card-print.html`, `bengali-number-to-words.html`, `birthday-countdown-calculator.html`, `bmi-calculation-guide.html`, `bmi-health-guide.html`, `bmi-healthy-weight-range.html`, `bmi-weight-categories.html`, and `bulk-number-to-words.html`.

### Findings (source verified)
- Aadhaar Card Print Guide links users outward to the official UIDAI myAadhaar portal (`myaadhaar.uidai.gov.in`) and then internally to InfoJano's ID Card Print Studio. The inspected guide itself shows no fetch/upload, analytics, ad or browser-storage API. This outbound link is navigation, not evidence that Aadhaar data is sent to UIDAI by InfoJano.
- Ayushman Card Print Guide links outward to the official PM-JAY Beneficiary Portal (`beneficiary.nha.gov.in`) and internally to the ID Card Print Studio. The inspected guide itself shows no fetch/upload, analytics, ad or browser-storage API. This outbound link is navigation, not evidence of an InfoJano-to-NHA data transfer.
- Add/Subtract Date Calculator imports Google Fonts (Inter) from `fonts.googleapis.com`; its inspected inline calculation script has no fetch, browser storage, analytics/ad or CMP API marker. The font request is a third-party resource request.
- Birthday Countdown Calculator's visible copy says notifications can be allowed and that delivery while closed is not guaranteed; however, the inspected source contains no `Notification` API call, no notification permission request and no localStorage/sessionStorage use. Treat the copy as a feature claim needing product/source reconciliation, not as evidence that notification data is collected or a notification is actually implemented.
- 404, Age in Days, Bengali Number-to-Words, BMI guide/support pages and Bulk Number-to-Words showed no direct analytics/ad/CMP, fetch/XHR, browser storage or device-permission API marker in the inspected source. Bengali Number-to-Words and Bulk Number-to-Words perform conversion in inline browser-side JavaScript; no server transfer was found in these files.
- No direct CMP/TCF marker was found in this batch.

### Important distinction
- External official-government links (UIDAI/NHA) are ordinary user-initiated navigation links. They should not be listed as embedded processors or API integrations unless a separate source proves a data exchange.
- Google Fonts is an external resource origin. Whether a visitor's IP is exposed as part of fetching the font is a technical consequence of the browser request; provider retention/processing details were not verified here.

### Limits / next
- This is a bounded 12-page batch, not a full root-page audit.
- Source inspection does not prove no tags are injected at runtime by account-side systems or shared deployment configuration.
- Continue with remaining root pages in batches; prioritize document/photo, QR, calculators, API-driven tools and embedded media.
- Reconcile Birthday Countdown's notification wording with actual source behavior before any policy statement is drafted; no code change authorized.

## 18. Root-page inventory batch 04 — date tools, countdown pages and QR generators (2026-11-15)

Scope: complete raw source fetched for 12 additional root HTML pages: `business-days-calculator.html`, `cheque-amount-in-words.html`, `contact-qr-code-generator.html`, `countdown-timer-bangladesh.html`, `countdown-timer-india.html`, `countdown-timer-usa.html`, `custom-qr-code-generator.html`, `date-difference.html`, `date-duration-calculator.html`, `day-of-week-born-calculator.html`, `days-between-dates-calculator.html`, and `decimal-number-to-words.html`.

### Findings (source verified)
- GA4 measurement ID `G-P8D7XRGVEF` is present in `date-difference.html`.
- Google Fonts (`fonts.googleapis.com`) is referenced by Business Days Calculator, Date Duration Calculator and Days Between Dates Calculator. No fetch/storage/permission/analytics/CMP marker was found in those three source samples.
- Cheque Amount in Words, Contact QR Code Generator, Bangladesh/India/USA Countdown Timer pages, Custom QR Code Generator, Day of Week Born Calculator and Decimal Number to Words showed no direct GA4/AdSense/CMP, fetch/XHR, browser-storage or device-permission marker in this bounded source scan.
- No CMP/TCF API marker found in this batch.
- Countdown timer pages are separate localized/region-specific pages; no API-backed countdown or server call was identified in the source scan. Confirm full runtime behavior only if later evidence indicates dynamic loading.
- QR generators in this batch showed no external QR-generation API call in source; do not infer that no browser/CDN requests occur elsewhere without inspecting shared dependencies/runtime.

### Limits / next
- This is a 12-page source batch only; 67 root HTML pages remain after this batch according to the branch tree inventory (116 total root HTML files).
- Continue with next 12 pages and maintain exact distinction between observed GA4, external font requests, ordinary links and client-side-only calculations.
- Live network, consent-state and cookie testing remain NOT RUN.

## 19. Root-page inventory batch 05 — government print guides, finance tools and QR pages (2026-11-15)

Scope: complete raw source fetched for 12 additional pages: `digital-ration-card-print.html`, `discount-pt-br.html`, `discount.html`, `dollars-in-words.html`, `elapsed-time-calculator-guide.html`, `email-qr-code-generator.html`, `exam-marks-percentage-calculator.html`, `google-maps-location-qr-code-generator.html`, `google4a4795e5c7c03eae.html`, `gst-calculator.html`, `hindi-number-to-words.html`, and `id-card-print-studio.html`.

### Findings (source verified)
- GA4 measurement ID `G-P8D7XRGVEF` appears in `discount-pt-br.html`, `discount.html`, and `gst-calculator.html`.
- Digital Ration Card Print Guide links outward to West Bengal Food & Supplies (`food.wb.gov.in`) and internally to ID Card Print Studio. The inspected guide contains no fetch/upload or browser-storage API; the external link is ordinary navigation.
- ID Card Print Studio loads PDF.js and its worker from cdnjs; jsPDF is loaded from a local repository asset. Its footer says files are processed in the browser and are not intentionally uploaded to an InfoJano server. Static source scan found no `fetch`, XHR, FormData, localStorage or sessionStorage use in this page; this supports a client-side processing statement for this page, but does not independently prove every runtime/library behavior.
- ID Card Print Studio contains legacy GitHub Pages URLs in metadata/schema; these are metadata references, not a data-transfer endpoint.
- Dollars in Words, Elapsed Time Calculator Guide, Email QR Code Generator, Exam Marks Percentage Calculator, Google Maps Location QR Code Generator, Google verification HTML, and Hindi Number-to-Words showed no direct GA4/AdSense/CMP, fetch/XHR, browser-storage or device-permission marker in this bounded scan.
- No CMP/TCF marker found in this batch.

### Limits / next
- This batch adds 12 source files; remaining unreviewed root pages continue to be tracked by the branch tree inventory.
- CDN requests and ordinary external links must be distinguished from user-data uploads. No live network or file-processing runtime test was run.
- Continue with next page batch, then reconcile complete GA4 page coverage and the inventory of document-processing/CDN dependencies.

## 20. Root-page inventory batch 06 — number conversion, percentage and photo utilities (2026-11-15)

Scope: complete raw source fetched for 12 additional pages: `increase-decrease-by-percentage-calculator.html`, `lakh-crore-converter.html`, `million-billion-converter.html`, `number-to-words-for-cheque.html`, `number-to-words-indian.html`, `number-to-words-international.html`, `number-to-words-uppercase.html`, `number-to-words.html`, `ordinal-number-converter.html`, `original-price-before-discount-calculator.html`, `passport-id-photo-resizer.html`, and `percent-of-number-calculator.html`.

### Findings (source verified)
- GA4 measurement ID `G-P8D7XRGVEF` is present in the main `number-to-words.html` page.
- The other 11 inspected pages showed no direct GA4/AdSense/CMP, fetch/XHR, browser-storage, or device-permission marker in the bounded source scan.
- Passport ID Photo Resizer and the number/percentage tools showed no explicit upload endpoint or FormData/network call in the inspected source. This suggests the page-level workflow is browser-side, but does not establish behavior of every imported/shared dependency or runtime injection.
- No CMP/TCF marker found in this batch.

### Limits / next
- 43 root HTML files remain unreviewed in the current branch tree after this batch (116 total root HTML files).
- Continue page inventory; later produce a consolidated GA4 page list and classify local-only file/image processing separately from any optional upload routes.
- Live runtime/network/cookie/consent testing remains NOT RUN.

## 21. Root-page inventory batch 07 — percentage calculators and QR/photo tools (2026-11-15)

Scope: complete raw source fetched for 12 additional pages: `percentage-change.html`, `percentage-decrease-calculator.html`, `percentage-difference-calculator.html`, `percentage-increase-calculator.html`, `percentage-of-percentage-calculator.html`, `percentage-pt-br.html`, `percentage-to-decimal-converter.html`, `percentage-to-fraction-converter.html`, `percentage.html`, `phone-number-qr-code-generator.html`, `print-document-image-resizer.html`, and `profit-loss-percentage-calculator.html`.

### Findings (source verified)
- GA4 measurement ID `G-P8D7XRGVEF` is present in `percentage-change.html`, `percentage-pt-br.html` and `percentage.html`.
- Main Percentage Calculator (`percentage.html`) stores up to 8 percentage calculation history entries in localStorage key `ijPercentageHistory` and provides a clear-history action. This is user-entered calculator history stored in the browser; no server sync was identified in the inspected page source.
- The other 9 inspected pages showed no direct GA4/AdSense/CMP, fetch/XHR, browser-storage or device-permission marker in this bounded scan.
- No CMP/TCF API marker found in this batch.
- No explicit QR-generation API, file upload endpoint or third-party data-processing request identified in the Phone Number QR Code Generator and Print Document Image Resizer page sources.

### Limits / next
- 31 root HTML files remain unreviewed in the branch tree after this batch.
- Continue remaining page inventory; include local browser history/storage as a separate data category from external processing.
- Live runtime/network/cookie/consent tests remain NOT RUN.

## 22. Root-page inventory batch 08 — image resize, GST and social QR pages (2026-11-15)

Scope: complete raw source fetched for 12 additional pages: `qr-choice.html`, `remove-gst-from-total-calculator.html`, `repeated-percentage-change-calculator.html`, `resize-image-by-percentage.html`, `resize-image-for-website.html`, `resize-image-to-pixels.html`, `reverse-percentage-calculator.html`, `rupees-in-words.html`, `sms-qr-code-generator.html`, `social-media-image-resizer.html`, `social-qr-maker.html`, and `successive-percentage-change-calculator.html`.

### Findings (source verified)
- No direct GA4/AdSense/CMP, fetch/XHR, browser-storage or device-permission marker was found in the 12 inspected pages in this bounded source scan.
- Social QR Maker contains URL templates/links for social destinations including Instagram, Facebook, YouTube, TikTok, Telegram and WhatsApp. These are QR payload destinations/user-selected links, not evidence of server-side API calls or automatic transmission to those platforms.
- The sampled image-resize pages showed no explicit upload endpoint or FormData/network request in their page sources; this supports a browser-side processing indication at page level, subject to runtime verification.
- No CMP/TCF marker found.

### Limits / next
- 19 root HTML files remain unreviewed in the branch tree after this batch.
- Continue final root-page batches and then consolidate page-to-vendor, GA4 and browser-storage matrices.
- Live runtime/network/cookie/consent tests remain NOT RUN.

## 23. Root-page inventory batch 09 — time, text, QR and voter services (2026-11-15)

Scope: complete raw source fetched for 12 additional pages: `target-marks-calculator.html`, `text-counter.html`, `text-qr-code-generator.html`, `time-calculator.html`, `tip-calculator.html`, `unit-converter.html`, `upi-payment-qr-code-generator.html`, `url-qr-code-generator.html`, `vcard-qr-code-generator.html`, `voter-id-card-print.html`, `what-happened-on-my-birthday.html`, and `what-percent-calculator.html`.

### Findings (source verified)
- GA4 measurement ID `G-P8D7XRGVEF` is present in Text Counter, Time Calculator, Tip Calculator and Unit Converter.
- Time Calculator stores up to 5 recent calculation records in localStorage key `ijElapsedTimeHistoryV1`; each record includes mode, result text and an ISO timestamp. A clear-history action removes the key. No server sync was identified in the inspected page source.
- Voter ID Print Guide links users to the Election Commission of India Voters' Services Portal (`voters.eci.gov.in`) and internally to ID Card Print Studio. The guide source shows ordinary outbound navigation, not an InfoJano API upload.
- QR Choice, Text QR, UPI Payment QR, URL QR and vCard QR pages showed no direct GA4/AdSense/CMP, fetch/XHR, browser-storage or permission marker in the bounded scan. `https://.` in URL QR copy is an instructional placeholder, not a real host.
- Target Marks, Tip, Unit, What Happened on My Birthday and What Percent pages showed no direct network/storage/CMP marker in this scan; GA4 was independently observed on Tip and Unit pages as above.
- No CMP/TCF marker found in this batch.

### Limits / next
- 7 root HTML files remain unreviewed in the current branch tree after this batch.
- Complete the final root-page batch, then build the consolidated source-level inventory. Runtime consent and network verification remain separate and NOT RUN.

## 24. Root-page inventory batch 10 — final root pages and opt-in work-hours storage (2026-11-15)

Scope: complete raw source fetched for the final 7 root HTML pages: `whatsapp-qr-code-generator.html`, `wifi-qr-code-generator.html`, `word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html`, `words-to-number-converter.html`, and `work-hours-calculator.html`.

### Findings (source verified)
- `work-hours-calculator.html` has an explicit unchecked-by-default opt-in control, “Remember my entries on this device”. When enabled, it stores work-shift date, start/end times, unpaid break minutes, overtime threshold, hourly rate and currency in localStorage key `infojano_work_hours_entries_v1`. It includes Clear saved data and Reset actions; turning the remember option off removes the saved copy. Page copy states calculations run in the browser and entries are not uploaded. Static source inspection found localStorage use but no fetch/XHR/FormData upload route in this page.
- `word-to-jpg.html`, `word-to-pdf.html` and `word-to-png.html` are thin internal redirects to `word-converter.html` with a format query parameter; they do not independently process files or call an external service.
- WhatsApp QR and WiFi QR pages showed no direct external API/network, browser-storage, analytics/ads or CMP marker in the bounded scan. The generated QR content may include user-entered phone/message or WiFi network credentials; do not claim these values are sent to a server without evidence.
- Words to Number Converter showed no direct network/storage/CMP marker in this scan.
- No CMP/TCF marker found.

### Inventory completion status
- Root HTML file count on branch tree: 116.
- Root HTML pages with source inspection recorded across batches 02–10 and earlier selected batches: all 116 are now covered by a source-level marker review. This does not mean every embedded dependency or dynamic module has been deeply audited.
- D-001 can move from ROOT-PAGE SOURCE INVENTORY to CONSOLIDATION / DEPENDENCY AUDIT. Do not mark live/runtime/account configuration checks complete.

### Limits / next
- Source inspection is not browser network QA. Runtime tag injection, cookies, CMP/TCF signals, Consent Mode behavior and actual provider requests remain UNVERIFIED.
- Shared scripts, CSS imports, worker modules, dynamic imports, PWA manifests and non-root nested HTML/resources still need dependency-aware review.
- Reconcile the Birthday Countdown notification copy mismatch, Work Hours opt-in storage disclosure, BMI/time/percentage history, Word Converter optional upload route, GA4 tag map, AdSense loader and all CDN/API hosts before editing the policy.

## 25. Nested resources, shared JavaScript, CSS and Worker audit — batch 11 (2026-11-15)

Scope: fetched complete source for 12 shared/worker JS files, 5 CSS files, 4 JSON/package files and one nested backup HTML file; additionally inspected Worker READMEs, D1 schema and Wrangler configs.

### Shared browser scripts
- `bmi-toolkit.js` stores up to 100 history entries containing date, weight, height and BMI in localStorage; a clear-history action removes the stored key.
- `site-header.js` stores language preference in localStorage key `infojano-language`.
- `word-converter.js` stores the configured HTTPS Worker base URL in localStorage; it loads JSZip/docx-preview/PDF.js from jsDelivr/cdnjs/unpkg fallback CDNs. The optional high-fidelity path constructs FormData with the selected DOCX and POSTs to the configured Worker `/convert` endpoint.
- `sw.js` uses Cache Storage and fetch handlers for same-origin PWA/offline caching. No third-party analytics or CMP integration was found in this file.
- `related-apps.js` contains GitHub release download URLs; no API call or visitor data upload found.
- `download-progress.js`, `image-resizer-advanced.js`, `install.js`, `number-to-words-locales.js` and `theme.js` showed no direct third-party request, analytics, consent or persistent browser storage marker in inspected source.

### Word Converter Worker — important external processing route
- `backend/word-converter/src/index.js` accepts a multipart DOCX upload, authenticates with an iLoveAPI bearer token, uploads to the iLoveAPI task server, starts Office-to-PDF processing, downloads the resulting PDF and returns it to the browser.
- `backend/word-converter/README.md` explicitly describes this as an optional third-party upload route; the page asks the user to tick a third-party upload consent box. It states the Worker does not persist document files and describes provider temporary retention/deletion; current provider terms/retention still require fresh verification.
- Source CORS allowlist constant is `https://barsulkhan.github.io`; README also documents that exact GitHub Pages origin. The custom-domain `https://infojano.com` binding/allowlist is not confirmed by source docs. Do not claim custom-domain availability or change Worker config/DNS without authorization.
- `backend/word-converter/wrangler.toml` enables Cloudflare observability. Actual deployed state and what telemetry is retained were not inspected.

### Short Link Worker scaffold
- `backend/shortlinks/README.md` explicitly labels the Cloudflare Worker + D1 project as an undeployed staging scaffold; no Cloudflare account/deployment state was inspected.
- Source requires `ADMIN_API_TOKEN` for link creation, stats and disable actions; anonymous link creation is disabled. It stores destination URL, code, creation/expiry/status and aggregate click count. Redirect handling records click date, referrer hostname and coarse device type (mobile/tablet/desktop), but does not store IP or full referrer URL in the shown schema/queries.
- D1 schema contains `links` and `daily_clicks` tables. This is repository-design evidence only, not evidence of a live production processor or live data collection.
- Wrangler config contains a D1 database identifier and GitHub Pages allowed origin; this is not a credential/secret. Actual account resource/deployment status remains unverified.

### CSS, package/config and backup page
- Five shared CSS files were inspected; no remote CSS `@import` or external `url()` resource was identified in this sample.
- Four package/manifest JSON files inspected; no external endpoint or visitor data processing identified.
- Nested backup `backups/InfoJano-Ayushman-VoterID-FINAL-LOCKED-2026-10-19.html` is a backup artifact, not a root production page. It loads PDF.js and jsPDF from cdnjs and uses browser object URLs/canvas for uploaded images. Its copy says browser-side processing and no intentional InfoJano upload; this is historical backup evidence, not proof of current live page behavior.

### Limits / next
- This batch covers shared JS, selected CSS/config and Worker source/docs, but not every dynamic import, all 30 PWA manifests, live Cloudflare account state or actual network traces.
- Next: inspect PWA manifests and remaining non-root resource tree; build a consolidated matrix separating live-root-source observations, optional third-party routes, undeployed scaffolds and unknown production configuration.
- No CMP/TCF live test, cookies inspection, provider contract review, Cloudflare dashboard check or production request capture was performed.

## 26. Consolidated repository source inventory — root pages, PWA manifests and libraries (2026-11-15)

### 26.1 Coverage and confidence
- Recursive branch tree contains 300 files, including 116 root HTML pages and one nested backup HTML artifact.
- Source-marker review completed for all 116 root HTML pages. This is a complete root-page static inventory pass, not exhaustive semantic review of every line, runtime network QA or legal verification.
- Inspected all 14 root JavaScript files (including `jspdf.umd.min.js` and `qr-code-generator.min.js`), all 5 root CSS files, 4 root/package JSON files and all 29 app-specific `.webmanifest` files plus root `manifest.json`.
- Inspected both Worker source files, both Worker READMEs/configs, the shortlinks D1 schema, and the nested historical ID-card backup page.
- PWA manifests use same-origin relative or `/InfoJano/` start URLs/scopes and local SVG/PNG icons. Countdown Studio uses relative `../` start URL/scope. No external manifest icon or third-party start URL was found.

### 26.2 Explicit GA4 source map
The GA4 measurement ID `G-P8D7XRGVEF` is explicitly present in these 24 inspected root pages:

1. `index.html`
2. `qr-maker.html`
3. `age.html`
4. `image-compressor.html`
5. `image-resizer.html`
6. `image-to-pdf.html`
7. `emi.html`
8. `loan-eligibility.html`
9. `loan-interest.html`
10. `savings.html`
11. `bmi.html`
12. `password-generator.html`
13. `date-difference.html`
14. `discount-pt-br.html`
15. `discount.html`
16. `gst-calculator.html`
17. `number-to-words.html`
18. `percentage-change.html`
19. `percentage-pt-br.html`
20. `percentage.html`
21. `text-counter.html`
22. `time-calculator.html`
23. `tip-calculator.html`
24. `unit-converter.html`

This is the exact positive source-marker list found in the 116-page scan. It does not prove runtime firing, consent gating, event payloads or account-side injection. No GA4 tag was found in the other 92 root HTML source files in this scan.

### 26.3 AdSense and CMP source map
- Explicit AdSense loader found in homepage `index.html`: `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` with publisher client `ca-pub-2908196513377151`.
- No explicit AdSense loader/adsbygoogle/Google ad network marker found in the other root HTML pages during this source scan.
- No Funding Choices / Google Privacy & Messaging / `__tcfapi` / `googlefc` marker found in the 116 root HTML pages or inspected shared JavaScript.
- This does NOT prove the live site lacks an account-side CMP, injected tags, consent-mode signals or dynamically delivered vendor scripts. Live browser/runtime and Google account inspection are still required.

### 26.4 Feature-specific APIs and external service routes
| Feature/page | Source-observed destination | Data or operation | Status / caveat |
|---|---|---|---|
| Countdown Studio | Google YouTube Data API v3 | Visitor-entered channel lookup and API key; requests channel snippet/statistics; periodic refresh while connected | Source verified; actual provider retention not checked |
| Currency Converter | open.er-api.com; api.frankfurter.dev | Base currency and historical currency-pair/range query | Source verified; provider retention unknown |
| Age Calculator | ipapi.co; Wikipedia On This Day API; Wikidata SPARQL | IP-based geolocation lookup; public event/entity lookup | Source verified; provider retention unknown |
| Word Converter optional high-fidelity route | InfoJano Worker then iLoveAPI | DOCX multipart upload, Office-to-PDF task, result download | Explicit opt-in in UI; Worker source/docs verified; production binding, provider terms and actual retention need confirmation |
| QR Scanner | Browser camera API + ZXing CDN | Camera frames decoded in browser; decoded value handed to QR Maker via sessionStorage | Source suggests local decode; live network verification not run |
| ID Card Print Studio | cdnjs PDF.js; local jsPDF | Browser-side PDF/image processing and export | Source/page copy says no intentional InfoJano upload; runtime not tested |
| Currency flags | FlagCDN | Remote flag images | Source verified |
| Fonts | Google Fonts | Inter font resource on selected date/business-day pages and Document Studio | Source verified; provider retention unknown |
| Libraries | jsDelivr, cdnjs, unpkg | JSZip, docx-preview, PDF.js, ZXing and other client libraries | Source verified; browser requests expose normal connection metadata to CDN operators |
| Official document portals | UIDAI myAadhaar, PM-JAY Beneficiary Portal, WB Food & Supplies, ECI Voters' Services | User-initiated outbound navigation from guide pages | Not an observed InfoJano API or automatic data upload |

### 26.5 Browser storage map
| Key / feature | Stored data | Control / behavior |
|---|---|---|
| `ij-countdown-studio-v1` | Countdown name, date/time/timezone, message/theme, optional media URLs and event settings | Saved on device; source has load/save behavior |
| `infojano-qr-prefill` (sessionStorage) | Scanned QR text passed from QR Scanner to QR Maker | Consumed/removed when QR Maker reads it |
| Word Converter Worker URL | Configured HTTPS Worker base URL | Stored in localStorage; clear/remove behavior exists |
| Age Calculator reminder | Birthday month/day and leap-day rule; per-day reminder marker | Stored locally; notification behavior is on-page and permission-dependent in Age Calculator source |
| BMI toolkit | Up to 100 date/weight/height/BMI history records | Clear-history action exists |
| `infojano-language` | Selected interface language | Persists language preference |
| `ijPercentageHistory` | Up to 8 percentage-calculation history entries | Clear-history action exists |
| `ijElapsedTimeHistoryV1` | Up to 5 time-calculation history entries with mode/result text/timestamp | Clear-history action exists |
| `infojano_work_hours_entries_v1` | Shift dates/start/end/break minutes, overtime threshold, hourly rate and currency | Only saved after user enables “Remember my entries on this device”; opt-out, clear and reset remove saved data |

### 26.6 Specific source/content mismatches to reconcile
- Birthday Countdown Calculator describes browser notifications, but its inspected source contains no Notification API, permission request or local reminder storage. Do not state the feature is operational without resolving this discrepancy.
- AdSense/GA4 tags are not shown as gated by an explicit CMP API in inspected source. Actual Google CMP/Consent Mode account-side behavior is unknown.
- Word Converter README documents a GitHub Pages origin allowlist; InfoJano custom-domain Worker configuration is unconfirmed.
- Short Link Worker is a repository-documented undeployed staging scaffold. Do not include it as a live data processor unless deployment is confirmed.
- Work Hours, BMI, Time and Percentage local history behavior must be accurately disclosed as browser storage; Work Hours is opt-in.

### 26.7 Next phase
1. Inspect remaining non-root resource categories (PWA manifests are now complete; review relevant app icons/assets only if they embed remote resources).
2. Inspect desktop/Android app shells and workflows to determine whether they are separate distribution surfaces or share the same web privacy disclosures.
3. Compare the source-level matrices above against the actual `privacy-policy.html` draft, marking each item accurate/missing/uncertain; do not edit policy until user-approved scope and publisher legal facts are confirmed.
4. Perform live runtime tests only in an available browser/account context: GA4/AdSense requests, cookies, CMP UI, `__tcfapi`, TC string, reject/manage/revoke, network destinations and Worker endpoint behavior.
5. Keep source evidence, runtime evidence, provider-contract facts and publisher legal declarations as separate evidence classes.

## 27. Android and Windows desktop wrapper source audit (2026-11-15)

Scope: inspected Android `MainActivity.java`, `AndroidManifest.xml`, Gradle configuration, and Windows desktop Electron `main.cjs`, `preload.cjs`, package/config and READMEs for the general portal and dedicated Countdown Studio wrapper.

### Android WebView app
- `AndroidManifest.xml` declares INTERNET permission and `usesCleartextTraffic=false`; no camera, contacts, location, microphone or notification permission is declared in this manifest.
- `MainActivity.java` loads the configured hosted website in a WebView, enables JavaScript and DOM storage, exposes an `AndroidBridge` JavaScript interface for saving generated files into Android Downloads, and supports user-selected file uploads via the system file chooser.
- The native bridge writes supplied base64 bytes into Android MediaStore Downloads; this is local file export, not a server upload.
- The Android build default tool URL is the GitHub Pages Age Calculator URL; actual release/build property overrides and runtime URL were not verified here.
- WebView is configured with a basic WebViewClient and no explicit origin allowlist in the inspected MainActivity. This is a security review item because the JavaScript bridge is exposed to the loaded page; do not change it in this privacy research task without approval.

### Windows desktop wrappers
- General Electron wrapper loads `https://barsulkhan.github.io/InfoJano/`; dedicated Countdown Studio wrapper loads `https://infojano.com/countdown-studio.html`. Both require internet and load the hosted web app rather than bundling it.
- Both wrappers set `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true`; external links/new windows are opened through the system browser, and in-app navigation is restricted to the trusted site origin/path.
- `preload.cjs` exposes only a static platform label via contextBridge. No analytics SDK, cookie handling, direct external API or user-data upload was found in the inspected desktop wrapper source.
- The desktop READMEs describe build/distribution mechanics; no additional personal-data collection was documented in those files.

### Privacy interpretation / limits
- These native shells inherit the web page's own analytics, AdSense, CMP, API, CDN and storage behavior when they load the hosted site; this source review does not test those requests inside Android WebView or Electron.
- File chooser access is user initiated. Local Downloads export and user-selected local file input should be distinguished from network upload.
- No Android runtime permission dialog, WebView network trace, Electron cookie/storage inspection, native build install test or app-store policy review was performed.
- Confirm whether Android and desktop apps are publicly distributed and whether privacy policy should explicitly include them as separate surfaces; do not infer release status from source alone.

## 28. Privacy Policy draft reconciliation and current official-source verification (2026-11-15)

### 28.1 Current draft reviewed
- Read the complete `privacy-policy.html` on this branch. It already covers GA4, Google AdSense, Google Privacy & Messaging, YouTube Data API/Privacy Enhanced Mode, ipapi, ExchangeRate-API/Frankfurter, Wikimedia, optional Word Converter Worker/iLoveAPI, public CDNs/fonts, local processing, Work Hours, BMI, Age reminders, Countdown Studio, QR Scanner, contact and generic rights/retention.
- Draft is explicitly provisional and says the source inventory/live behavior is not fully verified. Do not publish or claim legal completeness yet.

### 28.2 Source-to-policy reconciliation matrix
| Topic | Draft status | Repository evidence / gap | Required follow-up |
|---|---|---|---|
| Controller identity and jurisdiction | MISSING | Draft identifies only InfoJano/domain; no confirmed legal person/entity, establishment or jurisdiction | Publisher must supply exact legal identity and relevant jurisdiction; do not infer |
| GA4 | PARTIAL / ACCURATE BUT UNSPECIFIC | Exact source-marker list is 24 root pages in §26.2; draft says “multiple pages” only. Runtime firing/consent status unknown | Add exact feature/page scope only after deciding how detailed the public notice should be; run browser tag/consent test |
| AdSense | PARTIAL | Homepage source has explicit AdSense loader/publisher ID; other root pages did not show explicit loader. Account review status is still “Getting your site ready to show ads” in prior user-supplied evidence | Distinguish configured tag from ads actually being served; check account status and live network requests |
| Google CMP / revocation | MATERIAL GAP / LIVE UNVERIFIED | Draft says “if displayed” and that live visibility is being checked. User's prior live footer check found no revocation link; root source has no explicit CMP API. Account/editor evidence previously showed Google CMP 300 and a published European message | Verify live CMP injection and `googlefc` API. Google says EEA/UK/Switzerland consent revocation must be available; label should be “Privacy and cookie settings”. Google says AdSense automatically adds the revocation link only on approved sites containing AdSense code, which may explain absence while site review is pending; do not treat that as proof the live site complies. |
| TCF v2.4 | NOT IN DRAFT / LIVE UNKNOWN | Source has no explicit TCF/CMP API marker; IAB Europe confirmed web disclosure implementation deadline 23 Oct 2026 (already passed as of this audit), mobile app/CTV deadline 23 Feb 2027 | Capture live `__tcfapi`, CMP status, TC string and v2.4 disclosures; test reject/manage/revoke. For native app surface, determine applicable app implementation separately |
| Local storage | PARTIAL | Draft mentions language, Work Hours, BMI, birthday and Worker URL but omits Countdown Studio saved event config, QR sessionStorage handoff, Percentage history, Time history, and the exact fields/opt-in controls for Work Hours | Expand examples accurately; distinguish localStorage vs sessionStorage and optional vs automatic behavior |
| Birthday Countdown | CONTENT MISMATCH | `birthday-countdown-calculator.html` says notifications may be enabled, but source has no Notification API, permission request or reminder storage | Correct the feature copy or implement later only with approval; do not disclose as active notification collection/functionality |
| YouTube Data API | PARTIAL | Draft says visitor supplies channel reference and API key; source sends both in request to Google API, with key in query string, and refreshes every 60 seconds while connected | Clarify that the visitor-entered API key and channel lookup are sent to Google; verify embed behavior and consent/runtime requests |
| Currency APIs | PARTIAL | Draft names ExchangeRate-API and Frankfurter; source also exposes base currency and historical pair/range in request URLs | Explain request parameters at an appropriate level; provider retention remains unknown |
| Age / location | PARTIAL | Draft names ipapi; source also calls Wikipedia and Wikidata for public event facts | Name the Wikipedia/Wikidata requests in the feature disclosure; explain IP-based location lookup without claiming exact location |
| CDN/fonts/assets | MOSTLY COVERED | Draft lists cdnjs/jsDelivr/unpkg/Google Fonts/FlagCDN; selected pages also load ZXing/PDF.js/JSZip/docx-preview and other libraries | Reconcile exact provider list against dynamic fallbacks; no need to list every library version in policy |
| Word Converter / iLoveAPI | PARTIAL / RETENTION CONFLICT | Draft says API files deleted within 48 hours. iLoveAPI API-specific terms state maximum 48 hours, while general terms and security/API documentation also state 2 hours. Their terms say specific service terms prevail over general terms; public pages remain inconsistent. Worker README says it does not persist files. | Keep the more conservative API-specific maximum only if the publisher confirms the contract applies to this project; request written clarification from iLoveAPI. Confirm Worker deployment, origin allowlist, logs/observability and provider account configuration |
| Native Android / Windows apps | NOT COVERED | Android WebView and Electron wrappers exist in repo and inherit hosted web behavior. Public distribution status not verified. Google privacy disclosures apply across web/app surfaces | Confirm whether apps are distributed and which URLs/builds are live; if public, include app surfaces and native file chooser/download behavior |
| Short Link Worker | CORRECTLY EXCLUDED FOR NOW | Repo README describes undeployed staging scaffold; no Cloudflare deployment/account evidence | Keep out of live-provider list until deployment is independently confirmed |
| Retention / legal rights | PARTIAL / GENERIC | Draft correctly avoids invented universal retention; publisher jurisdiction, controller, provider account retention and local data lifecycle remain incomplete | Obtain publisher facts and runtime/provider evidence; do not invent legal bases or retention periods |
| Contact email | SUPPLIED / UNVERIFIED | Draft uses `infojanowebsite@gmail.com`; deliverability and publisher ownership not independently verified | Publisher confirms email is monitored and suitable for privacy requests |

### 28.3 Current official-source research
- Google Publisher Policies require a privacy policy to disclose data collection, sharing and use caused by Google products, including cookies, web beacons, IP addresses and other identifiers; disclosure applies across web/app and other platform surfaces. Source: https://support.google.com/publisherpolicies/answer/10437794
- Google AdSense required-content guidance calls for disclosure of third-party vendors/cookies and links to opt-out choices. Source: https://support.google.com/adsense/answer/1348695
- Google Privacy & Messaging guidance says EEA/UK users must be able to revoke prior choices, with a link titled “Privacy and cookie settings”; Google notes the link is automatically added by AdSense only on approved sites that contain AdSense code. Sources: https://support.google.com/adsense/answer/14852903 and https://support.google.com/admanager/answer/10114217
- IAB Europe 16 July 2026 notice confirms TCF v2.4 web disclosure deadline 23 October 2026 and mobile app/CTV deadline 23 February 2027. Source: https://iabeurope.eu/wp-content/uploads/TCF_V-CMP_comms_TCFpoliciesV5.0.bAndSpecificationsV2.4ConfirmationOf-theTimeline_160726_IABEurope.pdf
- iLoveAPI public terms/API-specific clauses and security page do not present a single consistent retention statement: API-specific terms say maximum 48 hours; general terms, API docs and security page say 2 hours. Sources: https://www.iloveapi.com/terms ; https://www.iloveapi.com/docs/api-reference ; https://www.iloveapi.com/legal/security

### 28.4 Decision / current status
- Privacy Policy draft is a useful provisional baseline, not final. Most feature integrations are represented, but storage examples and exact GA4 scope need reconciliation; controller/jurisdiction are blocked on publisher input; runtime CMP/TCF and ad-vendor configuration remain unverified.
- Do not edit `privacy-policy.html`, add/remove CMP tags, change ad settings, add revocation code, change Worker config, merge PR #236 or deploy until the proposed changes and legal facts are reviewed and the user explicitly authorizes implementation.
- Next research phase: verify non-root asset/app distribution and source dependencies; prepare a line-by-line proposed policy change list (without applying it); identify exactly which facts need publisher confirmation and which need browser/account evidence.

## 29. Robots, ads.txt and sitemap source audit (2026-11-15)

### Source files inspected
- `robots.txt`: `User-agent: *`, `Allow: /`, and sitemap reference `https://infojano.com/sitemap.xml`.
- `ads.txt`: exact seller line `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`.
- `sitemap.xml`: 107 InfoJano URLs.
- `sitemap-infojano.xml`: 105 URLs.
- `sitemap.txt`: 105 URLs.

### Findings
- `robots.txt` source does not block crawling and points to `sitemap.xml`; source text alone does not prove the live robots response is reachable or interpreted as intended.
- `ads.txt` source line exactly matches the previously user-verified live response body and homepage AdSense publisher client ID. HTTP status, content type, redirect behavior, robots access and AdSense crawler dashboard status remain unverified.
- `sitemap.xml` contains two URLs absent from both `sitemap-infojano.xml` and `sitemap.txt`: `work-hours-calculator.html` and `elapsed-time-calculator-guide.html`. The older sitemap files otherwise match the 107 URLs in `sitemap.xml`.
- Nine root HTML files are not listed in `sitemap.xml`: `404.html`, `contact.html`, `countdown-studio.html`, `google4a4795e5c7c03eae.html`, `index.html`, `privacy-policy.html`, `word-to-jpg.html`, `word-to-pdf.html`, and `word-to-png.html`. Some are likely intentionally excluded (404, verification, redirect aliases, duplicate index); Contact/Privacy Policy and Countdown Studio exclusion should be checked against indexing strategy, but omission from a sitemap is not by itself a privacy-policy violation.
- Live direct fetch attempts for `https://infojano.com/ads.txt`, `/robots.txt`, and `/privacy-policy.html` were inaccessible through the current web retrieval path. No HTTP status or live body is claimed from this attempt.

### Next actions / constraints
1. When a suitable live HTTP/browser environment is available, verify ads.txt HTTP 200, content type, redirects, HTTP/HTTPS coverage, robots accessibility and AdSense crawler status.
2. Confirm which sitemap file is canonical and whether `sitemap-infojano.xml` / `sitemap.txt` are still submitted or referenced anywhere; do not edit without approval.
3. Decide whether Privacy Policy, Contact and Countdown Studio should be listed in the canonical sitemap; do not infer solely from omission.
4. No robots, ads.txt, sitemap, DNS, production or deployment changes were made.

## 30. Public Android and Windows release verification; policy-scope update (2026-11-15)

### Release evidence retrieved from GitHub
- Android release tag `infojano-tool-apps-v1.1.1` exists, is not a draft and is marked prerelease. GitHub release metadata reports 23 downloadable APK assets, including Age, BMI, Currency, Date Difference, Discount, EMI, GST, ID Card Print Studio, image tools, Loan, Number-to-Words, Password, Percentage, QR Maker, Savings, Text, Time, Tip and Unit Converter. Published 2026-10-24.
- Windows release tag `infojano-desktop-apps-v1.0.0` exists, is not a draft and is marked prerelease. GitHub release metadata reports 23 downloadable Windows EXE assets, including 21/22 individual tool installers plus combined setup/portable packages (asset list is preserved by GitHub release metadata). Published 2026-10-25.
- Therefore, Android and Windows desktop wrappers are publicly downloadable GitHub prereleases, not merely unbuilt repository scaffolds. This supersedes the earlier “distribution status unverified” note in §27.
- The dedicated Countdown Studio desktop workflow is branch-only and uploads a 30-day artifact; it explicitly does not publish a public release. Do not conflate it with the general Windows desktop release.

### Privacy scope consequence
- Google publisher privacy-disclosure requirements expressly apply to web, app and other platform surfaces. Because the native shells load hosted InfoJano pages, their use can trigger the same GA4, AdSense, CMP, API, CDN and browser-storage behavior documented in §26.
- The public Android app also enables WebView DOM storage and exposes a local Downloads export bridge; Windows apps load the hosted portal/tool and route external links to the system browser.
- The Privacy Policy should explicitly identify the downloadable Android and Windows app wrappers as additional access surfaces and explain that they load hosted website functionality and require internet access. Native file chooser/local Downloads export should be distinguished from server upload.
- This does not establish that ads/analytics actually fire inside every app; native WebView/Electron runtime network/cookie/CMP tests remain required.

### Proposed policy change list — research only, not implemented
1. Add an “Apps and desktop software” paragraph: public Android APK and Windows desktop wrappers; they load hosted InfoJano tools, require internet, and inherit relevant website processing; local file chooser/download behavior for Android where appropriate.
2. Expand local storage examples: Countdown Studio saved event configuration; QR scanner-to-maker sessionStorage; Percentage and Time histories; Work Hours opt-in timesheet fields; BMI history; Age reminder; language preference; Worker URL.
3. Clarify feature-specific requests: YouTube channel lookup/API key to Google; Currency Converter base/historical requests; Age Calculator IP-based location lookup and Wikipedia/Wikidata; optional Word Converter DOCX upload to Worker/iLoveAPI.
4. Replace Birthday Countdown notification claim with accurate feature behavior after product owner chooses whether to change copy or implement the feature. No code change is authorized in this task.
5. Clarify that the optional Word Converter route is not confirmed available on `infojano.com`; confirm Worker deployment/origin allowlist before making any public availability claim.
6. Keep iLoveAPI retention language conditional and provider-confirmed: current API-specific terms state up to 48h while general/security/docs pages state 2h. Obtain written confirmation for the publisher's actual API plan/project.
7. Clarify AdSense/CMP status based on live approval and runtime evidence; do not promise a visible revocation link until a working “Privacy and cookie settings” route is tested.
8. Add controller legal identity/jurisdiction and contact confirmation only after publisher supplies/validates these facts.

### Evidence / limits
- GitHub release metadata is source evidence for publicly downloadable prerelease assets; it does not prove downloads, installations, active usage or app-store distribution.
- No app was downloaded/installed or run during this audit. No live Android WebView/Electron requests, cookies, consent dialogs or native storage behavior were inspected.
- No policy or app source was changed.

## 31. Proposed Privacy Policy revision map and approval gates (2026-11-15)

This is a research proposal only. `privacy-policy.html` remains unchanged.

| Existing section | Proposed revision | Evidence needed before final wording |
|---|---|---|
| Intro / controller | Add the legal publisher/controller name, business/contact address if required, establishment/jurisdiction and whether InfoJano is a trade name | Publisher-confirmed facts; never infer from domain, location or GitHub owner |
| 1. Information processed | Keep broad technical information description; explain GA4 is included on selected pages/features, not claim every page. Optionally summarize feature-specific request parameters in sections 4–5 | Live GA4 network test, event/parameter inspection, Consent Mode/CMP test |
| 2. Cookies/local storage | Add a concise, accurate storage table: countdown event config; language preference; Age birthday reminder; BMI history; Percentage and Time histories; Work Hours opt-in timesheet fields; Word Worker URL; QR sessionStorage handoff. Separate persistent localStorage from tab-session storage and opt-in from automatic storage | Recheck current source at final edit; browser storage test for each feature |
| 2–3. Advertising / consent | State only verified AdSense deployment scope and describe actual consent choices. Replace “if displayed” with a working tested “Privacy and cookie settings” mechanism when it exists; do not promise a revocation link that is absent | AdSense site approval/status, live page network, CMP message, `googlefc` API, regional consent/reject/manage/revoke test and actual selected vendor export |
| 4. Third-party services | Keep current provider list but specify the feature: YouTube API sends channel lookup and visitor API key; Currency API request includes base currency/pair; Age feature calls ipapi, Wikipedia and Wikidata; identify Google Fonts/FlagCDN/CDNs as resource hosts | Live request confirmation; provider privacy/retention documents; actual enabled feature flags |
| 4–5. Word Converter | Clearly distinguish browser preview route from optional high-fidelity upload route. State DOCX goes through InfoJano Worker to iLoveAPI only when enabled/consented; do not imply feature is currently available on custom domain until verified | Cloudflare Worker deployment, custom-domain CORS, rate limits, observability/log retention, iLoveAPI account plan and written retention confirmation |
| 5. Local tools | Add local storage and QR session handoff details; clarify Work Hours data is stored only after Remember option is enabled; avoid saying Birthday Countdown sends notifications until feature mismatch is resolved | Final source recheck and feature owner decision on notification copy/implementation |
| New section: Android & Windows apps | Disclose public GitHub prerelease Android APK and Windows desktop wrappers; apps load hosted pages and require internet, so web services/tags/storage may apply. Explain Android file chooser and local Downloads export | Release metadata confirmed; still test installed app network/cookies/consent and confirm distribution channels/usage/support contact |
| 6. Contact | Confirm monitored privacy-request email and whether any additional contact route/address should be disclosed | Publisher confirmation and deliverability test |
| 7. Retention | Keep browser-local retention “until cleared/removed”; do not invent Google/Cloudflare/CDN retention. For iLoveAPI, avoid a single numeric guarantee until API-specific written confirmation resolves public 2h/48h discrepancy | Provider account/contract and written answer; actual Cloudflare observability/log settings |
| 9–10. Children/rights | Tailor only after publisher jurisdiction is confirmed; do not add jurisdiction-specific legal bases/rights from assumptions | Legal review and publisher-confirmed jurisdiction |

### Implementation order after approval
1. Publisher confirms legal identity, jurisdiction, privacy contact email and whether public apps are intended for ongoing distribution.
2. Read-only Google account review: AdSense site approval, Privacy & Messaging published state, selected vendors, CMP configuration and any automatic revocation behavior.
3. Live browser QA on clean sessions and region-appropriate test locations: first view, accept, reject, manage, save, revoke; `__tcfapi`/TC string; GA4/AdSense requests and cookies. Do not use guessed geo/VPN as legal proof.
4. Verify optional Word Worker production binding, domain allowlist, rate limiting, observability and iLoveAPI retention terms.
5. Prepare complete proposed `privacy-policy.html` diff and show it to user. No edits until explicit approval.
6. After approval, implement only approved policy/CMP/source changes, run source checks and browser QA, then request separate approval for PR merge/deployment.

### Blockers still requiring user-side facts/evidence
- Exact publisher legal name/person/entity and jurisdiction.
- Confirmation that `infojanowebsite@gmail.com` is controlled and monitored for privacy requests.
- Google AdSense live approval status and selected vendor/CMP screenshots or accessible account view.
- Whether the Word Converter Worker is deployed for `infojano.com` and which iLoveAPI plan/terms apply.
- Whether the Android/Windows public prereleases are intended to remain distributed; GitHub release metadata proves availability, not actual installs/usage.
