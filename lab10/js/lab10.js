/**
	*Author: Julianna Woldstad
	*Created: 2 March 2020
	*License: Public Domain
**/
//This function is fom Lab 7 which sorts the user's name
function sortUserName() {

	//logs username to console
	var userName = document.getElementById("username").value;
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
	//Puts the user's output inside the div as html sorted
	document.getElementById('output').innerHTML = nameSorted;

	//This returns the input sorted after being entered
	return sortUserName;
	}

//Prints user's input after clicking on button
var button = document.getElementById("myButton");
button.addEventListener('click',sortUserName);