# InfoJano resume audit — /Height source trace and PR refresh

Date: 2026-11-16 17:01 +05:30
Repository: barsulkhan/InfoJano
Scope: read-only continuation from the current handoff; documentation-only GitHub writes.

## 1. /Height — more precise source finding

Search Console evidence remains the user's supplied URL Inspection screenshot:
- Requested URL: `https://infojano.com/Height`
- Result: Not found (404)
- Referring page: `https://infojano.com/image-to-pdf.html`
- Last crawl: Nov 14, 2026, 12:31:37 PM (timezone not shown)
- Googlebot smartphone; crawl allowed; fetch failed; no referring sitemap.

Re-fetched current `main` `image-to-pdf.html`. The source contains two PDF serialization functions that include the literal PDF image dictionary key `/Height`:
- `makePdf(pages)` is a legacy/unused function declaration; repository code search found the declaration but no call site.
- `buildPdf(pages)` is the active function called by the Create PDF click handler.

Both emit a PDF image object dictionary containing `/Width ... /Height ... /ColorSpace /DeviceRGB ...`. This confirms that the slash-prefixed token is present twice in embedded JavaScript source; it does not prove Google extracted the 404 path from either occurrence.

The actual flow remains:
- User selects local images.
- On Create PDF, browser-side JavaScript loads and converts images, then calls `buildPdf(pages)`.
- The generated PDF is a Blob with MIME type `application/pdf`.
- On ordinary browsers, an object URL is assigned to the download anchor and the anchor is revealed only after generation.
- In Android WebView, bytes are sent to `window.AndroidBridge.savePdf`; the browser download anchor stays hidden.
- No pre-existing static PDF file or public PDF URL was found in the inspected source.

### Assessment / proposed next test

A narrow draft-only mitigation is technically feasible: assemble the PDF key at runtime (for example, from character codes) in both serializer functions so the HTML source no longer contains the slash-prefixed literal token, while the generated PDF still contains the exact required `/Height` dictionary key.

No code patch was made yet. Before preparing a draft PR, add/run a focused browser/runtime regression test that:
1. Selects a small image and generates a PDF through the actual page flow.
2. Confirms the generated Blob MIME type is `application/pdf`.
3. Inspects the generated PDF bytes and confirms `/Width`, `/Height`, image stream, page tree, xref and trailer remain valid.
4. Confirms the download anchor is only revealed after successful generation.
5. Exercises or safely mocks the AndroidBridge branch so its save path remains intact.

This environment did not provide an actual browser session for this page, so the runtime regression is still pending. Do not redirect `/Height`; there is no semantically equivalent destination. The Google extraction theory remains a hypothesis.

## 2. PR #237–239 — fresh GitHub state

All three PRs are still open, Draft, unmerged and undeployed. Fresh GitHub PR metadata currently reports `mergeable: true` / `mergeable_state: clean` for all three; this corrects the older handoff's stale `mergeable=false` snapshots. Their branches are nevertheless diverged from current `main`:

| PR | Changed files | Ahead of main | Behind main | Current CI check runs |
|---|---:|---:|---:|---|
| [#237](https://github.com/barsulkhan/InfoJano/pull/237) | 89 | 105 | 18 | `validate` success |
| [#238](https://github.com/barsulkhan/InfoJano/pull/238) | 2 | 3 | 12 | `validate` success; Workers build success |
| [#239](https://github.com/barsulkhan/InfoJano/pull/239) | 6 | 6 | 11 | `validate` success; Workers build success |

Heads at time of inspection:
- #237: `49977ee5867daddbbaf92e94bff080158f318304`
- #238: `70243b2d2a77cb2d9564acb74964f6210f847c2a`
- #239: `03cb5f0b2f9a7c4b27bda966b2bf35dcbb72b81d`

File overlap:
- #237 and #238 both modify `id-card-print-studio.html`; reconcile these edits deliberately.
- #239 has no file overlap with #238 in the inspected PR file lists.
- #237 is a broad dual-host/PWA patch (89 files), including root pages, manifests, `install.js`, `sw.js`, and `image-to-pdf.html`. It still requires dedicated custom-domain + GitHub Pages project-site runtime testing.

The successful `validate` runs are the repository's Privacy Policy QA, not complete SEO/canonical or browser/PWA/service-worker validation. A successful Workers build is not proof of live Worker configuration. No branch was rebased, edited, merged, deployed or otherwise changed in this audit.

## 3. Other issue state

- Nine malformed metadata-suffix 404s: historical cause was repaired in merged PR #91; current sampled source remains clean. Live response and Google recrawl remain unverified.
- `/InfoJano/`: still needs the detailed Search Console URL Inspection Referring page.
- `/(100)` and the formula-like `/(100)^ `: exact URL/referrer evidence still needed; do not create speculative redirects.
- 27 alternate canonical, 2 HTTP/www redirect and 5 Google-selected canonical cases retain their existing source/live evidence boundaries.
- Two Crawled—currently not indexed URLs are still unknown.
- AdSense review remains already submitted; do not resubmit.
- The 18 Number-to-Words Pro + Countdown URLs remain on indexing hold.

## 4. Next work

1. Prepare a focused browser/runtime test for the actual Image-to-PDF flow; only then decide whether to create a minimal mitigation on an isolated draft branch.
2. When the user is available, request one detailed URL Inspection screenshot for `/InfoJano/` showing Referring page and last crawl.
3. Then request exact URL/referrer evidence for `/(100)` and `/(100)^ `.
4. Review PR #237's PWA/service-worker behavior and reconcile its overlap with #238 before proposing any release.

## 5. Actions and permissions

This batch was read-only for source/PR state; only this report and tracker/handoff documentation were saved to `main`.
- No production code change.
- No PR branch edit, rebase, approval, merge or close.
- No deployment.
- No DNS, Cloudflare Worker, secrets, AdSense/CMP/legal/publisher setting change.
- No Google Request Indexing or Validate Fix.
- The 18-page indexing hold remains unchanged.


## 6. PR #237 — additional static dual-host/PWA review

Read-only comparison of `main` and the PR branch for `sw.js`, `install.js`, root `manifest.json`, and representative page/app-manifest files found:
- `install.js` chooses `/InfoJano/` on `barsulkhan.github.io` and `/` on the custom domain, then uses that root for service-worker registration and helper-script loading.
- `sw.js` derives `BASE` from `self.registration.scope`, maps relative precache paths through that base, and uses the derived base as the offline HOME fallback.
- Static check against the PR branch's Git tree: all 198 non-empty precache entries (199 array entries including the intentional empty root path) exist in the branch tree; no duplicate non-empty precache entries were found.
- Root `manifest.json` uses relative `./` start/scope and relative icon paths; the three sampled dedicated app manifests use `../` paths that resolve from `app-manifests/` to their root-level tool pages/icons.
- The source strategy appears internally consistent for the two URL roots in the files sampled. This is not a full review of all 89 changed files and is not browser/device validation.

Still required before any release recommendation: run installed-PWA/service-worker tests on both `https://barsulkhan.github.io/InfoJano/` and `https://infojano.com/`, verify first install/upgrade/cache invalidation/offline fallback/navigation/assets, and verify the 29 dedicated app manifests. No code or PR branch change was made.
