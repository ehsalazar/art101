

function getajaxdata(){
  // $.ajax({
  //   async: true,
  // 	crossDomain: true,
  //   url: "https://genius.p.rapidapi.com/artists/16775/songs",
  //   type: "GET",
  //   datatype: "json",
  //   headers: {
  // 		"x-rapidapi-key": "77f9d9ff88msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
  // 		"x-rapidapi-host": "genius.p.rapidapi.com"
  // 	},
  //   success: successFun,
  //   error: errorFun,
  //   complete: function(xhr,status){
  //     console.log("the request has been done");
  //   }
  // })
  // function successFun(result){
  //   console.log(result)
  //   //$('#ajax_text').append(result);
  //   // $('#ajax_text').html(result.extract );
  //   $('#ajax_text').append("<img src="+result.response.songs[0].song_art_image_url+">");
  // }
  // function errorFun(xhr,status,strErr){
  //   console.log("error "+strErr);
  // }
  const settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://genius.p.rapidapi.com/artists/16775/songs",
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-key": "77f9d9ff88msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
  		"x-rapidapi-host": "genius.p.rapidapi.com"
  	}
  };

  $.ajax(settings).done(function (response) {
    var songsObj = response.response.songs;
    for (var i = 0; i < songsObj.length; i++) {
       $('#ajax_text').append("<figure><img id='img_id_"+i+"' class = 'images' src="+response.response.songs[i].song_art_image_url+"><figcaption>" + response.response.songs[i].full_title +"</figcaption></figure>");
    }
  	console.log(songsObj);
    });
}

$('#ajax_get').click(getajaxdata)
