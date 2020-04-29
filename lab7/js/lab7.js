/**
	*Author: Julianna Woldstad
	*Created: 17 February 2020
	*License: Public Domain
**/

//Sorts the user's name by taking the user's input and sorting the letters of their name)
function sortUserName() {

	var userName = window.prompt("Hello there. Please tell me your name so I can fix it");
	console.log("userName =", userName);
	//Split string to array
	var nameArray = userName.split('');
	console.log("nameArray =", nameArray);
	//Sort the array
	var nameArraySort = nameArray.sort();
	console.log("nameArraySort =", nameArraySort);
	//Join array back to a string
	var nameSorted = nameArraySort.join('');
	console.log("nameSorted =", nameSorted);
	return nameSorted;
	}

	//Output
	document.writeln("Here's your fixed name: ", sortUserName(), "</br>");
