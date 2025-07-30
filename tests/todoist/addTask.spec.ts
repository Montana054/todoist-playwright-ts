import {expect, test} from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { TasksPage } from '../../pages/tasks.page';
import { BasePage } from '../../pages/base.page';

test.describe('Sprint 1: Add Task with Due Date', ()=> {
    test.beforeEach(async({ page })=> {
        const loginPage = new LoginPage(page);
        await loginPage.openLoginPage();
        await loginPage.login('justdoitqa2000@gmail.com', 'Qa12341234')
    })

    test.afterEach(async({page}) => {
        const tasksPage = new TasksPage(page);
        await tasksPage.logOut()
    })

    test('TC-001: Add task with Today date', async ({page})=>{
        const tasksPage = new TasksPage(page);
        const basePage = new BasePage(page);
        const initialCount = await basePage.getInboxCount();
        await tasksPage.addTask('My first task', 'Interesting description', 'Quick');
        const updatedCount = await basePage.getInboxCount();
        expect(updatedCount).toBe(initialCount + 1);
    })

    test('TC-002: Add Task with Due Date from Calendar', async({page}) => {
        const tasksPage = new TasksPage(page);
        const basePage = new BasePage(page);
        const initialCount = await basePage.getInboxCount();
        await tasksPage.addTask('My second task', 'select date from Calendar', 'calendar', '1 jan');
        const updatedCount = await basePage.getInboxCount();
        expect(updatedCount).toBe(initialCount + 1);
    })

    test('TC-005: Cancel Task Creation', async ({page}) => {
        const taskPage = new TasksPage(page);
        const basePage = new BasePage(page);
        const initialCount = await basePage.getInboxCount();
        await taskPage.canceltaskCreation('My first Cancel task', 'Simple description');
        const updatedCount = await basePage.getInboxCount();
        expect(updatedCount).toBe(initialCount);
    })

})