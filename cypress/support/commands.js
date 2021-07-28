// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload'

Cypress.Commands.add('selectProduct',productname=>{
    cy.get('.fixed_wrapper  .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productname)) {
            cy.wrap($el).click()
        }
})  
})
// Cypress.Commands.add('contactFormSubmission',(first_name,last_name,email,comment,selector, textToLocate)=>{
//     cy.get('[name="first_name"]').click().type(first_name)
//     cy.get('[name="last_name"]').click().type(last_name)
//     cy.get('[name="email"]').click().type(email)
//     cy.get('[name="message"]').click().type(comment)
//     cy.get('[type="submit"]').click()
//     cy.get(selector).contains(textToLocate)
// })
Cypress.Commands.add('addProductToCart',productname=>{
    cy.get('.fixed_wrapper  .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productname) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click()
        }
})  
})

Cypress.Commands.add('navigateTo_WebdriverUni_Homepage',()=>{
    cy.visit('/')
})

Cypress.Commands.add('navigateTo_WebdriverUni_Checkbox_Page',()=>{
    cy.visit('/'+'Dropdown-Checkboxes-RadioButtons/index.html')
})