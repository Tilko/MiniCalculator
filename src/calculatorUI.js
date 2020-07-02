
const splitNumberForStringRepresentation = require("./lib/NumberStrRepresentation.js");

class NumberPart {
  constructor(part0 = "") {
    this.part = "" + part0;
    console.log("this.part:" + this.part)
  }
  getValue() {
    return this.part === "" ? "0" : this.part;
  }
  appendDigit(digit) {
    this.part = this.part + digit;
  }
  popDigit() {
    const len = this.part.length;
    if (len > 0)
      this.part = this.part.substr(0, len - 1)
  }

}

class CalculatorUI {
  constructor(calculator) {
    this.resetValue();
  }
  resetValue() {
    this.integralPart = new NumberPart();
    this.fractionalPart = null;
    this.signum = "";
  }
  getCurrentPart() {
    return this.fractionalPart || this.integralPart;
  }
  appendDigit(digit) {
    this.getCurrentPart().appendDigit(digit)
  }

  toggleSignum() {
    this.signum = this.signum === "" ? "-" : "";
  }
  setDecimalDot() {
    this.fractionalPart = new NumberPart()
  }
  backSpace() {
    if (this.fractionalPart !== null) {
      if (this.fractionalPart.part === '') {
        this.fractionalPart = null;
      } else {
        this.fractionalPart.popDigit()
      }
    } else {
      this.integralPart.popDigit()
    }
  }
  getValueString() {
    const integralVal = Number(this.integralPart.getValue());
    let absoluteValString = this.fractionalPart !== null ?
      integralVal + "." + this.fractionalPart.part :
      integralVal;
    return this.signum + absoluteValString;
  }
  setValue(val) {
    let iPart, fPart;
    ({ signum: this.signum, integralPart: iPart, fractionalPart: fPart }
      = splitNumberForStringRepresentation(val))
    this.integralPart = new NumberPart(iPart);
    console.log("val:" + val)
    console.log("iPart:" + iPart)
    console.log("fPart:" + fPart)
    if (fPart !== 0) {
      this.fractionalPart = new NumberPart(fPart);
    } else {
      this.fractionalPart = null;
    }
  }

}

module.exports = CalculatorUI;
