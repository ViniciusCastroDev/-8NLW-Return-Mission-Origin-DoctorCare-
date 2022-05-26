window.addEventListener('scroll', rolandoPagina)

rolandoPagina()

function rolandoPagina() {
  MostrarMenuNavegacaoRolandoPagina()
  MostrarBotaoRetornaInicioRolandoPagina()
  ativarMenuNaSecaoAtual(inicio)
  ativarMenuNaSecaoAtual(servicos)
  ativarMenuNaSecaoAtual(sobre)
  ativarMenuNaSecaoAtual(contatos)
}

function ativarMenuNaSecaoAtual(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargeLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargeLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function MostrarMenuNavegacaoRolandoPagina() {
  if (scrollY > 0) {
    navegacao.classList.add('scroll')
  } else {
    navegacao.classList.remove('scroll')
  }
}

function MostrarBotaoRetornaInicioRolandoPagina() {
  if (scrollY > 500) {
    BotaoRetornaInicio.classList.add('show')
  } else {
    BotaoRetornaInicio.classList.remove('show')
  }
}

function abrirMenu() {
  document.body.classList.add('menu-expandido')
}

function fecharMenu() {
  document.body.classList.remove('menu-expandido')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800
}).reveal(`#inicio, 
#inicio img, 
#inicio .stats,
#servicos header,
#servicos .card,
#sobre-nos,
#sobre-nos content`)
