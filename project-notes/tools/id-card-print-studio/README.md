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