import Autostore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import Autostore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'

/// <reference types='Cypress' />

describe('Add multiple items to cart', () => {

    const autoStoreHomePage = new Autostore_Homepage_PO()
    const autoStoreHairCare = new Autostore_HairCare_PO()

    before(() => {
        cy.fixture('products').then((data) => {
            globalThis.data = data
        })
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    beforeEach(() => {
        autoStoreHomePage.accessHomepage()
        autoStoreHomePage.clickOn_HairCare_Link()
    })
    it('Add specific product to cart', () => {
        autoStoreHairCare.addHairCareProductsToCart()
    })
})