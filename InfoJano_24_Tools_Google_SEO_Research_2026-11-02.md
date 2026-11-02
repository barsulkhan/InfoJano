# InfoJano — 24 Tool Google SEO Research
**Research checkpoint:** 2 November 2026  
**Repository:** https://github.com/barsulkhan/InfoJano  
**Branch:** main  
**Live site:** https://barsulkhan.github.io/InfoJano/

## Scope and method
This is Phase 1: qualitative Google query-language, search-intent and current-SERP research for the 24 standalone tool pages named in the 28 October master project. The live main-branch HTML was fetched for all 24 pages and the title, meta description, canonical, H1, H2 count, JSON-LD types and GA4 snippet presence were checked. Current search-result examples and competitor pages were reviewed for major query clusters. This is not a Google Keyword Planner export and does not contain verified monthly search volumes. No volume, difficulty or traffic estimate is invented.

Google guidance used as the baseline:
- Search Essentials: https://developers.google.com/search/docs/essentials
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Snippets and meta descriptions: https://developers.google.com/search/docs/appearance/snippet
- Title links: https://developers.google.com/search/docs/appearance/title-link
- Structured data introduction and policies: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript
- Google Trends keyword research: https://developers.google.com/search/docs/monitor-debug/trends-start
- Search Console Performance report: https://support.google.com/webmasters/answer/7576553

Google's current guidance is people-first, unique, useful content; descriptive titles/headings and crawlable internal links. Google may rewrite title links and snippets, and it does not guarantee rich-result display even for valid structured data. Do not create thin pages, keyword-stuffed copy, unsupported claims or FAQ schema solely to chase rich results.

## Desktop spacing check
The current main-branch `index.html` already contains a targeted CSS rule for `#noResults` and `#toolPanel`: 22px left/right margins on desktop and 12px on mobile. The Back to tools button is inside the tool panel card and inherits card padding. Therefore the requested spacing change is already present in source; adding a duplicate rule would be speculative. A true rendered desktop check could not be performed through the available source-fetch interface (the live GitHub Pages URL was inaccessible to that fetch service). Before another CSS change, compare a current desktop screenshot with the deployed page and confirm the browser is not showing a stale service-worker copy. Current `sw.js` reports cache `infojano-v96`. No CSS or service-worker code was changed in this research checkpoint.

## Current source audit — 24 pages
All 24 pages have a canonical URL and WebApplication JSON-LD in the fetched main-branch source except `qr-choice.html`, which has no JSON-LD. FAQPage JSON-LD is present on Currency Converter, Percentage, Age, EMI, Discount, BMI, GST and Date Difference. The other pages do not currently expose FAQPage JSON-LD. This is not automatically a defect; add visible FAQs only where they answer genuine user questions, and use structured data only when eligible and accurate.

GA4 snippet `G-P8D7XRGVEF` was present on 21 of the 24 audited pages. It was absent from `qr-choice.html`, `url-toolkit.html` and `id-card-print-studio.html`. Do not change the ID Card Print Studio page without the explicit permission already recorded in the master project. Confirm the intended analytics decision for the other two pages before changing them.

A specific metadata issue: the current Tip Calculator meta description appears to end abruptly after “Calculate a restaurant tip, total bill and each person”. Rewrite only after confirming the exact feature set and intended audience.

## Page-by-page query and intent map
The keyword phrases below are qualitative target clusters, not claims about measured search volume. Use one primary query per page and support it with close variants and question-led content. Preserve feature truth and avoid overlapping page targets.

| Page | Primary query / topic | Secondary and long-tail query language | Dominant intent and page opportunity |
|---|---|---|---|
| image-compressor.html | image compressor online | compress image online; reduce JPG size; compress PNG; compress WebP; reduce image file size without losing quality | Immediate task. Put the file formats, quality control, output size and actual local/server processing method near the tool. Competitors include TinyPNG, Squoosh and iLoveIMG. Differentiate only with verified advantages. |
| image-resizer.html | resize image online | resize image to pixels; change image dimensions; resize JPG; custom width and height | Immediate task. Current metadata promises custom width/height. Do not target exact KB, cm/mm, DPI or passport-size searches unless those functions actually exist on this page. Strong Indian form-photo demand exists in SERPs, but feature mismatch must not be hidden. |
| image-to-pdf.html | JPG to PDF / image to PDF | convert PNG to PDF; combine photos into one PDF; multiple images to PDF; image PDF page size and orientation | Immediate conversion task. Competitor SERPs emphasise multiple-image selection, page order, orientation, paper size, margins and a single multi-page PDF. Describe only options the InfoJano tool actually offers. |
| qr-choice.html | QR code tools (hub intent) | QR code maker; normal QR code; social media QR code | Navigational choice intent. This is a chooser, not the best landing page for the broad “QR code generator” query. Avoid competing with the actual QR maker subpage; link clearly to the normal and social QR workflows. Reassess whether this thin chooser needs indexation after reviewing its child pages. |
| url-toolkit.html | URL tools / URL toolkit | UTM builder; URL builder; URL cleaner; URL encoder decoder; URL parser; SEO slug generator; QR code from URL | Utility/task intent across several related URL operations. The page already describes UTM, clean, encode/decode, validate/parse, slug and QR functions. Keep the H1 and metadata coherent with this multi-tool scope; do not promise URL shortening or link analytics unless the page actually provides them. |
| currency-converter.html | currency converter | convert USD to INR; INR to USD; exchange rate calculator; convert currencies online | Conversion intent. Current description explicitly asks users to enter the rate they want to use; do not describe this as live exchange rates unless a verified live rate source is implemented. Consider a clear manual-rate label and worked examples. |
| unit-converter.html | unit converter | length converter; kg to lb; cm to inch; Celsius to Fahrenheit; weight converter | Immediate conversion intent. Current description says length, weight and temperature. Do not imply area, volume, speed or digital storage support unless verified. Add popular supported conversion examples and unit coverage. |
| text-counter.html | word counter | character counter; count words online; sentence counter; paragraph counter; character count with spaces/without spaces | Immediate text-analysis intent. Make counting rules explicit (what counts as a word, whitespace, punctuation, line breaks); show results and a practical use example. |
| percentage.html | percentage calculator | what is X percent of Y; X is what percent of Y; calculate percentage of a number; percentage of total | Calculation intent. Current source supports two modes: percent-of-number and part-as-percent-of-whole. Keep percentage change on its separate page and link between them rather than duplicate the same target. |
| age.html | age calculator | exact age calculator; age in years months days; days old calculator; day of week born; birthday weekday | Personal date calculation intent. Current title includes exact age and birth weekday. Make date format, leap-day handling and calculation date clear; do not imply age eligibility for a specific exam unless separately supported. |
| emi.html | EMI calculator | EMI calculator India; monthly loan EMI; home loan EMI; personal loan EMI; total interest payable | Financial calculation intent (YMYL-adjacent). State the calculation assumptions (reducing balance, annual-to-monthly rate conversion, compounding/payment timing) exactly as implemented. Explain this is an estimate, not a lender quote or approval. |
| discount.html | discount calculator | sale price calculator; discount percentage calculator; calculate savings; original price and sale price discount | Shopping/math intent. Current page has both discount-from-percentage and discount-from-original/sale-price modes. Use clear examples and distinguish discount amount from final sale price. |
| bmi.html | BMI calculator | body mass index calculator; BMI by height and weight; BMI calculator kg cm; BMI categories | Health information intent (YMYL). State adult/child applicability accurately; explain BMI is a screening measure, not a diagnosis. CDC source: https://www.cdc.gov/bmi/adult-calculator/index.html and categories: https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html |
| gst-calculator.html | GST calculator | GST calculator India; add GST; remove GST; GST inclusive exclusive; 5 12 18 28 percent GST calculation | India-specific tax calculation intent. Current tool supports before-GST and GST-inclusive modes and published slabs. Use worked examples and clearly label included/excluded GST; do not imply official tax advice. |
| date-difference.html | date difference calculator | days between two dates; date duration calculator; number of days between dates; weeks months years between dates | Date calculation intent. Explain whether end date is included or excluded; this is a major competitor UX distinction (timeanddate documents an explicit include-end-date option). Link to Age Calculator for birth-date questions. |
| tip-calculator.html | tip calculator | calculate tip; tip percentage; split bill calculator; tip per person; restaurant bill calculator | Immediate restaurant arithmetic intent. Current title/H1 cover tip and bill split; metadata description looks incomplete. Verify whether tax, rounding and per-person split are supported before including them in copy. |
| savings.html | savings calculator | future savings calculator; monthly savings growth; savings interest calculator; regular contribution calculator | Planning/financial estimate intent. Current inputs include opening balance, regular contributions, period and assumed return. State contribution timing and compounding assumptions; make clear projected returns are illustrative, not guaranteed. Do not imply bank FD/RD rates. |
| percentage-change.html | percentage change calculator | percentage increase calculator; percentage decrease calculator; percent change between two numbers; original vs new value percentage | Calculation intent. Keep distinct from Percentage Calculator: this page compares an original and new value. Explain base/original value and zero-baseline handling; do not target percent-of-number. |
| time-calculator.html | time calculator | add hours and minutes; subtract hours from time; time duration calculator; hours between two times; time difference calculator | Time arithmetic intent. Current meta description only mentions time between two clock times, while title says add/subtract. Verify every supported mode, including overnight rollover, then align title/description/H1 and worked examples to those modes. |
| number-to-words.html | number to words converter | convert number into words; amount in words; rupees in words; cheque amount in words; lakh crore number words | Conversion/document intent. Current metadata promises English words for amounts and forms. Verify Indian vs international numbering, decimals/paise and max input before promising lakh/crore or cheque formats. |
| id-card-print-studio.html | Aadhaar card print / ID card print layout | Ayushman card print; voter ID print; PAN card print; front and back ID card on A4; ID card PDF print | Practical document-print intent, strongly India-oriented. Current metadata names Ayushman/Aadhaar and PDF/photo upload, crop, dimensions, DPI, PDF/JPG export. Keep claims specific; explain actual print dimensions and print at 100% where applicable. **Do not edit this page without explicit user permission.** |
| loan-eligibility.html | loan affordability calculator | how much loan can I afford; loan payment affordability; monthly income and expenses loan estimate; EMI affordability | Planning/affordability intent. Current tool estimates a manageable monthly payment from income/expenses, not bank approval. Avoid “instant loan approval” and do not overlap with EMI calculator; clearly distinguish affordable payment from principal/eligibility. |
| loan-interest.html | simple loan interest calculator | simple interest calculator; loan interest amount; total interest and repayment; principal rate time calculator | Calculation intent. Current title says simple interest. Do not target compound interest or reducing-balance amortisation unless those modes are actually implemented. Explain formula, units and example. |
| password-generator.html | password generator | random password generator; strong password generator; secure password online; custom password length; password with symbols and numbers | Immediate security utility intent. Current description supports length and character-type choices and says generation runs in browser. Only claim cryptographic randomness, passphrases, PINs, entropy scoring or no-network operation if code is verified to support them. |

## Current SERP and competitor observations
These are observed examples of page structure and query intent, not a ranking report for InfoJano:
- Image compression SERPs compare TinyPNG, Squoosh and iLoveIMG and emphasise format support, quality/size trade-off, batch limits and whether processing is local: https://squoosh.app/ ; https://tinypng.com/ ; https://www.iloveimg.com/compress-image
- Image resizing SERPs for India heavily surface exact KB, pixels, cm/mm, DPI, passport/exam photo presets and privacy: https://mufttools.in/photo-resizer/ ; https://www.photosizer.in/ ; https://sizeport.com/
- Image-to-PDF competitors emphasise combining multiple images, page order, orientation, size and margins: https://www.ilovepdf.com/jpg_to_pdf ; https://smallpdf.com/image-to-pdf/
- QR SERPs distinguish static from dynamic QR codes, logo/customisation, downloadable formats and tracking. Do not blur static QR creation with paid dynamic QR services: https://www.qrbench.com/best/free/
- Percentage calculator competitors cover multiple distinct questions (X% of Y, X is what % of Y, percentage change, increase/decrease). Keep InfoJano's percentage and percentage-change URLs from cannibalising each other: https://www.w3schools.com/tools/tool_percentage_calculator.php
- Indian EMI competitors explain reducing-balance EMI formula, total interest and repayment schedule: https://www.paisabazaar.com/personal-loan-emi-calculator/ ; https://www.bankbazaar.com/personal-loan/emi-calculator.html
- GST calculator SERPs prominently expose included/excluded GST and Indian slabs: https://groww.in/calculators/gst-calculator
- BMI SERPs are authoritative and health-sensitive; use CDC wording and caveats: https://www.cdc.gov/bmi/adult-calculator/index.html
- Date duration SERPs explain inclusive vs exclusive end dates: https://www.timeanddate.com/date/duration-help.html
- ID card print SERPs show a clear niche: Aadhaar/Voter/PAN/Ayushman, front/back, A4/PDF, exact physical dimensions and browser-local processing. Competitor examples: https://eapply.in/id-card-print ; https://www.jobrojgar.com/cyber-cafe/id-card-print

## Search Console context carried forward
The 28 October master records an earlier 3-month site view of 2 clicks, 83 impressions, 2.4% CTR and average position 30.4. It also records page-filtered early data for Discount (42 impressions, 0 clicks, average position 18) and Percentage (24 impressions, 0 clicks, average position 55.5). These are historical snapshots, not current 2 November metrics. The latest Search Console Performance report supports analysis by query, page, country, device and date; compare page-filtered query data over a consistent period. Google notes average position is an aggregate and search results vary by place/device/time. Source: https://support.google.com/webmasters/answer/7576553

## Priority recommendations before code edits
1. **High-intent feature alignment:** fix the Tip Calculator description; verify Time Calculator modes; verify Currency Converter's manual-rate model; verify Image Resizer's supported dimensions/units; confirm Loan Affordability and Loan Interest assumptions.
2. **Cannibalisation control:** Percentage vs Percentage Change; EMI vs Loan Affordability; Image Compressor vs Image Resizer; QR chooser vs actual QR maker; Age vs Date Difference.
3. **Content gaps:** add concise, genuinely useful worked examples, formulas/assumptions, supported inputs/outputs, privacy/processing details and task-focused FAQs where the tool needs them. Do not force a fixed word count.
4. **Technical audit:** verify canonical, robots/indexability, sitemap inclusion, crawlable internal links, Open Graph/Twitter consistency, JSON-LD accuracy, analytics coverage and live deployment. Do not change PWA/service-worker assets for metadata-only edits.
5. **Quantitative research:** use Search Console query exports by URL and country, Google Trends comparisons for candidate terms, and Keyword Planner (if accessible) for directional demand ranges. Third-party volume/difficulty tools are estimates. Record country/device/date and source for every numeric metric.
6. **Implementation approach:** create small page-specific branches/PRs, preserve functionality and analytics, validate changed HTML/JSON-LD/canonicals/internal links, and update cache only if cached assets actually change. No SEO edits were made in this research phase.

## Checkpoint status
- Fetched all 24 target pages from GitHub `main` and recorded current metadata/canonical/H1/schema/GA presence.
- Completed first-pass qualitative query mapping and competitor/SERP pattern research.
- Desktop spacing: source CSS rule exists (22px desktop, 12px mobile); rendered desktop appearance remains unverified. No speculative CSS edit made.
- No source code, page metadata, PWA cache, or production deployment was changed during this research phase.
- Next: validate the exact desktop state with a current screenshot or real desktop browser, then deepen the 24-page quantitative keyword/competitor analysis and prepare a prioritized, page-by-page content/metadata plan before implementation.


# Deep research — Image Tools cluster (2 November 2026)

## Evidence and limitations
This phase combines current InfoJano main-branch source inspection with live SERP/competitor observations and third-party keyword/traffic estimates. Third-party estimates are directional, not Google Search Console data and not a direct Keyword Planner export unless explicitly stated. Search volume, difficulty and competitor traffic vary by tool, country, device, time range and methodology. Do not present these as guaranteed Google demand or InfoJano traffic forecasts.

### Market signals (directional)
- Image Compressor: KWSTrends' report updated 1 Nov 2026 estimates about 660,000 global monthly searches for the broad phrase, with India about 270,000 (41%) and US about 55,000 (8.3%). Its report lists related estimates: jpeg image compressor 8,000, jpg image compressor 6,500, online image compressor 4,000, image compressor free 4,000, image size compressor 2,700, PNG image compressor 390, WebP image compressor 290, image compressor to 100KB 230, to 20KB 170, to 50KB 70. These are provider estimates; the page reports Google Ads/Keyword Planner figures for US but the global and India figures are the provider's estimates. Source: https://www.kwstrends.com/keywords/us/image-compressor
- Image Resizer: AhrefsTop's current third-party site report for simpleimageresizer.com estimates India keyword volumes of 688K for “image resizer”, 719K for “resize image”, 45K for “resize image to 100kb”, and 50K for “resize image to 50kb”. These are competitor keyword estimates, not InfoJano opportunity forecasts. Source: https://ahrefstop.com/websites/simpleimageresizer.com
- JPG to PDF: AhrefsTop's current competitor report estimates India volumes of 4.8M for “jpg to pdf”, 681K for “jpg to pdf converter”, 896K for “image to pdf” and 200K for “jpeg to pdf”. This demonstrates a large established query class but also an extremely competitive SERP dominated by specialist converters. Source: https://ahrefstop.com/websites/jpg2pdf.com
- Search visibility reports for imageresizer.com list “image resizer” and “resize image” as high-traffic phrases, and identify iLoveIMG, simpleimageresizer and other utility sites among competitors. These are estimates, not first-party analytics. Source: https://analytics.explodingtopics.com/website/imageresizer.com

## 1) Image Compressor — https://barsulkhan.github.io/InfoJano/image-compressor.html

### Verified current functionality
- Accepts browser-supported image files via an image file picker.
- Output formats: JPEG, PNG and WebP.
- Quality slider from 10 to 100.
- Optional maximum output width (blank retains original width).
- Optional target size in KB (1–20,000); page explicitly says target KB is best-effort and cannot be guaranteed for every image.
- Page explicitly states processing is local in the browser and images are not uploaded.
- The page does not currently expose a direct exact-height field, physical cm/mm/DPI controls, a fixed 20/50/100KB preset bank, or a batch workflow in the visible controls inspected.

### Keyword target and intent
Primary: **image compressor online** (broad task intent; very competitive).
Secondary: compress image online; JPG image compressor; JPEG image compressor; PNG image compressor; WebP image compressor; reduce image file size; image compressor to 100KB; compress image to target KB; compress image without uploading.
Long-tail: compress JPG image online; reduce image size in KB; compress PNG without changing dimensions; convert and compress image to WebP; compress image in browser; reduce photo file size for online form (only as a broad use case, not an exact size promise).

Dominant intent: immediate tool/task completion. User arrives with a file and wants a smaller downloadable file. Secondary informational intent concerns file size, visual quality, formats and privacy.

### SERP/competitor pattern
KWSTrends lists imagecompressor.com, Adobe Express, imageresizer.com, iLoveIMG, FreeConvert, TinyJPG and TinyPNG among organic results. Competitors typically foreground drag/drop, output formats, batch processing, compression level, target size, previews and limits. Squoosh differentiates around browser-side control and format/quality comparison. Competitor links: https://imagecompressor.com/ ; https://www.adobe.com/express/feature/image/compress ; https://www.iloveimg.com/compress-image ; https://www.freeconvert.com/image-compressor ; https://squoosh.app/ ; https://tinypng.com/

### Opportunity and page recommendations
1. Lead with the verified use case: “Compress JPG, PNG and WebP images online” rather than claiming exact-size guarantees.
2. Place the privacy/local-processing explanation next to the upload control, not only in a paragraph below it.
3. Explain the difference between quality, width and target KB. The current best-effort note is valuable and should remain visible.
4. Add a compact before/after result summary if the current interface supports it; do not claim it until verified.
5. Add examples around “reduce image size in KB” and “compress JPG/PNG/WebP” without keyword stuffing.
6. Link prominently to Image Resizer for dimension changes and Image to PDF for document creation.
7. Avoid “without losing quality”, “exact 20KB/50KB”, “unlimited batch” and “no file-size limit” claims unless product behaviour changes and is tested.

Suggested title (candidate, not yet implemented): **Image Compressor Online – Compress JPG, PNG & WebP | InfoJano**
Suggested description (candidate): **Compress JPG, PNG and WebP images online for free. Adjust image quality, set an optional width or target KB, and download the smaller file. Processing stays in your browser.**
Suggested H1: **Compress JPG, PNG & WebP Images Online**
Recommended visible content: How to compress an image; Quality vs file size; What target KB means (best-effort); Supported formats; Privacy and local processing; FAQs: how to reduce image size, does compression reduce quality, can I compress PNG, can I set a target KB, are images uploaded?

## 2) Image Resizer — https://barsulkhan.github.io/InfoJano/image-resizer.html

### Verified current functionality
- Accepts an image file.
- User enters width and height in pixels.
- Output format choices are JPEG and PNG.
- Keep-aspect-ratio checkbox is enabled by default.
- Page states browser-local processing and no upload to InfoJano.
- The inspected controls do not include cm/mm/inch, DPI, target KB, passport/exam presets, crop, batch processing or WebP output. Do not target those as existing capabilities.

### Keyword target and intent
Primary: **image resizer online** (very high competition, broad immediate task intent).
Secondary: resize image online; resize photo; change image dimensions; resize image in pixels; image size changer; resize JPG; resize PNG; custom image dimensions.
Long-tail: resize image to 600x400 pixels; change photo width and height; resize JPG image online; resize PNG image online; resize image without uploading; keep image aspect ratio while resizing.

Indian market subcluster: photo resizer; resize photo to 50KB; resize image to 100KB; passport photo size; exam photo size; signature size; image resize in cm/mm/DPI. These are attractive query themes, but **they are not current tool features**. Do not use them as the primary promise until the functionality is implemented and tested. Consider a separate future “Photo & Signature Resizer” product/page if the owner approves the feature roadmap; avoid turning the current pixel-only page into a misleading exam-photo landing page.

### SERP/competitor pattern
India-focused competitors such as PhotoSizer.in, CropDesk, Toolkit360, PhotoResizer.in and Shivi Notes advertise exact KB targets, px/cm/mm, DPI, passport/exam presets and browser-side processing. Their visible controls directly match form-upload requirements, so they satisfy a more specific job than InfoJano's current pixel-only resizer. Examples: https://www.photosizer.in/ ; https://cropdesk.co.in/image-resizer/ ; https://toolkit360.in/tools/image-resizer ; https://www.photoresizer.in/ ; https://www.shivinotes.com/image-editor
Broader competitors such as imageresizer.com and iLoveIMG compete for generic resize-image intent. Third-party traffic estimates show India can be a substantial audience for these utilities, but they are not reliable substitutes for InfoJano's Search Console data.

### Opportunity and page recommendations
1. Focus the current page on exact pixel width × height and aspect-ratio control; this is the honest product-market fit today.
2. Put “pixels” in the H1 or opening copy and show a concrete 600 × 400 example.
3. Explain aspect ratio clearly: preserve proportions vs allow stretching. The current page already warns about distortion.
4. Explicitly state supported output formats (JPEG and PNG) and local processing.
5. Add links to Image Compressor for target file-size reduction and Image to PDF for document output.
6. Treat exact-KB, DPI, cm/mm and exam-photo keywords as roadmap opportunities, not metadata claims. Re-evaluate if those features ship.

Suggested title (candidate): **Image Resizer Online – Resize JPG & PNG in Pixels | InfoJano**
Suggested description (candidate): **Resize JPG and PNG images online by entering custom pixel width and height. Keep the original proportions, choose an output format and download your resized image.**
Suggested H1: **Resize Images to Custom Pixel Dimensions**
Recommended visible content: How to resize; width vs height; aspect ratio; JPG vs PNG; local processing; examples (600 × 400, 1080 × 1080 as user-entered examples, not preset promises); FAQs about stretching, pixels, supported formats and privacy.

## 3) Image to PDF — https://barsulkhan.github.io/InfoJano/image-to-pdf.html

### Verified current functionality
- Accepts multiple image files in one file picker.
- Page-size options: A4, Letter and Fit.
- Margin checkbox is enabled by default.
- The page states browser-side processing and no upload.
- Source code inspection shows images are scaled down so the longest edge is at most 1800 pixels before PDF creation; the canvas is rendered with a white background and JPEG data. This is a meaningful output-quality constraint and should be documented accurately.
- Do not promise arbitrary DPI, exact print resolution, OCR, password protection, compression target, page reordering or batch ZIP unless further code verification confirms it. The page's help text itself says “if the page supports reordering”; do not present reordering as guaranteed.

### Keyword target and intent
Primary: **JPG to PDF** (huge demand, extremely competitive, direct conversion intent).
Secondary: image to PDF; JPG to PDF converter; JPEG to PDF; PNG to PDF; convert images to PDF; photos to PDF; multiple images to one PDF; image PDF maker; JPG PDF online.
Long-tail: convert multiple JPG images into one PDF; combine photos into a single PDF; JPG to PDF A4; PNG images to PDF; create PDF from photos on phone; image to PDF without uploading.

Dominant intent: immediate file conversion, with a strong document workflow component. Users often want a multi-page PDF that can be submitted, printed or shared.

### SERP/competitor pattern
JPG2PDF, iLovePDF, Smallpdf and FreePDFConvert occupy a highly competitive, mature query set. Competitors emphasise selecting multiple images, arranging order, page orientation/size, margins, image fit and download. Competitor examples: https://jpg2pdf.com/ ; https://www.ilovepdf.com/jpg_to_pdf ; https://smallpdf.com/image-to-pdf ; https://www.freepdfconvert.com/jpg-to-pdf
Third-party competitor reports estimate very large India search demand for “jpg to pdf” and “image to pdf”; treat these figures as directional only, not a traffic forecast.

### Opportunity and page recommendations
1. Do not try to outrank the generic query with thin copy alone. Make the actual multi-image workflow fast and clear above the fold.
2. Use “JPG to PDF” in the title and opening paragraph, while supporting PNG and other accepted image formats in the description.
3. Make multi-image input, A4/Letter/Fit page size, margins and browser-local processing explicit.
4. Add a plain explanation of the 1800px longest-edge processing limit and warn that this is not a high-resolution print-master workflow. Confirm the exact output impact on the generated PDF before final copy.
5. Explain common workflow: choose several photos, select page size, create PDF, inspect the downloaded result.
6. Add an A4 use-case section only as page-size support; do not claim guaranteed government-form compliance or exact image ordering until tested.
7. Internal links: Image Compressor (reduce source file size), Image Resizer (set dimensions), ID Card Print Studio (specialised card layout) only if the destination is relevant and its permission/roadmap constraints are respected.

Suggested title (candidate): **JPG to PDF Converter – Convert Multiple Images Free | InfoJano**
Suggested description (candidate): **Convert multiple JPG, PNG and other supported images into one PDF online. Choose A4, Letter or Fit page size, keep margins, and create your PDF in your browser.**
Suggested H1: **Convert JPG and Images to PDF**
Recommended visible content: Supported formats; create a PDF from multiple photos; A4 vs Letter vs Fit; margins; image resolution/1800px processing note; privacy; FAQs about multiple images, page size, file upload/privacy and print quality.

## Cross-page keyword ownership and cannibalisation
- `image-compressor.html`: compression, file size, KB target, quality, format conversion.
- `image-resizer.html`: pixel dimensions, width/height, aspect ratio, dimension changes.
- `image-to-pdf.html`: multi-image PDF creation, page size and margins.
Use internal links with descriptive anchors between these three pages, but do not repeat identical primary title/H1 phrases across them. If future features expand (KB/DPI/exam presets), decide whether to upgrade Image Resizer or create a dedicated Photo & Signature Resizer page only after a product decision.

## Implementation gate
No code or metadata was changed in this research phase. Before implementation, verify generated PDF quality, image ordering behaviour, all file size limits, mobile performance and local processing in real browsers. Prepare separate diffs for title/description/H1/content and test each page. Do not modify the Image Resizer functionality or add KB/DPI presets without explicit product approval. Keep the existing privacy and target-KB caveats accurate.
