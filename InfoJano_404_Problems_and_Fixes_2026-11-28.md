# InfoJano — Search Console 404 Audit & Fix Log
**তারিখ:** 28 November 2026  
**Repository:** `barsulkhan/InfoJano`  
**Status:** Internal navigation fixes merged and production deployment completed; Search Console URL Inspection and full HTTP-status verification remain pending.

---

## 1. কাজের উদ্দেশ্য
Google Search Console-এ রিপোর্ট হওয়া 404 / not-found URL এবং broken internal navigation পরীক্ষা করে প্রকৃত internal-link সমস্যা সংশোধন করা। সমতুল্য replacement না থাকলে অজানা বা malformed URL-এ অযথা redirect যোগ করা হয়নি।

## 2. পাওয়া সমস্যাগুলো

### 2.1 Search Console export-এ দেখা URL pattern
প্রদত্ত Search Console CSV-তে নিচের malformed URL-গুলো দেখা গিয়েছিল:
- `percentage-change.html$3<meta property=`
- `target-marks-calculator.html$3<meta property=`
- `remove-gst-from-total-calculator.html$3<script type=`

এ ছাড়া export-এ আরও কিছু path ছিল, যেমন:
- `/InfoJano/index.html`
- `/tools.html`
- `/home/`
- `/Height`
- `/100)`
- `/100)^ `

**বিশ্লেষণ:** `$3<meta` / `$3<script`-এর মতো URL pattern malformed URL generation বা পুরোনো metadata/link corruption-এর ইঙ্গিত দিতে পারে। নমুনা পেজের বর্তমান HTML source-এ canonical/OG metadata সঠিকভাবে গঠিত ছিল। এগুলোকে নিশ্চিত live defect ধরে কোনো speculative redirect যোগ করা হয়নি। প্রতিটি URL-এর উৎস Google URL Inspection দিয়ে আলাদাভাবে যাচাই করা বাকি।

### 2.2 Broken internal navigation links
নিচের ছয়টি HTML ফাইলে navigation বা related link-এর path সমস্যা পাওয়া গিয়েছিল:
- `add-subtract-date-calculator.html`
- `business-days-calculator.html`
- `date-duration-calculator.html`
- `days-between-dates-calculator.html`
- `document-studio.html`
- `savings.html`

নির্দিষ্ট সমস্যা:
- চারটি date calculator পেজে `tools.html`-এ যাওয়া link-গুলো সঠিক tools-grid anchor-এ নির্দেশ করছিল না।
- `savings.html`-এ `./tools.html` link ভুল/পুরোনো destination-এ নির্দেশ করছিল।
- `document-studio.html`-এ পুরোনো `/InfoJano/` prefix-যুক্ত navigation ও asset path ছিল; logo এবং install script path-ও সংশোধন প্রয়োজন ছিল।

## 3. যে পরিবর্তনগুলো করা হয়েছে

| ফাইল | সংশোধন |
|---|---|
| `add-subtract-date-calculator.html` | `tools.html` link → `index.html#toolGrid` |
| `business-days-calculator.html` | `tools.html` link → `index.html#toolGrid` |
| `date-duration-calculator.html` | `tools.html` link → `index.html#toolGrid` |
| `days-between-dates-calculator.html` | `tools.html` link → `index.html#toolGrid` |
| `savings.html` | `./tools.html` → `./index.html#toolGrid` |
| `document-studio.html` | stale `/InfoJano/` navigation prefixes সরানো; logo path `/InfoJano/infojano-mark.svg` → `/infojano-mark.svg`; script path `/InfoJano/install.js` → `install.js` |

## 4. যেসব পরীক্ষা সম্পন্ন হয়েছে
- `index.html`-এ `id="toolGrid"` anchor উপস্থিত—যাচাই করা হয়েছে।
- পরিবর্তিত ছয়টি HTML ফাইলে script opening/closing tag balance পরীক্ষা করা হয়েছে।
- পাঁচটি পুরোনো `tools.html` link সরানো হয়েছে—যাচাই করা হয়েছে।
- Document Studio-র `install.js` ফাইলের অস্তিত্ব এবং stale path সরানো হয়েছে—যাচাই করা হয়েছে।
- Sitemap-এর 108টি URL path repository-র file inventory-র সঙ্গে মিলেছে: **108/108 matching repository files**।
- PR head-এ GitHub Actions `build` ও `validate` checks সফল হয়েছে।
- Cloudflare Worker preview/build check সফল হয়েছে।
- Merge-এর পর GitHub Actions static-site `deploy` job সফলভাবে সম্পন্ন হয়েছে।
- PR #389 merged হয়েছে।

## 5. Merge ও deployment তথ্য
- **PR:** [#389 — Fix broken internal navigation URLs found in Search Console](https://github.com/barsulkhan/InfoJano/pull/389)
- **Merge commit:** `35934604560744b89c2a7dcf43565245bab3130d`
- **Merge date:** 28 November 2026
- **Production deployment:** GitHub Actions deploy job সফল।

## 6. Sitemap ও robots.txt পর্যবেক্ষণ
পরীক্ষার সময় repository-তে:
- `sitemap.xml`-এ 108টি URL ছিল।
- Search Console sitemap report-এ 108 submitted, 0 errors, 0 warnings দেখানো হয়েছিল।
- `robots.txt`-এ সব crawler-এর জন্য root allow এবং `https://infojano.com/sitemap.xml` sitemap directive ছিল।
- Custom `404.html` পেজে `noindex` এবং homepage-এ ফেরার link ছিল।

**গুরুত্বপূর্ণ:** sitemap-এ 108 URL থাকা বা সব path repository-তে মেলা মানেই সব URL live-এ HTTP 200 দিচ্ছে বা Google index করেছে—এমন নয়।

## 7. যেসব বিষয় এখনো যাচাই বাকি
1. Search Console-এর Page Indexing / URL Inspection-এ প্রতিটি reported URL-এর বর্তমান status এবং referring page দেখা।
2. Production-এ প্রতিটি reported URL-এর প্রকৃত HTTP response status (200/301/404/410) যাচাই করা। Web page fetch-এ পাওয়া internal error-কে HTTP 404-এর প্রমাণ ধরা হয়নি।
3. `404.html` কাস্টম পেজটি বাস্তবে HTTP 404 status-সহ পরিবেশিত হচ্ছে কি না নিশ্চিত করা।
4. Google Search Console-এ সংশোধনের পর **Validate Fix** চালানো এবং ফলাফল পর্যবেক্ষণ করা।
5. Android APK build-এর শেষ ফলাফল আলাদা workflow হিসেবে যাচাই করা; এটি 404 website fix-এর acceptance criterion নয়।

## 8. Redirect নীতি ও সতর্কতা
- কোনো পুরোনো URL-এর সত্যিকারের সমতুল্য নতুন URL থাকলেই কেবল redirect করা উচিত।
- অজানা, malformed বা unrelated URL-কে homepage-এ blanket redirect করা হয়নি।
- `$3<meta` / `$3<script` malformed URL-গুলোর জন্য প্রমাণ ছাড়া redirect তৈরি করা হয়নি।

## 9. Scope / সুরক্ষিত অংশ
এই PR-এ homepage, homepage hero/banner, shared `site-header.js`, sitemap, robots.txt বা অন্য কোনো hero/banner design পরিবর্তন করা হয়নি। পরিবর্তন সীমাবদ্ধ ছিল উপরে উল্লেখ করা ছয়টি HTML ফাইলের internal link/path-এ।

---
**সারাংশ:** PR #389-এর মাধ্যমে শনাক্ত broken internal navigation path সংশোধন, automated checks এবং production deployment সম্পন্ন। তবে Search Console URL Inspection, reported URL-গুলোর exhaustive live HTTP status এবং Google validation এখনো আলাদা follow-up কাজ।
