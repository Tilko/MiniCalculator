const sandbox = require("./sandbox");
const CalculatorUI = require("./calculatorUI");
const Calculator = require('./calculator')
const operators_Id_To_Code = require("./Operators_Id_To_Code")
const calculator = new Calculator()
const calculatorUI = new CalculatorUI(calculator);

const initCalculator = () => {

  const screen = document.querySelector(".screen");
  const clearButton = document.querySelector('#clear')

  const updateDisplay = (toDisplay) => {
    screen.textContent = toDisplay;
  };
  calculatorUI.registerNumberChangedListener(updateDisplay);

  const allDigitDivs = document.querySelectorAll(".digit");
  allDigitDivs.forEach(digitDiv => digitDiv.addEventListener("click",
    event => calculatorUI.appendDigit(Number(event.target.textContent))
  ));

  for (const op of Object.keys(operators_Id_To_Code)) {
    document.querySelector('#' + op).addEventListener('click', () => {
      const rez = calculator.treatOperation(calculatorUI.number, op);
      calculatorUI.number = rez;
      calculatorUI.resetNumber();
    })
  }
};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox.run);
