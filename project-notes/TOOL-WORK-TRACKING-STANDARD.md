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
  TOOL-INDEX.md
  tools/
    <tool-slug>/
      README.md
```
- <tool-slug> হবে lowercase kebab-case, যেমন elapsed-time-calculator, countdown-studio।
- কাজ শুরুর আগে folder/README খুঁজে দেখো; না থাকলে তৈরি করো, থাকলে আপডেট করো।
- README.md ওই tool-এর single source of truth। পুরনো project note থাকলে তার তথ্য নতুন tracker-এ স্থানান্তর/লিংক করো; পুরনো নোট মুছে ফেলো না।
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
