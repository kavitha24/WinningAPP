export {};
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      launchMagneto(): Chainable<Element>;
      launchSaucedemo(): Chainable<Element>;
      interceptHomePage(): Chainable<Element>;
      loginSauceDemo(userName: string, password: string): Chainable<Element>;
    }
  }
}
Cypress.Commands.add("launchMagneto", () => {
  cy.visit("https://magento.softwaretestingboard.com");
});

Cypress.Commands.add("launchSaucedemo", () => {
  cy.on("window:before:load", (win) => {
    console.log("WINDOW BEFORE LOAD", win.location.href);
    if (win.location.href === "https://www.saucedemo.com") {
      win.stop();
    }
  });
  cy.visit("/");
});
Cypress.Commands.add("interceptHomePage", () => {
  cy.visit("https://www.saucedemo.com");
});
Cypress.Commands.add("loginSauceDemo", (userName: string, password: string) => {
  cy.get('[data-test="username"]').type(userName);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});
