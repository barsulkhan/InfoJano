# InfoJano Tool Work Tracking Standard

এই নিয়ম InfoJano-র প্রতিটি tool-এর কাজের জন্য প্রযোজ্য। নতুন কোনো tool-এ কাজ শুরু করার আগে তার জন্য আলাদা tracking folder তৈরি করতে হবে। কাজের অগ্রগতি ChatGPT Memory-তে নয়, এই GitHub repository-তেই সংরক্ষণ করতে হবে।

## 1. Folder convention

প্রতিটি tool-এর জন্য এই কাঠামো ব্যবহার করো:

```text
project-notes/
  TOOL-WORK-TRACKING-STANDARD.md
  tools/
    <tool-slug>/
      README.md
```

- `<tool-slug>` হবে tool-এর ছোট, স্থিতিশীল, lowercase kebab-case নাম; যেমন `elapsed-time-calculator`, `countdown-studio`।
- কোনো tool-এর folder না থাকলে কাজ শুরুর সময় তৈরি করতে হবে।
- আগে থেকে folder ও tracking file থাকলে নতুন করে বানানো যাবে না; বিদ্যমান নোট আপডেট করতে হবে।
- `README.md` হবে ওই tool-এর একক progress tracker। বড় কাজ হলে একই folder-এ প্রয়োজনমতো আলাদা design, QA বা release note যোগ করা যাবে।

## 2. প্রতি tool-এর README.md template

নতুন tool folder তৈরি করার সময় নিচের headings ব্যবহার করো:

```markdown
# <Tool Name> — Work Tracker

Last updated: YYYY-MM-DD
Tool page: <URL বা TBD>

## Scope and user-approved constraints
- কী করা হবে
- কোন design, hero, content বা feature অনুমতি ছাড়া বদলানো যাবে না

## Feature cards
### Completed
- [x] **[CARD-001] Card title** — কী করা হয়েছে; PR/commit link; validation status

### In progress
- [ ] **[CARD-002] Card title** — বর্তমান অবস্থা; পরের ধাপ

### Backlog
- [ ] **[CARD-003] Card title** — সংক্ষিপ্ত বিবরণ / acceptance criteria

## Bugs and follow-ups
- [ ] Bug বা follow-up; severity/priority; status

## QA and release
- Source checks:
- Functional tests:
- Browser/device QA:
- Accessibility:
- Deployment workflow:
- APK/build/release workflow (যদি প্রযোজ্য হয়):

## Decisions and change log
- YYYY-MM-DD — সিদ্ধান্ত/পরিবর্তন — কারণ — PR/commit
```

## 3. Card লেখার নিয়ম

- প্রতিটি আলাদা feature, bug বা follow-up-এর জন্য আলাদা card থাকবে।
- Card ID হবে ধারাবাহিক: `CARD-001`, `CARD-002` ইত্যাদি। ID একবার ব্যবহৃত হলে পরে অন্য card-এ পুনরায় ব্যবহার করা যাবে না।
- Card-এ অন্তত থাকবে: উদ্দেশ্য, সংক্ষিপ্ত acceptance criteria, status, এবং প্রাসঙ্গিক PR/commit বা test evidence।
- Status স্পষ্টভাবে `Backlog`, `In progress`, `Completed` বা `Blocked` হবে।
- কোনো card-কে Completed বলা যাবে কেবল কাজ merge হওয়ার পর; প্রযোজ্য CI/deployment এবং QA status আলাদাভাবে লিখতে হবে।
- Browser QA না হলে সেটিকে pending বলতে হবে। Source-level check-কে visual/browser test হিসেবে দেখানো যাবে না।
- Workflow সফল না হওয়া পর্যন্ত deployment বা APK release সফল বলা যাবে না।

## 4. প্রতিটি কাজের বাধ্যতামূলক workflow

1. কাজ শুরুর আগে tool-এর tracking folder ও README আছে কি না দেখো।
2. না থাকলে এই template অনুসারে folder ও README তৈরি করো।
3. বিদ্যমান user-approved constraints এবং আগের decisions পড়ে নাও।
4. কাজকে ছোট, যাচাইযোগ্য feature cards-এ ভাগ করো; নতুন কাজ শুরু হলে In progress-এ নাও।
5. Implementation চলাকালে card status ও evidence আপডেট করো।
6. PR merge হলে Completed section, PR/commit link এবং validation ফলাফল যোগ করো।
7. কাজ শেষে Backlog, Blocked এবং QA/release pending items স্পষ্ট রাখো।
8. এই standard-এ নতুন প্রয়োজনীয় নিয়ম এলে এই ফাইল আপডেট করো।

## 5. নিরাপত্তা ও অনুমতির নিয়ম

- User-এর স্পষ্ট অনুমতি ছাড়া সংরক্ষিত hero/banner, branding, layout বা অন্য নিষিদ্ধ scope পরিবর্তন করা যাবে না।
- বিদ্যমান design অপরিবর্তিত রাখার নির্দেশ থাকলে implementation এবং review-তে তা যাচাই করতে হবে।
- কোনো কাজ, test, browser QA, deployment বা release বাস্তবে না হলে সম্পন্ন বলে লেখা যাবে না।
- Project notes-এ গোপন তথ্য, token, password বা ব্যক্তিগত credential রাখা যাবে না।

## 6. Repository-wide tool index

প্রতিটি নতুন tool folder তৈরি হলে এই standard-এর পাশাপাশি একটি repository-wide index-এ tool-এর নাম, folder path এবং বর্তমান status তালিকাভুক্ত করা উচিত। Index তৈরি না হওয়া পর্যন্ত এই ফাইলটিই tracking convention-এর source of truth থাকবে।
