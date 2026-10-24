/* InfoJano offline support: cache visited pages and provide a safer offline fallback. */
const CACHE_NAME = "infojano-v2";
const HOME = "/InfoJano/";
const ASSETS = [
  HOME,
  "/InfoJano/index.html",
  "/InfoJano/manifest.json",
  "/InfoJano/icon-192.png",
  "/InfoJano/icon-512.png",
  "/InfoJano/age.html",
  "/InfoJano/bmi.html",
  "/InfoJano/currency-converter.html",
  "/InfoJano/date-difference.html",
  "/InfoJano/discount.html",
  "/InfoJano/emi.html",
  "/InfoJano/gst-calculator.html",
  "/InfoJano/image-compressor.html",
  "/InfoJano/image-resizer.html",
  "/InfoJano/image-to-pdf.html",
  "/InfoJano/loan-eligibility.html",
  "/InfoJano/loan-interest.html",
  "/InfoJano/number-to-words.html",
  "/InfoJano/password-generator.html",
  "/InfoJano/percentage-change.html",
  "/InfoJano/percentage.html",
  "/InfoJano/qr-maker.html",
  "/InfoJano/savings.html",
  "/InfoJano/text-counter.html",
  "/InfoJano/time-calculator.html",
  "/InfoJano/tip-calculator.html",
  "/InfoJano/unit-converter.html",
  "/InfoJano/id-card-print-studio.html",
  "/InfoJano/install.js",
  "/InfoJano/download-progress.js",
  "/InfoJano/app-manifests/age.webmanifest",
  "/InfoJano/app-manifests/bmi.webmanifest",
  "/InfoJano/app-manifests/currency-converter.webmanifest",
  "/InfoJano/app-manifests/date-difference.webmanifest",
  "/InfoJano/app-manifests/discount.webmanifest",
  "/InfoJano/app-manifests/emi.webmanifest",
  "/InfoJano/app-manifests/gst-calculator.webmanifest",
  "/InfoJano/app-manifests/image-compressor.webmanifest",
  "/InfoJano/app-manifests/image-resizer.webmanifest",
  "/InfoJano/app-manifests/image-to-pdf.webmanifest",
  "/InfoJano/app-manifests/loan-eligibility.webmanifest",
  "/InfoJano/app-manifests/loan-interest.webmanifest",
  "/InfoJano/app-manifests/number-to-words.webmanifest",
  "/InfoJano/app-manifests/password-generator.webmanifest",
  "/InfoJano/app-manifests/percentage-change.webmanifest",
  "/InfoJano/app-manifests/percentage.webmanifest",
  "/InfoJano/app-manifests/qr-maker.webmanifest",
  "/InfoJano/app-manifests/savings.webmanifest",
  "/InfoJano/app-manifests/text-counter.webmanifest",
  "/InfoJano/app-manifests/time-calculator.webmanifest",
  "/InfoJano/app-manifests/tip-calculator.webmanifest",
  "/InfoJano/app-manifests/unit-converter.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("infojano-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // For page navigation, prefer fresh content but show the exact cached page offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request, { ignoreSearch: true });
          return cached || await caches.match(HOME);
        })
    );
    return;
  }

  // For same-origin assets, use cached content when the network is unavailable.
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => await caches.match(request) || await caches.match(HOME))
  );
});
