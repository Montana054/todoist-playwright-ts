import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  async openLoginPage() {
    await this.goTo('https://app.todoist.com/auth/login');
  }

  async login(email: string, password: string) {
    await this.fill('input[placeholder="Enter your email..."]', email);
    await this.fill('input[placeholder="Enter your password..."]', password);
    await this.click(this.page.getByRole('button', { name: 'Log in' }));
  }
}