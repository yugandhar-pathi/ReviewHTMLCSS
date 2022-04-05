it("Dispaly student details", () => {
    cy.visit("../../Student/student.html")
    //delete list item
    cy.get("[id=studentUlId]").children().should("have.length", 6)
    cy.get("[id=1delete]").click()
    cy.get("[id=dialogId]").should("be.visible")
    cy.get("[id=removeStd]").click()
    cy.get("[id=studentUlId]").children().should("have.length", 5)

    //Display student information
    cy.get("[id=student2]").click()
    cy.get("[id=displayStudentDetailsId]").should("be.visible").contains("Leia")
    cy.get("[id=closeDialogStudentDetails]").click()
    cy.get("[id=displayStudentDetailsId]").should("not.be.visible")

    //Add student
    cy.get("[id=addStudent]").click()
    cy.get("[id=addStuDia]").should("be.visible")
    cy.get("[id=stuName]").type("Kalyani")
    cy.get("[id=stuGrade]").type("4")
    cy.get("[id=add]").click()
    cy.get("[id=studentUlId]").children().should("have.length", 6)
})