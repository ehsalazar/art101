// Project: Lab 11: Libraries & jQuery
// Author: Élan Salazar
// Created: February 16, 2021

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// Create the button
// Add it to the section
$("#challenge").append("<button id=challenge-button>");
$("#problems").append("<button id=problems-button>");
$("#results").append("<button id=results-button>");
$("#content").append("<button id=color-button>"); //bonus

// Give it a text label
$("#challenge-button").html("Challenge Magic");
$("#problems-button").html("Problems Magic");
$("#results-button").html("Results Magic");
$("#color-button").html("Button Magic"); //bonus

// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// https://www.w3schools.com/jquery/html_toggleclass.asp
$("#challenge-button").click(function(){
  $("#challenge").toggleClass("special");
  $("#color-button").toggleClass("button-special"); //bonus
});

$("#problems-button").click(function(){
  $("#problems").toggleClass("special");
  $("#color-button").toggleClass("button-special"); //bonus
});

$("#results-button").click(function(){
  $("#results").toggleClass("special");
  $("#color-button").toggleClass("button-special"); //bonus
});

// Bonus
// Make a button that changes another button's color and vice versa. Pressing the button should make the color change back to default.
$("#color-button").click(function(){
  $("#problems-button, #results-button, #challenge-button").toggleClass("button-special")
});
