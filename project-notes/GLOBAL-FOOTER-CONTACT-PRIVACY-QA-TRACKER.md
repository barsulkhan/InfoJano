# InfoJano — Global Footer, Contact & Privacy QA Tracker

Last updated: 2026-11-18
Repository: https://github.com/barsulkhan/InfoJano
Live site: https://infojano.com/
Primary PR: https://github.com/barsulkhan/InfoJano/pull/251 (merged)

এই tracker-এ এই কাজের প্রতিটি ধাপ, প্রমাণ, অসম্পূর্ণতা এবং পরবর্তী পদক্ষেপ রাখা হবে। কাজ শেষ না হওয়া পর্যন্ত status পরিবর্তন করে Completed বলা যাবে না।

## User requirements
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
Status: **Source/CI verified; live visual and link-click QA pending**
- Footer loader and labels validated by Global Footer QA.
- 114 root public HTML pages are in the source coverage set.
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
Status: **All-page callback fix committed; CI/runtime verification pending**
- User provided screenshots confirming footer links appear on homepage, but Privacy and cookie settings displays the fallback warning when clicked.
- Root cause in prior code: it directly invoked `googlefc.showRevocationMessage()` instead of invoking the method through Google's supported `googlefc.callbackQueue`.
- Also prior implementation showed a direct action only on homepage and linked other pages back to homepage; user requires the entrypoint on every page.
- Updated `site-footer.js` so every page renders the settings link and uses `CONSENT_API_READY` then `callbackQueue.push(showRevocationMessage)`; it shows a timeout/error message only if CMP never becomes ready.
- Updated validator to require callbackQueue invocation and all-page binding.
- Bumped service worker cache from v326 to v327.
- Commits: `80776d15ab2984c6c475554278ce7fc5ab3464a0` (footer behavior), `8c20dd6df7d3e9a251cdc8e9276b81471c5d5574` (validator), `cef5a3872374370e79873072b03c242957ff8d72` (SW cache).
- Google docs confirm only supported invocation is through callbackQueue; see https://developers.google.com/funding-choices/fc-api-docs and https://support.google.com/admanager/answer/10114217.
- QA run `44294422362` failed only because validator expected literal `googlefc.showRevocationMessage` while implementation correctly uses `current.showRevocationMessage` inside the callback queue. Validator expectation fixed in commit `57e8b0b5b39c0ace4661c84933d0dffbe3454c51`; await next QA run before marking passed.
- Runtime behavior is not yet confirmed: AdSense tag must load and CMP must be available; test on live site and in clean browser. If fallback persists after deployment, investigate script load/network blocking and AdSense site/message configuration; do not claim resolved before user retest.
- Homepage footer invokes `googlefc.showRevocationMessage()` when available.
- If CMP is not ready, visible fallback is shown and callback queued.
- Non-home pages link back to homepage settings anchor.
- Must test on live site with CMP API ready and not ready; confirm revocation dialog actually opens.
- AdSense account screenshots previously showed European message published, 199 common ad partners, legitimate-interest controls on, Consent Mode advertising purposes off, Special Feature 2 off, no custom purposes; US State Regulations message published with supported states selected and opt-out enabled; 344 active ad partners selected.
- Do not change AdSense settings blindly. Verify Google CMP/GPP/Consent Mode runtime signals and current Google documentation before recommending any toggle.

### APK workflow
Status: **Blocked — validation still failing; root cause investigation required**
- Previous failure: run 44293264370, step “Validate tool icons, manifests, and APK matrix”.
- Root cause: Contact and Privacy Policy are not installable tool pages and are not in the APK service-worker tool cache, but the validator treated every root HTML file as an APK tool page.
- Attempted fix commit: f99c38c3a850511ffac857a97d8d5cb74d44db37.
- Rerun: 44293738380; step “Validate tool icons, manifests, and APK matrix” still failed. APK build/package/artifact/release steps skipped.
- Root cause is not confirmed. Do not claim the Contact/Privacy exclusion fixed the failure. Inspect exact validator output/logs or reproduce each assertion locally before changing the workflow again.

## Remaining checklist
- [ ] Confirm deployment/run state after commit f99c38c3a850511ffac857a97d8d5cb74d44db37; ensure workflow changes did not affect Pages.
- [ ] Investigate why APK validator still fails in run 44293738380; reproduce every assertion and fix only the confirmed failing condition.
- [ ] After validator passes, complete APK build, count, artifact and release verification.
- [ ] Browser QA: homepage footer on desktop and mobile.
- [ ] Browser QA: representative calculator, converter, image tool, QR tool, SEO/guide page, 404 page, Contact and Privacy Policy.
- [ ] Confirm no duplicate footer/header and correct root paths on infojano.com and GitHub Pages path where relevant.
- [ ] Click-test Home, All Tools, Privacy Policy, Contact and email mailto links.
- [ ] Test Cookie Settings with Google CMP API ready; verify revocation UI appears.
- [ ] After v327 deployment, user/browser test settings link on homepage and representative tool page; verify dialog opens.
- [ ] Test CMP-not-ready fallback and callback behavior.
- [ ] Verify EEA/UK consent and US state privacy signals (including GPP/opt-out) in browser runtime; record evidence and do not change account settings without reason.
- [ ] Review consent mode/ad tag behavior against current official Google documentation.
- [ ] Final QA summary with completed/failed/not-run evidence.
- [ ] No additional merge/deploy without explicit user permission for future changes.

## Latest commits
- `1b5a5aab1a59a63a92f347b2b6237f16f7f635f1` — merge PR #251.
- `db4780c1f76c95f247e650cca4cfe441c65a8b12` — add contact support illustration.
- `675a0523161d8cfa35706aa7c2e677203177ebd8` — update Contact page illustration.
- `f99c38c3a850511ffac857a97d8d5cb74d44db37` — exclude non-tool legal/contact pages from APK validation matrix.

## Next concrete action
Investigate APK validator failure in run `44293738380` using exact job output; do not assume root cause. Pages build for `f99c38c3` completed its build stage, but deployment job was cancelled after a newer commit. A Privacy Settings fix has been committed; verify latest footer QA run after commit `57e8b0b5b39c0ace4661c84933d0dffbe3454c51` and wait for v327 Pages deployment, then test CMP runtime. Continue investigating APK validator failure and browser/runtime QA, updating this file after each meaningful task.
