import { test, expect, Page } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';
import { stringify } from 'querystring';

test.describe('Login Page Tests', () => {
  let page: Page;
  let poManager: POManager;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    poManager = new POManager(page);
    await poManager.getLoginPage().goTo();
  });

  test('should login successfully', async () => {
    const loginPage = poManager.getLoginPage();
    await loginPage.enterLoginDetails('standard_user', 'secret_sauce');
    await loginPage.btnSignIn();
    const currentUrl = page.url();
    expect(currentUrl).toBe('https://www.saucedemo.com/inventory.html');
  });

  test.skip('should show error for invalid login', async () => {
    const loginPage = poManager.getLoginPage();
    const errorText = loginPage.getErrorMessage();
    await loginPage.goTo();
    await loginPage.enterLoginDetails('Test', 'secret_sauce');
    await loginPage.btnSignIn();
    await page.waitForLoadState();
    expect.soft(errorText).toContain('Epic sadface');
  });
});
