# 2026-11-16-0848 — Dual-host path inventory and deployment status

Website: InfoJano
Canonical site: https://infojano.com/
Repository: https://github.com/barsulkhan/InfoJano
Branch: main
Started: 2026-11-16 08:48 +05:30
Completed: 2026-11-16 08:48 +05:30
Status: SOURCE AUDIT PARTIAL PASS; PATH INCONSISTENCY CONFIRMED; LIVE HOST RESPONSE UNVERIFIED

## User request and scope
User asked to read Task 0019, Master Research Plan and Research README, determine completed versus pending work, and continue in scope without repeatedly asking.

Read-only scope for this task: verify current hosting markers, inspect path-generation/service-worker/manifest sources, search current main for legacy `/InfoJano/` references, and recheck the previously pending APK and Pages workflow results.

Permission boundaries retained:
- No production/source-code edits, DNS/Worker changes, account-setting changes, PR merge, deployment trigger, AdSense/CMP publication, Search Console Request Indexing or Validate Fix.
- Keep the 15 Number to Words Pro and 3 Countdown SEO URLs out of indexing submissions.
- Documentation-only task tracking is permitted by the repository's tracking standard; this task record is the only file created by this task.

## Re-read / reused records
- `project-notes/adsense-compliance/2026-11-16-0019-custom-domain-path-audit-and-ads-txt-http-check.md`
- `project-notes/adsense-compliance/MASTER-RESEARCH-PLAN.md`
- `project-notes/adsense-compliance/README.md`
- `project-notes/adsense-compliance/2026-11-16-new-chat-handoff-and-pause.md`
- `project-notes/TOOL-WORK-TRACKING-STANDARD.md`
- Current main HEAD before this task: `778e4adb863f17679fbf6e301e2a021f30a6659f`

## Findings

### Hosting configuration evidence
- Root `CNAME` file contains `infojano.com` (blob SHA `da070ce63b88bdd2a0c8f727ae7276eb429dd375`).
- Repository root `CNAME` is evidence that the custom domain is configured in repository source; it does not expose all GitHub Pages settings or prove current DNS/HTTP propagation.
- Current `site-header.js` (SHA `cba9b9bbb0662570a6aad49e5d2b038688a68527`) uses `ROOT=(location.hostname==='barsulkhan.github.io')?'/InfoJano/':'/'`. Shared navigation and privacy/contact footer use this root.
- GitHub Pages settings endpoint was not independently inspected; the CNAME and deployment workflow evidence do not prove whether the project-site URL remains a supported user-facing host.

### Confirmed inconsistent path sources
- `install.js` (SHA `617681e810a160be39221821e2842a6850a1ec0f`) registers `/InfoJano/sw.js` with scope `/InfoJano/` unconditionally and loads helper scripts from `/InfoJano/`.
- `sw.js` (SHA `95969394bf0ba6a5a49b4efd3c3fd9dbd44c2cb1`) sets `HOME = "/InfoJano/"` and precaches many `/InfoJano/...` resources; cache name is `infojano-v311`.
- Root `index.html` (SHA `4ed9da9d8f9f2d98ba199d7614dc760d7ca42c77`) links `/InfoJano/manifest.json` although its canonical URL is `https://infojano.com/`.
- Root `manifest.json` (SHA `5a9b779ac978845b84d93a2ad7cf3f122608a81b`) uses `/InfoJano/` for `id`, `start_url`, `scope` and icon URLs.
- Many root HTML pages retain hardcoded `/InfoJano/` paths in script, image or link references. GitHub code search returned 61 matches for `src="/InfoJano/` and 61 for `href="/InfoJano/`; these result sets include some non-root documentation/backups and have search-index/result limits, so they are not a complete count of affected production pages.
- General repository search for `/InfoJano/` returned 100 results (the requested result cap), including root HTML pages, shared JS, service worker, root manifest, documentation/backups and dedicated app manifests. This confirms broad usage but cannot be treated as an exhaustive unique-file count.
- Search for manifest start_url/scope returned 29 dedicated `app-manifests/*.webmanifest` files plus the root manifest and workflow/docs references. These app manifests intentionally resolve to `/InfoJano/` in the Android build workflow and must not be blindly rewritten.

### Android build assumptions that must be preserved or consciously retired
- `.github/workflows/build-tool-apks.yml` (SHA `05eeffaa4015a88261473714b76f9a3f4360634a`) explicitly validates each tool manifest against `https://infojano.example/InfoJano/...`, requires `/InfoJano/` start/scope and service-worker cache entries, and packages Android apps using `https://barsulkhan.github.io/InfoJano/$page?app=1`.
- The individual app manifests therefore have a deliberate GitHub Pages project-path contract for the current APK build. A future dual-host fix must distinguish root-site PWA paths from Android wrapper manifest/build paths; a blanket replacement would break validation and possibly installed app launch URLs.

### Workflow status recheck
- APK workflow #43794247117: COMPLETED / SUCCESS on commit `947f399eb900ca05fe4f068bd98bb8cf5746bda7`.
- Latest Pages build/deployment run visible on main: #43797089152, COMPLETED / SUCCESS on current main HEAD `778e4adb863f17679fbf6e301e2a021f30a6659f`.
- This is GitHub Actions deployment evidence only. It does not prove that the custom domain currently serves the expected files or that browser caches/service-worker clients have updated.

## Tests / checks
- Current main branch HEAD lookup: PASS — `778e4adb863f17679fbf6e301e2a021f30a6659f`.
- CNAME source read: PASS — `infojano.com`.
- Core host-root and service-worker source inspection: PASS — mixed path model confirmed.
- GitHub code search: PASS as discovery evidence; NOT EXHAUSTIVE due search result limits.
- APK workflow #43794247117: PASS — completed success.
- Pages workflow #43797089152: PASS — completed success.
- Live HTTP/DNS/browser checks for custom domain, GitHub Pages alternate host, manifest and service-worker scope: UNVERIFIED / unavailable in current environment.
- AdSense ads.txt HTTP/HTTPS status, redirect and headers: UNVERIFIED.
- Search Console action/indexing: NOT RUN.

## Decision and safe next sequence
1. Treat root site path handling as a confirmed source defect candidate, not yet a proven live outage.
2. Finish a categorized, exhaustive inventory of all root HTML `/InfoJano/` references and verify each target file exists.
3. Inspect every app manifest and the Android/desktop build assumptions separately from root PWA configuration.
4. Confirm whether both `infojano.com` and `barsulkhan.github.io/InfoJano/` are intended supported origins. The repository CNAME alone cannot settle the support policy.
5. Prepare a dual-host-safe patch proposal only after the inventory; do not implement until the no-code-change boundary is explicitly lifted.
6. Re-run source QA and inspect both host modes after any later approved patch; separately verify live HTTP/browser/PWA behavior.

## Changed files / delivery
- Created this task record only.
- No production HTML/JS/CSS/JSON, app manifest, service worker, workflow, CNAME, sitemap, DNS, Worker, CMP/AdSense setting or SEO page changed.
- No PR, merge, deployment trigger, indexing request or Validate Fix action was initiated.

## Remaining blockers
- Live custom-domain and GitHub Pages responses unavailable from this environment.
- GitHub Pages settings and intended long-term support for the alternate project URL need confirmation from repository settings/owner policy.
- ads.txt live HTTP/HTTPS response and AdSense crawler status remain unverified.
