// Project: Working with loops
// Author: Élan Salazar
// Date: February 23, 2021

// create 10 div elements with a class name box inside the container div
// add an id box_id_[i]
for (var i=0; i<50; i++){
  // $("#container").append(`<div class=box id=box_id_${i+1}>`)
  //color the even boxes with red, and the odd boxes with green
  if (i % 2 == 0) {
    $("#container").append("<div id=box_id_" + (i+1) +" class=box_even>")
  } else {
    $("#container").append("<div id=box_id_" + (i+1) +" class=box_odd>")
  }
}




// for loop structure
// for (var i=1; i<10; i++){
//   console.log(i);
// }

// while(condition){} will continue to loop until the condtion isn't met
// var counter = 0
// while(counter<10){
//   console.log(counter)
//   counter++;
// }
