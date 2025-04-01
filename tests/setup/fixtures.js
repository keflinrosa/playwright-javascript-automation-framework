import { test as base, expect } from '@playwright/test';

export const test = base.extend({
    page: async ({ page, baseURL }, use) => {
      await page.goto(baseURL);
      await use(page);

      await page.locator('#onetrust-accept-btn-handler').click();
    }
});

export { expect };