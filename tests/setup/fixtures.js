import { test as base } from '@playwright/test';

export const test = base.extend({
    page: async ({ page, baseURL }, use) => {
      await page.goto(baseURL);
      await use(page);
    }
});

export { expect } from '@playwright/test';