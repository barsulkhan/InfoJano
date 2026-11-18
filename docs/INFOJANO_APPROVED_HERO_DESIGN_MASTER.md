# InfoJano — Approved Hero Design Master
Version: 1.0
Reference page: `id-card-print-studio.html`
Status: Reference measurements captured; rollout inventory in progress.
Rule: Homepage (`index.html`) is excluded unless the owner explicitly approves it.

## Approved reference
Use the ID Card Print Studio page as the visual source of truth for tool-page hero banners. Preserve each tool's own title, explanatory copy, icon/illustration, feature labels and working controls. Reuse the layout system, not another tool's wording or artwork.

## Measured layout tokens (from the approved reference CSS)
- Page workspace on desktop: `width: calc(100% - 64px)`; `max-width: 1600px`; centered.
- Hero desktop: fills workspace (`width: 100%`); `min-height: 220px`; `padding: 42px 46px`; `border-radius: 22px`; bottom spacing 28px.
- Hero large desktop (1500px+): padding `48px 56px`.
- Hero grid: two columns `minmax(0, 1.08fr) minmax(0, .92fr)`; vertically centered.
- Brand mark in the page's brand strip: `48px × 48px`; rounded 15px. The shared site header logo is `44px × 44px` desktop and `39px × 39px` mobile.
- Hero title icon (where the tool has one): `112px × 112px`; rounded 30px.
- Hero title: `clamp(36px, 4.3vw, 62px)`, line-height 1.04, left aligned.
- Hero supporting copy: max width 660px; `clamp(16px, 1.55vw, 20px)`; line-height 1.55.
- Desktop visual/art area: minimum height 370px in the ID Card reference; adapt to the actual artwork so it does not force overflow or distort the banner.
- Light palette: ink `#101d42`; heading `#101b43`; blue `#087ee8`; cyan `#23bce9`; border `#cfe5fb`; soft blue-white gradient `#eaf6ff → #f8fcff → #e5f3ff`.
- Surface: subtle blue shadow; clean white/light background; no heavy dark/purple gradient unless the owner later approves a deliberate exception.

## Responsive rules
- Tablet: keep the same light visual language; reduce padding and collapse the artwork column only when needed. Never squeeze title/copy into unreadable widths.
- Mobile (≤640px): hero width `calc(100% - 20px)`; padding `24px 18px 34px`; radius 24px; one-column layout; center the title and copy; icon 78px; title `clamp(32px, 9vw, 43px)`; artwork scaled inside the banner; feature chips wrap without horizontal scrolling.
- Prevent layout shifts, clipped text, horizontal scrolling, or overlap between artwork and copy.

## Content placement
- Main hero contains only the tool identity: icon/art, tool title, concise tool-specific value proposition and short feature chips.
- Longer explanations, SEO copy, FAQs, instructions and related links belong below the hero in their own content sections — never in the small brand/header strip or footer.
- Keep the shared navigation controls (All Tools, language selector, Home) in the header, not inside the hero.
- Preserve every tool's functionality, input forms, ads/SEO metadata, download/install links and page-specific content.

## Rollout checklist
For each non-homepage HTML tool page:
1. Identify its actual hero container and internal layout before changing it.
2. Apply this reference's outer dimensions, spacing, light palette and responsive behavior.
3. Retain the page's own artwork and copy; adapt inner layout intentionally.
4. Check desktop, tablet and mobile widths; confirm no overflow or collisions.
5. Confirm the tool still works and its download/install action remains intact.
6. Record page path, hero selector, dimensions, palette, typography, artwork placement, responsive rules and verification status below.

## Page-by-page implementation log
No additional page is marked complete until its source change and rendered layout have both been verified.


## Implementation record — shared tool hero + Age Calculator
- Shared file: `site-header.js` — common hero dimensions aligned to ID Card Print Studio: desktop width 100% of page frame, min-height 220px, margin 12px 0 28px, padding 42px 46px, radius 22px; tablet padding 28px 26px; mobile padding 24px 18px, radius 22px.
- Common visual language: light blue-white gradient, pale blue border, soft blue shadow, navy headings and slate supporting copy. Existing page-specific content and artwork remain in place.
- Age Calculator: `age.html`, selector `.ij-age-main > .ij-age-hero`; page frame max-width 1600px, desktop width calc(100% - 64px); banner min-height 220px, padding 42px 46px, radius 22px, two/three-column layout retaining the original calendar illustration (`.ij-calendar-art`) and age preview; mobile frame calc(100% - 20px), two-column hero with calendar illustration preserved.
- Scope: homepage excluded; calculator logic and SEO content not edited.
- Source commits: shared hero `5e63241e80e7df69cb7b4982a2b282f8eb4e6c36`; Age Calculator `0d6482d56780dec2477fe559020aa183b69f68d9`.
- Verification: source changes saved; live rendering and full-page regression checks still pending.

## 2026-11-14 — Age Calculator two-column workspace update
- User-approved direction: input/work area on the left; calculated result panel on the right.
- Removed the extra tagline and generated page-description line beneath the InfoJano brand on the Age Calculator page only; logo and brand name remain.
- Preserved the existing calendar illustration in the Age Calculator hero.
- Reworked the first DOB calculator card into a responsive two-column CSS grid: DOB entry and advanced controls on the left; result panel on the right.
- Added a clear empty-state message in the result panel before calculation.
- At widths up to 760px, the layout stacks into one column with the result below the input controls.
- Calculator JavaScript, IDs, SEO metadata, birthday/history features, and lower informational sections were not intentionally changed.
- Source commits: `e400bb5d0628e6ec9d54598510e90ee4a2566f3e` (layout), `dc833c536f09effc3f7fd107810457e64f332802` (selector correction).
- Status: source committed; deployment and live browser visual verification not yet confirmed.

## 2026-11-14 — Age Calculator form and birthday panel positioning
- Moved the Advanced Age & Birthday Toolkit above the manual date-of-birth entry area on desktop and mobile.
- The DD-MM-YYYY date input remains outside the Advanced Toolkit card.
- Repositioned the existing age-preview card from the hero into the result information area, before the Happy Birthday greeting, when a calculation is run.
- Preserved the calendar illustration and birthday greeting artwork.
- Source commit: `835a94afe014d54d069dfd040cf45de1950e6ff4`.
- Status: source committed; deployment and live visual verification pending.

## 2026-11-14 — Advanced Toolkit placement and birthday fireworks correction
- Moved the Advanced Age & Birthday Toolkit out of the DOB calculator card and positioned it as a separate full-width card immediately above the calculator card.
- The calculator card retains the date-entry controls and result panel; the Advanced Toolkit is no longer a nested grid item.
- Hardened birthday fireworks canvas sizing and cleanup; added result-panel resize observation so the overlay follows the result panel dimensions and removes animation resources cleanly.
- Source commits: `4a79188f2651fc496cf5084cfeed9ebffce4c5dd`, `4647b608581b6934c1bdbdf9a25eb81a6716bab9`.
- Status: source committed; deployment and live browser verification pending.


## 2026-11-18 — Shared hero coverage audit and CMP dependency fix
- Re-read the approved reference specification before making changes. Homepage remains excluded; preserve each tool's title, copy, illustration and working controls.
- Shared site-header.js already applies the approved light hero dimensions/palette to .hero, .ij-age-hero, .ij-bmi-hero, .ij-discount-hero, .emi-hero, .ij-qr-hero, .ij-full-hero, .ij-master-hero, .ij-tool-hero, .ij-reference-hero, .ij-id-hero and .idg-hero.
- Added .ij-social-hero to the shared hero selector list so Social QR Maker receives the same approved styling.
- Search audit found hero markup in 93 repository HTML/code search matches; the common selector covers generic .hero plus the documented specialized families. A complete rendered desktop/tablet/mobile pass for every page remains pending; do not mark visual QA complete based on source alone.
- Related Privacy Settings diagnosis: only homepage included the AdSense adsbygoogle.js loader; tool pages did not. site-footer.js now injects the AdSense loader on every page if absent, initializes googlefc.callbackQueue, and calls showRevocationMessage from CONSENT_API_READY. This addresses a concrete missing dependency, but live browser confirmation is still required.
- Changes: site-footer.js commit 0e4abc7b4416b036a97d5224a76a8b68f505c670; site-header.js commit 96ee7b192aac1e9dcf074cc0f0281c40e96a023d; validator commit 2090f7f59919974af9abee7dbfd6bbf710cf7746; service-worker v329 commit b22f21f1a11ccba349b0d6107319a141956706e7.
- Global Footer QA run 44296350935 passed. Latest Pages deployment and APK workflow were still running when this record was added.


## 2026-11-18 — Shared hero typography rollout
- Extended shared title typography to the approved reference scale: desktop clamp 36px–62px, line-height 1.04, heavy navy title; mobile clamp 32px–43px, centered title and copy.
- Supporting copy uses 16px–20px, line-height 1.55 and max-width 660px. Mobile hero padding is 24px 18px 34px with 24px radius.
- Added .ij-social-hero to the selector family so Social QR Maker receives the shared light hero surface.
- Homepage excluded. Each page's own hero art, labels, copy, inputs and tool behavior remain page-specific.
- Source change: site-header.js commit 4bf7bd136df201e8402660274cc6ce634ddefce1; validator commit 298f62a6630a0a369e190f7cc0c552243989664a; service-worker cache v330 commit f13fa41f1bf7a91e13287600bf98afe5811a6e82.
- Global Footer QA run 44296565924 passed. Visual browser QA across all pages, tablet and mobile is still pending; no page is marked visually verified from source inspection alone.
