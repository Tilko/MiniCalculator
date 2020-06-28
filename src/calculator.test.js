const Calculator = require("./calculator");

describe("Calculator", () => {

  beforeEach(() => {
    calculator = new Calculator();
  })

  it('can add 2 numbers', () => {
    calculator.add(1234)
    calculator.add(5678)
    expect(calculator.result).toBe(1234 + 5678)
  })

});
