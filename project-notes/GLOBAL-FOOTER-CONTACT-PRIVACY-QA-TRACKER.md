# InfoJano — Global Footer, Contact & Privacy QA Tracker

Last updated: 2026-11-18 (Latest Pages deployment succeeded; APK matrix validated and 23-build stage running)
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
Status: **Complete shared footer deployed; latest source QA passed; live page-by-page visual verification pending**
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
- Latest Pages deployment after the global CMP loader + shared hero changes succeeded: run 44296651029, deployed commit 47d06f2ae563076f9458877b5b972d3cc7bd7be3.
- Latest Global Footer QA run 44296565924 passed after hero typography/CMP validation updates.
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
- Global Footer QA after global AdSense loader + shared hero typography rules: run 44296565924 — success.
- QR Maker manifest correction Pages deployment: run 44296054034 — success.
- APK reruns: 44296359270 and latest 44296565914; first rerun passed manifest validation and proceeded to APK build, latest run remains in progress.
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


### 2026-11-18 — Global CMP dependency and shared hero typography
- AdSense loader is now injected from the shared footer on all pages, with duplicate detection so homepage's existing loader is not repeated.
- Privacy Settings now queues the revocation action under CONSENT_API_READY; QA validates the loader and callback wiring. Live CMP dialog still requires runtime confirmation.
- Shared hero system now includes .ij-social-hero and applies approved title typography (36–62px desktop; 32–43px mobile), copy sizing/line-height, centered mobile title/copy, and the approved 24px 18px 34px mobile padding.
- Homepage remains excluded; page-specific artwork/copy retained. Source and QA are complete; rendered all-page visual QA remains pending.
- Current source commits: hero typography 4bf7bd136df201e8402660274cc6ce634ddefce1; validator 298f62a6630a0a369e190f7cc0c552243989664a; cache v330 f13fa41f1bf7a91e13287600bf98afe5811a6e82. Latest Global Footer QA run 44296565924 passed.


### Latest batch update — 2026-11-18 17:11 IST
- GitHub Pages deployment #44296651029: build, upload artifact, and deploy all succeeded for commit 47d06f2ae563076f9458877b5b972d3cc7bd7be3.
- Global Footer QA #44296565924: validation job succeeded after the global AdSense loader and responsive hero rules were added.
- APK workflow #44296565914: setup and manifest/icon matrix validation succeeded; the 23-APK build step is still running. Package count, artifact upload and release are not yet confirmed.
- Shared hero source changes remain deployed, but actual visual QA at desktop/tablet/mobile sizes on every individual tool page is still outstanding. Keep this status separate from source/CI success.


### 2026-11-18 — Password Generator hero redesign batch
- Updated `password-generator.html` in commit `65a7dc551fcadb81fbc0f1e932331dacebf0e4f4`.
- Removed the visible “Keep this tool on your phone / Install this tool” banner and its page-specific CSS. Kept shared install.js helper because it also registers the service worker and applies shared page helpers; no install prompt is left in this page markup.
- Widened the Password Generator hero to a 1440px desktop container, increased its vertical space and adjusted the copy/art columns. Mobile layout remains stacked and responsive.
- Rebuilt “How to Create a Strong Password” as a two-column instruction card: numbered steps on the left and an inline SVG phone illustration on the right showing a numeric keypad, masked password, press ripple and security shield. No external image asset is required.
- Global Footer QA for this commit: run 44298782422 passed. Pages deployment run 44298782196 was building/uploading at the last check; wait for deploy success before asking user to inspect.
- Latest APK workflow for this commit: run 44298782515 was still running icon tooling/validation at the last check. Earlier full APK run 44296565914 completed successfully with package-count verification, artifact upload and release publication; artifact InfoJano-Tool-APKs contains the 23 APKs, release tag infojano-tool-apps-v1.1.1 lists 23 APK assets. Re-run 44298782515 is newer and must be allowed to finish before marking the current commit's APK matrix complete.
- Visual browser review of the redesigned Password Generator page remains pending; user will inspect the deployed version.


### 2026-11-18 — Password Generator hero/header refinement
- Updated `password-generator.html` in commit `9d633386aea1fde814edb48b02fb766e1555babe`: hero right side now has a phone keypad, animated fingertip press/ripple, masked password and padlock shackle opening; the how-to section retains the two-column layout and matching wide-card proportions.
- The hero illustration is inline SVG/CSS animation (not separate PNG files). This keeps the phone, pressed key and opening lock independently animatable and avoids a static raster image. If separate PNG artwork is a strict requirement, that remains a follow-up asset task.
- Updated shared `site-header.js` in commit `89ca4d3c801659fe4f76278b7c556a544624aec6`: header now uses the full `infojano-logo.svg` wordmark instead of the square mark, with responsive sizing, and adds a third right-side “Back to Home” link alongside “All Tools” and “Home”.
- Latest CI for header commit: Global Footer QA run 44299523643 was in progress; Pages deployment run 44299524228 was pending at the time of this note. Do not call live until deployment succeeds.
- Visual browser review of desktop/mobile layout and animation is still pending.
- Next check: confirm QA + deployment runs for commit `89ca4d3c801659fe4f76278b7c556a544624aec6`, then ask user to inspect the live Password Generator page. No merge action was performed; commits were made directly to main.


### 2026-11-18 — Password Generator research and redesign specification (research only; no new page code changed)
#### Source inspection
- Inspected the live-main source `password-generator.html`.
- Current generator is a single-column `.card`: settings, Generate button, password output and Copy button all sit in one vertical flow. The user-requested two-panel generator/result layout is therefore NOT implemented yet.
- The page still contains a page-local `.ij-brandbar` header with a square `.ij-brandmark` and a “Back to Home” button. This is the visible reason the header change is not reflected on this page; shared `site-header.js` does not automatically replace this page-local header markup.
- The page still has a separate text link “← Back to InfoJano Home” immediately after the How It Works section. User requested removing that link.
- “Tips for Using a Password Generator” remains a narrow 900px max-width card. “Create a Strong Password in a Few Steps” is inside a 1392px max-width how-to card, but its actual heading and content need to be checked after the generator split and consistent page-width rules.
- Existing generator uses Web Crypto `crypto.getRandomValues` with rejection sampling and generates locally. It currently has 8–64 length, lowercase/uppercase/numbers/symbols, generate and copy. It does not currently offer passphrase, PIN, ambiguous-character exclusion, minimum category counts, strength/pattern feedback, or presets.
#### External research
- NIST SP 800-63B-4 (July 2025) says verifiers should support at least 64-character passwords, allow password managers/autofill and paste, and avoid composition rules as a mandatory verifier requirement. NIST also recommends minimum 15 characters for single-factor passwords; 8 minimum can apply when password is used as part of MFA. This supports adding a 15+ recommended default and flexible length up to 64, but retaining optional character-set controls for sites that impose requirements. Source: https://pages.nist.gov/800-63-4/sp800-63b.html
- Bitwarden's generator supports password/passphrase, configurable word count/separator/capitalization/numbers, minimum numbers/specials, ambiguous-character avoidance, and username generation. Source: https://bitwarden.com/help/generator/
- Dashlane supports password/passphrase modes, custom length/character types, look-alike exclusion, history, and a strength estimator that checks common passwords, dictionary words, names, keyboard patterns and dates. Source: https://support.dashlane.com/hc/en-us/articles/202625022-Generate-a-password-or-passphrase-using-Dashlane
- User behavior research: an international 2025 survey report (25,076 cumulative adults across US, UK, Canada, France, Germany, Australia, New Zealand, India, Brazil and Mexico) reports 31% write passwords down, 21% rely on memory, and 19% use password managers. This supports a memorable passphrase option and simple copy workflow. Source: report PDF https://pub-mediabox-storage.rxweb-prd.com/exhibitor/document/exh-f4db828f-a659-4953-9111-938dbade7dc0/3dfacda7-7036-4c0e-a946-5a510cc0db8f.pdf
- Device mix: StatCounter-derived 2025 worldwide web page views were 58.5% mobile, 39.92% desktop, 1.58% tablet. 12-month averages to Oct 2026 in one secondary aggregation: India 70.83% mobile / 28.64% desktop; Bangladesh 41.68% mobile / 58.01% desktop. This is general web usage, NOT InfoJano audience data. Source: https://statisticsglobal.org/mobile-vs-desktop-usage/
- Keyboard caveat: the sources support that users need both manual entry and password-manager paste/autofill; they do not provide reliable global market shares for physical QWERTY vs regional keyboard layouts, nor touchscreen vs hardware keyboard use specifically for password-generator visitors. Do not claim exact keyboard distribution. Design should support both touchscreen tap targets and desktop keyboard/tab navigation, copy/paste, and long password strings.
- Search demand: a third-party keyword estimate (US, updated Oct 27 2026) reports about 740,000 average monthly searches for “password generator”, with “random password generator” 74,000, “password generator 12 characters” 50,000, and “strong password generator” 33,000; estimated difficulty 80/100. Treat as directional vendor estimates, not guaranteed traffic. Source: https://www.kwstrends.com/keywords/us/password-generator
#### InfoJano-specific audience / reach limits
- The repo page includes GA4 measurement ID `G-P8D7XRGVEF`, but no GA4 reporting/property connector was available in this session. Ahrefs domain/keyword data request returned “Insufficient plan”. Therefore actual InfoJano password-generator users, device/browser split, geography, search impressions/clicks, retention, and reachable audience are NOT verified here. Do not turn global device shares or keyword volumes into a site traffic forecast.
- To produce a defensible audience estimate, obtain GA4 report for `password-generator.html` (users/sessions, country, device category, browser, engagement) and Search Console page/query report (clicks, impressions, CTR, average position) for the last 3 months and 12 months.
#### Recommended product scope, in priority order
1. Redesign the generator as a wide two-column panel: left = controls/actions; right = generated result, strength feedback, copy/regenerate/show-hide. On mobile stack controls then result with result kept prominent.
2. Remove the page-local header and the in-body “Back to Home” link; use one consistent shared header only. Correct the page's local header collision with `site-header.js`; check the real full wordmark asset before sizing it.
3. Align Hero, generator panel, “Create a Strong Password…” and “Tips…” to the same desktop max-width and consistent section padding/typography. Keep mobile spacing proportional and readable.
4. Add password presets (Balanced / Maximum compatibility / Long), length default 16 or 20 and range 8–64, exclude ambiguous characters, optional minimum numbers/symbols for compatibility. Do not force all character classes as a universal security rule.
5. Add memorable passphrase mode (random word list, 4–6 words, separator, capitalization, optional number) and numeric PIN mode.
6. Add an honest strength meter/pattern warnings (common/repeated/sequential/date/keyboard patterns); never send the typed/generated password to a server or third-party API. Prefer a local zxcvbn-style estimator and clearly explain that the estimate is not a guarantee.
7. Add one-click copy, regenerate, show/hide, copy confirmation, paste-friendly output, and accessible keyboard focus/labels. Do not add password history or cloud save by default because it increases exposure risk.
8. Optional later: generate username/alias only if there is a safe, useful scope; not core to this password-generator page.
#### Next implementation sequence (not yet done)
- First correct local header collision and remove duplicate Back to Home link.
- Build wide responsive two-column generator controls/result card.
- Harmonize Hero, how-to, and Tips card widths and typography.
- Implement core additions (passphrase, PIN, ambiguous-character exclusion, presets, local strength/pattern feedback) and regression-test Web Crypto generation/copy.
- Then run desktop/mobile and keyboard-only QA. No implementation from this research batch has been made.


### 2026-11-18 — Password Generator implementation batch 1
- Implemented in `password-generator.html`, commit `ce2f58c64c00a38a0d4bab9fbb19dbb2b57a9f2b`.
- Removed page-local brand header (which conflicted with shared `site-header.js`) and removed the extra in-body “Back to InfoJano Home” link.
- Replaced the single-column generator with a responsive two-column workspace: controls on the left, generated result/strength/copy/show-hide/regenerate on the right; stacks on narrow screens.
- Added three modes: random password (8–64 chars), memorable passphrase (4–6 random words, separators, optional number/capitalization), numeric PIN (4–16 digits).
- Added presets (Balanced 16, Long 24, Maximum 32), exclude similar characters, optional minimum-one-from-each-selected-group, and a local heuristic strength/pattern feedback display.
- Uses Web Crypto rejection-sampled random selection and Fisher-Yates shuffle. Password generation and strength estimate run in the browser; no password submission/storage endpoint added.
- Expanded Tips card and How It Works to the same 1392px content width and increased How It Works heading scale.
- QA / deployment for this commit are running: Global Footer QA #44302235990, Pages deployment #44302235261, APK build #44302236019. Do not call deployed until Pages workflow succeeds.
- Remaining QA: inspect actual HTML/JS after workflow; test all modes and edge cases, copy/show-hide, mobile/tablet/desktop rendering, keyboard navigation, screen reader labels, and verify shared header rendering on the live page. Current strength feedback is intentionally a local heuristic, not a security guarantee; UI copy should not call it a formal entropy score.
- Research data limitation remains: GA4/Search Console audience data not connected; third-party market estimates are not InfoJano traffic.


### 2026-11-18 — Password Generator visual correction batch 2
- Updated `password-generator.html`, commit `3bb37befee252b366df485cfa8238fe9a4f2f7db`.
- Restored/retained the shared global header via `site-header.js` (not a duplicate page-local header); explicitly increased the visible InfoJano logo sizing and aligned the header content width to the 1440px hero canvas.
- Increased the primary Generate Password CTA size and minimum height.
- Increased the How It Works title, body/step typography and panel height.
- Increased Tips and FAQ section widths, headings, body text and spacing to match the hero content canvas; FAQ is no longer a narrow 900px card.
- Kept responsive mobile overrides so the sections stack and the shared logo/header remain compact on small screens.
- Pending: verify latest Pages deployment, then inspect live desktop/mobile rendering and confirm header logo asset is visibly correct. Do not mark visual QA complete until checked in browser.


### 2026-11-18 — Password Generator header loading and exact hero-width correction
- User reported shared header still absent and lower content panels remained visually undersized.
- Source inspection found Password Generator still referenced shared scripts using absolute `/InfoJano/` paths. On the custom-domain root these resolve to the wrong location, so `site-header.js` may fail to load and the shared header is not inserted. Changed page-local references for `site-header.js`, `download-progress.js`, and `install.js` to relative paths.
- Updated `password-generator.html`, commit `5d2e40c432b27c4b889843a6ba0c824041e8219b`.
- Removed the 1440px cap and excess inner padding from `main`; hero, generator workspace, How It Works (including its illustration), Related Tools, Tips, and FAQ now share a 1516px max-width canvas and the same horizontal gutter. Kept responsive stacking on mobile.
- This is a code-level correction only. Must confirm deployment and inspect live page in desktop/mobile browser before declaring header and width issue resolved.


## Password Generator hero-size rollback — 2026-11-18
- User clarified that the request was to add/fix the shared header, not enlarge the hero banner.
- Reverted the hero's desktop size to its original 1200px maximum width, 340px minimum height, and 42px 46px padding. Kept the content sections aligned to the same 1200px canvas.
- Did not revert or remove the shared-header path corrections or header styling.
- Commit: 35ef9de0616320b8847d123253478a351bd94eba
- Deployment/live visual verification remains pending.
