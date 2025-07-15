import { Page, Locator, expect } from '@playwright/test';

export class BasePage{
 constructor(protected page: Page){}

 async goTo(url: string){
    await this.page.goto(url);
 }
async click(selector: string | Locator) {
    if (typeof selector === 'string') {
      await this.page.locator(selector).click();
    } else {
      await selector.click();
    }
  }

  async fill(selector: string | Locator, value: string) {
    if (typeof selector === 'string') {
      await this.page.locator(selector).fill(value);
    } else {
      await selector.fill(value);
    }
  }

  async expectVisible(selector: string | Locator) {
    if (typeof selector === 'string') {
      await expect(this.page.locator(selector)).toBeVisible();
    } else {
      await expect(selector).toBeVisible();
    }
  }
}

