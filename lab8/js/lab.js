// Project: Lab 8: Anon Functions and Callbacks
// Author: Élan Salazar
// Created: February 4, 2021

// you use `document.getElementById("output")` and a `<div id="output">` so that the results of `setTimeout()` appear in our page
var outputElement = document.getElementById("output");

// Create three functions called `firstThing`, `secondThing`, and `thirdThing` that take a parameter `test`
// Using `console.log()` each function should print `test` and some text to indicate which function ran.
const firstThing = (test) => {
  console.log(`${test}: first thing reporting for duty!`);
  outputElement.innerHTML += `${test}: first thing reporting for duty!<br>`
}

const secondThing = (test) => {
  console.log(`${test}: second thing reporting for duty!`);
  outputElement.innerHTML += `${test}: second thing reporting for duty!<br>`
}

const thirdThing = (test) => {
  console.log(`${test}: third thing reporting for duty!`);
  outputElement.innerHTML += `${test}: third thing reporting for duty!<br>`
}

// For your first test, call the three functions in order using "TEST 1" as the argument
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// For your second test, use `setTimeout()` and an anonymous function to call your 3 functions with "TEST 2" as an argument
setTimeout(function(){firstThing("TEST 2");}, 2000);
setTimeout(function(){secondThing("TEST 2");}, 2000);
setTimeout(function(){thirdThing("TEST 2");}, 2000);

// For your third test, like test 2 but adjust the times of `setTimeout()` so your "TEST 3" functions print in the following order: 2, 3, 1.
setTimeout(function(){firstThing("TEST 3");}, 8000);
setTimeout(function(){secondThing("TEST 3");}, 4000);
setTimeout(function(){thirdThing("TEST 3");}, 6000);

// BONUS
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/jsref/event_onload.asp
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp

// Opted for the use of `defer` rather than `.onload`
// https://stackoverflow.com/questions/20180251/when-to-use-window-onload
// https://www.w3schools.com/tags/att_script_defer.asp
