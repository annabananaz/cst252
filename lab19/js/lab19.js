/**
  *Author: Julianna Woldstad
  *Created: 21 April 2020
  *License: Public Domain
**/

//creates click event for button

$("#btn").click(function(results){
	// AJAX function to get data
    // Using the core $.ajax() method
    $.ajax({
	    // The URL for the request
	    url: "https://api.kanye.rest/",
	    // The data to send (will be converted to a query string)
	    data: { },
	    // Whether this is a POST or GET request
	    type: "GET",
	    //the data we get back
	    dataType: "json",
  	})
    //inserts data to output div
    // If the request succeeds
	.done(function( results ) {
		//insert data into output div
 		console.log(results);
 		var quote = results.quote;

 		//Old Code: $("#output").html("Kanye says: " + quote);
 		$("#output").html("Kanye says: " + quote);

	})
	// If the request fails
	.fail(function( xhr, status, errorThrown ) {
 		console.log(errorThrown + " Status:" + status );
	});
});