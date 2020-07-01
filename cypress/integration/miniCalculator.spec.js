const url = "http://127.0.0.1:1234/";

//





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

  const operation = op => cy.get(".operator-pad").contains(op).click();
  const digit = d0 => cy.get(".pad").contains("" + d0).click();
  const screenIs = textToBeOnScreen => 
      cy.get(".screen").should(elem => expect(elem.text())
      .to.equal("" + textToBeOnScreen))
  //prev was: screenIs(xxx);

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
    screenIs(0);
  });

  it("can add 2 numbers", () => {
    // Type number '1234'
    digit(1)
    screenIs(1);
    digit(2)
    screenIs(12);
    digit(3)
    screenIs(123);
    digit(4)
    screenIs(1234);

    operation("+");


    digit(5)

    screenIs(5);
    digit(6)
    screenIs(56);
    digit(7)
    screenIs(567);
    digit(8)
    screenIs(5678);

    operation("=");

    screenIs(1234 + 5678);
  });

  it("can reset the state by clicking the C button", () => {
    digit(1);

    cy.get(".pad").contains("C").click();
    screenIs(0);

    digit(1);
    operation("+");
    digit(2);
    operation("=");
    screenIs(3);
  });

  it("should not only do addition, test substraction", () => {
    digit(7);
    operation("-");
    digit(3);
    operation("=");
    screenIs(7 - 3);
  })

  it('should display the divByZero error with "Infinity"', () => {
    digit(1);
    operation("/")
    digit(0);
    operation("=")
    screenIs('Infinity');
  })

  it('can chain the operation', () => {
    digit(1);
    operation("+");
    digit(1);
    operation("+");
    screenIs(2);
    digit(1);
    screenIs(1);
    operation("=")
    screenIs(3);
  });

  it('can chain the operation also after "equal" op', () => {
    digit(1);
    operation("+")
    digit(1);
    operation("=")
    screenIs(2);
    operation("+")
    screenIs(2);
    digit(1);
    screenIs(1);
    operation("=")
    screenIs(3);
  });
});
