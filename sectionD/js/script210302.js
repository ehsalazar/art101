// Project: AJAX
// Author: Élan Salazar
// Date: MArch 02, 2021

function getAjaxData(){
  $.ajax({
    url: "data/data.txt",
    type: "GET",
    datatype: "text",
    success: successFun,
    error: errorFun,
    complete: function(xhr, status){
      console.log("the request has been completed. status: " + status);

    }
  })
  function successFun(result){
    console.log(result);
    $("#ajax_text").html(result);
  }
  function errorFun(xhr,status, strErr){
    console.log("error" + strErr);
  }
}

$("#ajax_get").click(getAjaxData)
