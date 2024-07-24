const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage');


test.describe('Log into cartwebsite', ()=> test.beforeEach(async({ LoginPage}) => {
await LoginPage.goTo();
})

);
