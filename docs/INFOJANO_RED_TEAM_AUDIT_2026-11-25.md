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
