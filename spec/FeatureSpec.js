(function() {
  'use strict';
  describe('Plane', function() {
    var plane;
    var airport;

    beforeEach(function() {
      plane = new Plane();
      airport = new Airport();
    });

    describe('under normal conditions', function() {
      beforeEach(function(){
	spyOn(Math, 'random').and.returnValue(0);
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
      });
    });

    describe('weather is stormy', function() {
      it("planes cannot take off", function() {
	spyOn(Math,'random').and.returnValue(1);
	expect(function(){ plane.takeOff(); }).toThrowError();
      });

      it("planes cannot land", function() {
	spyOn(Math,'random').and.returnValue(0);
	expect(function(){ plane.land(); }).toThrowError();
	expect(airport.planes()).toEqual([]);
      });
    });
  });
}());
