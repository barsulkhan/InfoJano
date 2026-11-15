# Privacy Policy Reconciliation and Validation

- Date: 2026-11-15
- Time label: 23:58 (task-log sequence; timezone not independently verified)
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: `feature/privacy-policy-adsense-compliance`

## Work completed

Updated `privacy-policy.html` on the review branch to reconcile it with the completed source inventory:
- Added Android/Windows hosted-wrapper scope to the introduction.
- Clarified GA4 source scope as 24 identified pages, without implying sitewide firing or known consent timing.
- Expanded browser-storage examples: Countdown Studio settings, QR session handoff, percentage and elapsed-time histories, BMI and Work Hours records.
- Corrected birthday/countdown notification language to distinguish the Age Calculator reminder preference from the Birthday Countdown page's unimplemented notification wording.
- Rewrote Word Converter disclosure to describe the optional DOCX transfer through the Worker to iLoveAPI and preserve the provider's conflicting 48-hour vs 2-hour public retention statements.
- Clarified that live CMP/revocation availability is not established by editor preview.
- Added Android WebView/file-save and Windows hosted-wrapper behavior from source review, explicitly distinguishing source review from device runtime tests.

## Validation performed

- Re-fetched the committed policy from the feature branch.
- Lightweight structural check: opening and closing tag counts balanced for html, head, body, main, p, h1, h2, ul, li, a, footer and strong.
- Confirmed doctype and exactly one title and canonical declaration.
- This is not a standards-complete HTML validator, link checker, accessibility audit, browser QA or live runtime test.
- Latest policy blob: `9402be62a85747534630205feb9248192ec68c35`.
- Policy content commit: `410df772673988da2b66c51a15fd54d4756097dd`.

## Live verification blockers

Direct public URL inspection of `https://infojano.com/privacy-policy.html`, `/ads.txt`, `http://infojano.com/ads.txt` and `/robots.txt` was inaccessible from the current inspection environment. Therefore no HTTP status, redirect, headers, production policy contents, CMP runtime or Google crawler access is claimed.

Google's current AdSense documentation says publishers should check site approval and ads.txt status in AdSense > Sites; “Getting ready” can take a few days and sometimes 2–4 weeks. Google says ads.txt should be reachable at the root domain with HTTP 200, be crawlable under HTTP and HTTPS, and not be blocked by robots.txt. Sources:
- https://support.google.com/adsense/answer/12170222
- https://support.google.com/adsense/answer/7679060
- https://support.google.com/adsense/answer/99376

The current feature-branch head has no PR-triggered workflow runs and no combined commit status checks reported by the GitHub connector. No automated validation result is available from CI.

## Still open

1. Production live CMP/revocation test and current TCF v2.4 signal.
2. Actual AdSense vendor list and AdSense Sites approval/ads.txt status from account UI.
3. HTTP/HTTPS status, redirects and Google crawler user-agent behavior for ads.txt.
4. GA4/AdSense network firing and consent timing in browser and Android/Windows app surfaces.
5. Production Worker route/CORS, observability/log retention and iLoveAPI account-specific retention terms.
6. Full HTML5 validation, internal/external link checks, accessibility checks and responsive browser/device QA.
7. Review whether the Privacy Policy URL is linked from all relevant consent message/app surfaces.

## Change control

- No production deployment, PR merge, AdSense/CMP setting, DNS, Worker config or sitemap change.
- PR #236 remains open, draft and unmerged.
