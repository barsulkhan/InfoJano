# InfoJano — Master Migration Supplement & Current Handoff
Updated: 12 November 2026
Purpose: Preserve the latest project decisions and handoff context that were discussed after the older master checkpoint. This file supplements (does not replace) the existing master project file.

## Project identity and source of truth
- Project: InfoJano — global-first, mobile-first everyday utility and information portal.
- Repository: https://github.com/barsulkhan/InfoJano
- Live site: https://infojano.com (custom domain configured; also retain GitHub Pages project URL https://barsulkhan.github.io/InfoJano/ as fallback/reference).
- User operates primarily from an Android phone and has a limited budget. Prefer small, isolated changes and clear copyable links.
- GitHub committed source and commit history are the source of truth for website code. This document is the project decision/progress record.
- Older master checkpoint located and fetched: InfoJano_Smart_Master_Project_LATEST_2026-10-28.md. It contains extensive historical notes through late October and BMI work through 10 November. Preserve it; do not overwrite it during migration.
- A search for a separately named “COMPLETE Master Archive 2026-11-04” did not find that exact filename in the repository. It may exist in ChatGPT Library or under another name; do not assume it is present in GitHub until located.

## Critical working rules — user-approved
1. Read the latest master checkpoint and inspect current repository files before any code change.
2. Make one small, isolated change at a time. Do not bundle unrelated fixes.
3. Never change the homepage design, protected files, shared styles, or unrelated pages without explicit permission.
4. Do not make speculative design/code changes. Inspect exact current code, edit the smallest relevant block, then re-fetch/verify the changed source.
5. Never mark work complete without evidence. Distinguish source/PR merged, Pages deployment succeeded, live URL checked, and visual/functional QA actually passed.
6. After every 1–2 major work steps, update this project record with decisions, completed work, pending work, blockers, and next actions.
7. Keep an explicit pending checklist. Preserve all existing features and user-approved visual references.
8. After changing precached assets, increment the service-worker cache version sequentially and record it. Do not bump it unnecessarily for standalone HTML pages not in precache.
9. If something fails, stop and diagnose before making another change. User explicitly requested slow, controlled, step-by-step work.
10. The user provided a website design/code reference in the 11 November conversation and asked that it be remembered for future implementation. Before using it, retrieve that exact code/reference from the relevant conversation or attachment; do not reconstruct or guess it from memory.
11. Avoid repeatedly asking for intermediate approvals when the user has already authorized a clearly scoped batch. However, ask before touching protected design or when the requested scope is unclear.

## Latest project state known from conversation (12 November 2026)
- Custom domain infojano.com was purchased through Spaceship; DNS setup completed, GitHub Pages DNS check passed, and HTTPS enabled.
- Existing Google AdSense account is connected. Google site review was pending as of the latest user update; ads were not yet confirmed live.
- ads.txt content supplied by user:
  google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0
  User reported a 404 while checking it. Treat ads.txt publication/availability as unresolved until the exact live URL https://infojano.com/ads.txt is checked and returns the expected content.
- Logo fix PR #65 and AdSense connection PR #66 were reported merged.
- Latest reported service-worker cache version: infojano-v273. Verify current sw.js before relying on this; this is a remembered checkpoint, not a fresh repository audit.
- PR #91 was reported open and not merged in the latest project conversation. Verify its actual status before any related work.
- Earlier reported PR #85 and PR #86 concerned Percentage Calculator SEO pages; user reported PR #86 merge permission. Verify merge/deployment status before marking them complete.
- User asked to diagnose why impressions were not converting to clicks. A Search Console screenshot showed 549 impressions from Brazil, USA, UK, Philippines, and Canada; India was excluded in the view. This is a limited screenshot observation, not a full analytics export. Do not infer causes without inspecting query/page/device/country CTR data.
- User requested keyword research targeting the USA.
- Percentage Calculator work: 17 SEO pages were planned/requested; user wanted hero banners consistent with the Percentage Calculator hero. User also requested the “New Life” neon animation, left-to-right text light sweep, header tagline, breadcrumb alignment, and mobile responsiveness. Quick Percentage presets were removed by request. Confirm current source and PR state before changing anything.
- Focus areas explicitly named by user: Age Calculator, BMI Calculator, Percentage Calculator, Image Resize Studio, and QR Toolkit (12 features).
- Age Calculator design was declared final. Historical PRs #29, #30, #31 were reported merged; earlier cache checkpoint infojano-v269.
- BMI work has multiple historical PRs. The older master file records PRs #46–#59 and associated QA limitations. Do not assume every historical deployment/live check was completed; read the detailed entries in the older master.
- Four BMI feature SEO pages and related hero corrections were merged in historical PRs #47–#51; later SEO expansion PR #59 was reported merged. Deployment and live QA must be checked as specified in the older master.
- An earlier pending Search Console indexing URL remains: https://barsulkhan.github.io/InfoJano/resize-image-for-website.html (the user could not submit it because of the quota limit). Remind them when they next ask to submit pages for indexing.
- Date Difference Calculator functional QA and sitemap/indexing follow-ups are recorded as pending in the older master checkpoint.

## AdSense and domain checklist
- [ ] Verify https://infojano.com/ads.txt directly and confirm HTTP status and exact text.
- [ ] If 404, inspect repository path, Pages deployment, custom-domain root behavior, and redirects; make only the minimum fix.
- [ ] Confirm PR #65 and #66 merge commits and Pages deployment.
- [ ] Check current AdSense site-review status in the user's account; do not claim approval or ad serving until visible evidence confirms it.
- [ ] Confirm canonical URLs and sitemap host are aligned with the custom domain before changing SEO metadata or sitemap.
- [ ] Keep the user-provided publisher ID confidential in conversational summaries where unnecessary; it is already intended for the public ads.txt file.

## SEO and analytics checklist
- [ ] Inspect fresh Search Console Performance data by page, query, country, device, clicks, impressions, CTR, and average position.
- [ ] Explain low CTR using observed evidence only; do not promise ranking/click gains.
- [ ] Continue USA-focused keyword research only for the pages/features the user prioritizes.
- [ ] Verify the 17 Percentage SEO pages, their internal links, canonical tags, sitemap inclusion, responsive hero, and page-specific metadata.
- [ ] Check actual indexing separately from “Request indexing” submission. A request is not proof of indexing.
- [ ] Submit the pending Image Resize page when Search Console quota allows.

## Feature priorities and constraints
### Age Calculator
- Design is final. Do not redesign without explicit permission.
- Historical work includes exact age, total days/weeks, birth weekday, birthday visual/animation, and responsive behavior. Refer to the detailed historical master file.
- Verify live interactions and visual behavior only if the user asks or reports a defect.

### BMI Calculator and BMI SEO pages
- Preserve BMI calculator formula, adult category thresholds, and under-20 warning/handling.
- Historical PR #46 changed SEO content on bmi.html while preserving calculator JavaScript byte-for-byte.
- Historical PRs #47–#51 created/refined four BMI feature pages and corrected hero artwork. PR #59 expanded keyword clusters.
- Do not represent proposed features (unit toggle, waist-to-height ratio, progress tracker, goal estimator, report/share, BMR/TDEE, body-fat, child/teen guidance) as implemented until built and tested.
- Check current deployment and mobile visual appearance before marking live.

### Percentage Calculator
- 17 SEO pages were requested/planned. Check PR #85, #86, and #91 before further work.
- Preserve the main calculator's current functionality and the removal of Quick Percentage presets.
- Match the user-approved Percentage Calculator hero style and effects; retrieve the exact reference/code from the 11 November chat before using it.
- Do not modify homepage or global design as part of SEO-page work.

### Image Resize Studio
- Keep the existing workflow and features intact.
- Pending indexing reminder: resize-image-for-website.html.
- Confirm current page list and sitemap before adding/removing pages.

### QR Toolkit
- User specified 12 features. Audit the existing implementation before claiming all 12 are complete; maintain a feature-by-feature verification checklist.

## Project files and historical context
- Keep the 28 October master file intact:
  https://github.com/barsulkhan/InfoJano/blob/main/InfoJano_Smart_Master_Project_LATEST_2026-10-28.md
- This supplement is the newer handoff layer. When enough historical detail has been reconciled, a future consolidated master may be created, but do not delete the older file.
- Preserve other archives and reference files; never replace them merely to reduce duplication.
- The user also has separate website initiatives (USAJIO Personal Finance, Health & Fitness, AI & Software) and a separate MobilePro shop demo. Do not merge those projects into InfoJano's technical source-of-truth. Keep separate master records if/when the user requests their migration.

## Next session start procedure
1. Open this supplement and the older 28 October master file.
2. Verify the current main branch head, open PRs (especially #91), current sw.js cache version, and latest Pages deployment.
3. Locate the exact “COMPLETE Master Archive 2026-11-04” if it exists under another filename or in Library; reconcile it without deleting historical versions.
4. Audit the latest 11–12 November changes and the user-supplied design/code reference from the original conversation.
5. Start with the user's latest explicitly requested task only. Make one small change, verify, then update this file.


---

## 12 November 2026 — Repository verification corrections

A fresh GitHub tree/API audit found that the earlier statement saying the 4 November archive could not be found was incorrect. The exact file is present at:
`InfoJano_Smart_Master_Project_COMPLETE_2026-11-04.md` (repository root). The 28 October master is also present. Both are historical records and must remain untouched.

The full 1,322-line Library master `04_InfoJano_Master.md` has now been transferred to:
`docs/04_InfoJano_Master_CURRENT_2026-11-12.md`.
The first upload attempt contained only the first 1,000 lines; this was detected by comparing source/target lengths. It was corrected by re-reading lines 1–1000 and 1001–1322 and updating the GitHub file. The complete source was then verified against the Library copy.

Fresh PR status corrections:
- #91 CLOSED/MERGED, merge commit `3d5c6d26a8119231e634f270c070bf8eff7997b0`.
- #94 OPEN/NOT MERGED; do not merge without explicit user approval.
- #95 CLOSED/MERGED (ads.txt authorization).
- #100 CLOSED/MERGED; APK and Pages workflows succeeded.
- #101, #102, #103 CLOSED/MERGED; PR #103 Pages and APK workflows succeeded.
- #85 and #86 CLOSED/MERGED.

Current `sw.js` cache is `infojano-v278`. Root `ads.txt` exists in GitHub main, but direct live URL verification was inaccessible in the browser inspection; its live HTTP status remains unverified.

Important migration gaps:
- The user's exact pasted Header + Hero HTML/CSS source is not included verbatim in either master file; only requirements, visual reference notes, and source audit findings are preserved. Do not recreate it by guessing.
- USAJIO, Health & Fitness, and AI & Software remain separate projects and have not been migrated into this InfoJano repository. MobilePro also remains separate.
- Live mobile visual QA and direct custom-domain HTTP checks remain unverified.
