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
