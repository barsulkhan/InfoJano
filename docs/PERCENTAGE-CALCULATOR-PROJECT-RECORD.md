# InfoJano — Percentage Calculator Project Record

Last updated: 2026-11-16
Repository: `barsulkhan/InfoJano`
Working branch: `main`

## Purpose of this file

This is the durable project handover and change log for the Percentage Change Calculator work. Update this file after every future task so decisions, completed work, test notes, and next steps are not lost between conversations.

## Important change-control rules

1. Do not change the InfoJano homepage, homepage hero, global header, logo, shared navigation, or unrelated tools as part of this calculator project.
2. Do not change the approved Percentage Change Calculator hero/header design, dimensions, artwork, or page layout unless the owner explicitly asks.
3. Make changes only within the requested tool/page and its directly related assets.
4. Before editing, inspect the current file and preserve existing working features.
5. After editing, verify the changed code paths and record the commit SHA here.
6. Do not claim a change is live until deployment is independently verified.
7. Keep a known-good Git commit as a rollback point before substantial changes.

## Approved design and layout decisions

- The approved Percentage Change Calculator page uses the ID Card Print Studio page as the design reference.
- The tool hero is the approved light-blue, two-sided showcase design with the percentage/calculator illustration and benefit chips.
- The tool header has the InfoJano brand/logo area and the three expected navigation controls: All Tools, language selector, and Home / Back to Home as applicable to the page.
- The calculator and result are arranged side-by-side on desktop and stacked responsively on narrow screens.
- Keep the established spacing, header proportions, hero size, typography, and blue visual language. Do not redesign these without explicit approval.
- The owner has explicitly rejected unnecessary homepage/hero redesigns in the past. Homepage must remain out of scope.

## Current feature inventory

The following items are present in the current `percentage-change.html` file as recorded during the 2026-11-16 work:

- Percentage Change mode (old value and new value).
- Reverse Percentage mode (final value, rate, increase/decrease direction; calculates original value).
- Percentage Difference mode (symmetric comparison using the average of the absolute values).
- Result summary and step-by-step calculation breakdown.
- Copy Result.
- Browser-local Calculation History.
- History CSV export and Clear History.
- Batch calculator, with up to 100 input rows.
- Batch CSV export.
- Related tools, formula/guide content, and FAQs.

## Completed changes and commits

| Commit | Change |
|---|---|
| `c1d1057` | Added Percentage Difference mode and improved copied result labels. |
| `498bd5b` | History restore now retains calculation mode and Reverse % inputs; history labels and CSV columns distinguish calculation types. |
| `88d18b8` | Expanded Batch Calculator to support Percentage Change, Reverse %, and Percentage Difference. |
| `63af8a8` | Tightened batch row-format validation for the selected mode. |

Earlier related work may exist in repository history. The entries above are the latest calculator feature changes known at the time this record was created.

## Batch input formats

- Percentage Change: `old value, new value`
- Reverse %: `final value, rate, direction`; direction may be `increase` or `decrease`, and defaults to increase if omitted.
- Percentage Difference: `first value, second value`
- Up to 100 non-empty rows per batch.
- Batch results can be exported to CSV.

## Verification checklist for the latest batch update

Run these checks in the browser before considering the feature fully verified:

1. Percentage Change: `80, 100` should return +25.00%; `100, 80` should return -20.00%.
2. Reverse %: `120, 20, decrease` should return original value 150.
3. Reverse %: `240, 20, increase` should return original value 200.
4. Percentage Difference: `80, 100` should return 22.22%; reversing the pair should return the same result.
5. Invalid rows should show a clear error while valid rows still calculate.
6. More than 100 rows should be rejected with a clear message.
7. CSV export should include calculation type and the relevant values/result.
8. Switching batch modes should update the format hint and placeholder.
9. Confirm the normal calculator, History restore, Copy Result, and History CSV still work.
10. Check desktop and mobile layouts; no overflow or broken controls.

These are test instructions, not a claim that every check has already been run.

## Known limitations / research status

- The earlier request for competitor research, US-first audience research, search demand, competitor feature comparisons, and a prioritized product roadmap has not yet been completed as a sourced research study in this project record.
- Do not invent search volumes, audience country shares, competitor keyboard support, or market-size figures. Research these from current sources and cite sources in a separate research section/file before using them for product decisions.
- Live deployment status has not been independently verified from the available work. GitHub commits do not by themselves prove the production website has updated.

## Next work queue

### Priority 1 — QA and correctness
- Run the verification checklist above on the live/staging page.
- Check edge cases: zero values, negative values, decimal values, very large/small numbers, invalid text, blank rows, and reverse decrease at/above 100%.
- Verify locale formatting and CSV compatibility.
- Fix only confirmed defects, preserving the approved design.

### Priority 2 — User-focused improvements (after QA)
- Consider keyboard accessibility: logical tab order, Enter-to-calculate where appropriate, visible focus states, and screen-reader announcements for result updates.
- Consider paste-friendly batch input and clearer row-level validation.
- Consider downloadable example CSV/template.
- Consider an option to copy a single batch row or all results.
- Any addition should be evaluated against performance, usability, accessibility, and maintenance cost before implementation.

### Priority 3 — Research before broader feature expansion
- Research direct competitors and their percentage-change / reverse-percentage / percentage-difference / batch features.
- Research US search intent and keyword demand using dated, credible sources.
- Identify likely audience segments and use cases; do not assert country usage shares without analytics or credible data.
- Produce a sourced research brief, competitor matrix, feature prioritization (impact/effort), and phased work schedule.
- Keep sourced findings separate from hypotheses and recommendations.

## Update log

### 2026-11-16
- Created this durable project record.
- Recorded current known feature scope, design protections, recent commits, QA checklist, research gaps, and next work queue.
