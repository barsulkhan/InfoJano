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
