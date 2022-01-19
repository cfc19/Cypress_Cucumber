const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps')
const faker = require('@faker-js/faker')
const login = require('../../support/pageObjects/login')
const inventory = require('../../support/pageObjects/inventory')
const shoppingCart = require('../../support/pageObjects/shoppingCart')
const checkout = require('../../support/pageObjects/checkout')

Given('I am on the Swag login page', () => {
    cy.visit('/')
})

Given('I login as a standard user', () => {
    login.attemptLogin('standard_user', 'secret_sauce')
})

When('I add the most expensive item and cheapest item', () => {
    inventory.sortInventoryBy(inventory.dropdownOptions.highToLow)
    inventory.addFirstAndLastItemToCart()
})

Then('the basket should contain the items', () => {
    shoppingCart.clickShoppingCartBtn()
    shoppingCart.ensureCheckoutContainsMostExpensiveItemAndCheapest()
    shoppingCart.clickCheckoutBtn()
})

Then('I can complete the purchase', () => {
    checkout.enterCustomerDetailsAndCheckout(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.address.zipCode(),
    )
})
