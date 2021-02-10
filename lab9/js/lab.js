// Project: Lab 9: JavaScript for the Web
// Author: Élan Salazar
// Created: February 09, 2021

// https://www.w3schools.com/jsref/dom_obj_all.asp

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");
new1El.id = "first";

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Hello from the first new element!";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");
new2El.id = "second";

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "Hi from the second new element!";

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.textAlign = "center";
new1El.style.border = "dotted";
new1El.style.backgroundColor = "yellow";
new2El.style.textAlign = "center";
new2El.style.border = "dashed";
new2El.style.backgroundColor = "orange";

// Bonus Tasks
// appendChild() adds an element to the bottom of an element. Can you add a new element to the top of an element?
var new3El = document.createElement("p");
new3El.id = "third";
new3El.innerHTML = "Howdy from the third new element!";

// https://www.w3schools.com/jsref/met_node_insertbefore.asp
// outputEl.insertBefore(new3El, new1El);

// https://stackoverflow.com/questions/14846506/append-prepend-after-and-before
outputEl.prepend(new3El);

new3El.style.textAlign = "center";
new3El.style.border = "solid";
new3El.style.backgroundColor = "red";
