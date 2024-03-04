const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const bodyOpacity = document.querySelector(".opacity")

hamburger.addEventListener("click", (e) => {
  e.stopPropagation()
  navLinks.classList.toggle("close")
  bodyOpacity.classList.toggle("visible")
})

document.body.addEventListener('click', () => {
  navLinks.classList.add("close")
  bodyOpacity.classList.remove("visible")
})