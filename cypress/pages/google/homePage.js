
class HomePage{

    go(){
        cy.visit(Cypress.env("urls").googleUrl)
    }

    validateSearchButtonText(text){
        cy.get('.FPdoLc > center > .gNO89b').should('have.value', text)
    }  

    
}

export default new HomePage