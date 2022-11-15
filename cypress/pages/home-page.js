/// <reference types="cypress" />

export default class HomePage {
    linkCreateAccount = '.panel li:last-child' // if possible, should change to a better selector

    selectCreateAccount () {
       cy.get(this.linkCreateAccount).should('be.visible').click()
    }
}