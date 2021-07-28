/// <reference types='Cypress' />

describe('Json example obj', () => {
    it('json test', () => {
        const jsonObj = {
            "key": "value",
            "key2":"value2"
        }
    cy.log(jsonObj.key)
    })

})