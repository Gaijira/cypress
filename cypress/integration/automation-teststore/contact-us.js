// / <reference types='Cypress' />

describe('Test Contact Us form via Automation-teststore',()=>{

    it('Should be able to submit a successsfull submission via contact us form',()=>{
        cy.visit('https://automationteststore.com/index.php')
        cy.get('a').contains('Contact Us').click().then(function(el){cy.log('Button text is: '+ el.text())})
        cy.get('[name="first_name"]').click().type('Alex')
        cy.get('#ContactUsFrm_email').click().type('avellex@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name','email')
        cy.get('#ContactUsFrm_enquiry').click().type('test_message')
        cy.get('[title="Submit"]').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed')
    })
})