import {expect, test} from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { TasksPage } from '../../pages/tasks.page';
import { BasePage } from '../../pages/base.page';
import { Logger } from '../../utils/logger';

test.describe('Sprint 1: Add Task with Due Date', ()=> {
    test.beforeEach(async({ page }, testInfo)=> {
        const testName = testInfo.title
        Logger.log(`--- START TEST: ${testName} ---`)
        const loginPage = new LoginPage(page);
        await loginPage.openLoginPage();
        await loginPage.login('justdoitqa2000@gmail.com', 'Qa12341234')
    })

    test.afterEach(async({page}, testInfo) => {
        const testName = testInfo.title
        Logger.log(`--- END TEST: ${testName} ---`)
        const tasksPage = new TasksPage(page);
        await tasksPage.logOut()
    })

    test('TC-001: Add task with Today date', async ({page})=>{
        const tasksPage = new TasksPage(page);
        const basePage = new BasePage(page);
        const inboxCountBefore = await basePage.getInboxCount();
        await test.step('Create task with Today date', async () =>{
            await tasksPage.addTask('My first task', 'Interesting description', 'quick');
        });
        const inboxCountAfter = await basePage.getInboxCount();
        await test.step('Check taht task count increased', async () =>{
            expect(inboxCountAfter).toBe(inboxCountBefore + 1);
        });
   })

    test('TC-002: Add Task with Due Date from Calendar', async({page}) => {
        const tasksPage = new TasksPage(page);
        const basePage = new BasePage(page);
        const inboxCountBefore = await basePage.getInboxCount();
        await test.step('Create task with due date from calendar', async () =>{
            await tasksPage.addTask('My second task', 'select date from Calendar', 'calendar', '1 jan');
        });
        const inboxCountAfter = await basePage.getInboxCount();
        await test.step('Check taht task count increased', async () =>{
            expect(inboxCountAfter).toBe(inboxCountBefore + 1);
        });
    })

    test('TC-005: Cancel Task Creation', async ({page}) => {
        const taskPage = new TasksPage(page);
        const basePage = new BasePage(page);
        const inboxCountBefore = await basePage.getInboxCount();
        await test.step('Check Cancel Task Creation', async () =>{
            await taskPage.canceltaskCreation('My first Cancel task', 'Simple description');
        });
        const inboxCountAfter = await basePage.getInboxCount();
        await test.step('Check taht task count same', async () =>{
            expect(inboxCountAfter).toBe(inboxCountBefore);
        });
        
    })

    test('TC-006: Create task with empty tittle', async({page}) => {
        const taskPage = new TasksPage(page);
        const basePage = new BasePage(page);
        const inboxCountBefore = await basePage.getInboxCount();
        await test.step('Try to create task with empty title', async () =>{
            await taskPage.createEmptyTask();
        });
        await test.step('Check that submit button is disable', async () =>{
            const isdisabled = await basePage.isDisabled(taskPage.submitButton);
        expect(isdisabled).toBe(true);
        });
        await taskPage.interruptCreateTask();
        const inboxCountAfter = await basePage.getInboxCount();
        await test.step('Check taht task count same', async () =>{
            expect(inboxCountAfter).toBe(inboxCountBefore);
        });
    })

})