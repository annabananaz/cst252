/**
	*Author: Julianna Woldstad
	*Created: 23 February 2020
	*License: Public Domain
**/
//Declaring the first function
function firstThing(test){
	console.log(test + ": This is the first thing")
}
//Declaring the second function
function secondThing(test){
	console.log(test + ": This is the second thing")
}
//Declaring the third function
function thirdThing(test){
	console.log(test + ": This is the third thing")
}

//Test 1
firstThing("Test 1");
secondThing("Test 1");
thirdThing("Test 1");

//test 2
setTimeout(function() {
	firstThing("Test 2");
}, 0);
setTimeout(function(){
	secondThing("Test 2");
}, 0);
setTimeout(function(){
	thirdThing("Test 2");
}, 0);

//Test 3 - order 2, 3, 1
setTimeout(function() {
	firstThing("Test 3");
}, 3500);
setTimeout(function(){
	secondThing("Test 3");
}, 1500);
setTimeout(function(){
	thirdThing("Test 3");
}, 2500);