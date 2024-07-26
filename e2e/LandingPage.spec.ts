import { test, expect, Page } from '@playwright/test';
import { LandingPage } from '../pageObjects/LandingPage';

test.describe('Landing Page Tests', () => {
  let page: Page;
  let landingPage: LandingPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    landingPage = new LandingPage(page);
    await page.goto('https://www.saucedemo.com/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should add product to cart', async () => {
    await landingPage.searchProductAddCart('Sauce Labs Bike Light');
    await landingPage.navigateToCart();

    const cartItem = await page.locator('.cart_item').textContent();
    expect(cartItem).toContain('Sauce Labs Bike Light');
  });

  test('should navigate to cart', async () => {
    await landingPage.navigateToCart();
    const cartUrl = page.url();
    expect(cartUrl).toBe('https://www.saucedemo.com/cart.html');
  });
});
