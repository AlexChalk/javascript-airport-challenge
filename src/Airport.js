"use strict";

var Airport = function(weather){
  this._hangar = [];
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
};

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if (this._weather.isStormy()) {
    throw new Error('Planes cannot land when weather is stormy'); 
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if (this._weather.isStormy()) {
    throw new Error('Planes cannot take off when weather is stormy'); 
  }
  this._hangar.pop(plane);
};
