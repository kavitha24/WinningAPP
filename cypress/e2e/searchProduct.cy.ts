import SearchProduct from "../support/pageObjects/SearchProduct";
describe("Search Product", () => {
  beforeEach(() => {
    SearchProduct.laucnhMagento();
  });
  it("login to Magento and search product", () => {
    SearchProduct.enterSearchValue("tee ", 0);
  });
  it("login to Magento and verify error for no product found", () => {
    SearchProduct.noProduct("eretretretrete");
  });
});
