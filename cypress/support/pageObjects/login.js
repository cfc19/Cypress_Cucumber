module.exports = {
    elements: {
        usernameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginBtn: '[data-test="login-button"]',
    },

    attemptLogin: function (username, password) {
        cy.get(this.elements.usernameField).type(username)
        cy.get(this.elements.passwordField).type(password)
        cy.get(this.elements.loginBtn).click()
    },
}
