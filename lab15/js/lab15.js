/**
  *Author: Julianna Woldstad
  *Created: 4 April 2020
  *License: Public Domain
**/
class Vehicle {
	constructor (make, model, year, color, extras) {
		this.myMake = make;
		this.myModel = model;
		this.myYear = year;
		this.myColor = color;
		this.extraFeatures = extras;
	}
	
	info () {
		return("Anna owns the " + 
			this.myYear + " " + 
			this.myMake + " " + 
			this.myModel + " in the color " + 
			this.myColor +  " with " + 
			this.extraFeatures + "."
			);
	}
}

var car = new Vehicle("Toyota", "Corolla", "2010", "tan", "NO EXTRAS");

document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";