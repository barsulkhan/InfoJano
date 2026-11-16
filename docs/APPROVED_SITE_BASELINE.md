# InfoJano — Approved Website Baseline

**Status:** OWNER-APPROVED BASELINE / DO NOT CHANGE WITHOUT EXPLICIT OWNER APPROVAL  
**Baseline date:** 2026-11-15  
**Baseline commit:** `52092b48aa120801ee437cf2f514ebe1e28d64ae`  
**Baseline commit URL:** https://github.com/barsulkhan/InfoJano/commit/52092b48aa120801ee437cf2f514ebe1e28d64ae  
**Default branch at restoration:** `main`  
**Pre-restoration safety backup:** `backup-before-nov15-restore-2026-11-16`

## 1. Purpose

This file records the approved whole-site state of InfoJano. The owner asked for the website to be restored to the state it had on 2026-11-15 (also described as the state before 12:00 noon). The owner did **not** authorize redesign or unrelated homepage changes.

## 2. Source of truth

The complete repository tree at commit `52092b48aa120801ee437cf2f514ebe1e28d64ae` is the reference baseline. This is not merely a Hero Banner reference: it is the whole-repository snapshot at that commit.

Verified after restoration:
- `main` was moved to the baseline commit.
- `index.html` on `main` has blob SHA `48732b0a88db6df6562456c4aca1712063af99a8`, matching the file fetched directly from the baseline commit.
- A backup branch named `backup-before-nov15-restore-2026-11-16` was created at the pre-restoration head `d311fb15287e6c1bfa66466dbae9266acbe985d4`.

## 3. Owner approval and change-control rule

Treat the baseline as final and read-only unless the site owner explicitly approves a specific change.

Before changing any tracked website file, an assistant, contributor, or automation must:
1. State exactly which file(s) will change.
2. Explain the reason and expected visible/functional effect.
3. Explain whether the change affects layout, styling, content, navigation, tool behavior, SEO, PWA behavior, or shared components.
4. Obtain the owner's explicit approval for that specific change.
5. Keep the change narrowly scoped; do not bundle unrelated cleanup, redesign, refactoring, or "improvements".
6. Preserve a rollback point and report the resulting commit.

Silence, a general request to fix a tool, or permission to work on one page is **not** approval to modify the homepage, Hero Banner, shared header/footer, other tools, or the overall design.

If a requested tool fix could affect shared files or site-wide styling/scripts, inspect dependencies first and ask before making a wider change.

## 4. Protected visual and functional areas

Unless separately approved, preserve the baseline appearance and behavior of:
- Homepage layout and all homepage sections
- Hero Banner, its artwork, typography, spacing, colors, and responsive behavior
- Header, logo, navigation, and footer
- Popular Tools and other homepage cards/sections
- Every individual tool page and its existing working behavior
- Shared CSS, JavaScript, images, icons, fonts, manifests, service worker, and routing

This list is intentionally broad: the baseline applies to the entire repository, not only the homepage.

## 5. Recovery procedure

To inspect the approved baseline, use commit:
`52092b48aa120801ee437cf2f514ebe1e28d64ae`

Before any future rollback, inspect the current branch head and create a new backup branch. Do not force-update `main` unless the owner has explicitly requested restoration and the target commit has been verified.

The pre-restoration backup branch is:
`backup-before-nov15-restore-2026-11-16`

## 6. Important technical limitation

This document records the owner's instruction and the approved reference commit. A document alone does not technically prevent someone with repository write access from pushing changes. GitHub branch protection / rulesets must be configured in repository settings to enforce restrictions (for example, require pull requests and prevent direct pushes to `main`). Do not claim those settings are enabled unless they have been checked in GitHub.

## 7. Required completion note

After any owner-approved change, record in the pull request or commit description:
- the owner's approval and scope;
- exact files changed;
- validation performed;
- rollback commit or backup reference.

**Default rule: preserve the approved baseline. Ask first; change only what the owner approved.**
