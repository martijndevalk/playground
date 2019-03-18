import { TweenMax, TimelineMax, Power1, Expo, Elastic } from 'gsap/TweenMax'
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

    document.addEventListener('keydown', (ev) => {
      const keyCode = ev.keyCode || ev.which

      if (keyCode === 39) {
        this.navigate('next')
      } else if (keyCode === 37) {
        this.navigate('prev')
      }
    })
  }
  navigate (direction = 'next') {
    if (this.isAnimating) return
    this.isAnimating = true

    const currentSlide = this.slides[this.current]
    this.current = direction === 'next' ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : this.current > 0 ? this.current - 1 : this.slidesTotal - 1
    const upcomingSlide = this.slides[this.current]

    // The elements we will animate.
    const currentImg = currentSlide.DOM.img
    const upcomingImg = upcomingSlide.DOM.img

    this.tl = new TimelineMax({
      onStart: () => {
        upcomingSlide.DOM.el.classList.add('slide--current')
      },
      onComplete: () => {
        currentSlide.DOM.el.classList.remove('slide--current')
        this.isAnimating = false
      }
    }).add('begin')

    this.tl
      .set(currentImg, { transformOrigin: direction === 'next' ? '100% 50%' : '0% 50%' })

      .to(currentImg, 0.3, {
        ease: Power1.easeOut,
        scaleX: 2,
        scaleY: 0.95,
        opacity: 0.5
      }, 'begin')

      .to(currentImg, 0.5, {
        ease: Expo.easeOut,
        x: direction === 'next' ? -1 * winsize.width : winsize.width
      }, 'begin+=0.2')

      .set(upcomingImg, {
        transformOrigin: direction === 'next' ? '0% 50%' : '100% 50%',
        x: direction === 'next' ? winsize.width : -1 * winsize.width,
        scaleX: 1.5,
        scaleY: 0.8,
        opacity: 0.3
      }, 'begin+=1.05')

      .to(upcomingImg, 0.2, {
        ease: Expo.easeOut,
        x: 0
      }, 'begin+=1.05')

      .to(upcomingImg, 0.6, {
        ease: Elastic.easeOut.config(1, 0.7),
        scaleX: 1,
        scaleY: 1,
        opacity: 1
      }, 'begin+=1.1')

    this.tl.addCallback(() => {
      body.classList.add('show-deco')
    }, 'begin+=0.2')

    this.tl.addCallback(() => {
      body.classList.remove('show-deco')
    }, 'begin+=1.1')
  }
}

new Slideshow(document.querySelector('.slideshow'))

// Preload all the images in the page.
imagesLoaded(document.querySelectorAll('.slide__img'), { background: true }, () => body.classList.remove('loading'))
