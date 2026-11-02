# InfoJano Search Intent & SEO Map — 2026-11-02

## Purpose
This document maps each live tool page to one primary search intent and closely related natural-language queries. It is a planning map, not a claim that any keyword has a verified search volume or guaranteed ranking.

## Research and measurement rules
- Google's Search Central guidance says titles should be unique, descriptive and concise; headings and visible page content can influence title links. Google may need days or weeks to recrawl changes.
- Google's people-first guidance says the page should satisfy the visitor's task with accurate, original, useful content. Do not add keyword repetition, thin boilerplate or invented expertise.
- Public keyword-volume roundups can help discover topics, but their volumes are estimates and are not InfoJano's actual traffic. Validate priorities with Search Console query/page impressions, clicks, CTR and country filters.
- Do not add FAQ structured data expecting FAQ rich results on an ordinary commercial utility site. Keep visible FAQs only when they genuinely answer likely user questions.
- Avoid claiming that any financial calculator gives an approved loan, guaranteed return or financial advice. Currency conversions must state that provider rates/fees may differ. BMI is a screening estimate, not a diagnosis. Identity documents require careful privacy wording.

## Page-by-page search intent map

| Page | Primary intent / keyword | Secondary query themes |
|---|---|---|
| image-compressor.html | image compressor online | compress JPG, compress PNG, compress WebP, reduce image file size, image size reducer |
| image-resizer.html | image resizer online | resize image to pixels, resize JPG, change photo dimensions, image width and height |
| image-to-pdf.html | image to PDF converter | JPG to PDF, PNG to PDF, convert photos to PDF, multiple images one PDF |
| qr-choice.html | free QR code generator | QR code for URL, QR code for text, social media QR code, create QR code online |
| url-toolkit.html | URL tools / UTM builder | UTM link builder, URL encoder decoder, remove tracking parameters, URL parser, slug generator |
| currency-converter.html | currency converter | convert currencies, exchange rate calculator, USD to INR, amount conversion |
| unit-converter.html | unit converter | cm to inches, kg to pounds, length converter, weight converter, temperature converter |
| text-counter.html | word counter | character counter, sentence counter, count words online, character count with spaces |
| percentage.html | percentage calculator | calculate percentage of a number, what percent is X of Y, percentage formula |
| age.html | age calculator | calculate age from date of birth, age in years months days, birth weekday |
| emi.html | EMI calculator | monthly loan EMI, home loan EMI, personal loan EMI, total interest payable |
| discount.html | discount calculator | sale price calculator, percentage off calculator, discount amount, final price |
| bmi.html | BMI calculator | body mass index calculator, BMI by height and weight, BMI categories |
| gst-calculator.html | GST calculator | GST amount, price including GST, remove GST, pre-tax price |
| date-difference.html | date difference calculator | days between dates, date duration calculator, weeks between dates |
| tip-calculator.html | tip calculator / bill split | restaurant tip, split bill calculator, tip per person |
| savings.html | savings calculator | future savings calculator, monthly savings growth, savings goal estimate |
| percentage-change.html | percentage change calculator | percentage increase, percentage decrease, change between two values |
| time-calculator.html | time calculator | hours between times, add hours and minutes, time duration calculator |
| number-to-words.html | number to words converter | convert number into words, amount in words, number spelling |
| id-card-print-studio.html | ID card print studio | ID card print layout, ID card photo crop, print dimensions DPI, front back card print |
| loan-eligibility.html | loan affordability calculator | how much loan can I afford, EMI affordability, loan payment estimate |
| loan-interest.html | loan interest calculator | simple interest calculator, loan interest amount, total repayment estimate |
| password-generator.html | password generator | random password generator, strong password, secure password generator |

## Implementation notes
1. Each page must keep one clear primary topic. Do not make several pages target the same exact primary phrase unless their intent is genuinely different.
2. Keep page title, H1, introductory copy, tool controls and examples aligned. Do not add keywords that the tool does not support.
3. Use concise descriptions that explain the task and useful outcome, not lists of repeated keywords.
4. Link related tools contextually where it helps the visitor continue a task. Avoid sitewide repetitive exact-match anchor spam.
5. Add visible FAQs only where the questions are genuinely useful. Do not promise rich results from FAQ markup.
6. Preserve calculator logic, image processing, privacy behaviour, analytics, PWA manifest, service worker and short-link backend.
7. Check mobile layout, keyboard access, labels, result messages, image outputs and page performance after content changes.
8. Re-submit or inspect sitemap in Google Search Console after merge; use URL Inspection for representative changed URLs. Do not expect instant ranking changes.

## Initial technical audit
- The 24 main tool pages were checked for title, H1, meta description and canonical link.
- Existing JSON-LD was present on the checked pages except QR choice; QR choice received a SoftwareApplication JSON-LD block in this branch.
- Several pages already had useful FAQ content even when no FAQPage JSON-LD was present. New visible FAQ sections were added only to pages where the audit found a content gap.
- ID Card Print Studio title/H1/description were broadened to match the actual tool name rather than focusing only on two document types.
- No search-volume figures in this map should be treated as verified Google Keyword Planner data. Use the site's own Search Console data to decide the next round of priorities.
