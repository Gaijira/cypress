/// <reference types="Cypress" />
describe("Handling Data via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert the total ages of all users", () => {
        var useDetails = []
        let numb = 0
        cy.get('#thumbnail-1 td').each((el, index, list) => {
            useDetails[index] = el.text()
        }).then(() => {
            var i
            for (i = 0; i < useDetails.length; i++) {
                if (Number(useDetails[i])) {
                    numb += Number(useDetails[i])
                }
            }
            cy.log('Total age: ' + numb)
            expect(numb).eq(322)
        })
    })
    it("Calculate and assert the age of user", () => {
        cy.get('#thumbnail-1 td:nth-child(2)').each((el, index, list) => {
            if ('Smith' == el.text()) {
                expect(Number(el.next().text())).eq(45)
            }
        })
    })
})