/// <reference types="cypress" />

export default class MyAccountPage {
    linkEditAddress = '[data-ui-id="default-billing-edit-link"]'

    selectEditAddress () {
       cy.get(this.linkEditAddress).should('be.visible').click()
    }
}