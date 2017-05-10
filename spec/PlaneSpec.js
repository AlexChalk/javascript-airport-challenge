(function() {
  'use strict';
  describe('Plane', function() {
    var plane;
    var airport;

    beforeEach(function() {
      plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding']);
    });

    describe('#land', function() {
      it('can land at an airport', function() {
	plane.land(airport);
	expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
      });
    });

  });

}());
