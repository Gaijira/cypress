class Contact_Us_PO {
    contactFormSubmission(first_name, last_name, email, comment, selector, textToLocate) {
        cy.get('[name="first_name"]').click().type(first_name)
        cy.get('[name="last_name"]').click().type(last_name)
        cy.get('[name="email"]').click().type(email)
        cy.get('[name="message"]').click().type(comment)
        cy.get('[type="submit"]').click()
        cy.get(selector).contains(textToLocate)
    }
}
export default Contact_Us_PO