const url = "http://127.0.0.1:1234/public/";

describe("Debug Button", () => {
  it("should show Greg div when clicking on button", () => {
    cy.visit(url);
    cy.get("#btn").click();
    cy.get(".debug").should("be.visible");
  });

  it("not show Greg div", () => {
    cy.visit(url);
    cy.get(".debug").should("be.not.visible");
  });
});

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it("should display a numpad with digits", () => {
    cy.contains("0").should("be.visible");
    cy.contains("1").should("be.visible");
    cy.contains("2").should("be.visible");
    cy.contains("3").should("be.visible");
    cy.contains("4").should("be.visible");
    cy.contains("5").should("be.visible");
    cy.contains("6").should("be.visible");
    cy.contains("7").should("be.visible");
    cy.contains("8").should("be.visible");
    cy.contains("9").should("be.visible");
  });

  it("should display 0 by default", () => {
    cy.get(".screen").should("contain.text", 0);
  });

  it("can add 2 numbers", () => {
    // Type number '1234'
    cy.get(".pad").contains("1").click();
    cy.get(".screen").should("contain.text", 1);
    cy.get(".screen").should("not.contain.text", 0);
    cy.get(".pad").contains("2").click();
    cy.get(".screen").should("contain.text", 12);
    cy.get(".pad").contains("3").click();
    cy.get(".screen").should("contain.text", 123);
    cy.get(".pad").contains("4").click();
    cy.get(".screen").should("contain.text", 1234);

    // Type '+'
    cy.get(".pad").contains("+").click();

    // Type number '5678'
    cy.get(".pad").contains("5").click();
    cy.get(".screen").should("contain.text", 5);
    cy.get(".screen").should("not.contain.text", 1234);
    cy.get(".pad").contains("6").click();
    cy.get(".screen").should("contain.text", 56);
    cy.get(".pad").contains("7").click();
    cy.get(".screen").should("contain.text", 567);
    cy.get(".pad").contains("8").click();
    cy.get(".screen").should("contain.text", 5678);

    // Type '='
    cy.get(".pad").contains("=").click();

    // Result is displayed
    cy.get(".screen").should("contain.text", 1234 + 5678);
  });
});
