/* InfoJano offline support: cache visited pages and provide a safer offline fallback. */
const CACHE_NAME = "infojano-v313";
const BASE = new URL(".", self.registration.scope).pathname;
const HOME = BASE;
const ASSETS = [
  "",
  "404.html",
  "privacy-policy.html",
  "contact.html",
  "index.html",
  "url-toolkit.html",
  "manifest.json",
  "app-icons/age.svg",
  "app-icons/bmi.svg",
  "app-icons/currency-converter.svg",
  "app-icons/date-difference.svg",
  "app-icons/discount.svg",
  "app-icons/emi.svg",
  "app-icons/gst-calculator.svg",
  "app-icons/image-compressor.svg",
  "app-icons/image-resizer.svg",
  "app-icons/image-to-pdf.svg",
  "app-icons/id-card-print-studio.svg",
  "app-icons/loan-eligibility.svg",
  "app-icons/loan-interest.svg",
  "app-icons/number-to-words.svg",
  "app-icons/password-generator.svg",
  "app-icons/percentage.svg",
  "app-icons/percentage-change.svg",
  "app-icons/qr-maker.svg",
  "app-icons/savings.svg",
  "app-icons/text-counter.svg",
  "app-icons/time-calculator.svg",
  "app-icons/tip-calculator.svg",
  "app-icons/unit-converter.svg",
  "app-icons/url-toolkit.svg",
  "icon-192.png",
  "icon-512.png",
  "age.html",
  "what-happened-on-my-birthday.html",
  "day-of-week-born-calculator.html",
  "birthday-countdown-calculator.html",
  "countdown-studio.html",
  "countdown-timer-india.html",
  "countdown-timer-bangladesh.html",
  "countdown-timer-usa.html",
  "age-in-days-calculator.html",
  "bmi.html",
  "bmr-calculator.html",
  "bmi-toolkit.css",
  "bmi-toolkit.js",
  "bmi-calculation-guide.html",
  "bmi-weight-categories.html",
  "bmi-healthy-weight-range.html",
  "bmi-health-guide.html",
  "currency-converter.html",
  "date-difference.html",
  "days-between-dates-calculator.html",
  "business-days-calculator.html",
  "date-duration-calculator.html",
  "add-subtract-date-calculator.html",
  "discount.html",
  "discount-pt-br.html",
  "emi.html",
  "gst-calculator.html",
  "image-compressor.html",
  "image-resizer.html",
  "image-resizer-advanced.css",
  "image-resizer-advanced.js",
  "resize-image-to-pixels.html",
  "resize-image-by-percentage.html",
  "passport-id-photo-resizer.html",
  "social-media-image-resizer.html",
  "print-document-image-resizer.html",
  "resize-image-for-website.html",
  "image-resizer-landing.css",
  "image-resizer-premium.css",
  "image-to-pdf.html",
  "pdf-to-jpg.html",
  "extract-pdf-pages.html",
  "word-converter.html",
  "word-to-pdf.html",
  "word-to-jpg.html",
  "word-to-png.html",
  "word-converter.js",
  "app-icons/word-converter.svg",
  "app-manifests/countdown-studio.webmanifest",
  "app-manifests/word-converter.webmanifest",
  "app-manifests/word-to-pdf.webmanifest",
  "app-manifests/word-to-jpg.webmanifest",
  "app-manifests/word-to-png.webmanifest",
  "app-icons/pdf-to-jpg.svg",
  "app-icons/extract-pdf-pages.svg",
  "app-manifests/pdf-to-jpg.webmanifest",
  "app-manifests/extract-pdf-pages.webmanifest",
  "document-studio.html",
  "app-icons/document-studio.svg",
  "loan-eligibility.html",
  "loan-interest.html",
  "number-to-words.html",
  "number-to-words-locales.js",
  "assets/seo-hero-india.svg",
  "assets/seo-hero-global.svg",
  "assets/seo-hero-inr.svg",
  "assets/seo-hero-usd.svg",
  "assets/seo-hero-number.svg",
  "bengali-number-to-words.html",
  "bulk-number-to-words.html",
  "cheque-amount-in-words.html",
  "decimal-number-to-words.html",
  "dollars-in-words.html",
  "hindi-number-to-words.html",
  "lakh-crore-converter.html",
  "million-billion-converter.html",
  "number-to-words-for-cheque.html",
  "number-to-words-indian.html",
  "number-to-words-international.html",
  "number-to-words-uppercase.html",
  "ordinal-number-converter.html",
  "rupees-in-words.html",
  "words-to-number-converter.html",
  "password-generator.html",
  "percentage-change.html",
  "percentage.html",
  "percent-of-number-calculator.html",
  "what-percent-calculator.html",
  "reverse-percentage-calculator.html",
  "percentage-increase-calculator.html",
  "percentage-decrease-calculator.html",
  "percentage-difference-calculator.html",
  "increase-decrease-by-percentage-calculator.html",
  "original-price-before-discount-calculator.html",
  "profit-loss-percentage-calculator.html",
  "exam-marks-percentage-calculator.html",
  "target-marks-calculator.html",
  "percentage-of-percentage-calculator.html",
  "repeated-percentage-change-calculator.html",
  "successive-percentage-change-calculator.html",
  "percentage-to-decimal-converter.html",
  "percentage-to-fraction-converter.html",
  "remove-gst-from-total-calculator.html",
  "percentage-pt-br.html",
  "qr-choice.html",
  "qr-maker.html",
  "bulk-qr-generator.html",
  "qr-scanner.html",
  "whatsapp-qr-code-generator.html",
  "upi-payment-qr-code-generator.html",
  "wifi-qr-code-generator.html",
  "url-qr-code-generator.html",
  "text-qr-code-generator.html",
  "contact-qr-code-generator.html",
  "phone-number-qr-code-generator.html",
  "email-qr-code-generator.html",
  "sms-qr-code-generator.html",
  "google-maps-location-qr-code-generator.html",
  "vcard-qr-code-generator.html",
  "custom-qr-code-generator.html",
  "barcode-scanner-online.html",
  "social-qr-maker.html",
  "qr-code-generator.min.js",
  "savings.html",
  "text-counter.html",
  "time-calculator.html",
  "elapsed-time-calculator-guide.html",
  "work-hours-calculator.html",
  "tip-calculator.html",
  "unit-converter.html",
  "id-card-print-studio.html",
  "id-card-guides.css",
  "digital-ration-card-print.html",
  "voter-id-card-print.html",
  "aadhaar-card-print.html",
  "ayushman-card-print.html",
  "jspdf.umd.min.js",
  "install.js",
  "site-header.js",
  "infojano-mark.svg",
  "infojano-logo.svg",
  "related-apps.js",
  "theme.js",
  "download-progress.js",
  "app-manifests/age.webmanifest",
  "app-manifests/bmi.webmanifest",
  "app-manifests/currency-converter.webmanifest",
  "app-manifests/date-difference.webmanifest",
  "app-manifests/discount.webmanifest",
  "app-manifests/emi.webmanifest",
  "app-manifests/gst-calculator.webmanifest",
  "app-manifests/image-compressor.webmanifest",
  "app-manifests/image-resizer.webmanifest",
  "app-manifests/image-to-pdf.webmanifest",
  "app-manifests/loan-eligibility.webmanifest",
  "app-manifests/loan-interest.webmanifest",
  "app-manifests/number-to-words.webmanifest",
  "app-manifests/password-generator.webmanifest",
  "app-manifests/percentage-change.webmanifest",
  "app-manifests/percentage.webmanifest",
  "app-manifests/qr-maker.webmanifest",
  "app-manifests/savings.webmanifest",
  "app-manifests/text-counter.webmanifest",
  "app-manifests/time-calculator.webmanifest",
  "app-manifests/tip-calculator.webmanifest",
  "app-manifests/unit-converter.webmanifest",
].map(path => BASE + path);

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
      fetch(request, { cache: "no-store" })
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
