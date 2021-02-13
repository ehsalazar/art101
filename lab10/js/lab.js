// Project: Lab 10: JavaScript Events and Forms
// Author: Élan Salazar
// Created: February 10, 2021


// Borrow the sort() function or my anagram() function from Lab 7.

// Sort the letters of the user's name and return those from the function.
// https://www.w3schools.com/jsref/jsref_sort.asp
const sortName = (name) => {
  let newName = name.toLowerCase().split('').sort().join('');
  return newName;
};

//Convert string to title case with JavaScript
//https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
// https://www.w3docs.com/snippets/javascript/how-to-capitalize-the-first-letter-in-a-string-in-javascript.html
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

// Shuffle the letters of the user's name and return those from the function.
// https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
const shuffleName = (name) => {
  let arr = name.toLowerCase().split('').sort(() => Math.random() - 0.5);
  let shuffledStr = arr.join('');
  return toTitleCase(shuffledStr);
};


// find the button element
var buttonEl = document.getElementById("submit-button");

// find the output div
var outputEl = document.getElementById("output");

// create new elements
// var newEl1 = document.createElement("p");
var newEl2 = document.createElement("p");
var newEl3 = document.createElement("div")
newEl2.innerHTML = "Look! The name tag has your new, alphabet soup name.";
newEl3.className = "name";

// add an event listener to button
buttonEl.addEventListener('click', function(){
  // Gets the value of your input field
  var userInput = document.getElementById('user-name').value;

  // Runs that value through your sort() or anagram() function and saves the results.
  var sortedName = sortName(userInput);
  var shuffledName = shuffleName(userInput);

  // Replaces the html in <div id=output> with the results.
  // newEl1.innerHTML = `Here are the sorted letters in your name : ${sortedName}`;
  // outputEl.appendChild(newEl1);

  outputEl.appendChild(newEl2);
  newEl3.innerHTML = `${shuffledName}`;
  outputEl.appendChild(newEl3);
});
