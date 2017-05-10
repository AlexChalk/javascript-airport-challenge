# Javascript Airport Challenge

A reimplementation of [this project](https://github.com/adc17/airport_challenge) in Javascript. Planes can take off and land at airports, provided there is no stormy weather. 

## Installation

Clone the repository: `git clone git@github.com:adc17/javascript-airport-challenge.git`

## Usage

Run tests by opening `SpecRunner.html` in your web browser—this also loads the code into your browser's console. Then interact with the project using the console, as follows:
```
> plane = new Plane
Plane {}
> airport = new Airport
Airport {_hangar: Array(0), _weather: Weather}
> plane.land(airport)
Airport.js:14 Uncaught Error: Planes cannot land when weather is stormy
    etc...
> plane.land(airport)
undefined
> airport.planes();
[Plane]
> plane.takeOff();
undefined
> airport.planes();
[]
```

## Other notes

Completed during week five of the [Makers Academy](http://www.makersacademy.com) Bootcamp.
