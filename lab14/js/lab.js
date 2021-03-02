// Project: Lab 14: Debugging Tools & Strategies
// Author: Élan Salazar
// Date: March 1, 2021

// Debugged and refactored code for Lab 11

// Specific changes:
// 1) when the special class is added to a div, it's removed from the others, allowing only one special div at a time
// 2) if a div has the special class, add the button-special class to the color-botton, otherwise remove it

// // Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// // Find the section you want to add the button to
// // Create the button
// // Add it to the section
// $("#challenge").append("<button id=challenge-button>");
// $("#problems").append("<button id=problems-button>");
// $("#results").append("<button id=results-button>");
// $("#output").append("<button id=color-button>"); //bonus
//
// // Give it a text label
// $("#challenge-button").html("Challenge Magic");
// $("#problems-button").html("Problems Magic");
// $("#results-button").html("Results Magic");
// $("#color-button").html("Button Magic"); //bonus
//
// // Using jQuery, do the following for each button:
// // Add a click event to each button
// // Find the challenge, problems, or results section the button is in.
// // Toggle a class special within the <div> of the section
// // https://www.w3schools.com/jquery/html_toggleclass.asp
// $("#challenge-button").click(function(){
//   $("#challenge").toggleClass("special");
//   //when the special class is added to this div, it's removed from the others, allowing only one special div at a time
//   $("#problems, #results").removeClass("special");
//   //if a div has the special class, add the button-special class to the color-botton, otherwise remove it
//   if ($("#challenge").hasClass("special")){
//     $("#color-button").addClass("button-special");
//   } else {
//     $("#color-button").removeClass("button-special");
//   }
// });
//
// $("#problems-button").click(function(){
//   $("#problems").toggleClass("special");
//   //when the special class is added to this div, it's removed from the others, allowing only one special div at a time
//   $("#challenge, #results").removeClass("special");
//   //if a div has the special class, add the button-special class to the color-botton, otherwise remove it
//   if ($("#problems").hasClass("special")){
//     $("#color-button").addClass("button-special");
//   } else {
//     $("#color-button").removeClass("button-special");
//   }
// });
//
// $("#results-button").click(function(){
//   $("#results").toggleClass("special");
//   //when the special class is added to this div, it's removed from the others, allowing only one special div at a time
//   $("#problems, #challenge").removeClass("special");
//   //if a div has the special class, add the button-special class to the color-botton, otherwise remove it
//   if ($("#results").hasClass("special")){
//     $("#color-button").addClass("button-special");
//   } else {
//     $("#color-button").removeClass("button-special");
//   }
// });
//
// // Bonus
// // Make a button that changes another button's color and vice versa. Pressing the button should make the color change back to default.
// $("#color-button").click(function(){
//   $("#problems-button, #results-button, #challenge-button").toggleClass("button-special")
// });



// Old code for Lab 11

// // Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// // Find the section you want to add the button to
// // Create the button
// // Add it to the section
// $("#challenge").append("<button id=challenge-button>");
// $("#problems").append("<button id=problems-button>");
// $("#results").append("<button id=results-button>");
// $("#output").append("<button id=color-button>"); //bonus
//
// // Give it a text label
// $("#challenge-button").html("Challenge Magic");
// $("#problems-button").html("Problems Magic");
// $("#results-button").html("Results Magic");
// $("#color-button").html("Button Magic"); //bonus
//
// // Using jQuery, do the following for each button:
// // Add a click event to each button
// // Find the challenge, problems, or results section the button is in.
// // Toggle a class special within the <div> of the section
// // https://www.w3schools.com/jquery/html_toggleclass.asp
// $("#challenge-button").click(function(){
//   $("#challenge").toggleClass("special");
//   $("#color-button").toggleClass("button-special"); //bonus
// });
//
// $("#problems-button").click(function(){
//   $("#problems").toggleClass("special");
//   $("#color-button").toggleClass("button-special"); //bonus
// });
//
// $("#results-button").click(function(){
//   $("#results").toggleClass("special");
//   $("#color-button").toggleClass("button-special"); //bonus
// });
//
// // Bonus
// // Make a button that changes another button's color and vice versa. Pressing the button should make the color change back to default.
// $("#color-button").click(function(){
//   $("#problems-button, #results-button, #challenge-button").toggleClass("button-special")
// });
