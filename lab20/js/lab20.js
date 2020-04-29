/**
  *Author: Julianna Woldstad
  *Created: 21 April 2020
  *License: Public Domain
**/

//creates click event for button
$("#btn").click(function(){
	//retrieves data from API
	$.getJSON("https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json", function(comic){

		//gives section a title using the comicObj.title key from the object
		var comicObj = comic;
		$("#output").append("<h4>" + comicObj.title + "</h4>");
		console.log(comic);

		//creates the image using image tag
		var imgObj = image;
    	imgObj.attr('src', comicObj.img);
    	//gives the image an alt attribute
    	imgOBJ.attr('alt', comicOBJ.alt);

	});
});