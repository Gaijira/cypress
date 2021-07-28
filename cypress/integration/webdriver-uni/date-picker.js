/// <reference types="Cypress" />
describe("Test date picker via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    })
    it("Select date from date picker", () => {
        var date = new Date()
        date.setDate(date.getDate() + 360) //get current date i.e. 21 
        var futYear = date.getFullYear()
        var futMonth = date.toLocaleString('default', { month: 'long' })
        var futDay = date.getDate()
        cy.get('.input-group-addon').click()
        let datepicker = () => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentdate => {
                if (!(currentdate.text().includes(futYear)&&currentdate.text().includes(futMonth))) {
                    cy.get('.next').first().click()
                    datepicker()
                }
            })
            
        }

        let selectFutureDay = () =>{
            cy.get('.day').contains(futDay).click()
            }
        datepicker()
        selectFutureDay()

    })
})