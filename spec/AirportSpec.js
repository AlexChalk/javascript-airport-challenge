(function() {
  'use strict';
  describe('Airport', function() {
    var airport;
    var plane;

    beforeEach(function() {
      airport = new Airport();
      plane = jasmine.createSpy('plane',['land']);
    });

    it("has no planes by default", function() {
      expect(airport.planes()).toEqual([]);
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

    it('cannot clear planes for takeoff when stormy', function() {
      airport.clearForLanding(plane);
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('Planes cannot take off when weather is stormy');
    });

    describe('isStormy', function() {
      it("can check for bad weather", function() {
	expect(airport.isStormy()).toBeFalsy();
      });
    });
  });



}());
