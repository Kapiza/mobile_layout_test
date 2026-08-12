const root = document.querySelector('.embla')
const viewport = root.querySelector('.embla__viewport')

const embla = EmblaCarousel(viewport, { loop: false })

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

console.log("AYO");

const prevBtn = document.querySelector('.embla__button--prev')
const nextBtn = document.querySelector('.embla__button--next')

const dotsRoot = document.querySelector('.embla__dots')

const counterCurrent = document.querySelector('.embla__counter__current')
const counterTotal = document.querySelector('.embla__counter__total')

const titleNode = document.querySelector('.embla__title')

/* BUTTONS */
prevBtn.addEventListener('click', () => embla.scrollPrev())
nextBtn.addEventListener('click', () => embla.scrollNext())

const updateButtons = () => {
  prevBtn.disabled = !embla.canScrollPrev()
  nextBtn.disabled = !embla.canScrollNext()
}

/* DOTS */
const dots = embla.scrollSnapList().map((_, i) => {
  const btn = document.createElement('button')
  btn.className = 'embla__dot'
  btn.addEventListener('click', () => embla.scrollTo(i))
  dotsRoot.appendChild(btn)
  return btn
})

const updateDots = () => {
  const selected = embla.selectedScrollSnap()

  dots.forEach((dot, i) => {
    dot.classList.toggle('embla__dot--selected', i === selected)
  })
}

/* COUNTER */
const updateCounter = () => {
  counterCurrent.textContent = embla.selectedScrollSnap() + 1
  counterTotal.textContent = embla.scrollSnapList().length
}

/* TITLE */
const updateMeta = () => {
  titleNode.textContent = slideTitles[embla.selectedScrollSnap()]
}

/* EVENTS */
embla.on('init', () => {
  updateButtons()
  updateDots()
  updateCounter()
  updateMeta()
})

embla.on('select', () => {
  updateButtons()
  updateDots()
  updateCounter()
  updateMeta()
})

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

// как отключить прокрутку через драг н дроп?

