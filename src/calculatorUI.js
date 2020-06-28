const doNothing = () => {};

class CalculatorUI {
  constructor() {
    this._numberDisplayed = 0;
    this.listener = doNothing;
  }

  digitClicked(digit) {
    this.numberDisplayed = this._numberDisplayed * 10 + digit;
  }

  plusClicked() {
    this._numberDisplayed = 0;
  }

  registerListener(callback) {
    this.listener = callback;
  }

  set numberDisplayed(n) {
    this._numberDisplayed = n;
    this.listener(this._numberDisplayed);
  }

  get numberDisplayed() {
    return this._numberDisplayed;
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
