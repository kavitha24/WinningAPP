import HomePage from "../support/pageObjects/HomePage";
import LoginCredentials from "../support/pageObjects/LoginCredentials";
describe("Verify Homepage loads all elements for standard login", () => {
  beforeEach(() => {
    cy.launchSaucedemo();
  });
  it("Login to sauceDemo with standard login and verify the Homepage is loading with all details", () => {
    LoginCredentials.standardLogin();
    LoginCredentials.verifyProductsLoads();
    LoginCredentials.verifyCartLoads();
    LoginCredentials.verifyPrice();
    HomePage.verifyImage("/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
    HomePage.verifyImage("/static/media/bike-light-1200x1500.37c843b0.jpg");
    HomePage.verifyImage("/static/media/bolt-shirt-1200x1500.c2599ac5.jpg");
    HomePage.verifyImage("/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg");
    HomePage.verifyImage("/static/media/red-onesie-1200x1500.2ec615b2.jpg");
    HomePage.verifyImage("/static/media/red-tatt-1200x1500.30dadef4.jpg");
  });
  it("Verify product can be added to cart", () => {
    LoginCredentials.standardLogin();
    HomePage.clickaddToCart(0);
    HomePage.clickaddToCart(0);
    HomePage.verifyShoppingCart(2);
    HomePage.clickRemove();
    HomePage.verifyShoppingCart(1);
    HomePage.clickShoppingCart();
    HomePage.verifyCartPage();
  });
  it("Verify Sort", () => {
    LoginCredentials.standardLogin();
    HomePage.clickSort("Name (A to Z)");
    HomePage.verifySort(".inventory_item_name");
  });
});
