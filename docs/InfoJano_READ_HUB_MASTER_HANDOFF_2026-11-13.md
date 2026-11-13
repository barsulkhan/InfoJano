# InfoJano — Master Read Hub / Session Handoff
Updated: 13 November 2026
Repository: https://github.com/barsulkhan/InfoJano
Live domain: https://infojano.com/
GitHub Pages fallback: https://barsulkhan.github.io/InfoJano/

## Working agreement
- After every meaningful work unit, save a dated progress record in this repository so work can resume if the chat ends.
- Treat this GitHub repository as the durable project memory / Read Hub. Do not rely on ChatGPT memory as the only record.
- Keep this handoff current: what was checked, what changed, PR/commit links, success/failure state, and exact next task.
- Never claim a deployment or live browser test succeeded unless Actions and the live page were actually checked.
- Preserve existing features. Make the smallest safe changes and validate source before opening a PR.
- Do not incur paid services, hosting, API, subscription, or domain costs without explicit approval.

## Session record — 13 Nov 2026

### Work confirmed successful (merged)
1. **PR #168 — Fix Countdown Studio interactions and media previews**
   - Status: merged.
   - Merge commit: `5c5336e4a046a22a5c9e28e0b423a765bd701659`.
   - Scope: corrected over-escaped JavaScript regular expressions affecting media URL parsing, YouTube embed detection, direct video extension detection and event interactions.
   - PR: https://github.com/barsulkhan/InfoJano/pull/168

2. **PR #169 — Add live YouTube subscriber counter to Countdown Studio**
   - Status: merged 13 Nov 2026.
   - Merge commit: `a02ce360549fa5264eac3695fcd2ffa73a7ccfed`.
   - Scope: YouTube Data API v3 subscriber count integration; requires user's own API key; refreshes while page remains open.
   - Important limitation: API key is required; no API key has been configured for the user. Counts may be rounded by YouTube to three significant figures.
   - PR: https://github.com/barsulkhan/InfoJano/pull/169

3. **PR #170 — Improve Number to Words SEO tool first-use experience**
   - Status: merged 13 Nov 2026.
   - Scope: remove sample/demo values and misleading initial Ready state from the targeted Number-to-Words SEO pages.
   - PR: https://github.com/barsulkhan/InfoJano/pull/170
   - Note: earlier work targeted 13 pages; exact changed-file coverage should be checked from PR changed-files list before claiming all 13 are complete.

### Current work in progress (NOT merged)
4. **PR #171 — Fix deployment paths for custom domain and GitHub Pages**
   - Status at handoff: open; GitHub reports mergeable = true on latest check.
   - Branch: `fix/custom-domain-asset-paths`.
   - PR: https://github.com/barsulkhan/InfoJano/pull/171
   - Latest head commit: `a7a73eed6a7e5a52d86df3b323b3d2419bd3157f`.
   - Changed files: 58; commits: 59 (many sequential file updates were made during this task).
   - Findings: project files contained many root-absolute `/InfoJano/...` references even though the user uses `infojano.com` custom domain. Those paths may resolve incorrectly on the custom domain, although they are valid for the GitHub Pages project path.
   - Changes made on branch:
     - `install.js`: select `/InfoJano/` for `barsulkhan.github.io` and `/` for custom domain; register service worker at matching scope.
     - `sw.js`: cache version changed to `infojano-v304`; asset paths are mapped from the detected deployment base.
     - `manifest.json`: start URL, scope, ID and icon paths made relative.
     - 55 page files (including homepage, tools and SEO pages): selected `/InfoJano/` absolute references replaced with relative paths.
   - IMPORTANT validation caveat: source-level spot checks were performed, but a complete audit of all 58 changed files, service-worker precache, nested-path resolution, and live browser behavior has NOT been completed. In particular inspect `sw.js` carefully: verify all precache paths resolve correctly on both custom domain and GitHub Pages; ensure no invalid path mapping or duplicate scope. Do not merge until this review is complete.
   - PR is not yet merged and not deployed. Do not report the custom-domain fix as live.

## Current progress counts
- Confirmed merged work in this session: 3 PRs (#168, #169, #170).
- Open work: 1 PR (#171).
- Live deployment checks performed in this session: none.
- Android device testing performed in this session: none.
- Time spent: not reliably measured; do not invent a duration.

## Important context from prior project handoff
The repository contains `docs/04_InfoJano_Master_CURRENT_2026-11-12.md`. Its project context includes:
- Preserve existing calculator and studio features; mobile-first and PWA installability are priorities.
- The six Image Resizer SEO pages and premium hero redesign were previously merged in PR #19; source validation done, but live Android visual QA was pending.
- BMI Toolkit Phase 1 was merged in PR #62; preserve the main BMI hero design exactly unless explicitly requested.
- The user wants practical, proactive improvements, but no paid service without approval.
- Existing docs include older project checkpoints; always verify current GitHub main, Actions and live deployment before relying on historic statuses.

## Next actions — mandatory sequence
1. Review PR #171 changed files and especially `sw.js`, `install.js`, manifest and every changed asset reference. Fix any incorrect assumptions before merge.
2. Check `main` and branch for stale `/InfoJano/` references using GitHub code search and targeted file scans. Confirm only intentional deployment-specific references remain.
3. Validate both deployment layouts conceptually:
   - Custom domain root: `https://infojano.com/`
   - GitHub Pages project root: `https://barsulkhan.github.io/InfoJano/`
4. After the review, report findings and ask user before merge if approval is needed. Do not silently merge this broad 58-file change.
5. After merge, check the GitHub Pages Actions run associated with the merge commit. Then verify live homepage, one calculator, Countdown Studio and PWA manifest/service-worker URLs. Report each separately.
6. Continue site-wide SEO/accessibility/mobile audit only after the deployment-path fix is safely resolved.
7. At the end of every work session, update this file with new completed tasks, open PRs, commit SHAs, deployment status, and next exact step.

## Resume instruction
When the user says “কাজ চালাও” or “continue”, first read this file, then inspect the latest GitHub main/PR/Actions state, and continue from the exact next action. Do not ask the user to repeat project history.


## Resume review update — 13 Nov 2026 (PR #171)

### Review result: BLOCKED — do not merge yet
- Re-read this handoff and fetched PR #171 metadata, all 58 file patches, review submissions and review threads.
- Current PR status at this check: open, not merged; GitHub reports `mergeable=false` (updated 2026-11-13T17:24:08Z). No submitted reviews or review threads were returned.
- Confirmed source-level defects in the branch:
  1. `app-manifests/age.webmanifest` and `app-manifests/bmi.webmanifest` still hard-code `/InfoJano/` for `id`, `start_url`, `scope`, and icon `src`. Their pages now reference these manifests relatively, but the manifests themselves are still GitHub Pages-only paths and will not be correct on the custom-domain root.
  2. `word-to-jpg.html`, `word-to-pdf.html`, and `word-to-png.html` still have absolute `/InfoJano/word-converter.html` URLs in the meta refresh tag, even though the inline `location.replace()` and fallback link were changed to relative URLs.
  3. Changed pages `extract-pdf-pages.html`, `image-resizer.html`, and `word-converter.html` still use root-absolute `/infojano-mark.svg` favicons. This resolves on the custom domain but not at the GitHub Pages project subpath unless the asset is also present at the host root.
  4. `sw.js` rewrites its precache list from `/InfoJano/` to the detected base path, which is directionally sound, but it still needs validation for every path and cache install behavior. No browser test has been performed.
- The per-file patch scan found the above remaining root-absolute references in added lines. Full repository-wide scan of all standalone web manifests and unmodified pages is still pending.
- No files changed during this review; no deployment or live browser/device test performed.

### Next exact actions
1. Fix the three redirect meta-refresh URLs and normalize favicon paths for both deployment bases.
2. Make all app-specific web manifests deployment-base-safe (relative IDs/start URLs/scopes/icons where valid) and scan the full repository for remaining absolute `/InfoJano/` paths.
3. Re-check the service worker precache list and both hosting layouts, then re-fetch PR metadata to understand why GitHub reports `mergeable=false`.
4. Only after source checks pass, ask for approval before merging this broad change. After merge, verify Actions and live URLs separately.


### PR #171 follow-up fixes — 13 Nov 2026
- Continued work on branch `fix/custom-domain-asset-paths`; PR #171 now contains 60 changed files / 67 commits (was 58 files / 59 commits at initial review).
- Fixed both Age and BMI app manifests to use paths relative to the manifest location: `../age.html` / `../bmi.html`, `../` scope, and `../app-icons/...` icons. This supports both the custom-domain root and the GitHub Pages `/InfoJano/` base.
- Fixed the three Word redirect pages so meta refresh, JavaScript redirect and fallback link all use the same relative destination.
- Changed the remaining three reviewed favicon references (`extract-pdf-pages.html`, `image-resizer.html`, `word-converter.html`) to relative paths.
- Re-fetched the complete PR patch after edits. In the added lines of the PR, the only remaining literal `/InfoJano/` occurrences are intentional host-detection/base-path logic in `install.js` and `sw.js`. This is a patch-level scan of the PR, not a full repository-wide scan.
- Current PR status: still open and not merged; GitHub still reports `mergeable=false`. Latest head commit: `9971cb5e647a79bb2702c46ca1dc9cd0dbffbc1e`. PR: https://github.com/barsulkhan/InfoJano/pull/171
- No deployment, live browser check, or Android device test has been performed. Service-worker precache still needs a systematic path-by-path audit. The reason for GitHub's `mergeable=false` also needs diagnosis before merge.

### Next exact actions
1. Determine why PR #171 is currently reported non-mergeable (check current main/base changes and conflict status); do not force-merge.
2. Audit every ASSETS entry in `sw.js` against files actually present in the repository and verify mapping under both `/` and `/InfoJano/`.
3. Inspect all web manifests and the full repository for remaining deployment-specific absolute paths, not only changed PR lines.
4. Re-run source checks; update PR description and this handoff with results. Ask user before merging the broad PR.


## PR #171 merge confirmation — 13 Nov 2026
- User confirmed the PR action (“মার্ক”) and GitHub now reports PR #171 as **closed and merged**.
- PR: https://github.com/barsulkhan/InfoJano/pull/171
- Merge commit: `36c99d410ad9bcd761586aa2afb48afd0b5a6b7f`
- PR head: `9971cb5e647a79bb2702c46ca1dc9cd0dbffbc1e`
- Scope merged: 60 files changed (166 additions, 164 deletions); custom-domain and GitHub Pages deployment-path compatibility changes.
- Verified on main after merge: `install.js` selects `/InfoJano/` for `barsulkhan.github.io` and `/` otherwise; `manifest.json` uses relative paths; `sw.js` maps its `/InfoJano/` precache paths to the detected deployment base.
- GitHub's PR-specific workflow-runs lookup for the merge SHA returned no runs. This is **not** proof that deployment completed or CI passed.
- Not yet verified: path-by-path existence of every service-worker precache asset; all standalone manifests and all pages; live custom-domain and GitHub Pages responses; browser/PWA install/offline behavior; Android device behavior.
- No claim is made that the live website is updated until deployment is independently confirmed.
- Working agreement going forward: after each meaningful task, update this Read Hub file in GitHub, then tell the user what was done and explicitly confirm it was saved here.

### Next task
1. Verify GitHub Pages deployment status using repository Actions/deployment state and check live URLs for both hosting layouts.
2. Audit every `ASSETS` entry in `sw.js` against the merged repository tree; fix any missing or incorrect paths in a new focused PR.
3. Scan all standalone web manifests and remaining page references for path compatibility.
4. Test homepage, one calculator, Countdown Studio, manifest, service-worker registration and offline fallback where feasible. Record each check as passed/failed/not tested.
