/// <reference types='Cypress' />

describe('Validate webdriveruni homepage links',()=>{
    it('Validate visiting two defferent domains through a link',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        // cy.reload()
        cy.reload(true) //reload without cache
        cy.url().should('include', 'webdriveruniversity')

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','Login-Portal')
        cy.go('back')
        cy.url().should('include', 'webdriveruniversity')

        cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','To-Do-List')
    })
})