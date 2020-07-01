class CalculatorUI {
  constructor(calculator) {
    this.number = 0;
  }

  appendDigit(digit) {
    this.number = this.number * 10 + digit;
  }

  resetNumber(){
    this.number = 0;
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
