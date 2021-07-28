/// <reference types='Cypress' />

describe('Verify Autocomlete lists', () => {
    it('Select product in autocomplete list', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > *').each((el, index, list) => {
            const prod = el.text()
            const productToSelect = 'Avacado'

            if (prod === productToSelect) {
                el.click()
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list > *').each((el, index, list) => {
                const prod = el.text()
                const productToSelect = 'Garlic'

                if (prod === productToSelect) {
                    el.click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
            })

        })
    })
})
