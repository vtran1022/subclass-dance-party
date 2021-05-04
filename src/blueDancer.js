var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;

makeBlueDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.css({
    'border': Math.random() * 20 + 5 + 'px solid blue',
    'border-radius': '5px'
  });
};

makeBlueDancer.prototype.lineUp = function () {
  makeDancer.prototype.lineUp.call(this);
};
