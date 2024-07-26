import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';

test.describe('Login Page Tests', () => {
  let page: Page;
  let loginPage: LoginPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.goTo();
  });

  test.afterAll(async () => {
    await page.close();
 
  });

  test('should login successfully', async () => {
    await loginPage.enterLoginDetails('standard_user', 'secret_sauce');
    await loginPage.selectSignIn();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    const currentUrl = page.url();
    expect(currentUrl).toBe('https://www.saucedemo.com/inventory.html');
  });

  test('should show error for invalid login', async () => {
    await loginPage.goTo();
    await loginPage.enterLoginDetails('invalid_user', 'invalid_password');
    await loginPage.selectSignIn();
    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface');
  });
});
