# Proposed Privacy Policy Revision Draft

- Date: 2026-11-15
- Time label: 23:42 (repository task-log convention; timezone not independently verified)
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: `feature/privacy-policy-adsense-compliance`
- Source reviewed: `privacy-policy.html` (current branch blob `fcd89ee43718ec765f37b8923acec1d9a81a8e21`)
- Status: proposal only; not applied to the policy or production site.

## Purpose

Turn the completed source inventory into precise, non-overstated policy edits. Keep legal identity, live CMP behavior, provider retention and runtime behavior explicitly unresolved until verified. This draft is not legal advice and does not establish AdSense approval.

## Proposed edits

### 1. Add platform/surface scope to the opening paragraph

Suggested replacement/addition:

> InfoJano is available through the infojano.com website and downloadable Android and Windows desktop wrapper applications. These applications load InfoJano web pages; when you use them, the web-page features and the relevant hosting, analytics, advertising, consent, embedded-content and third-party service requests described in this policy may also apply. The native application shells may provide platform-specific file selection or saving features. This notice describes the source-reviewed behavior; actual runtime behavior and account-side configuration may vary.

Do not claim that the apps have been installed or used by any particular person. Public prerelease assets establish availability only.

### 2. Make analytics scope exact

Suggested replacement for the broad GA4 sentence:

> The website source reviewed for this policy contains the Google Analytics 4 measurement ID G-P8D7XRGVEF on 24 identified pages. This source finding does not establish that every page fires an analytics request, that a request fires before or after consent, or that analytics is active in every app/session. Google Analytics may process page-view, interaction, device/browser and network information as described by Google.

The 24 source-positive pages are recorded in MASTER-RESEARCH-PLAN.md §26. Do not state that GA4 is installed sitewide.

### 3. Expand browser storage examples

Suggested addition to Section 2:

> Depending on the tool and your choices, browser storage may also contain Countdown Studio settings (such as a countdown name, target date/time, timezone, message, theme and optional media references); a temporary QR Scanner-to-QR Maker handoff in session storage; up to eight percentage-calculation history entries; up to five elapsed-time history entries; and saved BMI measurements/history. Work Hours Calculator entries are stored only after you enable its “Remember my entries on this device” option. The relevant tool may provide a clear, reset or opt-out control; otherwise you can clear site data through your browser. Avoid saving sensitive information on a shared device.

Keep the existing language preference, birthday reminder preferences and Word Converter endpoint examples. Confirm whether the birthday reminder item belongs to Age Calculator, not Birthday Countdown Calculator.

### 4. Correct notification wording

Replace the current bullet that implies Age Calculator notifications are requested whenever a reminder feature is enabled with:

> Age Calculator has a browser-local birthday reminder preference. The reviewed source did not establish a site-wide notification behavior for every birthday/countdown tool. Browser notification permission and delivery should be described only for the specific tool/version after live behavior is tested.

Source review found a mismatch: Birthday Countdown Calculator mentions notifications, but its inspected source did not contain the Notification API, a permission request or reminder storage. Do not imply that this page currently delivers notifications.

### 5. Clarify Word Converter external processing and retention

Suggested replacement for the Word Converter bullets in Sections 4 and 5:

> The optional high-fidelity Word conversion workflow, when available and after the visitor chooses the external-processing option, sends the selected DOCX file from the browser to an InfoJano-configured Cloudflare Worker, which is designed to forward it to iLoveAPI for conversion. The file is therefore processed outside the visitor's device by the Worker/provider. The custom-domain availability and production CORS configuration have not been confirmed in this source audit. iLoveAPI's published materials reviewed for this policy contain inconsistent file-retention statements (the API-specific terms state a maximum of 48 hours, while general terms/security materials state 2 hours). We are not making a single guaranteed retention-time claim here; check the provider's current API terms before using this feature. Do not submit confidential documents unless you accept the external processing and provider terms.

Do not state that InfoJano or the Worker never logs or retains data without reviewing deployed Worker settings, observability/log retention and provider account terms.

### 6. Add Android/Windows wrapper details

Suggested addition to Section 5:

> The Android wrapper uses a WebView to load the hosted website and supports system file selection and saving generated files to the device's Downloads area. The reviewed Android manifest did not declare camera, microphone, location, contacts or notification permissions; a web page may still request browser/WebView capabilities where supported. The Windows desktop wrapper loads hosted InfoJano pages and opens external links in the system browser. These descriptions are based on source review, not a device-level runtime test.

Keep camera behavior tied to the QR Scanner page and actual browser permission prompts. Do not imply native permission access not shown in the manifest.

### 7. Improve consent/revocation disclosure without claiming live success

Suggested replacement for the final paragraph of Section 3:

> In regions where consent is required, Google Privacy & Messaging may display a consent message and controls for reviewing or changing choices. Where applicable, the site should provide a clearly accessible “Privacy and cookie settings” control so that you can reopen the privacy choices. The presence, placement and operation of that control on the live website and in each app surface must be verified separately; an editor preview alone does not prove that the control is available to visitors. You can also use browser settings to block or clear cookies, although this may not replace a consent withdrawal mechanism and may affect site features.

Do not claim that the live revocation control is present until it is tested on the production site. Google’s current guidance identifies the label “Privacy and cookie settings”; EEA/UK/Switzerland revocation obligations and the live CMP/TCF v2.4 signal remain verification gates.

### 8. Controller identity and contact: publisher input required

Do not publish invented identity or jurisdiction. Before final policy publication, the publisher must provide:
- Legal name of the person/entity operating InfoJano (or the truthful trading-name/individual-operator description).
- Country and, where relevant, state/province of establishment.
- A monitored privacy contact address and confirmation that infojanowebsite@gmail.com is controlled and monitored by the publisher.
- Whether the operator is established in India and which other regions are actively targeted, if any.

Until supplied, mark controller identity and jurisdiction as an unresolved publication blocker in internal notes, not as a fabricated public statement.

### 9. Retention section

Keep the current no-fixed-retention statement for now. Add a provider-by-provider retention schedule only after confirming actual hosting logs, Cloudflare Worker observability/log retention, Google account settings and the exact iLoveAPI plan. Browser-local records should be described as remaining until cleared by the user, the feature or the browser, where that accurately matches each tool.

## Verification gates before publishing

1. Publisher confirms legal identity, establishment jurisdiction and privacy contact.
2. Test live production consent/revocation on a clean browser profile in relevant regions; verify the “Privacy and cookie settings” entry point, reopen flow, saved choice and current TCF v2.4 signal.
3. Export/check the live AdSense/Privacy & Messaging vendor configuration; reconcile the public disclosures with the actual vendor set.
4. Test GA4/AdSense requests and consent timing on representative pages and app surfaces; source markers alone are insufficient.
5. Confirm Worker production route, custom-domain CORS, logs/observability retention, iLoveAPI plan and written retention terms.
6. Run HTML validation, link checks and mobile/desktop browser QA after an approved edit.
7. Only then prepare the final policy HTML and request publisher approval before merge/deployment.

## Change control

- `privacy-policy.html` was read but not modified.
- No account/CMP/AdSense settings, Worker configuration, DNS, sitemap, release, merge or production deployment was changed.
- PR #236 remains open, draft and unmerged at the latest check.
