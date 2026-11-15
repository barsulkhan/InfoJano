# InfoJano — AdSense Readiness & SEO Cleanup Tracker

Started: 2026-11-15 16:36:09 +05:30
Branch: `audit/adsense-readiness-seo-cleanup-2026-11-15`
Base: `main` at `9b069a536b3b5f5ed4afac19f3de0257475c58ab`
Overall status: In progress — audit and reversible changes only; not merged or deployed.

## User-approved scope
The user authorized work on: (1) privacy/publisher disclosure, (2) custom-domain path migration, (3) About/Contact/Terms, (4) content quality, and (5) retaining only necessary SEO landing pages while temporarily disabling selected pages. All disabled SEO pages must be preserved exactly and be restorable without reconstructing content. Save detailed dated/time-stamped findings, fixes, tests, blockers and next steps.

## Safety / preservation rules
- Work on this dedicated branch and submit a reviewable PR; do not commit directly to main or merge without a separate explicit approval.
- Never delete SEO landing-page source. A disabled page must be recoverable byte-for-byte from Git history and the archive manifest; preserve title, description, canonical, structured data, body, assets and tool functionality.
- Only use reversible `noindex,follow` plus sitemap/internal-link exclusion for pages approved by evidence-based review. Keep a manifest with exact paths, prior metadata, reason and restore instructions.
- Do not modify the protected ID Card Print Studio workflow, crop logic, print dimensions, exports, or approved visual design.
- No AdSense approval, live browser QA, Search Console status or indexing claim without direct evidence.
- Do not remove any URL from historical Search Console tracker records; preserve submission/indexing history.
- Keep existing open PRs separate; do not overwrite or merge stale work.

## Work cards
### CARD-001 — Privacy Policy and publisher disclosure
Status: In progress.
Findings: `privacy-policy.html` is absent from repository root although `work-hours-calculator.html` links to it. `ads.txt` exists with `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`. AdSense loader is present in `index.html`. Policy must accurately describe actual data processing, cookies/advertising, third-party services, analytics, contact and user choices; do not make unsupported promises.

### CARD-002 — Custom-domain path migration
Status: In progress.
Findings: root deployment is `https://infojano.com/`, but `index.html`, `install.js`, `sw.js`, `manifest.json` and numerous pages retain `/InfoJano/` paths. `sw.js` currently uses cache `infojano-v310`; any path migration must update precache paths and bump cache version sequentially. Validate all referenced assets/scripts and preserve GitHub Pages compatibility only if intentionally supported.

### CARD-003 — About, Contact and Terms
Status: In progress.
Findings: no root-level `about.html`, `contact.html`, or `terms-and-conditions.html` found in current repository tree. Homepage contains an About section, but footer lacks policy/about/contact navigation. Contact method must be a real, user-approved address or form; do not invent an email or physical address.

### CARD-004 — Content quality
Status: In progress.
Review tool pages and SEO landing pages for unique user intent, working tool, useful original explanations, accurate claims, internal links, FAQ quality, metadata, schema, mobile accessibility and content duplication. Preserve useful tools and do not mass-rewrite pages.

### CARD-005 — SEO landing-page curation and reversible deactivation
Status: In progress — page-level evidence review pending.
Source of truth: current `sitemap.xml` (106 unique URLs on 2026-11-15) and `docs/InfoJano_Google_Indexing_Tracker_2026-11-12.md` (historical GSC snapshot; not live verification).
Rules: keep genuinely useful core tools and distinct, high-value support pages indexable; temporarily noindex only clearly overlapping/thin/low-value landing pages after review. Preserve every disabled page source and record exact restore procedure. Do not equate sitemap inclusion with indexing or Search Console submission.

### CARD-006 — QA and AdSense readiness
Status: Not started.
Static source checks, link/path audit, sitemap consistency, canonical/robots/schema checks, cache path check, workflow and deployment verification, then live browser/device checks. External AdSense account review and Search Console checks remain user-side unless authenticated access is provided.

## Initial evidence (2026-11-15 16:36 +05:30)
- Main branch commit: `9b069a536b3b5f5ed4afac19f3de0257475c58ab`.
- Repository contains 282 tracked tree entries.
- Current `sitemap.xml`: 106 unique URL locations; `robots.txt` points to `https://infojano.com/sitemap.xml`.
- `ads.txt` publisher line exists as expected.
- `privacy-policy.html` not found in root.
- Homepage footer has no visible Privacy/About/Contact/Terms links; About content is an in-page section.
- Root HTML set includes 100+ pages; full page-by-page curation is pending.
- `install.js` registers `/InfoJano/sw.js` with scope `/InfoJano/`.
- `sw.js` sets HOME to `/InfoJano/` and precaches old-base paths; cache version `infojano-v310`.
- `manifest.json` id/start_url/scope and icons use `/InfoJano/`.
- Existing indexing tracker records 40 historical indexed entries and 68 pending URLs (historical list arithmetic), not current authenticated GSC status.
- Existing PR #209 (QR Toolkit) and PR #211 (sitemap alternatives) were visible open at audit start; this branch must not overwrite their changes.

## Detailed work log
### 2026-11-15 16:36 +05:30 — AdSense and SEO cleanup started
- Requested: implement privacy/publisher disclosure, custom-domain paths, About/Contact/Terms, content quality review and selective reversible SEO landing-page deactivation; save full progress and dated/time-stamped records.
- Inspected: current main, repository tree, sitemap, robots.txt, ads.txt, manifest, service worker, shared install script, homepage footer, indexing tracker, relevant tool page links and project standards.
- Changed: created isolated branch `audit/adsense-readiness-seo-cleanup-2026-11-15`; created this tracker. No production files changed yet.
- Tests: source inspection only; live browser, mobile/desktop, Search Console and AdSense account tests not run.
- PR/commit/workflow: branch created from main SHA above; tracker commit pending.
- Issues: custom-domain path migration is cross-cutting and needs a complete reference audit; privacy text must reflect actual third-party processing; SEO keep/disable decision needs per-page evidence.
- Still pending: full page inventory and duplication scoring; create policy/about/contact/terms; repair path references; reversible archive/noindex plan; static QA.
- Protected areas: ID Card Print Studio and all production pages remain untouched.
