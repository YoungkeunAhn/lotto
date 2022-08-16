document.getElementById('menu-close').addEventListener('click', () => {
  document.getElementById('menu').classList.add('hidden')
})

document.getElementById('menu-open').addEventListener('click', () => {
  document.getElementById('menu').classList.remove('hidden')
})
