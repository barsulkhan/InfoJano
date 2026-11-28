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


## 10. অতিরিক্ত Google Search Console URL Inspection — 28 November 2026
InfoJano-র connected Search Console property `sc-domain:infojano.com` থেকে 10টি URL inspect করা হয়েছে। এগুলো existing Google index status; এটি live HTTP status test নয় এবং inspection চালানো মানেই Google re-index করেছে এমন নয়।

| URL | Google-এর বর্তমান ফলাফল | পর্যবেক্ষণ |
|---|---|---|
| `/` | Submitted and indexed — PASS | Google ও user canonical দুটোই `https://infojano.com/`; fetch successful |
| `/document-studio.html` | Submitted and indexed — PASS | Google ও user canonical একই; fetch successful |
| `/add-subtract-date-calculator.html` | Submitted and indexed — PASS | Google ও user canonical একই |
| `/savings.html` | Duplicate — Google chose different canonical | Google canonical `https://barsulkhan.github.io/InfoJano/savings.html`; declared canonical `https://infojano.com/savings.html` |
| `/business-days-calculator.html` | Duplicate — Google chose different canonical | Google canonical GitHub Pages URL `https://barsulkhan.github.io/InfoJano/business-days-calculator.html`; declared canonical infojano.com |
| `/date-duration-calculator.html` | Duplicate — Google chose different canonical | Google canonical GitHub Pages URL; declared canonical infojano.com |
| `/days-between-dates-calculator.html` | Duplicate — Google chose different canonical | Google canonical GitHub Pages URL; declared canonical infojano.com |
| `/404.html` | URL is unknown to Google | Google index report থেকে HTTP response code নির্ধারণ করা যায়নি |
| `/tools.html` | Not found (404) — NOT_FOUND | Google-এর last crawl 18 Nov 2026; referring page ছিল `business-days-calculator.html` |
| `/sitemap.xml` | URL is unknown to Google | Sitemap discovery/processing status আলাদা sitemap report-এ যাচাই করতে হবে |

### গুরুত্বপূর্ণ নতুন finding
চারটি পেজে Google-এর নির্বাচিত canonical `barsulkhan.github.io/InfoJano/`-এ যাচ্ছে, যদিও পেজগুলোর declared canonical `infojano.com`। এটি সরাসরি broken-link fix নয়; duplicate-host/canonical consolidation issue। Search Console-এ Google-এর selected canonical বদলানোর জন্য দুই host-এর content, redirects, canonical signals ও internal links একসঙ্গে পরীক্ষা করা দরকার। Homepage ও shared header/site configuration সুরক্ষিত থাকায় এবং এ কাজ 404-link fix-এর scope-এর বাইরে হওয়ায় এখানে কোনো domain-wide redirect বা canonical পরিবর্তন করা হয়নি।

### URL Inspection সীমাবদ্ধতা
- Inspection-এর `lastCrawlTime` আগের crawl-এর সময়; PR #389 deploy-এর পর নতুন crawl হয়েছে—এমন নিশ্চয়তা নয়।
- `/tools.html`-এর জন্য Google স্পষ্টভাবে Not found (404) দেখিয়েছে। সংশোধিত internal links এখন `index.html#toolGrid`-এ পাঠায়; পুরোনো URL-টি অপ্রয়োজনীয় redirect দিয়ে বাঁচানো হয়নি।
- `404.html`-এর inspection-এ URL unknown ছিল; এটি custom 404 page বাস্তবে HTTP 404 status ফেরায় কি না প্রমাণ করে না।
- এই inspection batch-এর ফল Search Console URL Inspection API থেকে পাওয়া; Google-এর **Validate Fix** চালানো হয়নি।

## 11. পরবর্তী নিরাপদ পদক্ষেপ
1. `barsulkhan.github.io/InfoJano/` এবং `infojano.com` host-এর canonical/redirect consolidation আলাদা করে audit করা; homepage/hero/shared header পরিবর্তনের আগে explicit approval নিতে হবে।
2. Search Console-এ PR #389 deploy-এর পর Google recrawl হওয়ার জন্য অপেক্ষা করে affected URL-গুলো পুনরায় inspect করা।
3. Cloudflare/GitHub Pages hosting layer-এ `/404.html`-এর actual HTTP status পরীক্ষা করা।
4. GSC Page Indexing report-এর reported URLs একে একে inspect করে কেবল equivalent replacement থাকলে redirect নির্ধারণ করা।


## 12. Post-deployment site crawl — 28 November 2026
A fresh same-origin crawl of `https://infojano.com/` completed successfully.
- **Crawl coverage:** 50 pages fetched, 74 additional discovered URLs not crawled because the 50-page limit was reached.
- **HTTP fetch results:** all 50 crawled pages returned HTTP 200 to the audit crawler; all were indexable in the crawler report; all were in sitemap; no missing image alt text found in the crawled set.
- **Issue summary:** 3 findings total:
  - 1 warning: crawl page limit (50 of at least 124 discovered URLs; 74 not crawled).
  - 1 informational: `image-resizer.html` meta description is 161 characters (tool guideline max 160).
  - 1 informational: `image-resizer.html` title is 65 characters (tool guideline max 60).
- **Broken internal links / server errors / redirect loops:** none appeared in the returned issue list for this 50-page crawl.
- **Performance note:** crawler response times on sampled pages were generally around 14–91 ms; this is crawler fetch timing, not a Lighthouse/Core Web Vitals test.
- **Audit ID:** `38220a90-5978-4b63-9134-38b2071a42f3`.

**Coverage limitation:** this was a 50-page crawl, not a complete crawl of all discovered URLs. Therefore “no broken internal links” applies only to the completed crawl's findings and is not a site-wide guarantee.


## 13. Follow-up remediation — 28 November 2026
- A second 50-page crawl completed as audit `9525f979-f042-47f7-a9d1-751224cd0217`. It returned the same three findings: 50-page crawl cap (74 discovered URLs left), plus the image-resizer title (65 chars) and description (161 chars). All 50 fetched pages returned HTTP 200, were indexable and in the sitemap; no missing image alt text, broken internal links, server errors or redirect loops appeared in this crawl's issue list.
- The image-resizer metadata was shortened in PR [#390](https://github.com/barsulkhan/InfoJano/pull/390), merged to `main` as commit `349e15ae48f70c13e8e0a1067cb39a5055f6a4c9`. New title: `Free Image Resizer | JPG, PNG & WebP – InfoJano` (47 characters). New meta description: 151 characters. Open Graph and Twitter title/description were aligned. Only metadata in `image-resizer.html` changed; hero/banner, CSS, JS, shared header and homepage were untouched.
- The previous malformed Search Console canonical strings were rechecked against current repository source and prior indexing audit notes: affected pages have properly closed, self-referencing `infojano.com` canonical tags, and the reported crawls date from 11 Nov 2026. No malformed suffix was found in the current source search. No speculative markup edits were made.
- The four Google-selected GitHub Pages canonicals remain an unresolved host-consolidation signal. Their current source canonical tags are correct; changing tags alone would not reliably resolve Google's choice. No sitewide redirect, CNAME, Pages configuration, homepage, or shared header changes were made because those could affect protected pages and need a separately scoped hosting-level plan.
- `/tools.html` remains an old Google 404 from its 18 Nov crawl. PR #389 replaced the known internal reference with `index.html#toolGrid`; no current internal link was found in the repaired path. No artificial redirect page was added.
- The audit tool still capped the crawl at 50 pages even when a 100-page budget was requested. The remaining 74 discovered URLs therefore remain outside this crawl's evidence. Search Console Validate Fix and post-merge Google recrawl have not been run/confirmed.
