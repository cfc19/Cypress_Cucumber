module.exports = { 
    elements: {
        sortByDropdown: '[data-test="product_sort_container"]',
        allAddToCartBtns: '[data-test*="add-to-cart"]',
        basketBadge: '.shopping_cart_link'
    }, 

    dropdownOptions: {
        lowToHigh: 'lohi'
    },

    sortInventoryBy: function (dropdownOption) {
        cy.get(this.elements.sortByDropdown).select(dropdownOption)
    },

    addFirstAndLastItemToCart: function () {
        cy.get('[data-test*="add-to-cart"]').first().click()
        cy.get('[data-test*="add-to-cart"]').last().click()
    }
}