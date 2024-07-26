import { Page, Locator } from '@playwright/test';

class LoginPage {
  private page: Page;
  private userName: Locator;
  private password: Locator;
  private signInButton: Locator;
  private pageLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("[id*='user-name']");
    this.password = page.locator("[id*='password']");
    this.signInButton = page.locator("#login-button");
    this.pageLogo = page.locator(
      '//div[@class="login_logo" and text()="Swag Labs"]',
    );
  }

  async goTo(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async enterLoginDetails(userName: string, password: string): Promise<void> {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.page.waitForLoadState('networkidle');
  }

  async selectSignIn(): Promise<void> {
    await this.signInButton.click();
  }
  async pageLogovisble(): Promise<void> {
    await this.pageLogo.isVisible();
  }
}

export { LoginPage };