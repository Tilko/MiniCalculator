const sandbox = require("./sandbox");
const makeCalculatorUI = require("./calculatorUI");
const calculatorUI = makeCalculatorUI();

const initCalculator = () => {
  const screen = document.querySelector(".screen");
  const allDigits = document.querySelectorAll(".digit");

  const updateDisplay = (toDisplay) => {
    screen.textContent = toDisplay;
  };

  const sendToCalculatorUIAndUpdateDisplay = (event) => {
    const clickedDigitDiv = event.target;
    const digit = Number(clickedDigitDiv.textContent);

    calculatorUI.digitClicked(digit);
    updateDisplay(calculatorUI.numberDisplayed);
  };

  allDigits.forEach((numberDiv) =>
    numberDiv.addEventListener("click", sendToCalculatorUIAndUpdateDisplay)
  );
};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox.run);
