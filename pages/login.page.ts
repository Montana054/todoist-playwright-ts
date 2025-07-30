import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly emailInput = 'input[placeholder="Enter your email..."]';
  readonly passwordInput = 'input[placeholder="Enter your password..."]';
  readonly loginButton = this.page.getByRole('button', { name: 'Log in' });
  readonly loginUrl = 'https://app.todoist.com/auth/login';

  constructor(page: Page){
    super(page)
  }

  async openLoginPage(): Promise<void> {
    await this.goTo(this.loginUrl);
  }

  async login(email: string, password: string): Promise<void> {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
    await expect(this.page).toHaveURL(/\/app/);
  }
  
}