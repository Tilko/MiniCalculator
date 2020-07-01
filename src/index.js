const sandbox = require("./sandbox");
const CalculatorUI = require("./calculatorUI");
const Calculator = require('./calculator')
const operators_Id_To_Code = require("./Operators_Id_To_Code")
const calculator = new Calculator()
const calculatorUI = new CalculatorUI(calculator);

const initCalculator = () => {

  const screen = document.querySelector(".screen");
  const clearButton = document.querySelector('#clear')

  const updateScreen = toDisplay => {
    screen.textContent = toDisplay;
  };

  const allDigitDivs = document.querySelectorAll(".digit");
  allDigitDivs.forEach(digitDiv => digitDiv.addEventListener("click", event => {
    calculatorUI.appendDigit(Number(event.target.textContent));
    updateScreen(calculatorUI.number);
  }));

  for (const opId of Object.keys(operators_Id_To_Code)) {
    document.querySelector('#' + opId).addEventListener('click', () => {
      const rez = calculator.treatOperation(calculatorUI.number, opId);
      calculatorUI.number = rez;
      updateScreen(rez);
      calculatorUI.number = opId == 'equal' ? rez : 0;
    })
  }

  clearButton.addEventListener('click', () => {
    calculatorUI.resetNumber();
    updateScreen(0);
    calculator.reset();
  })

};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox.run);
