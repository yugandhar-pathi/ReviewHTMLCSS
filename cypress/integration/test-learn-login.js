

const loginPageElements = {

}

it("click login - with username and pwd empty", ()=>{
    cy.visit("../../learnLogin/login/login.html")
    cy.get('[id=loginButton]').click()

    // page should show error dialog
    cy.get('[id=errorDialog]')
        .should('be.visible')
        .should('to.contain', 'username or password cannot be empty')
   
    // close the dialog
    cy.get('[id=closeDialog]').click()
})

it("click login - with username and pwd filled", ()=>{
    cy.visit("../../learnLogin/login/login.html")

    cy.get('[id=username]').type("testuser")
    cy.get('[id=password]').type("password")

    cy.get('[id=loginButton]').click()

    // page should show error dialog
    cy.get('[id=errorDialog]')
        .should('not.to.be.visible')

})