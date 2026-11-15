# Privacy Policy — Operator Details Added

- Date: 2026-11-15
- Time label: 23:50 (task-log sequence; timezone not independently verified)
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: `feature/privacy-policy-adsense-compliance`
- User-confirmed operator: Abdul Barik
- User-confirmed location: West Bengal, India
- User confirmed the existing privacy email `infojanowebsite@gmail.com` is theirs.

## Change made

Updated the opening section of `privacy-policy.html` to state:

> InfoJano is operated by Abdul Barik, an individual based in West Bengal, India. For privacy questions or requests, you can contact the operator at infojanowebsite@gmail.com.

This identifies the operator as an individual and does not imply an incorporated company or registered legal entity.

## Commit

- Policy update commit: `641ff424df0103f020060c844d99afa4a86bda39`

## Remaining gates

- Live production CMP/revocation and TCF signal test remains outstanding.
- Live AdSense vendor list and ads.txt crawler/HTTP checks remain outstanding.
- GA4/AdSense consent timing and app-surface runtime behavior remain outstanding.
- Word Converter Worker production route, CORS, observability retention and iLoveAPI plan/retention confirmation remain outstanding.
- HTML validation, link checks and browser QA have not yet been run.
- No production deployment, PR merge, AdSense/CMP settings, DNS or Worker config changed. PR #236 remains a draft and unmerged.
