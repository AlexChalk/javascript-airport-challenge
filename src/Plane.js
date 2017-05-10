"use strict";
var Plane = function(){};
Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeOff = function (airport){
  this._location.clearForTakeOff(this);
};
