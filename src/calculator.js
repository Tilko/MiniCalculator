class Calculator {
  constructor() {
    this.result = 0;
    this.currentOp;
  }
  add(number) {
    this.result += number;
    this.currentOp = "add";
  }
  equal(number) {
    if (this.currentOp === "add") {
      this.result += number;
    } else {
      this.result = number;
    }
  }
}

module.exports = Calculator;
