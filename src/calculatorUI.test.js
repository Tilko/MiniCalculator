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

  it("notifies when number-to-display changes", () => {
    const callback = jest.fn();

    calculatorUI.registerListener(callback);

    expect(callback).not.toHaveBeenCalled();
    calculatorUI.numberDisplayed = 12345;
    expect(callback).toHaveBeenCalledWith(12345);
  });

  it("notifies when digit clicked", () => {
    const callback = jest.fn();

    calculatorUI.registerListener(callback);

    expect(callback).not.toHaveBeenCalled();
    calculatorUI.digitClicked(5);
    expect(callback).toHaveBeenCalledWith(5);
  });
});
