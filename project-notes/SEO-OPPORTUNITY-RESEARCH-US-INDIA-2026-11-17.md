# InfoJano — SEO & Competitor Opportunity Research (USA + India)

Research date: 2026-11-17  
Primary market: United States (US English)  
Secondary market: India (English; Hindi/regional localization only where the tool and support content justify it)  
Status: Research and recommendations only; no product implementation or deployment authorized by this dossier.

## 1. Executive summary

This audit combines the available InfoJano Search Console sample, source-level inspection of selected existing pages, and public competitor-page research. It is a qualitative competitor audit plus a limited three-day GSC sample—not a complete keyword-volume study or controlled hands-on test of every competitor.

### Main decisions

1. **Normal QR and Social QR must remain separate products.** Normal QR owns general-purpose QR intent (URL, text, Wi-Fi, WhatsApp, contact and other supported types). Social QR owns social-profile / multi-profile use cases. Do not blend features or metadata.
2. **India UPI QR is a focused opportunity, but position the tool honestly.** A generator encodes an existing UPI ID/VPA; it does not create or register a new UPI ID, verify a bank account, process a payment or confirm settlement.
3. **Image Resizer has a strong India-specific intent opportunity** around exact dimensions, exam/document photo presets and exact KB. The current InfoJano image-resizer source visibly includes pixel dimensions and photo/print/social presets; it does not establish the presence of official exam presets or exact-KB targeting. Do not claim those until built and tested.
4. **USA calculator pages should compete through task clarity, instant usable answers and transparent worked examples**, not generic “best calculator” claims. Omni Calculator's percentage page supports four distinct percentage questions; its discount page supports reverse calculation and multiple discount types. InfoJano should only promise functionality that exists in its own calculator.
5. **The free / no-sign-up / no-OTP proposition is a strong differentiator only when each specific tool actually has that flow.** Verify each page before putting these claims into title, description, hero or structured data. Never imply “no upload” without confirming the tool's file/data handling.
6. **No page changes are approved by this research.** The next implementation step should be a separately scoped PR after user approval and QA planning.

## 2. InfoJano Search Console evidence (limited sample)

Windsor.ai Search Console connector returned 184 row-level records for `sc-domain:infojano.com` when requested with `last_28d`, but the returned records covered only 2026-11-13 through 2026-11-15. This is not a full 28-day report and must not be represented as one. Query-level rows are sparse; many have one impression. Average position is query/page/country/device-specific and is not a stable ranking promise.

Selected observations:

| Page / query | Country | Date sample | Impressions | Average position | Interpretation |
|---|---|---:|---:|---:|---|
| `percentage-pt-br.html` / `porcentagem online` | Brazil | Nov 13–15 | multiple low-count rows | around 11–24 on some rows | Brazil Portuguese page has early visibility; do not treat as US/India evidence |
| `discount-pt-br.html` / `calculadora de desconto` | Brazil | Nov 13–15 | 1–2/day | around 61–83 | Relevant intent but weak positions in this sample |
| `qr-maker.html` / `qr code generator online` | India | Nov 13–15 | 1–2/day | around 81–93 | Generic QR head-term visibility is weak in this sample |
| `qr-maker.html` / `qr code generator free online 128` | Bangladesh | Nov 15 | 1 | 40 | Single impression; directional only |
| `upi-payment-qr-code-generator.html` / `generate upi id` | India | Nov 15 | 3 | 13–14 | Search intent may mismatch: a QR tool cannot issue a new UPI ID |
| `upi-payment-qr-code-generator.html` / `create upi qr code` | India | Nov 15 | 1 | 46 | Stronger intent match; still only one impression |
| `upi-payment-qr-code-generator.html` / `upi qr code payment gateway` | India | Nov 15 | 1 | 8 | Likely ambiguous/adjacent intent; inspect query before targeting |
| `percentage-to-decimal-converter.html` / `how to convert percent to decimal` | Sweden | Nov 15 | 1 | 4 | Single impression, not a market-level conclusion |
| `successive-percentage-change-calculator.html` / `successive percentage calculator` | France | Nov 15 | 1 | 8 | Single impression; useful as a long-tail relevance signal only |

Earlier page-level GSC snapshot available in the conversation showed `percentage-pt-br.html` 517 impressions, `discount-pt-br.html` 299 impressions and `qr-maker.html` 7 impressions. Those figures also came from a short/partial data return and must not be called a full 28-day total. Sitemap report showed 106 submitted URLs, zero errors and zero warnings; this confirms sitemap processing, not individual URL indexing.

### GSC actions

- Request a full date-scoped export (for example Nov 1–16) and split by page, query, country and device.
- Inspect each candidate page using URL Inspection before asserting indexing status.
- Track branded vs non-branded queries separately.
- Treat positions from one-impression queries as discovery signals, not proof of ranking strength.
- Prioritize query/page mismatch correction before adding more keyword variations.

## 3. Competitor audit — India: UPI and general QR

### UPI QR competitors

| Competitor | Publicly stated strengths | What InfoJano can learn | Caution |
|---|---|---|---|
| UPIPE — https://upi.pe/ | Existing UPI ID or bank-account input, payment link + QR, browser generation, no signup, privacy messaging, UPI app compatibility explanation, amount handling and safety FAQs | Explain what the QR encodes, app compatibility, amount behavior, payment link vs QR, and safe verification | It explicitly notes some apps reject bank-account QR; InfoJano should not claim universal bank-account compatibility |
| Widox — https://widox.in/tools/upi-qr-code-generator/ | Shop/stall focus, one QR or price-list mode, item-wise fixed amounts, standee, English/Hindi/Gujarati, no signup, browser processing | Specific small-business use cases and printable output are more compelling than generic “UPI QR” copy | Only claim price-list or standee if InfoJano actually supports them |
| QRvana — https://www.qrvana.in/ | UPI ID, payee, amount, remarks, browser-generated QR and cross-links to related QR tools | Related tools and a clear form can improve discovery and task completion | Do not copy cross-link structure blindly; keep Social QR separate |
| QRMaker — https://www.qrmaker.in/ | UPI, WhatsApp, design customization, scanner, PNG/SVG, privacy claims | General QR + India-specific UPI and scan reliability messaging | Claims such as “only free” are not independently established and should not be repeated |
| ScaleSaathi — https://scalesaathi.in/generators/upi-qr-code-generator/ | UPI QR with optional/fixed amount, notes, PNG/SVG, standee/poster, bulk generation, English/Hindi, privacy and explicit safety checklist | Clear static QR warning, scan-test checklist and shop print use cases | Bulk generation and standees are feature gaps unless implemented and QA'd |
| OneQR — https://oneqr.me/qr/upi | UPI QR, optional amount/note, PNG/SVG/PDF, logo, shape and frame styling, no signup/no watermark | Export formats and branding controls are competitive expectations in this niche | Do not promise formats or styling absent from InfoJano |

### UPI intent mapping and product copy

Primary intent:
- free UPI QR code generator
- UPI payment QR code
- create UPI QR code from UPI ID
- UPI QR code with amount
- download UPI QR PNG

Secondary intent (only if feature exists):
- UPI payment link generator
- printable UPI QR / shop standee
- UPI QR with note / bill reference
- bulk UPI QR generation

Negative/mismatched intent to handle:
- create/generate a new UPI ID
- UPI registration / KYC / bank account opening
- payment gateway / merchant account / payment settlement
- scan to receive money / request money

Recommended trust content:
- State that user must supply an existing UPI ID/VPA.
- State that QR generation does not transfer money, process payments, verify an account or confirm payment receipt.
- Advise users to check the payee shown in their own UPI app and verify payment in their bank/app, not from a payer screenshot.
- Explain optional amount vs open amount only according to actual implementation.
- Do not say “official NPCI generator” or imply InfoJano is affiliated with NPCI, banks or payment apps.
- Confirm payload format against current official UPI specification before making compatibility claims.

### Normal QR and Social QR competitors

Social QR examples:
- Qrindo — https://qrindo.com/tools/social-media-qr-code
- CirculateQR — https://www.circulateqr.com/qr-code-generator/social-media

Observed competitor messages/features include one-profile URL, no sign-up, browser processing, PNG/SVG, custom colours, shapes, logo, frame, and instructions to test-scan before printing. Some explicitly distinguish static QR from editable/trackable dynamic QR.

InfoJano positioning:
- Normal QR: general-purpose destinations and data types only.
- Social QR: platform profile links and multi-profile/Bundle/Link-in-Bio workflows only.
- Explain static vs dynamic honestly. If generated QR encodes a destination directly, changing the destination later requires a new QR unless a redirect service exists.
- Keep dark foreground/light background defaults and verify output readability; avoid low-contrast colour presets.
- Put “scan it with your phone before printing” in help content.
- No Sign-Up / No OTP / Free can be prominent only after each flow is confirmed on the relevant product.

## 4. Competitor audit — India: Image Resizer / exam photo

| Competitor | Publicly stated strengths | Gap / opportunity for InfoJano |
|---|---|---|
| FitPic — https://www.fitpic.in/ | 150+ exam presets, exact pixel + KB, photo/signature tools, browser-only processing, camera capture, mobile, no signup | High-intent exam-specific workflow; a generic image resizer does not satisfy this job |
| ToolsFlow — https://toolsflow.in/free-image-tools/ | Large India-focused suite: exact KB presets, passport size, exam-specific photo/signature, batch/ZIP and many named exam workflows | Officially relevant form-specific landing pages can capture long-tail demand, but need ongoing specification maintenance |
| easyPhoto — https://easyphoto.in/ | Browser processing, exact KB, exam/document picker, official-source references, passport/visa sizes | Trace each preset to official notice and show source/review date |
| ilovephoto — https://ilovephoto.in/ | Form selector, exact pixel/DPI/KB, crop/zoom/brightness, custom preset, no upload/no signup | More precise task completion and controls; requires careful testing for face crop and spec accuracy |
| Rajlabs — https://tools.rajlabs.in/image-resize-kb/ | Exact KB + pixel presets for named exams, batch ZIP, browser processing | Exact size and batch workflows are specific search intents |
| FitPic photo resizer — https://www.fitpic.in/photo-resizer | Exam picker, custom size, exact KB compression, client-side processing | Students need a file that meets a form rule, not just a resized image |

### India image intent clusters

- image resizer online / resize image to pixels
- photo resize for form / passport photo resize
- image resize to 20KB / 50KB / 100KB
- SSC / UPSC / IBPS / NEET / JEE / RRB / PAN photo size
- signature resize / signature under 20KB
- image compressor exact KB

### Recommendation

**GO for a separate India-focused research/validation track, not immediate implementation.** First audit InfoJano's existing `image-resizer.html` and `image-resizer` functionality to determine whether exact-KB output, crop, camera capture, batch, format support and privacy claims are truly present. If exact-KB or exam presets are absent, keep the current page's title/description aligned to exact pixel resize and presets it actually has. Do not add exam names, official specifications or “never uploaded” claims without implementation evidence and reliable sources.

For any future exam presets:
- Store the source authority, notice URL, dimensions, file-size range, format and last-reviewed date per preset.
- Distinguish mandatory official requirements from commonly accepted advice.
- Warn users to check the latest notice before submitting.
- Test boundary values (minimum/maximum KB), EXIF rotation, portrait crop, transparency, mobile camera input and output dimensions.
- Never guarantee that a third-party form will accept a file.

## 5. Competitor audit — USA: Percentage and Discount calculators

### Percentage calculator

Primary competitor: Omni Calculator — https://www.omnicalculator.com/math/percentage

Publicly visible structure:
- What is p% of x?
- x is what percent of y?
- x is p% of what?
- What is x increased/decreased by p%?
- Inline formula display, examples, step-by-step usage, supporting explanatory article and FAQ.

InfoJano's current `percentage.html` source title is “Percentage Calculator – Calculate Any Percentage | InfoJano”. Its meta description says it calculates a percentage of a number, what percent one value is of another, and increases/decreases. This is clear but overlaps Omni's core four intents. The exact current on-page calculator modes should be source- and runtime-tested before claiming parity.

Recommended page strategy:
- Preserve a concise, task-first title.
- In the first visible paragraph, name the supported tasks in plain language.
- Show one worked example for each actual calculator mode, with formula and units.
- Add FAQs for common queries (e.g. “What is 15% of 200?”, “What percent is 30 of 150?”, “How do I increase a number by 10%?”) only if the calculator supports those operations.
- Link to distinct existing tools (percentage change, difference, reverse percentage, percentage-to-decimal) only where the user task genuinely differs; avoid keyword-stuffed link lists.
- Do not add a giant general percentage article that obscures the calculator.

### Discount calculator

Primary competitor: Omni Calculator — https://www.omnicalculator.com/finance/discount

Publicly visible structure:
- Original price and discount inputs
- Discount amount / savings and final price
- Multiple discount types, including fixed amount and multi-item deals
- Optional tax treatment
- Reverse calculations (original price or discount rate)
- Formula, worked examples and FAQs

InfoJano's current `discount.html` source title is “Discount Calculator – Find Sale Price & Savings | InfoJano”. Its meta description promises discount amount, money saved and final sale price from original price and discount percentage. This is a good direct promise; do not imply reverse discount, tax or multi-buy logic unless verified in the actual tool.

Recommended page strategy:
- Make the result labels explicit: Discount amount, You save, Final price.
- Show the exact formula and one simple example.
- State whether tax is included/excluded only if the UI actually handles tax.
- Add reverse-price mode only if separately implemented and tested.
- Explain stacked discounts correctly if supported; do not add unsupported “compare offers” functionality to the snippet.
- Use local currency examples only where the calculator accepts a currency symbol as display/input, not where it is purely numeric.

## 6. Current InfoJano metadata and draft copy

These are proposals for later review—not committed page edits.

### Normal QR (separate from Social QR)
Title proposal:
**Free QR Code Generator – Create & Download QR Codes | InfoJano**

Description proposal:
“Create QR codes for links, text, Wi-Fi, WhatsApp and contacts. Generate and download your QR code free, without sign-up or OTP.”

Use only after verifying no-sign-up and no-OTP in the Normal QR user journey. If the tool does not support one of the listed types, remove it.

### Social QR
Title proposal:
**Free Social Media QR Code Generator – No Sign-Up | InfoJano**

Description proposal:
“Create one QR code for your social profiles. Add your profile links, generate your code and download it free—without sign-up or OTP.”

Only use “one QR code for your social profiles” if Bundle/Link-in-Bio behavior remains functional and accurately described. Keep it separate from general QR features.

### UPI QR
Title proposal:
**Free UPI QR Code Generator – Create Payment QR | InfoJano**

Description proposal:
“Create a UPI payment QR using your existing UPI ID. Add supported payment details, generate your code and download it free—no sign-up or OTP.”

“No sign-up or OTP” and “supported payment details” require a page-flow and feature check. The phrase “existing UPI ID” is important to avoid implying new ID issuance.

### Image Resizer — current safe positioning
Title proposal:
**Free Image Resizer – Resize Photos to Exact Pixels | InfoJano**

Description proposal:
“Resize images to exact pixel dimensions with photo, social media and print presets. Adjust the size and download your image online for free.”

This stays close to the current source-level promise. Do not add exact KB, exam presets, no upload, batch or privacy claims unless verified.

### Percentage
Title proposal:
**Free Percentage Calculator – Calculate Any Percentage | InfoJano**

Description proposal:
“Find a percentage of a number, calculate what percent one value is of another, and work out percentage increases or decreases with this free calculator.”

Check that each operation exists in the current UI before adopting.

### Discount
Title proposal:
**Free Discount Calculator – Sale Price & Savings | InfoJano**

Description proposal:
“Calculate the discount amount, money saved and final sale price from an original price and discount percentage. Free and easy to use.”

## 7. What makes a stronger Google result

Use this message hierarchy for each page:
1. Exact task / outcome in the title.
2. One or two concrete inputs and the result in the description.
3. Verified friction-reducer (free, no sign-up, no OTP) only if true.
4. A distinct feature or audience where genuinely supported.
5. No “#1”, “best”, “official”, “unlimited”, “100% private” or “instant” guarantee unless substantiated.

The strongest snippet is not the one with the most adjectives. It is the one that answers: “Can this page solve my exact problem, what do I enter, what will I get, and is there a signup/payment barrier?”

Google controls the final title link and snippet; metadata is guidance, not a guarantee that the exact text will display.

## 8. Prioritized action plan

| Priority | Work item | Market | Decision | Gate before implementation |
|---|---|---|---|---|
| P0 | UPI QR intent clarification and trust/safety copy audit | India | GO for audit | Verify current UI and QR payload; no new UPI ID claims |
| P0 | Normal QR vs Social QR message/feature boundary audit | Global | GO for audit | Confirm current modes and no cross-product feature mixing |
| P1 | Image Resizer exact-pixel + India exam-photo opportunity validation | India | HOLD implementation | Inspect live/source features; exact-KB/exam preset feasibility and authoritative requirements |
| P1 | Percentage Calculator title/snippet and task coverage | USA | GO for copy proposal review | Verify all calculator modes and actual visible content |
| P1 | Discount Calculator title/snippet and output clarity | USA | GO for copy proposal review | Verify outputs, formula and whether reverse/tax are supported |
| P2 | Social QR competitor differentiation and snippet review | USA + India | GO for copy proposal review | Confirm Bundle/Link-in-Bio and exports |
| P2 | Full query/country/device GSC export and URL Inspection | USA + India | REQUIRED | Current 3-day sample is too sparse for confident prioritization |

## 9. Measurement plan

Record baseline before edits:
- Search Console clicks, impressions, CTR, average position by page/query/country/device.
- Branded vs non-branded split.
- GA4 landing sessions and tool-completion events if those events are already validly instrumented.
- Mobile vs desktop engagement.
- Tool-specific success/failure signals (generation/download), without collecting sensitive user input.

After an approved metadata/content change:
- Keep one change group per PR/page cluster where practical.
- Record deployed commit and verified live URL.
- Request indexing only after the live page is verified.
- Compare equivalent date windows after enough data accrues; annotate seasonality and low sample sizes.
- Do not declare success from one impression, one click or a position fluctuation.

## 10. Research limits and unverified items

- Public competitor pages were reviewed through available indexed/page content. This was not a full controlled hands-on test of all forms, export downloads, account gates, mobile layouts or privacy network behavior.
- Competitor feature claims are attributed as published claims, not independently certified.
- No Ahrefs keyword-volume/difficulty report was available in the connected plan in the prior research session. The present audit does not invent US/India monthly volumes or KD.
- Search Console returned only Nov 13–15 rows for a last_28d request. It is an incomplete sample.
- Individual URL indexing status was not verified through URL Inspection.
- No production deployment was checked as part of this research.
- Source inspection is not browser/runtime QA.
- No code, page metadata, homepage, shared header/footer/assets, sitemap or unrelated tool was changed.

## 11. Sources

### InfoJano
- Search Console connector: `sc-domain:infojano.com`, requested `last_28d`, returned 184 query/page/country/device rows for Nov 13–15, 2026.
- Repository source inspected: `percentage.html`, `discount.html`, `qr-maker.html`, `social-qr-maker.html`, `upi-payment-qr-code-generator.html`, `image-resizer.html` (selected source snapshots; no runtime test in this audit).
- Existing project governance: `project-notes/TOOL-RESEARCH-STANDARD.md` and `project-notes/TOOL-INDEX.md`.

### Public competitor pages
- UPIPE: https://upi.pe/
- Widox UPI QR: https://widox.in/tools/upi-qr-code-generator/
- QRvana: https://www.qrvana.in/
- QRMaker: https://www.qrmaker.in/
- ScaleSaathi: https://scalesaathi.in/generators/upi-qr-code-generator/
- OneQR UPI: https://oneqr.me/qr/upi
- Qrindo Social QR: https://qrindo.com/tools/social-media-qr-code
- CirculateQR Social QR: https://www.circulateqr.com/qr-code-generator/social-media
- FitPic: https://www.fitpic.in/
- FitPic Photo Resizer: https://www.fitpic.in/photo-resizer
- ToolsFlow: https://toolsflow.in/free-image-tools/
- easyPhoto: https://easyphoto.in/
- ilovephoto: https://ilovephoto.in/
- Rajlabs Image Resize KB: https://tools.rajlabs.in/image-resize-kb/
- Omni Percentage Calculator: https://www.omnicalculator.com/math/percentage
- Omni Discount Calculator: https://www.omnicalculator.com/finance/discount
- Google Search Central guidance previously reviewed: title links, snippets and SEO starter guidance (see prior research citations in conversation).

---
End of research dossier. No implementation or deployment is implied.
