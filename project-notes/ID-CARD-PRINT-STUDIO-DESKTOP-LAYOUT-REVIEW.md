# ID Card Print Studio — Desktop Layout Review Note

Date: 2026-11-15
Repository: https://github.com/barsulkhan/InfoJano
Page: https://infojano.com/id-card-print-studio.html
Source file inspected: `id-card-print-studio.html`
Source blob at inspection: `1be91b893a26813472747c3b08484cf6ab57d725`

## User's request and approval boundary

The user wants only the working interface (the functional tool area) organized into two clear columns: left and right.

**Protected: ID Card Print Studio hero/banner.**
- Do not change the hero/banner in any way: design, layout, dimensions, spacing, typography, copy, colors, artwork, or responsive behavior.
- Do not change document-processing logic, crop behavior, export behavior, or other features as part of this layout task.
- The user explicitly instructed: do not do any more work now. They will first open the page on a computer and inspect it, then decide what to do.
- No implementation, CSS edits, commits to the tool source, or deployment are authorized until the user gives a new instruction after checking desktop.

## Current source-level findings (not browser QA)

The page source already contains:
- `.ij-studio-workspace` as a CSS grid with left and right columns.
- `.ij-studio-left` and `.ij-studio-right` wrappers.
- Desktop grid columns at 1100px and above.
- A single-column layout at widths up to 1099px.
- The left wrapper contains Step 1 (Choose card type / upload) and Step 2 (Crop and review card sides).
- The right wrapper contains Step 3 (Set card size, add border and review) and subsequent layout/export controls.

The uploaded mobile screenshot shows a single-column vertical flow, which is consistent with the source media query. The source code suggests a two-column desktop layout at >=1100px, but this has **not** been confirmed in an actual desktop browser. Do not state desktop visual QA has passed.

## Intended layout direction, pending user's desktop inspection

If the user later approves changes:
- Left column: document type, file upload, crop source selection, crop workspace, front/back selection and previews.
- Right column: card dimensions/resolution, paper and front/back layout settings, final review and PDF/JPG export actions.
- Preserve the existing responsive behavior unless the user asks otherwise: desktop two columns; mobile stacked layout.
- Make only the minimum workspace layout changes needed to achieve the requested separation.
- Keep the hero/banner completely untouched.

## Current status

**Paused — waiting for user desktop inspection and a new instruction.**
No code was changed in this session. Only this review note is being saved.


## 2026-11-15 — User-approved name addition to hero mock cards

- User requested the full name **আব্দুল বারিক** inside both the “DOCUMENT CARD” and “IDENTITY CARD” illustrations and explicitly asked to start.
- Source inspection showed these two visuals are not PNG files; they are HTML/CSS mock card elements in the hero artwork.
- Added the Bengali full name to both mock card detail areas, with compact bold styling.
- No other hero copy, artwork, layout, dimensions, spacing, colors, or animations were intentionally changed. No workspace layout or document processing logic was changed.
- Source commit: `bfdf85f5241e3577ef51a91d34300cd3b53f65c2`
- Browser visual QA and Pages deployment status: not yet verified.
