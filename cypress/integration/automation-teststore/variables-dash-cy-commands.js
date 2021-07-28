/// <reference types='Cypress' />

describe('Verifying variables, cypress commands and jquery commands',()=>{
    it('Navigating to specific product pages',()=>{
        cy.visit('https://automationteststore.com/index.php')

        // The following will fail
        // const makeUpLink = cy.get('#categorymenu > nav > ul').contains('Makeup')
        // const skinCareLink = cy.get('#categorymenu > nav > ul').contains('Skincare')
        // makeUpLink.click()
        // skinCareLink.click()

        //Recommeded
        cy.get('#categorymenu > nav > ul').contains('Makeup').click()
        cy.get('#categorymenu > nav > ul').contains('Skincare').click()
    })
    it('Navigating to specific product pages',()=>{
        cy.visit('https://automationteststore.com/index.php')
        cy.get('#categorymenu > nav > ul').contains('Makeup').click()


        //Following will fail also
        // const header = cy.get('.maintext')
        // cy.log(header.text())

        cy.get('.maintext').then(($headerText)=>{
            const headerText = $headerText.text()
            console.log($headerText)
            cy.log('Found following header text: '+ headerText)
            expect(headerText).is.eq('Makeup')
        })
    })
    it.only('Validate properties of the Contact Us Page',()=>{
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //Uses cypress comamands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain','First name')
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then((form)=>{
            const firstNameText = form.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
        })
        //Embedded commands (Closure)
        cy.get('#field_11').then(text=>{
            cy.log(text.text())
            cy.log(text.parent())
        })
    })

})