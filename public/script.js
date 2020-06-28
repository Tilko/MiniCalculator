const sandbox = () => {
  const btn = document.querySelector("#btn");
  const debugDiv = document.querySelector(".debug");

  btn.addEventListener("click", () => {
    debugDiv.classList.remove("hidden");
  });
};
const initCalculator = () => {
  const screen = document.querySelector(".screen");
  const allDigits = document.querySelectorAll(".digit");

  let displayedNumber = "0";

  const concatClickedDigitAtEndOfDisplayedNumber = (event) => {
    const clickedDigitDiv = event.target;
    const digit = clickedDigitDiv.textContent;

    displayedNumber = displayedNumber + digit;
    screen.textContent = Number(displayedNumber);
  };

  allDigits.forEach((numberDiv) =>
    numberDiv.addEventListener(
      "click",
      concatClickedDigitAtEndOfDisplayedNumber
    )
  );
};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox);
