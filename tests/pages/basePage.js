import { expect } from "@playwright/test";

export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }
    
    async clickElement(selector) {
        await this.page.locator(selector).click();
    }

    async fillInput(selector, text) {
        await this.page.fill(selector, text);
    }

    async expectToContainText(selector, text) {
        await expect(this.page.locator(selector)).toContainText(text);
    }
}