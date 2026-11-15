# InfoJano — Workflow Improvement Research & Roadmap

Last updated: 2026-11-15
Repository: https://github.com/barsulkhan/InfoJano

## Executive recommendation

Use a layered system rather than one giant automation:
1. Keep GitHub as the single source of truth.
2. Add a GitHub Project board and structured issue/PR templates.
3. Add an isolated Playwright QA harness for browser automation.
4. Run targeted checks on pull requests, save screenshots/traces as artifacts, and smoke-test after deployment.
5. Keep a small real-device manual check by the user for things emulation cannot prove.
6. Protect approved hero/banner areas with screenshot baselines and file-scope checks.

This document is a proposal, not an implementation of the automation stack. No application source or workflow was changed by this research.

## Repository inspection — facts observed

- The repository is a large static-site style project with many standalone HTML tools.
- The inspected .github/workflows directory contains APK and Windows desktop build workflows. The inspected set did not show a general browser-test/Playwright workflow.
- Repository search did not find a Playwright configuration or Playwright test suite.
- The inspected .github directory listing showed a workflows directory, but no ISSUE_TEMPLATE directory or pull-request template.
- Project notes already provide NEW-CHAT-HANDOFF.md, TOOL-WORK-TRACKING-STANDARD.md, TOOL-INDEX.md, SESSION-START-PROMPT.md, per-tool trackers, and a manual QA log for Elapsed Time Calculator.
- Elapsed Time Calculator screenshot-backed manual tests ET-001, ET-002 and ET-003 are recorded PASS. ET-004 Add/Subtract Time is next.
- The connected GitHub actions inspected expose repository files, issues, PRs, commits and workflow runs, but did not expose GitHub Projects board management. Project setup may need GitHub UI or an authorized Projects API integration.

## Recommended improvements

### P0 — Keep the reliable foundation
Partly implemented.
- Keep SESSION-START-PROMPT.md as the reusable entry point.
- Fetch the latest default-branch files before resuming; never trust a pasted status as the database.
- Keep each tool README as its work tracker and QA-TEST-LOG.md as its evidence ledger.
- Use stable IDs: CARD-nnn for work items and ET-nnn for tests.
- Record exact input, expected output, observed output, result, browser/device, evidence link, commit/workflow and next action.
- Never mark tests PASS from assumptions or source inspection.
- Maintain one current-focus field in the tool index.

### P1 — GitHub Project board
Suggested columns:
- Inbox / Triage
- Backlog
- Ready
- In Progress
- Needs User Test
- Blocked
- Done

Suggested fields:
- Tool
- Priority (P0/P1/P2)
- Work type (Feature/Bug/QA/Accessibility/SEO/Release)
- Test status (Not Run/Pass/Fail/Blocked)
- Deployment status (Not Deployed/Deployed/Verified)
- Next action

Automations:
- Automatically add new repository issues to the board.
- Set In Progress when work starts.
- Move to Needs User Test when code is merged but physical-device evidence is still needed.
- Move to Done only after acceptance criteria and release checks are satisfied.
- Archive completed items after a retention period.

Benefit: a visual board can show tools and bottlenecks without opening multiple Markdown files. GitHub Projects supports table, board and roadmap views, custom fields, charts and built-in automations. Setup and permissions are required.

### P1 — Structured issue forms and PR template
Create:
- Bug report form: page URL, device/browser, steps, expected result, actual result, screenshot/video upload, severity.
- Feature request form: user goal, acceptance criteria, scope, non-goals, protected areas.
- Manual QA evidence form: Test ID, exact inputs, expected result, observed result, device/browser, screenshot.
- PR template: summary, files changed, risk/scope, tests run, tests not run, screenshots, deployment impact, protected-area confirmation.

Benefit: fewer back-and-forth messages and more complete bug reports. GitHub issue forms support structured fields such as text, dropdowns, checkboxes and file uploads; PR templates standardize PR descriptions.

### P1 — Playwright browser test harness
Suggested isolated structure:
- qa/browser/package.json
- qa/browser/playwright.config.js
- qa/browser/tests/elapsed-time-calculator.spec.js
- qa/browser/README.md

Keep this separate from the static website root so the site does not acquire a runtime build dependency.

Suggested projects:
- Desktop Chromium
- Mobile Chrome device emulation
- WebKit/Safari engine
- Optional Firefox after the first stable suite

Initial tests:
1. Basic time difference: 09:00 AM to 05:30 PM = 8h30m.
2. Overnight: 10:00 PM to 06:00 AM = 8h.
3. Seconds precision.
4. Break deduction and invalid break validation.
5. Add/subtract time including previous/next-day rollover.
6. Date + time duration including equal endpoints and multi-day intervals.
7. Recent history save, refresh persistence, maximum five and clear.
8. Copy/share behavior with browser permissions/API stubs where CI cannot provide real OS clipboard/share.
9. Mobile horizontal overflow and key controls visibility.

Evidence:
- Screenshot on failure.
- Trace on first retry.
- Video on retry where useful.
- Upload HTML report, traces and screenshots as GitHub Actions artifacts.

Important: mobile emulation is repeatable browser testing, not proof that every physical Android phone behaves identically. Keep a short real-device smoke test after significant releases.

### P1 — Pull-request quality gate and post-deployment smoke test
Proposed workflow triggers:
- pull_request targeting main for code changes.
- Path targeting for relevant files, while avoiding required checks being left pending when a filtered workflow is skipped.
- workflow_dispatch for manual reruns.
- push to main for post-merge deployment smoke tests.

Jobs:
1. Static HTML/JS syntax and repository-specific validators.
2. Playwright smoke tests against a local preview or deployed URL.
3. Automated accessibility scan.
4. Optional Lighthouse CI performance/SEO check.
5. Upload reports and artifacts even when tests fail.
6. After Pages deploy, verify HTTP status and key calculator flows.

Security:
- Use least-privilege GITHUB_TOKEN permissions.
- Separate read-only test jobs from release jobs that need contents write.
- Pin third-party Actions to reviewed versions/SHAs where practical.
- Do not put secrets in logs or project notes.

### P2 — Visual regression snapshots
- Capture desktop and mobile screenshots for selected pages.
- Keep approved baseline images for protected hero/banner regions.
- Mask the live clock and other dynamic content to avoid noisy diffs.
- Review visual diffs before updating baselines.
- Never auto-approve or overwrite a protected hero baseline without explicit user approval.

Benefit: catches layout drift that calculation tests miss.

### P2 — Accessibility and performance checks
- Add axe-based automated scans for labels, roles, keyboard semantics and contrast.
- Add Lighthouse CI for performance, accessibility, SEO and best-practice trends.
- Treat automated scores as signals, not a replacement for keyboard and screen-reader review.

### P2 — Generated status dashboard
Create a generated project-notes/STATUS.md from tool trackers and QA logs:
- Active work by tool
- Next action
- Tests passed/failed/not run
- Latest successful deployment
- Open blockers
- Recent PRs/commits

A scheduled or push-triggered workflow could refresh it. Avoid maintaining identical status manually in multiple places; trackers remain the source data and dashboard is generated output.

### P3 — Actionable notifications
Notify only for events requiring action:
- CI workflow fails.
- Deployment fails.
- PR waits for review.
- Manual user test is needed.
- Production smoke test detects a regression.

Avoid noisy daily notifications with no action required.



## New user-approved requirement — research-first for every tool
Before implementation of each tool or major feature, create a per-tool `RESEARCH.md` dossier using `project-notes/TOOL-RESEARCH-STANDARD.md` and `project-notes/templates/TOOL-RESEARCH-TEMPLATE.md`. Research must screen relevant countries and languages, local keyword variants, search volume/trends, KD, CPC/currency, traffic potential, intent/SERP, audience, competitors/features, market/monetization opportunity and concrete InfoJano differentiation. Save sources, dates, provider/database, confidence and unavailable data. CPC is not publisher RPM. Country landing pages need distinct local intent/value; no thin doorway pages. Record a Go/Revise/No-Go decision before planned coding. Emergency bug fixes may use a logged minimum-research exception.

## Recommended implementation order

| Order | Improvement | Why now | Risk |
|---|---|---|---|
| 1 | Continue manual QA ET-004 onward | Already active and low risk | Low |
| 2 | Establish per-tool research dossier and research-first gate | User-approved requirement; prevents building without market/competitor evidence | Low |
| 3 | Add issue forms and PR template | Improves future requests and bug reports | Low |
| 4 | Create isolated Playwright harness for Elapsed Time Calculator | Converts repeatable manual cases into automated regression tests | Medium |
| 5 | Add PR CI and post-deploy smoke test | Stops regressions before and after merge | Medium |
| 6 | Create GitHub Project board | Useful as more tool trackers become active | Low–Medium |
| 7 | Visual regression, accessibility and Lighthouse | Adds broader quality coverage | Medium |
| 8 | Generated status dashboard and actionable notifications | Reduces manual status gathering | Medium |

## Decisions needed before implementation

- GitHub Project board: create a personal project for InfoJano if permissions allow.
- Playwright: approve a separate QA-only Node dependency and workflow; no production website dependency.
- CI policy: decide whether failing browser tests block merge immediately or begin in report-only mode during stabilization.
- Visual baselines: confirm approved screenshots; protected hero areas remain unchanged by default.

## Official documentation consulted

- Playwright test runner: https://playwright.dev/docs/intro
- Playwright device/browser emulation: https://playwright.dev/docs/emulation
- Playwright multiple browsers/projects: https://playwright.dev/docs/test-projects
- Playwright screenshot/trace/video options: https://playwright.dev/docs/test-use-options
- GitHub Projects and automation: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects
- GitHub issue forms: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository
- GitHub Actions triggers and path filters: https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow
- GitHub Actions security / least privilege: https://docs.github.com/en/actions/reference/security/secure-use

## Work log

### 2026-11-15 — Workflow improvement research
- Requested: research additional ways to make InfoJano work easier, more systematic and more advanced.
- Inspected: handoff, tracking standard, tool index, session-start prompt, Elapsed Time Calculator tracker and QA log, repository root/search results, .github and .github/workflows, and selected APK/desktop workflows.
- External research: official GitHub and Playwright documentation listed above.
- Findings: durable Markdown tracking and reusable prompt exist; the inspected repo has build workflows but no discovered Playwright test suite or issue/PR templates. The connected GitHub actions inspected did not expose GitHub Projects management.
- Changed: added this research/roadmap document only. No app source, existing workflow, protected hero or release configuration changed.
- Tests: documentation/repository inspection only; no automated workflow installed or run.
- Next step: continue ET-004 manual QA. When approved, implement issue/PR templates first, then an isolated Playwright harness and CI.
- Protected areas preserved: all application pages, calculator hero, homepage Hero Banner and ID Card Print Studio Hero unchanged.
