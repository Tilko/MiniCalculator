const run = () => {
  const btn = document.querySelector("#btn");
  const debugDiv = document.querySelector(".debug");

  btn.addEventListener("click", () => {
    debugDiv.classList.remove("hidden");
  });
};

module.exports = { run };
