class CalculatorUI {
  constructor() {
    this.numberDisplayed = 0;
  }

  digitClicked(digit) {
    this.numberDisplayed = this.numberDisplayed * 10 + digit;
  }
}

module.exports = CalculatorUI;

/*
const makeCalculatorUI = () => {
  const digitClicked = (digit) => {
    let num = calculatorUI.numberDisplayed;
    calculatorUI.numberDisplayed = num * 10 + digit;
  };

  const calculatorUI = {
    digitClicked,
    numberDisplayed: 0,
  };
  return calculatorUI;
};
*/
