# InfoJano — Global Footer, Contact & Privacy QA Tracker

Last updated: 2026-11-18 (APK manifest corrected; global CMP loader and hero selector updated)
Repository: https://github.com/barsulkhan/InfoJano
Live site: https://infojano.com/
Primary PR: https://github.com/barsulkhan/InfoJano/pull/251 (merged)

এই tracker-এ এই কাজের প্রতিটি ধাপ, প্রমাণ, অসম্পূর্ণতা এবং পরবর্তী পদক্ষেপ রাখা হবে। কাজ শেষ না হওয়া পর্যন্ত status পরিবর্তন করে Completed বলা যাবে না।

## User requirements
- User clarified that the entire footer shown in the homepage screenshot—not only navigation links—must appear identically on every public page and every tool page: brand line “InfoJano • Global Everyday Utility Portal”, tagline “Privacy-minded • Mobile-first • Built for everyone”, Portuguese links for discount and percentage calculators, plus Home / All Tools / Privacy Policy / Contact / Privacy and cookie settings.
- একই shared footer সব public pages-এ থাকতে হবে, শুধু homepage-এ নয়।
- Footer links: Home, All Tools, Privacy Policy, Contact, Privacy and cookie settings.
- Contact email: infojanowebsite@gmail.com.
- Contact page visual: user-approved illustrated layout (no large website logo); blue envelope/chat bubbles/support headset illustration, readable email support and helpful links.
- প্রতিটি কাজের শেষে এই tracker এবং প্রয়োজনে সংশ্লিষ্ট QA log আপডেট করতে হবে।
- Source validation, browser visual QA, deployment এবং Google CMP runtime verification আলাদা করে রিপোর্ট করতে হবে।
- User permission ছাড়া merge/deploy করা যাবে না; PR #251 merge-এর জন্য user permission দিয়েছেন।

## Completed and verified
- [x] PR #251 merged into main. Merge commit: 1b5a5aab1a59a63a92f347b2b6237f16f7f635f1.
- [x] Global Footer QA passed after merge: run 44292491829.
- [x] GitHub Pages deployment passed for merge commit: run 44292490789.
- [x] Contact page updated to user-approved illustration layout. User explicitly said: “খুব সুন্দর হয়েছে”.
- [x] Added `contact-support.svg` (illustrated envelope, message, chat bubbles and headset): commit db4780c1f76c95f247e650cca4cfe441c65a8b12.
- [x] Updated `contact.html` to use `contact-support.svg`, retain email support and helpful links: commit 675a0523161d8cfa35706aa7c2e677203177ebd8.
- [x] Contact page deployment passed: Pages run 44293264197 for commit 675a0523161d8cfa35706aa7c2e677203177ebd8.
- [x] Global Footer QA passed again after Contact visual update: run 44293264383.
- [x] User visually approved the Contact page design.
- [x] Repository source check found 114 root public HTML pages (excluding homepage and Google verification file); global footer validator is configured to check all root public HTML pages.
- [x] Contact and Privacy Policy files exist on main and include shared footer loader.
- [x] Investigated APK workflow failure (run 44293264370): validation was treating Contact and Privacy Policy as APK tool pages and requiring them to be listed in the tool service-worker cache. They are informational/legal pages, not installable tool pages.
- [x] Attempted APK validation exclusion for `contact.html` and `privacy-policy.html` (commit f99c38c3a850511ffac857a97d8d5cb74d44db37), but the rerun still failed at the same validation step. Therefore this was not the complete root cause; investigate the exact failing assertion before further changes.

## Current status — 2026-11-18

### Shared footer
Status: **Complete shared footer deployed; source QA passed; live page-by-page visual verification pending**
- Previous implementation only injected the navigation links. It did not standardize the InfoJano brand line, tagline or Portuguese links on every page; user screenshots exposed this gap.
- Updated `site-footer.js` to build the complete shared footer intro, Portuguese links, and all navigation links on every page; it reuses existing homepage intro/language markup to avoid duplication.
- Updated `scripts/validate-global-footer.mjs` to check the shared brand/tagline/Portuguese link content as well as navigation and CMP callback.
- Bumped service worker cache to v328.
- Implementation commit: `9b8e0cb8607f3e4582e2bea9b2ae737bfe60b2cb`; validator commit: `f45c5385110f8d28f6605b0437049eb2b46d529b`; SW cache commit: `08a631be114f1e14c842013a9d9daae4bb5725ac`.
- Global Footer QA on implementation commit passed: run `44295019882`; validator was further strengthened afterward, so confirm a run for the latest commit.
- Latest Pages deployment completed successfully: run `44295080078` on commit `5e26c0ce2efeced724bbe7d542ad4d96fe027967`; build, artifact upload and deploy all passed. This includes the shared footer implementation and v328 cache change.
- The earlier Pages run `44295048969` shown as Cancelled was superseded by a newer Pages run; the later run `44295080078` succeeded. This cancellation is not a site build failure.
- Global Footer QA run `44295049154` passed on the implementation/cache commit `08a631be114f1e14c842013a9d9daae4bb5725ac`.
- Root HTML coverage should be re-counted by validator; backup HTML under `backups/` is not a public tool page.
- Need a real browser/device pass to confirm actual footer rendering, spacing, link destinations and no duplicate footer on representative pages and edge pages.

### Contact page
Status: **Implemented, deployed, user visual approval received**
- Illustration asset: `contact-support.svg`.
- Contact email: infojanowebsite@gmail.com.
- Need browser click QA for mailto link and Home/Privacy Policy links; user visual approval is not a full browser QA pass.

### Privacy Policy
Status: **Present and deployed; content/legal and navigation QA pending**
- Verify relative links, mailto, policy sections, footer and settings link.
- Do not represent this as legal advice or certify legal compliance.

### Privacy and Cookie Settings / Google CMP
Status: **Global AdSense loader added to shared footer; QA passed; live CMP dialog test pending**
- User provided screenshots confirming footer links appear on homepage, but Privacy and cookie settings displays the fallback warning when clicked.
- Root cause in prior code: it directly invoked `googlefc.showRevocationMessage()` instead of invoking the method through Google's supported `googlefc.callbackQueue`.
- Also prior implementation showed a direct action only on homepage and linked other pages back to homepage; user requires the entrypoint on every page.
- Updated `site-footer.js` so every page renders the settings link and uses `CONSENT_API_READY` then `callbackQueue.push(showRevocationMessage)`; it shows a timeout/error message only if CMP never becomes ready.
- Updated validator to require callbackQueue invocation and all-page binding.
- Bumped service worker cache from v326 to v327.
- Commits: `80776d15ab2984c6c475554278ce7fc5ab3464a0` (footer behavior), `8c20dd6df7d3e9a251cdc8e9276b81471c5d5574` (validator), `cef5a3872374370e79873072b03c242957ff8d72` (SW cache).
- Google docs confirm only supported invocation is through callbackQueue; see https://developers.google.com/funding-choices/fc-api-docs and https://support.google.com/admanager/answer/10114217.
- Latest Global Footer QA passed: run `44294497068` on commit `57e8b0b5b39c0ace4661c84933d0dffbe3454c51`.
- Latest Pages deployment passed: run `44294523708` on commit `b7a731ecad42efb06a3ea8340bac465f5e2c14da`; build, upload and deploy steps all succeeded.
- The tracker update itself is a documentation-only commit after that deployment; no site code changed after the deployed footer fix.
- New finding: homepage alone contained the AdSense loader; tool pages did not load adsbygoogle.js, so the Google googlefc API could remain unavailable there. Shared site-footer.js now injects the AdSense loader on every page (with duplicate detection), initializes googlefc.callbackQueue, and queues showRevocationMessage under CONSENT_API_READY.
- Updated Global Footer validator to assert the sitewide AdSense loader and callback behavior. QA run 44296350935 passed.
- Bumped Service Worker cache to v329.
- Runtime behavior is not yet confirmed: user must test the live settings link on homepage and one tool page in a clean browser. If fallback persists, investigate script load/network blocking and AdSense site/message configuration; do not claim resolved before user retest.
- All pages now render the settings entry and invoke Google revocation UI through callbackQueue.
- If CMP is not ready, a visible status/fallback message is shown.
- Must test on live site with CMP API ready and not ready; confirm revocation dialog actually opens.
- AdSense account screenshots previously showed European message published, 199 common ad partners, legitimate-interest controls on, Consent Mode advertising purposes off, Special Feature 2 off, no custom purposes; US State Regulations message published with supported states selected and opt-out enabled; 344 active ad partners selected.
- Do not change AdSense settings blindly. Verify Google CMP/GPP/Consent Mode runtime signals and current Google documentation before recommending any toggle.

### APK workflow
Status: **QR Maker manifest corrected; validation/build in progress**
- Previous failure: run 44293264370, step “Validate tool icons, manifests, and APK matrix”.
- Root cause: Contact and Privacy Policy are not installable tool pages and are not in the APK service-worker tool cache, but the validator treated every root HTML file as an APK tool page.
- Attempted fix commit: f99c38c3a850511ffac857a97d8d5cb74d44db37.
- Latest run `44295049073` failed at “Validate tool icons, manifests, and APK matrix”. Exact assertion from job log: `AssertionError: Wrong start_url: app-manifests/qr-maker.webmanifest`.
- This is a manifest configuration mismatch, not the footer change and not a cancellation. The APK build/package/artifact/release steps were skipped because validation stopped first.
- Next: inspect QR Maker manifest and the validator's expected `start_url` convention, then correct the source manifest (not weaken the validator) and rerun.
- Root cause is not confirmed. Do not claim the Contact/Privacy exclusion fixed the failure. Inspect exact validator output/logs or reproduce each assertion locally before changing the workflow again.

## Remaining checklist
- [x] Confirm Pages deployment after Privacy Settings fix: run 44294523708 succeeded; Global Footer QA run 44294497068 passed.
- [ ] Fix the confirmed QR Maker manifest `start_url` mismatch in `app-manifests/qr-maker.webmanifest` and rerun APK validation/build.
- [ ] After validator passes, complete APK build, count, artifact and release verification.
- [ ] Confirm Global Footer QA passes on latest commit `08a631be114f1e14c842013a9d9daae4bb5725ac`.
- [x] Confirm Pages deployment: run `44295080078` succeeded.
- [ ] Live visual verification across representative pages and tool pages.
- [ ] Browser QA: homepage footer on desktop and mobile.
- [ ] Browser QA: representative calculator, converter, image tool, QR tool, SEO/guide page, 404 page, Contact and Privacy Policy.
- [ ] Confirm no duplicate footer/header and correct root paths on infojano.com and GitHub Pages path where relevant.
- [ ] Click-test Home, All Tools, Privacy Policy, Contact and email mailto links.
- [ ] Test Cookie Settings with Google CMP API ready; verify revocation UI appears.
- [ ] User/browser test settings link on homepage and representative tool page after deployment; verify dialog opens.
- [ ] Test CMP-not-ready fallback and callback behavior.
- [ ] Verify EEA/UK consent and US state privacy signals (including GPP/opt-out) in browser runtime; record evidence and do not change account settings without reason.
- [ ] Review consent mode/ad tag behavior against current official Google documentation.
- [ ] Final QA summary with completed/failed/not-run evidence.
- [ ] No additional merge/deploy without explicit user permission for future changes.

## Latest verification
- Global Footer QA after global AdSense loader + hero selector validation: run 44296350935 — success.
- QR Maker manifest correction Pages deployment: run 44296054034 — success.
- APK rerun: 44296359270 — in progress at last check.
- Complete shared footer QA: run `44295049154` — success.
- GitHub Pages deployment: run `44295080078` — success.
- APK validation: run `44295049073` — failed on exact assertion `Wrong start_url: app-manifests/qr-maker.webmanifest`; investigate/fix.
- Complete shared footer QA on initial implementation: run `44295019882` — success. Latest validator/cache commits are newer and need their own verification.
- Global Footer QA: `44294497068` — success.
- GitHub Pages deployment: `44294523708` — success.
- Deployment includes shared Footer privacy settings callback fix, SW cache v327 and validator correction.

## Latest commits
- `1b5a5aab1a59a63a92f347b2b6237f16f7f635f1` — merge PR #251.
- `db4780c1f76c95f247e650cca4cfe441c65a8b12` — add contact support illustration.
- `675a0523161d8cfa35706aa7c2e677203177ebd8` — update Contact page illustration.
- `f99c38c3a850511ffac857a97d8d5cb74d44db37` — exclude non-tool legal/contact pages from APK validation matrix.

## Next concrete action
Fix QR Maker manifest `start_url` mismatch from run `44295049073`; do not weaken validation. Pages build for `f99c38c3` completed its build stage, but deployment job was cancelled after a newer commit. Complete shared footer content (brand, tagline, Portuguese links, navigation) has now been implemented for every page; verify QA and Pages deployment for latest commit `08a631be114f1e14c842013a9d9daae4bb5725ac`. Also continue the CMP live runtime test after commit `57e8b0b5b39c0ace4661c84933d0dffbe3454c51` and wait for v327 Pages deployment, then test CMP runtime. Continue investigating APK validator failure and browser/runtime QA, updating this file after each meaningful task.
