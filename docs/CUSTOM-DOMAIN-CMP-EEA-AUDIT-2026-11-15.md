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
