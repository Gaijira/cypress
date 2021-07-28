/// <reference types='Cypress' />

describe('Verifying variables, cypress commands and jquery commands', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php')
        cy.get('#categorymenu > nav > ul').contains('Hair Care').click()
    })
    it('Log info of all haircare products', () => {
        cy.get('.fixed_wrapper  .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + 'is ' + $el.text())
        })
    })
    it('Add specific product to cart', () => {
        cy.selectProduct('Curls to straight Shampoo')

    })
    it('Add another product to cart', () => {
        cy.selectProduct('Seaweed Conditioner')
    })
    it('Add one more product to cart', () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })
})