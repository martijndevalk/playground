
// {
//     class Slider {
//         constructor (el) {
//             this.DOM = { el: el };

//             this.init();
//         }

//         init() {
//             this.DOM.video = this.DOM.el.querySelector('video')
//             new VideoPlayer(this.DOM.video)
//         }
//     }

//     class VideoPlayer {
//         constructor (el) {
//             this.DOM = { el: el };

//             this.config = {
//                 animation: {
//                     duration: 0.6,
//                     ease: Expo.easeOut
// 				}
//             };

//             this._playVideo()
//             this._videoEnded()
//         }

//         _playVideo() {
//             this.DOM.el.play()
//             this.DOM.el.onended = () => {
//                 return this._videoEnded('ended');
//             }
//         }

//         _videoEnded(status) {
//             console.log(status);
//             return new Promise((resolve, reject) => {
//                 if (status) {
//                     TweenMax.to(this.DOM.el, this.config.animation.duration, {
//                         opacity: 0.5,
//                         ease: this.config.animation.ease,
//                         onComplete: resolve
//                     });
//                 }
//             });
//         }
//     }

//     const slider = new Slider(document.querySelector('.slider'));

//     // Preload all the images in the page..
//     imagesLoaded(document.querySelectorAll('.slide__img'), { background: true }, () => {
//         document.body.classList.remove('loading');
//     });
// }

// {
//     let bubbles = []
//
//     function setup () {
//         createCanvas(600, 400);
//
//         // for (let i = 0; i < 20; i++) {
//         //     let x = random(width);
//         //     let y = random(height);
//         //     let r = random(10, 40);
//         //     bubbles[i] = new Bubble(x, y, r);
//         // }
//     }
//
//     function mousePressed () {
//         let r = random(10, 50);
//         let b = new Bubble(mouseX, mouseY, r);
//         bubbles.push(b);
//     }
//
//     function draw () {
//         background(0);
//
//         for (let i = 0; i < bubbles.length; i++) {
//             bubbles[i]._move();
//             bubbles[i]._show();
//         }
//
//     }
//
//
//     class Bubble {
//         constructor (x, y, r) {
//             this.x = x;
//             this.y = y;
//             this.r = r;
//         }
//
//         _move() {
//             this.x = this.x + random(-5, 5);
//             this.y = this.y + random(-5, 5);
//         }
//
//         _show() {
//             stroke(255);
//             strokeWeight(4);
//             noFill();
//             ellipse(this.x, this.y, this.r * 2);
//         }
//     }
//
//
//     // const init = () => {
//     //
//     // };
//     //
//     // document.addEventListener('DOMContentLoaded', init, {once: true });
//
// }
