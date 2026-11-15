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


## Progress update — 2026-11-15 16:49 +05:30

### CARD-001 — Privacy Policy and publisher disclosure
Status: Source implementation completed; account-side consent setup pending.
- Added `privacy-policy.html` with disclosures for GA4 where enabled, Google AdSense and third-party advertising cookies/identifiers, Google Ads Settings and aboutads.info opt-out routes, local browser storage, optional third-party DOCX conversion, external services, retention limitations and contact route.
- Policy does not claim that all tools are local or that ads are currently serving. It explicitly describes the optional high-fidelity Word conversion upload path.
- Added links to Google's partner-site data explanation and official CMP requirements.
- Source search found no Google Funding Choices / Google-certified CMP integration in current `main` code. Account-side AdSense Privacy & Messaging / certified CMP configuration remains BLOCKED pending authenticated AdSense account access and user-side configuration.
- `ads.txt` source line verified as `google.com, pub-2908196513377151, DIRECT, f08c47fec0942fa0`.

### CARD-002 — Custom-domain path migration
Status: Source implementation completed for identified production references; static/live QA pending.
- Updated the root-relative `/InfoJano/` references found in production HTML, JavaScript and PWA manifests to deployment-relative paths where appropriate.
- `install.js` now resolves `/` on `infojano.com` and `/InfoJano/` on legacy `barsulkhan.github.io`, and uses that root for service-worker registration and shared scripts.
- `site-header.js` retains its hostname-aware root and now loads the shared legal links helper.
- `sw.js` derives its base path from its own script location and maps the legacy precache entries to that base. Cache advanced sequentially from `infojano-v310` to `infojano-v312` because the new legal pages/helper were added to the precache.
- Main PWA manifest and app manifests use relative URLs so they work from the custom-domain root and the GitHub Pages project subpath.
- Updated root pages that were found by the repository code search, including the homepage, PDF/Word tools, core calculators, QR pages, Number to Words pages, BMI pages, ID Card Print Studio, and associated web manifests.
- ID Card Print Studio's path references only were updated; crop, front/back selection, print dimensions, PDF/JPG export and approved visual layout were not changed.
- Source checks confirm homepage has no remaining literal `/InfoJano/` path; the intentional legacy path remains only in hostname fallback logic and the Service Worker path-rewrite map. Live custom-domain behavior has not been tested.

### CARD-003 — About, Contact and Terms
Status: Source implementation completed; live navigation QA pending.
- Added `about.html`, `contact.html`, `terms-of-use.html`.
- Contact route points to the real public repository issue tracker. No email or postal address was invented; the page warns users not to post sensitive information publicly.
- Added `legal-links.js` and wired it into the shared install/header scripts so Privacy, About, Contact and Terms links appear in shared footers on pages loading those helpers.
- Added all four information pages to all three sitemap variants.

### CARD-004 — Content quality
Status: Partial review and targeted improvement completed; full 103-URL review remains in progress.
- Reviewed source-level visible text, metadata, canonical, FAQ/schema presence and page purpose for: Number to Words (main + 15 landing pages), percentage landing pages, QR-specific pages and chooser, date tools, four BMI guides, and image-resizer landing pages.
- Eight Number to Words landing pages had only about 151–171 visible words and overlapped with a more complete converter. Those are now temporarily noindex; their actual modes/pages remain accessible.
- `qr-choice.html` had about 74 visible words and functions mainly as a chooser; it is now noindex while the real QR tools remain accessible.
- Four BMI guides had visible keyword-list sections explicitly labelled as keyword lists. Removed those sections and added links to CDC adult/child BMI references and WHO obesity/overweight information, plus an explicit adult-only scope and screening-measure caveat.
- The 16 percentage pages reviewed have distinct calculator tasks, roughly 274–336 visible words, FAQs and structured data; retained them pending any future evidence of cannibalization.
- The QR tool pages reviewed have roughly 371–762 visible words with separate task descriptions/FAQs; retained them. No bulk deactivation based only on word count.
- The reviewed date pages have separate user tasks and substantive explanatory copy; retained.
- Search volume, KD, CPC, traffic potential and current Search Console performance were not available for this audit; no numeric demand claims were inferred.

### CARD-005 — SEO landing-page curation and reversible deactivation
Status: First reversible batch implemented; further review pending.
- Created exact pre-change archive branch `archive/seo-landing-pages-before-cleanup-2026-11-15` from main commit `9b069a536b3b5f5ed4afac19f3de0257475c58ab`.
- Temporarily applied `noindex,follow` to: `decimal-number-to-words.html`, `bulk-number-to-words.html`, `words-to-number-converter.html`, `ordinal-number-converter.html`, `million-billion-converter.html`, `lakh-crore-converter.html`, `number-to-words-uppercase.html`, `number-to-words-for-cheque.html`, and `qr-choice.html`.
- Removed those nine URLs from the active sitemap variants. They are not deleted; their source and functionality remain available.
- Retained the main Number to Words converter plus distinct Indian, International, INR, USD, cheque, Bengali and Hindi pages.
- Restore manifest: `docs/SEO-LANDING-PAGE-RESTORE-MANIFEST-2026-11-15.md`. It lists exact paths, reasons and commands for restoring original files from the archive branch.
- Historical indexing tracker entries were preserved. The noindex change does not prove Google has already deindexed any URL.

### CARD-006 — QA and AdSense readiness
Status: In progress.
- Static source check: canonical sitemap, alternate XML sitemap and text sitemap now each contain 103 unique URLs and match exactly.
- Static source check: `robots.txt` allows crawling and points to `https://infojano.com/sitemap.xml`.
- Static source check: `ads.txt` contains the expected publisher record.
- Static source check: main manifest uses relative `id`, `start_url`, `scope` and icon paths; Service Worker cache version is v312 and legal pages/helper are precached.
- Static source check: all nine deactivated pages contain `noindex,follow` and are absent from the three active sitemap variants.
- Not run: JavaScript runtime, browser rendering, desktop/mobile QA, PWA install/offline behavior, live HTTP redirects, AdSense account review, authenticated Search Console inspection, and deployment workflow.
- No production merge or deployment has been performed.

## Current blockers and next actions
1. Finish the remaining sitemap page-by-page content and navigation audit; keep only evidence-based noindex decisions.
2. Check all production path references and PWA manifest/service-worker behavior with a real browser on both custom domain and GitHub Pages path if the legacy host remains supported.
3. Verify new pages, shared legal footer and all 103 sitemap URLs after deployment.
4. Configure Google-certified CMP in AdSense Privacy & Messaging for eligible EEA/UK/Switzerland traffic; this requires account access and cannot be certified by source code alone.
5. Create a draft PR for review. Do not merge or deploy without explicit approval.
6. After merge/deploy, verify live page responses, crawler access, ads.txt, PWA/offline and Search Console. Only then consider AdSense resubmission.


### 2026-11-15 16:53 +05:30 — Draft PR and final source checks
- Created draft PR #233: https://github.com/barsulkhan/InfoJano/pull/233
- PR targets `main`, reports `mergeable=true` / `mergeable_state=clean` on re-fetch, and remains open/draft. It is not merged.
- PR head: `a6730d90ae0af1adfe3e3687e800d59351fe4a5f`; base/main remains `9b069a536b3b5f5ed4afac19f3de0257475c58ab`.
- GitHub PR-triggered workflow run list returned no runs; commit status reports pending with zero statuses. CI is therefore NOT verified.
- Sitemap consistency rechecked: `sitemap.xml`, `sitemap-infojano.xml`, and `sitemap.txt` each contain 103 unique URLs and their URL sets match exactly.
- Noindex/restore check passed for all nine selected pages: active source has `noindex,follow`; canonical sitemap does not list them; archive-branch originals do not contain the noindex directive.
- New legal pages were checked for canonical URLs and `index,follow` metadata.
- Main branch remains unchanged. No merge, deployment, Search Console submission or AdSense account action was performed.
- Next: finish remaining sitemap URL content audit and real browser/device QA, then ask the user to review PR #233 before any merge.


## Follow-up — Custom Domain, AdSense CMP and EEA (2026-11-15 17:02 +05:30)

### CARD-002 — Custom Domain (expanded audit)
- Confirmed root `CNAME` file contains exactly `infojano.com`; homepage canonical is `https://infojano.com/`; robots.txt points to `https://infojano.com/sitemap.xml`.
- Confirmed existing `ads.txt` publisher ID matches the AdSense client ID used in source.
- GitHub Pages custom-domain source configuration is present. This alone does NOT prove live DNS or HTTPS is correct.
- Live HTTP fetch of infojano.com, www, robots, sitemap and ads.txt was not accessible in this audit; DNS resolver/SSL/redirect checks could not be completed. GitHub Pages Settings API was not accessible through the connected GitHub tool.
- Created `docs/CUSTOM-DOMAIN-CMP-EEA-AUDIT-2026-11-15.md` with GitHub's documented apex A/AAAA records, www CNAME target, CAA/Let's Encrypt note, Enforce HTTPS and redirect checks. Do not change registrar records without checking current mail and verification records.
- Remaining: user/registrar DNS records read-only view and GitHub Pages Settings > Custom domain / Enforce HTTPS check.

### CARD-001 — CMP and Google EEA / UK / Switzerland
- Official Google policy rechecked: certified Google CMP integrated with IAB TCF required for personalized ads in EEA/UK (since 16 Jan 2024) and Switzerland (since 31 Jul 2024).
- Google Privacy & Messaging European regulations messages are certified and support TCF v2.4; Google documentation states IAB's full TCF v2.4 implementation deadline for publishers/CMPs was 23 Oct 2026. This is current as of the audit date.
- Google CMP is listed as IAB TCF CMP ID 300 (Google LLC).
- Recommendation: use Google's own AdSense Privacy & Messaging European regulations message rather than add an unverified third-party CMP. Account-side creation, site assignment, publishing, vendor selection and message testing remain pending because no AdSense account connection is available.
- Google CMP message is served based on configured account message, visitor region and consent state; presence of AdSense code does not prove the message is active.
- Updated `privacy-policy.html` with EEA/UK/Swiss consent explanation, Google CMP/TCF v2.4 details, and a clear note that the message must be published and tested before claiming it is active.

### CARD-002 / CARD-006 — AdSense tag coverage
- Initial audit found standard AdSense tag only in `index.html`.
- Added a guarded AdSense loader (client `ca-pub-2908196513377151`) to shared `site-header.js` and `install.js`. It checks for an existing tag before injecting the standard asynchronous loader into the document head; homepage's static tag is not duplicated.
- Added the static AdSense tag to the 12 sitemap pages not loading either shared helper: `social-qr-maker.html`, `days-between-dates-calculator.html`, `business-days-calculator.html`, `date-duration-calculator.html`, `number-to-words-indian.html`, `number-to-words-international.html`, `rupees-in-words.html`, `dollars-in-words.html`, `cheque-amount-in-words.html`, `hindi-number-to-words.html`, `work-hours-calculator.html`, `elapsed-time-calculator-guide.html`.
- The four legal/information pages are intentionally not wired for Auto Ads.
- This is source readiness only. It does not enable Auto ads, publish a CMP, activate ads, or verify live consent. Account settings and EEA geo testing are required.
- Before account approval or activation, review Auto Ads page exclusions for the 9 temporary noindex pages and any pages where ads are unsuitable.

### Current blocker and next steps
1. User provides read-only screenshots/export of registrar DNS records for `@` and `www`, including A/AAAA/CNAME/CAA/NS (hide account identifiers); do not send passwords or 2FA codes.
2. User verifies GitHub Settings > Pages shows `infojano.com` and Enforce HTTPS enabled.
3. In AdSense > Sites, confirm `infojano.com` site is added and current review status; select Google's CMP option and publish European regulations message.
4. In Privacy & messaging, check three-choice consent UI (Consent / Do not consent / Manage options), vendor list, privacy-policy URL and consent mode settings.
5. Test message from EEA/UK/Swiss region and verify TCF v2.4 / CMP ID 300 and Policy Center consent status.
6. Complete browser/mobile tests and update PR #233. No merge or production deploy without explicit approval.


### 2026-11-15 17:04 +05:30 — AdSense tag source verification
- Verified all 12 pages receiving static AdSense tag in their document head: social-qr-maker, days-between-dates-calculator, business-days-calculator, date-duration-calculator, number-to-words-indian, number-to-words-international, rupees-in-words, dollars-in-words, cheque-amount-in-words, hindi-number-to-words, work-hours-calculator and elapsed-time-calculator-guide.
- Verified both shared helpers (`site-header.js`, `install.js`) contain the guarded loader, publisher client ID `ca-pub-2908196513377151`, and duplicate-script detection.
- This combined with the existing homepage tag covers the 99 non-legal sitemap pages identified by source search; the four legal pages remain intentionally without ad code.
- PR #233 is still open/draft, unmerged, and GitHub currently reports it mergeable. No live deploy, AdSense account configuration or EEA geolocation test was performed.
