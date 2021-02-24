// Project: Lab 13: Loops
// Author: Élan Salazar
// Created: February 23, 2021

// Create a "FizzBuzz" function similar to how we did in class.
// If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
function fizzBuzz() {
// Loop through numbers 1 to 200, listing them as you go
  for (var i = 1; i <= 200; i++){
    var str = "";
    // If the number is a multiple of 3, if should print "Fizz!"
    if (i%3 == 0){
      str += `Fizz`;
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    if (i%5 == 0){
      str += `Buzz`;
    }
    // If the number is a multiple of 7, it should print "Boom!"
    if (i%7 == 0){
      str += `Boom`;
    }
    if (str == ""){
      $("#output").append(`<p>${i}</p>`)
    } else {
    $("#output").append(`<p>${i} - ${str}!</p>`)
    }
  }
}

fizzBuzz();

// function fizzBuzzBoom() {
//   for (var i = 1; i<=200; i++){
//     if (i % 105 == 0){
//       $("#output").append(`<p>${i} - FizzBuzzBoom!</p>`)
//     } else if (i % 35 == 0) {
//       $("#output").append(`<p>${i} - BuzzBoom!</p>`)
//     } else if (i % 15 == 0) {
//       $("#output").append(`<p>${i} - FizzBuzz!</p>`)
//     } else if (i % 5 == 0) {
//       $("#output").append(`<p>${i} - Buzz!</p>`)
//     } else if (i % 3 == 0) {
//       $("#output").append(`<p>${i} - Fizz!</p>`)
//     } else {
//       $("#output").append(`<p>${i}</p>`)
//     }
//   }
// }

// fizzBuzzBoom();
