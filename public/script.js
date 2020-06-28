const sandbox = () => {
  const btn = document.querySelector("#btn");
  const debugDiv = document.querySelector(".debug");

  btn.addEventListener("click", () => {
    debugDiv.classList.remove("hidden");
  });
};
const initCalculator = () => {

  const screen = document.querySelector('.screen')
  const allDigits = document.querySelectorAll('.number')

  allDigits.forEach(numberDiv => {
    numberDiv.addEventListener('click', () => {
      const number = numberDiv.textContent;
      screen.innerText = number;
    })
  })
}
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox);
