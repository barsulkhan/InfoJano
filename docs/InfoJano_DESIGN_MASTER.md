# InfoJano Design Master
**Purpose:** Permanent source of truth for user-finalized page designs. Reuse a recorded design by its ID; do not re-measure or redesign it from memory.

**Repository:** https://github.com/barsulkhan/InfoJano  
**Status:** Active design specification.  
**Rule:** A design is marked **FINAL / APPROVED** only after the user explicitly says it is final. Drafts, screenshots, and implementation guesses must never be treated as approval.

---

## 1. How this master file must be maintained

For every design the user finalizes:

1. Create or update one named design record in this file.
2. Give it a stable Design ID (example: `IJ-HERO-001`).
3. Record exact source CSS values wherever available: width, max-width, min-height/height, padding, margins, gaps, border radius, font sizes/weights/line heights, colors, logo/icon dimensions and placement, illustration dimensions and placement, buttons, and responsive breakpoints.
4. Record the actual text/copy, its position, alignment, and hierarchy.
5. Record desktop, tablet, and mobile behavior separately.
6. Record source file(s), selectors/classes, and the commit SHA where the approved design exists.
7. Record what must not change (tool logic, SEO content, homepage, etc.).
8. If a later change is approved, keep the previous record in **Revision history**; do not silently overwrite the old approved version.

When asked to reuse a design, apply the recorded design values and structure. Change only page-specific content (tool name, icon/illustration, description, accent details) unless the user explicitly asks for more. Do not alter unrelated page sections or tool functionality.

### Status vocabulary
- **REFERENCE / NOT YET APPROVED:** Useful visual reference; user has not explicitly finalized it.
- **DRAFT:** Proposed design awaiting user review.
- **FINAL / APPROVED:** User explicitly finalized it.
- **SUPERSEDED:** Replaced by a later user-approved revision; retain for history.

---

## 2. Design record — ID Card Print Studio premium hero
**Design ID:** `IJ-HERO-001`  
**Name:** InfoJano Light Premium Hero — ID Card Print Studio reference  
**Status:** **REFERENCE / NOT YET APPROVED AS A UNIVERSAL TEMPLATE**  
**Reference page:** `id-card-print-studio.html`  
**Reference page URL:** https://infojano.com/id-card-print-studio.html  
**Recorded from:** Current main-branch HTML/CSS source, not guessed from monitor-photo pixels.  
**Purpose:** Use this page as the measured reference when the user explicitly approves it for other pages. The user has asked to use this as the common direction for all tool heroes, but universal rollout must respect any page-specific exceptions and the user's final approval.

### 2.1 Brand bar / top logo
- Full-width white/off-white brand bar with a thin light-blue/gray bottom border.
- Background: `rgba(255,255,255,.97)`.
- Border: `1px solid #e5effa` (bottom border).
- Text color: `#14264a`.
- Desktop brand bar padding: `15px 18px`.
- Inner row: full width, no max-width; flex row, vertically centered; gap `14px`.
- Logo/home link: flex row, vertically centered; gap `14px`; no underline; no shrinking below content.
- Brand mark: `48px × 48px`, flex-basis `48px`, border-radius `15px`; blue/cyan gradient `linear-gradient(145deg,#22c7ed,#0877e8 60%,#164bd2)`; soft blue shadow `0 8px 20px #087ee833`.
- Mark's inline SVG: `32px × 32px`.
- Brand name: `26px`, line-height `1`, weight `850`, letter spacing `-1.1px`, navy `#101d42`; “Jano” accent `#e63d55`.
- Tagline: `14px`, color `#64748b`, top margin `5px`.
- Divider: width `1px`, height `36px`, color `#cad9eb`.
- Promise text: `14px`, color `#53647d`.
- Right-side Home link: pushed to far right with `margin-left:auto`; min-height `42px`; padding `9px 16px`; border `1px solid #c9e2f8`; radius `12px`; pale gradient; navy-blue text; font `14px/800`.
- Mobile (max-width 640px): brand bar padding `12px 14px`; brand mark `42px × 42px`, flex-basis `42px`; brand name `23px`; tagline `11px`; divider and promise text hidden; brand row can wrap; gaps `10px`; Home link min-height `38px`, padding `8px 11px`, font `12px`.

### 2.2 Page frame and hero container
- Page background: `#f2f8ff` (hero-specific layer; base page styles are also present in the source).
- Desktop breakpoint: `min-width:1001px`.
- Main frame at desktop: `width:calc(100% - 64px)`; `max-width:1600px`; centered; padding `28px 24px 36px`.
- Hero width: `100%` of main frame; no additional max-width.
- Hero desktop margin: `12px 0 22px`.
- Hero desktop padding: `26px 42px 22px`.
- Hero desktop border radius: `22px`.
- Hero border: `1px solid #cfe5fb`.
- Hero background: radial light-blue highlight over a pale blue/white linear gradient:
  `radial-gradient(ellipse at 78% 22%,#d9efff 0%,transparent 38%), linear-gradient(118deg,#eaf6ff 0%,#f8fcff 55%,#e5f3ff 100%)`.
- Hero shadow: `0 18px 44px rgba(32,104,174,.12)`.
- Hero text ink: `#101d42`.
- Decorative lower wave: blue/cyan gradient `linear-gradient(105deg,#50c6f4,#0787ee 58%,#1555db)`, positioned along lower edge; opacity `.9`.
- Hero is content-driven; do **not** invent a fixed height. The source has a `220px` min-height on the hero grid in an earlier desktop rule, but the later compact desktop override sets the grid min-height to `0`. Final desktop height therefore follows content/artwork.
- At widths `min-width:1500px`: hero padding `30px 50px 24px`; artwork min-height `250px`.

### 2.3 Hero internal layout
- Desktop grid: two columns `minmax(0,1.08fr) minmax(0,.92fr)`; align items center.
- Final desktop gap: `clamp(18px,3vw,38px)`.
- Left: icon, heading, subtitle, four document tiles.
- Right: decorative overlapping document/ID-card artwork.
- Copy column min-width: `0`.
- Hero icon tile final desktop: `78px × 78px`; radius `23px`; bottom margin `12px`; blue/cyan gradient; shadow `0 15px 30px rgba(15,102,210,.25)`.
- Icon SVG final desktop: `54px × 54px`.
- Heading final desktop: `font-size:clamp(34px,3.5vw,50px)`; line-height `1.04`; weight `850`; letter spacing `-2.1px`; bottom margin `9px`; left aligned; navy `#101b43`.
- Heading accent word uses blue/cyan text gradient and a subtle animated sweep; animation duration `5.8s`. Respect `prefers-reduced-motion`.
- Subtitle: max-width `660px`; desktop font `clamp(15px,1.2vw,18px)`; line-height `1.4`; color `#4c607c`; no extra margin.
- Four document tiles: four equal columns; gap `8px`; top margin `16px`; each min-height `96px`; padding `10px 7px`; white translucent card; radius `20px`; subtle border/shadow; centered icon and bold label.
- Tile icon final desktop: `32px × 32px`; label `14px`, weight `700+`; colors by tile: blue, purple, green, orange.
- Right artwork: centered stage; desktop min-height `235px`; perspective `1000px`.
- Each mock card: width `min(78%,330px)`; aspect ratio `1.59`; white border `8px`; radius `27px`; soft shadow; overflow hidden.
- Mock card top band: height `31%`; blue gradient for front card; purple gradient for back card; centered white bold label.
- Back card transform: `translate(25px,-60px) rotate(9deg)`; front card: `translate(-12px,34px) rotate(-5deg)`; front above back.
- Front/back card artwork has gentle floating animations (`5.2s` and `5.8s`); disable under reduced-motion preference.
- Benefits strip: flex row with wrapping; desktop top margin `16px`; gap `8px`; pill border-radius `40px`; white translucent background; each pill padding `8px 12px`; font `13px/750`; colored circular icon `22px × 22px`.

### 2.4 Tablet behavior
- Breakpoint: max-width `900px`.
- Hero grid: left `minmax(0,1fr)`, right `minmax(230px,.8fr)`; gap `20px`.
- Four document tiles change to two columns.
- Artwork stage min-height `300px`; mock cards width `92%`.
- The source also has the mobile stack breakpoint at 640px.

### 2.5 Mobile behavior
- Breakpoint: max-width `640px`.
- Hero width: `calc(100% - 20px)`.
- Hero margin: `14px auto 22px`.
- Hero padding: `24px 18px 34px`.
- Hero radius: `24px`.
- Grid becomes one column; gap `18px`.
- Copy centered.
- Hero icon tile: `78px × 78px`, centered; bottom margin `16px`; radius `23px`; icon SVG `49px × 49px`.
- Heading centered; font `clamp(32px,9vw,43px)`; letter spacing `-1.3px`.
- Subtitle font `15px`, centered, max-width retained.
- Document tiles: two columns; gap `9px`; top margin `20px`; each min-height `112px`; radius `17px`; padding `12px 6px`; label font `13px`.
- Artwork stage min-height `250px`; margin `0 2px 6px`.
- Mock cards width `min(82%,320px)`; border `6px`; radius `21px`; photo area `78px`.
- Benefits centered; gap `7px`; top margin `17px`; pill font `12px`; padding `8px 10px`; icon `21px × 21px`.

### 2.6 Content and hierarchy
- Brand promise in top bar: “Documents made simple · Print-ready results”.
- Main title: “ID Card Print Studio”.
- Subtitle: “Prepare your government ID documents for clean, accurate, print-ready PDF and JPG output.”
- Four tiles: “Ayushman Card”, “Aadhaar Card”, “Voter ID”, “Ration Card”.
- Artwork labels: “DOCUMENT CARD” and “IDENTITY CARD”.
- Benefit strip: “Easy to Use”, “Quick Processing”, “Print Ready”, “Free to Use”.
- The hero ends before the tool workflow and document-specific guide section. Do not put unrelated explanatory paragraphs or SEO copy into the hero. Longer descriptive copy belongs in the intended SEO/content area below the hero, not in the narrow brand bar or footer.

### 2.7 Scope and protection rules
- This record describes the hero/brand-header visual system only.
- Do not change ID Card Print Studio's PDF/image processing, crop workflow, front/back selection, card dimensions, print resolution, or PDF/JPG export when reusing or adjusting the hero.
- Do not apply this hero design to the homepage unless the user explicitly requests it.
- For other tool pages, replace only page-specific title, subtitle, icon/illustration, feature tiles and benefit copy as appropriate; retain layout, spacing, colors, typography, and responsive behavior.
- SEO landing pages may need their own page-specific content/CTA structure; do not blindly overwrite SEO text, FAQ, schema, canonical URLs, or internal links.

### 2.8 Source selectors and provenance
- Source file: `id-card-print-studio.html`.
- Relevant selectors: `.ij-brandbar`, `.ij-brandbar-inner`, `.ij-brandmark`, `.ij-brandname`, `.ij-brandtag`, `.ij-brand-divider`, `.ij-brand-promise`, `.ij-home-back`, `.ij-id-hero`, `.ij-id-hero-grid`, `.ij-id-hero-copy`, `.ij-id-hero-symbol`, `.ij-id-hero h1`, `.ij-id-hero-subtitle`, `.ij-doc-tiles`, `.ij-doc-tile`, `.ij-id-hero-art`, `.ij-id-card-mock`, `.ij-id-hero-benefits`.
- Values above are transcribed from the current source CSS, including later override rules. If CSS changes later, re-read the final cascade before updating these measurements.
- Current source commit at time of recording: to be filled from the verified GitHub commit when this record is committed.
- User approval: awaiting explicit confirmation that this reference is the FINAL universal hero template.

---

## 3. New approved design record template

Copy this section for each design the user explicitly finalizes.

### Design ID: `IJ-[TYPE]-###`
- **Name:**
- **Status:** DRAFT / FINAL / APPROVED / SUPERSEDED
- **Approved by user on:**
- **Reference page/file:**
- **Source commit SHA:**
- **Applies to:**
- **Must not change:**

#### Brand header
- Background:
- Height / min-height:
- Horizontal and vertical padding:
- Logo width × height:
- Logo position / alignment:
- Brand name font / size / weight / color:
- Tagline:
- Divider:
- Right-side controls:

#### Hero frame
- Width:
- Max-width:
- Height / min-height (or content-driven):
- Margin:
- Padding:
- Border / radius / shadow:
- Background / gradients:
- Desktop / tablet / mobile breakpoints:

#### Hero content
- Exact title:
- Exact subtitle:
- Text alignment / max-width:
- Title font family / size / weight / line-height / letter spacing:
- Text colors / accent treatment:
- Icon dimensions / position:
- Illustration dimensions / position:
- Buttons: labels, dimensions, colors, order, alignment:
- Feature tiles / benefit pills:
- Exact gaps and spacing:

#### Responsive behavior
- Desktop:
- Tablet:
- Mobile:

#### Scope / reuse rules
- Allowed page-specific substitutions:
- Elements that must remain identical:
- Excluded pages/sections:
- Functional / SEO protections:

#### Revision history
- Date:
- Change:
- User's explicit approval wording:
- Commit / PR:
