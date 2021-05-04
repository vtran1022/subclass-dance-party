describe('slidingDancer', function() {

  var slidingDancer, clock;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new makeSlidingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that changes the opacity and slide across the screen', function() {
    sinon.spy(slidingDancer.$node, 'animate');
    slidingDancer.step();
    expect(slidingDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should change opacity and slide at least once per second', function() {
      sinon.spy(slidingDancer, 'step');
      expect(slidingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(slidingDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(slidingDancer.step.callCount).to.be.equal(2);
    });
  });
});

