class LandingPage {
  constructor(page) {
    this.products = page.locator(".inventory_list"); //(This is how you write an element with class attribute)
    this.productsText = page.locator(".inventory_item_name"); //(Text for all products on page)
    this.burgerMenu = page.locator("[id*=react-burger-menu-btn]");
    this.shoppingCardLink = page.locator(".shopping_cart_link");
    this.AddtoCartBtn = page.locator(
      ".btn btn_primary btn_small btn_inventory",
    );
  }

  async searchProductAddCart(productName) {
    const titles = await this.productsText.allTextContents();
    console.log(titles);
    const count = await this.products.count();
    for (let i = 0; i < count; ++i) {
      if (
        (await this.products.nth(i).locator("bike").textContent()) ===
        productName
      ) {
        //add to cart
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }
  async navigateToCart() {
    await this.shoppingCardLink.click();
  }
  
}
export default { LandingPage };
