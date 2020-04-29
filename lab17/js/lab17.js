/**
  *Author: Julianna Woldstad
  *Created: 13 April 2020
  *License: Public Domain
**/

// 1) Add a click event to each button
// 2) In the event code, toggle a new class within the div
// 3) Go into your css and style each of the classes
// 4) Test each button

//button 1 event
$("#button1").click(function(){
	$("#button1").removeClass("green");
	$("#button1").toggleClass("blue");
});
//botton 2 event
$("#button2").click(function(){
	$("#button2").removeClass("green");
	$("#button2").toggleClass("pink");
});

//button 3 event
$("#button3").click(function(){
	$("#button3").removeClass("green");
	$("#button3").toggleClass("purple");
});

var colorArray = ["#bccaf5","#daf2cb","#f5dcda","#ded7f7","#faefc0", "#fad8a2","transparent"]

var color1 = 0;
$("#button4").click(function(){
	$(".taskx").css("background-color", colorArray[color1]);
	color1++;
	console.log("Current color:", color1, colorArray[color1] );
	if (color1 >= colorArray.length) {
		color1 = 0;
	}
});

// // Creates a button element, button 1
// var button1 = $("<button>");

// // Adds innerHTML to button
// button1.html("Press Me")

// // Adds button to output div
// $("#output").append(button1);

// // Styles button
// button1.addClass("green");

// //Add click event
// button1.click(function(){
// 	// Restyle button with jQuery
// 	button1.removeClass("green");
// 	button1.toggleClass("blue");
// });

// //button 1 event
// $("#button1").click(function(){
// 	button.html("<h3>Make me green!</h3>");
// 	$("#result1").removeClass("blue");
// 	$("#result1").toggleClass("green");
// });
// //botton 2 event
// $("#button2").click(function(){
// 	$("#result2").html("<h3>Make me orange!</h3>");
// 	$("#result2").removeClass("pink");
// 	$("#result2").toggleClass("green");
// });

// //button 3 event
// $("#button3").click(function(){
// 	$("#result3").html("<h3>Make me yellow</h3>");
// 	$("#result3").removeClass("purple");
// 	$("#result3").toggleClass("green");
// });
