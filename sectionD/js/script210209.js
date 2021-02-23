// Author: Élan Salazar
// Date: February 9, 2021
// License: MIT
// JavaScript and the DOM


// create a div element that has an id of "div1" and text that says "this is annoying"

// console.log the text from div1
var targetEl = document.getElementById("div1");
console.log(targetEl.innerText)

// add a button
var targetParent = document.getElementById("content")
var buttonEl = document.createElement("button")
buttonEl.innerHTML = "Press Me!"
targetParent.appendChild(buttonEl)

// change the text in div1 to "this is more annoying than I thought" when clicking on the button
buttonEl.onclick = function(){targetEl.innerHTML = "this is more annoying than I though"}
