/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class AddressBookPage {
    randomPhoneNumber = faker.phone.number('501-###-###')
    randomStreet = faker.address.streetAddress(true)
    randomCity = faker.address.city()
    country = 'United States'
    randomZipCode = faker.address.zipCode()

    inputPhoneNumber = '#telephone'
    inputStreet = '#street_1'
    inputCity = '#city'
    inputCountry = '#country'
    inputStateProvince = '#region_id'
    inputZipCode = '#zip'
    btnSaveAdress = 'button[title="Save Address"]'
    titleAddressBook = '[data-ui-id="page-title-wrapper"]'
    addressBlock = 'address'
    linkMyAccount = '.nav.items li:first-child'

    addNewAddress() {
        cy.get(this.inputPhoneNumber).should('be.visible').type(this.randomPhoneNumber)
        cy.get(this.inputStreet).should('be.visible').type(this.randomStreet)
        cy.get(this.inputCity).should('be.visible').type(this.randomCity)
        cy.get(this.inputCountry).should('be.visible').select(this.country)
        cy.get(this.inputStateProvince + '> option').should('be.visible')                          // code for selecting a random state/province
            .then(listing => {
                const randomNumber = getRandomInt(0, listing.length - 1);                          // generates a random number between 0 and length-1.
                cy.get(this.inputStateProvince + '> option').eq(randomNumber).then(($select) => {  // chooses the state/province randomly
                    const text = $select.text()                                                    // selects the text of the previously chosen option
                    cy.get(this.inputStateProvince).select(text)                                   // selects the option from the list
                });
            })
        cy.get(this.inputZipCode).should('be.visible').type(this.randomZipCode)
        cy.get(this.btnSaveAdress).should('be.visible').click()
    }

    adressBookPageAssertions() {
        cy.get(this.titleAddressBook).should('have.text', 'Address Book')
        cy.get(this.addressBlock).should('contain.text', this.randomPhoneNumber)
        cy.get(this.addressBlock).should('contain.text', this.randomStreet)
        cy.get(this.addressBlock).should('contain.text', this.randomCity)
        cy.get(this.addressBlock).should('contain.text', this.country)
        cy.get(this.addressBlock).should('contain.text', this.randomZipCode)
    }

    selectMyAccountPage() {
        cy.get(this.linkMyAccount).should('be.visible').click()
    }
}