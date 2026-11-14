# InfoJano Celebration Countdown — Windows Desktop

This is a dedicated native Windows desktop wrapper for the Celebration Countdown tool.

- Opens the dedicated tool at https://infojano.com/countdown-studio.html.
- Separate from the browser PWA manifest and installation experience.
- Builds both a Windows NSIS setup installer and a portable Windows executable.
- Requires an internet connection; this wrapper does not bundle the website or provide offline operation.
- The website must be merged and deployed before the released app can load the final tool URL.
- Windows packages are unsigned unless a code-signing certificate is configured; SmartScreen may show a warning.
- The branch-only workflow uploads build outputs as a GitHub Actions artifact. It does not publish a public release or modify the live site.
