/**
  *Author: Julianna Woldstad
  *Created: 4 March 2020
  *License: Public Domain
**/

function FizzBuzz() {
var outputStr = '';
for (var i=1; i <= 200; i++) {

  outputStr += i + ". ";
  if (i % 3 == 0) {
    // If divisible by 3
  outputStr += "Fizz";
  }

  if (i % 5 == 0) {
    // If divisible by 5
  outputStr += "Buzz";
  }

  if (i % 7 == 0) {
    // If divisible by 7
  outputStr += "Boom";
  }
  //If i is not divisible
  if (outputStr != "") {
    console.log(outputStr + "!");
  } else {
    console.log(i);
  }
  outputStr += "<br>";
}
  return outputStr;
}

//Allows output to appear in the div
var outputEl = document.getElementById("output");
  var newEl = document.createElement("p");
  newEl.innerHTML = FizzBuzz();

  //Appends paragraph to the div 
  outputEl.appendChild(newEl);

//   function createTable() {
//   var outputTable = document.createElement("TABLE");
//   outputTable.setAttribute("id", "myTable");
//   document.body.appendChild(outputTable);

//   var y = document.createElement("TR");
//   y.setAttribute("id", "myTr");
//   document.getElementById("myTable").appendChild(y);

//   var z = document.createElement("TD");
//   var t = document.createTextNode("cell");
//   z.appendChild(t);
//   document.getElementById("myTr").appendChild(z);
// }