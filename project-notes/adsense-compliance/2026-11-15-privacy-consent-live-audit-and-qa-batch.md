# Combined Privacy Consent, AdSense, Runtime and QA Batch

- Date: 2026-11-15
- Time: session timestamp; exact local clock was not available in the repository connection.
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: `feature/privacy-policy-adsense-compliance`

## 1. Consent revocation entry point — source change completed, live behavior pending

Google's official Privacy & Messaging API documents `googlefc.showRevocationMessage()` and the `CONSENT_API_READY` callback queue. It clears the saved EU consent record and shows the consent message again. Google identifies the visible link label as “Privacy and cookie settings”.

Implemented on the review branch:
- Added a hidden-by-default “Privacy and cookie settings” entry point in the homepage footer.
- It becomes visible only when Google's `CONSENT_API_READY` callback fires, or when the API is already present.
- Clicking calls `googlefc.showRevocationMessage()`.
- Added a Privacy Policy footer link directing visitors to the homepage consent entry point.
- This is not proof that the AdSense account has a published EEA/UK/Swiss message, or that the live API loads. Test with a clean browser profile and the official `?fc=alwaysshow&fctype=gdpr` preview on production after publication.

Official references:
- https://developers.google.com/funding-choices/fc-api-docs
- https://support.google.com/adsense/answer/14852903
- https://support.google.com/adsense/answer/12226986

## 2. AdSense vendor list and site approval — account-side evidence still required

Repository evidence:
- AdSense loader is present in homepage source with publisher client `ca-pub-2908196513377151`.
- `ads.txt` source line is `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`, matching the publisher ID in the source loader.
- `robots.txt` allows all crawlers and points to `https://infojano.com/sitemap.xml`.

Cannot inspect AdSense account's Privacy & Messaging > European regulations vendor settings, Sites approval status, ads.txt status, or Policy Center without the publisher account UI/screenshot. Do not infer account approval from repository files.

Google's current instructions: AdSense > Sites shows site approval and ads.txt status; Google says ads.txt must return HTTP 200, be crawlable under HTTP and HTTPS, not be blocked by robots.txt, and contain the exact publisher ID:
- https://support.google.com/adsense/answer/12170222
- https://support.google.com/adsense/answer/7679060
- https://support.google.com/adsense/answer/12171244

## 3. Live CMP/TCF, GA4/AdSense network and app runtime — blocked by environment/account access

Attempts to open these public URLs from the available inspection environment failed as inaccessible:
- https://infojano.com/
- https://infojano.com/privacy-policy.html
- https://infojano.com/ads.txt
- http://infojano.com/ads.txt
- https://infojano.com/robots.txt
- https://infojano.com/sitemap.xml

The local network test also failed DNS resolution. No HTTP status, redirect, headers, production HTML, runtime CMP, TCF string, GA4 request, ad request, or app WebView behavior is claimed. These require a functioning external browser/network and clean browser profiles in relevant geographies, plus Android/Windows device or emulator testing.

## 4. Word Converter Worker — source facts retained; production secrets/config not accessible

Prior repository source review found the optional DOCX flow from browser to InfoJano Worker to iLoveAPI, bearer-secret auth, and a GitHub Pages origin allowlist in Worker source. The production custom domain route/CORS, deployed Worker version, Cloudflare observability settings/log retention and account-specific iLoveAPI plan are not available from repository source alone. No Worker, secret, Cloudflare account or provider configuration was changed.

Required external evidence: Cloudflare Worker deployment/configuration view and written confirmation of the iLoveAPI API-plan retention term. Published provider materials previously reviewed conflict (API-specific maximum 48h vs general/security materials 2h); policy avoids a single guarantee.

## 5. HTML and local-link QA — source checks and CI workflow added

Added:
- `.github/workflows/privacy-policy-qa.yml`: pull-request/push/manual workflow that runs `html-validate` against `privacy-policy.html` and `index.html`, then runs the local link checker.
- `scripts/validate-privacy-policy-links.mjs`: checks every local href in the policy against repository files.

Manual repository-source checks completed after edits:
- Key HTML tags in privacy-policy.html have balanced opening/closing counts.
- No duplicate IDs in privacy-policy.html.
- All local href targets resolve to repository files (including `/infojano-mark.svg`, `/`, `/contact.html` and homepage consent anchor).
- Homepage contains the consent API ready callback and revocation method reference.
- Policy links back to the homepage consent entry point.

GitHub connector did not report any workflow runs or commit status checks for the latest branch head at the time of checking. Therefore the new hosted html-validate job has not yet been confirmed as passing. This manual structural check is not a substitute for full HTML5 validation, external-link checking, accessibility review or responsive browser QA.

## Change control

- Homepage footer revocation entry point and Policy footer link added to the feature branch.
- CI workflow and local-link checker added.
- No AdSense/CMP account settings, Cloudflare Worker settings/secrets, DNS, production deployment or PR merge changed.
- PR #236 remains draft and unmerged.
