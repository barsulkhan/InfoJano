# Loan Affordability Calculator — Research, Audit & Implementation Record

**Page:** https://infojano.com/loan-eligibility.html  
**Repository:** https://github.com/barsulkhan/InfoJano  
**Primary implementation PR:** [#265 — Improve Loan Affordability Calculator and budgeting model](https://github.com/barsulkhan/InfoJano/pull/265)  
**Documentation PR:** #266 (this record)  
**Implementation merge commit:** `dd217a9db4d55826b744718cd5567c3e85e0f171`  
**Post-merge wording correction:** `5caa560135a694b63e020f6939a8f07846425afe`

---

## 1. Executive summary

The original page was a small monthly-budget calculator. It accepted take-home income, one combined field for expenses and existing EMIs, and a percentage of income. It returned a single estimated new-EMI budget.

The implementation keeps this page focused on **monthly payment affordability and household cash flow**. It does not duplicate the EMI Calculator's loan-principal conversion, EMI schedule, loan comparison or prepayment tools, and it does not duplicate the Loan Interest Calculator's simple-interest or reducing-balance calculations.

The refreshed calculator separates household expenses from existing EMIs/fixed obligations, applies both an adjustable fixed-obligation-to-income limit and a cash-flow limit, and uses the lower amount as the estimated new EMI budget.

The result is an educational budgeting estimate only. It is not a lender eligibility decision, loan offer, approval or financial recommendation.

## 2. Audit scope and evidence

Reviewed:

- Current `loan-eligibility.html` source on the repository's `main` branch.
- `emi.html` to identify existing EMI and affordability functionality.
- `loan-interest.html` to identify existing simple-interest and reducing-balance functionality.
- `site-header.js` to understand the shared header, navigation and mobile behavior.
- `app-manifests/loan-eligibility.webmanifest` and `sw.js` for installed-app naming and caching behavior.
- Recent loan-related PR history and the existing project conventions.
- Public lender/competitor explanations of FOIR and affordability.

**Screenshot note:** A screenshot was mentioned in the request, but no image attachment was available in the conversation assets accessible during this audit. Visual findings were therefore based on source inspection; no screenshot-specific pixel comparison is claimed.

**Live-page access note:** Direct access to the production URL was blocked in the execution environment (the web fetch returned a disabled-access error and the local network could not resolve the host). GitHub source and Pages deployment status were inspected, but a real browser-based production visual check could not be completed here. This limitation is recorded rather than claiming an unperformed live QA.

## 3. Before: current tool behavior

### Inputs

1. Monthly take-home income.
2. Monthly expenses and existing EMIs combined into one field.
3. Percentage of income assigned to a new EMI (default 30%).

### Original calculation

```text
remaining = income - expenses
budget = max(0, min(remaining, income * share / 100))
```

### Original result

- Monthly income.
- Amount after expenses.
- Estimated new EMI budget.
- A warning if expenses exceeded income.

### Audit findings

- Household living expenses and existing loan EMIs were combined. This made it difficult to understand which commitments were being counted and increased the chance of double-counting.
- The result was a single budget figure, without showing the selected ratio cap, existing obligations, remaining ratio room, current obligation ratio or post-EMI cash position.
- There was no explicit interest-rate or tenure input, so the page did not estimate a principal/loan amount.
- The page had a basic calculator disclaimer, a short explanation, an example and three FAQs.
- A WebApplication JSON-LD object existed, but no FAQPage structured data was present.
- The page's title was 64 characters and its meta description was 155 characters.
- The form relied on an inline `onclick` handler rather than a semantic form submission.
- The shared header added both Home and Back to Home actions on this page, while the Loan Interest page already had a page-specific exception to remove the duplicate header action.
- The installed-app manifest still called the tool a Loan Eligibility Calculator.

## 4. Cross-tool audit and feature boundaries

### InfoJano EMI Calculator — `emi.html`

The EMI Calculator already provides:

- Reducing-balance and flat-rate EMI methods.
- Fixed/floating rate selection.
- Principal, annual interest rate and tenure inputs (years/months).
- Monthly EMI, total interest and total repayment.
- Principal/interest breakdown visualization.
- Monthly repayment schedule and full schedule view.
- Processing-fee option.
- Part-payment and early-closure planning.
- Alternative-loan comparison and rate-change simulation.
- An Advanced Loan Affordability Checker that takes income, existing EMI, a selected income percentage and the current rate/tenure to estimate an affordable loan amount.

**Boundary:** Do not add a second EMI schedule, interest method selector, rate comparison, prepayment planner or EMI-to-loan-principal converter to this page. Use the EMI Calculator when a user wants to convert a monthly EMI budget into an indicative principal amount using a rate and tenure.

### InfoJano Loan Interest Calculator — `loan-interest.html`

The Loan Interest Calculator already provides:

- Simple interest on original principal.
- Reducing-balance EMI illustration using the same principal/rate/tenure inputs.
- Monthly reducing-balance schedule.
- Monthly quoted rate to simple annualised rate conversion.
- Formula, worked example and loan-interest FAQs.

**Boundary:** Do not duplicate simple interest, reducing-balance interest, monthly amortisation or rate conversion on the affordability page.

### Final page role

The Loan Affordability Calculator answers:

> After household costs and current fixed commitments, what new monthly payment budget might fit within the income ratio I choose?

It deliberately does not answer:

> What principal amount can I borrow at a particular rate and tenure?

That second question belongs in the EMI Calculator.

## 5. Research: FOIR and affordability

FOIR means Fixed Obligations to Income Ratio. Lenders can differ in how they define income, which obligations count, and which ratio is acceptable. A ratio should not be presented as a universal approval threshold.

Research references:

- IDFC FIRST Bank, [FOIR: Fixed Obligation to Income Ratio & Loan Eligibility](https://www.idfcfirst.bank.in/finfirst-blogs/personal-loan/what-is-foir). Explains FOIR, existing EMIs and other fixed obligations, and describes lower and higher ratio ranges.
- IDFC FIRST Bank, [How Much Personal Loan Can You Get and Afford?](https://www.idfcfirst.bank.in/finfirst-blogs/personal-loan/how-much-personal-loan-can-you-get-and-afford). Describes FOIR as one method used to estimate additional EMI capacity and separately explains the EMI-to-loan-amount conversion.
- Axis Bank, [What Is FOIR and Its Calculation for Personal Loan](https://www.axis.bank.in/blogs/credit-card/what-is-foir-and-its-calculation-for-personal-loan). Explains fixed obligations, income and lender-specific assessment.
- Paisabazaar, [Personal Loan Eligibility Calculator](https://www.paisabazaar.com/personal-loan/eligibility-calculator/). Example of an eligibility workflow using income, existing EMI, rate and tenure to estimate loan eligibility.
- RapidCheck, [Loan Affordability Calculator](https://www.rapidcheck.in/loans/loan-affordability-calculator). Example of a simpler income/existing-EMI/rate/tenure affordability flow.

### Product decision

- Default ratio: **40%**, editable by the user.
- Allowed input range: 1%–80%.
- The default is a cautious planning assumption informed by lender explanations, not a universal lender rule or RBI-mandated consumer-loan limit.
- Use take-home income as the user's planning income.
- Keep household expenses separate from existing EMIs and fixed obligations.
- Use the lower of the ratio room and remaining cash flow.
- Display negative cash position when expenses and current obligations exceed income; do not hide a deficit by clipping the result to zero.

No third-party keyword-volume estimates are claimed. The page targets clear search intent around loan affordability, affordable EMI, monthly loan-payment budget, income-and-expense affordability and FOIR explanation.

## 6. After: implemented inputs and features

### Inputs

1. **Monthly Take-Home Income (₹)** — positive amount after payroll deductions.
2. **Essential Monthly Household Expenses (₹)** — excludes EMIs and fixed obligations entered separately.
3. **Existing EMIs & Fixed Obligations (₹)** — current loan EMIs and other recurring commitments the user wants counted.
4. **Target Fixed-Obligations-to-Income Limit (%)** — default 40%, adjustable from 1% to 80%.

### Results

- Estimated affordable new EMI.
- Cash position after the proposed EMI (can be negative).
- Maximum total fixed obligations at the selected limit.
- Remaining room under the selected limit after existing obligations.
- Cash after household expenses and existing obligations.
- Current obligation-to-income ratio.
- Estimated obligation ratio after the proposed EMI.
- Context-sensitive status messages for cash-flow-limited, ratio-limited, no-room and deficit situations.
- A clear educational disclaimer.

### UX and accessibility

- Semantic HTML form and submit event (Enter key works).
- Input validation for missing, negative, out-of-range and excessively large values.
- Live recalculation after the first submission.
- Result region uses `role="status"`, `aria-live="polite"` and `aria-atomic="true"`.
- Desktop input grid collapses to one column on narrow screens.
- Result tiles and related-tool cards also collapse to a single column on mobile.
- Existing InfoJano page-entry/install integrations are retained.
- The unused loader-hide script that referenced a missing `ijPageLoader` element was removed.

## 7. Calculation formulas

Let:

- (I) = monthly take-home income.
- (E) = essential household expenses, excluding the separate fixed-obligations field.
- (O) = existing EMIs and other fixed obligations.
- (F) = selected fixed-obligations-to-income limit, as a percentage.

### Maximum total fixed obligations at the selected limit

[
C = I 	imes rac{F}{100}
]

### Remaining room under the selected ratio

[
A = max(0, C - O)
]

### Cash remaining after household expenses and existing obligations

[
B = max(0, I - E - O)
]

### Estimated affordable new EMI

[
oxed{N = min(A, B)}
]

### Cash position after the proposed EMI

[
R = I - E - O - N
]

Unlike the non-negative EMI budget, (R) is intentionally allowed to be negative so a monthly deficit remains visible.

### Current and projected obligation ratios

[
FOIR_{current} = rac{O}{I} 	imes 100
]

[
FOIR_{projected} = rac{O+N}{I} 	imes 100
]

These are simplified user-entered planning ratios. Lenders may include additional obligations or use a different income basis.

## 8. Worked example and test cases

### Standard example

- Income: ₹60,000
- Household expenses: ₹30,000
- Existing EMIs/fixed obligations: ₹8,000
- Selected ratio: 40%

[
C = 60,000 	imes 40% = ₹24,000
]

[
A = 24,000 - 8,000 = ₹16,000
]

[
B = 60,000 - 30,000 - 8,000 = ₹22,000
]

[
N = min(16,000,22,000) = ₹16,000
]

[
R = 60,000 - 30,000 - 8,000 - 16,000 = ₹6,000
]

### Functional test matrix

| Scenario | Income | Expenses | Existing obligations | Limit | Expected new EMI | Cash position |
|---|---:|---:|---:|---:|---:|---:|
| Standard / ratio-limited | ₹60,000 | ₹30,000 | ₹8,000 | 40% | ₹16,000 | ₹6,000 |
| Expense-limited | ₹60,000 | ₹45,000 | ₹5,000 | 40% | ₹10,000 | ₹0 |
| Existing obligations hit limit | ₹60,000 | ₹25,000 | ₹28,000 | 40% | ₹0 | ₹7,000 |
| Cash deficit | ₹60,000 | ₹65,000 | ₹3,000 | 40% | ₹0 | -₹8,000 |
| Invalid negative expense | ₹60,000 | -₹100 | ₹3,000 | 40% | Validation error | — |

The executable page script was run against mocked form inputs for these cases. Outputs matched the expected EMI budgets and deficit handling.

## 9. SEO and structured data

### Metadata

- Title: `Loan Affordability Calculator | EMI Budget | InfoJano` (53 characters).
- Meta description: `Estimate a manageable new loan EMI from take-home income, living expenses and existing EMIs. Adjust your EMI-to-income limit with this free calculator.` (151 characters).
- Canonical URL retained: `https://infojano.com/loan-eligibility.html`.
- Open Graph and Twitter title/description aligned with the updated page intent.
- Currency and application category in WebApplication data updated to INR and FinanceApplication.

### Structured data

- WebApplication JSON-LD retained and updated.
- FAQPage JSON-LD added for the six visible loan-affordability FAQs.
- JSON-LD was parsed successfully during source validation.

Structured data does not guarantee a Google rich result. Search appearance is determined by Google's policies and systems.

### Content

- Added formula explanation and variable definitions.
- Added a worked example with consistent arithmetic.
- Added FOIR explanation and lender-policy caveat.
- Added six FAQs matching the visible content.
- Related links point to the EMI Calculator and Loan Interest Calculator only, keeping the internal tool journey focused.

## 10. Shared header and PWA changes

### Shared header

File: `site-header.js`

The shared header already removes the duplicate Back to Home action on `loan-interest.html`. The same page-scoped condition now applies to `loan-eligibility.html`.

- The primary Home action remains.
- All Tools and language controls remain.
- No other page's header behavior is intentionally changed.

### PWA manifest

File: `app-manifests/loan-eligibility.webmanifest`

- Name: InfoJano — Loan Affordability Calculator.
- Short name: Loan Affordability.
- Description updated to monthly EMI budget estimates.
- Start URL, scope and icon path preserved.

### Service worker

`sw.js` was not changed. The existing navigation strategy is network-first with `cache: "no-store"` and a cached-page fallback for offline navigation. No service-worker cache-version bump was made for this HTML update.

## 11. SEO/technical and source validation

| Check | Result |
|---|---|
| One H1 | Pass |
| One hero | Pass |
| Duplicate HTML IDs | None found |
| Canonical URL | Preserved |
| SEO title length | 53 characters |
| Meta description length | 151 characters |
| WebApplication JSON-LD | Valid |
| FAQPage JSON-LD | Valid |
| Visible FAQ count | Six |
| Inline JavaScript syntax | Pass |
| CSS brace balance | Pass |
| Manifest JSON | Valid |
| Shared header condition | Page-scoped |
| Cross-tool file changes | None |
| Standard calculation test | Pass |
| Expense-limited test | Pass |
| Ratio-limited test | Pass |
| Negative cash-flow test | Pass |
| Invalid-input test | Pass |

### Automated GitHub checks

- PR Global Footer QA for PR #265: passed.
- Post-merge Global Footer QA on implementation merge commit `dd217a9...`: passed.
- GitHub Pages build and deployment for `dd217a9...`: passed.
- A follow-up wording-only correction was committed to `loan-eligibility.html` as `5caa560...`; its Global Footer QA passed. Its Pages build was still in progress at the time this record was prepared.
- The unrelated Tool APK build was also triggered by the manifest change; it was still running at the time of this record.

## 12. PR and commit history

### Related Loan Interest work already merged

| PR | Summary | Status |
|---|---|---|
| #252 | Redesign Loan Interest Calculator | Merged |
| #253 | Add shared header and animate loan-interest hero | Merged |
| #254 | Align Loan Interest page with shared header/desktop frame | Merged |
| #255 | Loan Interest search-intent and SEO update | Merged |
| #256 | Add IndexNow verification key | Merged |
| #257 | SEO title and description length fixes across key pages | Merged |
| #258 | Add reducing-balance EMI calculation to Loan Interest | Merged |
| #259 | Show both loan-interest methods as open sections | Merged |
| #260 | Fix loan calculator mobile layout and shared header | Merged |
| #261 | Separate hero illustrations and animate sequentially | Merged |
| #262 | Remove duplicate Back to Home link from Loan Interest | Merged |
| #263 | Remove duplicate Back to Home action from shared loan header | Merged |
| #264 | Document Loan Interest Calculator research and current features | Merged |

### Loan Affordability implementation

| Item | Reference | Status |
|---|---|---|
| Implementation PR | [#265](https://github.com/barsulkhan/InfoJano/pull/265) | Merged |
| Merge commit | `dd217a9db4d55826b744718cd5567c3e85e0f171` | On main |
| Follow-up wording correction | `5caa560135a694b63e020f6939a8f07846425afe` | On main |
| Documentation PR | #266 | This record |

The implementation PR changed only:
- `loan-eligibility.html`
- `site-header.js`
- `app-manifests/loan-eligibility.webmanifest`

No edits were made to `emi.html`, `loan-interest.html`, the homepage or `sw.js`.

## 13. Current status and remaining limitation

- Implementation PR #265 is merged into `main`.
- GitHub Pages build for the implementation merge commit completed successfully.
- The follow-up wording correction is present on `main`; its subsequent Pages build was pending at the time this document was written.
- Global Footer QA passed for the implementation and follow-up commit.
- The source-level calculation, metadata, structured-data, manifest and layout checks passed.
- **Production browser visual verification remains unconfirmed** because the live host was not reachable from the execution environment. The page should be opened on desktop and a narrow mobile viewport after deployment to confirm the rendered header, hero, calculator, results and footer.
- The referenced user screenshot was not available to this audit session, so a before/after screenshot comparison is not claimed.

This record distinguishes completed source/CI validation from the production visual checks that could not be performed.