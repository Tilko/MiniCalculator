class NumberPart {
  constructor(part0 = "") {
    this.part = "" + part0;
    console.log("this.part:" + this.part)
  }
  appendDigit(digit) {
    this.part = this.part + digit;
  }
  getValue() {
    return this.part === "" ? "0" : this.part;
  }
}

class CalculatorUI {
  constructor(calculator) {
    this.resetValue();
  }
  resetValue() {
    this.integralPart = new NumberPart();
    this.fractionalPart = null;
    this.currentNumberPart = this.integralPart;
    this.signum = "";
  }

  appendDigit(digit) {
    this.currentNumberPart.appendDigit(digit)
    console.log(this.currentNumberPart.part);
  }

  toggleSignum() {
    this.signum = this.signum === "" ? "-" : "";
  }
  setDecimalDot() {
    this.fractionalPart = new NumberPart()
    this.currentNumberPart = this.fractionalPart
  }

  getValueString() {
    const integralVal = Number(this.integralPart.getValue());
    let absoluteValString = this.fractionalPart !== null ?
      integralVal + "." + this.fractionalPart.part :
      integralVal;
    return this.signum + absoluteValString;
  }
  setValue(val) {
    const integralPart = Math.trunc(val);
    this.integralPart = new NumberPart(Math.abs(integralPart));
    const decimalPartVal = (val - integralPart);
    if (decimalPartVal !== 0) {
      const remaining = "" + Math.abs(decimalPartVal);

      let trimmedLen = 0;
      let index = 0;
      if (remaining.charAt(0) === "0") {
        trimmedLen++;
        index++;
      }
      if (remaining.charAt(index) === ".") {
        trimmedLen++;
        index++;
      }
      this.fractionalPart = new NumberPart(remaining.substr(trimmedLen, remaining.length));
      this.currentNumberPart = this.fractionalPart;
    } else {
      this.currentNumberPart = this.integralPart;
      this.fractionalPart = null;
    }

    this.signum = Math.sign(val) === -1 ? "-" : "";
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
