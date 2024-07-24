class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("[id*='username']");
    this.password = page.locator("[id*='password']");
    this.signInButton = page.locator("login-button");
    this.pageLogo = page.locator(
      '//div[@class="login_logo" and text()="Swag Labs"]',
    );
  }
  async goTo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async enterLoginDetails(userName, password) {
    await this.userName.type(userName);
    await this.password.type(password);
  }

  async selectSignIn() {
    await this.signInButton.click();
  }
}
export default { LoginPage };
