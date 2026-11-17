const { test, expect } = require('@playwright/test');

const platforms = [
  ['instagram', 'creator_one', 'https://www.instagram.com/creator_one'],
  ['facebook', 'creator_one', 'https://www.facebook.com/creator_one'],
  ['youtube', '@creator_one', 'https://www.youtube.com/@creator_one'],
  ['tiktok', 'creator_one', 'https://www.tiktok.com/@creator_one'],
  ['telegram', 'creator_one', 'https://t.me/creator_one'],
  ['whatsapp', '919876543210', 'https://wa.me/919876543210'],
  ['linkedin', 'creator_one', 'https://www.linkedin.com/in/creator_one'],
  ['x', 'creator_one', 'https://x.com/creator_one'],
  ['pinterest', 'creator_one', 'https://www.pinterest.com/creator_one'],
  ['snapchat', 'creator_one', 'https://www.snapchat.com/add/creator_one'],
  ['threads', 'creator_one', 'https://www.threads.net/@creator_one'],
  ['reddit', 'creator_one', 'https://www.reddit.com/user/creator_one']
];

async function openSocialMaker(page) {
  await page.goto('/social-qr-maker.html');
  await expect(page.locator('#social-build-button')).toBeVisible();
}

test.beforeEach(async ({ page }) => {
  await openSocialMaker(page);
});

test('all 12 supported platforms create a designed QR PNG', async ({ page }) => {
  for (const [platform, username, expectedUrl] of platforms) {
    await page.locator('#ij-qr-mode').selectOption('profile');
    await page.locator('#social-platform').selectOption(platform);
    await page.locator('#social-value').fill(username);
    await page.locator('#social-build-button').click();
    await expect(page.locator('#qr img')).toBeVisible();
    await expect(page.locator('#qr img')).toHaveAttribute('src', /^data:image\/png;base64,/);
    await expect(page.locator('#content')).toHaveValue(expectedUrl);
    await expect(page.locator('#social-status')).toContainText('ready');
  }
});

test('profile mode rejects a URL belonging to another platform', async ({ page }) => {
  await page.locator('#social-platform').selectOption('instagram');
  await page.locator('#social-value').fill('https://facebook.com/not-instagram');
  await page.locator('#social-build-button').click();
  await expect(page.locator('#social-status')).toContainText('does not match the selected social platform');
  await expect(page.locator('#qr img')).toHaveCount(0);
});

test('bundle mode creates a Social Links QR and its landing page', async ({ page }) => {
  await page.locator('#ij-qr-mode').selectOption('bundle');
  await expect(page.locator('#social-bundle-fields')).toBeVisible();
  await page.locator('#bundle-name').fill('InfoJano Creator');
  await page.locator('#bundle-instagram').fill('https://instagram.com/infojano');
  await page.locator('#bundle-whatsapp').fill('+91 98765 43210');
  await page.locator('#social-build-button').click();

  await expect(page.locator('#qr img')).toHaveAttribute('alt', 'Social Links social QR code design');
  const hubUrl = await page.locator('#content').inputValue();
  expect(hubUrl).toContain('?hub=');
  const download = page.waitForEvent('download');
  await page.locator('#qr a.qr-download').click();
  expect((await download).suggestedFilename()).toBe('InfoJano-Social-Links-QR.png');

  await page.goto(hubUrl);
  await expect(page.locator('h1')).toHaveText('InfoJano Creator');
  await expect(page.locator('a', { hasText: 'Instagram' })).toHaveAttribute('href', 'https://instagram.com/infojano');
  await expect(page.locator('a', { hasText: 'WhatsApp' })).toHaveAttribute('href', 'https://wa.me/919876543210');
});

test('Link-in-Bio creates a page with the entered name, bio and social link', async ({ page }) => {
  await page.locator('#ij-qr-mode').selectOption('linkbio');
  await expect(page.locator('#ij-linkbio-fields')).toBeVisible();
  await page.locator('#ij-hub-name').fill('Test Creator');
  await page.locator('#ij-hub-bio').fill('Photography and design');
  await page.locator('#ij-hub-instagram').fill('https://www.instagram.com/testcreator');
  await page.locator('#social-build-button').click();

  await expect(page.locator('#qr img')).toHaveAttribute('alt', 'Social Link Page social QR code design');
  const hubUrl = await page.locator('#content').inputValue();
  await page.goto(hubUrl);
  await expect(page.locator('h1')).toHaveText('Test Creator');
  await expect(page.locator('main section > p').first()).toContainText('Photography and design');
  await expect(page.locator('a', { hasText: 'Instagram' })).toHaveAttribute('href', 'https://www.instagram.com/testcreator');
});

test('Link-in-Bio rejects mismatched social profile hosts', async ({ page }) => {
  await page.locator('#ij-qr-mode').selectOption('linkbio');
  await page.locator('#ij-hub-name').fill('Test Creator');
  await page.locator('#ij-hub-instagram').fill('https://facebook.com/not-instagram');
  await page.locator('#social-build-button').click();
  await expect(page.locator('#social-status')).toContainText('does not match the selected social platform');
  await expect(page.locator('#qr img')).toHaveCount(0);
});

test('decoded Social Link Page rejects unsafe destination protocols', async ({ page }) => {
  const payload = { n: 'Untrusted Profile', b: '', l: [['Instagram', 'javascript:alert(1)']] };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  await page.goto('/social-qr-maker.html?hub=' + encoded);
  await expect(page.locator('#social-build-button')).toBeVisible();
  await expect(page.locator('body')).not.toContainText('Untrusted Profile');
  await expect(page.locator('a[href^="javascript:"]')).toHaveCount(0);
});

test('mobile layout keeps primary controls visible and within viewport', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile viewport check runs in the mobile Chromium project.');
  const button = page.locator('#social-build-button');
  await expect(button).toBeVisible();
  const box = await button.boundingBox();
  const viewport = page.viewportSize();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
  await page.locator('#ij-qr-mode').selectOption('bundle');
  await expect(page.locator('#bundle-instagram')).toBeVisible();
  const fieldBox = await page.locator('#bundle-instagram').boundingBox();
  expect(fieldBox.x).toBeGreaterThanOrEqual(0);
  expect(fieldBox.x + fieldBox.width).toBeLessThanOrEqual(viewport.width + 1);
});

test('platform picker supports keyboard selection and announces pressed state', async ({ page }) => {
  const facebook = page.locator('[data-pick="facebook"]');
  const instagram = page.locator('[data-pick="instagram"]');

  await facebook.focus();
  await expect(facebook).toBeFocused();
  await page.keyboard.press('Enter');

  await expect(page.locator('#social-platform')).toHaveValue('facebook');
  await expect(facebook).toHaveAttribute('aria-pressed', 'true');
  await expect(instagram).toHaveAttribute('aria-pressed', 'false');
});
