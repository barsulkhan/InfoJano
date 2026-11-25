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
