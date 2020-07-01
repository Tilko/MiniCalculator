class CalculatorUI {
  constructor(calculator) {
    this.signum = 1;
    this.absoluteValue = 0;
  }
  toggleSignum(){
    this.signum *= -1;
  }
  appendDigit(digit) {
    this.absoluteValue = this.absoluteValue * 10 + digit;
  }

  resetNumber(){
    this.absoluteValue = 0;
    this.signum = 1;
  }
  getValue(){
    return this.absoluteValue * this.signum;
  }
  setValue(val){
    this.absoluteValue = Math.abs(val);
    
    this.signum = Math.sign(val);
    if(this.signum === 0){
      this.signum = 1;
    }
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
