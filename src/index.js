const sandbox = require("./sandbox");
const CalculatorUI = require("./calculatorUI");
const Calculator = require('./calculator')
const operators_Id_To_Code = require("./Operators_Id_To_Code")
const calculator = new Calculator()
const calculatorUI = new CalculatorUI();

const initCalculator = () => {

  const screen = document.querySelector(".screen");
  const clearButton = document.querySelector('#clear')
  const signToogleButton = document.querySelector('#signToggle')
  const dotButton = document.querySelector('#dot')

  const updateScreen = toDisplay => {
    screen.textContent = toDisplay;
  };

  const allDigitDivs = document.querySelectorAll(".digit");
  allDigitDivs.forEach(digitDiv => digitDiv.addEventListener("click", event => {
    calculatorUI.appendDigit(event.target.textContent);
    updateScreen(calculatorUI.getValueString());
  }));

  for (const opId of Object.keys(operators_Id_To_Code)) {
    document.querySelector('#' + opId).addEventListener('click', () => {
      const rez = calculator.treatOperation(Number(calculatorUI.getValueString()), opId);
      updateScreen(rez);
      calculatorUI.setValue(opId == 'equal' ? rez : 0);
    })
  }

  clearButton.addEventListener('click', () => {
    calculatorUI.resetValue();
    updateScreen(0);
    calculator.reset();
  })
  signToogleButton.addEventListener('click', () => {
    calculatorUI.toggleSignum();
    updateScreen(calculatorUI.getValueString());
  })
  dotButton.addEventListener('click', () => {
    calculatorUI.setDecimalDot();
    updateScreen(calculatorUI.getValueString());
  })
};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox.run);
