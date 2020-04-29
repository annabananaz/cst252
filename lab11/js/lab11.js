/**
	*Author: Julianna Woldstad
	*Created: 3 March 2020
	*License: Public Domain
**/

function sortingHat(name) {
	var len = name.length;
	var mod = len % 4;

	if (mod == 0) {
		return "Gryffindor";
	}
	if (mod == 1) {
		return "Ravenclaw";
	}
	if (mod == 2) {
		return "Slytherin";
	}
	if (mod == 3){
		return "Hufflepuff";
	}
}
	var button = document.getElementById("button");
	button.addEventListener("click", function(){
		var name = document.getElementById("input").value;
		var house = sortingHat(name);
		newText = "<p> The Sorting Hat has sorted you into " + house + "</p>";
		document.getElementById("output").innerHTML = newText;
	})