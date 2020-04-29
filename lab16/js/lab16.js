/**
  *Author: Julianna Woldstad
  *Created: 11 April 2020
  *License: Public Domain
**/
//allows 
$(document).ready(function() {
	$("#button").click(function(){
	//when button is clicked, alert pops up
		alert("Thank you, kind human!");
	//adds text inside button, like innerHTML
	$("button").html("Make me Green!");
	//changes the color of the box after alert pops up
	$("button").css("background-color", "#9fcc7e",);
	$("button").css("border", "solid white 3px",);
	$("button").css("background-radius", "5px",);
	});
}); 
	
