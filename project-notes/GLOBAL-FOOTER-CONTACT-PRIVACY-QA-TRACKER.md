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


## Password Generator shared-header isolation fix — 2026-11-18
- Root cause identified: site-header.js was adding the reference hero to the global unified-hero selector, applying global hero sizing; the shared header's hero-aligned inner container was also set to 1516px.
- Removed .ij-reference-hero from the global hero-reskin selector so its own page dimensions remain authoritative.
- Set the shared header alignment canvas to 1200px and matched the Password Generator page's desktop/mobile header widths to the restored hero canvas.
- Related commits: 2c717f4ba685e0370d5e0f33818a3e7e49826562 and 244a523be5e683dc3a2f8d91e7f85eaa88545bfa.
- Pending: verify Pages deployment and live desktop/mobile rendering; do not mark visually complete until confirmed.


## Password Generator header reference + workspace layout — 2026-11-18
- Inspected the actual ID Card Print Studio page and used its shared-header treatment: desktop header inner width calc(100% - 112px), max-width 1600px; page-context label hidden.
- Password Generator hero CSS/dimensions intentionally left untouched in this batch.
- Password workspace constrained to the hero's 1200px frame with equal left/right columns (controls on left, generated result on right); mobile stacks the two panels.
- How It Works, related tools, practical guide, and FAQ remain constrained to the same 1200px frame. Existing illustration/media sizing was not globally stretched.
- Commit: db1d8d409cd75bcbb4e11705d969203a219d3ed4
- Pending deployment and live desktop/mobile visual verification.


## Password Generator visual correction — 2026-11-18
- Updated `site-header.js` to mount the shared header immediately when the script executes with `document.body` available, rather than waiting for `DOMContentLoaded`; this reduces the initial fallback/header flash during refresh.
- Moved the Password Generator page's shared-header script from the deferred footer position to immediately after `<body>` so its shared white header is available before the page content paints.
- Added a final, page-scoped layout override: desktop workspace is a 1200px two-column grid with equal controls/result panels; mobile stacks them. Header follows the ID Card Studio white treatment and 1600px inner alignment.
- Preserved the approved hero rule exactly (`min-height:340px; padding:42px 46px`); no hero dimension changes in this correction.
- Commits: `2c3f56b1153a2378a7d3cfe6f0ff7ed2d31c2501` (`site-header.js`), `626908fa3952f5c3d9acbb946c71b9c7ae171b45` (`password-generator.html`).
- Visual browser verification still required after Pages deployment; do not mark visual QA complete based only on source inspection.

- Follow-up from user's reference video: root cause identified in Password Generator's legacy generic `header{background:#10458e;color:white;text-align:center;padding:24px 15px}` rule, which also applies to the dynamically injected shared header. Added a higher-specificity `body header.ij-global-header` reset for white background, dark text, zero padding, left alignment and flat edges. Hero dimensions unchanged. Commit: `b663b192e4da423213a3b43f2f8f70b8ca584d76`.

- Password Generator follow-up from user screenshots: boosted contrast for the four shared navigation controls (All Tools, language, Home, Back to Home), improved hero feature-chip contrast, and widened the controls/result workspace to a 1440px desktop canvas matching the visible hero width. Mobile remains stacked. Hero CSS/dimensions untouched. Commit: `0a0215716ab4a02092d39725da1e0356cd9628a9`.

- User screenshot correction: prior 1440px workspace override was wrong because the actual hero max-width is 1200px. Replaced it with an exact 1200px/hero-aligned workspace width; restored visible brand copy (InfoJano name + tagline) which shared header CSS had hidden; increased language selector width to prevent English label clipping. Hero dimensions remain unchanged. Commit: `4a692d4d2b23ea6e6b2e1cf3a94c2d004ec672d9`.

- Root cause for narrow Password Generator workspace confirmed: legacy page rule `main{max-width:650px;padding:16px}` constrained the workspace even though the workspace itself had a 1200px max-width. Fixed the parent `body>main` to full width/no padding and set workspace to the same viewport-based width expression as `.ij-reference-hero` (`min(calc(100vw - 28px),1200px)`). Both columns remain equal; mobile stacks. Hero rule untouched. Commit: `504d1cacc9bab7d366c758238c7bcbf14b8da66b`.

- Latest screenshot follow-up: page header was showing the SVG wordmark plus a second duplicate InfoJano/tagline block. Hid the duplicate copy/divider on Password Generator and kept the SVG logo. Also removed stale 1516px hero override by explicitly aligning breadcrumb, hero, and password workspace to the same 1200px desktop canvas; hero remains 340px min-height with 42px 46px padding. Mobile remains responsive. Commit: `58ffc0dd4e66a663fcab9b1d55c613ed09895d2e`.

- User screenshot alignment refinement: breadcrumb was centered within its 1200px wrapper, so changed it to left-align at the hero's left edge; header inner/brand now explicitly left-align to the same 1200px canvas; enlarged logo artwork to 250x88 so its embedded tagline is more legible; hero and controls/result workspace now share the exact viewport-based 1200px width and equal columns. Root cause of previous width mismatch was multiple conflicting legacy width rules (workspace initially 1392px while `main` had a 650px cap, plus hero outside `main`); final selectors explicitly override the parent and direct children. Commit: `dd2ff8fbd9822e9b0bac2ad00dde500c89da6148`.

- Cleanup after user feedback: removed the accumulated conflicting Password Generator CSS patch blocks (including old 1440px/1516px hero overrides and repeated workspace overrides) and replaced them with one `ij-password-generator-clean-layout` source of truth. Hero restored to approved desktop dimensions: max-width 1200px, min-height 340px, padding 42px 46px. Hero is outside `<main>` while workspace is inside it; both now independently use the same `min(calc(100% - 28px),1200px)` outer width. Workspace stays two equal columns desktop and stacks mobile. Commit: `9357546f85dc821b4b9d8d00ddb550477727fbb5`.

- Password Generator refresh/header inconsistency found: `site-header.js` was loaded synchronously at the very start of `<body>`, before `.ij-reference-hero` had been parsed. The shared header script checks for `.ij-reference-hero` immediately when mounting, so it could miss `ij-global-header--hero-aligned` on first render and use the generic header layout. Changed the page script to `<script src="site-header.js" defer></script>` so it mounts after HTML parsing and detects the hero consistently. Commit: `e5b701351297c2700dbd4207c93b3ff3495e1417`.
- CSS audit also found six earlier page style blocks plus a final clean-layout override (7 total), including obsolete 1440px/1516px hero and 1392px workspace declarations. The final clean-layout block currently overrides the desktop hero/workspace geometry, but the stale rules remain a maintenance/conflict risk and should be consolidated after visual verification.


## 2026-11-18 — Password Generator / new-chat handoff
- Created dedicated continuation file: `project-notes/PASSWORD-GENERATOR-AND-SITE-WORK-HANDOFF.md`.
- It records Password Generator work completed, current source observations, approved hero/workspace constraints, video inspection evidence and limitations, pending refresh/header root-cause work, functional/accessibility QA, plus outstanding global footer/CMP/APK tasks.
- New chat should read that handoff first, then re-fetch current main source and GitHub Actions status before editing. Do not assume the old deployment/run status is still current.
- Handoff commit: `49d8e9abefe0b0d0693f9078da70b8c5bed7aea8`.
- Important: Password Generator source currently has 7 style blocks; final clean-layout override is in place but older CSS blocks remain. `site-header.js` dynamically injects header CSS and inserts the header at the start of body. Legacy generic `header{...}` styling must be checked against the shared header reset/cascade. Header refresh issue is not yet verified as resolved.
- The supplied 33.627-second video was opened and sampled at roughly 3-second intervals (11 frames). Sampled frames show the blue shared header consistently; a few frames show a browser dropdown/menu overlay. The sampled stills alone do not prove the exact refresh transition, so dense frame sampling around the refresh is still required.


## 2026-11-18 23:20 IST — Password Generator P0 header/CSS source fix

- Re-fetched current `main` source and confirmed the Password Generator page still had seven style blocks, the legacy global `header{...}` selector, an old 650px `main` cap, and obsolete desktop 1516px/420px, 1440px and 1392px sizing declarations. The final clean-layout rules overrode these values, but the stale rules remained in the cascade.
- Root cause of the initial header absence window: `site-header.js` was deferred at the start of `<body>`; the header was injected only after HTML parsing. The old hero-alignment detection also depended on finding hero markup after parse.
- Fixed in commits `1efe92e1b95fbbfab1d2fd84a0308a2ced8614c2` and `db562ec176f5fca192e1c6c1938f065c3ea34f0e`: synchronous shared-header load as the first body script; explicit `data-ij-header-align="hero"` marker; shared script honors marker; page-local generic header styling and old parent width cap removed.
- Consolidated seven style blocks into two, removed obsolete conflicting desktop width/height/gap rules, and retained the approved 1200px / 340px / 42px 46px hero dimensions. Desktop workspace remains two equal columns with matching 1200px outer width; mobile workspace matches the hero's outer width and stacks.
- Static QA passed: CSS/source assertions for hero geometry, two-column desktop, one-column mobile, obsolete-rule removal and synchronous header order; `site-header.js` plus three inline page scripts pass JavaScript parse checks.
- Current source SHAs: Password Generator `3396d4e55ec09fa1096c5aac7346598cebda03ac`; shared header `f482aeebfecce737b9f4f6d69232db75e8305d44`.
- Prior baseline checks (before this change): Pages run `44362682326` succeeded for previous HEAD `b6cee0f8574de9740badf5671646fca942a26e2f`; Footer QA `44315693307` succeeded; APK run `44315693349` succeeded with all 23 package-count checks, artifact upload and release publication. These do not verify the new code commits.
- **Still pending:** fresh Footer QA/Pages deployment status for the new commits, real browser first-paint/normal reload/hard reload/cache-disabled verification, rendered desktop/tablet/mobile measurements and generator functional/accessibility/privacy browser tests. Live-site browser access and the earlier video were unavailable in this session; no live visual QA is claimed.


### Follow-up correction — APK validator caught missing head metadata

- APK run `44363365139` failed at the strict manifest-link assertion: `Missing manifest link: password-generator.html`. This was introduced by the first CSS consolidation edit, which accidentally removed the HTML head metadata located between the original first and second style blocks.
- Restored the exact original Password Generator PWA manifest link, WebApplication JSON-LD and SVG favicon in commit `f46b051038aa2891bdb597881938b025960c8e48`. The validator was not weakened or modified.
- Rechecked source: manifest link, JSON-LD, favicon, `install.js`, two style blocks, synchronous shared-header script and body alignment marker are all present.
- APK run `44363365139` remains a **failed** historical run; wait for the new run triggered by the correction commit and verify validation/build/package/artifact/release before marking current APK workflow successful.


### 2026-11-18 23:24 IST — CI / deployment follow-up

- Global Footer QA `44363575458`: **success** for source commit `f46b051038aa2891bdb597881938b025960c8e48`.
- GitHub Pages deployment `44363616294`: **success** for main HEAD `ba6d3841a0b74b7ab5f5eca14658dafb00cc648b`; build, deploy and status-report jobs all passed. The deployed commit includes the header/CSS source changes and restored manifest/JSON-LD/favicon metadata.
- APK workflow `44363575672`: manifest/icon/APK-matrix validation **passed**; 23-APK build still running. Package count, artifact upload and release publication are not yet confirmed.
- Live browser QA (first paint, normal reload, hard reload, cache-disabled, desktop/tablet/mobile visual geometry) remains **pending**. No visual completion claim.


### Password Generator functional regression test — 2026-11-18

- Executed an isolated DOM-stub test harness against the current generator JavaScript (not browser/device QA).
- Passed: 64-character password generation with all four selected groups, minimum-one-per-group and ambiguous-character exclusion; six-word capitalized passphrase with optional two-digit suffix; 16-digit PIN; no-character-group validation message; clipboard write path.
- Identified a screen-reader label defect: Show/Hide visible text changes but `aria-label` does not; result input label stays “Generated password” in passphrase/PIN modes. Track this for a focused accessibility fix.
- Browser reload, clipboard permission/fallback, keyboard-only and screen-reader testing remain pending.


### Service-worker/cache and latest deployment check

- Audited `install.js`: service-worker registration is restricted to `barsulkhan.github.io`. The canonical `infojano.com` host does not register the service worker, so its `infojano-v330` cache is not responsible for the canonical live page's header refresh issue.
- GitHub Pages project-host service worker is `infojano-v330`, precaches Password Generator, `site-header.js`, `site-footer.js` and the logo, and uses network-first fetch with cached fallback for same-origin assets. No cache-version change was made for the custom-domain fix.
- Pages deployment `44363901199`: **success** for current main HEAD `fedc22a1179c2dc1a69b60ad0a6e5959d0b2c945`.
- Global Footer QA `44363575458`: **success** for source commit `f46b051038aa2891bdb597881938b025960c8e48`.
- APK run `44363575672`: validation passed; 23-APK build still in progress; package count, artifact and release are pending.


### Latest deployment and APK verification — 2026-11-18

- Pages deployment `44364160434`: **success** for current main HEAD `3c99d477e30ed7e0e6a263d0582990a567a1a910`.
- APK workflow `44363575672`: **success**. All stages passed: manifest/icon/matrix validation, 23 builds, package-count verification, artifact upload and release publication.
- Artifact `InfoJano-Tool-APKs`, ID `14454474102`, is present and not expired.
- Release `infojano-tool-apps-v1.1.1` contains exactly 23 APK assets.
- Deployment/CI success is separate from live browser visual QA; refresh and responsive browser verification remain pending.


### Password Generator accessibility correction — 2026-11-18

- Fixed mode-specific accessible names and Show/Hide labels in commit `bb958deb3db99eb769090f47238b07096480778e`.
- Password, passphrase and PIN modes now expose the correct generated-result label; Show/Hide labels track the actual visibility state. Switching modes resets visibility; clipboard fallback updates the action label.
- Isolated DOM-stub regression harness: **13/13 checks passed** (password length/groups/similar-character exclusion, passphrase format, PIN format, labels, toggle, clipboard success/fallback, empty-group validation and script parse).
- Browser-based clipboard permission, keyboard focus order and assistive-technology tests remain pending. New Pages and APK workflow runs for this commit must be verified before declaring CI complete.


### Source/privacy/footer checks and Pages deployment — 2026-11-18

- Password Generator static QA passed after the accessibility fix: 2 CSS blocks; 1200px/340px/42px 46px desktop hero; equal desktop columns; mobile hero/workspace matching width and one-column stack; obsolete sizing rules removed; manifest/JSON-LD/favicon/install.js retained; synchronous header-first load and explicit hero marker; mode-aware result labels. Shared header and inline page JavaScript parse.
- Password-generator script privacy audit passed: no `fetch`, `XMLHttpRequest`, `sendBeacon`, local/session storage or console logging; Web Crypto and clipboard only. Separate GA4 page-view instrumentation remains and does not receive the generated result in the inspected code.
- Static footer spot-check: homepage, 404, Contact and Privacy Policy load the shared footer script; representative tool pages load shared header, which loads the footer. Contact and Privacy Policy include the support email and relevant navigation targets. Global Footer QA run `44364594313`: **success**.
- Pages deployment run `44364642099`: **success** for main HEAD `7990bb74b828745af79d1a0817175c44d9ac536b`.
- APK run `44364594298`: manifest/icon/matrix validation passed; 23-APK build still running.
- Still pending: live page-by-page footer visual QA, CMP revocation dialog runtime test, real browser refresh/viewport QA, clipboard permission/fallback in browser and keyboard/screen-reader/device checks.


### Latest CI confirmation after accessibility fix — 2026-11-18

- Global Footer QA `44364594313`: **success** for Password Generator accessibility commit `bb958deb3db99eb769090f47238b07096480778e`.
- Pages deployment `44364890515`: **success** for main HEAD `8384ba75da5951afaa39052bcd6e4d0f4a82b5b2`.
- APK workflow `44364594298`: **success**; all validation/build/package-count/artifact/release steps passed. Artifact `InfoJano-Tool-APKs` ID `14454849212` is not expired; release `infojano-tool-apps-v1.1.1` has 23 APK assets.
- Live browser QA remains a release gate: first paint, normal/hard/cache-disabled refresh, desktop/tablet/mobile rendered geometry, keyboard focus, real clipboard behavior and CMP revocation runtime. No browser visual completion is claimed.


### Final current-HEAD deployment verification — 2026-11-18

- Pages run `44365519800`: **success** for main HEAD `32385cb6f562784b39c77ed33601cc1be1b7b435`; build, report-build-status and deploy all succeeded.
- Main contains the shared-header first-paint timing correction, explicit hero alignment marker, consolidated two-block Password Generator CSS, preserved PWA metadata and accessible mode-aware result labels.
- APK run `44364594298`: **success**; 23 APKs built, package count verified, artifact uploaded and 23 release assets published.
- Global Footer QA run `44364594313`: **success**.
- Overall completion remains blocked on live browser QA: first paint, normal/hard/cache-disabled refresh, rendered desktop/tablet/mobile geometry, keyboard/screen-reader, actual clipboard permission/fallback and CMP revocation dialog runtime.


### Tracker publication deployment — 2026-11-18

- Pages run `44365697746`: **success** for main HEAD `8f58e1545d35808013ab532f0aa3409617e64263`; build, report and deploy jobs passed.
- The latest tracker documents and website source are published. Live interactive browser QA remains pending.


### Resume re-check — 2026-11-18

- Re-read both current trackers and re-fetched `main` source. Current HEAD: `3116dd22343d5ec8c804a93dcaccd14cccba730e`.
- Pages run `44365899700`: **success** for this exact HEAD.
- Password Generator source audit reconfirmed: 2 CSS blocks; no generic page-level `header{...}` rule; explicit hero alignment body marker; synchronous shared-header script as first body child; shared-header CSS injected before its DOM node; hero 1200px max-width / 340px min-height / 42px 46px padding retained; equal desktop columns and mobile one-column stack retained.
- Current blobs: password page `b620313ca8838916a2de7cbbdfaab0c2362d1613`; shared header `f482aeebfecce737b9f4f6d69232db75e8305d44`.
- Service-worker scope rechecked: registration is limited to `barsulkhan.github.io`; canonical `infojano.com` does not use this worker. The Pages-host worker cache is `infojano-v330`.
- The header still has no static HTML element: `site-header.js` creates it after the external script fetch/execute. Synchronous loading reduces the race with following page content but does not, by source inspection alone, prove first-paint stability. Treat this as a possible timing gap pending browser reproduction, not as a confirmed video diagnosis.
- Live HTTP/browser access could not be completed in this session because `infojano.com` DNS resolution failed and the web page fetch was inaccessible. This does not indicate that the website itself is down.
- Outstanding P0 gate: verify first paint, normal/hard/cache-disabled reload and header visual consistency in a real browser; do not mark resolved without that evidence.


### 2026-11-18 — Password Generator header reference follow-up
- Applied a page-scoped desktop CSS override to `password-generator.html` to match the user's supplied white-header reference from the Elapsed Time Calculator: white full-width header, larger logo, and larger pale navigation controls.
- Source commit: `ddbfbcb5e2fef40527673757850421eea478e7ba`.
- No shared header script, homepage, or Hero/workspace geometry was changed. Password Generator's approved 1200px / 340px / 42px 46px Hero dimensions remain intact.
- Deployment and live desktop/mobile hard-refresh visual QA remain pending; source-level confirmation is not a substitute for browser verification.


### 2026-11-18 — Password Generator header aligned to supplied code
- Applied user-provided custom-header styling to Password Generator only, including mobile stacking/wrapping at 768px and narrower-phone spacing. Existing InfoJano logo asset and shared navigation behavior retained.
- No shared header script, homepage, Hero Banner or generator workspace changes.
- Source commit: `de7055b9704a700aa6398cba5fbb41f8b14c4630`; live verification pending.
