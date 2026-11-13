const root = document.querySelector('.embla')
const viewport = root.querySelector('.embla-viewport')

const slideTitles = [
  "Мир \"Прекрасной эпохи\"",
  "Быт людей",
  "Одежда и мода",
  "Развлечения",
  "Закон и преступность",
  "Закат Романтики",
  "Акулы капитализма",
  "Медицина",
  "Всё не то чем кажется",
]

const embla = EmblaCarousel(viewport, {
  loop: false,
  // watchDrag: false, // раскомментируйте, чтобы отключить прокрутку драгом
  startIndex: Number(sessionStorage.getItem('lore-slide')) || 0, // не сбрасывать слайд при перезагрузке
})

// querySelectorAll: если элемента нет в HTML, получится пустой список,
// и forEach просто ничего не сделает. Если элементов несколько
// (например, отдельные контроллеры для десктопа и мобильной версии),
// всё работает для каждого.
const $$ = (selector) => document.querySelectorAll(selector)

const prevBtns = $$('.embla-button-prev')
const nextBtns = $$('.embla-button-next')
const dotsRoots = $$('.embla-dots')
const counterCurrents = $$('.embla-counter-current')
const counterTotals = $$('.embla-counter-total')
const titleNodes = $$('.embla-title')

/* BUTTONS */
prevBtns.forEach((btn) => btn.addEventListener('click', () => embla.scrollPrev()))
nextBtns.forEach((btn) => btn.addEventListener('click', () => embla.scrollNext()))

const updateButtons = () => {
  prevBtns.forEach((btn) => (btn.disabled = !embla.canScrollPrev()))
  nextBtns.forEach((btn) => (btn.disabled = !embla.canScrollNext()))
}

/* DOTS */
const dots = []
dotsRoots.forEach((dotsRoot) => {
  embla.scrollSnapList().forEach((_, i) => {
    const btn = document.createElement('button')
    btn.className = 'embla-dot'
    btn.addEventListener('click', () => embla.scrollTo(i))
    dotsRoot.appendChild(btn)
    dots.push({ btn, i })
  })
})

const updateDots = () => {
  const selected = embla.selectedScrollSnap()
  dots.forEach(({ btn, i }) => {
    btn.classList.toggle('embla-dot-selected', i === selected)
  })
}

/* COUNTER */
const updateCounter = () => {
  counterCurrents.forEach((el) => (el.textContent = embla.selectedScrollSnap() + 1))
  counterTotals.forEach((el) => (el.textContent = embla.scrollSnapList().length))
}

/* TITLE */
const updateMeta = () => {
  titleNodes.forEach((el) => (el.textContent = slideTitles[embla.selectedScrollSnap()]))
}

/* UPDATE */
const update = () => {
  updateButtons()
  updateDots()
  updateCounter()
  updateMeta()
  sessionStorage.setItem('lore-slide', embla.selectedScrollSnap())
}

embla.on('select', update)
embla.on('reInit', update)
update() // событие init срабатывает до подписки, поэтому заполняем вручную

/* KEYBOARD */
document.addEventListener('keydown', (event) => {
  const tag = document.activeElement?.tagName

  if (tag === 'INPUT' || tag === 'TEXTAREA') return

  if (event.key === 'ArrowLeft' && embla.canScrollPrev()) {
    event.preventDefault()
    embla.scrollPrev()
  }

  if (event.key === 'ArrowRight' && embla.canScrollNext()) {
    event.preventDefault()
    embla.scrollNext()
  }
})