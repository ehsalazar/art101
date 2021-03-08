// Project: Lab 15: JSON & APIs
// Author: Élan Salazar
// Date: March 4, 2021

// Give the section a title using the comicObj.title key from the object
// Create an image tag using the comicObj.img key from the object
// Give the image an alt and title attributes using the comicObj.alt key from the object
function comicOutput(title, img, alt) {
  var output = `<h3>${title}</h3><img src=${img} alt="${alt}" title="${alt}">`;
  $("#output").html(output);
}

var defaultEndpoint = "https://xkcd.com/info.0.json"
var comicObj = {};
var subsequentComicObj = {};

// Use $.ajax() to retrieve data and store this object in a variable comicObj.
function firstApiCall(url){
  $.ajax({
    url: url,
    type: "GET",
    datatype: "json",
    // Within the success callback function, process the parts and add them to your webpage with the appropriate tags.
    success: function (result){
      console.log(result);
      comicObj = result;
      comicOutput(comicObj.title, comicObj.img, comicObj.alt)
    },
    error: function (xhr, status, errorThrown){
      console.log("API call failed!");
      $("#output").html(errorThrown + " Status: " + status );
    },
    complete: function (xhr, status){
      console.log("The API request has completed. Status: " + status);
    }
  })
}

$("#activate").click(function (){
  firstApiCall(defaultEndpoint);
  $(".comic-button").show();
  $("#activate").hide();
})

function subsequentApiCalls(url){
  $.ajax({
    url: url,
    type: "GET",
    datatype: "json",
    success: function (result){
      console.log(result);
      subsequentComicObj = result;
      comicOutput(subsequentComicObj.title, subsequentComicObj.img, subsequentComicObj.alt)
    },
    error: function (xhr, status, errorThrown){
      console.log("API call failed!");
      $("#output").html(errorThrown + " - Status: " + status );
    },
    complete: function (xhr, status){
      console.log("The API request has completed. Status: " + status);
    }
  })
}

$("#prev-button").click(function (){
  if (subsequentComicObj.num > 1) {
    var prevNum = subsequentComicObj.num - 1;
    var newUrl = `https://xkcd.com/${prevNum}/info.0.json`
  } else if (comicObj) {
    prevNum = comicObj.num - 1;
    newUrl = `https://xkcd.com/${prevNum}/info.0.json`
  }
  subsequentApiCalls(newUrl);
})

$("#next-button").click(function (){
  if (subsequentComicObj.num < comicObj.num) {
    var nextNum = subsequentComicObj.num + 1;
    var newUrl = `https://xkcd.com/${nextNum}/info.0.json`
  } else {
    newUrl = `https://xkcd.com/info.0.json`
  }
  subsequentApiCalls(newUrl);
})

$("#first-button").click(function () {
  var newUrl = `https://xkcd.com/1/info.0.json`
  subsequentApiCalls(newUrl);
})

$("#random-button").click(function () {
  var randomNum = Math.floor(Math.random() * comicObj.num)
  var newUrl = `https://xkcd.com/${randomNum}/info.0.json`
  subsequentApiCalls(newUrl);
})

$("#last-button").click(function (){
  subsequentApiCalls(defaultEndpoint);
})



// // Use $.ajax() to retrieve data and store this object in a variable comicObj.
// function apiCall(){
//   $.ajax({
//     url: "https://xkcd.com/info.0.json",
//     type: "GET",
//     datatype: "json",
//     // Within the success callback function, process the parts and add them to your webpage with the appropriate tags.
//     success: function (result){
//       console.log(result);
//       var comicObj = result;
//       // Give the section a title using the comicObj.title key from the object
//       // Create an image tag using the comicObj.img key from the object
//       // Give the image an alt and title attributes using the comicObj.alt key from the object
//       var output = `<h3>${comicObj.title}</h3><img src=${comicObj.img} alt='${comicObj.alt}' title='${comicObj.alt}'>`;
//       $("#output").html(output);
//     },
//     error: function (xhr, status, errorThrown){
//       console.log("API call failed!");
//       $("#output").html(errorThrown + " Status: " + status );
//     },
//     complete: function (xhr, status){
//       console.log("The API request has completed. Status: " + status);
//     }
//   })
// }
//
// $("#activate").click(apiCall)
