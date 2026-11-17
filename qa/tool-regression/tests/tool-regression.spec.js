const { test, expect } = require('@playwright/test');
const { PNG } = require('pngjs');
const jsQR = require('jsqr');

function samplePng() {
  const png = new PNG({ width: 2, height: 2 });
  const pixels = [
    [255, 0, 0, 255], [0, 255, 0, 255],
    [0, 0, 255, 255], [255, 255, 255, 255]
  ];
  pixels.forEach((p, i) => png.data.set(p, i * 4));
  return PNG.sync.write(png);
}

async function decodeQrDownload(download) {
  const buffer = await download.createReadStream().then(async stream => {
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    return Buffer.concat(chunks);
  });
  const png = PNG.sync.read(buffer);
  const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  return { decoded: decoded && decoded.data, width: png.width, height: png.height };
}

test.describe('Normal QR Maker', () => {
  test('generates a downloadable PNG whose pixels decode to the exact URL', async ({ page }) => {
    await page.goto('/qr-maker.html');
    const payload = 'https://example.com/infojano-qa?source=browser-test';
    await page.locator('#content').fill(payload);
    await page.locator('#generate-button').click();
    await expect(page.locator('#qr img[alt="Generated QR code preview"]')).toBeVisible();
    const downloadPromise = page.waitForEvent('download');
    await page.locator('#qr a.qr-download').click();
    const download = await downloadPromise;
    const result = await decodeQrDownload(download);
    expect(result.width).toBeGreaterThan(400);
    expect(result.height).toBeGreaterThan(400);
    expect(result.decoded).toBe(payload);
  });

  test('rejects empty content and switches content modes', async ({ page }) => {
    await page.goto('/qr-maker.html');
    await page.locator('#generate-button').click();
    await expect(page.locator('#qr')).toContainText('Please enter your QR content first.');
    await page.locator('[data-qrtype="wifi"]').click();
    await expect(page.locator('#ij-qr-input-label')).toContainText('WiFi');
    await page.locator('[data-qrtype="upi"]').click();
    await expect(page.locator('#ij-qr-structured')).toContainText('UPI Payment');
  await expect(page.locator('#ij-qr-pa')).toBeVisible();
  });
});

test('UPI landing page routes into the UPI mode of Normal QR Maker', async ({ page }) => {
  await page.goto('/upi-payment-qr-code-generator.html');
  await page.getByRole('link', { name: /Create UPI QR Code/i }).first().click();
  await expect(page).toHaveURL(/qr-maker\.html\?type=upi/);
  await expect(page.locator('[data-qrtype="upi"]')).toHaveClass(/active/);
  await expect(page.locator('#ij-qr-structured')).toContainText('UPI Payment');
  await expect(page.locator('#ij-qr-pa')).toBeVisible();
});

test('Image Resizer creates a downloadable image at the requested exact dimensions', async ({ page }) => {
  await page.goto('/image-resizer.html');
  await page.locator('#file').setInputFiles({
    name: 'qa-sample.png',
    mimeType: 'image/png',
    buffer: samplePng()
  });
  await expect(page.locator('#resizeBtn')).toBeEnabled();
  await page.locator('#ratio').uncheck();
  await page.locator('#width').fill('32');
  await page.locator('#height').fill('48');
  await page.locator('#format').selectOption('image/png');
  await page.locator('#resizeBtn').click();
  await expect(page.locator('#download')).toBeVisible();
  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download').click();
  const download = await downloadPromise;
  const buffer = await download.createReadStream().then(async stream => {
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    return Buffer.concat(chunks);
  });
  const resized = PNG.sync.read(buffer);
  expect(resized.width).toBe(32);
  expect(resized.height).toBe(48);
});

test.describe('Percentage Calculator', () => {
  test('calculates percentage-of, percentage change and decimal conversion', async ({ page }) => {
    await page.goto('/percentage.html');
    await page.locator('#calcMode').selectOption('percentOf');
    await page.locator('#percent').fill('20');
    await page.locator('#number').fill('150');
    await page.locator('button[onclick="calculate()"]').click();
    await expect(page.locator('#result')).toContainText('30');

    await page.locator('#calcMode').selectOption('increase');
    await page.locator('#percent').fill('100');
    await page.locator('#number').fill('125');
    await page.locator('button[onclick="calculate()"]').click();
    await expect(page.locator('#result')).toContainText('25');

    await page.locator('#calcMode').selectOption('decimal');
    await page.locator('#percent').fill('25');
    await page.locator('button[onclick="calculate()"]').click();
    await expect(page.locator('#result')).toContainText('0.25');
  });

  test('shows validation instead of calculating with a zero whole', async ({ page }) => {
    await page.goto('/percentage.html');
    await page.locator('#calcMode').selectOption('whatPercent');
    await page.locator('#percent').fill('10');
    await page.locator('#number').fill('0');
    await page.locator('button[onclick="calculate()"]').click();
    await expect(page.locator('#result')).toContainText('whole cannot be zero');
  });
});

test.describe('Discount Calculator', () => {
  test('calculates discount amount and sale price', async ({ page }) => {
    await page.goto('/discount.html');
    await page.locator('#price').fill('1000');
    await page.locator('#discount').fill('20');
    await page.locator('button[onclick="calculateDiscount()"]').click();
    await expect(page.locator('#result')).toContainText('₹200.00');
    await expect(page.locator('#result')).toContainText('₹800.00');
  });

  test('calculates the discount rate from a sale price', async ({ page }) => {
    await page.goto('/discount.html');
    await page.locator('#discountMode').selectOption('rate');
    await page.locator('#price').fill('1000');
    await page.locator('#discount').fill('800');
    await page.locator('button[onclick="calculateDiscount()"]').click();
    await expect(page.locator('#result')).toContainText('20%');
  });

  test('compares two offers and reveals a calculated winner', async ({ page }) => {
    await page.goto('/discount.html');
    await page.locator('#ijSmartOriginal').fill('2000');
    await page.locator('#ijSmartOfferA').fill('20');
    await page.locator('#ijSmartOfferB').fill('15');
    await page.locator('#ijSmartCoupon').fill('5');
    await page.locator('#ijSmartTax').fill('0');
    await page.locator('#ijSmartCalculate').click();
    await expect(page.locator('#ijSmartResults')).toContainText(/Offer A|Offer B|Best offer/i);
    await expect(page.locator('#ijSmartActions')).toBeVisible();
  });

  test('rejects a discount greater than 100 percent', async ({ page }) => {
    await page.goto('/discount.html');
    await page.locator('#price').fill('1000');
    await page.locator('#discount').fill('120');
    await page.locator('button[onclick="calculateDiscount()"]').click();
    await expect(page.locator('#result')).toContainText('discount from 0 to 100');
  });
});
