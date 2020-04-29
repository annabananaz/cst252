/**
	*Author: Julianna Woldstad
	*Created: 23 February 2020
	*License: Public Domain
**/

//Output element
var outputEl = document.getElementById("output");

//What this does is write out the text and change the color of the element
var new1El = document.createElement("p");
	new1El.innerHTML = "Boomshakalaka";
	new1El.style.color = "CadetBlue";

//What this does it write out the text and change the font size of the element
var new2El = document.createElement("p");
	new2El.innerHTML = "What's crackalakin?";
	new2El.style.fontSize = "30px";

//Appends both elements to the document
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

