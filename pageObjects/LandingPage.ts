import { Page, Locator } from '@playwright/test';

class LandingPage {
  private products: Locator;
  private productsText: Locator;
  private burgerMenu: Locator;
  private shoppingCardLink: Locator;
  private addToCartBtn: Locator;

  constructor(page: Page) {
    this.products = page.locator('.inventory_list');
    this.productsText = page.locator('.inventory_item_name');
    this.burgerMenu = page.locator('[id*=react-burger-menu-btn]');
    this.shoppingCardLink = page.locator('.shopping_cart_link');
    this.addToCartBtn = page.locator('.btn.btn_primary.btn_small.btn_inventory');
  }

  async searchProductAddCart(productName: string): Promise<void> {
    const titles = await this.productsText.allTextContents();
    console.log(titles);
    const count = await this.products.count();
    for (let i = 0; i < count; ++i) {
      if (
        (await this.products.nth(i).locator('.inventory_item_name').textContent()) ===
        productName
      ) {
        // Add to cart
        await this.products.nth(i).locator('text=Add to cart').click();
        break;
      }
    }
  }

  async navigateToCart(): Promise<void> {
    await this.shoppingCardLink.click();
  }
  async selectaddToCartBtn(): Promise<void> {
    await this.addToCartBtn.click();
  }
}

export { LandingPage };
