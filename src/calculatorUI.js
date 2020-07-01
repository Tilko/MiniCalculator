const doNothing = () => {};

class CalculatorUI {
  constructor(calculator) {
    this._number = 0;
    this.listener = doNothing;
  }

  appendDigit(digit) {
    this.number = this._number * 10 + digit;
  }
  registerNumberChangedListener(callback) {
    this.listener = callback;
  }
  resetNumber(){
    this._number = 0;
  }
  set number(number) {
    this._number = number;
    this.listener(this.number);
  }

  get number() {
    return this._number;
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
