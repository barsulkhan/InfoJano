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
