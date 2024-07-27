import { test, expect, Page } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';

test.describe('Landing Page Tests', () => {
  let page: Page;
  let poManager: POManager;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    poManager = new POManager(page);
    await poManager.getLoginPage().goTo();
    await poManager.getLoginPage().logInAndSignin('standard_user', 'secret_sauce');
    
  });

  test('should add product to cart', async () => {
    const landingPage = poManager.getLandingPage();
    const cartPage = poManager.getCartPage();
    const cartItem = await page.locator('.cart_item .inventory_item_name').allTextContents();
    await page.waitForSelector('.inventory_list');
    await landingPage.addSauceLabsBackpackToCart();
    await landingPage.navigateToCart()
    await page.waitForLoadState();
    await cartPage.selectitemName();
 
  });

  test('should navigate to cart', async () => {
    const landingPage = poManager.getLandingPage();
    const CartPage = poManager.getCartPage();
    const currentUrl = page.url();
    await landingPage.navigateToCart();
    await page.waitForLoadState()
    expect(currentUrl).toBe('https://www.saucedemo.com/inventory.html'); 
  });
})