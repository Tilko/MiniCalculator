describe("Debug Button", () => {
  const url = 'http://127.0.0.1:1234/public/'

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

describe("Calculator", () => {
  it("should display numbers", () => {
    cy.contains('0').should('be.visible')
    cy.contains('1').should('be.visible')
    cy.contains('2').should('be.visible')
    cy.contains('3').should('be.visible')
    cy.contains('4').should('be.visible')
    cy.contains('5').should('be.visible')
    cy.contains('6').should('be.visible')
    cy.contains('7').should('be.visible')
    cy.contains('8').should('be.visible')
    cy.contains('9').should('be.visible')
  })
})