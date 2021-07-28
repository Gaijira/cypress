/// <reference types='Cypress' />

describe('Test File upload via webdriveruni',()=>{
    it('Upload a file',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture('test.png', 'base64').then((fileContent)=>{
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName:"test.png",
                    mimeType:"image/png"
                },
                {
                    uploadType:"input"
                }
            )
        })
        cy.get('#submit-button').click()
    })
    it('Upload no file',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq('You need to select a file to upload!')
        })

    })
})