/// <reference types='Cypress' />

describe('Interract with dropdown lists via webdriveruni', () => {
    it('Select specific values via select dropdown lists', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select('javascript').contains('JavaScript')

        cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-2').select('TestNG').contains( 'TestNG')

    })

})

