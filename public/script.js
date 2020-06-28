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

  const displayClickedDigit = (event) => {
    const clickedDigitDiv = event.target;
    const digit = clickedDigitDiv.textContent;
    screen.innerText = digit;
  };

  allDigits.forEach((numberDiv) =>
    numberDiv.addEventListener("click", displayClickedDigit)
  );

};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox);
