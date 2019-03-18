/*
const lineEq = (y2, y1, x2, x1, currentVal) => {
  // y = mx + b
  var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
  return m * currentVal + b;
};

const product = document.querySelector('.product-info');
const ride = document.querySelector('.ride');

const distanceThreshold = { min: 0, max: 75 };
const filterInterval = { from: 0.2, to: 1 };

new Nearby(product, {
  onProgress: (distance) => {
    const o = lineEq(filterInterval.from, filterInterval.to, distanceThreshold.max, distanceThreshold.min, distance);

    console.log(o);

    TweenMax.to(ride, .3, {
      'filter': 'brightness(' + Math.max(o, filterInterval.from) + ')'
    });
  }
});
*/
