(function() {
  'use strict';
  describe('Airport', function() {
    var airport;
    var plane;
    var weather;

    beforeEach(function() {
      plane = jasmine.createSpy('plane',['land']);
      weather = jasmine.createSpyObj('weather', ['isStormy']);
      airport = new Airport(weather);
    });

    it("has no planes by default", function() {
      expect(airport.planes()).toEqual([]);
    });

    describe('under normal conditions',function(){
      beforeEach(function(){
	weather.isStormy.and.returnValue(false);
      });
      it('can clear planes for landing', function() {
	airport.clearForLanding(plane);
	expect(airport.planes()).toEqual([plane]);
      });

      it('can clear planes for takeoff', function() {
	airport.clearForLanding(plane);
	airport.clearForTakeOff(plane);
	expect(airport.planes()).not.toContain(plane);
      });
    });

    describe('under stormy conditions',function(){
      beforeEach(function(){
	weather.isStormy.and.returnValue(true);
      });
      it('cannot clear planes for takeoff', function() {
	expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('Planes cannot take off when weather is stormy');
      });

      it('cannot clear planes for landing', function (){
	expect(function(){ airport.clearForLanding(plane); }).toThrowError('Planes cannot land when weather is stormy');
      });
    });

    describe('isStormy', function() {
      it("can check for bad weather", function() {
	expect(airport._weather.isStormy()).toBeFalsy();
      });
    });
  });



}());
