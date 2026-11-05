# InfoJano High-Fidelity Word Converter Worker

This Cloudflare Worker proxies iLoveAPI's Office-to-PDF service. The browser uploads the DOCX to this Worker; the Worker handles authentication, upload, processing and download. API credentials are never exposed in website JavaScript.

## 1. Create an iLoveAPI developer project
1. Register/sign in at https://www.iloveapi.com/
2. Open API Keys and copy the Project Public Key.
3. Do not paste API keys into GitHub, website JavaScript, or this chat.

## 2. Deploy the Worker
1. Open Cloudflare Dashboard → Workers & Pages → Create → Worker.
2. Name it exactly `infojano-word-converter`.
3. Open Edit code and paste the complete contents of `src/index.js` from this repository.
4. Deploy.
5. Open Worker Settings → Variables and Secrets → Add → Secret.
6. Name: `ILOVEPDF_PUBLIC_KEY`; value: your iLoveAPI Project Public Key. Save and deploy if requested.

Worker URL example:
`https://infojano-word-converter.<your-account-subdomain>.workers.dev`

## 3. Required security setup before public use

In Cloudflare Dashboard, add a rate-limiting rule for this Worker route (`POST /convert`). Set a conservative per-IP request limit and review usage/alerts regularly. The browser `Origin` check is not authentication and can be spoofed by non-browser clients; do not rely on it as abuse protection. Keep the iLoveAPI key only in Worker Secrets. Do not enable public use until rate limiting is active.

## 4. Use it on InfoJano
1. Open https://barsulkhan.github.io/InfoJano/word-converter.html
2. Expand “Optional: High-Fidelity PDF”.
3. Paste the Worker URL.
4. Tick the third-party upload consent box.
5. Upload a DOCX, select all pages and choose PDF.
6. Press Convert.

## API workflow
The Worker obtains a short-lived JWT from `POST /v1/auth`, starts `officepdf` in the `in` region, uploads the DOCX, processes it and downloads the resulting PDF. It does not persist document files. iLoveAPI documents temporary task/file retention and automatic deletion; check the current provider policy and account terms.

## Important
- The layout-preserving route converts the complete document; page selection is not available. The browser-based preview renderer is used only for JPG/PNG and must not be described as an exact Word-to-PDF converter.
- The optional service requires a working iLoveAPI developer project and available credits.
- Third-party processing is opt-in. Do not upload confidential or sensitive documents unless the user has reviewed and accepted the provider's privacy and retention terms.
- Before public launch, configure Cloudflare rate limiting for POST requests to this Worker and monitor API usage.
- The Worker accepts only the exact GitHub Pages origin `https://barsulkhan.github.io`. Update `ALLOWED_ORIGIN` if the site domain changes.
