class Autostore_Homepage_PO{
    accessHomepage(){
        cy.visit('https://automationteststore.com/index.php',{timeout:6000})
    }
    clickOn_HairCare_Link(){
        cy.get('#categorymenu > nav > ul').contains('Hair Care').click()
    }
}
export default Autostore_Homepage_PO