# InfoJano — whole-site readiness audit (research-first)
Date: 2026-11-16
Repository: https://github.com/barsulkhan/InfoJano
Default branch audited: main
Audited commit: 1a0b0bed474c33d12266e7c7c1d982c0aeab780c
Status: initial inventory and representative source audit; remediation not yet complete

## 1. User direction and safety gates
The requested order is: research Google's and web-quality requirements first; audit the existing site; then prepare a coordinated remediation rather than restarting completed work.
This report records source evidence and a work plan. It does not authorize production deployment, PR merge, Search Console Request Indexing / Validate Fix, AdSense review resubmission, DNS/Cloudflare/Worker/account changes, or edits to legal/publisher facts. Keep the 18 Number-to-Words Pro and Countdown SEO URLs on the existing indexing hold. Do not edit production code directly on main; use isolated draft PRs and tests.

## 2. Research baseline (official guidance)
- Google Search Essentials: useful people-first content, crawlable links, descriptive titles/headings/link text, and technical accessibility. https://developers.google.com/search/docs/essentials
- SEO Starter Guide: original, readable, accurate, up-to-date content; sensible canonicalization; no ranking guarantees. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Helpful, reliable, people-first content: the main content may be the working interactive tool itself, but the page should demonstrate effort, originality, accuracy and a satisfying result; authorship should be truthful. https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Spam policies: avoid scaled low-value pages, doorway pages and misleading tool functionality; a page claiming to provide a tool must actually provide it. https://developers.google.com/search/docs/essentials/spam-policies
- AdSense Publisher Policies: no ads on low-value/no-publisher-content, under-construction, navigation-only or alert-only screens; avoid ads interfering with content. https://support.google.com/adsense/answer/10502938
- AdSense Program Policies: no artificial clicks/impressions or encouragement of ad clicks. https://support.google.com/publisherpolicies/answer/48182

These are evaluation criteria, not a promise of AdSense approval or search indexing.

## 3. Repository inventory and evidence
- GitHub default branch is main. Recursive Git tree at audited commit was not truncated and contains 335 files.
- Main site includes a large set of standalone calculator, image/PDF, QR, document, conversion and guide pages; also Android and desktop wrapper sources, app manifests, assets, scripts and project notes.
- Current source files checked: index.html, privacy-policy.html, contact.html, robots.txt, sitemap.xml, ads.txt, manifest.json, install.js, sw.js, image-to-pdf.html, id-card-print-studio.html, site-header.js and the existing AdSense master research plan.
- This is a representative source audit, not yet a complete per-page content, accessibility, runtime, security or live HTTP audit.

## 4. Confirmed source findings requiring remediation/reconciliation
### P0 — root PWA paths still point at legacy GitHub Pages prefix on main
- index.html links manifest at /InfoJano/manifest.json.
- main manifest.json uses id/start_url/scope /InfoJano/ and icon paths /InfoJano/...
- main install.js registers /InfoJano/sw.js with /InfoJano/ scope and loads theme.js / related-apps.js below /InfoJano/.
- main sw.js uses HOME=/InfoJano/ and precaches many /InfoJano/... paths.
- This is inconsistent with the custom-domain root deployment. Existing draft PR #237 already proposes host-aware root/PWA remediation; do not duplicate it blindly. Rebase/reconcile and test the complete patch on both https://infojano.com/ and https://barsulkhan.github.io/InfoJano/ before considering release.
- User's previously supplied Search Console evidence shows /InfoJano/ as a 404 example, but its exact referring-page evidence is still outstanding.

### P0 — privacy policy contains an explicit provisional caveat
- privacy-policy.html says it is based on a repository review, and that some third-party services, live network behavior, advertising partners and retention periods have not all been independently verified.
- It also states that the live revocation-control placement and operation have not yet been verified.
- Footer links to /#ij-privacy-revocation, but a URL fragment alone does not prove that a functioning privacy-choice control exists or reopens the CMP.
- Do not simply remove the caveat or claim compliance. First reconcile the actual deployed features, provider configuration, live CMP, data flows, legal identity/jurisdiction and confirmed retention facts. Use only publisher-confirmed legal facts.

### P1 — sitemap and URL/canonical inventory
- robots.txt allows crawling and declares https://infojano.com/sitemap.xml.
- sitemap.xml contains the root domain and privacy/contact entries, but needs a full automated comparison against eligible canonical HTML URLs, live status codes, redirects, noindex state and the existing 18-URL hold.
- Preserve prior Search Console categories and PR #238 canonical/og:url work. Do not add speculative redirects for malformed URLs or /(100) variants.

### P1 — homepage discoverability and content depth
- index.html has a broad tools-hub description and tool cards; further audit must confirm all important tools are reachable through ordinary crawlable anchors, category paths and accessible mobile navigation.
- Do not assume decorative cards or JavaScript-only controls provide crawlable links. Review the actual rendered/DOM link destinations and keyboard/screen-reader behavior.
- The site must show real working tool functionality and distinct instructions/examples/limitations, not repeated boilerplate written only to expand search pages.

### P1 — technical quality and security
- Audit every HTML page for title/description/canonical/robots, heading order, language, viewport, accessible labels, image alt text, broken internal links, duplicate boilerplate, structured data accuracy, external scripts and ad placements.
- Exercise calculator/tool behavior with representative valid, invalid, boundary and mobile inputs. Test file handling locally and verify that no claim overstates local processing or privacy.
- Review service-worker cache versioning, stale content behavior, offline fallbacks, navigation scope, CSP/security headers where hosting permits, third-party request minimization and Android WebView bridge origin restrictions.
- Do not alter legal, financial, health, identity-document or other sensitive-tool claims without factual and appropriate review.

## 5. Existing work to reuse
- PR #237: broad host-aware legacy /InfoJano/ and PWA fix. Draft, not merged/deployed; requires full diff review and two-host browser/device QA.
- PR #238: ID Card Print Studio canonical/og:url work. Draft, not merged/deployed; overlaps PR #237 in id-card-print-studio.html and must be reconciled.
- PR #239: image-resizer guide copy refinements. Draft, not merged/deployed; review originality/usefulness and avoid near-duplicate search pages.
- PR #91 historical metadata-suffix 404 fix is already merged; verify live response/recrawl rather than redo source changes.
- /Height source trace and all Search Console category evidence remain in the current handoff and linked 404/tracker reports.
- AdSense review was already submitted. Never resubmit unless Google explicitly asks and the user approves.
- Do not submit the 18 held Number-to-Words Pro / Countdown URLs.

## 6. Coordinated work plan
1. Finish requirements matrix: page types (homepage, tool, guide, policy, contact, app wrapper), Google Search/AdSense, accessibility, privacy, performance, security, content quality and acceptance tests.
2. Inventory every HTML page and sitemap entry; classify indexable, canonical target, utility, supporting guide, policy, noindex/retire candidate. Flag thin/duplicate pages for editorial decisions rather than mass-generating copy.
3. Review all open PR diffs against current main; reconcile #237/#238 overlap and branch divergence. Avoid duplicate changes.
4. Prepare small thematic draft PRs: root/PWA; canonical/404; page metadata/navigation/accessibility; privacy/CMP only after verified facts; tool correctness/performance/security; content improvements only where original value can be added.
5. Run automated static checks and available CI; add browser/runtime tests for key tools and PWA on custom domain and GitHub Pages. Clearly label tests not possible in this environment.
6. Reconcile live HTTP/redirect/robots/sitemap/ads.txt and live CMP/TCF/ad placement with user-provided browser/account evidence. Source inspection is not live verification.
7. Publish an acceptance matrix and change log in GitHub. Request separate user approval for merge, deployment, Google indexing/validation, and any account/legal/hosting changes.

## 7. Immediate next audit tasks
- Retrieve complete HTML inventory from the 335-file tree; compute sitemap vs repository vs canonical discrepancies.
- Review all 3 existing PR diffs and current branch divergence before choosing patch strategy.
- Sample and then systematically audit every page family for unique, useful instructions and actual tool functionality.
- Ask the user only for missing evidence that cannot be obtained from source: Search Console URL inspection details for /InfoJano/, /(100), /(100)^ and two crawled-not-indexed examples; live CMP/revocation and AdSense status screens when necessary.

## 8. Current status
- Requirements research baseline: recorded.
- Main branch file inventory: complete (335 files).
- Representative source review: started; confirmed P0 PWA prefix inconsistency and provisional privacy-policy/live CMP verification gaps.
- Full 335-file audit: not complete.
- Coordinated code remediation: not yet started; existing PRs must be reconciled first.
- Merge/deploy/Google validation: not authorized and not performed.


## 9. Expanded static HTML + sitemap audit — 2026-11-16
A source-level inspection was performed across all 117 HTML files in the recursive Git tree at main. This checks raw HTML only; it is not rendered-browser, live HTTP, accessibility automation or functional QA.

### Metadata and heading exceptions found
- Most public content/tool pages inspected have a title, meta description, self-referencing custom-domain canonical, one H1, and a declared HTML language.
- `savings.html` has two H1 elements: the visual hero H1 (“Free Savings Calculator for Your Future”) and the calculator card title (“Savings Calculator - Estimate Future Savings”). A minimal draft-only correction was prepared in PR #240: the second heading becomes H2, preserving its text. Static count verified 2 → 1 H1. Browser visual/heading-outline test remains required.
- `404.html` intentionally has no canonical and declares noindex,follow; this is expected for the not-found template.
- `google4a4795e5c7c03eae.html` is a Google verification token file, not a content page; missing title/description/H1/canonical is expected.
- `word-to-jpg.html`, `word-to-pdf.html`, and `word-to-png.html` are intentionally noindex aliases with canonical to `word-converter.html`; however, their redirect, manifest, icon and install helper paths on main still use legacy `/InfoJano/`. PR #237 changes these paths to relative paths, but live two-host testing remains outstanding.
- `backups/InfoJano-Ayushman-VoterID-FINAL-LOCKED-2026-10-19.html` is under backups and has a legacy GitHub Pages canonical. Keep it out of public navigation/sitemap; assess hosting exposure and whether the backup directory should be excluded from Pages publishing without deleting the preserved backup.
- `savings.html` also has a separate finance disclaimer in its description (“illustrative, not guaranteed”); preserve accurate financial limitations.

### Sitemap reconciliation
- Main `sitemap.xml` has 110 unique URL entries; all 110 map to existing HTML files in the repository tree.
- No duplicate sitemap entries or sitemap URLs missing from the repository were found.
- `countdown-studio.html` is the only ordinary HTML page identified as absent from the sitemap while its source declares index,follow and a self-referencing canonical. Decide whether it is intentionally excluded; if it should be indexable, add it in a dedicated sitemap change after checking live HTTP and content eligibility. Do not include the 18 held Number-to-Words Pro / Countdown SEO pages in any indexing request; this hold remains.

### Additional confirmed main-branch issues
- `id-card-print-studio.html` still has canonical `https://infojano.com/id-card-print-studio.html` but og:url points to `https://barsulkhan.github.io/InfoJano/id-card-print-studio.html`. PR #238 contains the intended og:url correction but overlaps PR #237 on this file; reconcile rather than create a duplicate patch.
- The three Word format alias pages described above prove PR #237 fixes a real custom-domain path defect in those aliases; this supports further review of PR #237's broader host-aware path work.
- `countdown-studio.html` uses an indexable canonical URL but is omitted from the sitemap. No change made pending editorial/indexing intent confirmation.

### PR #240
- Draft PR: https://github.com/barsulkhan/InfoJano/pull/240
- Branch: `fix/savings-heading-hierarchy-2026-11-16`
- One-file, one-line semantic heading correction. Draft, unmerged, undeployed.
- GitHub currently reported `mergeable=false` at creation; investigate branch/merge status before any approval.

### Existing PR overlap check
- #237 changes 89 files; #238 changes 2; #239 changes 6.
- The only overlap among these three is `id-card-print-studio.html` between #237 and #238.
- #239 overlaps neither #237 nor #238.
- #237 branch source was sampled: the three Word aliases switch from absolute `/InfoJano/` redirects to relative `./` paths. This is a positive static finding, not a full validation of the 89-file PR.

## 10. Priority actions for the next work block
1. Inspect why PR #240 currently reports mergeable=false; verify it is a simple branch-state conflict and keep it draft.
2. Reconcile PR #237 and #238 into a clean review plan for their shared ID Card file; do not merge either automatically.
3. Complete a focused audit of the 18 held pages' substantive uniqueness/content quality without submitting them to Google.
4. Verify whether Countdown Studio is intentionally excluded from sitemap.
5. Prepare Image-to-PDF /Height regression harness and only then consider a minimal mitigation branch.
6. Continue checking tool behavior, privacy disclosures, CMP/revocation, ads.txt HTTP and redirect evidence. Live/account tests require actual browser/owner evidence.


### PR #240 branch refresh
The first PR metadata snapshot reported `mergeable=false` because main advanced with documentation commits after the branch was created. The branch was safely rebuilt on the latest main commit using a one-file tree update (no production file touched): current comparison is `ahead`, 1 commit ahead / 0 behind, changing only `savings.html`. GitHub PR metadata may take time to refresh; browser QA is still required.

- PR #240 CI run #43861117912 completed successfully. Its only job is `validate`, which validates Privacy Policy HTML5 markup, policy links, sitemap and robots reference. This is not a dedicated heading/accessibility/browser visual test.


### Latest PR branch comparison refresh
Compared against current main after audit documentation commits:
- PR #237: diverged, 105 ahead / 34 behind, 89 changed files.
- PR #238: diverged, 3 ahead / 28 behind, 2 changed files.
- PR #239: diverged, 6 ahead / 27 behind, 6 changed files.
- PR #240 compare remains 1 ahead / 0 behind with only `savings.html` changed, but GitHub PR metadata still reports `mergeable=false`; do not infer it is safe to merge until GitHub refreshes and required checks/review pass.
