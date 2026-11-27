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
    await page.locator('#qr a.qr-download[download$=".png"]').click();
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

function sampleWidePng() {
  const png = new PNG({ width: 4, height: 2 });
  for (let i = 0; i < png.width * png.height; i++) png.data.set([i * 20, 100, 180, 255], i * 4);
  return PNG.sync.write(png);
}
async function downloadedBytes(download) {
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks);
}
async function decodeImageDimensions(page, bytes) {
  const base64 = bytes.toString('base64');
  return page.evaluate(async base64 => {
    const raw = atob(base64);
    const data = Uint8Array.from(raw, c => c.charCodeAt(0));
    const bitmap = await createImageBitmap(new Blob([data]));
    return { width: bitmap.width, height: bitmap.height };
  }, base64);
}
test.describe('Image Resizer — remaining core features', () => {
  test('exports valid JPG and WebP files at requested dimensions', async ({ page }) => {
    for (const type of ['image/jpeg', 'image/webp']) {
      await page.goto('/image-resizer.html');
      await page.locator('#file').setInputFiles({name:'qa-wide.png',mimeType:'image/png',buffer:sampleWidePng()});
      await page.locator('#ratio').uncheck();
      await page.locator('#width').fill('40'); await page.locator('#height').fill('20');
      await page.locator('#format').selectOption(type); await page.locator('#resizeBtn').click();
      await expect(page.locator('#download')).toBeVisible();
      const dp=page.waitForEvent('download'); await page.locator('#download').click();
      const bytes=await downloadedBytes(await dp), base64=bytes.toString('base64');
      const result=await page.evaluate(async ({base64,type})=>{const raw=atob(base64),data=Uint8Array.from(raw,c=>c.charCodeAt(0)),blob=new Blob([data],{type}),bitmap=await createImageBitmap(blob);return {width:bitmap.width,height:bitmap.height,size:blob.size}}, {base64,type});
      expect(result).toEqual({width:40,height:20,size:expect.any(Number)});
      expect(result.size).toBeGreaterThan(0);
      if(type==='image/jpeg') expect(bytes.subarray(0,2).toString('hex')).toBe('ffd8');
      if(type==='image/webp') expect(bytes.subarray(8,12).toString()).toBe('WEBP');
    }
  });
  test('preserves aspect ratio when resizing by width', async ({page}) => {
    await page.goto('/image-resizer.html');
    await page.locator('#file').setInputFiles({name:'wide.png',mimeType:'image/png',buffer:sampleWidePng()});
    await page.locator('#ratio').check(); await page.locator('#width').fill('80');
    await expect(page.locator('#height')).toHaveValue('40');
    await page.locator('#resizeBtn').click(); await expect(page.locator('#download')).toBeVisible();
    const dp=page.waitForEvent('download'); await page.locator('#download').click();
    const dimensions=await decodeImageDimensions(page, await downloadedBytes(await dp)); expect(dimensions).toEqual({width:80,height:40});
  });
  test('percentage mode calculates half-size dimensions', async ({page}) => {
    await page.goto('/image-resizer.html');
    await page.locator('#file').setInputFiles({name:'wide.png',mimeType:'image/png',buffer:sampleWidePng()});
    await page.locator('[data-mode="percent"]').click(); await page.locator('#percent').fill('50');
    await expect(page.locator('#width')).toHaveValue('2'); await expect(page.locator('#height')).toHaveValue('1');
    await expect(page.locator('#percentPanel')).toBeVisible();
  });
  test('popular preset sets exact dimensions and activates preset mode', async ({page}) => {
    await page.goto('/image-resizer.html');
    await page.locator('.preset[data-w="1280"][data-h="720"]').click();
    await expect(page.locator('#width')).toHaveValue('1280'); await expect(page.locator('#height')).toHaveValue('720');
    await expect(page.locator('.tab[data-mode="preset"]')).toHaveClass(/active/);
  });
  test('converts centimetres and DPI to exact pixel dimensions', async ({page}) => {
    await page.goto('/image-resizer.html');
    await page.locator('summary').filter({hasText:'More Settings'}).click();
    await page.locator('#ijUnit').selectOption('cm'); await page.locator('#ijPhysicalW').fill('2.54');
    await page.locator('#ijPhysicalH').fill('5.08'); await page.locator('#ijDpi').fill('300');
    await page.locator('#ijApplyPhysical').click();
    await expect(page.locator('#width')).toHaveValue('300'); await expect(page.locator('#height')).toHaveValue('600');
  });
  test('centred crop changes dimensions and reset restores original', async ({page}) => {
    await page.goto('/image-resizer.html');
    await page.locator('#file').setInputFiles({name:'wide.png',mimeType:'image/png',buffer:sampleWidePng()});
    await page.locator('summary').filter({hasText:'More Settings'}).click();
    await page.locator('#ijCropRatio').selectOption('1:1'); await page.locator('#ijApplyCrop').click();
    await expect(page.locator('#width')).toHaveValue('2'); await expect(page.locator('#height')).toHaveValue('2');
    await page.locator('#ijResetCrop').click();
    await expect(page.locator('#width')).toHaveValue('4'); await expect(page.locator('#height')).toHaveValue('2');
  });
  test('batch-resizes two images and provides separate downloads', async ({page}) => {
    await page.goto('/image-resizer.html');
    await page.locator('#file').setInputFiles({name:'wide.png',mimeType:'image/png',buffer:sampleWidePng()});
    await page.locator('summary').filter({hasText:'More Settings'}).click();
    await page.locator('#width').fill('20'); await page.locator('#height').fill('10');
    await page.locator('#ijBatchFiles').setInputFiles([
      {name:'first.png',mimeType:'image/png',buffer:sampleWidePng()},
      {name:'second.png',mimeType:'image/png',buffer:sampleWidePng()}
    ]);
    await page.locator('#ijRunBatch').click();
    await expect(page.locator('#ijBatchStatus')).toContainText('Batch complete');
    await expect(page.locator('#ijBatchList a')).toHaveCount(2);
    const dp=page.waitForEvent('download'); await page.locator('#ijBatchList a').first().click();
    const dimensions=await decodeImageDimensions(page, await downloadedBytes(await dp)); expect(dimensions).toEqual({width:20,height:10});
  });
  test('rejects unsupported and over-10MB files', async ({page}) => {
    await page.goto('/image-resizer.html');
    await page.locator('#file').setInputFiles({name:'notes.txt',mimeType:'text/plain',buffer:Buffer.from('not image')});
    await expect(page.locator('#status')).toContainText('JPG, PNG or WebP');
    await page.locator('#file').setInputFiles({name:'large.png',mimeType:'image/png',buffer:Buffer.alloc(10*1024*1024+1)});
    await expect(page.locator('#status')).toContainText('larger than 10 MB');
  });
});
