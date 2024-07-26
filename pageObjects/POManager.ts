import { Page } from '@playwright/test';
import { LandingPage } from './LandingPage';
import { LoginPage } from './LoginPage';
import { CartPage } from './CartPage';

class POManager {
  private page: Page;
  private landingPage: LandingPage;
  private loginPage: LoginPage;
  private cartPage: CartPage;

  constructor(page: Page) {
    this.page = page;
    this.landingPage = new LandingPage(page);
    this.loginPage = new LoginPage(page);
    this.cartPage = new CartPage(page);
  }

  getLandingPage(): LandingPage {
    return this.landingPage;
  }

  getLoginPage(): LoginPage {
    return this.loginPage;
  }
  getCartPage(): CartPage {
    return this.cartPage;
  }
}

export { POManager };
