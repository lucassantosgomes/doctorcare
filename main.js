window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  backToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seçao passou da linha

  //topo da seçao
  const sectionTop = section.offsetTop
  //altura
  const sectionHeight = section.offsetHeight
  //o topo da seçao chegou ou ultrapassou a linha alvo;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verifica se a base esta a baixo da seçao
  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  // console.log('o topo da seçao chegou ou ultrapassou a linha? ',sectionEndPassedTargetLine);

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectioId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectioId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function backToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #abaut,
  #abaut header,
  #abaut .content
  `)
