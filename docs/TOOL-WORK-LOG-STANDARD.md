# InfoJano — Mandatory Tool Work Log Standard

Effective date: 2026-11-16
Repository: `barsulkhan/InfoJano`

## Owner's standing instruction

Whenever work starts on any InfoJano tool, maintain a complete, dated record of the entire work: request, research, decisions, errors, corrections, changes, tests, completion status, pending work, and next steps. This is a required part of the task, not optional documentation.

## Non-negotiable workflow

### Before starting work
- [ ] Identify the exact tool/page and files in scope.
- [ ] Read that tool's existing project record and latest dated entries.
- [ ] Inspect the current code and record the baseline commit.
- [ ] Read the owner's approved design/behavior constraints.
- [ ] Identify unrelated files/features that must remain untouched.
- [ ] List the intended tasks with priority and status.

### During work
- [ ] Record research as it happens, with source links and access dates.
- [ ] Separate sourced facts, estimates, assumptions, and recommendations.
- [ ] Record every issue discovered and its reproduction steps.
- [ ] Record root cause only when evidence supports it; otherwise mark unknown.
- [ ] Record every code/design change and the reason for it.
- [ ] Record failed attempts, mistakes, regressions, and user corrections honestly.
- [ ] Preserve working behavior and approved visual design outside the requested scope.

### Before ending work
- [ ] Test each changed behavior with concrete inputs.
- [ ] Run regression checks on nearby features.
- [ ] Record expected vs actual results and anything not tested.
- [ ] Record full commit SHA and branch.
- [ ] State deployment status accurately: committed, deployed, or live-verified.
- [ ] Update the tool's project record with a new dated entry.
- [ ] Update the task checklist: `[x] Complete`, `[ ] Pending`, or `[!] Blocked`.
- [ ] Name the next task and its priority.

If a record cannot be updated, tell the owner explicitly; do not imply that the task has been fully documented.

## Permanent record structure

Keep one project record per tool, for example:

- `docs/PERCENTAGE-CALCULATOR-PROJECT-RECORD.md`
- `docs/WORD-COUNTER-PROJECT-RECORD.md`
- `docs/IMAGE-TOOLS-PROJECT-RECORD.md`

Use this template for every dated work-session entry:

```markdown
## Work session — YYYY-MM-DD

### 1. Owner request and scope
- Requested:
- Tool/page/files:
- Explicit constraints / do not change:

### 2. Research and decisions
- Questions researched:
- Findings (fact / estimate / hypothesis):
- Sources and access dates:
- Decisions and rationale:
- Research not yet completed:

### 3. Baseline and risks
- Branch and full starting commit SHA:
- Files inspected:
- Existing behavior/design to preserve:
- Rollback point:
- Risks/dependencies:

### 4. Issues found
- Issue:
- Reproduction steps:
- Root cause (confirmed / suspected / unknown):
- Impact:

### 5. Changes made
- File and section:
- Before:
- After:
- Reason:

### 6. Mistakes, failed attempts, and corrections
- What went wrong:
- How it was noticed:
- Correction:
- Regression check:

### 7. Verification
- Test/input:
- Expected:
- Actual:
- Pass/fail:
- Browser/device:
- Not tested / limitations:

### 8. Commit and deployment
- Commit message:
- Full commit SHA:
- Branch:
- Deployment: pending / deployed / live-verified
- Evidence of live verification:

### 9. Work checklist
- [x] Complete:
- [ ] Pending:
- [!] Blocked:

### 10. Next session handover
- Next task and priority:
- First files/sections to inspect:
- Dependencies:
- Warnings / do-not-change notes:
```

## Record integrity rules

1. Append new dated entries. Do not delete or silently rewrite history.
2. If an earlier entry was wrong, append a dated correction explaining the old statement, corrected statement, and evidence.
3. Do not mark work complete unless it was actually implemented and appropriately tested.
4. Keep code commit records and project logs aligned. Record the full 40-character SHA.
5. Do not claim a production deployment or live result based only on a GitHub commit.
6. Preserve approved designs, dimensions, logos, headers, and homepage content unless the owner explicitly authorizes a change.
7. Start every future tool session by reading the relevant project record; finish by updating it.
8. This policy applies to every tool, not just the Percentage Calculator.

## Current project records
- Percentage Calculator: [PERCENTAGE-CALCULATOR-PROJECT-RECORD.md](PERCENTAGE-CALCULATOR-PROJECT-RECORD.md)

Add a new link here whenever a new tool project record is created.
