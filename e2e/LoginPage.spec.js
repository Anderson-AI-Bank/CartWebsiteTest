const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage");

test("Test to verify login page for cart website", async ({page}) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const loginPage = new LoginPage(page);

  await loginPage.goTo();

});

