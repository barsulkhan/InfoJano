const { test, expect } = require('@playwright/test');

test.describe('Password Generator — desktop and mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/password-generator.html');
    await expect(page.locator('#generate-button')).toBeVisible();
  });

  test('generates a password with selected groups, required group coverage and exclusions', async ({ page }) => {
    await page.locator('#length').evaluate(el => { el.value = '64'; el.dispatchEvent(new Event('input', { bubbles: true })); });
    await page.locator('#exclude-similar').check();
    await page.locator('#min-each').check();
    await page.locator('#generate-button').click();
    const value = await page.locator('#result').inputValue();
    expect(value).toHaveLength(64);
    expect(value).toMatch(/[a-z]/);
    expect(value).toMatch(/[A-Z]/);
    expect(value).toMatch(/[0-9]/);
    expect(value).toMatch(/[!@#$%^&*()\-_=+\[\]{}?]/);
    expect(value).not.toMatch(/[O0Il1]/);
    await expect(page.locator('#message')).toContainText('Generated locally');
  });

  test('rejects empty character selection and impossible minimum group coverage', async ({ page }) => {
    for (const id of ['lower','upper','numbers','symbols']) await page.locator('#'+id).uncheck();
    await page.locator('#generate-button').click();
    await expect(page.locator('#message')).toContainText('Select at least one character type');
    for (const id of ['lower','upper','numbers','symbols']) await page.locator('#'+id).check();
    await page.locator('#length').evaluate(el => { el.value = '8'; el.dispatchEvent(new Event('input', { bubbles: true })); });
    await page.locator('#min-each').check();
    await page.locator('#generate-button').click();
    await expect(page.locator('#message')).toContainText('Increase the length');
  });

  test('switches the preset to Custom after manual settings change', async ({ page }) => {
    await page.locator('#preset').selectOption('long');
    await expect(page.locator('#length')).toHaveValue('24');
    await page.locator('#length').evaluate(el => { el.value = '31'; el.dispatchEvent(new Event('input', { bubbles: true })); });
    await expect(page.locator('#preset')).toHaveValue('custom');
    await page.locator('#symbols').uncheck();
    await expect(page.locator('#preset')).toHaveValue('custom');
  });

  test('generates a passphrase with selected word count, separator and capitalization', async ({ page }) => {
    await page.locator('#mode').selectOption('passphrase');
    await page.locator('#word-count').evaluate(el => { el.value = '6'; el.dispatchEvent(new Event('input', { bubbles: true })); });
    await page.locator('#separator').selectOption('_');
    await page.locator('#passphrase-capital').check();
    await page.locator('#passphrase-number').uncheck();
    await page.locator('#generate-button').click();
    const value = await page.locator('#result').inputValue();
    const words = value.split('_');
    expect(words).toHaveLength(6);
    for (const word of words) expect(word[0]).toMatch(/[A-Z]/);
    await expect(page.locator('#result-heading')).toHaveText('Your Passphrase');
    await expect(page.locator('#result')).toHaveAttribute('aria-label', 'Generated passphrase');
    await expect(page.locator('#strength-hint')).toContainText('Local word-count estimate');
  });

  test('generates a numeric PIN of the requested length', async ({ page }) => {
    await page.locator('#mode').selectOption('pin');
    await page.locator('#pin-length').evaluate(el => { el.value = '16'; el.dispatchEvent(new Event('input', { bubbles: true })); });
    await page.locator('#generate-button').click();
    const value = await page.locator('#result').inputValue();
    expect(value).toMatch(/^\d{16}$/);
    await expect(page.locator('#result-heading')).toHaveText('Your PIN');
    await expect(page.locator('#result')).toHaveAttribute('aria-label', 'Generated PIN');
  });

  test('keeps Show/Hide accessible labels synchronized with the active mode', async ({ page }) => {
    await page.locator('#mode').selectOption('pin');
    await page.locator('#generate-button').click();
    const toggle = page.locator('#toggle-result');
    await expect(toggle).toHaveAttribute('aria-label', 'Show generated PIN');
    await toggle.click();
    await expect(toggle).toHaveText('Hide');
    await expect(toggle).toHaveAttribute('aria-label', 'Hide generated PIN');
    await expect(page.locator('#result')).toHaveAttribute('type', 'text');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-label', 'Show generated PIN');
    await expect(page.locator('#result')).toHaveAttribute('type', 'password');
  });

  test('copies generated output when clipboard is available', async ({ page }) => {
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async value => { window.__copiedValue = value; } } });
    });
    await page.locator('#generate-button').click();
    const value = await page.locator('#result').inputValue();
    await page.locator('#copy-button').click();
    await expect.poll(() => page.evaluate(() => window.__copiedValue)).toBe(value);
    await expect(page.locator('#message')).toContainText('Copied');
  });

  test('exposes the result for manual copy when clipboard write fails', async ({ page }) => {
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('clipboard blocked'); } } });
    });
    await page.locator('#generate-button').click();
    await page.locator('#copy-button').click();
    await expect(page.locator('#result')).toHaveAttribute('type', 'text');
    await expect(page.locator('#toggle-result')).toHaveAttribute('aria-label', 'Hide generated password');
    await expect(page.locator('#message')).toContainText('use your device');
  });

  test('shows a helpful message if secure randomness is unavailable', async ({ page }) => {
    await page.evaluate(() => { Object.defineProperty(window, 'crypto', { configurable: true, value: {} }); });
    await page.locator('#generate-button').click();
    await expect(page.locator('#message')).toContainText('Secure random generation is unavailable');
  });

  test('keeps the page within the viewport at common desktop, tablet and phone widths', async ({ page }) => {
    for (const width of [1440, 1024, 768, 390, 360]) {
      await page.setViewportSize({ width, height: 900 });
      const metrics = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        document: document.documentElement.scrollWidth,
        hero: document.querySelector('.ij-reference-hero')?.getBoundingClientRect().width,
        panels: document.querySelector('.ij-password-workspace')?.getBoundingClientRect().width
      }));
      expect(metrics.document, 'horizontal overflow at '+width+'px').toBeLessThanOrEqual(metrics.viewport + 1);
      expect(metrics.hero).toBeGreaterThan(0);
    }
  });
});
