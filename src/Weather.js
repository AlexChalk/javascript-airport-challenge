"use strict";
var weather = function(){};

Weather.prototype.isStormy = function () {
  if (Math.random() > 0.5) {
    return true
  } else {
    return false
  }
});
