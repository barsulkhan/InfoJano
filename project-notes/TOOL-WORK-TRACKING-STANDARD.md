# InfoJano Tool Work Tracking Standard

এই নিয়ম InfoJano-র প্রতিটি tool-এর কাজে স্বয়ংক্রিয়ভাবে প্রযোজ্য। ব্যবহারকারীকে বারবার tracking-এর কথা বলতে হবে না। কাজ শুরু, মাঝপথে, এবং শেষ—প্রতিটি পর্যায়ে GitHub repository-তে বিস্তারিত progress লিখতে হবে।

## Shortcut
- **ট্র্যাক** — সর্বশেষ tool-এর কাজের অবস্থা দেখাও: কী করা হয়েছে, কী সফল হয়েছে, কী ব্যর্থ/ব্লকড, কী বাকি, সর্বশেষ তারিখ ও পরবর্তী পদক্ষেপ।
- ব্যবহারকারী tool-এর কাজ করতে বললেই shortcut না বললেও tracking নিয়ম স্বয়ংক্রিয়ভাবে চালু হবে।
- **ট্র্যাক <tool-name>** — নির্দিষ্ট tool-এর পূর্ণ progress report দেখাও।

## 0. Research-first gate (mandatory)

প্রতিটি নতুন tool, major feature বা SEO landing page-এ coding শুরুর আগে `TOOL-RESEARCH-STANDARD.md` পড়বে এবং `tools/<tool-slug>/RESEARCH.md` dossier তৈরি করবে। Country/language keyword demand, volume/trend, KD, CPC/currency, traffic potential, intent/SERP, audience, direct/indirect competitors, competitor features/gaps, monetization caveats এবং InfoJano differentiation গবেষণা করবে। সব plausible market screen করে evidence দিয়ে priority নির্ধারণ করবে; একই পেজ অনুবাদ করে সব দেশে ছড়াবে না। Source/date/provider/confidence/unavailable data লিখবে। CPC publisher RPM নয়। Research decision Go/Revise/No-Go নথিভুক্ত না করে planned coding শুরু করবে না; urgent bug fix হলে exception log করবে।

## 1. Folder convention
প্রতিটি tool-এর জন্য:
```text
project-notes/
  TOOL-WORK-TRACKING-STANDARD.md
  TOOL-RESEARCH-STANDARD.md
  TOOL-INDEX.md
  templates/
    TOOL-RESEARCH-TEMPLATE.md
  tools/
    <tool-slug>/
      README.md
      RESEARCH.md
      QA-TEST-LOG.md
```
- <tool-slug> হবে lowercase kebab-case, যেমন elapsed-time-calculator, countdown-studio।
- কাজ শুরুর আগে folder/README খুঁজে দেখো; না থাকলে তৈরি করো, থাকলে আপডেট করো।
- README.md ওই tool-এর work-status single source of truth; RESEARCH.md research dossier; QA-TEST-LOG.md test evidence ledger। পুরনো project note থাকলে তার তথ্য link/migrate করো; পুরনো নোট মুছে ফেলো না।
- প্রতিটি নতুন tool যোগ হলে TOOL-INDEX.md আপডেট করো।

## 2. বাধ্যতামূলক daily/work log
প্রতিটি কাজের session-এ তারিখসহ একটি entry যোগ করতে হবে। শুধু summary নয়, যথেষ্ট বিস্তারিত লিখবে:
- কী কাজ করতে বলা হয়েছিল / উদ্দেশ্য
- কোন ফাইল, component, page বা workflow পরীক্ষা/পরিবর্তন হয়েছে
- কী implement বা edit করা হয়েছে
- কী কী check/test চালানো হয়েছে এবং ফলাফল (pass/fail/not run)
- PR, commit, workflow run ও deployment link/ID
- কী সমস্যা/ত্রুটি পাওয়া গেছে, root cause কী, কীভাবে সমাধান হয়েছে
- কী এখনো অসম্পূর্ণ, কেন অসম্পূর্ণ
- পরবর্তী নির্দিষ্ট পদক্ষেপ
- user-এর অনুমতি/সীমাবদ্ধতা এবং কোন protected area অপরিবর্তিত রাখা হয়েছে

সময়/তারিখ জানা না থাকলে অনুমান করে লিখবে না। একই দিনে একাধিক কাজ হলে আলাদা log entry হবে। কোনো কাজ মাঝপথে থামলে status In progress/Blocked রেখে handoff note লিখবে—কখনো নীরবে Completed করবে না।

## 3. README template
```markdown
# <Tool Name> — Work Tracker

Last updated: YYYY-MM-DD
Tool page: <URL বা TBD>
Overall status: Backlog / In progress / Blocked / Completed

## User-approved scope and constraints
- ...

## Feature cards
### Completed
- [x] [CARD-001] Title — acceptance criteria; implementation; PR/commit; evidence

### In progress
- [ ] [CARD-002] Title — current state; last action; next step

### Backlog
- [ ] [CARD-003] Title — goal and acceptance criteria

### Blocked
- [ ] [CARD-004] Title — blocker; what is needed to unblock

## Bugs and follow-ups
- Date — issue — severity — status — evidence

## QA and release checklist
- [ ] Source/syntax checks:
- [ ] Functional tests:
- [ ] Mobile browser QA:
- [ ] Desktop browser QA:
- [ ] Accessibility:
- [ ] GitHub Pages deployment:
- [ ] APK/build/release (if applicable):

## Detailed work log
### YYYY-MM-DD — Session title
- Requested:
- Inspected:
- Changed:
- Tests and results:
- PR/commit/workflow:
- Issues and resolution:
- Still pending:
- Next step:
- Protected areas preserved:

## Decisions and handoff
- YYYY-MM-DD — decision/context/unfinished work/next action
```

## 4. Card rules
- প্রতিটি feature, bug, refactor বা follow-up-এর আলাদা card।
- ID ধারাবাহিক: CARD-001, CARD-002; ব্যবহৃত ID পুনর্ব্যবহার নয়।
- প্রতিটি card-এ উদ্দেশ্য, acceptance criteria, status, implementation/evidence থাকবে।
- Status: Backlog, In progress, Blocked, Completed।
- Completed বলার আগে merge হয়েছে কি না উল্লেখ করো। CI, deployment, APK release এবং browser QA আলাদা আলাদা status।
- Source check-কে browser QA বলা যাবে না। Workflow success না হলে deployment/APK success বলা যাবে না।
- Feature code merged হলেও visual QA pending থাকলে card-এ সেটি স্পষ্ট লিখবে।

## 5. প্রতিটি কাজের স্বয়ংক্রিয় workflow
1. Tool শনাক্ত করে তার tracker খুলো; আগের session-এর log ও handoff পড়ো।
2. Tracker না থাকলে folder, README এবং index entry তৈরি করো।
3. কাজ শুরুর আগেই dated log-এ request, scope ও planned cards লিখো।
4. কাজ চলার সময় status এবং log update করো; কোনো বড় ধাপ শেষ হলে evidence লিখো।
5. কোনো test/workflow fail করলে failure details ও root cause log করো; fix করার পর নতুন ফলাফল লিখো।
6. কাজ থামলে অসম্পূর্ণ অবস্থা, blocker ও next step লিখে রাখো।
7. কাজ শেষ হলে merge/commit, CI, deployment, QA status যাচাই করে tracker আপডেট করো।
8. প্রতিটি tool session শেষে tracker update না করে কাজ শেষ বলে জানাবে না।
9. উত্তরে সংক্ষেপে completed, successful, pending/blocked, এবং tracker link জানাবে।

## 6. Safety and permission
- User-এর স্পষ্ট অনুমতি ছাড়া protected hero/banner, branding, layout বা নিষিদ্ধ scope বদলাবে না।
- Project notes-এ password, token, credential বা গোপন ব্যক্তিগত তথ্য লিখবে না।
- বাস্তবে না করা কাজ/test/QA/deployment/release সম্পন্ন বলে লিখবে না।

## 2A. বাধ্যতামূলক per-task timestamped evidence file (সব website/project-এর জন্য)

এই নিয়ম InfoJano-সহ ব্যবহারকারীর সব website/repository-তে প্রযোজ্য। প্রতিটি আলাদা কাজ/কার্যকর work package শেষ হলে সেই কাজের নাম দিয়ে একটি স্বতন্ত্র Markdown file তৈরি করতে হবে। শুধু README-তে log entry দিলেই এই শর্ত পূরণ হবে না।

### File location — নতুন folder নয়
- সংশ্লিষ্ট website-এর আগে থেকে থাকা project/tracker folder-এর ভেতরে সরাসরি file রাখবে।
- শুধু log রাখার জন্য নতুন folder, date-folder, nested folder বা archive folder তৈরি করবে না।
- উদাহরণ: AdSense কাজের file সরাসরি `project-notes/adsense-compliance/`-এ; calculator কাজের file সংশ্লিষ্ট আগে থেকে থাকা `project-notes/tools/<tool-slug>/`-এ।
- সংশ্লিষ্ট project folder না থাকলে আগে project owner-এর repository structure দেখে বিদ্যমান উপযুক্ত notes location ব্যবহার করবে; অকারণে নতুন folder hierarchy তৈরি করবে না।

### বাধ্যতামূলক filename
```text
YYYY-MM-DD-HHMM-<task-name-kebab-case>.md
```
- Date/time হবে কাজ শেষ/লগ সংরক্ষণের প্রকৃত সময়, project/site-এর timezone স্পষ্টভাবে লিখবে।
- সময় নির্ভরযোগ্যভাবে পাওয়া না গেলে বানিয়ে লিখবে না; timestamp সংগ্রহ না হওয়া পর্যন্ত file save complete দাবি করবে না।
- একই সময়ে একই task name collision হলে শেষে `-02`, `-03` যোগ করবে।
- উদাহরণ: `2026-11-15-2318-adsense-live-ads-txt-verification.md`

### প্রতিটি task file-এর বাধ্যতামূলক contents
1. Task title, website name, canonical site URL, repository ও branch
2. Started/completed timestamp এবং timezone (যা জানা আছে; অজানা হলে Unknown)
3. User request, scope এবং explicit permission boundaries
4. আগের কোন কাজ reuse করা হয়েছে; পুনরাবৃত্তি এড়ানোর প্রমাণ
5. Inspected files/pages/settings/evidence এবং exact commit/ref
6. কাজের ধাপ ও সিদ্ধান্ত
7. Tests/checks: প্রতিটির PASS / FAIL / NOT RUN / UNVERIFIED status এবং ফল
8. Changed files এবং পরিবর্তনের সারাংশ; কোনো পরিবর্তন না হলে তা স্পষ্ট
9. PR/commit/workflow/deployment references
10. Blocker, uncertainty, risk ও unresolved question
11. Next action, dependency এবং approval needed
12. Protected areas ও production/settings/DNS/deployment অপরিবর্তিত ছিল কি না

### Save/update rules
- প্রতিটি কাজ শেষ হওয়ার সঙ্গে সঙ্গে task file create করে commit করবে; একই task চলমান থাকলে file-টি update করবে, একই কাজের জন্য অপ্রয়োজনীয় duplicate file বানাবে না।
- একই দিনে একাধিক আলাদা কাজ হলে প্রতিটির আলাদা file হবে।
- README/tracker-এ সংক্ষিপ্ত status ও task-file link যোগ করবে; TOOL-INDEX-এ শুধু top-level status/next action রাখবে।
- Task file, tracker এবং index-এর status/commit তথ্য পরস্পর সামঞ্জস্যপূর্ণ রাখতে হবে।
- Failed/blocked task-ও task file পাবে; filename-এ task name থাকবে এবং body-তে status Blocked/Failed লেখা থাকবে।
- Sensitive secrets, API keys, personal identifiers বা private account data task file-এ রাখা যাবে না।
- File save/commit সফল না হওয়া পর্যন্ত কাজটিকে documented/completed বলা যাবে না।
- এই নিয়ম নতুন ও বিদ্যমান website/project—সব ক্ষেত্রেই default; user-কে প্রতিবার মনে করাতে হবে না।
