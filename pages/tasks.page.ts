import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class TasksPage extends BasePage {
  async assertLoggedIn() {
    await expect(this.page).toHaveURL(/\/app/);
  }

  async addTask(title: string, description: string) {
    await this.click(this.page.getByRole('button', { name: 'Add task' }).nth(1));
    await this.fill(this.page.getByRole('textbox', { name: 'Task name' }), title);
    await this.fill(this.page.getByRole('textbox', { name: 'Description' }), description);
    await this.click(this.page.getByRole('button', { name: 'Remove date' }));
    await this.click(this.page.getByRole('button', { name: 'Date' }));
    await this.click(this.page.getByRole('button', { name: 'Today' }));
    await this.click('[data-testid="task-editor-submit-button"]');
    // await this.expectVisible(this.page.getByText('Task added to '));
  }

  async logout() {
    await this.click(`button[id=':r0:']`);
    await this.click('text=Log out');
  }
}