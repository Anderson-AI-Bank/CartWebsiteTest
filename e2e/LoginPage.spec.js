const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage").default;

test("Test to verify login page for cart website", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.enterLoginDetails(userName, password);
  await loginPage.selectSignIn();
});
