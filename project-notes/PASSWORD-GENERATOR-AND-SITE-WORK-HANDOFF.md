# InfoJano — Password Generator & Site Work Handoff

Last updated: 2026-11-18 23:14 IST
Repository: https://github.com/barsulkhan/InfoJano
Branch: `main`
Live site: https://infojano.com/
Primary page: https://infojano.com/password-generator.html
Current focus: Password Generator refresh/header visual consistency and full-page QA.

> এই ফাইলটি নতুন চ্যাটে কাজ চালিয়ে যাওয়ার মূল হ্যান্ডঅফ। এখানে Completed মানে source/code বা CI-তে সম্পন্ন; live browser/device QA আলাদা করে না হওয়া পর্যন্ত visually verified বলা যাবে না। কোনো পরিবর্তন করার আগে বর্তমান main source ও deployment status আবার পরীক্ষা করতে হবে।

## নতুন চ্যাটে কাজ শুরু করার নির্দেশ

নতুন চ্যাটে এই ফাইলটি খুলে নিচের নির্দেশ দিন:

“এই handoff পুরোটা পড়ে InfoJano repo barsulkhan/InfoJano-এর main branch থেকে কাজ শুরু করো। প্রথমে বর্তমান source, GitHub Actions deployment/QA status এবং tracker মিলিয়ে যাচাই করো। আগের কাজ পুনরায় করো না। Password Generator-এর refresh/header issue-টা video ও source মিলিয়ে নির্ণয় করো। Hero-এর approved size এবং দুই panel-এর alignment অক্ষত রাখবে। অনুমান করে CSS patch যোগ করবে না; conflict-এর root cause ঠিক করবে, অপ্রয়োজনীয় পুরোনো CSS পরিষ্কার করবে, তারপর QA ও deployment যাচাই করবে। প্রতিটি কাজ শেষে এই handoff ও মূল tracker update করবে। কোনো কিছু test না করে completed বলবে না।”

## এই চ্যাটে করা / যাচাই করা কাজ

### Password Generator — সম্পন্ন source পরিবর্তন (কিন্তু কিছু live visual QA বাকি)
- [x] Page-local পুরোনো brand header সরিয়ে shared `site-header.js` header ব্যবহারের দিকে পরিবর্তন করা হয়েছে। Commit: `ce2f58c64c00a38a0d4bab9fbb19dbb2b57a9f2b`.
- [x] Extra “Back to InfoJano Home” body link সরানো হয়েছে।
- [x] এক-কলামের generator-কে responsive দুই-panel workspace করা হয়েছে: বামে controls, ডানে password result। Mobile-এ stacked layout।
- [x] Password, passphrase ও numeric PIN mode যোগ করা হয়েছে।
- [x] Balanced / Long / Maximum presets, similar-character exclusion, optional selected-group minimum, local heuristic strength/pattern feedback যোগ করা হয়েছে।
- [x] Web Crypto random generation ও copy/show-hide/regenerate workflow ব্যবহার করা হয়েছে; password server-এ পাঠানোর endpoint যোগ করা হয়নি।
- [x] How It Works, Related Tools, Tips, FAQ-এর width ও typography-তে একাধিক refinement করা হয়েছে।
- [x] Shared header-এর logo, tagline, nav controls ও alignment-এ refinement হয়েছে।
- [x] Parent `main`-এর পুরোনো 650px width cap root cause হিসেবে চিহ্নিত করে workspace-এর parent width ঠিক করা হয়েছে। Commit: `504d1cacc9bab7d366c758238c7bcbf14b8da66b`.
- [x] Duplicate brand text ও stale 1516px/1392px width overrides-এর বিরুদ্ধে cleanup হয়েছে।
- [x] একক `ij-password-generator-clean-layout` override যোগ করে Hero ও workspace-এর width 1200px canvas-এ মিলানো হয়েছে। Commit: `9357546f85dc821b4b9d8d00ddb550477727fbb5`.
- [x] Hero-এর approved desktop geometry পুনরায় নির্ধারণ/রক্ষা করা হয়েছে: max-width 1200px, min-height 340px, padding 42px 46px; mobile override-ও রয়েছে। Commit `35ef9de0616320b8847d123253478a351bd94eba` এবং পরবর্তী cleanup `9357546f85dc821b4b9d8d00ddb550477727fbb5`.
- [x] Header script loading timing issue-এর জন্য page script-এ `defer` যোগ করা হয়েছে। Commit: `e5b701351297c2700dbd4207c93b3ff3495e1417`.
- [x] Shared header script-এর duplicate guard আছে; script body-তে header আগে থেকেই থাকলে দ্বিতীয় header তৈরি করে না।

### Video review — বর্তমান ফাইলে থাকা প্রমাণ
- [x] User video file `/mnt/data/video_20261118_193242.mp4` খোলা গেছে; duration 33.627 seconds।
- [x] প্রায় প্রতি 3 সেকেন্ডে sampled 11টি frame-এর contact sheet পরীক্ষা করা হয়েছে।
- [x] Sampled frame-গুলোতে blue shared header ও hero/workspace layout দেখা যায়। কিছু frame-এ browser-এর বামদিকে একটি dropdown/menu overlay দেখা যায়।
- [ ] Sampled still frame থেকে পুরো refresh transition-এর exact timing নিশ্চিত করা যায়নি। তাই “blue → white → blue” flash ঘটেছে—এমন দাবি এই হ্যান্ডঅফে নিশ্চিত ঘটনা হিসেবে লেখা হচ্ছে না।
- [ ] পরবর্তী চ্যাটে video-র refresh মুহূর্তের আশেপাশে আরও ঘন frame sampling (যেমন 5–10 fps, refresh-এর 2–3 সেকেন্ড আগে/পরে) করে transition বোঝা দরকার।

### এই চ্যাটে current source inspection
- `password-generator.html` current main blob SHA: `5818755ce75f26157a1657aebf28e1b9952a8e19`.
- `site-header.js` current main blob SHA: `d4c65b0a3d598f2424c19540db887e2f6bbbd743`.
- Password Generator page-এ `<script src="site-header.js" defer>` একটি মাত্র reference পাওয়া গেছে।
- Password Generator-এ মোট 7টি style block আছে: 6টি পুরোনো/মধ্যবর্তী block এবং শেষের `ij-password-generator-clean-layout` block। শেষের block final layout override করছে, কিন্তু পুরোনো width declarations maintenance/conflict risk হিসেবে রয়ে গেছে।
- `site-header.js` header-এর CSS dynamically `<style id="ij-global-header-style">` হিসেবে inject করে; header DOM-এ `document.body.insertBefore(header,document.body.firstChild)` দিয়ে বসে।
- Shared header-এর `mount()` function প্রথমে global header style inject করে, তারপর duplicate guard চেক করে, তারপর header বানায়।
- Password Generator-এর প্রথম inline style block-এ generic `header{background:#10458e;color:white;text-align:center;padding:24px 15px}` legacy selector রয়েছে। এটি injected shared header-এও apply হতে পারে যদি higher-specificity reset না থাকে। Tracker history-তে `body header.ij-global-header` reset-এর commit `b663b192e4da423213a3b43f2f8f70b8ca584d76` নথিভুক্ত আছে। বর্তমান live source-এ reset rule ও cascade order আবার যাচাই করতে হবে।
- Header style injection ও legacy generic header selector-এর interaction এখনও audit করা দরকার। শুধু defer-কে একমাত্র root cause বলা যাবে না।

## এখনো বাকি — অগ্রাধিকার অনুযায়ী

### P0 — Refresh/header issue নির্ণয় ও স্থায়ী সমাধান
- [ ] বর্তমান `site-header.js` এবং `password-generator.html` পুরোটা পুনরায় পড়ে exact cascade/DOM lifecycle map তৈরি।
- [ ] Video-র refresh মুহূর্তে 5–10 fps frame extraction করে header-এর actual transition নথিভুক্ত।
- [ ] Browser DevTools থাকলে cache enabled/disabled, hard reload, normal reload—তিনভাবে reproduce।
- [ ] Header কি unstyled flash, legacy generic header CSS, logo SVG load delay, stale cache/service worker, অথবা script injection timing-এর কারণে বদলাচ্ছে—প্রমাণসহ আলাদা করা।
- [ ] প্রয়োজন হলে shared header-এর critical CSS static HTML head-এ বা shared stylesheet-এ আনা; তবে আগে architecture যাচাই।
- [ ] Legacy `header{...}` global selector scoped/removed করা, যাতে injected shared header-এ page-local style না লাগে।
- [ ] Header একবারই mount হচ্ছে, logo/tagline duplicate নয়, reload-এর শুরু থেকে শেষ পর্যন্ত একই visual state—এটি browser-এ verify।
- [ ] সমাধানের পর source QA, Pages deployment এবং live hard-refresh QA।

### P1 — Password Generator visual & functional QA
- [ ] Hero-এর desktop 1200px max width, 340px min-height, 42px 46px padding অপরিবর্তিত আছে তা verify।
- [ ] Controls panel hero-এর বাম edge-এ এবং result panel hero-এর ডান edge-এ; দুই panel একই baseline-এ এবং hero-এর exact width-এর মধ্যে—verify।
- [ ] Desktop, tablet, mobile (কমপক্ষে 1440px, 1024px, 768px, 390px, 360px) পরীক্ষা।
- [ ] Password mode: 8–64 length, সব character group, no ambiguous, minimum-one-per-selected-group, presets।
- [ ] Passphrase mode: 4–6 words, separators, capitalization, optional number।
- [ ] PIN mode: 4–16 digits।
- [ ] Generate, regenerate, copy, show/hide, empty/invalid inputs, clipboard failure fallback test।
- [ ] Strength feedback-এর wording heuristic হিসেবে সঠিক; formal entropy/security guarantee বলা যাবে না।
- [ ] Keyboard-only focus/tab order, labels, accessible status announcements, screen-reader semantics।
- [ ] Password কখনো network request, analytics event, console log বা local/cloud storage-এ যাচ্ছে না তা যাচাই।
- [ ] Related tools, How It Works, Tips, FAQ width ও spacing একই grid-এ আছে কি না verify।
- [ ] Service worker/cache-এর কারণে stale HTML/JS load হচ্ছে কি না পরীক্ষা।

### P2 — Global site work (মূল tracker থেকে)
- [ ] Shared footer live visual QA: homepage, representative tool pages, calculator, converter, image tool, QR tool, SEO/guide, 404, Contact, Privacy Policy।
- [ ] Footer duplicate হচ্ছে না; Home / All Tools / Privacy Policy / Contact / Privacy and cookie settings link destinations সঠিক।
- [ ] Contact page mailto ও navigation links click-test।
- [ ] Privacy Policy content, links, settings link QA; legal compliance certification দাবি করা যাবে না।
- [ ] Google CMP Privacy & Cookie Settings live runtime test: homepage এবং tool page-এ revocation dialog খুলছে কি না; CMP-ready ও CMP-not-ready states।
- [ ] GPP/US opt-out, EEA/UK consent, Consent Mode signals এবং AdSense runtime behavior verify; Google account settings অকারণে পরিবর্তন নয়।
- [ ] Root public HTML coverage ও Global Footer QA latest commit-এ pass নিশ্চিত।
- [ ] APK workflow: আগের run-এ QR Maker manifest `start_url` mismatch ছিল; পরের run-এ manifest validation pass করে 23-APK build শুরু হয়েছিল। সর্বশেষ run status পুনরায় fetch করে artifact/package/release verification সম্পন্ন করতে হবে।
- [ ] APK workflow validator error পুনরায় এলে exact failing assertion/log দেখে source manifest ঠিক করতে হবে; validator দুর্বল করা যাবে না।
- [ ] সব CI run, Pages deploy, APK artifacts/releases-এর status evidence সহ নথিভুক্ত করা।

## User-approved / must-not-break constraints
- Hero-এর approved size আগে থেকেই ঠিক; user বারবার বলেছেন hero size পরিবর্তন না করতে। কোনো নতুন design change-এর নামে hero বড়/ছোট করা যাবে না।
- Desktop-এ Hero, controls/result workspace-এর outer width একই 1200px; controls left, result right; equal two-column grid।
- Mobile-এ panels stacked; horizontal overflow নয়।
- Shared header consistent থাকতে হবে; duplicate logo/brand copy নয়।
- CSS patch-এর স্তূপ তৈরি করা যাবে না। Root cause fix করে obsolete declarations পরিষ্কার করতে হবে।
- প্রতিটি change-এর আগে current source SHA fetch করতে হবে; GitHub update_file-এ current SHA দিতে হবে।
- Code change-এর পর relevant QA এবং Pages deployment status না দেখে “live” বলা যাবে না।
- User explicit permission ছাড়া বড় redesign, merge strategy change বা unrelated global changes নয়। Existing main-branch workflow-এর সঙ্গে সামঞ্জস্য রেখে ছোট, scoped commit।
- নতুন chat-এও বাংলায় সংক্ষিপ্ত, প্রমাণভিত্তিক update দিতে হবে; user-কে একই তথ্য বারবার জিজ্ঞেস করা যাবে না।

## Useful paths and references
- `password-generator.html` — primary page.
- `site-header.js` — shared header injection and CSS.
- `site-footer.js` — global footer/CMP behavior.
- `project-notes/GLOBAL-FOOTER-CONTACT-PRIVACY-QA-TRACKER.md` — broader site QA tracker.
- `scripts/validate-global-footer.mjs` — footer QA validator.
- `app-manifests/qr-maker.webmanifest` — earlier APK manifest issue.
- Video: `/mnt/data/video_20261118_193242.mp4` (33.627 sec; uploaded in the previous chat; may not be available in a new chat, so reattach if needed).

## Key Password Generator commits (history)
- `ce2f58c64c00a38a0d4bab9fbb19dbb2b57a9f2b` — two-panel generator and modes/features implementation.
- `3bb37befee252b366df485cfa8238fe9a4f2f7db` — visual refinements.
- `5d2e40c432b27c4b889843a6ba0c824041e8219b` — relative shared script paths and width changes.
- `35ef9de0616320b8847d123253478a351bd94eba` — hero size rollback to approved 1200px/340px/42x46.
- `db1d8d409cd75bcbb4e11705d969203a219d3ed4` — header reference/workspace alignment.
- `9357546f85dc821b4b9d8d00ddb550477727fbb5` — consolidated clean layout override.
- `e5b701351297c2700dbd4207c93b3ff3495e1417` — header script defer.

## Status summary
- Password Generator core implementation: **source implemented**.
- Hero/workspace geometry: **source rules implemented; visual QA pending**.
- Header refresh consistency: **not resolved/verified**; further root-cause work required.
- Full-page Password Generator functional/accessibility QA: **pending**.
- Global footer/contact/privacy/CMP: tracked in the broader QA tracker; live visual/runtime verification remains pending in several areas.
- APK: earlier 23-APK run succeeded, but latest batch/run must be checked for final current status.


## 2026-11-18 — P0 Password Generator header refresh fix (source-level; live QA pending)

- Re-audited current `main` source before editing. The Password Generator loaded `site-header.js` with `defer` at the beginning of `<body>`; the deferred script therefore mounted the shared header only after HTML parsing, leaving an initial-render window in which the header did not yet exist. The script also inferred hero alignment from parsed hero markup, which was the original timing race.
- Changed `password-generator.html` to load the shared header synchronously as the first body script and added `data-ij-header-align="hero"` to the body. This gives the shared header its correct hero-aligned class before any page content is parsed/painted.
- Updated `site-header.js` to honor that explicit body marker as well as its existing hero-element detection. It injects the shared header stylesheet before inserting the header DOM.
- Removed the page-local generic `header{...}` rule that could style the injected header, and removed the obsolete `main{max-width:650px...}` cap.
- Consolidated seven Password Generator style blocks into two while preserving their cascade order. Removed stale 1516px/420px hero, 1440px main, 1392px content-width, and superseded workspace-gap overrides.
- Kept the approved desktop hero geometry unchanged: 1200px max width, 340px min-height, 42px 46px padding. Desktop workspace remains an equal two-column grid whose outer width matches the hero; mobile workspace now uses the same outer width as the mobile hero and stacks to one column.
- Commits: `1efe92e1b95fbbfab1d2fd84a0308a2ced8614c2` (Password Generator markup/CSS) and `db562ec176f5fca192e1c6c1938f065c3ea34f0e` (shared header alignment marker).
- Current source blob SHAs after the changes: `password-generator.html` = `3396d4e55ec09fa1096c5aac7346598cebda03ac`; `site-header.js` = `f482aeebfecce737b9f4f6d69232db75e8305d44`.
- Static source QA passed: two style blocks remain; no 650px/1392px/1440px/1516px/420px legacy width/hero overrides remain; hero geometry, equal desktop columns, mobile stack and shared mobile width are present; shared header JavaScript and all three page inline scripts parse.
- **Not yet verified:** a real browser refresh from first paint through completion, hard reload/cache-disabled behavior, responsive rendered geometry, and the new Pages deployment. The previous successful Pages run predates these two code commits. The earlier supplied video is not attached in this chat, so dense frame sampling was not possible here. Do not mark the header visually resolved until browser evidence is available.
- Remaining P1/P2 work is unchanged: generator interaction/accessibility/privacy browser QA; sitewide footer/contact/privacy/CMP runtime checks; APK release re-check only if a new APK workflow is triggered by this change.


### Follow-up correction — preserve head metadata after CSS consolidation

- The first CSS consolidation replacement inadvertently removed the non-CSS head metadata located between the first and second style blocks. The APK workflow caught this with its strict assertion: run `44363365139`, step `Validate tool icons, manifests, and APK matrix`, error `Missing manifest link: password-generator.html`.
- Restored the original Password Generator PWA manifest link, WebApplication JSON-LD block and SVG favicon from the pre-change source. No validator change was made.
- Correction commit: `f46b051038aa2891bdb597881938b025960c8e48`.
- Post-correction source checks pass for manifest link, JSON-LD, favicon, `install.js`, two CSS blocks, body alignment marker and synchronous header script.
- The failed APK run was caused by this temporary source regression, not by an APK manifest configuration issue. A new APK workflow run should validate the restored metadata; its result must be checked before updating APK status.


### CI and Pages follow-up — 2026-11-18 23:24 IST

- Global Footer QA run `44363575458` passed for the restored source commit `f46b051038aa2891bdb597881938b025960c8e48`.
- GitHub Pages deployment run `44363616294` passed for current `main` HEAD `ba6d3841a0b74b7ab5f5eca14658dafb00cc648b`; build, deploy and report-build-status jobs all succeeded. This deployment includes the Password Generator header/CSS fix and restored head metadata.
- APK workflow `44363575672` passed its icon/manifest/APK-matrix validation after metadata restoration. The 23-APK build stage was still in progress at this check; package count, artifact and release steps remain unverified.
- Live browser first-paint/reload and responsive visual QA remain pending; deployment success is not visual QA.


### Password Generator functional regression checks — 2026-11-18

- Ran an isolated JavaScript/DOM-stub regression harness against the current page generator script (not a real browser).
- Passed: 64-character password with all four selected character groups, minimum-one-per-group and similar-character exclusion; six-word capitalized passphrase with a two-digit suffix; 16-digit numeric PIN; clear error when no password character groups are selected; clipboard copy path.
- Found one accessibility issue: the Show/Hide button's visible text changes, but its `aria-label` remains stale; the generated-result input label also remains “Generated password” when the selected mode is passphrase or PIN. Fix this before calling the keyboard/screen-reader QA complete.
- These checks do not replace browser testing, clipboard permission testing in a real browser, keyboard-only navigation or screen-reader review.


### Service-worker/cache investigation and latest deployment

- Inspected `install.js` and `sw.js`. Service-worker registration occurs **only** on `barsulkhan.github.io`; the canonical live host `infojano.com` does not register this service worker. Therefore the v330 service-worker cache is not the cause of the canonical site's Password Generator refresh behavior.
- The GitHub Pages project-host cache is `infojano-v330` and includes `password-generator.html`, `site-header.js`, `site-footer.js` and the logo. The fetch strategy is network-first for same-origin assets with cached fallback. No cache-version bump was made because the affected canonical host does not use this service worker; reassess only if GitHub Pages-hosted PWA clients are part of the required release target.
- Latest Pages deployment run `44363901199` succeeded for main HEAD `fedc22a1179c2dc1a69b60ad0a6e5959d0b2c945`, which includes the source fix, restored metadata and latest tracker updates.
- Global Footer QA `44363575458` succeeded for the source code commit `f46b051038aa2891bdb597881938b025960c8e48`.
- APK run `44363575672` has passed manifest/icon/matrix validation; the 23-APK build stage remains in progress. Do not mark APK complete until package count, artifact upload and release publication succeed.


### Latest Pages + APK completion — 2026-11-18

- Latest Pages deployment run `44364160434` succeeded for current main HEAD `3c99d477e30ed7e0e6a263d0582990a567a1a910`.
- APK workflow run `44363575672` completed successfully after the restored metadata: icon/manifest/APK matrix validation, 23 APK builds, package-count verification, artifact upload and release publication all passed.
- Artifact: `InfoJano-Tool-APKs` (ID `14454474102`, not expired).
- Release `infojano-tool-apps-v1.1.1` currently contains exactly 23 APK assets.
- These CI/deployment results verify the source package and deployment pipeline, not browser-rendered visual behavior.


### P1 accessibility correction — 2026-11-18

- Fixed the stale screen-reader labels in `password-generator.html` (commit `bb958deb3db99eb769090f47238b07096480778e`).
- Added mode-aware result labels (`Generated password`, `Generated passphrase`, `Generated PIN`) and matching Show/Hide action labels.
- Switching modes and generating a new result now reset visibility and update the accessible labels together. Clipboard fallback now also exposes the result and changes the action label to Hide.
- Re-ran the isolated DOM-stub regression harness: all 13 checks passed, including password/passphrase/PIN generation, character constraints, Show/Hide labels, clipboard success/fallback, invalid group handling and JavaScript parse.
- This is source/logic testing only; real browser clipboard permissions, keyboard-only focus and screen-reader review remain pending. Fresh Pages/APK workflow status for this commit must be checked.


### P1/P2 source checks and deployment update — 2026-11-18

- Final static source assertions on Password Generator passed: two CSS blocks; approved desktop hero geometry; equal desktop columns; matching mobile hero/workspace width and stacked panels; no legacy 650px/1392px/1440px/1516px/420px overrides; manifest, JSON-LD, favicon and install.js retained; synchronous header-first body script; explicit alignment marker; mode-aware result labels; shared header stylesheet injected before header DOM. Shared header JS and all three inline page scripts parse.
- Password-generation privacy source check passed: generator code contains no `fetch`, `XMLHttpRequest`, `sendBeacon`, local/session storage or console logging; generation uses Web Crypto and clipboard access only. The page's separate GA4 page-view tag remains; no generated result is passed to it in the inspected source.
- Static footer coverage spot-check: Contact, Privacy Policy, 404 and homepage load `site-footer.js`; representative tool pages load `site-header.js`, which injects the shared footer. Contact and Privacy Policy contain the support email and policy/contact navigation targets. Global Footer QA also passed on run `44364594313`.
- Latest Pages deployment run `44364642099` succeeded for main HEAD `7990bb74b828745af79d1a0817175c44d9ac536b`.
- APK run `44364594298` passed validation; the 23-APK build stage was still in progress at this check.
- Live visual/browser QA remains unavailable in this session. Do not mark first-paint, hard-reload, cache-disabled, viewport rendering, CMP dialog or real-device accessibility checks complete based on source/CI alone.


### Latest CI confirmation after accessibility fix — 2026-11-18

- Password Generator accessibility correction commit `bb958deb3db99eb769090f47238b07096480778e` passed Global Footer QA run `44364594313`.
- Pages deployment run `44364890515` succeeded for main HEAD `8384ba75da5951afaa39052bcd6e4d0f4a82b5b2`, including the mode-aware result labels and Show/Hide accessibility fix.
- APK workflow run `44364594298` completed successfully: validation, 23 APK builds, package-count verification, artifact upload and release publication all passed.
- Artifact `InfoJano-Tool-APKs` ID `14454849212` is present and not expired. Release `infojano-tool-apps-v1.1.1` contains 23 APK assets.
- Remaining blocker for calling this work complete: live browser QA of first paint, normal/hard reload, cache-disabled reload, desktop/tablet/mobile rendered geometry, keyboard focus, real clipboard behavior and CMP revocation. No live interactive browser session or prior-chat video is available in this chat.


### Final deployment check for current tracker HEAD — 2026-11-18

- Pages run `44365519800` succeeded for main HEAD `32385cb6f562784b39c77ed33601cc1be1b7b435`; build, status-report and deploy jobs all passed.
- The current main branch includes the Password Generator header timing/alignment fix, consolidated CSS, restored PWA metadata and the mode-aware accessibility correction.
- APK run `44364594298` succeeded for the accessibility source commit and produced 23 APK assets in `infojano-tool-apps-v1.1.1`.
- Global Footer QA `44364594313` succeeded.
- **Release gate still open:** no live browser first-paint/reload/hard-reload/cache-disabled test, no real rendered viewport measurements, no real keyboard/screen-reader/clipboard test, and no CMP revocation dialog runtime test have been performed in this session. Do not label the overall task complete until these are verified.


### Tracker-publication deployment confirmation — 2026-11-18

- Pages run `44365697746` succeeded for tracker-updated main HEAD `8f58e1545d35808013ab532f0aa3409617e64263`; build, report and deploy jobs all passed.
- This confirms the tracker documents and the deployed site source are both published. Live interactive browser QA remains the only release gate still blocked in this session.


### Re-check after resuming work — 2026-11-18

- Re-read the current handoff and tracker from `main`, then re-fetched the live source blobs. Current `main` HEAD at this check: `3116dd22343d5ec8c804a93dcaccd14cccba730e`.
- Current source blobs: `password-generator.html` `b620313ca8838916a2de7cbbdfaab0c2362d1613`; `site-header.js` `f482aeebfecce737b9f4f6d69232db75e8305d44`; `install.js` `425241344dd48aefdf83da78d8b2afbbf6a3870a`; `sw.js` `17e767b205c01e961b3b7b1ba18455336ff3175c`.
- Current Pages deployment run `44365899700` completed successfully for this exact main HEAD.
- Re-verified Password Generator source: two style blocks; no page-global generic `header{...}` selector; body alignment marker is present; shared header script is the first body child and is parser-blocking (not deferred); header CSS is inserted before the shared header DOM; approved hero rules remain 1200px max-width, 340px min-height, 42px 46px padding; workspace remains equal two-column desktop and one-column mobile with matching 1200px/mobile outer widths.
- Re-verified the custom-domain service-worker scope: `install.js` registers the worker only on `barsulkhan.github.io`; the canonical `infojano.com` host does not register it. The Pages-host worker uses cache `infojano-v330`, but it is not the custom-domain refresh path.
- Important remaining timing observation: the header is still created client-side by the external `site-header.js` after that script is fetched and executed; there is no static header element in the page HTML. The synchronous first-body script prevents later page content from preceding header insertion, but source inspection alone cannot establish that the header is present in the browser's very first paint. This is a possible first-paint gap, not proof of the exact transition seen in the user's video.
- Attempted live page/script access from this session, but the runtime could not resolve `infojano.com` (DNS/network unavailable) and the web page fetch was inaccessible. This is a limitation of this QA session, not evidence that the public site is down.
- **Do not mark header refresh resolved.** Browser first-paint, normal reload, hard reload, cache-disabled reload and rendered viewport measurements remain unverified. The previously supplied video is not available in this session for dense frame extraction.


### 2026-11-18 — User-provided approved header reference applied
- User supplied the Elapsed Time Calculator header screenshot as the exact visual reference and asked to make Password Generator match it.
- Updated only the Password Generator page's final CSS with a page-scoped desktop override: white shared-header background, flat full-width header surface, wider header inner row, larger logo, and larger pale navigation controls to match the reference proportions. Existing shared-header markup remains in use.
- Commit: `ddbfbcb5e2fef40527673757850421eea478e7ba`.
- Confirmed in source that the approved Password Generator hero geometry remains unchanged: 1200px max-width, 340px min-height, 42px 46px padding; the workspace grid rules were not edited.
- Deployment and real browser/live visual verification are still pending. Do not claim the live header is fixed until the new commit is deployed and checked on desktop/mobile, including a hard refresh.


### 2026-11-18 — Supplied custom-header code implemented on Password Generator
- Replaced the earlier desktop-only approximation with a page-scoped implementation of the user's supplied `.custom-header` design: white background, subtle gray bottom border, pill controls, matching language dropdown chevron, and the provided <=768px stacked responsive behavior.
- Uses the existing InfoJano SVG logo and shared navigation links; no placeholder logo URL was introduced. Shared `site-header.js` was not modified, so other tools/homepage are unaffected.
- Source commit: `de7055b9704a700aa6398cba5fbb41f8b14c4630`.
- Confirmed the Password Generator Hero remains at 1200px max width, 340px min-height and 42px 46px padding. Deployment and live desktop/mobile visual QA are pending.


### 2026-11-19 — Password Generator feature follow-up (Header/Hero frozen)
- User explicitly instructed that the Header and Hero Banner are final and must not be changed while remaining Password Generator work proceeds.
- Updated only the generator's inline feature JavaScript in `password-generator.html` (no Header/Hero markup or CSS edits): local heuristic feedback now flags common-password fragments, repeated characters, sequential/keyboard patterns and date-like patterns; PIN feedback flags simple sequences/repeated digits/date-like values; passphrase feedback explicitly describes itself as a local word-count estimate.
- Manual changes to password length or character options now switch the preset selector to `Custom settings`, preventing the UI from showing a stale preset after customization.
- Source commit: `e73cddeee26680c5faeba48868f9ebdc2abe434b`; page blob: `dc077cd282446340086aa5dcb6eb77004389a91b`.
- Static checks: two style blocks remain; supplied Header CSS marker and approved Hero 1200px / 340px / 42px 46px rule remain present; new feedback and preset-sync code present. No Header/Hero edits were made in this feature commit.
- Not yet complete: run actual JS syntax/regression tests and browser checks for all modes, keyboard/assistive technology, clipboard failure, and desktop/tablet/mobile. Workflow-run lookup and commit status currently return no runs/statuses; do not claim deployment or live verification.


### 2026-11-19 — Password Generator QA expansion (Header/Hero remain locked)
- Added isolated Playwright browser regression suite at `qa/browser/tests/password-generator.spec.js` and dedicated GitHub Actions workflow `.github/workflows/password-generator-browser-tests.yml`. Runs Chromium Desktop Chrome + Pixel 7 projects from existing `qa/browser` setup.
- Coverage includes: password group/length/exclusion/minimum-each constraints; invalid empty groups; preset-to-Custom synchronization; passphrase word count/capitalization/optional numeric suffix; numeric PIN length; mode-aware result labels and Show/Hide aria-labels; clipboard success and denied-write fallback; unavailable secure randomness; no generated credential in outgoing requests; keyboard focus; 1440/1024/768/390/360px overflow and Hero/workspace edge alignment.
- Locally executed a lightweight DOM-stub harness against the production generator script: 9/9 checks passed (password length, passphrase composition and label, 16-digit PIN and label, Show/Hide, clipboard success, clipboard fallback, empty-group rejection). Parsed all three inline page scripts and the Playwright test source successfully.
- Playwright itself has not run in this environment (dependency/browser install unavailable here). The new GitHub Actions workflow was added to run it on pushes/PRs touching the page or QA suite; this connector does not expose push-triggered run listing, so workflow result is not yet confirmed.
- Static source re-check: Header override marker and Hero 1200px max-width / 340px min-height / 42px 46px padding are unchanged; two CSS blocks remain. No Header or Hero changes in this QA expansion.
- Outstanding: obtain CI run result, real browser/clipboard permission and screen-reader review, live hard-refresh visual QA and deployment confirmation. Do not mark complete until these checks pass.


### 2026-11-19 — Feature-led SEO content refresh (Header/Hero frozen)
- Reviewed the actual Password Generator UI and implementation. Verified feature inventory: random password (8–64 chars), Balanced/Long/Maximum presets (16/24/32), lowercase/uppercase/numbers/symbols, exclude similar characters (O/0/I/l/1), require at least one from each selected group, memorable passphrase (4–6 words; hyphen/period/underscore/space; optional capitalization and two-digit number), numeric PIN (4–16 digits), local heuristic strength/pattern feedback, Show/Hide, Copy with manual fallback, Regenerate, Custom preset sync, and browser Web Crypto generation.
- Reviewed Google search intent and competitor feature language. Primary intent: free/online/random password generator. Supporting clusters: strong/secure password generator; passphrase/memorable password generator; PIN/numeric PIN generator; password length and character options; exclude similar characters; copy/regenerate; local/private browser generation; strength feedback. Google's official Keyword Planner guidance says it provides keyword ideas and location-specific average monthly searches; precise numeric volume needs Keyword Planner account access and location settings.
- Attempted Ahrefs keyword metrics for India and US; connector returned “Insufficient plan”, so no search volume/KD/CPC numbers are asserted. Google Keyword Planner account was not connected/accessible in this session. Treat the keyword groups as SERP/feature-intent research, not measured volume rankings.
- Updated only page metadata and informational content: title/description/social metadata, feature-led section covering the three actual modes and controls, and 8 accurate FAQs. Did not add features the tool does not have (e.g. breach database checks, entropy/crack-time calculator, bulk generation, custom character lists, history, or EFF wordlist claims).
- Source commit: `98c765afe233b20f51c9b4107ae9152e80d7ce11`; current page blob after update: `a085e95c3bfc73edf222d73118c9a9659ec55e67`.
- Static checks: all three inline scripts parse; one feature section and 8 FAQs present; canonical remains `https://infojano.com/password-generator.html`; Header CSS marker and approved Hero 1200px / 340px / 42px 46px rules remain present; two-column desktop and one-column mobile workspace rules remain present. No Header/Hero markup or CSS edits were made.
- Pending: actual Google Keyword Planner data (India + global/US) once account access is available; check Search Console queries after indexing; browser visual/regression run and Pages deployment/live QA. Commit workflow lookup returned no associated runs (connector view is PR-filtered); do not claim live deployment or ranking impact.


### 2026-11-19 — SEO final metadata/sitemap pass
- Aligned Open Graph and Twitter titles with the updated page title; aligned JSON-LD WebApplication description with the page meta description.
- Updated the Password Generator sitemap entry with `<lastmod>2026-11-19</lastmod>`; canonical URL remains unchanged.
- Final source verification: title/OG/Twitter titles match; meta description present; JSON-LD parses; canonical correct; 2 style blocks; feature section and 8 FAQs present; sitemap lastmod present. Header CSS marker and approved Hero geometry remain untouched.
- Commits: SEO content `98c765afe233b20f51c9b4107ae9152e80d7ce11`; social metadata `87c95e168892275c3128175719da55e7cadcd014`; sitemap `87a6fbdf5de4957f1a34fdcaab6afc8f7fb272c3`; structured-data description `da4cf52e6a67845fb3bc8faf5c764da1fee5e275`.
- Release gate: GitHub connector reports no status checks on the latest commits and its workflow-run wrapper only exposes PR-triggered runs. Live URL fetch is unavailable in this environment. Do not mark deployment, live rendering, indexing, or ranking as complete. Next: confirm Pages deployment in Actions, run browser QA and verify live page + sitemap, then submit/inspect URL in Search Console if account access exists.


### 2026-11-19 — Keyword research applied to Password Generator copy
- OpenSEO project `InfoJano SEO` created for `infojano.com`. Researched keyword ideas for Password Generator and fetched country-specific metrics for India (location 2356) and the United States (location 2840), English.
- High-demand terms in the returned data: India — `password generator` 74,000; `random password generator` 22,200; `strong password generator` 14,800. USA — `password generator` 368,000; `random password generator` 74,000; `strong password generator` 33,100. Metrics are third-party estimates, not Google Search Console performance.
- Applied the strong/random/free/online/secure keyword cluster naturally to the existing feature copy by revising the random-password section heading and opening sentence. Existing page title, meta description, H1 and FAQs already target the primary/secondary phrases; no keyword stuffing or unsupported feature claims added.
- Header and Hero remain frozen. Only the feature-section copy changed; no Header/Hero markup or CSS was touched.
- Source commit: `201d701cace148e9f48aff951bd24d97ff01bcfd`.
- Remaining before calling SEO task fully verified: check Pages deployment for this commit, live page and sitemap, run browser/Playwright QA, and later inspect Search Console indexing/query data. No live deployment, indexing or ranking improvement is claimed.

### 2026-11-19 — Google indexing/canonical source audit follow-up
- Search Console property `sc-domain:infojano.com` is connected; all 108 sitemap URLs were inspected (88 indexed, 20 other states). Detailed findings and current follow-ups are in `project-notes/GOOGLE-INDEXING-AND-SEO-PENDING-WORK.md`.
- Reinspected 10 representative URLs. Percentage-page canonical anomalies reported by Search Console contain stale malformed suffixes in the Nov 11 inspection record, but current representative source tags are clean and correctly point to infojano.com. No speculative canonical edits were made.
- Found and corrected two actual metadata inconsistencies in `id-card-print-studio.html`: `og:url` and WebPage JSON-LD `url` pointed to the GitHub Pages host while the canonical pointed to infojano.com. Commit: `6351b3d1774bd5e55edd2f6662d675ff35c1e3f6`.
- Password Generator Header and Hero were not edited. Deployment and post-deploy/browser verification are still pending; do not infer success from older workflow runs.
