(function() {
  'use strict';
  describe('Plane', function() {
    var plane;
    var airport;

    beforeEach(function() {
      plane = new Plane();
      airport = new Airport();
    });

    describe('#land', function() {
      it("planes can be instructed to land at an airport", function() {
	plane.land(airport);
	expect(airport.planes()).toContain(plane);
      });

    });

    describe('#takeoff', function() {
      it("planes can be instructed to takeoff from an airport", function() {
        plane.land(airport);
        plane.takeOff();
        expect(airport.planes()).not.toContain(plane);
      });

      describe('weather is stormy', function() {
      	it("planes cannot take off", function() {
      	  plane.land(airport);
      	  spyOn(airport, 'isStormy').and.returnValue(true);
      	  expect(function(){ plane.takeOff(); }).toThrowError();
      	});

        it("planes cannot land", function() {
          spyOn(airport, 'isStormy').and.returnValue(true;)
          expect(function(){ plane.land(); }).toThrowError();
        });
      });
    });
  });
}());
