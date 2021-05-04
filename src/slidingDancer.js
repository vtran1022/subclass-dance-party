var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    opacity: 0.25,
    fade: 'very slow',
    left: '+=50'
  });
  this.$node.css({'border': '10px solid green'});
};

makeSlidingDancer.prototype.lineUp = function () {
  makeDancer.prototype.lineUp.call(this);
};