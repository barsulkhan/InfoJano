# InfoJano — QA CI confirmation and source-search batch

- Date: 2026-11-16
- Website: https://infojano.com
- Repository: https://github.com/barsulkhan/InfoJano
- Status: **QA CI PASS for expanded sitemap checker**

## Confirmed GitHub Actions run
- Workflow: Privacy Policy QA
- Run ID: 43748356041
- Commit: `190f50bbd379f85039eccf7973ea3390c2d76cb5`
- Event: push to main
- Conclusion: SUCCESS
- Job `validate`: SUCCESS
- Step `Validate Privacy Policy HTML5 markup`: SUCCESS
- Step `Check policy links, sitemap and robots reference`: SUCCESS
- Run URL: https://github.com/barsulkhan/InfoJano/actions/runs/43748356041

This is the first confirmed run after adding sitemap/robots/repository-file checks and correcting the path-normalization regex. Later documentation-only commits do not change the tested checker/workflow source.

## Additional source search
- Privacy Policy links are found in the policy, Contact page and homepage. The checked source search did not show a common privacy-policy link in every root tool page. This is a possible usability improvement, not yet changed because the site uses multiple different footer implementations and a safe site-wide insertion needs a shared-template inventory.
- AdSense loader search found explicit pagead loader in homepage source; no ad placement proof or actual ad serving claim.
- GA4 ID search confirms the measurement ID remains present across selected pages; source presence does not prove runtime firing or consent gating.
- Third-party request source search reconfirmed:
  - Age page requests ipapi.co and Wikipedia;
  - Currency Converter requests open.er-api.com and Frankfurter;
  - Countdown Studio can call YouTube Data API when user supplies a key;
  - Word Converter sends DOCX to configured Worker when the visitor chooses that optional path.
- These findings are consistent with the prior consolidated inventory; no duplicate full audit was performed.

## Still deferred
- Live HTTP response/headers/redirects; public fetch still inaccessible.
- Live CMP injection, EEA consent, revocation and TCF v2.4 runtime.
- AdSense review/vendor/crawler account evidence.
- Android/Windows runtime and Worker production settings.
