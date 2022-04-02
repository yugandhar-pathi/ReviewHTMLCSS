it("Fill personal details", () => {
    cy.visit('../../AboutUs/aboutUs.html')
    cy.get('[id=username]').type('Kalyani')
    cy.get('[id=password]').type('Kalyani12')
    cy.get('[id=selectCountryId]').select(1).should('have.value', '123')
    cy.get('[id=marital_status]').check()
    cy.get('[id=male_radio]').check()
    cy.get('[id=buttonId]').click()
    //Personal data
    cy.get('[id=paragraphId]').contains('User Name : Kalyani Date : Country : 123 Marital Status : Married Gender : male')
})

it("Not filled all details", () => {
    cy.visit('../../AboutUs/aboutUs.html')
    cy.get('[id=username]').type('Kalyani')
    cy.get('[id=password]').type('Kalyani12')
    cy.get('[id=selectCountryId]').select(1).should('have.value', '123')
    cy.get('[id=male_radio]').check()
    cy.get('[id=buttonId]').click()

    //Displaying error message
    cy.get('#openDialog').should('be.visible')
    cy.get('[id = openDialog]').contains('Please fill all the fields')

    //Closing error message
    cy.get('#closeDialog').click()
    cy.get('#openDialog').should('not.be.visible')
})