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


## 2026-11-19 — User-approved header and hero alignment with Password Generator

The user's new instruction explicitly supersedes the earlier “protected hero/banner” boundary above for this specific header-and-hero refresh. Scope remains limited to the header and hero presentation; the ID card processing workflow, crop logic, export logic and workspace layout were not intentionally changed.

### Implementation
- Replaced the page-specific static brand bar with the same shared `site-header.js` header mounting pattern used by Password Generator: `body[data-ij-header-align="hero"]` and the synchronous script immediately after the opening body tag.
- Applied the same shared-header sizing rules as Password Generator: 1200px maximum inner width, 88px desktop minimum height, 190×68px logo; at <=760px, 24px side gutters, 64px minimum height and 128×46px logo.
- Rebuilt the hero container using the Password Generator `.ij-reference-hero` geometry and styling: 1200px max width, 340px desktop minimum height, 42px × 46px desktop padding, 30px radius, matching blue gradient/radial background, border and shadow.
- Matched the Password Generator responsive layout: centered single-column copy/art on mobile, 20px outer side gutters, 23px × 17px padding and 23px radius.
- Preserved the ID-card front/back mock illustration. Moved the four functional document shortcuts immediately below the hero so the hero keeps the same compact proportions as Password Generator. Preserved the shortcut button attributes and document-selection script.
- Kept canonical URL and structured data unchanged.

### Source checks
- Updated source commit: `f06a32165ffb065bce2b6ca25788c09e28b6d4df`; final header-dimension alignment commit: `2b35ecb50aa92a84ee725ba1b6c42de379b17a11`.
- Re-fetched final file; confirmed one shared-header script include, legacy brand bar removed, desktop/mobile header dimensions present, hero width/responsive padding present, canonical unchanged, all four document shortcuts preserved, and original file-upload/export event handlers remain present.
- No browser screenshot/DevTools session was available in this task. Actual desktop/mobile visual QA remains pending; source-level checks are not a substitute for browser rendering.
- GitHub Pages workflow run `44522479032` was pending at the time of this note. Confirm its final result before calling the live page deployed.
