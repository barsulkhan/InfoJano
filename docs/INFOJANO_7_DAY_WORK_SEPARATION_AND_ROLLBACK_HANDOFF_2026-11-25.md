# InfoJano — 7-Day Work Separation & Rollback Handoff
Date: 2026-11-25
Repository: https://github.com/barsulkhan/InfoJano
Live site: https://infojano.com/

## Purpose
This handoff separates user-directed work from later technical changes and identifies suspect Header/Hero changes for a careful rollback. Do not blindly reset the repository or revert all commits.

## User's current instruction
Review approximately 2026-11-19 through 2026-11-25. Preserve the user's requested work separately, identify assistant-introduced code changes, and restore unwanted changes—especially Header/Hero—without damaging approved tool logic. Prepare a clean new chat from this file.

## A. User-directed requirements / work to preserve
1. InfoJano is the only project in this handoff.
2. User requested keyword/SEO research and application. Prior chat records a tip-calculator keyword update merged in PR #346: relevant keywords, metadata, intro, FAQ, examples, unequal splitting, and tax-before/after-tip content. Country search-volume/KD validation remained incomplete.
3. User requested an InfoJano-only new chat and initially limited that chat to file inspection, discussion and research only—no new code changes, features, PR merges or deployment until explicitly authorized.
4. ID Card Print Studio: Voter front card must remain 85 × 55 mm. Border line itself is the boundary; remove excess left/right/top gap. Back side and all other cards must remain unchanged. Do not auto-crop or alter original Voter PDF/JPG without explicit instruction.
5. Latest request: separate last-seven-day work; identify assistant-made code changes; restore unwanted changes, particularly Header/Hero, without damaging completed user work.
6. Design preferences: clean/light white background, navy text; avoid unrequested changes on other pages.

## B. Recent repository work to preserve pending review
- Search Console URL inspection batches 2–7 recorded on 25-Nov. Batch 7 commit d618684591b6de0bb6fa6beffcf511cb16e46d8f; Read Hub save 58d2cbda91a0b80e3ce7e8735a4d0d87c013abb5. Respect the user's maximum of 10 URLs per indexing batch.
- PWA manifest audit: 29 manifest paths recorded in eb3cc76cd5382aa2227ee1688b5589da108175e7; Read Hub save 331679b11bdd06eca31d1c333faefc2d92110307.
- Service Worker asset audit: missing asset path recorded in 973d344aa1b7566727c02f7c4399b9c0f463c978; Read Hub save be37ba1716311f07771bd86c529481a0c33b8a94. Earlier work verified 169 cache entries.
- Backend readiness, deployment prerequisites and origin mismatch: 2b9f81f044bb1c4984c47ac19da30333a0464338; Read Hub save 4839fcf1915c653cd02d79ad112a42119bf20f9b. Backend deployment is not complete until origin/config issue is resolved.
- Playwright/browser QA gaps: 0897b037b8b9382f27332e03f47527c1927749c8; Read Hub save d56fa5e2f5a07b2a6afa251290deead057203382.
- Live site QA spot-check: d374a8d8d8b77ce01b4061f895d383e6bcc0ba90; Read Hub save d5f6e92abe284ea089d8fdd8b4243f74c13aaaf4.
- Search Console canonical discrepancy triage: 14f6f991f6f9d398007c846ebc2b1fbb24199f3a; Read Hub save d1ad1c7a94777e2be9ffcd89259d2d34fe0aab2c.
- Homepage and priority URL inspection: d763432b529660730c1048fd0836320298fcf042; Read Hub save 7fa01ba6026e2ea12661d98a667ecdaff2dfbdc2. Apex homepage indexed and canonical agrees; www redirects to apex. Some Search Console canonical mismatches are stale 11-Nov crawls; wait for recrawl before editing canonical tags.
- SEO metadata refinements/repairs around QR pages and other landing pages on 24-Nov. Preserve good repairs, but inspect the regression noted in section C.
- Social QR stray-text removal: 9587729288070ac829e321c95d55af24f55d9422 removes stray text from social-qr-maker.html; preserve.
- Custom-domain asset path correction: 14871b9d83276d319cb2bee11ada9635f1be4d6a changes script path from /InfoJano/site-header.js to /site-header.js in google-maps-location-qr-code-generator.html; preserve pending host test.
- Custom-domain internal navigation fixes were also made around 24-Nov; preserve pending verification.
- Loan Affordability Calculator was discussed as a feature concept on 20-Nov, explicitly not Password Generator. It was a plan, not proof of completed implementation.
- Preserve ID Card Studio tool logic and Voter ID/PDF export improvements while adjusting only the requested layout.

## C. Suspect changes requiring forensic diff review
Git commits are authored under the user's GitHub identity, so commit author metadata alone cannot prove who initiated a change. Use conversation approvals and exact diffs. Do not label every 24-Nov commit as assistant-made without evidence.

### Header/Hero
- 25-Nov rollback commit: 07a4f4c16455469f9edff0942db7833a9b15b946.
- This commit changed only id-card-print-studio.html; it did NOT globally restore all pages.
- Its diff adds a large block of .ij-reference-hero / .ij-reference-grid / .ij-id-hero-art CSS and page-scoped .ij-global-header overrides, while removing earlier sizing and a logo override. This may not actually be the intended 23-Nov baseline. Compare the full file with commit f82306c9a7b0cf5cf5583b5ffbda84f91161d7a0 before claiming restoration is correct.
- Backup branch: backup/pre-header-hero-rollback-2026-11-25 at pre-rollback HEAD 7fa01ba6026e2ea12661d98a667ecdaff2dfbdc2.
- Staging branch: restore/header-hero-to-2026-11-23.
- Shared site-header.js was not changed by 07a4f4c; earlier notes say its last known commit was 21-Nov. It applies global hero styling and may create inconsistent/duplicate headers when pages also contain custom headers. Audit this file and all pages that load it before any site-wide rollback.
- Potential conflict audit list: pdf-to-jpg.html, percentage.html, bmi.html, image-resizer.html, business-days-calculator.html, date-duration-calculator.html, days-between-dates-calculator.html, SEO landing pages, and hindi-number-to-words.html. This is an audit list, not proof every page is broken.
- User's 24-Nov constraint was no code changes/features/PR merges/deployments during file review and do not change ID Card Studio. The later explicit rollback request supersedes that for the requested rollback only.

### SEO regression
- Commit 78ff6b235d62fa8737b72352d0f3c314a4a2146d changed qr-choice.html by replacing its meta description tag with plain text. This is a malformed regression in the recorded diff; check current main before editing.
- Commit 9587729288070ac829e321c95d55af24f55d9422 removes stray text from social-qr-maker.html and should be preserved.
- Multiple 24-Nov SEO metadata commits exist; inspect diffs as a group, do not wholesale revert them.

### ID Card Studio rollback uncertainty
- Earlier assistant claimed the 23-Nov Header/Hero layout had been restored, but the commit diff shows substantial CSS additions/removals. That claim is not sufficiently verified.
- Reconstruct from the exact 23-Nov commit and preserve later tool logic. Successful deployment does not prove correct visual output.

## D. Branches / PR status
- Backup branch: backup/pre-header-hero-rollback-2026-11-25
- Staging branch: restore/header-hero-to-2026-11-23
- PR #1 security/shortlink-url-validation-tests remains Draft/Open/Unmerged; branch commit 262e8b86fb6c2a84f142f4f4d42265c8382ff218. Cloudflare preview build failed. Do not merge/deploy without explicit approval.
- Do not delete backups or branches.

## E. New-chat next steps — audit first
1. Read this handoff and inspect main plus all commits from 19–25 Nov.
2. Locate the actual current Read Hub path; fetching docs/InfoJano_READ_HUB_MASTER_HANDOFF_2026-11-13.md returned 404. Do not assume that path exists.
3. Build a chronological commit/file inventory and classify each as user-requested/approved, assistant-proposed and user-approved, assistant-initiated/approval unclear, or documentation-only.
4. Compare suspicious Header/Hero files against the exact 23-Nov baseline, including site-header.js and every page loading it.
5. Prepare exact file/hunk rollback plan; do not reset main or revert broad commits.
6. Execute only clearly identified unwanted assistant-introduced Header/Hero hunks, preserving unrelated code. If provenance is ambiguous, report the uncertainty instead of guessing.
7. Run syntax, path, duplicate-header, responsive and browser QA. Do not claim visual verification from CI alone.
8. Deploy only if separately authorized after QA.

## F. Status snapshot
- Latest known main commit: 07a4f4c16455469f9edff0942db7833a9b15b946.
- Pre-rollback main commit: 7fa01ba6026e2ea12661d98a667ecdaff2dfbdc2.
- Deployment run previously reported successful: https://github.com/barsulkhan/InfoJano/actions/runs/45629908007
- Live site: https://infojano.com/
- User reports the visual task did not work. Header/Hero remains unresolved.
- No site-wide Header/Hero rollback has been completed; only the ID Card Studio page was changed by the last rollback commit.