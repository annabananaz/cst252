/**
	*Author: Julianna Woldstad
	*Created: 12 February 2020
	*License: Public Domain
**/

//Define variables
var myTransport = ["car", "bike", "legs", "bus",];

var myMainRide = {
	make : 'Toyota',
	model : 'Corolla',
	color : 'Tan',
	year : 2010,
	ownIt : true,
	age : function () {
		return 2019 - year;
	}
};

//Reference the elements
myTransport[1];
myMainRide.color;

document.writeln("Transportation I use: " + myTransport + "</br></br>");
document.writeln("My main ride: <pre>",
	JSON.stringify (myMainRide, null, '\t'), "<pre>");