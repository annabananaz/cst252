/**
  *Author: Julianna Woldstad
  *Created: 23 March 2020
  *License: Public Domain
**/

function Vehicle(make, model, year, color, extras) {
	this.myMake = make;
	this.myModel = model;
	this.myYear = year;
	this.myColor = color;
	this.extraFeatures = extras;
	this.info = function() {
		return("Anna owns the " + this.myYear + " " + this.myMake + " " + this.myModel + " in the color " + this.myColor +  " with " + this.extraFeatures + ".");
	}
}

var car = new Vehicle("Toyota", "Corolla", "2010", "tan", "NO EXTRAS");

document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";
