// Project: Group 11 Project - COVID-19 Info
// Author: Élan Salazar
// Date: February 25, 2021


// function toggleCounties(){
//   var countyInfo = ["#alameda","#contracosta","#monterey","#sanbenito","#sanfrancisco","#sanmateo","#santaclara","#santacruz"];
//   for (var i = 0; i<countyInfo.length; i++){
//     $(countyInfo[i]).toggleClass("hidden");
//   }
// }
//
// $("#alameda_button").click(toggleCounties)

$("#alameda_button").click(function(){$("#alameda").toggleClass("hidden")})
$("#contracosta_button").click(function(){$("#contracosta").toggleClass("hidden")})
$("#monterey_button").click(function(){$("#monterey").toggleClass("hidden")})
$("#sanbenito_button").click(function(){$("#sanbenito").toggleClass("hidden")})
$("#sanfrancisco_button").click(function(){$("#sanfrancisco").toggleClass("hidden")})
$("#sanmateo_button").click(function(){$("#sanmateo").toggleClass("hidden")})
$("#santaclara_button").click(function(){$("#santaclara").toggleClass("hidden")})
$("#santacruz_button").click(function(){$("#santacruz").toggleClass("hidden")})

$("#testing_button_alameda").click(function(){$("#testing_alameda").toggleClass("unhideTest")});
$("#vaccination_button_alameda").click(function(){$("#vaccination_alameda").toggleClass("unhideVaccine")});
$("#additional_button_alameda").click(function(){$("#additional_alameda").toggleClass("unhideAdditional")});

$("#testing_button_contracosta").click(function(){$("#testing_contracosta").toggleClass("unhideTest")});
$("#vaccination_button_contracosta").click(function(){$("#vaccination_contracosta").toggleClass("unhideVaccine")});
$("#additional_button_contracosta").click(function(){$("#additional_contracosta").toggleClass("unhideAdditional")});

$("#testing_button_monterey").click(function(){$("#testing_monterey").toggleClass("unhideTest")});
$("#vaccination_button_monterey").click(function(){$("#vaccination_monterey").toggleClass("unhideVaccine")});
$("#additional_button_monterey").click(function(){$("#additional_monterey").toggleClass("unhideAdditional")});

$("#testing_button_sanbenito").click(function(){$("#testing_sanbenito").toggleClass("unhideTest")});
$("#vaccination_button_sanbenito").click(function(){$("#vaccination_sanbenito").toggleClass("unhideVaccine")});
$("#additional_button_sanbenito").click(function(){$("#additional_sanbenito").toggleClass("unhideAdditional")});
