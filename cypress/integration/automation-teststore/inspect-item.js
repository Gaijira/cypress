/// <reference types='Cypress' />

describe('Inspect Automation test store item',()=>{
    it('Click in the first item using item header',()=>{
        cy.visit('https://automationteststore.com/index.php')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })
    it.only('Click in the first item using item text',()=>{
        cy.visit('https://automationteststore.com/index.php')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){console.log('Selected item - '+ itemHeaderText.text())})
        cy.log('Printed item text to console')
    })
    it('Click in the first item using item using index',()=>{
        cy.visit('https://automationteststore.com/index.php')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})