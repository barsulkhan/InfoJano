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
