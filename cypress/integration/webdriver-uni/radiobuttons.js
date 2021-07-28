/// <reference types='Cypress' />

describe('Verify radiobuttons via webdriveruni', () => {
    before(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })
    it('Check and validate radiobutton is checked', () => {
        cy.get('#radio-buttons').find('input[type=radio]').eq(0).check().should('be.checked')
    })

    it('Validate the states of specific radiobuttons', () => {
        cy.get('#radio-buttons-selected-disabled').find('input[type=radio]').eq(0).should('not.be.checked')
        cy.get('[value="cabbage"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
    })
})