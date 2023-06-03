import HomePage from "../support/pageObjects/HomePage";
import LoginCredentials from "../support/pageObjects/LoginCredentials";
describe("SAUCEE DEMO Perfomance USERLOGINS spec", () => {
  beforeEach(() => {
    cy.launchSaucedemo();
  });
  it("login to sauceDemo with performance login and verify the user can login within 3secs", () => {
    LoginCredentials.performanceGlitchUser();
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
});
