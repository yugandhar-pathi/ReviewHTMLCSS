it('Add student', () => {
    cy.visit("../../Career/career.html")
    cy.get('[id=addButton]').click()

    // Show dialog box
    cy.get('[id=dialogId]')
        .should('be.visible')

    // Enter student name, grade and  click add student button
    cy.get('[id=nameId]').type("Kalyani")
    cy.get('[id=gradeId]').type("3")
    cy.get('[id=addStudent]').click()

    // Add student to the list
    cy.get('ul li:last').should('have.text', 'Kalyani 3')

    // close dialog box
    cy.get('[id=dialogId]')
        .should('not.to.be.visible')
})

//Delete list item
it.only('Delete student', () => {
    cy.visit("../../Career/career.html")
    cy.get('.showStudent').should('have.length', 3)
    cy.get('[id=deleteReshitha]').click()
    cy.get('li').should('have.length', 2)
})

//Open dialog and display student details
it('Display student details', () => {
    cy.visit("../../Career/career.html")
    cy.get('[id=showDialogId]').click()
    cy.get('[id=diId]').should('be.visible')
        .contains('Name : Reshitha')

    //close dialog
    cy.get('[id=closeDiaId]').click()
    cy.get('[id=diId]').should('not.to.be.visible')
})