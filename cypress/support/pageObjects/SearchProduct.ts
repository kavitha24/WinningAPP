class SearchProduct {
  search = "#search";
  product = ".product-image-container";
  laucnhMagento() {
    cy.visit("https://magento.softwaretestingboard.com");
  }
  noProduct(value: string) {
    cy.get(this.search).type(`${value}{enter}`);
    cy.contains("Your search returned no results.").should("exist");
  }
  enterSearchValue(value: string, index: number) {
    cy.intercept("GET", "https://magento.softwaretestingboard.com/", {
      statusCode: 200,
    });
    cy.get(this.search).type(`${value}`);
    cy.intercept(
      "GET",
      `/https://magento.softwaretestingboard.com/search/ajax/suggest/?q=+${value}/.*`,
      {
        statusCode: 200,
      }
    );
    cy.get(`li:contains("${value}")`).eq(index).click();
    cy.intercept(
      "GET",
      `https://magento.softwaretestingboard.com/catalogsearch/result/`,
      {
        statusCode: 200,
        query: {
          q: value,
        },
      }
    );
    cy.contains(`Search results for: '${value}`).should("exist");
    cy.get(this.product).eq(0).should("exist");
  }
}
export default new SearchProduct();
