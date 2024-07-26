import { Page, Locator } from '@playwright/test';

class CartPage {
  private page: Page;
  private continueShopppingBtn: Locator;
  private itemDescription: Locator;
  private itemName: Locator;
  private itemPrice: Locator;
  private checkOutBtn: Locator;
  private cartListTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueShopppingBtn = page.locator("[id*='continue-shopping']");
    this.itemDescription = page.locator(".inventory_item_desc");
    this.itemName = page.locator('.inventory_item_name');
    this.itemPrice = page.locator(".item_pricebar");
    this.checkOutBtn = page.locator('[id*="checkout"]');
    this.cartListTable = page.locator('.cart_item');
  }

  async goTo(): Promise<void> {
    await this.continueShopppingBtn.click();
  }
  async selectitemDescription(): Promise<void> {
     this.itemDescription;
  }

  async selectitemName(): Promise<string | null> {
    return await this.itemName.textContent();
  }
  async selectCartListTable(): Promise<string[] | null> {
    return await this.cartListTable.allTextContents();
  }

  async selectItemPrice(): Promise<void> {
    this.itemPrice;
  }
  async selectCheckout(): Promise<void> {
    await this.checkOutBtn.click();
  }
}

export { CartPage };