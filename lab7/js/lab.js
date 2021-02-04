// Project: Lab 7: Functions
// Author: Élan Salazar
// Created: February 2, 2021

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

// Declare a variable userName and use window.prompt() to get the user's name from the user.
const visitorNameManipulation = () => {
  var visitorName = window.prompt("Howdy. Please tell me your name so I can play with it.");
  var sortedName = sortName(visitorName);
  document.writeln(`Here are the sorted letters in your name : ${sortedName} </br></br>`);
  var shuffledName = shuffleName(visitorName);
  document.writeln("Look! You now have a new, funnier name. ===> <br>");
  document.writeln(`<div class='name'>${shuffledName}</div>`)
}

// Call the function and output the results with document.write() to neatly output the user's sorted name.
visitorNameManipulation();
