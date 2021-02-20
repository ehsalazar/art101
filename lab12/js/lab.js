// Project: Lab 12: Conditionals
// Author: Élan Salazar
// Created: February 19, 2021

// // Create a function sortingHat()
// // that takes a string as an argument: function sortingHat(str)
// function sortingHat(str){
//   // counts the letters in str and assigns it to a variable length
//   var length = str.length;
//   // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
//   // mod will now be a value between 0 and 3
//   var mod = length % 4;
//   // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
//   if (mod == 0) {
//     var house = "Gryffindor";
//   }
//   else if (mod == 1) {
//     var house = "Ravenclaw";
//   }
//   else if (mod == 2) {
//     var house = "Slytherin";
//   }
//   else if (mod == 3) {
//     var house = "Hufflepuff";
//   }
//   return house;
// }

// // Create an event listener attached to #button
// $("#button").click(function(){
//   // that gets the value of #input and assigns it to a variable name
//   var name = $("#input").val();
//   // runs sortingHat(name) and stores the result in a variable house
//   var house = sortingHat(name);
//   var output = `<h3>The Sorting Hat sees you in ${house}!</h3>`;
//   // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
//   $("#output").html(output);
// })

// Bonus
// Can you make it return a description of the Hogwart's house?
// Can you refactor your code to make it simpler? Hint: The conditional can be replaced by an array of houses and using mod as an index.
var houseArr = [
  { house: "Gryffindor",
    description: "The house of the brave, loyal, courageous, adventurous, daring, and chivalrous. Those who stand up for others are typically Gryffindors. Brave-hearted is the most well-known Gryffindor characteristic, and Gryffindors are also known for having a lot of nerve. 'Do what is right' is the motto Gryffindors go by. Being a Gryffindor means that you're probably an adventurous and courageous friend, and you are usually known for doing what is right."
  },
  {
    house: "Ravenclaw",
    description: "The house is known for their wisdom, intelligence, creativity, cleverness, and knowledge. Those who value brains over brawn can be found here. Ravenclaws often tend to be quite quirky as well. 'Do what is wise' is the motto they strive to follow. Though Ravenclaws can be know-it-alls sometimes, they most likely do know what the wisest decision is."
  },
  {
    house: "Hufflepuff",
    description: "This house values hard work, dedication, fair play, patience, and loyalty. Hufflepuff's are known for being just and true. 'Do what is nice' is their motto. Hufflepuff is known as the 'nice house' and believes strongly in sparing people's feelings and being kind. This is not to say that Hufflepuffs aren't smart or courageous. Hufflepuffs just enjoy making others happy and tend to be more patient toward people."
  },
  {
    house: "Slytherin",
    description: "This is the house of the cunning, prideful, resourceful, ambitious, intelligent, and determined. Slytherin's love to be in charge and crave leadership. 'Do what is necessary' is the motto of this house. Slytherin house as a whole is not evil, despite how many dark wizards come out of this house. That is merely based on the choices of those wizards. Slytherins do, however, have a tendency to be arrogant or prideful. This is most likely due to the fact that everyone in Slytherin is exceedingly proud to be there."
  }
]

var credit = "<p class='credit'>Hogwarts house descriptions courtesy of <a href='https://www.theodysseyonline.com/hogwarts-house' target='_blank'>Amanda Clarke</a>.</p>"

// Can you make the Sorting Hat mystery deeper (right now it is based on the length of your name). A checksum or hash is a numeric value returned based on all the values in a string. If we get a numeric value, we can take a modulus and then get a Hogwart's house.

// https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript#8831937
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

// Can you make it so it is easy to add more houses to your list? Hint: houseArray.length
// https://www.w3schools.com/jsref/jsref_abs.asp
function sortingHatHash(str){
  var mod = Math.abs(str.hashCode()) % houseArr.length;
  return houseArr[mod]; //returns an object which contains both the house name and the description
}

$("#button").click(function(){
  var name = $("#input").val();
  var sortedObj = sortingHatHash(name);
  var output = `<h3>The Sorting Hat sees you in ${sortedObj.house}!</h3>` + `<p>${sortedObj.description}</p>` + `${credit}`;
  $("#output").html(output);
})
