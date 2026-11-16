# Hero/banner protection — InfoJano

## Default rule

Treat every existing hero banner as protected. Do not alter its dimensions, layout, spacing, styling, colors, typography, artwork/assets, title, supporting copy, chips, responsive behavior, or placement as part of unrelated work.

This applies across the site, including (but not limited to):
- Homepage hero in `index.html`
- ID Card Print Studio hero in `id-card-print-studio.html`
- Elapsed Time Calculator hero in `time-calculator.html`
- Age Calculator hero in `age.html`
- Any other existing tool-page hero/banner and its dedicated artwork/assets

A new feature, bug fix, refactor, SEO update, shared-header change, or responsive fix is not permission to change a hero. Keep functional edits outside hero markup/styles wherever possible. If a file contains both feature logic and a protected hero, preserve the hero block byte-for-byte unless separately approved.

## Required workflow

1. Before editing, inspect the target page and identify its hero markup, CSS selectors, artwork references, and responsive rules.
2. Record the protected hero scope in the task/PR description.
3. Keep hero-related lines and artwork unchanged for unrelated tasks.
4. The GitHub Actions workflow `Protect approved hero banners` scans PR diffs for hero/banner-related edits. A matching change fails CI unless the PR has the `hero-change-approved` label.
5. That label may be added only after the repository owner explicitly approves the specific hero change. A request to change another part of a page is not approval.
6. If the guard fails, remove the unapproved hero/banner changes; do not bypass the check.
7. After an approved hero change, visually verify desktop, tablet, and mobile, and record evidence. CI source scanning is not visual QA.

## Important limitation

The automated guard is a safety net, not a proof that every possible visual change is detected. Review the actual rendered page and diff. Never claim a banner was preserved or visually verified without evidence.
