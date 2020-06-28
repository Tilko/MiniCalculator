const sandbox = require("./sandbox");
const makeCalculatorUI = require("./calculatorUI");
const calculatorUI = makeCalculatorUI();

const initCalculator = () => {
  const screen = document.querySelector(".screen");
  const allDigits = document.querySelectorAll(".digit");

  const sendToCalculatorUIAndUpdateDisplay = (event) => {
    const clickedDigitDiv = event.target;
    const digitAsText = clickedDigitDiv.textContent;
    calculatorUI.digitClicked(Number(digitAsText));
    screen.textContent = calculatorUI.numberDisplayed;
  };

  allDigits.forEach((numberDiv) =>
    numberDiv.addEventListener("click", sendToCalculatorUIAndUpdateDisplay)
  );
};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox.run);
