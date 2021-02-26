// Project: Group 11 Project - COVID-19 Info
// Author: Élan Salazar
// Date: February 25, 2021

var countyInfo = ["#alameda","#contracosta","#monterey","#sanbenito","#sanfrancisco","#sanmateo","#santaclara","#santacruz"];

// function toggleCounties(arr){
//   for (var i = 0; i<arr.length; i++){
//     $(arr[i]).toggleClass("hidden");
//   }
// }

// $("#alameda_button").click(toggleCounties(countyInfo))

$("#alameda_button").click(function(){$("#alameda").toggleClass("hidden")})
$("#contracosta_button").click(function(){$("#contracosta").toggleClass("hidden")})
$("#monterey_button").click(function(){$("#monterey").toggleClass("hidden")})
$("#sanbenito_button").click(function(){$("#sanbenito").toggleClass("hidden")})
$("#sanfrancisco_button").click(function(){$("#sanfrancisco").toggleClass("hidden")})
$("#sanmateo_button").click(function(){$("#sanmateo").toggleClass("hidden")})
$("#santaclara_button").click(function(){$("#santaclara").toggleClass("hidden")})
$("#santacruz_button").click(function(){$("#santacruz").toggleClass("hidden")})

$("#testing_button").click(function(){$("#testing").toggleClass("unhideTest")});
$("#vaccination_button").click(function(){$("#vaccination").toggleClass("unhideVaccine")});
$("#additional_button").click(function(){$("#additional").toggleClass("unhideAdditional")});
