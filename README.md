# InfoJano

InfoJano is a GitHub Pages website published at [https://infojano.com/](https://infojano.com/).

## Project documentation — read this first

- **[Project Handoff & Operations Log](docs/PROJECT_HANDOFF.md)** — the main continuity document: domain/registrar, nameservers, Cloudflare DNS, hosting, redirect rules, troubleshooting history, verification evidence, unknowns, and next steps.
- [PROJECT_RULES.md](PROJECT_RULES.md) — mandatory permissions and protected-workflow rules. Read before making any change.
- [404 / SEO Audit Log](InfoJano_404_Problems_and_Fixes_2026-11-28.md) — detailed historical Search Console findings, crawler results, PRs, and remaining SEO issues.

## Current infrastructure snapshot — 28 November 2026

- Repository: [barsulkhan/InfoJano](https://github.com/barsulkhan/InfoJano), default branch: main.
- Website hosting: GitHub Pages.
- Custom domain: infojano.com; root CNAME file contains infojano.com.
- Domain account / registrar provider visible in the supplied control-panel screenshots: Spaceship.
- Nameservers were changed at Spaceship to Cloudflare-assigned nameservers: ursula.ns.cloudflare.com and marek.ns.cloudflare.com. Latest supplied screenshot showed ONLINE / Cloudflare protection confirmation.
- Cloudflare DNS screenshot showed four GitHub Pages apex A records and the www CNAME proxied; Google site-verification TXT was DNS-only. See the handoff document for the full record list and caveats.

## Current redirect status

A Cloudflare Single Redirect named **InfoJano Tools Page Redirect** was deployed:

- Match: URI Path equals /tools.html
- Destination: https://infojano.com/index.html#toolGrid
- Status: 301 Permanent Redirect
- Preserve query string: Off
- Rule validation passed.
- User's mobile-browser screenshot showed the old URL opening infojano.com/index.html with the Popular Tools grid visible. Raw HTTP 301 response headers have not yet been independently checked.

## Purchase-history limitation

Spaceship is confirmed as the current registrar/domain account provider from the screenshots. The original purchase date, order/invoice details, and payment method have not been verified; do not guess. If needed, inspect Spaceship's order/invoice history rather than asking the user to repeat information unnecessarily.

## Change-control rule

Do not modify website code, assets, configuration, protected workflows, DNS, nameservers, redirects, SSL, or deployment without the owner's explicit, specific approval. Documentation updates are permitted when explicitly requested. Record every completed task, the problem and fix, verification evidence, unresolved questions, and next steps in [docs/PROJECT_HANDOFF.md](docs/PROJECT_HANDOFF.md).
