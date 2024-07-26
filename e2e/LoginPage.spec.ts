import { test, expect, Page } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';

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

  test('should show error for invalid login', async () => {
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.enterLoginDetails('invalid_user', 'invalid_password');
    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface');
  });
});
