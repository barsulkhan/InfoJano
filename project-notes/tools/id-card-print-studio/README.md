# ID Card Print Studio — Work Tracker

Last updated: 2026-11-15
Tool page: https://infojano.com/id-card-print-studio.html
Overall status: In progress

## User-approved scope and constraints
- Tighten footer bullet-list spacing so text begins close to its bullet marker, especially under “Supported document guides”.
- Add a direct “Create & Print PDF” action alongside existing PDF download and JPG export.
- Preserve the hero/banner, mock-card name/location, workspace layout, document processing, cropping, card dimensions and existing export behavior.

## Feature cards
### Completed
- [x] CARD-001 — Add English name and location to both hero mock cards; source commit 52092b48aa120801ee437cf2f514ebe1e28d64ae.
- [x] CARD-002 — Tighten footer list indentation and add direct PDF print action; source commit aa45fa3d152a4378ee3d2f8092913f99cf185d2a.

### In progress
- [ ] CARD-003 — Browser QA for footer alignment and direct-print flow; browser runtime/visual QA not yet run.
- [ ] CARD-004 — Verify jsPDF relative asset path fix on live custom domain and GitHub Pages deployment.

## QA and release checklist
- [x] Source-level anchor checks for targeted CSS, button and PDF handler changes.
- [ ] JavaScript syntax/runtime test.
- [ ] Desktop browser visual QA for footer bullet spacing.
- [ ] Desktop browser print-dialog test.
- [ ] Mobile browser print behavior test.
- [ ] GitHub Pages deployment for latest source commit.

## Detailed work log
### 2026-11-15 — Footer list spacing and direct PDF print
- Requested: bring footer list text closer to bullet dots and add a direct print option.
- Inspected: id-card-print-studio.html; existing footer list CSS used 19px padding; export flow generated a jsPDF document and saved/downloaded it.
- Changed: reduced footer list indentation to 18px with small item inset; added Create & Print PDF; reused existing PDF-generation flow and opened a print-ready PDF in a new browser tab with jsPDF auto-print instruction.
- Android app bridge: direct print is not implemented in the app bridge; the button reports that limitation and directs users to download PDF and print it.
- Tests: source anchors verified; browser visual/runtime QA NOT RUN.
- Commit: aa45fa3d152a4378ee3d2f8092913f99cf185d2a.
- Still pending: JavaScript syntax/runtime test, browser visual test, print dialog test, mobile behavior and Pages workflow.
- Protected areas preserved: hero/banner, mock cards, workspace layout, crop logic and existing PDF/JPG export logic.

## Decisions and handoff
- 2026-11-15 — Direct print uses the same generated PDF, preserving current page sizing and crop/export pipeline.

### 2026-11-15 — PDF library load failure fix
- Requested: fix the on-page “PDF export library did not load” error so the Print PDF action can proceed.
- Inspected: the repository contains `jspdf.umd.min.js` at the repository root, but the page loaded it from `/InfoJano/jspdf.umd.min.js`. On the custom domain this path incorrectly points into a non-existent subdirectory.
- Changed: use the relative URL `jspdf.umd.min.js`, which resolves alongside the HTML page on both the custom domain and the GitHub Pages project path.
- Verification: fetched the updated source; confirmed new script URL present, old broken URL absent, and the existing jsPDF availability guard remains. Browser runtime and print dialog NOT RUN.
- Commit: c5270c0cbcc38c3e01b6ff93eb2eba300660d4b6.
- Still pending: confirm live asset returns successfully, run browser PDF export/print, and verify Pages workflow.
- Protected areas preserved: hero/banner, mock cards, footer styling, workspace layout, crop logic and document processing.
