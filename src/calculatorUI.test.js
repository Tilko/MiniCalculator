const CalculatorUI = require("./calculatorUI");

describe("CalculatorUI", () => {
  let calculatorUI;

  beforeEach(() => {
    calculatorUI = new CalculatorUI();
  });

  it("should display 0 initially", () => {
    expect(calculatorUI.numberDisplayed).toBe(0);
  });

  it("should display clicked digit", () => {
    calculatorUI.digitClicked(8);
    expect(calculatorUI.numberDisplayed).toBe(8);
  });

  it("should concatenate multiple digits into number", () => {
    calculatorUI.digitClicked(1);
    calculatorUI.digitClicked(2);
    calculatorUI.digitClicked(3);
    expect(calculatorUI.numberDisplayed).toBe(123);
  });
});
