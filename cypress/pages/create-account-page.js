/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

export default class CreateAccountPage {
    randomFirstName = faker.name.firstName()
    randomLastName = faker.name.lastName()
    randomEmail = faker.internet.email()
    randomPassword = faker.internet.password(12,false,/[A-Za-z0-9!-)]/,'1!qQ')

    inputFirstName = '#firstname'
    inputLastName = '#lastname'
    inputEmail = '#email_address'
    inputPassword = '#password'
    inputConfirmPassword = '#password-confirmation'
    btnCreateAnAccount = 'button[title="Create an Account"]'

    createAccount () {
       cy.get(this.inputFirstName).should('be.visible').type(this.randomFirstName)
       cy.get(this.inputLastName).should('be.visible').type(this.randomLastName)
       cy.get(this.inputEmail).should('be.visible').type(this.randomEmail)
       cy.get(this.inputPassword).should('be.visible').type(this.randomPassword)
       cy.get(this.inputConfirmPassword).should('be.visible').type(this.randomPassword)
       cy.get(this.btnCreateAnAccount).should('be.visible').click()
    }
}