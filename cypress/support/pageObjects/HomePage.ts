class HomePage {
  header = ".app_logo";
  cartLink = ".shopping_cart_link";
  sortProduct = ".select_container";
  title = ".title";
  shoppingCart = ".shopping_cart_badge";
  twitter = ".social_twitter";
  facebook = ".social_facebook";
  linkedin = ".social_linkedin";
  menu = "#react-burger-menu-btn";
  logoutBtn = "#logout_sidebar_link";
  items = ".inventory_item";
  addTocartBoltTshirt = "#add-to-cart-sauce-labs-bolt-t-shirt";
  addTocartBackPack = "#add-to-cart-sauce-labs-backpack";
  addTocartBikeLght = "#add-to-cart-sauce-labs-bike-light";
  addTocartOneSie = "#add-to-cart-sauce-labs-onesie";
  addTocartJacket = "#add-to-cart-sauce-labs-fleece-jacket";
  removeTocartJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';
  addTocartTshirt =
    '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]';

  verifyUrl(url: string) {
    cy.url().should("eq", url);
  }
  verifyTitle() {
    cy.get(this.header).should("exist");
  }
  verifyCart() {
    cy.get(this.cartLink).should("exist");
  }
  verifyProductTitle() {
    cy.get(this.title).should("have.text", "Products");
  }
  clickSort(value: string) {
    cy.get(this.sortProduct).click();
    cy.get("select").select(value);
  }
  verifySort(locator: string) {
    cy.get(locator).then((items) => {
      const unsortedItems = items
        .map((index, html) => Cypress.$(html).text())
        .get();
      const sortedItems = unsortedItems.slice().sort();
      expect(unsortedItems, "Items are sorted").to.deep.equal(sortedItems);
    });
  }
  verifyAllProductLoads() {
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg",
      {
        statusCode: 200,
      }
    );
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b0.jpg",
      {
        statusCode: 200,
      }
    );
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c2599ac5.jpg",
      {
        statusCode: 200,
      }
    );
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg",
      {
        statusCode: 200,
      }
    );
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/red-onesie-1200x1500.2ec615b2.jpg",
      {
        statusCode: 200,
      }
    );
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/red-tatt-1200x1500.30dadef4.jpg",
      {
        statusCode: 200,
      }
    );
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/cart3x.3669d74a.svg",
      {
        statusCode: 200,
      }
    );
    cy.intercept(
      "GET",
      "https://www.saucedemo.com/static/media/filter3x.2943df5b.svg",
      {
        statusCode: 200,
      }
    );
  }
  verifyAddToCart(locator: string) {
    cy.get(locator).should("exist");
  }
  verifyRemovecart(locator: string) {
    cy.get(locator).should("exist");
  }
  clickaddToCart(index: number) {
    cy.contains("Add to cart").eq(index).click();
  }
  clickRemove() {
    cy.contains("Remove").click();
  }
  clickShoppingCart() {
    cy.get(this.shoppingCart).click();
  }
  verifyCartPage() {
    cy.url().should("eq", "https://www.saucedemo.com/cart.html");
  }
  verifyShoppingCart(value: number) {
    cy.get(this.shoppingCart).contains(value).should("exist");
  }
  verifyImage(img: string) {
    return cy.get(`img[src="${img}"]`);
  }
  verifyTheProductLoaded(img: string, price: number) {
    cy.get(`img[alt="${img}"]`).should("exist");
    cy.get(`.inventory_item_name:contains(${img})`).should("exist");
    cy.get(`.inventory_item_price:contains(${price})`).should("exist");
  }
  verifyFooter() {
    cy.contains(
      "2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
    ).should("exist");
  }
  verifyFooterTwitter() {
    cy.get(this.twitter).should("exist");
  }
  verifyFooterFacebook() {
    cy.get(this.facebook).should("exist");
  }
  verifyFooterLinkedin() {
    cy.get(this.linkedin).should("exist");
  }
  logout() {
    cy.get(this.menu).click();
    cy.get(this.logoutBtn).click();
  }
  verifyNoOfProductLoded(count: number) {
    cy.get(this.items).its("length").should("eq", 6);
  }
}
export default new HomePage();
