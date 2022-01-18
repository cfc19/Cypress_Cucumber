import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import faker from "@faker-js/faker"
import login from "../../support/pageObjects/login"
import inventory from "../../support/pageObjects/inventory"
import shoppingCart from "../../support/pageObjects/shoppingCart"
import checkout from "../../support/pageObjects/checkout"

Given('I am on the Swag login page', () => {
  cy.visit('/')
})

Given("I login as a standard user", () => {
  login.attemptLogin('standard_user', 'secret_sauce')
})

When("I add the most expensive item and cheapest item", () => {
    inventory.sortInventoryBy(inventory.dropdownOptions.lowToHigh)
    inventory.addFirstAndLastItemToCart()
})

Then("the basket should contain the items", () => {
    shoppingCart.clickShoppingCartBtn()
    shoppingCart.ensureCheckoutContainsItemsAndClickCheckout();
})

Then("I can complete the purchase", () => {
    checkout.enterCustomerDetailsAndCheckout(faker.name.firstName(), faker.name.lastName(), faker.address.zipCode())
})

