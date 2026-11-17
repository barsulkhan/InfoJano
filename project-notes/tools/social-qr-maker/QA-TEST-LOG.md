# Social Media QR Maker — QA Test Log

Last updated: 2026-11-17
Source under test: `social-qr-maker.html`
Branch: `fix/social-qr-maker-completion`

## 2026-11-17 — Source implementation review

| ID | Test | Expected | Result | Evidence / notes |
|---|---|---|---|---|
| SQ-001 | Bundle mode theme selection | Bundle mode uses Social Links theme even when platform selector retains Instagram | Implemented; runtime not run | `makeQR()` now derives `isBundle` from `ij-qr-mode` |
| SQ-002 | Single-profile URL host validation | Only selected platform's supported host is accepted | Implemented; runtime not run | `profileUrl()` checks URL protocol, credentials and platform host allowlist |
| SQ-003 | Username URL construction | Username cannot inject path/query/fragment characters | Implemented; runtime not run | Username is checked and path component encoded |
| SQ-004 | Bundle validation | Each populated social field is validated against its platform; WhatsApp number is 8–15 digits | Implemented; runtime not run | `ijBuildAdvancedPayload()` routes each field through `profileUrl()` |
| SQ-005 | Link-in-Bio validation | Each social destination and WhatsApp number is validated before encoding | Implemented; runtime not run | Same shared `profileUrl()` validation path |
| SQ-006 | Decoded hub safety | Invalid fields, unsafe protocols and unapproved destination domains are not rendered as links | Implemented; runtime not run | Hub renderer filters payload fields and validates label/domain mapping |
| SQ-007 | Generation status | Success is announced only after QR PNG generation succeeds | Implemented; runtime not run | Build handler awaits `makeQR()`; function returns true/false |
| SQ-008 | 12 platform profile paths | Each supported platform opens the intended destination | Not run | Requires browser interaction and destination/scan testing |
| SQ-009 | PNG output and scan reliability | Downloaded PNG opens and scans on multiple devices | Not run | Requires browser/device |
| SQ-010 | Mobile/desktop visual and accessibility QA | Responsive layout, focus order, keyboard use and status announcements work | Not run | Requires real browser/device |

## Test environment and limitations
- Repository source was reviewed and edited through GitHub.
- No browser automation or live device is connected in this session.
- No claim is made that runtime, visual, accessibility, download, scan, deployment or production tests passed.
- The normal QR page was not changed and is not part of this QA scope.
