console.log ("hello")

/*
Listen for form submit.
Form submit occurs when submit-btn is clicked on. 
Obtain value of city-type. 
Assign to var city. 
If city equals NYC change background to nyc.jpg by adding .nyc to body.
Else If city equals LA change background to la.jpg by adding .la to body.
else If city equals SF change background to sf.jpg by adding .sf to body.
else If city equals Austin change background to austin.jpg by adding .austin to body. etc.
*/

$( document ).ready(function() {
    console.log("lets go");
  });

$("form").on("submit", function(event){
	event.preventDefault();
	var city = $("#city-type").val();
	if(city == "nyc" || city == "NYC" || city == "New York" || city == "new york"){
		$("body").removeClass().addClass("nyc");
	}
	else if(city == "LA" || city == "la" || city == "Los Angeles" || city == "los angeles"){
		$("body").removeClass().addClass("la");
	}
	else if(city == "Austin" || city == "austin"){
		$("body").removeClass().addClass("austin");
	}
	else if(city == "SF" || city == "sf" || city == "san fran" || city == "san francisco" || city == "San Francisco"){
		$("body").removeClass().addClass("sf");
	}
	else if(city == "Sydney" || city == "sydney"){
		$("body").removeClass().addClass("sydney");
	}
})