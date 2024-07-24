class LoginPage {

constructor ()
{
    this.page = page;
    userName = this.userName.getByTestId ('username');
    password = this.password.getByTestId('password');
    signInButton = this.signInButton.getByTestId('login-button');
    pageLogo = this.locator(locator = page.locator('//div[@class="login_logo" and text()="Swag Labs"]'));
}

async goTo()
{
    await this.page.goTo("https://www.saucedemo.com/")
}

async ValidLogIn(userName,password)
{
    await this.userName.type(userName);
    await this.password.type(password);
    await this.signInButton.click();
}

}
module.exports = {LoginPage};