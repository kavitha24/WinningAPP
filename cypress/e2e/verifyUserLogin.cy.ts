import HomePage from "../support/pageObjects/HomePage";
import LoginCredentials from "../support/pageObjects/LoginCredentials";
describe("SAUCEE DEMO USERLOGINS spec", () => {
  beforeEach(() => {
    cy.launchSaucedemo();
  });
  it("login to sauceDemo with locked login and verify the error", () => {
    LoginCredentials.lockedUser();
  });
  it("login to sauceDemo with standard login and verify the Homepage is loading with all details", () => {
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
  it("login to sauceDemo with problem login and verify the password alert and issue with removeCart", () => {
    LoginCredentials.problemUser();
    LoginCredentials.verifyProductsLoads();
    LoginCredentials.verifyCartLoads();
    LoginCredentials.verifyPrice();
    HomePage.verifyImage("/static/media/sl-404.168b1cce.jpg")
      .its("length")
      .should("eq", 6);
    HomePage.clickaddToCart(0);
    HomePage.verifyShoppingCart(1);
    HomePage.clickRemove();
    // remove doesn't delete cart
    HomePage.verifyShoppingCart(1);
    HomePage.logout();
  });
});
