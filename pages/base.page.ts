import { Page, Locator, expect } from '@playwright/test';

export class BasePage{

  get inboxLink() {
    return this.page.getByRole('link', { name: /Inbox/ });
}

  constructor(protected page: Page){}
 async goTo(url: string){
    await this.page.goto(url);
 }

async getInboxCount(): Promise<number> {
  const inboxLink = this.page.getByRole('link', { name: /^Inbox, \d+ tasks$/ });
  const ariaLabel = await inboxLink.getAttribute('aria-label');

  if (!ariaLabel) {
    throw new Error('Failed to get Inbox count: aria-label not found.');
  }

  const match = ariaLabel.match(/\d+/);
  if (!match) {
    throw new Error(`Inbox count not found in aria-label: ${ariaLabel}`);
  }

  return parseInt(match[0]);
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

