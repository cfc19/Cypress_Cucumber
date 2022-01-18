module.exports = {
    elements: {
        firstNameField: '[data-test="firstName"]',
        lastNameField: '[data-test="lastName"]',
        postcodeField: '[data-test="postalCode"]',
        continueBtn: '[data-test="continue"]',
        finishBtn: '[data-test="finish"]',
    }, 

    expectedText: {
        orderConfirmationText: 'THANK YOU FOR YOUR ORDER'
    },

    enterCustomerDetailsAndCheckout: function (firstName, lastName, postcode) {
        cy.get(this.elements.firstNameField).type(firstName)
        cy.get(this.elements.lastNameField).type(lastName)
        cy.get(this.elements.postcodeField).type(postcode)
        cy.get(this.elements.continueBtn).click();
        cy.get(this.elements.finishBtn).click()
        cy.contains(this.expectedText.orderConfirmationText)
    }
}