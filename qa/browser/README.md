# InfoJano Social QR browser QA

This isolated Playwright suite tests only `social-qr-maker.html`. It does not import, modify, or test the Normal QR implementation.

## Run locally

From this directory:

```sh
npm install
npx playwright install chromium
npm test
```

The Playwright web server starts Python's static server at the repository root on port 4173.

## Coverage

- Profile QR generation for all 12 supported social platforms.
- PNG output and download filename.
- Rejection of a profile URL from the wrong platform.
- Bundle mode theme, hub URL, decoded Social Links page and WhatsApp destination.
- Link-in-Bio rendering and invalid-host rejection.
- Mobile primary-control visibility and horizontal bounds.

## CI

`.github/workflows/social-qr-browser-tests.yml` runs the suite on relevant pull requests and manual dispatch. The suite uses Chromium desktop and Pixel 7 mobile emulation. This is repeatable browser QA, not a substitute for scanning a downloaded QR with a physical phone or manual screen-reader testing.

## Scope guard

- Do not add `qr-maker.html` or Normal QR selectors to this suite.
- Keep all browser QA dependencies and config under `qa/browser/`.
- Do not introduce a build/runtime dependency into the website itself.
