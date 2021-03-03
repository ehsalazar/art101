// Project: Lab 15: AJAX
// Author: Élan Salazar
// Date: March 2, 2021

// Add a click event to the button
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
$("#activate").click(apiCall);

var apiEndpoint = "https://random.dog/woof.json"

// Put the output of the AJAX call in the output div
function output(url){
  // if the file extension is mp4, create a video tag
  if (url.slice(-3) == "mp4"){
    $("#output").html(`<video autoplay="" loop="" muted=""><source src="${url}"></video>`);
  } else {
  // otherwise, create an image tag
    $("#output").html(`<img src="${url}">`);
  }
}

// Use a jQuery AJAX call to fetch output from your API
function apiCall() {
  console.log("doing API stuffs");
  $.ajax({
    url: apiEndpoint,
    data: { },
    type: "GET",
    dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
    console.log("data url: " + data.url);
    output(data.url);
  })
  // If the request fails
  .fail(function(xhr, status, errorThrown) {
    console.log("Failure!");
    $("#output").html(errorThrown + " Status:" + status );
  })
}
