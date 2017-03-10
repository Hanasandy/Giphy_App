$(document).ready(function() {

// Store a list of topics in an array
var topics = ["dog", "cat", "rabbit", "horse", "frog"];
// var newButtons = [];

//Add all items in the topics attay to the DOM as a button
function createButtons(chips) {
	for (var i = 0; i < chips.length; i++) {
	  // $("#topicsButton").append("<button id =" + topics[i] + ">");
	  // $("button#" + topics[i]).text(topics[i]);
	 var button = $("<button>");
	 	 button.attr("id",chips[i]).text(chips[i]);
	  	$("#topic-buttons").append(button);
	 }	
};

createButtons(topics);

// When user clickes "Add", create button
$("#input-button").on("click", function() {
	event.preventDefault();

  var newTopicsArr = [];
  //Get the value of user input and store in variable
  var newTopicsVar = $("#user-input").val().trim();

  //Add that new topic to te topic array
  newTopicsArr.push(newTopicsVar);
  // create buttons of topics array
//    for (var i = 0; i < topics.length; i++) {
//    var button = $("<button>");
//  	 button.attr("id",topics[i]).text(topics[i]);
//   	$("#topicsButton").append(button);
// } 
  createButtons(newTopicsArr);

});

// // click button textbox // user-input
 $(document).on("click", "button", function() {
   
  $("#gif-images").empty();       
// Get 10 images from Giphy
  //create variables for image and URL
  var image = $(this).attr("id");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + image + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
  	url: queryURL, // var queryURL 名前を合わせる。もしvar urlならばurl: url
  	method: "GET"
  }).done(function(response){

   for (i = 0; i < response.data.length; i++) {

   // Put Giphy images on DOM
	
   	var movieGif = response.data[i].images.fixed_height.url; 
    var stillGif = response.data[i].images.fixed_height_still.url;
    var rating = response.data[i].rating;
    	// console.log(movieGif, stillGif, rating);

    var gifImages = $("<img>");
        gifImages.attr("data-state", "still")    
                 .attr("data-animate", movieGif)    
                 .attr("data-still", stillGif)
                 .attr("src", stillGif);

     var showRating = $("<p>");
         showRating.text(rating);

     var newDiv = $("<div>");
         newDiv.append(showRating, gifImages);
         newDiv.addClass("newDiv");

    $("#gif-images").append(newDiv);
     }
  }); 

//When user clicks gif, make gif or stop

$(document).on("click", "img", function() {  //click handlers
	//if data-state === still, scr === data-animate
     var state = $(this).attr("data-state");
     var dataStill = $(this).attr("data-still");
     var dataAnimate = $(this).attr("data-animate");

     if (state == "still") {
       $(this).attr("src", dataAnimate);
       $(this).attr("data-state", "animate");
     }
     else {
     	$(this).attr("src", dataStill);
     	$(this).attr("data-state", "still");
     }     
	//else data-state !== still, scr === data-still

    // if ("data-state", "still" ===  )

});

// $("#gif-images").append(movieGif, stillGif, rating);	  


});




});