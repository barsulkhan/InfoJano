# InfoJano — Search Console screenshot: solved vs remaining issue list
Date: 2026-11-16
Repository: `barsulkhan/InfoJano`
Evidence basis: the five Search Console screenshots supplied by the user, the saved screenshot transcription, current repository source, PR #91 history, PR #237 status, and the recorded CI workflow results.

## 1. Executive summary

The screenshots showed **58 indexed / 49 not indexed**. The 49 not-indexed URLs were grouped by Google as:

| Search Console reason | Count in screenshot | Current assessment |
|---|---:|---|
| Alternate page with proper canonical tag | 27 | Not automatically an error; URL-by-URL review not completed |
| Not found (404) | 13 | 9 metadata-suffix examples have a confirmed historical source fix; 1 legacy-root example is covered by an open draft path-fix PR; 3 formula/unknown paths remain untraced |
| Page with redirect | 2 | Not individually reviewed; destination and canonical intent need checking |
| Duplicate, Google chose different canonical | 5 | Not individually reviewed; canonical mismatch investigation remains open |
| Crawled — currently not indexed | 2 | Not individually reviewed; content/rendering/indexability review remains open |
| **Total not indexed** | **49** | Counts reproduce the screenshot; they are not a claim that all 49 are defects |

**Important:** Search Console category totals are a snapshot, not a live status check. No claim is made here that Google's current counts have changed.

## 2. 404 list — all 13 screenshot examples

### A. Nine malformed metadata-suffix URLs — source defect fixed

The following nine screenshot URLs match the broken canonical/Open Graph metadata in the pre-fix source. PR #91 repaired those tags and was merged on 2026-11-12 (merge commit `3d5c6d26a8119231e634f270c070bf8eff7997b0`). Current main-branch source for the nine affected pages has clean canonical and `og:url` values.

| Screenshot URL path | Status | Evidence / remaining action |
|---|---|---|
| `/remove-gst-from-total-calculator.html$3<script type=` | **Source fix merged** | PR #91 diff shows malformed old canonical; current source clean. Live HTTP/Google recrawl not verified. |
| `/increase-decrease-by-percentage-calculator.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; current source clean. Live HTTP/Google recrawl not verified. |
| `/number-to-words.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; current source clean. Live HTTP/Google recrawl not verified. |
| `/repeated-percentage-change-calculator.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; current source clean. Live HTTP/Google recrawl not verified. |
| `/what-percent-calculator.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; current source clean. Live HTTP/Google recrawl not verified. |
| `/profit-loss-percentage-calculator.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; current source clean. Live HTTP/Google recrawl not verified. |
| `/successive-percentage-change-calculator.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; current source clean. Live HTTP/Google recrawl not verified. |
| `/percentage-of-percentage-calculator.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; this was the URL inspected in the screenshot. Current source clean. Live HTTP/Google recrawl not verified. |
| `/percentage-difference-calculator.html$3<meta property=` | **Source fix merged** | PR #91 diff shows malformed old canonical/og:url; current source clean. Live HTTP/Google recrawl not verified. |

The screenshot's inspected Percentage of a Percentage URL showed 404, crawl allowed, Googlebot smartphone, referring page `https://infojano.com/percentage-of-percentage-calculator.html`, no referring sitemap and a last crawl shown as 2026-11-16 1:09 AM. The timezone was not labelled. Pages workflow #43797089152 later completed SUCCESS on main HEAD `778e4adb863f17679fbf6e301e2a021f30a6659f` at 2026-11-16 03:16:27Z. This timing/history is consistent with Google having crawled the old malformed metadata before the successful deployment, but is not proof of the live custom-domain response or a fresh Google crawl.

**Classification:** historical source defect repaired; Google-side stale URL retirement / recrawl confirmation still pending. Do not create redirects for these malformed suffix URLs.

### B. Four other 404 paths — attribution/remediation not complete

| Screenshot URL path | Status | Evidence / next action |
|---|---|---|
| `/Height` | **Unresolved** | Source search found `/Height` only as the PDF dictionary key for image height in `image-to-pdf.html`, not as a link or route. Find the actual referring source in Search Console/live output before deciding whether any redirect is appropriate. |
| `/(100)` | **Unresolved** | No exact internal source href found. Need exact URL/referrer evidence and intended destination before any action. |
| `/(100)^ ` | **Unresolved; screenshot transcription approximate** | Formula-like text appears in `percentage.html`, but no direct anchor was found. Confirm exact encoded path in Search Console; do not assume the trailing symbol/space. |
| `/InfoJano/` | **Correction prepared; not merged/deployed** | This is a legacy GitHub Pages project-root path. A source-path remediation is in Draft PR #237; it has not been merged or deployed. |

#### PR #237 — legacy path remediation (not yet live)

Draft PR: https://github.com/barsulkhan/InfoJano/pull/237

- Changes host-relative paths across root HTML pages, root and tool PWA manifests, install helper, service worker and related-app path handling.
- PR is open and Draft; it is **not merged** and no deployment from this PR has occurred.
- GitHub Actions `validate` check passed (run #43799110775); this is source/CI validation only.
- Live `infojano.com` HTTP/browser verification remains unavailable in this environment because DNS resolution failed.
- Therefore `/InfoJano/` is **not counted as fixed in production** yet.

The homepage CTA in `404.html` was separately corrected earlier from `/InfoJano/` to `/`; it remains `noindex,follow`. This fixes the CTA target in source, but does not by itself resolve every legacy path elsewhere in the site.

## 3. Other Search Console categories — still need URL-level review

The screenshots gave category counts but did not provide a complete per-URL list for these groups. They must not be marked solved based on aggregate counts alone.

### 27 — Alternate page with proper canonical tag
- Google is reporting these as alternate URLs with a canonical elsewhere.
- This category can be expected when duplicate/alternate URL variants correctly point to a preferred canonical; it is not automatically a site error.
- **Remaining:** obtain the exact affected URL list; check whether each alternate is intentional, whether the canonical destination returns 200, and whether internal links/sitemap consistently use the preferred URL.

### 2 — Page with redirect
- **Remaining:** obtain both URLs and inspect redirect destination/status, redirect chain and canonical/internal-link consistency.
- Do not remove a valid redirect simply to reduce the report count.

### 5 — Duplicate, Google chose different canonical than user
- **Remaining:** inspect each URL, user-declared canonical, Google-selected canonical, page content similarity, internal links, sitemap entry and redirect behavior.
- No per-URL evidence in the supplied screenshot transcription proves these are fixed.

### 2 — Crawled, currently not indexed
- **Remaining:** inspect each URL's live rendered content, indexability, canonical, internal linking, uniqueness/usefulness and Google-selected canonical.
- No URL-specific resolution is recorded yet.

## 4. Separate AdSense / Privacy workstreams recorded in the project handoff

These are not the five Search Console indexing categories, but they were also listed as outstanding in the project handoff. Keep their status separate:

| Workstream | Recorded status |
|---|---|
| Privacy Policy and Contact pages / homepage links | Live pages and links confirmed by user screenshot; final policy review against actual production data flows still needed |
| Privacy-link QA | PASS: workflow #43794141231 checked 115 user-facing root HTML pages, 26 policy hrefs and 110 sitemap URLs |
| CMP persistent privacy/revocation entry point | OPEN; user screenshot did not show it; live runtime/region testing needed |
| TCF v2.4 / consent signals | OPEN; live `__tcfapi`, CMP identity, TCData, TC string and withdrawal behavior not captured |
| AdSense site review | WAITING; review already submitted, status was “Getting your site ready to show ads”; do not resubmit |
| ads.txt | Visible body matched source in user screenshot; HTTP status, redirects, headers, robots accessibility and AdSense crawler/dashboard recognition remain UNVERIFIED |
| Actual production data flows / privacy wording | OPEN; reconcile GA4, AdSense, optional APIs, Cloudflare Worker, iLoveAPI, storage and native-app behavior; do not invent legal/provider facts |
| Worker / iLoveAPI | OPEN; custom-domain deployment/CORS, allowlist, secrets, rate limits, logs/retention and applicable plan terms require account/provider evidence |
| Android / Windows runtime | OPEN; real device/emulator checks remain outstanding |
| Live deployment/browser regression | OPEN; source and CI success are not live desktop/mobile/PWA proof |

## 5. Explicit restrictions and safe next sequence

1. Keep the 15 Number to Words Pro SEO pages and 3 Countdown country SEO pages on hold — **18 URLs total**. Do not Request Indexing for them.
2. Do not run Search Console Validate Fix or Request Indexing as a substitute for source/live verification.
3. Do not create blanket redirects for `/Height`, `/(100)`, `/(100)^ ` or malformed metadata-suffix URLs.
4. First complete live custom-domain and rendered-source verification when DNS/browser access is available.
5. Review PR #237 separately; do not describe it as deployed or merged.
6. Obtain the full URL lists for the 27 alternate-canonical, 2 redirect, 5 duplicate-canonical and 2 crawled-not-indexed groups before marking individual rows resolved.
7. Keep source evidence, CI results, deployment evidence, live HTTP/browser evidence, Search Console recrawl evidence and account/device evidence as separate proof classes.

## 6. Evidence links

- Screenshot transcription: [2026-11-16-search-console-404-screenshot-follow-up.md](2026-11-16-search-console-404-screenshot-follow-up.md)
- Nine malformed metadata URLs / PR #91 root-cause proof: [2026-11-16-search-console-404-root-cause-confirmed.md](2026-11-16-search-console-404-root-cause-confirmed.md)
- Original handoff and indexing hold: [2026-11-16-new-chat-handoff-and-pause.md](2026-11-16-new-chat-handoff-and-pause.md)
- Master research plan: [MASTER-RESEARCH-PLAN.md](MASTER-RESEARCH-PLAN.md)
- PR #91: https://github.com/barsulkhan/InfoJano/pull/91
- PR #237: https://github.com/barsulkhan/InfoJano/pull/237

---
This file is an evidence-based status inventory, not a claim of full Search Console recovery, AdSense approval, legal compliance or production deployment.


## 7. Follow-up execution checkpoint — 2026-11-16

- Rechecked PR #237: still OPEN and Draft; GitHub reports the branch mergeable. It remains unmerged and not deployed.
- Rechecked PR #237 CI run #43799110775: job `validate` completed SUCCESS. This workflow validates Privacy Policy / Contact markup and policy/sitemap/robots links; it is not a full validation of all 89 changed files.
- Independently compared the 198 service-worker precache entries in PR #237 against the complete Git tree for the PR branch (366 paths). **All 198 listed assets exist** in that branch; no missing precache target was found.
- Retried live public reads for `https://infojano.com/robots.txt`, `/ads.txt`, and `/sitemap.xml`; the web fetcher reports the domain URLs are not accessible. Live HTTP status, redirects, headers, body and production path behavior therefore remain UNVERIFIED.
- Code-search review of `/Height` continues to show only the PDF image-height dictionary context in `image-to-pdf.html`; no actionable route/link source identified. Exact references for `/(100)` and the screenshot's approximate `/(100)^ ` transcription remain unresolved.
- No merge, deployment, Search Console Validate Fix, Request Indexing, or action against the 18 held SEO URLs was performed.

### Immediate next safe work
1. Complete a stronger PR #237 audit (all modified HTML/JS/manifest path references, dual-host resolution, canonical/OG preservation and workflow coverage) before any merge decision.
2. Obtain the exact URL rows for the 27 alternate-canonical, 2 redirect, 5 duplicate-canonical and 2 crawled-not-indexed categories; aggregate screenshot counts are insufficient for safe per-URL fixes.
3. Retry live HTTP/browser verification when the custom domain is reachable.


## 8. PR #237 deeper path audit — 2026-11-16

A second pass over all 89 PR file patches found five remaining project-site path defects that were not caught by the initial validation:
- `word-to-jpg.html`, `word-to-pdf.html`, `word-to-png.html`: the JavaScript redirect and fallback link had been made relative, but the HTML meta-refresh URL still pointed to `/InfoJano/word-converter.html`. Corrected all three meta-refresh targets to the same relative destination.
- `emi.html` and `pdf-to-jpg.html`: their shared header script still used `/site-header.js`, which resolves to the domain root rather than the GitHub Pages project subpath. Corrected both to `./site-header.js`.

These five follow-up corrections are committed directly to the existing PR #237 branch (no merge/deployment). The PR workflow should rerun against the new head. Re-review the resulting checks before any merge decision.


### Additional project-subpath pass — 2026-11-16

A scan of added HTML resource references found six root-relative favicon references in six changed files. These would resolve at the domain root and fail under the GitHub Pages `/InfoJano/` project path. Updated all six to `./infojano-mark.svg`:
- `extract-pdf-pages.html`
- `image-resizer.html`
- `word-converter.html`
- `word-to-jpg.html`
- `word-to-pdf.html`
- `word-to-png.html`

The PR branch now includes 11 targeted path corrections discovered during the deeper audit (five redirect/header issues plus six favicon references). These remain branch-only changes pending CI and review; no production changes were made.


### Batch verification result — 2026-11-16

- Latest PR #237 head: `49977ee5867daddbbaf92e94bff080158f318304`.
- Latest Privacy Policy QA run #43799984619 completed SUCCESS after the path corrections.
- Re-scanned all 89 changed-file patches: no unexpected hard-coded `/InfoJano/` paths remain; the remaining occurrences are intentional host-detection/base-path logic in `install.js` and `related-apps.js`.
- Re-scanned added HTML resource/navigation references: no remaining root-relative `href`, `src`, `action`, `poster`, CSS `url()`, or location redirect targets were found.
- PR #237 remains OPEN and Draft. It has not been merged or deployed.
- Live custom-domain HTTP/browser verification remains unavailable; production behavior is still UNVERIFIED.
