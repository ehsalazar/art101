// Project: AJAX & JSON
// Author: Élan Salazar
// Date: MArch 04, 2021

// Get an image from an API
function getAjaxData(){
  $.ajax({
    url: "https://api.imgflip.com/get_memes",
    type: "GET",
    datatype: "json",
    success: successFun,
    error: errorFun,
    complete: function(xhr, status){
      console.log("the request has been completed. status: " + status);

    }
  })
  function successFun(result){
    console.log(result);
    // https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    var memeObj = result.data.memes[Math.floor(Math.random() * result.data.memes.length)]
    $("#ajax_text").html(`<h3>${memeObj.name}</h3>`);
    $("#ajax_text").append(`<img src=${memeObj.url} width=${memeObj.width} height=${memeObj.height}>`);
  }
  function errorFun(xhr,status, strErr){
    console.log("error" + strErr);
  }
}

$("#ajax_get").click(getAjaxData)

// // Get parts of a wikipedia page
// function getAjaxData(){
//   $.ajax({
//     url: "https://en.wikipedia.org/api/rest_v1/page/summary/Alan_Turing",
//     type: "GET",
//     datatype: "json",
//     success: successFun,
//     error: errorFun,
//     complete: function(xhr, status){
//       console.log("the request has been completed. status: " + status);
//
//     }
//   })
//   function successFun(result){
//     console.log(result);
//     $("#ajax_text").html(`<h1>${result.title}</h1>`);
//     $("#ajax_text").append(result.extract_html);
//   }
//   function errorFun(xhr,status, strErr){
//     console.log("error" + strErr);
//   }
// }
//
// $("#ajax_get").click(getAjaxData)
