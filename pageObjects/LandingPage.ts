import { Page, Locator } from '@playwright/test';

class LandingPage {
  private products: Locator;
  private productText: Locator;
  private burgerMenu: Locator;
  private shoppingCardLink: Locator;
  private addToCartBtn: Locator;
  private addSlbBackPack: Locator;
  private productDesc: Locator;
  private page: any; 

  constructor(page: Page) {
    this.products = page.locator('.inventory_container');
    this.productText = page.locator('.inventory_item_name');
    this.burgerMenu = page.locator('[id*=react-burger-menu-btn]');
    this.shoppingCardLink = page.locator('[id*=shopping_cart_container]');
    this.addToCartBtn = page.locator('.btn.btn_primary.btn_small.btn_inventory');
    this.addSlbBackPack = page.locator('[id*=add-to-cart-sauce-labs-backpack]')
    this.productDesc = page.locator('.inventory_item_description')
  }
  
  async searchProductAndAddToCart(productName: string): Promise<void> {
    const titles: string[] = await this.productText.allTextContents();
    console.log(titles);
    const count: number = await this.products.count();

for (let i = 0; i < count; ++i) {
const productText: string | null = await this.products.nth(i).locator('.inventory_item_name').textContent();
if (productText?.trim() === productName) {
        // Add to cart
await this.products.nth(i).locator('text="Add to cart"').click();
        break;
      }
    }
  }
  
async addSauceLabsBackpackToCart(): Promise<void> {
await this.addSlbBackPack.click();
  }

async navigateToCart(): Promise<void> {
await this.shoppingCardLink.click();
  }
  async selectaddToCartBtn(): Promise<void> {
    await this.addToCartBtn.click();
  }
  async waitforLandingPage(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}

export { LandingPage };
