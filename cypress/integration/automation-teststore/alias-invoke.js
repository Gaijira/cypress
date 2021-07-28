/// <reference types='Cypress' />

describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Log info of all haircare products', () => {
        cy.visit('https://automationteststore.com/index.php')
        cy.get('#categorymenu > nav > ul').contains('Hair Care').click()
        cy.get('.fixed_wrapper  .prdocutname').eq(0).invoke('text').as('productText')
        cy.get('@productText').its('length').should('be.gt',5)
        cy.get('@productText').should('include','Seaweed Conditioner')
    })
    it('Validates the number of elements on the homepage', () => {
        cy.visit('https://automationteststore.com/index.php')
        cy.get('.thumbnail').as('thumbs')
        cy.get('@thumbs').its('length').should('eq',16)
        cy.get('@thumbs').find('.productcart').invoke('attr','title').should('be.eq', 'Add to Cart')
    })
    it.only('Calculate total of normal and sale products', () => {
        cy.visit('https://automationteststore.com/index.php')
        cy.get('.thumbnail').as('thumbs')
        // cy.get('@thumbs').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        var itemsTotal = 0
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')

        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                itemPriceTotal += Number(itemPrice[i])
            }
        itemsTotal +=itemPriceTotal
        })
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('sellItemPrice')
        cy.get('@sellItemPrice').then(($item)=>{
            var sellItemPriceTotal = 0
            var sellItemPrice = $item.split('$');
            var i;
            for (i=0;i<sellItemPrice.length;i++){
                sellItemPriceTotal += Number(sellItemPrice[i])
            }
        itemsTotal +=sellItemPriceTotal
        cy.log(itemsTotal)   
        })
        .then(()=>{
            cy.log('Items total is: '+ itemsTotal)
            expect(itemsTotal).to.eq(616.7)
        })
    })
})

