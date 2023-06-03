import HomePage from "./HomePage";

const error = ".error-button";
const url = "https://www.saucedemo.com/inventory.html";
class LoginCredentials {
  standardLogin() {
    cy.loginSauceDemo("standard_user", "secret_sauce");
  }
  verifyCartLoads() {
    HomePage.verifyAddToCart(HomePage.addTocartBackPack);
    HomePage.verifyAddToCart(HomePage.addTocartBikeLght);
    HomePage.verifyAddToCart(HomePage.addTocartBoltTshirt);
    HomePage.verifyAddToCart(HomePage.addTocartJacket);
    HomePage.verifyAddToCart(HomePage.addTocartTshirt);
    HomePage.verifyAddToCart(HomePage.addTocartOneSie);
  }
  verifyPrice() {
    HomePage.verifyTheProductLoaded("Sauce Labs Backpack", 29.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Bike Light", 9.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Bolt T-Shirt", 15.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Fleece Jacket", 49.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Onesie", 7.99);
    HomePage.verifyTheProductLoaded("Test.allTheThings() T-Shirt (Red)", 15.99);
  }
  verifyProductsLoads() {
    HomePage.verifyUrl(url);
    HomePage.verifyAllProductLoads();
    HomePage.verifyProductTitle();
    HomePage.verifyTitle();
    HomePage.verifyCart();
    HomePage.verifyFooter();
    HomePage.verifyFooterFacebook();
    HomePage.verifyFooterLinkedin();
    HomePage.verifyFooterTwitter();
    HomePage.verifyNoOfProductLoded(6);
  }
  problemUser() {
    cy.loginSauceDemo("problem_user", "secret_sauce");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Change your password");
    });
    HomePage.verifyUrl(url);
  }
  lockedUser() {
    cy.loginSauceDemo("locked_out_user", "secret_sauce");
    cy.get(error).should("exist");
  }
  performanceGlitchUser() {
    cy.loginSauceDemo("performance_glitch_user", "secret_sauce");
    cy.url({ timeout: 30000 }).should("eq", url);
    HomePage.verifyAllProductLoads();
    HomePage.verifyProductTitle();
    HomePage.verifyTitle();
    HomePage.verifyCart();
    HomePage.verifyFooter();
    HomePage.verifyFooterFacebook();
    HomePage.verifyFooterLinkedin();
    HomePage.verifyFooterTwitter();
    HomePage.verifyNoOfProductLoded(6);
    HomePage.verifyImage("/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
    HomePage.verifyImage("/static/media/bike-light-1200x1500.37c843b0.jpg");
    HomePage.verifyImage("/static/media/bolt-shirt-1200x1500.c2599ac5.jpg");
    HomePage.verifyImage("/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg");
    HomePage.verifyImage("/static/media/red-onesie-1200x1500.2ec615b2.jpg");
    HomePage.verifyImage("/static/media/red-tatt-1200x1500.30dadef4.jpg");

    HomePage.verifyTheProductLoaded("Sauce Labs Backpack", 29.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Bike Light", 9.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Bolt T-Shirt", 15.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Fleece Jacket", 49.99);
    HomePage.verifyTheProductLoaded("Sauce Labs Onesie", 7.99);
    HomePage.verifyTheProductLoaded("Test.allTheThings() T-Shirt (Red)", 15.99);
    HomePage.verifyAddToCart(HomePage.addTocartBackPack);
    HomePage.verifyAddToCart(HomePage.addTocartBikeLght);
    HomePage.verifyAddToCart(HomePage.addTocartBoltTshirt);
    HomePage.verifyAddToCart(HomePage.addTocartJacket);
    HomePage.verifyAddToCart(HomePage.addTocartTshirt);
    HomePage.verifyAddToCart(HomePage.addTocartOneSie);
  }
}
export default new LoginCredentials();
