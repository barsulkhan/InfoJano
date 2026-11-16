# 2026-11-16 08:12 +05:30 — Full-page privacy link coverage and PWA cache QA

## Scope
Continue autonomous source-only InfoJano work after the user supplied six more mobile screenshots and asked to proceed with remaining work.

## Root-page inventory
- Repository contains 116 root HTML files.
- The privacy-link coverage checker now checks 115 user-facing root HTML pages (the Google Search Console verification file is excluded).
- Each checked page must either contain both direct Privacy Policy and Contact links or load the shared `site-header.js`, which conditionally adds the links when the page lacks a policy link.
- CI output: `Checked 26 policy hrefs, 115 root HTML pages and 110 sitemap URLs; page link coverage, local targets, fragments, required sitemap entries and robots sitemap reference are valid.`

## Source changes
1. Added direct Privacy Policy and Contact links to standalone pages not loading the shared header:
   - `404.html`
   - `increase-decrease-by-percentage-calculator.html`
   - `original-price-before-discount-calculator.html`
   - `repeated-percentage-change-calculator.html`
   - `successive-percentage-change-calculator.html`
2. Added both links to the existing footer of `elapsed-time-calculator-guide.html`.
3. Added Contact beside the existing Privacy link in `work-hours-calculator.html`.
4. Expanded `scripts/validate-privacy-policy-links.mjs` to check policy/contact link coverage across all 115 user-facing root HTML files, in addition to local href/fragment, sitemap and robots checks.
5. Updated `.github/workflows/privacy-policy-qa.yml` so root HTML changes and shared-header changes trigger the QA workflow.
6. Updated `sw.js` to precache `privacy-policy.html` and `contact.html`, and bumped the cache name from `infojano-v310` to `infojano-v311`.

## Commits
- 404 page: `344f741fd1a2a621701f7e3e7ce6880f083ed7c3`
- Increase/decrease page: `d1f33b2269b956989cbb36c08e6c86e063d97129`
- Original price page: `874d18b79e53fd026c9e709c70469f6892411a40`
- Repeated percentage page: `f828ac2d23b487d0980c7cf0551169b6818a0cb6`
- Successive percentage page: `ab8315fda3556fe203f3aae7c5b960a0e04fe637`
- Elapsed time guide: `87bbb19966ca47e3e557277fb229aab33c1a16a9`
- Work Hours Contact link: `7b0ef8169e2d77f351b09a87be32ab2e7a0d9b8d`
- All-page validator: `2f22c07a16d8bea4319c1893e6e3713ec48542e9`
- Workflow trigger update: `bb9cbdfa3a49795bd37f5e8132d884b7ac07e596`
- Regex correction: `c79b1bed5b30390b70be0ffa1081599adc3319b2`
- PWA cache fix: `947f399eb900ca05fe4f068bd98bb8cf5746bda7`

## Validation
- Privacy Policy QA run `43794141231`: SUCCESS. HTML validation passed. Link checker confirmed 115 root pages, 26 policy hrefs and 110 sitemap URLs; local targets, fragments, required sitemap entries and robots sitemap reference passed.
- A separate APK validation run on commit `7b0ef8169e2d77f351b09a87be32ab2e7a0d9b8d` failed because the service-worker cache list omitted `contact.html`. The log showed this exact assertion; the failure was not caused by a calculator source change.
- Added Contact and Privacy Policy to the service-worker cache and bumped cache version. APK build run `43794247117` for the fix commit is still running at report time; do not claim it passed until complete.
- GitHub Pages deployment for fix commit `947f399eb900ca05fe4f068bd98bb8cf5746bda7` is pending at report time.
- Live custom-domain HTTP/browser visual verification is still not independently available. User-provided screenshots show the before-state; no new after-state screenshots have been supplied.

## Boundaries
No AdSense/CMP account settings, DNS, Worker secrets/configuration, production secrets, legal policy wording, or app releases were changed. No APK was published or released by this task.
