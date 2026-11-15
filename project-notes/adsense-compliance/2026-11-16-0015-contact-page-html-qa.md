# InfoJano — Contact page HTML QA extension and repair

- Date: 2026-11-16
- Website: https://infojano.com
- Repository: https://github.com/barsulkhan/InfoJano
- Branch: main
- Status: **Contact source issues repaired; final CI rerun pending at report time**

## Work completed
1. Extended `.github/workflows/privacy-policy-qa.yml` to HTML-validate both `privacy-policy.html` and `contact.html`.
2. First run after expansion: #43748627700 failed only on Contact page:
   - lowercase `<!doctype html>`;
   - raw ampersand in page title and Open Graph title.
3. Repaired `contact.html`:
   - uppercase `<!DOCTYPE html>`;
   - encoded `&amp;` in both title fields.
4. Repair commit: `29281c6e59fdbd701320eedf714a90e487b3bc4a`.
5. Rerun #43748683497 was in progress when this record was created; final status must be rechecked before declaring Contact HTML QA PASS.

## Workflow references
- Expanded workflow commit: `044c857848cfaf556e4fdc86317dce95e467daba`.
- First expanded run (failure identifying two Contact markup issues): https://github.com/barsulkhan/InfoJano/actions/runs/43748627700
- Repair run: https://github.com/barsulkhan/InfoJano/actions/runs/43748683497

## Scope / guardrails
Only Contact page metadata markup and QA workflow changed. No homepage hero/banner/tool design, AdSense/CMP account setting, DNS, Worker config, app release or deployment setting changed.
