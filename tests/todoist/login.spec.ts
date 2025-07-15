import {test} from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { TasksPage } from '../../pages/tasks.page';

test('login and add task', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const tasksPage = new TasksPage(page);

  await loginPage.openLoginPage();
  await loginPage.login('justdoitqa2000@gmail.com', 'Qa12341234');
  await tasksPage.assertLoggedIn();
  await tasksPage.addTask('My first task', 'Interesting description');
  await tasksPage.logout();
});