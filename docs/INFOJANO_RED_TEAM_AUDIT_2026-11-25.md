# InfoJano Red-Team Audit — 2026-11-25

Repository: https://github.com/barsulkhan/InfoJano  
Live site: https://infojano.com/  
Audit scope: source, open security PR, project handoff, available CI evidence, and a sample of public live pages.

## Scope protection

- **No application code was changed in this audit.**
- All application-code commits dated 2026-11-25 were excluded from modification, as requested. This includes the dual-host PWA migration and Password Generator / Related Apps follow-up.
- The audit report and Read Hub link are documentation-only updates.
- No PR was merged, no deployment was triggered, and no Google indexing request was submitted.

## Findings

### 1. Short Link security PR #1 — review required; do not merge/deploy

PR: https://github.com/barsulkhan/InfoJano/pull/1  
Branch: `security/shortlink-url-validation-tests`  
Head: `5d52ec54c5104abe19084f1b482f9c160c9f1735`  
State: OPEN, DRAFT, not merged.  
GitHub Actions run: https://github.com/barsulkhan/InfoJano/actions/runs/41401938946 — completed SUCCESS.

Evidence and review notes:
- Automated tests cover ordinary HTTP/HTTPS URLs, unsupported schemes, credentials, local hostnames, several non-public IPv4 ranges, unusual numeric IPv4 forms, selected special IPv6 ranges, and generated short-code length/alphabet.
- The workflow's test job passed on the current PR head.
- The IPv6 hostname bracket-removal expression in `validateDestination` is over-escaped: the current expression does not remove the square brackets from a URL hostname. The downstream `isPrivateDestination` function independently removes brackets, so this observation is **not established as an exploitable bypass**, but it is a correctness/maintainability defect and should be corrected before approval.
- Tests do not include a positive globally-routable IPv6 case, nor broad coverage of IPv6 special-purpose ranges. Add positive and negative boundary cases before calling the IP policy complete.
- The worker remains explicitly described as a staging scaffold; link creation requires `ADMIN_API_TOKEN`, and the default short-link base is the placeholder `https://short.example.invalid`. The public URL Toolkit page says genuine short links are not yet available.
- Existing Cloudflare preview comments show failed preview builds from 2026-11-02. The GitHub Actions test success does not establish that Cloudflare preview/deployment works.

Decision: keep PR #1 draft and staging-only. Correct the bracket handling, expand IPv6 boundary tests, review the full allow/deny policy and runtime configuration, and only then request review. Do not deploy this Worker as a public short-link service.

### 2. Current public-site sample

Public search crawl retrieved the following pages in the current review:
- Homepage: https://infojano.com/
- URL Toolkit: https://infojano.com/url-toolkit.html
- Password Generator: https://infojano.com/password-generator.html
- QR Maker: https://infojano.com/qr-maker.html
- Image to PDF: https://infojano.com/image-to-pdf.html
- Number to Words: https://infojano.com/number-to-words.html
- Work Hours Calculator: https://infojano.com/work-hours-calculator.html

This is evidence that these URLs are discoverable and render extractable page content to the search crawler. It is **not** a complete HTTP status sweep, interactive browser QA, mobile viewport test, or proof of Google indexing.

Positive content/security messaging observed:
- URL Toolkit clearly states its URL validator is not a malware scan and that short links need a real backend.
- Password Generator states credentials are generated locally and that strength feedback is heuristic rather than a full security audit.
- Image to PDF states file processing is local to the browser.

### 3. Search Console / technical SEO — known external work remains

The current Read Hub records the latest 25-Nov Search Console inspection:
- Six URLs are still unknown/discovered and require a manual Search Console review/request when appropriate: PDF to JPG, Google Maps Location QR, Percentage Decrease, Cheque Amount in Words, Word Converter, BMI Health Guide.
- Time Calculator remains Crawled — currently not indexed.
- Age-in-Days has a stale canonical observation; do not change its source canonical again without a fresh crawl.
- OpenSEO audit `e1cececa-21ec-4b89-a081-2203550d4b0e` crawled 50 pages; 77 of 127 discovered URLs were outside the crawl budget. The only reported issue was the page-limit warning. This is not a full-site clean audit.

The six manual Search Console requests are account-side actions and were not performed by this repository audit.

### 4. Deployment / PWA / Android verification

The existing handoff records successful Pages deployment for commit `c6d9549f5f82434a9ae5b085801f9df0aabe6bcf`, successful Password Generator browser QA, Global Footer QA, and APK workflow for the earlier 25-Nov checkpoint. Subsequent code commits on 25-Nov are protected from modification in this audit.

Still distinguish these separate states:
- GitHub Actions workflow success;
- deployment of the exact latest main SHA;
- live custom-domain HTTP behavior;
- real Android installation from each supported host;
- offline launch/fallback behavior.

The real Android install/offline verification remains pending in the current handoff. Verify the Pages workflow for the exact latest main HEAD before claiming that all later commits are deployed.

## Priority backlog

1. **P1 — PR #1 security review:** fix bracket-removal expression, add positive global IPv6 and boundary tests, inspect Cloudflare preview failure logs, keep draft/staging-only until review passes.
2. **P1 — Search Console:** manually review/request the six listed URLs; do not label them indexed until GSC confirms.
3. **P1 — Deployment:** verify the Pages workflow for the exact current main HEAD, then separately verify the custom-domain live response.
4. **P2 — Android PWA:** install from infojano.com and GitHub Pages on a real Android device; verify first online launch and offline reopen.
5. **P2 — Full technical audit:** the previous OpenSEO scan left 77 URLs uncrawled. Request/obtain an adequate crawl budget and audit the uncovered URLs; do not change robots.txt to bypass the limit.
6. **P2 — Query-level SEO prioritization:** use query-level GSC data for the BMI guides and high-impression Portuguese pages before changing metadata or creating more landing pages.

## Verification boundary

Completed in this audit:
- Latest commit history reviewed and 25-Nov application-code changes identified as protected.
- PR #1 current metadata, changed-file list, diff, test file, and workflow run reviewed.
- Public crawler sample of key live pages reviewed.
- Findings and next actions recorded here and linked from the master Read Hub.

Not performed:
- No application-code edits.
- No PR approval/merge.
- No Cloudflare deployment.
- No Search Console manual indexing requests.
- No real Android device test.
- No complete 127-URL crawl or interactive browser sweep.


## Follow-up execution — PR #1 security fixes

- Updated only the existing PR branch `security/shortlink-url-validation-tests`; no main-branch application files were changed.
- Corrected the IPv6 hostname bracket normalization in `validateDestination`.
- Tightened the IPv6 deny policy to conservatively reject the IETF special-purpose `2001::/23` range, in addition to documentation, 6to4, NAT64 translation, IPv4-mapped and local/non-global ranges.
- Added a positive test for a globally routable IPv6 destination and negative tests for `2001:20::/32` and `2001:100::/32` examples, alongside the existing special-range tests.
- Latest PR head: `262e8b86fb6c2a84f142f4f4d42265c8382ff218`.
- GitHub Actions run `45577870283` (Short Link Security Tests) completed; job `url-validation` and its `npm test` step both **SUCCESS**.
- PR remains OPEN / DRAFT / UNMERGED. This does not establish Cloudflare preview success, full Worker runtime security, or production readiness. No deployment was performed.


## Fresh Search Console re-check and query opportunities — 25 Nov 2026

Connected property: `sc-domain:infojano.com`. These are read-only inspection results; no Google indexing request was submitted.

### Fresh URL Inspection results
- Still **URL is unknown to Google**: `pdf-to-jpg.html`, `google-maps-location-qr-code-generator.html`, `percentage-decrease-calculator.html`, `cheque-amount-in-words.html`, `word-converter.html`, and `bmi-health-guide.html`.
- `time-calculator.html`: **Crawled — currently not indexed**; last crawl 2026-11-13; Google and declared canonical both `https://infojano.com/time-calculator.html`; fetched successfully; mobile crawl.
- `bmi-calculation-guide.html`: now **Submitted and indexed**; last crawl 2026-11-16; Google and declared canonical agree. This supersedes the earlier 25-Nov handoff state that had it pending.
- `bmi-weight-categories.html`: now **Submitted and indexed**; last crawl 2026-11-16; Google and declared canonical agree. This supersedes the earlier 25-Nov handoff state that had it pending.
- `age-in-days-calculator.html`: still **Crawled — currently not indexed**; last crawl 2026-11-11; Google canonical is `https://infojano.com/age-in-days-calculator.html`, but the stored declared canonical is the GitHub Pages URL. Leave source untouched pending a newer crawl/source check.

### Fresh GSC performance window
Window: 2026-08-22 to 2026-11-22; 67 page rows and 126 query/page rows. High-impression pages from the page report:
- `percentage-pt-br.html`: 2,053 impressions, 0 clicks, average position 9.2.
- `discount-pt-br.html`: 1,632 impressions, 1 click, average position 8.3.
- `bmi-calculation-guide.html`: 811 impressions, 0 clicks, average position 62.1 (now indexed, but low ranking).
- `bmi-weight-categories.html`: 412 impressions, 0 clicks, average position 58.7 (now indexed, but low ranking).
- `number-to-words.html`: 280 impressions, 1 click, average position 35.3.
- `upi-payment-qr-code-generator.html`: 274 impressions, 0 clicks, average position 45.9.
- `number-to-words-indian.html`: 180 impressions, 0 clicks, average position 24.6.
- `time-calculator.html`: 156 impressions, 1 click, average position 33.1.

The query/page report only returned eight rows at position 20 or better with at least five impressions. They include Bengali number-to-words terms (positions 4.4 and 9.2, 6–7 impressions), UPI terms (`generate upi id` position 11.1, `upi qr code` position 18.3), and Portuguese percentage calculations (`33% de 1741` / `35% de 1741`, positions 11.1 / 8.9). These query samples are small; treat them as direction, not proof of demand or guaranteed ranking.

### Practical SEO priority
1. Keep the six unknown URLs in the manual Search Console request queue; this tool only inspected status and cannot submit Google's indexing request.
2. Do not rewrite metadata based solely on the two Portuguese pages' zero/near-zero CTR; inspect the complete query set and search-result snippets before making content changes.
3. Improve BMI content usefulness and internal relevance based on the broad BMI calculation/category query cluster, but check file commit dates first and do not touch any application code changed on 25-Nov.
4. Avoid duplicate UPI landing pages; compare the dedicated UPI page and `qr-maker.html?type=upi` before changing canonicalization or internal links.


### Direct Search Console inspection links for the six pending URLs
- [PDF to JPG](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Ainfojano.com&id=Ue81vPU9cFckj91j_YPnZg)
- [Google Maps Location QR](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Ainfojano.com&id=tXihai7sg-ZQ2_U_oP5zLw)
- [Percentage Decrease Calculator](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Ainfojano.com&id=6qc6ef9B_KE9gqFkBHR6ng)
- [Cheque Amount in Words](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Ainfojano.com&id=GOREe5HHDHWodX0bMrxf0w)
- [Word Converter](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Ainfojano.com&id=IY5YW0izQRthcPAUf6VjHw)
- [BMI Health Guide](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Ainfojano.com&id=WIr2GilgIi0QNHH6sRieVQ)

These links open the existing URL Inspection record. The user must still use Search Console's manual indexing-request action where Google offers it; merely opening the record does not submit a request.


## Live website spot-check — 25 Nov 2026

Scope: read-only web-rendered checks of the public custom-domain site. This is not a full interactive browser test, and crawler/open errors are not treated as proof of an HTTP 404.

### Confirmed page rendering/content
- Homepage `https://infojano.com/` loads and presents the tool directory, popular tools, guide links, and utility navigation. The public render shows 24 popular tools and the Explore All Tools section.
- Password Generator loads and presents Random Password / Passphrase / PIN modes, length and character controls, bulk generation, copy/regenerate controls, and local-only generation messaging. The page copy says generated credentials are handled in-browser; an actual button-by-button security test was not run in this read-only pass.
- QR Maker loads and presents URL, Text, WiFi, Contact, Phone, WhatsApp, UPI, Email, SMS, Location and vCard modes, plus uploaded QR/barcode reading. Actual QR generation/scanning was not exercised.
- URL Toolkit loads and exposes eight browser-based utilities (UTM builder, cleaner, encoder/decoder, validator, parser, slug maker, query builder, QR). The page explicitly says real short links/click analytics are a later phase and not yet available on this static page. Do not market the current URL Toolkit as a live short-link service until the backend is deployed and verified.
- Time Calculator loads and shows Time Difference, Add/Subtract, Date+Time, break deduction, recent calculations, and share/copy controls. GSC still reports Crawled — currently not indexed.
- Google Maps Location QR landing page loads and explains coordinate-based Location mode. Search Console had marked its URL unknown to Google; this confirms that URL Inspection status and public page availability are different questions.

### Inconclusive checks / limits
- Web page open could not retrieve `pdf-to-jpg.html`, `percentage-decrease-calculator.html`, `cheque-amount-in-words.html`, `word-converter.html`, or `bmi-health-guide.html`. These files exist in the GitHub main tree, so this crawler/open-tool error is not sufficient evidence of a production 404. They need a real HTTP/browser check.
- Direct opens of `sitemap.xml`, `robots.txt`, `sw.js`, and `manifest.json` were not readable through the web viewer. GitHub main source confirms robots allows crawling and declares `https://infojano.com/sitemap.xml`; sitemap source contains 108 URLs. This is source inspection, not a live HTTP status verification.
- No interactive Playwright run, mobile-device test, install/offline test, actual file conversion test, or Cloudflare Worker deployment test was performed in this spot-check.

### Follow-up actions
1. Run Playwright against custom-domain and GitHub Pages hosts, including the 29 PWA manifest/install paths; compare against the already-merged 25-Nov changes without editing those files.
2. Exercise Password Generator, QR Maker, PDF/image conversion, Word Converter, and Time Calculator controls on desktop and mobile.
3. Verify actual HTTP status and canonical/manifest/icon URLs for the five pages the web viewer could not open.
4. Deploy the Short Link Worker only after separate security review, production environment configuration, domain/route setup, and abuse/rate-limit tests; current URL Toolkit still truthfully describes real short links as a future phase.
5. Complete GSC URL inspection and request indexing manually for the six unknown URLs; the inspection tool does not submit Google's request.


## Existing automated browser-test coverage review — 25 Nov 2026

Inspected `qa/browser/package.json`, `playwright.config.js`, `tests/password-generator.spec.js`, and `tests/social-qr-maker.spec.js` from main (read-only).

- The Playwright project is configured for Chromium desktop and Pixel 7 mobile emulation, with a local Python static server.
- Password Generator spec includes generation settings, excluded characters, invalid selection clearing, passphrase, PIN, show/hide accessibility, clipboard fallback, secure-randomness failure, request-payload privacy, keyboard navigation, and responsive-width checks.
- Social QR spec covers 12 platforms, mismatch rejection, bundle and link-in-bio payload decoding, unsafe destination protocol rejection, mobile control bounds, and keyboard selection.
- **Coverage gap:** the current browser suite has only these two spec files. It does not automatically exercise the other PWA pages, manifest/icon/install paths, SW offline behavior, conversion tools, or all 108 sitemap URLs. The Playwright config also uses a local static server, so it does not prove Cloudflare Pages production behavior or GitHub Pages project-path behavior.
- No Playwright execution was performed in this session because the repository checkout and browser runtime are not available inside this connected GitHub read-only inspection workflow. Do not report these test definitions as a passing test run.

### QA next step
Add a separate cross-page smoke suite for manifest/icon resolution, navigation, no horizontal overflow, console errors, and key happy-path calculations/conversions. Run it against both `https://infojano.com` and `https://barsulkhan.github.io/InfoJano` after excluding or separately snapshotting 25-Nov-touched application files. Add explicit offline/PWA tests separately so network and cache failures are distinguishable.


## Canonical discrepancy triage — 25 Nov 2026

A second read-only inspection checked current main HTML source and recent file history for the three QR pages and Percentage Difference Calculator whose GSC URL Inspection records showed a canonical mismatch or malformed declared canonical.

- upi-payment-qr-code-generator.html: current source declares canonical and og:url as https://infojano.com/upi-payment-qr-code-generator.html; source was refined 2026-11-24. GSC last crawled 2026-11-11 and reported an old GitHub Pages declared canonical. Likely stale GSC crawl; do not edit current source based on this record.
- custom-qr-code-generator.html: current source declares canonical and og:url on infojano.com; SEO title/description refined 2026-11-24. GSC last crawled 2026-11-11 and reported the older GitHub Pages canonical. Likely stale GSC crawl; do not edit current source.
- qr-maker.html: current source declares canonical and og:url on infojano.com. However this file was touched by the 2026-11-25 dual-host PWA commit, so it remains explicitly excluded from edits. GSC last crawled 2026-11-11; the mismatch may be stale.
- percentage-difference-calculator.html: current source contains a clean infojano.com canonical and og:url. Its GSC last crawl was 2026-11-11, while source SEO was updated 2026-11-21. The malformed userCanonical string returned by GSC therefore appears to be an older crawl record, not the current source. No source edit made.

Conclusion: the GSC mismatch signals are not proof of current source defects. Request/await a fresh Google crawl and re-inspect before changing canonical tags. Do not modify the 25-Nov-touched QR Maker file.
