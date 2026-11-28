# InfoJano — Project Handoff & Operations Log

> এই নথি ভবিষ্যৎ ChatGPT/ডেভেলপার সেশনে প্রকল্পের ধারাবাহিকতা বজায় রাখার প্রধান রেফারেন্স। কাজ শুরুর আগে এটি, তারপর PROJECT_RULES.md, এবং প্রয়োজনমতো সংশ্লিষ্ট audit log পড়তে হবে।
>
> শেষ আপডেট: 28 November 2026
> Repository: https://github.com/barsulkhan/InfoJano
> Live site: https://infojano.com/

## 1. স্থায়ী কাজের নিয়ম

- পরিবর্তনের আগে PROJECT_RULES.md পড়তে হবে।
- মালিকের স্পষ্ট অনুমতি ছাড়া website code, HTML/CSS/JS, assets, configuration, protected workflow, feature, deployment বা DNS/hosting setting পরিবর্তন করা যাবে না।
- এই handoff/log/README-র মতো documentation update করার অনুমতি ব্যবহারকারী 28 Nov 2026-এ স্পষ্টভাবে দিয়েছেন। এই অনুমতি website code বা hosting settings পরিবর্তনের অনুমতি নয়।
- কাজের আগে বর্তমান অবস্থা যাচাই করতে হবে; অনুমানকে fact হিসেবে লেখা যাবে না।
- প্রতিটি কাজের log-এ তারিখ, উদ্দেশ্য, আগের অবস্থা/সমস্যা, কী করা হয়েছে, কীভাবে পরীক্ষা হয়েছে, ফলাফল, অমীমাংসিত বিষয় এবং পরবর্তী পদক্ষেপ লিখতে হবে।
- কোনো secret, password, API key, private token বা ব্যক্তিগত account identifier এই নথিতে রাখা যাবে না।

## 2. ডোমেইন, registrar, DNS ও hosting — বর্তমান জানা তথ্য

### Domain / registrar
- Domain: infojano.com
- Spaceship-এর Domain Manager / Advanced DNS স্ক্রিনে domain দেখা গেছে; তাই বর্তমান registrar/domain account provider হিসেবে Spaceship নিশ্চিত।
- Domain কোথায়/কীভাবে প্রথম purchase করা হয়েছিল, purchase date, order number বা payment details এই কথোপকথনের প্রমাণে নিশ্চিত নয়। ভবিষ্যতে প্রয়োজন হলে Spaceship-এর domain order/invoice history দেখে নিশ্চিত করতে হবে; ব্যবহারকারীকে অকারণে আবার জিজ্ঞাসা করা যাবে না।
- ব্যবহারকারীর দেওয়া screenshot-এ Spaceship-এ আগের nameserver ছিল launch1.spaceship.net এবং launch2.spaceship.net।

### Nameserver delegation
- Spaceship থেকে Cloudflare custom nameservers-এ পরিবর্তন করা হয়েছে:
  - ursula.ns.cloudflare.com
  - marek.ns.cloudflare.com
- Spaceship propagation detail screen-এ এক পর্যায়ে status In propagation ছিল; পরের screenshot-এ status ONLINE দেখা যায়।
- Cloudflare dashboard-এ “Your domain is now protected by Cloudflare” / domain protected confirmation দেখা গেছে।
- তাই 28 Nov 2026-এর শেষ screenshot অনুযায়ী Cloudflare onboarding/activation সফল হয়েছে বলে UI-তে দেখা গেছে। DNS resolution/SSL পুরোপুরি সব network-এ যাচাই হয়েছে—এমন দাবি করা যাবে না।

### Cloudflare DNS records — screenshot-এ দেখা imported records

| Name | Type | Content | Proxy status |
|---|---|---|---|
| infojano.com | A | 185.199.108.153 | Proxied |
| infojano.com | A | 185.199.109.153 | Proxied |
| infojano.com | A | 185.199.110.153 | Proxied |
| infojano.com | A | 185.199.111.153 | Proxied |
| www.infojano.com | CNAME | barsulkhan.github.io | Proxied |
| infojano.com | TXT | Google site verification token | DNS only |

- Screenshot-এ 6টি record দেখা গিয়েছিল; TXT token-এর সম্পূর্ণ value এখানে ইচ্ছাকৃতভাবে কপি করা হয়নি।
- Cloudflare DNS screen-এ email recommendation দেখা গিয়েছিল: @infojano.com address-এ email পৌঁছাবে না, MX record নেই। ব্যবহারকারী জানিয়েছেন তিনি @infojano.com email ব্যবহার করেন না। ভবিষ্যতে email চালু করতে চাইলে MX/SPF/DKIM/DMARC আলাদা করে configure করতে হবে।
- DNS records/Proxy status ভবিষ্যতে Cloudflare dashboard-এ পুনরায় যাচাই করতে হবে; screenshot-এর অবস্থা পরবর্তীতে বদলাতে পারে।

### Website hosting / source
- GitHub repository: barsulkhan/InfoJano
- Default branch: main
- Hosting: GitHub Pages (repository metadata-তে Pages enabled ছিল)
- Root CNAME file content: infojano.com
- Root CNAME এবং GitHub Pages configuration বদলানো হয়নি।
- Cloudflare এখানে DNS/proxy/edge layer; website source repository GitHub-এই।

## 3. 28 November 2026 — Cloudflare redirect: /tools.html

### কেন কাজটি করা হয়েছে
- Google Search Console-এর পুরোনো record-এ https://infojano.com/tools.html Not found (404) দেখাচ্ছিল; last crawl ছিল 18 Nov 2026।
- PR #389-এ site-এর পরিচিত internal navigation references index.html#toolGrid-এ সংশোধন করা হয়েছিল। ফলে current internal links আর পুরোনো tools.html path ব্যবহার করছিল না।
- পরেও পুরোনো external/bookmarked URL-এ কেউ এলে Tools section-এ পাঠানোর জন্য Cloudflare edge redirect বেছে নেওয়া হয়।
- GitHub Pages-এর জন্য Cloudflare Pages-এর _redirects file ব্যবহার করা ঠিক হবে না; repository-তে root _redirects, _config.yml, wrangler.toml ছিল না। এই কাজের জন্য Cloudflare Redirect Rules ব্যবহার করা হয়েছে।

### Cloudflare UI-তে তৈরি করা rule
- Rule name: InfoJano Tools Page Redirect
- Rule type: Single Redirect / Static URL redirect
- Match field: URI Path
- Operator: equals
- Value: /tools.html
- Expression preview screenshot-এ: (http.request.uri.path eq "/tools.html")
- Destination: https://infojano.com/index.html#toolGrid
- Status code: 301 — Permanent Redirect
- Preserve query string: Off (user unticked it before deployment)
- Cloudflare rule validation: Passed
- Rule deployed: Cloudflare list showed 1 of 10 Redirect Rules and the name “InfoJano Tools Page Redirect”.
- Note: Screenshot-এ match expression-এ host condition ছিল না; এটি zone-এর মধ্যে URI path /tools.html match করে। ভবিষ্যতে host-specific matching দরকার মনে হলে আগে rule inspect করে প্রভাব যাচাই করতে হবে; এখনকার rule অকারণে পরিবর্তন করা যাবে না।

### Live test — user screenshot evidence
- ব্যবহারকারী mobile Chrome-এ https://infojano.com/tools.html খুলেছেন।
- Browser address bar-এ infojano.com/index.html দেখা গেছে।
- Page-এ InfoJano homepage এবং Popular Tools grid দেখা গেছে।
- এই screenshot-এ browser URL fragment #toolGrid স্পষ্ট দেখা যায়নি; তাই safe statement: redirect homepage/index page-এ নিয়ে গেছে এবং Tools grid একই screen-এ দৃশ্যমান ছিল। Full HTTP response headers বা exact fragment retention আলাদাভাবে network-level test করা হয়নি।
- ব্যবহারকারীর screenshot-এ page-এ “No matching tool found…” message-ও দেখা গেছে; এটি redirect target rendering-এর বাইরে আলাদা UI/search-state বিষয় হতে পারে। Redirect success-এর জন্য এটি HTTP failure প্রমাণ করে না।
- Conclusion: UI-level test successful; full 301 response/header verification এখনো করা হয়নি।

## 4. আগের 404 / SEO কাজের রেফারেন্স

সম্পূর্ণ historical findings, PRs, Search Console inspection, crawler limits ও remaining issues এখানে আছে:
- InfoJano_404_Problems_and_Fixes_2026-11-28.md

গুরুত্বপূর্ণ রেফারেন্স:
- PR #389: https://github.com/barsulkhan/InfoJano/pull/389 — broken internal navigation fixes.
- Merge commit: 35934604560744b89c2a7dcf43565245bab3130d.
- PR #390: https://github.com/barsulkhan/InfoJano/pull/390 — image-resizer.html metadata shortening.
- Merge commit: 349e15ae48f70c13e8e0a1067cb39a5055f6a4c9.
- Audit log-এ Search Console canonical duplication (Google choosing barsulkhan.github.io/InfoJano/... for some pages), stale crawl records, and indexing follow-ups documented.
- 50-page crawler limit meant all discovered pages were not fully crawled in those runs.
- Random missing-path test in audit log returned HTTP 404.
- Do not treat “URL unknown to Google” or “Crawled — currently not indexed” as proof of HTTP 404.

## 5. ভুল/ঝুঁকি এবং কীভাবে এড়ানো হয়েছে

1. ভুল hosting assumption এড়ানো: GitHub Pages site-এ Cloudflare Pages-এর _redirects file যোগ করার বদলে Cloudflare Redirect Rules নেওয়া হয়েছে।
2. Nameserver propagation চলাকালে তাড়াহুড়ো না করা: Spaceship UI প্রথমে “In propagation” দেখিয়েছিল; পরে ONLINE/Cloudflare protected confirmation এসেছে।
3. Query string অপ্রয়োজনে বহন না করা: redirect form-এ Preserve query string untick করা হয়েছে।
4. ভুলভাবে “সব verified” না বলা: mobile browser screenshot destination page দেখিয়েছে; কিন্তু raw HTTP 301 headers, DNS resolver-by-resolver propagation, TLS configuration independently পরীক্ষা করা হয়নি।
5. Purchase history অনুমান না করা: Spaceship registrar/provider নিশ্চিত, কিন্তু original order/purchase details এখনও অজানা; invoice history ছাড়া বানিয়ে লেখা যাবে না।

## 6. পরবর্তীবার কাজ শুরু করার checklist

1. এই নথি এবং PROJECT_RULES.md পড়ুন।
2. ব্যবহারকারীকে একই তথ্য আবার জিজ্ঞাসা করার আগে এই নথি, GitHub repository, Cloudflare/Spaceship screenshots বা connected source-এ খুঁজুন।
3. Cloudflare zone status, nameservers, DNS records ও proxy state বর্তমান dashboard-এ inspect করুন; পুরোনো screenshot-কে current state ধরে নেবেন না।
4. Redirect Rules-এ InfoJano Tools Page Redirect আছে কি না, Enabled status কী, expression/destination/status code ঠিক আছে কি না inspect করুন।
5. প্রয়োজন হলে fresh browser/incognito এবং network-level response/header test করে /tools.html-এর 301, Location target, final page এবং unrelated 404 behaviour যাচাই করুন।
6. Registrar purchase date/order details দরকার হলে Spaceship account-এর order/invoice history দেখুন। Password/OTP বা payment credentials চাইবেন/সংরক্ষণ করবেন না।
7. নতুন কাজ শেষ হলে এই নথিতে dated entry যোগ করুন এবং README-র quick status update করুন।
8. Documentation update-এর বাইরে কোনো site code, DNS, nameserver, redirect, SSL বা hosting configuration change করার আগে আলাদা explicit approval নিন।

## 7. Current status snapshot (28 Nov 2026)

| Area | Status |
|---|---|
| GitHub Pages + custom domain | Configured; repo CNAME is infojano.com |
| Registrar/domain account | Spaceship |
| Authoritative nameservers | Cloudflare assigned nameservers; latest screenshot ONLINE |
| Cloudflare DNS import | 6 records visible; four apex A + www CNAME proxied, Google TXT DNS-only |
| Cloudflare zone | Dashboard showed domain protected by Cloudflare |
| /tools.html redirect | Rule deployed; mobile UI test landed on index page with Popular Tools visible |
| Exact HTTP 301 headers | Not independently checked |
| Original domain purchase date/order | Not yet confirmed from invoice/order history |
| Search Console canonical consolidation | Historical unresolved items documented in SEO audit; recheck before changing |
| Site code changes in this Cloudflare session | None |

---
এই নথি একটি operational handoff; live settings বদলালে বা নতুন test result এলে তারিখসহ update করতে হবে।
