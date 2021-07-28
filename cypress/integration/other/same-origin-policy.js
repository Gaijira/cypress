/// <reference types='Cypress' />

describe('Cypress web security',()=>{
    it.skip('Validate visiting two defferent domains',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        // cy.visit('https://automationteststore.com/')

    })

    it('Validate visiting two defferent domains through a link',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
    })
})