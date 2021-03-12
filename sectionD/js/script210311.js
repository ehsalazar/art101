// https://covidtracking.com/data/api

function output(pos, hosp, dea) {
  var tag = `<h1>Current CA Data</h1><h3>Positive Tests: ${pos}<br>Hospitializations: ${hosp}<br>Deaths: ${dea}</h3>`;
  $("#ajax_text").html(tag);
}

function getCA() {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covidtracking.com/v1/states/ca/current.json",
    "method": "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    output(response.positive, response.hospitalizedCurrently, response.death)
  })
}

$('#ajax_get').click(getCA)
