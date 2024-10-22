import { test, expect } from '@playwright/test';

test('Check robots meta tag is set to noindex', async ({ page }) => {
  await page.goto('https://www.tvaplus.ca/design-system');
  
  const metaTag = await page.$('meta[name="robots"]');
  const content = await metaTag?.getAttribute('content');
  
  expect(content).toBe('noindex');
});