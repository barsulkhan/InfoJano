# 2026-11-16 — Shared privacy-link coverage on tool pages

## Goal
Make the Privacy Policy and Contact routes discoverable from tool pages that use the shared `site-header.js` template, without adding controls to the compact navigation or changing hero/tool layouts.

## Source inspection
- `site-header.js` builds the shared sticky header and currently exposes Home, All Tools and language selection; it did not include a Privacy Policy route.
- Repository search found many root tool pages loading this shared script. Sampled pages including Age, BMI, EMI, QR Maker, image tools and Word Converter did not have a policy link in their own page source. A few pages (for example Work Hours) already contain one.
- Adding another navigation item would increase crowding in the responsive header, so the implementation uses a small footer only on pages where no `a[href*="privacy-policy"]` link exists.

## Change
- Updated `site-header.js` to append a minimal, centered footer with Privacy Policy and Contact links when the page does not already contain a Privacy Policy link.
- Footer uses the same `ROOT` path logic as the shared header, so both the custom domain root and GitHub Pages project path are supported.
- Existing pages with a policy link are left unchanged; the header, hero, calculator logic and page content are not restyled.
- Commit: `fc1649439ccb7e33524043600dc080ebef6d7d0d`.

## Validation and limits
- Static source review confirms the conditional insertion and link targets are present in the shared script.
- Not yet browser-tested across mobile/desktop or all page templates. No claim is made that every page loads this script; pages without the shared script or a pre-existing link remain outside this change.
- Live HTTP fetch remains inaccessible from this environment; no live deployment or cache propagation is claimed.
- No AdSense/CMP settings, DNS, Cloudflare Worker settings, secrets, app releases or production deployment controls were changed.

## Next dependency
After source CI confirms the change, perform a small browser spot-check on one tool page without a pre-existing footer link (desktop and mobile) and one page that already has a Privacy Policy link to confirm there is no duplicate footer.
