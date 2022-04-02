it('Redirect to About us page', () => {
    cy.visit('../../learnHtmlTags/learnTags.html')
    cy.get('#aboutUsPageId').should('have.attr', 'href')
        .then(href => {
            cy.visit(href)
        })
})

it('Redirect to Career page', () => {
    cy.visit('../../learnHtmlTags/learnTags.html')
    cy.get('#careerPageId').should('have.attr', 'href')
        .then(href => {
            cy.visit(href)
        })
})