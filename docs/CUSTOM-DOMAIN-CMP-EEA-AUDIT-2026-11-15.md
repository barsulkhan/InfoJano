# InfoJano — Custom Domain, AdSense CMP and EEA/TCF Audit

Audit date: 2026-11-15
Audit time: 17:02 +05:30
Repository: `barsulkhan/InfoJano`
Working branch: `audit/adsense-readiness-seo-cleanup-2026-11-15`
PR: #233 (draft; not merged or deployed)

## 1. Custom domain — source configuration
### Confirmed from repository
- Root `CNAME` file contains exactly `infojano.com`.
- Homepage canonical is `https://infojano.com/`.
- `robots.txt` points to `https://infojano.com/sitemap.xml`.
- `ads.txt` exists with `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`.
- Production source path migration in this PR resolves custom-domain assets from `/` and retains the old GitHub Pages project path `/InfoJano/` only for `barsulkhan.github.io`.
- Main PWA manifest uses relative `id`, `start_url`, `scope` and icon URLs; app manifests use relative paths.
- Service Worker derives its root from its own URL and cache version is `infojano-v312`.

### Not verified yet (requires live DNS / GitHub Pages admin access)
- Apex `infojano.com` A/AAAA or ALIAS/ANAME records currently published by the domain registrar.
- `www.infojano.com` CNAME currently points directly to `barsulkhan.github.io`.
- DNS propagation from independent public resolvers.
- GitHub Pages Settings > Custom domain and Enforce HTTPS state.
- Live certificate validity, HTTP -> HTTPS, www -> apex redirect, and real page response codes.
- Live robots.txt, sitemap.xml and ads.txt responses (web fetch did not reach the host during this audit).
- GitHub Pages source is inferred to be branch-based from the root CNAME file; GitHub Pages settings endpoint was not available through the connected repository API.

### GitHub Pages DNS checklist (compare against the registrar; do not overwrite unrelated mail records)
For apex `@`, GitHub documents these A records:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optional/recommended IPv6 AAAA records:
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

For `www`, use a CNAME directly to `barsulkhan.github.io` (not to the apex and not to `barsulkhan.github.io/InfoJano`). When both apex and www are configured correctly and apex is the repository custom domain, GitHub Pages can redirect www to apex. If a CAA record exists, confirm it allows Let's Encrypt (`letsencrypt.org`) for GitHub Pages certificate issuance. Avoid wildcard DNS records. Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 2. AdSense tag coverage
### Finding
- Before this pass, the standard AdSense loader was found only in `index.html` (`ca-pub-2908196513377151`).
- Google says Auto ads require one piece of AdSense code across all pages where ads are intended to appear. Google also says the site connection AdSense snippet should be placed on each page where ads are intended to show.
- The existing shared `site-header.js` and `install.js` are loaded by most tool pages. A guarded loader was added to both shared scripts; it checks for an existing AdSense tag before inserting the standard loader into the document head. The homepage's static tag is not duplicated.
- Twelve sitemap pages that did not load either shared helper received the static standard AdSense tag in `<head>`: social-qr-maker, days-between-dates-calculator, business-days-calculator, date-duration-calculator, number-to-words-indian, number-to-words-international, rupees-in-words, dollars-in-words, cheque-amount-in-words, hindi-number-to-words, work-hours-calculator, elapsed-time-calculator-guide.
- Four new policy/information pages are intentionally not wired to the AdSense loader; they are informational/legal destinations and should remain free of Auto Ads unless the publisher explicitly decides otherwise.
- This prepares monetizable tool pages to receive the AdSense/Google CMP bootstrap. It does not switch on Auto ads in the account, does not make ads live, and does not publish or activate a CMP message.
- Confirmed source tag publisher ID matches the existing `ads.txt` publisher record.

## 3. Google CMP and EEA/UK/Switzerland
### Verified official policy
- Google AdSense/Ad Manager/AdMob publishers serving personalized ads to EEA or UK users must use a Google-certified CMP integrated with IAB TCF (effective 16 Jan 2024); Switzerland has the requirement from 31 Jul 2024.
- Google Privacy & Messaging's European regulations messages are certified and integrate with TCF.
- Google's current documentation states Privacy & Messaging European regulations messages support IAB TCF v2.4. The IAB deadline for full TCF v2.4 implementation by publishers and CMPs was 23 Oct 2026; because this date has passed, the publisher should verify current CMP/TCF v2.4 compliance rather than treating the deadline as upcoming. Sources: https://support.google.com/adsense/answer/13554116 and https://support.google.com/adsense/answer/7670013.
- Google CMP ID is 300 (Google LLC) in IAB TCF.
- Google CMP UI is shown to visitors based on configured Privacy & Messaging messages, their region and consent state. The presence of a code tag alone does not prove a message is published or appearing.
- Google CMP / AdSense account configuration is an account-side task and cannot be done through repository changes.

Official sources:
- https://support.google.com/adsense/answer/13554116
- https://support.google.com/adsense/answer/7670013
- https://support.google.com/adsense/answer/12226986
- https://support.google.com/adsense/answer/16053245
- https://support.google.com/adsense/answer/16918505
- https://support.google.com/adsense/answer/9261805
- https://support.google.com/adsense/answer/12169212

### Recommended account-side setup
1. Sign in to the publisher's AdSense account.
2. Open Privacy & messaging > European regulations.
3. Create or manage a European regulations message for `infojano.com`; use Google's own CMP (not an unverified third-party CMP).
4. Use the three-choice layout where available: Consent, Do not consent, Manage options. Ensure users can make a meaningful refusal and granular choice; confirm language variants and all page/site scope.
5. Review the ad technology provider list and remove vendors not used/needed; ensure the message discloses the providers and purposes selected.
6. Confirm the Google CMP message is published and assigned to `infojano.com`.
7. In European regulations message settings, review consent mode for advertising and analytics. Enable only if appropriate to the site's actual Google Ads/GA4 use and privacy configuration.
8. Ensure the privacy policy URL is set to `https://infojano.com/privacy-policy.html`.
9. Test with an EEA/UK/Swiss network or approved preview: first visit should show the message; test Accept, Do not consent and Manage options; confirm consent state persists and can be reopened/changed.
10. Verify IAB TCF v2.4 consent string / CMP status with supported browser diagnostics and check AdSense Policy Center for any "Consent requirement: No CMP" warning.
11. Do not claim compliance or serve personalized ads until the account message is published, the correct site is scoped and end-to-end behavior is verified.

## 4. Remaining blockers
- DNS registrar read-only access or user-provided screenshots/records needed to verify apex A/AAAA, www CNAME, CAA and nameservers.
- GitHub Pages Settings access needed to confirm custom domain and Enforce HTTPS.
- AdSense account access is not connected. Publisher must configure Privacy & Messaging and provide screenshots (hide account/email/payment details) for review; never share passwords or 2FA codes.
- Browser/real EEA geolocation test and live domain HTTP response remain pending.
- No merge or deployment has occurred. Continue on draft PR #233 and obtain user approval before merge.


## Resume verification — 2026-11-15 17:17 +05:30
### Live custom-domain verification attempt
- Attempted direct web retrieval of `https://infojano.com/`, `https://www.infojano.com/`, `https://infojano.com/robots.txt`, and `https://infojano.com/ads.txt`. The web client returned internal inspection errors for all four. This is inconclusive and must not be described as DNS failure, HTTP failure or site downtime.
- Attempted public DNS lookup endpoints for A, AAAA, www CNAME and CAA and a third-party DNS checker page; those endpoints were not accessible through the available web client. No live DNS values or SSL certificate details were obtained.
- Current source-side records remain: CNAME `infojano.com`, homepage canonical `https://infojano.com/`, robots sitemap target `https://infojano.com/sitemap.xml`, ads.txt publisher record `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`.
- Required next evidence: read-only registrar records for apex and www, plus GitHub Settings > Pages showing custom domain and Enforce HTTPS. Preserve existing MX, TXT, SPF, DKIM, DMARC and verification records; do not replace the DNS zone wholesale.

### CMP and EEA/UK/Switzerland implementation checklist refined
- Google AdSense Help confirms a Google-certified CMP integrated with IAB TCF is required for personalized ads to EEA/UK users (from 16 Jan 2024) and Switzerland (from 31 Jul 2024). Google Privacy & Messaging European regulations messages are certified and support TCF v2.4.
- Google Help describes a three-choice layout with `Do not consent`, `Consent`, and `Manage options`; users must also be able to revisit/revoke or change preferences. The message must be configured for the correct site(s), include the privacy policy URL and disclose the selected ad technology providers.
- Current official setup references:
  - https://support.google.com/adsense/answer/13554116
  - https://support.google.com/adsense/answer/10960768
  - https://support.google.com/adsense/answer/10961068
  - https://support.google.com/adsense/answer/11546682
  - https://support.google.com/adsense/answer/16053245
- The publisher should enable consent mode for advertising/analytics only after checking whether the site actually uses Google Ads and GA4 and confirming intended signal behavior. Google says consent mode settings are account-side and apply across configured European messages.
- Account-side actions remain NOT DONE: site selection, privacy URL assignment, provider/purpose selection, publish, Policy Center warning review and real EEA/UK/Swiss consent test. No AdSense account connector was available. Never ask the user to share passwords or 2FA codes.

### Source-side referrer and AdSense notes
- Sampled homepage, tool pages and shared helpers do not contain an explicit restrictive `no-referrer` policy or referrer meta tag. This does not verify the deployed HTTP `Referrer-Policy` response header or actual cross-origin referrer behavior. Google notes the referrer policy must permit sharing the Referrer header on cross-origin requests for message eligibility; verify in a real browser/network response.
- Source scan of the full 103-URL sitemap did not surface missing title, meta description, canonical or H1 fields. One duplicate-H1 issue in `savings.html` was corrected in the working branch. This is not live-rendered browser QA.


## Registrar DNS screenshot received — 2026-11-15
The user supplied a photo of the registrar's DNS Records tab. The screenshot visibly shows six custom records, each with a green active/status icon and TTL 30 min:

| Host | Type | Value visible in screenshot |
|---|---|---|
| Apex/root (host text truncated in UI) | A | `185.199.108.153` |
| Apex/root (host text truncated in UI) | A | `185.199.109.153` |
| Apex/root (host text truncated in UI) | A | `185.199.110.153` |
| Apex/root (host text truncated in UI) | A | `185.199.111.153` |
| `www` | CNAME | `barsulkhan.github.io` |
| Apex/root (host text truncated in UI) | TXT | Google site-verification token (full token intentionally not copied into this report) |

Assessment:
- The four apex A records match the standard GitHub Pages IPv4 endpoints; the www CNAME points to the repository owner's GitHub Pages hostname. This is a coherent GitHub Pages custom-domain DNS configuration.
- The screenshot shows all six records as enabled/active in the registrar UI. TTL is 30 minutes.
- No AAAA or CAA record is visible in this six-record screenshot; this does not prove that none exists in another record group/view or at the authoritative DNS.
- The host field is visually truncated for apex records, so the screenshot is consistent with (but does not conclusively show) the root host `@` / `infojano.com`. Confirm the expanded host value before changing anything.
- The TXT value is visibly a Google site-verification token; retain it. Do not edit/delete.
- DNSSEC and Personal Nameservers are separate tabs and were not shown. No registrar changes were made.

Still required to close domain verification:
1. GitHub repository Settings → Pages screenshot showing Custom domain = `infojano.com` and Enforce HTTPS enabled/available.
2. A registrar expanded-row or export view confirming the four A records and TXT record host is apex/root, and the CNAME host is exactly `www`.
3. Read-only confirmation of existing MX/TXT (SPF/DKIM/DMARC/email) records and nameservers; preserve them.
4. Live DNS/HTTPS/redirect checks from an external resolver/browser remain outstanding. The screenshot is evidence of the registrar configuration, not proof of public propagation or a valid live certificate.


## GitHub repository-side inspection — 2026-11-15
User asked that repository-side evidence be inspected directly rather than asking them to navigate GitHub for information available in the repository.

Read-only checks on the default `main` branch:
- `CNAME` file content is exactly `infojano.com`.
- `robots.txt` allows crawling and points to `https://infojano.com/sitemap.xml`.
- `ads.txt` contains the expected publisher line for pub-2908196513377151.
- Three sitemap variants are present in the root. The full URL-set consistency audit is separately recorded above.
- Main branch head at inspection: `9b069a536b3b5f5ed4afac19f3de0257475c58ab`; latest commit message is “Mark ID Card Print Studio finalized”.
- Main branch API metadata reports `protected: false` (no branch protection shown by this endpoint).
- Repository `.github/workflows` currently lists only five build workflows (age APK, countdown desktop, desktop app, desktop apps, tool APKs); no Pages deployment workflow file is present in this directory listing. This is consistent with GitHub Pages being configured through repository settings/branch publishing, but does not prove the selected Pages source.
- PR #233 remains open, draft, unmerged; latest branch contains the AdSense/domain/SEO proposal. No merge/deployment was performed.
- Attempted read of GitHub REST `GET /repos/barsulkhan/InfoJano/pages`; the connected GitHub read tool rejects this endpoint as outside its allowlist. Therefore Pages Settings values (custom domain, publishing source, Enforce HTTPS) cannot be read through this connection. This is an access limitation, not evidence that the settings are wrong.
- No repository files or settings were changed in this read-only inspection. No DNS records or AdSense account settings changed.

Required single manual GitHub UI evidence:
- Repository → Settings → Pages screenshot showing the Build and deployment source/branch-folder, Custom domain and Enforce HTTPS state. The user only needs to provide this one settings screenshot; do not ask them to repeat repository file checks already completed here.


## GitHub Pages Settings screenshot verified — 2026-11-15
User supplied the requested screenshot from repository Settings → Pages. Direct visual evidence:
- Site status: "Your site is live at https://infojano.com/".
- Publishing source: Deploy from a branch.
- Branch: `main`.
- Folder: `/(root)`.
- Custom domain field: `infojano.com`.
- GitHub displays "DNS check successful".
- Enforce HTTPS checkbox is visibly enabled.
- GitHub page reports the last deployment was to the `github-pages` environment by the Pages build and deployment workflow.

Assessment:
- GitHub Pages custom-domain and HTTPS configuration is VERIFIED from the screenshot. Together with the registrar DNS screenshot (four GitHub Pages A records and www CNAME), the configured DNS and GitHub Pages settings are coherent.
- The site is shown live and GitHub's DNS check is successful. This still does not independently verify every public resolver, www-to-apex redirect response, certificate chain from multiple networks, MX/email records, or live robots/ads.txt responses.
- No settings were changed. No PR merge or production deployment was initiated by this audit.
