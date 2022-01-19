module.exports = {
    elements: {
        shoppingCart: '.shopping_cart_link',
        checkoutBtn: '[data-test="checkout"]'
    },
    expectedText: {
        lowestItemAmount: '$7.99',
        mostExpensiveItemAmount: '$49.99'
    },

    ensureCheckoutContainsMostExpensiveItemAndCheapest: function () {
        cy.contains(this.expectedText.lowestItemAmount)
        cy.contains(this.expectedText.mostExpensiveItemAmount)
    },

    clickCheckoutBtn: function () {
        cy.get(this.elements.checkoutBtn).click();
    },

    clickShoppingCartBtn: function () {
        cy.get(this.elements.shoppingCart).click()
    }

}