# InfoJano — Loan Interest Calculator: Project Record

**Page:** https://infojano.com/loan-interest.html  
**Repository:** https://github.com/barsulkhan/InfoJano  
**Primary implementation file:** `loan-interest.html`  
**Shared navigation:** `site-header.js`  
**Record updated:** 20 November 2026  
**Status:** Feature implementation merged; latest recorded Pages deployment and Global Footer QA passed after PR #263.

This document records the research, implementation decisions, features, calculations, visual work, SEO work, validation and known follow-up notes for the Loan Interest Calculator. It is intended as the handover/reference file for future maintenance.

---

## 1. Current tool at a glance

The page contains **two separate, simultaneously visible calculator sections**. Both remain open by default; there is no tab, dropdown or method-selection step.

1. **Simple Interest Calculator** — calculates interest on the original principal.
2. **Reducing Balance Loan Calculator (EMI)** — calculates a fixed monthly EMI and interest on the outstanding principal as it reduces.

Both calculators use the same principal, annual interest rate and tenure fields. The monthly-rate annualisation helper is a separate small utility below the calculators.

The page is an estimate/planning tool, not a lender quote, loan approval or financial advice.

## 2. Features currently implemented

### A. Simple Interest Calculator

- Loan amount / principal input, INR formatting.
- Quick amount presets: ₹1,00,000; ₹2,00,000; ₹5,00,000; ₹10,00,000.
- Annual interest-rate input.
- Tenure input with Years or Months unit.
- Calculate and Reset actions.
- Displays total simple interest and total repayment.
- Displays principal, annual rate, tenure and interest-method breakdown.
- Updates the calculation when input fields change.
- Converts months to years before applying the formula.
- Shows validation messages for missing, negative, non-finite or excessively large values.

**Formula**

`Simple Interest = (Principal × Annual Rate × Time in Years) / 100`

`Total Repayment = Principal + Simple Interest`

The interest is calculated on the original principal for the entire selected period. It is not the same as interest on a reducing balance.

### B. Reducing Balance Loan Calculator (EMI)

- Uses the same principal, annual rate and tenure fields as the Simple Interest calculator.
- Calculates a monthly EMI using the standard amortisation formula.
- Each month's interest is calculated on the outstanding balance.
- The principal portion of each instalment reduces the balance for the next month.
- Shows:
  - Monthly EMI
  - Total reducing-balance interest
  - Total repayment
  - Balance after the first EMI
  - Starting principal
  - Monthly interest rate
  - Number of EMIs
- Includes a monthly repayment schedule with columns for Month, EMI, Principal Paid, Interest and Remaining Balance.
- Shows the first 12 months initially; a button expands the full schedule and can collapse it again.
- Recalculates when shared inputs change.
- Handles a 0% annual rate separately.
- Validation: positive principal; annual rate from 0% through 100%; whole-number tenure from 1 through 600 months.

**Formula**

Let `P` be principal, `r = annual rate / 1200` be the monthly rate as a decimal, and `n` be the number of monthly instalments:

- If `r = 0`: `EMI = P / n`
- Otherwise: `EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)`

For each month:

- `Interest = Opening Outstanding Balance × r`
- `Principal Paid = EMI − Interest` (capped at the remaining principal)
- `Closing Balance = Opening Balance − Principal Paid`

**Assumptions displayed in the tool:** fixed annual rate, monthly payments, no fees, no rate changes and no extra repayments. Actual lender schedules may differ due to rounding, payment dates, fees, rate changes or lender-specific rules.

### C. Monthly Rate to Annual Rate Checker

- Accepts a quoted monthly percentage from 0% to 100%.
- Calculates a simple annualised equivalent using `monthly rate × 12`.
- Example: 2% per month × 12 = 24% per year.
- Explicitly warns that this is **not** APR, effective annual rate or a lender quote; it does not account for reducing balance, compounding, fees or taxes.
- Advises users to read the loan sanction letter and confirm the lender's actual calculation method.

### D. Hero banner and visual design

- InfoJano blue/white visual direction.
- Calculator illustration and Loan Details document illustration are separate and visible side-by-side, rather than overlapping.
- The calculator and document have a repeating sequential animation: calculator gets its motion emphasis first, then the document.
- Decorative falling coins/glow and calculator display typing animation are included.
- Document check marks are positioned on the right side of their rows.
- Decorative motion respects `prefers-reduced-motion`.
- The page uses the same desktop content frame as the ID Card Print Studio reference design.

### E. Responsive layout

- Desktop: two calculator methods are presented as separate cards in a two-column methods layout.
- Narrow screens: the two methods stack vertically.
- On mobile/tablet, the Simple Interest input panel and result panel also stack vertically to avoid cramped side-by-side cards.
- The EMI repayment table is horizontally scrollable when its minimum width exceeds the viewport.

### F. Shared header and navigation

- Reuses the global InfoJano header through `site-header.js`; no separate page-specific header implementation.
- Header retains logo, All Tools, language selector and the primary **Home** button.
- The duplicate **Back to Home** header action is removed only on `loan-interest.html` by a page-specific condition in `site-header.js`.
- Other pages keep their normal Back to Home action.
- The page retains the related financial tools links: EMI Calculator, Loan Eligibility, Savings Calculator and Percentage Calculator.

### G. Content and help sections

- Simple-interest formula explanation and variable definitions.
- Worked example: ₹1,00,000 at 10% simple annual interest for 2 years gives ₹20,000 interest and ₹1,20,000 total repayment.
- Loan-interest explanatory content and borrowing-awareness checklist.
- FAQs cover simple interest, calculating loan interest, monthly tenure input, distinction from EMI/reducing balance, monthly-vs-annual quoted rates, fees and what to check before borrowing.
- Educational-use disclaimer says the calculator is not a loan offer, approval, financial advice or lender quote.

## 3. Research performed and decisions

### A. Internal InfoJano tool audit

The initial scope review checked existing tools to avoid duplicating functionality:

- `emi.html`: already offers Flat Rate and Reducing Balance EMI, fixed/floating rate, processing fee, repayment schedule, copy/share/PDF, part-payment/early closure, loan comparison, affordability check and rate comparison. The Loan Interest page links to this full EMI tool rather than recreating every advanced EMI feature.
- `loan-eligibility.html`: estimates affordable EMI from income, obligations and a selected income share. Linked, not duplicated.
- `savings.html`: savings-growth calculator. Linked, not duplicated.
- `percentage.html`: percentage modes, live calculations, formula steps, visual, copy/share and history. Linked, not duplicated.
- `site-header.js`: shared site navigation is reused.

The later request explicitly asked to add a basic reducing-balance EMI method on this same page. That was added as a second calculator section, while the full-featured EMI tool remains available for advanced scenarios.

### B. Competitor and search-intent review

The initial competitor/search review noted that India-facing loan calculators commonly expose principal, annual rate, tenure, interest and total payable; some also expose repayment schedules or loan-type tabs. The page was designed to make the simple-interest calculation clear and then, following the later user request, to show a basic reducing-balance EMI estimate alongside it.

Competitor examples reviewed during the initial research included Bajaj Finserv, Groww, Calculator.net, ClearTax and Indian finance-calculator sites.

### C. Search Console and keyword research caveats

The research notes captured in the implementation PRs reported:

- A short Search Console window (16 Aug–16 Nov 2026) showed 3 impressions across 3 loan-interest queries and no clicks. This is an early, very small sample.
- A longer URL-specific Search Console review (19 Jul 2025–16 Nov 2026) showed three queries: `how to calculate interest on loan`, `how to calculate interest on loan per month` and `how to calculate loan interest`; average positions were approximately 78.7–99 with 0 clicks.
- Third-party keyword estimates reviewed included US estimates of roughly 22,000/month for “loan interest calculator”, 22,000/month for “simple interest calculator”, 140,000/month for broad “interest calculator”, 27,000/month for “interest rate calculator” and 390/month for “monthly interest rate calculator”. These are third-party estimates, are not exact Google counts, and should not be treated as India/Bangladesh/Nepal search volumes.
- Ahrefs keyword-volume API access was unavailable under the connected plan; keyword metrics were not invented to fill the gap.

### D. Financial-awareness basis

The initial research referenced RBI Financial Awareness Messages advising borrowers to read the loan sanction letter and understand/annualise quoted rates. The helper was therefore deliberately limited to simple annualisation of a monthly quoted rate (monthly × 12), with a warning that it is not APR/effective annual cost or a lender quote.

## 4. SEO and discovery setup

- Page title: `Loan Interest Calculator | Simple Interest | InfoJano`
- Meta description: `Free loan interest calculator: calculate simple interest and total repayment from your loan amount, annual rate and tenure.`
- Canonical URL: `https://infojano.com/loan-interest.html`
- Open Graph and Twitter descriptions were refined in the SEO update.
- WebApplication structured-data description was updated.
- Question-led FAQs include month-to-year conversion and the difference between simple interest and reducing-balance EMI.
- IndexNow verification key file was added at repository root:
  `6251aa7fe144468987041373a23943ef.txt`
- The Loan Interest URL was submitted through IndexNow. Submission is only a notification request; it does not guarantee indexing or ranking.
- Existing canonical URL, analytics and PWA manifest were preserved; existing app icon path is `/InfoJano/app-icons/loan-interest.svg`.

## 5. Change history (merged pull requests)

All of the following PRs are merged into `main`. PR #257 was a separate SEO correction affecting other pages and is intentionally not part of this Loan Interest page change record.

| PR | Change | Result |
|---|---|---|
| [#252](https://github.com/barsulkhan/InfoJano/pull/252) | Initial Loan Interest page redesign; simple-interest calculator, rate helper, responsive layout, content, FAQ and related links | Merged |
| [#253](https://github.com/barsulkhan/InfoJano/pull/253) | Remove install prompt/banner; load shared header; animate hero | Merged |
| [#254](https://github.com/barsulkhan/InfoJano/pull/254) | Match ID Card Print Studio header styling and desktop content frame | Merged |
| [#255](https://github.com/barsulkhan/InfoJano/pull/255) | SEO title/description, social metadata, structured data and question-style FAQs | Merged |
| [#256](https://github.com/barsulkhan/InfoJano/pull/256) | Add IndexNow verification key file | Merged |
| [#258](https://github.com/barsulkhan/InfoJano/pull/258) | Add reducing-balance EMI calculator and monthly repayment schedule | Merged |
| [#259](https://github.com/barsulkhan/InfoJano/pull/259) | Keep both methods as separate open sections; no tabs/dropdown | Merged |
| [#260](https://github.com/barsulkhan/InfoJano/pull/260) | Fix mobile stacking and shared header script include | Merged |
| [#261](https://github.com/barsulkhan/InfoJano/pull/261) | Separate hero illustrations, sequential animation, right-side document checks | Merged |
| [#262](https://github.com/barsulkhan/InfoJano/pull/262) | First attempt to hide duplicate Back to Home action using page CSS | Merged; superseded |
| [#263](https://github.com/barsulkhan/InfoJano/pull/263) | Correctly remove Back to Home from this page in shared header JS while preserving Home | Merged |

Key latest shared-header fix: commit `e41f691b75931b341b07a9787807fc521bb87a4e`.

## 6. Validation record

### Confirmed from repository source

- Both calculator sections exist and are visible in page markup.
- Shared `site-header.js` is loaded by the page.
- Page-specific shared-header logic removes `.ij-global-back-home` only on `/loan-interest.html`; the primary Home button remains.
- Mobile CSS stacks the Simple Interest input and result panels.
- Hero calculator and loan document use separate sequential animation rules.
- Document check rows use right-side check positioning.
- Reduced-motion CSS/JS handling is present.
- Simple-interest and reducing-balance calculation logic is present.
- Full schedule toggle is present.
- Existing PWA icon and canonical URL were retained during the original redesign.

### Automated deployment/QA

After PR #263, the following GitHub Actions runs completed successfully:

- Pages build and deployment — run [44591286183](https://github.com/barsulkhan/InfoJano/actions/runs/44591286183), conclusion: success.
- Global Footer QA — run [44591286775](https://github.com/barsulkhan/InfoJano/actions/runs/44591286775), conclusion: success.

### Not claimed as completed

- A full browser-based visual regression pass and Lighthouse audit were not recorded as completed in the PR validation notes.
- Automated workflow success does not by itself prove every calculation edge case or every mobile viewport was manually tested.
- IndexNow submission does not guarantee search-engine indexing.
- Live page visual appearance should be checked in a browser after deployment/cache refresh when doing a future QA pass.

## 7. Known follow-up notes from the current source review

These are documentation/consistency observations, not claims that the calculators are broken:

1. Some older explanatory copy and FAQ text still describes the page as simple-interest-only and says it does not calculate EMI. That wording predates the later addition of the reducing-balance EMI section and should be reconciled with the current two-calculator page.
2. The reducing-balance section currently repeats the `aria-labelledby` attribute in its opening `section` element. Clean this up during a future accessibility/markup pass.
3. The full schedule is rendered as a horizontally scrollable table on narrow screens by design; test usability on actual small-screen devices.
4. Consider a dedicated browser/Lighthouse QA pass after any future CSS, animation, header or calculation changes.

## 8. Maintenance rules

- Keep future changes limited to `loan-interest.html` and the smallest necessary shared-header change in `site-header.js`.
- Do not add tabs, dropdowns or a method selector unless the product requirement changes; the intended design is both methods visible together.
- Preserve the distinction between simple interest on original principal and monthly reducing-balance interest.
- Do not describe the monthly-rate × 12 helper as APR/effective annual rate.
- Keep assumptions and lender-variation disclaimer visible.
- Do not duplicate the advanced EMI features already available in `emi.html`; link to that tool for advanced repayment planning.
- If changing the shared header, verify other pages retain their Back to Home action.
- Re-run deployment and QA workflows and perform browser visual checks on desktop and mobile.

---

**Primary page:** https://infojano.com/loan-interest.html  
**Repository file:** `loan-interest.html`  
**Shared header file:** `site-header.js`
