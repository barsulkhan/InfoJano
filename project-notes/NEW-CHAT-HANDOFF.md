# InfoJano — New Chat Handoff

Last updated: 2026-11-15
Repository: https://github.com/barsulkhan/InfoJano
Live site: https://infojano.com/

এই ফাইলটি নতুন ChatGPT chat-এ প্রথমে পড়তে হবে। এটি project context, user rules, current status এবং next action-এর handoff source। নতুন chat শুরু হলে প্রথম কাজ হবে এই ফাইল এবং linked tracker-গুলো পড়ে তারপর কাজ শুরু করা।

## নতুন ChatGPT chat-এর জন্য বাধ্যতামূলক নির্দেশনা

তুমি InfoJano project assistant হিসেবে কাজ করবে। নিচের নিয়মগুলো সবসময় অনুসরণ করবে; ব্যবহারকারীকে tracking-এর কথা বারবার বলতে বলবে না।

1. InfoJano-র যেকোনো tool-এ কাজ শুরু করার আগে `project-notes/TOOL-WORK-TRACKING-STANDARD.md` পড়বে।
2. Tool-এর `project-notes/tools/<tool-slug>/README.md` tracker খুলে আগের log, constraints, completed/in-progress/backlog/blocked cards পড়বে।
3. Tool tracker না থাকলে আলাদা folder ও README তৈরি করবে এবং `project-notes/TOOL-INDEX.md` আপডেট করবে।
4. কাজ শুরুর আগেই তারিখসহ log entry ও feature card লিখবে। কাজ চলাকালে progress/evidence আপডেট করবে। প্রতিটি session শেষে detailed log, pending list, next step ও handoff লিখবে।
5. Log-এ থাকবে: user request, inspected/changed files, implementation details, test names and pass/fail/not-run, PR/commit/workflow IDs and links, failures/root causes/fixes, incomplete work, blockers, next concrete action, protected areas preserved.
6. কাজ মাঝপথে থামলে কখনো Completed বলবে না। In progress/Blocked status এবং পরবর্তী পদক্ষেপ লিখে রাখবে।
7. Merge, CI, Pages deployment, APK build/release, mobile/desktop browser QA—প্রতিটি আলাদা করে verify করবে। Source-level check-কে browser QA বলবে না। Workflow success না হওয়া পর্যন্ত deployment/APK success বলবে না।
8. User-এর স্পষ্ট অনুমতি ছাড়া homepage Hero Banner, ID Card Print Studio Hero, অথবা কোনো explicitly protected hero/banner/design পরিবর্তন করবে না।
9. User-এর project progress ChatGPT Memory-তে নয়, GitHub repository project notes-এ রাখতে হবে।
10. সংক্ষিপ্ত shortcut: **“ট্র্যাক”** = সর্বশেষ tool-এর পূর্ণ status; **“ট্র্যাক <tool-name>”** = নির্দিষ্ট tool-এর status। তবে shortcut না বললেও tracking স্বয়ংক্রিয়ভাবে চালু থাকবে।
11. কাজ শেষে উত্তরে completed, successful, failed/blocked, pending এবং tracker link সংক্ষেপে জানাবে।
12. কোনো tool/action/browser access না থাকলে তা স্পষ্ট বলবে; ভিজ্যুয়াল QA হয়েছে বলে ভান করবে না।

## Current repository documentation
- Rules: [TOOL-WORK-TRACKING-STANDARD.md](TOOL-WORK-TRACKING-STANDARD.md)
- Tool index: [TOOL-INDEX.md](TOOL-INDEX.md)
- Elapsed Time Calculator tracker: [tools/elapsed-time-calculator/README.md](tools/elapsed-time-calculator/README.md)
- Legacy Elapsed Time Calculator notes: [elapsed-time-calculator-progress.md](elapsed-time-calculator-progress.md)

## Current project status — 2026-11-15

### Elapsed Time Calculator
Tool page: https://infojano.com/time-calculator.html
Tracker: `project-notes/tools/elapsed-time-calculator/README.md`

Merged feature work:
- PR #219 — shared header alignment and live device-local hero clock. Commit `84bd768b17a5ba13c55f5cfece4a593cf6635f9c`.
- PR #220 — swap Start/End, Now controls, quick examples, seconds precision, decimal hours. Commit `a4b5017c1fd27061ca50aae63330e67e0af235bf`.
- PR #221 — optional break deduction and gross/net results. Commit `1887be9cf860519f5c4906dc101767e8aa846037`.
- PR #222 — add/subtract duration mode and day rollover. Commit `ff67d2198a9fe69eeeea4ea4a69a8c1546a73741`.
- PR #224 — date + time duration mode. Commit `46ecea5ee2eb113e316f81bcf681737ee2119330`.
- PR #225 — copy/share result and recent calculation history (max five). Commit `4bb2de85be0a0577fb2b4822fc299e96f05e0425`.
- PR #226 — APK workflow relative manifest start_url/scope validation fix.
- PR #227 — APK workflow relative manifest icon path validation fix. Commit `4ae9624fb8978b832d58e2b93f2e41091227dc80`.

Successful workflows:
- APK workflow run 43684495904: success — https://github.com/barsulkhan/InfoJano/actions/runs/43684495904
- Pages deployment run 43684495751: success — https://github.com/barsulkhan/InfoJano/actions/runs/43684495751

Known pending work:
- CARD-009: actual mobile and desktop visual browser QA. Previous session had no interactive browser tool, so this is still pending.
- CARD-010: evaluate related SEO landing pages only after keyword/page intent is confirmed; use max-width 1360px and 8px gutters.
- Accessibility review has not been recorded yet.

Protected constraints:
- Do not change Elapsed Time Calculator hero dimensions, layout, styling, artwork, or copy without explicit approval.
- Do not change homepage Hero Banner or ID Card Print Studio Hero without explicit permission.
- Future SEO landing pages: max-width 1360px and 8px side gutters.

## Next action when resuming
1. Read the standard and Elapsed Time Calculator tracker.
2. Continue from CARD-009; do not redo merged features.
3. If an interactive browser becomes available, perform real mobile and desktop QA for all three calculator modes, break deduction, copy/share, and recent history; record exact device/browser, results, defects and evidence.
4. If no interactive browser is available, do not claim QA. State the limitation and continue only with useful source-level checks or ask for browser evidence if needed.
5. Update the tool tracker and TOOL-INDEX after any new work.

## Copy/paste starter prompt for a new chat

“আমরা InfoJano project চালাচ্ছি। প্রথমে এই GitHub handoff ফাইলটি পড়ো: https://github.com/barsulkhan/InfoJano/blob/main/project-notes/NEW-CHAT-HANDOFF.md । এরপর TOOL-WORK-TRACKING-STANDARD.md, TOOL-INDEX.md এবং সংশ্লিষ্ট tool-এর tracker পড়বে। সব নিয়ম স্বয়ংক্রিয়ভাবে follow করবে—প্রতিটি tool-এর আলাদা folder, date-wise detailed work log, feature cards, success/failure, test evidence, PR/commit/workflow, pending কাজ ও next step GitHub-এ লিখবে। আমাকে tracking মনে করিয়ে দিতে হবে না। Shortcut ‘ট্র্যাক’। এখন Elapsed Time Calculator-এর CARD-009 mobile/desktop visual QA pending; merged কাজ পুনরায় করবে না। Protected hero/banner অনুমতি ছাড়া বদলাবে না।”
