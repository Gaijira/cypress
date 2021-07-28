/// <reference types='Cypress' />

describe('Verify checkboxes via webdriveruni', () => {
    beforeEach(()=>{
        cy.navigateTo_WebdriverUni_Checkbox_Page()
    })
    it('Check and validate checkbox is checked', () => {
        cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').as('option-1')
    })
    it('Uncheck and validate checkbox is unchecked', () => {

        cy.get('#checkboxes label:nth-child(5)').as('option-3')
        cy.get('@option-3').should('not.be.checked')
    })
    it('Check multiple checkboxes', () => {
        cy.get('input[type=checkbox]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('Click on every radio button', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[value="green"]').check();
        cy.get('[value="blue"]').check();
        cy.get('[value="yellow"]').check();
        cy.get('#radio-buttons > [value="orange"]').check();
        cy.get('[value="purple"]').check();
        /* ==== End Cypress Studio ==== */
    });
})