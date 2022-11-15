/// <reference types="cypress"/>

import HomePage from '../pages/home-page'
import CreateAccountPage from '../pages/create-account-page'
import AddressBookPage from '../pages/address-book-page'
import MyAccountPage from '../pages/my-account-page'

const homePage = new HomePage()
const createAccountPage = new CreateAccountPage()
const myAccountPage = new MyAccountPage()
const addressBookPage = new AddressBookPage()

describe('Magento Software Testing', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })

  it('Adicionar novo endereço à conta nova', () => {
    homePage.selectCreateAccount()
    createAccountPage.createAccount()
    myAccountPage.selectEditAddress()
    addressBookPage.addNewAddress()
    addressBookPage.adressBookPageAssertions() //final assertions
    addressBookPage.selectMyAccountPage()
  })
})