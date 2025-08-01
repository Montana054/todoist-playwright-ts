import { expect } from '@playwright/test';
import { BasePage } from './base.page';
import { promises } from 'dns';

export class TasksPage extends BasePage {
  readonly addTaskButton = this.page.getByRole('button', { name: 'Add task' }).nth(1);
  readonly taskNameInput = this.page.getByRole('textbox', { name: 'Task name' });
  readonly taskDescriptionInput = this.page.getByRole('textbox', { name: 'Description' });
  readonly remuveDateButton = this.page.getByRole('button', { name: 'Remove date' });
  readonly typeDateButton = this.page.getByRole('button', { name: 'Date' });
  readonly typeTodayButton = this.page.getByRole('button', { name: 'Today' });
  readonly submitButton = '[data-testid="task-editor-submit-button"]';
  readonly avatarButton = `button[id=':r0:']`;
  readonly logOutButton = 'text=Log out';
  readonly typeDateInput = this.page.getByPlaceholder('Type a date');
  readonly dataSchedulerInfo = this.page.locator('//div[@class="scheduler-preview-date-info"]');
  readonly cancelButton = this.page.getByRole('button', { name: 'Cancel'});
  readonly discardButton = this.page.getByRole('button', { name: 'Discard' });
  
  
 async canceltaskCreation(title: string, description: string): Promise<void>{
    await this.click(this.addTaskButton);
    await this.fill(this.taskNameInput, title);
    await this.fill(this.taskDescriptionInput, description);
    await this.click(this.cancelButton);
    await this.click(this.discardButton)
 }

  async addTask(title: string, description: string, dueData: string, date?: string): Promise<void> {
    await this.click(this.addTaskButton);
    await this.fill(this.taskNameInput, title);
    await this.fill(this.taskDescriptionInput, description);
      
    if (dueData === 'quick') {
      await this.click(this.remuveDateButton);
      await this.click(this.typeDateButton);
      await this.click(this.typeTodayButton);
    }
      else if (dueData === 'calendar'){
        await this.click(this.remuveDateButton);
        await this.click(this.typeDateButton);
        await this.typeDateInput.fill(date!);
        await this.click(this.dataSchedulerInfo);
      }  
    await this.click(this.submitButton);
  }

  async logOut() {
    await this.click(this.avatarButton);
    await this.click(this.logOutButton);
  }
}