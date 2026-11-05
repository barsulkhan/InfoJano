# InfoJano High-Fidelity Word Converter Worker

This separate Cloudflare Worker securely proxies CloudConvert. It does not store uploaded files in InfoJano. DOCX files are uploaded directly from the browser to CloudConvert using a short-lived upload form; the API key never reaches the browser.

## 1. Create the CloudConvert API key
1. Create/sign in to a CloudConvert account.
2. Create an API key with only `task.read` and `task.write` scopes.
3. Do not paste the key into GitHub, website JavaScript, or this chat.

## 2. Deploy from Android / Cloudflare dashboard
1. Open Cloudflare Dashboard → Workers & Pages → Create → Worker.
2. Name it exactly `infojano-word-converter`.
3. Open Edit code and paste the complete contents of `src/index.js`.
4. Deploy.
5. Open Worker Settings → Variables and Secrets → Add → Secret.
6. Name: `CLOUDCONVERT_API_KEY`; value: your CloudConvert API key. Save and redeploy if requested.

The resulting address will look like:
`https://infojano-word-converter.<your-account-subdomain>.workers.dev`

## 3. Test
- `GET /` intentionally returns Not found.
- The website calls `POST /start` with JSON containing `filename` and `size`.
- Browser uploads the file to the returned CloudConvert form URL and parameters.
- Website polls `GET /result?jobId=...` until it receives a PDF.

Only the exact GitHub Pages origin `https://barsulkhan.github.io` is allowed by CORS. If the site moves to a custom domain, update `ALLOWED_ORIGIN` before deployment. CORS alone does not stop scripts or command-line clients from calling the public Worker. Before public launch, add a Cloudflare Rate Limiting rule for this Worker (especially `POST /start`), for example a low per-IP request limit, and monitor CloudConvert credit usage.

## Privacy and limits
- High-fidelity conversion is an explicit opt-in because the DOCX is processed by CloudConvert, a third party.
- CloudConvert stores imported files temporarily; completed tasks are automatically deleted after 24 hours according to its API documentation. The Worker also makes a best-effort job deletion after the PDF is retrieved.
- The Worker does not log document contents or persist files.
- The free CloudConvert plan is intended for personal use, testing and hobby projects and provides 10 credits/day. Office-to-PDF has a 2-credit base cost, plus processing-time usage. Check the current CloudConvert pricing before public/commercial use.
- Do not use this service for confidential documents unless the user has reviewed and accepts CloudConvert's privacy and retention terms.

## Local deployment
From this directory:
```sh
npx wrangler secret put CLOUDCONVERT_API_KEY
npx wrangler deploy
```
