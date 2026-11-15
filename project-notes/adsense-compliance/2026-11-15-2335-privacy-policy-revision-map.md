# Proposed Privacy Policy revision map and approval gates

- Website: InfoJano
- Site: https://infojano.com
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: feature/privacy-policy-adsense-compliance
- Started: Unknown (not reliably captured; not inferred)
- Saved: 2026-11-15T23:35:57+05:30 (Asia/Kolkata)
- Status: COMPLETED — proposed revision map documented; no policy edits made.
- User instruction: continue research and save each completed task in a timestamped file; no new folders.
- Scope: convert source-to-policy reconciliation into a section-by-section proposed revision plan with evidence gates and approval sequence.
- Findings: propose updates to controller identity, GA4 scope, local/session storage, AdSense/CMP revocation, YouTube/Currency/Age APIs, optional Word Converter upload, native Android/Windows app surfaces, contact email, retention and jurisdiction-specific rights. All proposed changes require evidence/confirmation before wording is finalized.
- Important constraints: keep `privacy-policy.html` unchanged until explicit approval; no claims of working revocation link before live test; do not claim Birthday Countdown notifications work; resolve iLoveAPI 2h/48h public terms discrepancy; distinguish public GitHub prerelease availability from actual app installs/usage.
- Implementation order and blockers saved in MASTER-RESEARCH-PLAN.md §31.
- Checks: plan content saved — PASS; policy/app code unchanged — PASS; live CMP/app/Worker tests — NOT RUN.
- Research-plan commit: `a690b1ae974c6aa58171fbe6ffccdf9e01943358`.
- Next: wait for/obtain publisher legal facts and live Google/Worker evidence; then prepare a complete proposed policy diff for review, not implementation.
- Approval boundaries: no policy edit, app source change, account setting, DNS, merge or deployment authorized.
