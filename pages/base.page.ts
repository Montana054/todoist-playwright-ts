import { Page, Locator, expect } from '@playwright/test';
import { waitForDebugger } from 'inspector';
import { Logger } from '../utils/logger';

export class BasePage{
  

  get inboxLink() {
    return this.page.getByRole('link', { name: /Inbox/ });
}

  constructor(protected page: Page){}
 async goTo(url: string){
    await this.page.goto(url);
 }

async getInboxCount(): Promise<number> {
  const inboxLink = this.page.locator('a[aria-label^="Inbox"]');
  const ariaLabel = await inboxLink.getAttribute('aria-label');

  if (!ariaLabel) {
    Logger.log('aria-label not found in inboxLink')
    throw new Error('Failed to get Inbox count: aria-label not found.');
  }

  const match = ariaLabel.match(/\d+/);
  if (!match) {
    Logger.log(`Culd not parse count from: ${ariaLabel}`)
    throw new Error(`Inbox count not found in aria-label: ${ariaLabel}`);
  }
  const count = parseInt(match[0]);
  Logger.log(`Inbox task count: ${count}`);
  return count;
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

  async isDisabled(selector: string | Locator): Promise<boolean> {
    if (typeof selector === 'string')
      {
      return await
      this.page.locator(selector).isDisabled();}
    else {
      return await selector.isDisabled();
    }
  }
}

