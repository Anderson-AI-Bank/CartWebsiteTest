const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage");
const baseUrl = 'https://www.saucedemo.com/';

test('Test to verify login page for cart website', async({page})=>{
const loginPage = new LoginPage(page, baseUrl);
const userName = "standard_user";
const password = "secret_sauce";

await loginPage.goTo();
await loginPage.ValidLogIn(userName,password);

});

