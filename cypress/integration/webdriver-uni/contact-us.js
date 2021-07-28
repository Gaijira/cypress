import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types='Cypress' />

describe('Test Contact Us form via WebdriverUni', () => {
    Cypress.config('defaultCommandTimeout', 2000)

    const contact_UsPage = new Contact_Us_PO()
    const homepage_PO = new HomePage_PO()

    before(() => {
        cy.fixture('user-details').then((user) => {
            globalThis.user = user
        })
    })

    beforeEach(() => {
        homepage_PO.visitHomepage()
        homepage_PO.clickOn_ContactUs_Button()
    })

    it('Should be able to submit a successsfull submission via contact us form', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us')
        contact_UsPage.contactFormSubmission(Cypress.env('first_name'), user.last_name, user.email, 'test', 'h1', 'Thank You for your Message!')
    })

    it('Should not be able to submit a successsfull submission via contact us form as all fields are required', () => {
        if(Cypress.isBrowser('firefox')){

        } else {
        contact_UsPage.contactFormSubmission(user.first_name, user.last_name, ' ', 'test', 'body', 'Error: Invalid email address')

        }
    })
})
