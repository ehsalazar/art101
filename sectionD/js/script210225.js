// Project: Create a string matching test
// Author: Élan Salazar
// Date: February 25, 2021

var textBox = $("#text_box");
var testString = $("#original_text p").text();

function matching(str){
  var inputText = textBox.val();
  if (inputText.length > testString.length){
    // alert("ENTERED TEXT IS TOO LONG!!!");
    textBox.css("color","red");
  } else {
    textBox.css("color","black");
  }
  var subString = testString.substring(0,inputText.length);
  if (inputText == testString){
    // color green
    textBox.css("border-color","green");
  } else if (inputText == subString){
    //color blue
    textBox.css("border-color","blue");
  } else {
    //color red
    textBox.css("border-color","red");
  }
}

textBox.keyup(matching)
