describe("Debug Button", () => {
  const url = 'http://localhost:1234/public'

  it("should show Greg div when clicking on button", () => {
    cy.visit(url)
    cy.get('#btn').click()
    cy.get('.debug').should('be.visible')
  });

  it("not show Greg div", () => {
    cy.visit(url)
    cy.get('.debug').should('be.not.visible')
  });
});
