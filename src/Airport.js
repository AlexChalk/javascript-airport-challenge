  "use strict";
  var Airport = function(){
    this._hangar = [];
  };
  Airport.prototype.planes = function(){ return this._hangar; };
  Airport.prototype.clearForLanding = function(plane){
    this._hangar.push(plane);
  };
