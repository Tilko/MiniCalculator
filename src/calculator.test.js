const Calculator = require("./calculator");

describe("Calculator", () => {

  beforeEach(() => {
    calculator = new Calculator();
  })

  it('can add 2 numbers', () => {
    calculator.add(1234)
    calculator.equal(5678)
    expect(calculator.result).toBe(1234 + 5678)
  })

  it('does nothing when clicking equal with a single number', () => {
    calculator.equal(1234)
    expect(calculator.result).toBe(1234)
  })

});
