# ID Card Print Studio — Research Note

Last updated: 2026-11-15

## Scope
This is a small usability enhancement to an existing document-print workflow, not a new tool or SEO landing page.

## Research-gate exception
User explicitly requested two focused changes to the existing tool: footer bullet alignment and direct printing of the already-generated PDF. To avoid delaying this small approved UX fix with unrelated market expansion research, a minimal-research exception is recorded under the project's small-fix allowance.

## User need and implementation decision
- Footer lists currently inherit browser list indentation; the visible result leaves a large visual gap between bullet marker and text. Use a compact, consistent list indent and a small text inset.
- The existing PDF export already produces a print-sized PDF. Reuse that document rather than implementing a separate print renderer.
- In a normal browser, open the generated PDF in a new tab and invoke jsPDF's auto-print instruction; the user still selects the printer and confirms printing.
- The Android app bridge currently supports saving PDF files, not invoking the device print service. Keep download as fallback and state this limitation clearly.

## Market/keyword metrics
Not collected; no new SEO page, keyword target, or country-specific content is proposed. Search volume, KD, CPC, traffic potential and audience estimates are N/A for this narrowly scoped UX change.

## Validation limitations
The actual browser print dialog, popup handling, browser compatibility and visual spacing must be tested in desktop/mobile browsers. Source-level implementation does not establish runtime success.