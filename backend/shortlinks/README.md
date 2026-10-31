# InfoJano Short Link API (staging scaffold)

This folder contains an **undeployed** Cloudflare Worker + D1 starter for real short links. It does not change the live GitHub Pages website and does not create any Cloudflare resources.

## Included routes

- `GET /health` — health response.
- `POST /api/links` — create a link. Requires `Authorization: Bearer <ADMIN_API_TOKEN>`.
- `GET /{code}` — public HTTP 302 redirect; expired or disabled codes return 404.
- `GET /api/links/{code}/stats` — aggregate link statistics; requires admin token.
- `DELETE /api/links/{code}` — disable a link; requires admin token.

## Safety choices

- Anonymous creation is disabled in this scaffold.
- Only HTTP and HTTPS destinations are accepted; credentials, localhost, local/private/reserved IP destinations are rejected.
- Short codes use cryptographic random bytes; custom aliases are restricted to 4–32 safe characters.
- D1 access uses prepared statements with bound values.
- Analytics store daily counts, referrer hostname and coarse device category only. No IP address or full referrer URL is stored.
- Redirects use 302 to avoid permanent browser caching while destinations remain editable in a future dashboard.
- CORS defaults to the InfoJano GitHub Pages origin. Configure exact allowed origins in Worker variables.
- Production public creation needs account authentication, Turnstile/risk checks, robust per-user/IP rate limiting, abuse reporting, privacy/retention policy, monitoring and a custom domain. Do not expose the admin token in browser code.

## Setup (not yet performed)

1. Create a Cloudflare Worker project and a D1 database only after confirming account access, current plan limits and any costs.
2. Put this folder's contents into a local project with `src/worker.js`, `migrations/0001_init.sql`, and `wrangler.toml`.
3. Replace the D1 placeholder ID with the database ID returned by Cloudflare.
4. Set `ADMIN_API_TOKEN` as a Worker secret. Never put it in GitHub Pages or source control.
5. Apply migrations to a **staging** D1 database, run API/redirect/security tests, then decide whether to connect a production domain.
6. Configure `SHORT_BASE_URL` only after the chosen short domain's DNS and HTTPS are verified.

## Known staging limitations

This is a technical scaffold, not a production launch. It has no user accounts, public creation UI, custom domain, billing, CAPTCHA integration, full abuse operations or automated rate-limiter binding yet. The current destination checks reject common private/reserved address literals but are not a complete phishing or reputation scanner.
