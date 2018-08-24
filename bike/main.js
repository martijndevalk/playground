
const lineEq = (y2, y1, x2, x1, currentVal) => {
  // y = mx + b
  var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
  return m * currentVal + b;
};

const product = document.querySelector('.product-info');
const ride = document.querySelector('.ride');
const distanceThreshold = { min: 0, max: 75 };
const opacityInterval = { from: 0.5, to: 1 };

new Nearby(product, {
  onProgress: (distance) => {
    const o = lineEq(opacityInterval.from, opacityInterval.to, distanceThreshold.max, distanceThreshold.min, distance);

    TweenMax.to(ride, .3, {
      opacity: Math.max(o, opacityInterval.from)
    });
  }
});