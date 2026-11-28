# InfoJano

InfoJano is a GitHub Pages website published at [https://infojano.com/](https://infojano.com/).

## Project guidance

- Read [PROJECT_RULES.md](PROJECT_RULES.md) before making any project change.
- Do not modify site code, assets, configuration, protected print/crop workflows, or deploy without the owner's explicit, specific permission.
- The protected workflows and dimensions listed in `PROJECT_RULES.md` must remain unchanged unless explicitly authorized.

## Current hosting

- Repository: [barsulkhan/InfoJano](https://github.com/barsulkhan/InfoJano)
- Hosting: GitHub Pages
- Custom domain: `infojano.com`
- Repository `CNAME`: `infojano.com`

## Operations checkpoint — 2026-11-28

### Cloudflare onboarding

The owner connected `infojano.com` to a Cloudflare Free zone and imported the existing DNS records shown by Cloudflare:

- Four GitHub Pages apex A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `www` CNAME → `barsulkhan.github.io`
- Google site-verification TXT record

The Cloudflare DNS screen showed the four A records and the `www` CNAME as **Proxied** (orange cloud), and the TXT record as **DNS only**. Re-check these records in Cloudflare after activation; do not assume the zone is active until Cloudflare confirms it.

### Registrar / nameserver changes

- Registrar / domain provider: Spaceship
- Spaceship DNSSEC was **Disabled** during the migration preparation.
- Spaceship nameservers were changed from:
  - `launch1.spaceship.net`
  - `launch2.spaceship.net`
- To the Cloudflare-assigned nameservers:
  - `ursula.ns.cloudflare.com`
  - `marek.ns.cloudflare.com`
- Latest observed Spaceship status: **IN PROPAGATION**.
- Latest observed Cloudflare status: waiting for registrar nameserver propagation. The migration is **not yet confirmed active**.
- Owner stated they do **not** use `@infojano.com` email. No MX record was visible in the imported DNS list at the time of setup. If email requirements change, review DNS before making further changes.

### Next steps — resume here

1. Open Cloudflare Dashboard → `infojano.com` → Overview and check nameserver status. Wait until Cloudflare reports the zone as **Active**; do not repeatedly change nameservers.
2. Once Active, review DNS records and verify the apex A records, `www` CNAME, Google verification TXT, and proxy statuses. Test both `https://infojano.com/` and `https://www.infojano.com/` before adding redirect rules.
3. The pending goal is to redirect the retired `/tools.html` URL to `https://infojano.com/index.html#toolGrid`.
4. Use **Cloudflare Redirect Rules** (not a GitHub Pages `_redirects` file). First create and test a temporary **302** rule matching only:
   ```
   http.host eq "infojano.com" and http.request.uri.path eq "/tools.html"
   ```
   Destination:
   ```
   https://infojano.com/index.html#toolGrid
   ```
   Preserve query string: Off (unless a later requirement says otherwise). Test the redirect and ensure the homepage/tool section works. Only then change the rule status to **301**.
5. Verify that `https://infojano.com/tools.html` redirects to the intended destination and that unrelated missing URLs still return the normal 404 page.

### Important cautions

- Do not claim the Cloudflare migration is complete until the Cloudflare zone status is Active and live website tests pass.
- Do not delete or alter the imported GitHub Pages DNS records without inspecting the live zone and obtaining explicit approval.
- Do not enable DNSSEC at Spaceship while the domain is delegated to Cloudflare. Once the Cloudflare zone is Active and stable, DNSSEC can be considered from Cloudflare's DNSSEC settings, following Cloudflare's exact DS instructions at the registrar.
- Do not create a GitHub Pages `_redirects` file for this purpose; the pending plan is to use Cloudflare Redirect Rules.
- No website HTML/CSS/JavaScript/assets or protected workflows were changed as part of this Cloudflare setup session. Only registrar/DNS control-panel settings described above were changed.

## Existing issue context

The 2026-11-28 report [InfoJano_404_Problems_and_Fixes_2026-11-28.md](InfoJano_404_Problems_and_Fixes_2026-11-28.md) documents the `/tools.html` 404 investigation. Read it before resuming that issue.
