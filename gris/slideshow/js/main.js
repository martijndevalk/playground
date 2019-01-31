import TweenMax from 'gsap/TweenMax'
import imagesLoaded from 'imagesloaded'

const body = document.body

// Helper functions
//

// Shuffle array
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

// Random number
const getRandomNumber = (min, max) => (Math.random() * (max - min) + min)

const getMousePos = (e) => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop
  }
  return { x: posx, y: posy }
}

// Window sizes.
let winsize
const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight }
calcWinsize()

// Recalculate window sizes on resize.
window.addEventListener('resize', calcWinsize)

// console.log(winsize)
// console.log(shuffleArray([0, 1, 2, 3, 4, 5]))
// console.log(getRandomNumber(-40, 40))
// window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));

class Slide {
  constructor (el) {
    this.DOM = { el: el }
    this.DOM.img = this.DOM.el.querySelectorAll('.slide__img')

    // console.log(this.DOM.img)
  }
}

class Slideshow {
  constructor (el) {
    this.DOM = { el: el }
    this.slides = []
    Array.from(this.DOM.el.querySelectorAll('.slide')).forEach(slide => this.slides.push(new Slide(slide)))
    this.slidesTotal = this.slides.length
    this.current = 0
    this.slides[this.current].DOM.el.classList.add('slide--current')

    this.navCtrls = {
      next: this.DOM.el.querySelector('.nav > .nav__button--next'),
      prev: this.DOM.el.querySelector('.nav > .nav__button--prev')
    }

    this.initEvents()
  }
  initEvents () {
    this.navCtrls.next.addEventListener('click', () => this.navigate('next'))
    this.navCtrls.prev.addEventListener('click', () => this.navigate('prev'))
  }
  navigate(direction = 'next') {
    if (this.isAnimating) return
    this.isAnimating = true


  }
}

new Slideshow(document.querySelector('.slideshow'))

// Preload all the images in the page.
imagesLoaded(document.querySelectorAll('.slide__img'), { background: true }, () => body.classList.remove('loading'))
