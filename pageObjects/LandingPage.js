class LandingPage{
    constructor(page){
        this.product = page.locator('.inventory_list'); //(This is how you write an element with class attribute)
        this.productText = page.locator('.inventory_item_name'); //(Text for all products on page)
        this.burgerMenu = page.locator('[id*=react-burger-menu-btn]')
        this.shoppingCardLink = page.locator('.shopping_cart_link')
        this.AddtoCartBtn = paeg.locator('.btn btn_primary btn_small btn_inventory');
    }

    async searchProduct(productName){
        const titles = await this.productText
    }
}