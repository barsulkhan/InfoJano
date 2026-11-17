# InfoJano tool regression browser QA

This suite is isolated from `qa/browser/`, which remains dedicated to Social QR only. It does not modify website runtime code.

## Run locally

```sh
cd qa/tool-regression
npm install
npx playwright install chromium
npm test
```

The suite serves the repository root on port 4174 and runs on Chromium desktop and Pixel 7 mobile emulation.

## Current coverage

- Normal QR: generate a link QR, decode the downloaded PNG pixels, and verify the exact payload; exercise blank-input validation and selected content modes.
- UPI landing page: verify the primary CTA opens Normal QR with the UPI mode selected. This is a routing/entry-flow test, not a payment transaction or bank-app test.
- Image Resizer: upload a generated local PNG, resize to exact dimensions, download the output and verify PNG dimensions.
- Percentage Calculator: verify percentage-of, percentage-change and decimal conversion calculations plus invalid zero-denominator handling.
- Discount Calculator: verify discount amount/sale price, reverse sale-price mode, invalid input and Smart Shopping offer comparison output.

## Boundaries

- Normal QR and Social QR are separate tools; this suite tests only `qr-maker.html` and its UPI landing-page entry.
- No payment is initiated, UPI IDs are not verified, and no bank/UPI app is connected.
- Image processing is tested with a small synthetic image, not every browser codec, large file or physical device.
- Desktop/mobile emulation is not a physical phone camera test or a full screen-reader audit.
- CI results must be reported from actual workflow runs. Do not infer test counts from run status alone.


## Verified CI result

- GitHub Actions run #3: https://github.com/barsulkhan/InfoJano/actions/runs/44146546297
- Result: **20 passed, 0 failed** across Chromium desktop and Pixel 7 mobile emulation.
- The earlier failures were test-harness issues: the QR preview selector did not match its actual alt text, the Image Resizer test needed to disable the default aspect-ratio lock for exact dimensions, and the QR download locator needed to target the PNG link specifically.
- These fixes are confined to this QA test suite. No website runtime files were changed.
- This result verifies the current PR branch in CI; it does not mean the PR is merged or deployed.
