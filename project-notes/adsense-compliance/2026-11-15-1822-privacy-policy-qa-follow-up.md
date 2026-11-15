# Privacy Policy QA follow-up and remaining-work review

- Website: InfoJano
- Canonical site: https://infojano.com
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: `feature/privacy-policy-adsense-compliance`
- Started: 2026-11-15 (time not recorded)
- Verified CI completion: 2026-11-15 18:22:01 UTC
- Status: **QA PASS; remaining live/account/legal gates still open**

## User request
Recheck the failed Privacy Policy QA workflow, then complete any additional remaining fixes that are possible without crossing protected approval boundaries.

## Scope and permission boundaries
- May inspect and correct source/QA on the existing review branch.
- No merge, production deployment, DNS, AdSense/CMP account changes, Cloudflare Worker settings/secrets, or Publish changes.
- Preserve homepage hero/banner and other protected design.
- Do not claim browser/device/live-network tests without evidence.

## Reused evidence
- Existing PR #236 and earlier source inventory, privacy-policy reconciliation, CMP audit, and timestamped task notes were reused. No completed audit was repeated.
- Previous failed run #4 (ID 43746063035) was inspected. Root cause: the workflow linted both `privacy-policy.html` and the entire legacy `index.html`; homepage had 31 unrelated lint errors, while the policy had a lowercase doctype error.

## Changes verified on branch
- `.github/workflows/privacy-policy-qa.yml`: narrowed HTML validation to `privacy-policy.html`, keeping the local-link check.
- `privacy-policy.html`: changed `<!doctype html>` to `<!DOCTYPE html>`.
- Commits:
  - Workflow scope fix: `a31a106da2d4b62e462db16c23f46a680494d627`
  - Policy doctype fix: `d2f069349c152a798b970c310868e77dd62af828`

## Tests and evidence
| Check | Status | Evidence |
|---|---|---|
| Privacy Policy HTML validation | PASS | Workflow run #8, job validate, step “Validate Privacy Policy HTML5 markup” succeeded |
| Local policy links | PASS | Same run; `Checked 26 hrefs; all local targets exist.` |
| Whole workflow job | PASS | Run ID 43746323124 |
| Homepage consent link source review | PASS (source-only) | Link is hidden until `CONSENT_API_READY`, then calls `googlefc.showRevocationMessage()` on click |
| Homepage full HTML lint | NOT RUN / OUT OF SCOPE | Prior attempt found legacy markup issues; not required for policy-only QA |
| Live CMP revocation behavior | UNVERIFIED | No live browser session / production fetch evidence |
| EEA consent/reject/manage/revoke runtime and TCF signal | UNVERIFIED | Requires live region-appropriate browser session and runtime inspection |
| AdSense account approval/vendor/crawler status | BLOCKED | Requires account evidence |
| Production HTTP status/redirects/headers | UNVERIFIED | Live endpoint fetch unavailable in this environment |
| Android/Windows runtime QA | NOT RUN | Requires installed device/emulator/browser |
| Worker production CORS/secrets/log-retention review | BLOCKED | Requires Cloudflare/provider account access |

## Additional review
- Confirmed the homepage consent entry-point source is present in the PR branch and wired to the documented Google Privacy & Messaging API.
- No additional source correction was justified by the evidence available after the successful run. Do not expand scope by lint-fixing all of the legacy homepage without a separate task and regression review.
- Successful CI is source validation only; it does not prove live CMP injection, legal compliance, AdSense approval, production deployment, or device runtime behavior.

## PR / workflow
- PR: https://github.com/barsulkhan/InfoJano/pull/236 — remains Draft and unmerged.
- Successful workflow: https://github.com/barsulkhan/InfoJano/actions/runs/43746323124
- Run #8, job `validate`: all steps passed.

## Remaining work / blockers
1. Verify live Privacy and cookie settings control appears and reopens the consent UI.
2. Verify live EEA consent, reject, manage, revoke and TCF v2.4 signals.
3. Recheck AdSense Site status, selected vendor list and ads.txt crawler status from the account.
4. Verify live HTTP/HTTPS ads.txt and policy endpoints, status/redirects/headers.
5. Test Android and Windows wrappers on real devices.
6. Verify Cloudflare Worker production domain/CORS/security/log retention and obtain authoritative iLoveAPI retention for the active plan.
7. Obtain any outstanding publisher/legal review before publication.
8. Request separate user approval before PR merge or production deployment.

## Next action
Continue only with the next evidence-gathering step that does not require unavailable credentials. Ask the user for one screenshot/log at a time only when account or device evidence is essential.

## Protected areas preserved
No PR merge, production deployment, DNS, AdSense/CMP settings, Cloudflare Worker secrets/settings, or protected hero/banner changes were made.
