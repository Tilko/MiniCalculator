document.addEventListener('DOMContentLoaded', () => {


  const btn = document.querySelector('#btn');
  const debugDiv = document.querySelector('.debug')

  btn.addEventListener('click', () => {
    debugDiv.classList.remove('hidden')
  })

})