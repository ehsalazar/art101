// Project: Lab 6: Arrays and Objects
// Author: Élan Salazar
// Created: January 29, 2021

//declare variables
var myTransport = ["bus", "train", "walking"];

var myMainRide = {
    make: "Honda",
    model: "Element",
    color: "blue",
    year: 2006,
    // calculate
    age: function(){
        return 2021 - myMainRide.year;
    }
};

// https://www.w3schools.com/jsref/jsref_join.asp
document.writeln(`My modes of transportation: ${myTransport.join(', ')}<br><br>`);

document.writeln("Last time I owned a ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

document.writeln(`That ride would now be ${myMainRide.age()} years old!`);
