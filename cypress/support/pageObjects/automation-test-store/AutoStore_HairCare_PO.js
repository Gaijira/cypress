class Autostore_HairCare_PO{
    addHairCareProductsToCart(){
        globalThis.data.productName.forEach((el)=>{
            cy.addProductToCart(el).then(()=>{
                debugger
            })
        })
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
    }
}
export default Autostore_HairCare_PO