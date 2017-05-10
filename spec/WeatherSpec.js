(function() {
  'use strict';
  describe('weather', function() {
    var weather;

    beforeEach(function() {
      weather = new Weather();
    });

    describe ('#isStormy', function(){
      it('can return true', function() {
        spyOn(Math, 'random').and.returnValue(1);
        expect(weather.isStormy()).toBeTruthy();
      });

      it('can return false'() {
        spyOn(Math, 'random').and.returnValue(0);
        expect(weather.isStormy()).toBeFalsy();
      });
    });

  });

}());
