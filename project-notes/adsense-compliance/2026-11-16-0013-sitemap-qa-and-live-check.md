# InfoJano — sitemap QA and read-only live-check batch

- Started: 2026-11-16 00:10 +05:30
- Completed: 2026-11-16 00:13 +05:30
- Website: https://infojano.com
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: main
- Status: **Source consistency checks complete; live HTTP and account/device checks deferred**

## Completed source work
- Added Privacy Policy and Contact to the sitemap.
- Extended QA checker to validate:
  - local policy link targets and URL fragments;
  - sitemap root, URL formatting, canonical HTTPS origin and uniqueness;
  - required Privacy Policy and Contact entries;
  - each sitemap URL has a matching file in the repository;
  - robots.txt points to the canonical sitemap.
- Updated QA workflow to trigger on main and feature-branch pushes and relevant PR changes.

## Commits
- Sitemap entries: `50e55a37e8d0196ef2f0d33ecb37492b17f70fc2`
- QA checker sitemap checks: `ca4c43887b42268e6c7d263fd9f57683a8631ef7`
- Workflow main-branch triggers: `c89fbe7a6b0fc9ac11a449d28041acd8befcac84`
- Sitemap-to-repository-file check: `efc33d8638140d3c808382ac7832bb195f1440ba`
- Regex correction: `190f50bbd379f85039eccf7973ea3390c2d76cb5`

## Source checks
- Sitemap contains 110 URLs.
- No duplicate URLs found.
- Both required URLs are present:
  - https://infojano.com/privacy-policy.html
  - https://infojano.com/contact.html
- All 110 sitemap URL paths match files in the main-branch repository tree.
- robots.txt references https://infojano.com/sitemap.xml.
- Homepage source contains Privacy Policy link and the revocation anchor.
- Contact page links to Privacy Policy.
- Policy has 26 href attributes; local targets and the homepage fragment are represented in source.
- Existing successful HTML validation run #16 belongs to the pre-sitemap-check workflow version; do not use it as proof that the newest expanded checker passed.
- New main-push workflow execution could not be independently retrieved with the available GitHub workflow-run interface. The current checker/workflow source is updated, but CI PASS for the latest main commits is not claimed.

## Live HTTP attempt
Tried read-only access to:
- https://infojano.com/privacy-policy.html
- https://infojano.com/contact.html
- https://infojano.com/sitemap.xml
- https://infojano.com/ads.txt
- https://infojano.com/robots.txt

The available live web fetch could not access these URLs. Therefore HTTP status, redirects, headers, cache state, and crawler accessibility remain UNVERIFIED. User screenshots remain the evidence that Privacy Policy, Contact and homepage footer links are visible.

## Deferred to later user/account/device step
- Live Google CMP injection, privacy settings/revocation, EEA first-visit consent/reject/manage/withdraw and TCF v2.4 signal checks.
- AdSense Site status, live selected vendor list and ads.txt crawler status. Request review was already submitted; do not submit again.
- Android/Windows runtime.
- Cloudflare Worker production CORS/secrets/log retention and provider retention confirmation.
- Publisher/legal final review.

## Safety
No AdSense/CMP settings, DNS, Worker settings/secrets, app releases, or protected design changes made.
