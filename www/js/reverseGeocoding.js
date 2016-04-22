function getLocality(){

/** Get GeoLocation ***/
navigator.geolocation.getCurrentPosition(onSuccess, onError);
var latitude = 22;
var longitude = 33;
alert("geo");
  /** Get GeoLocation Data ***/
  var onSuccess = function(position) {

    //latitude = position.coords.latitude ;
    //longitude = position.coords.longitude;
    alert(latitude + "," + longitude)
  };

  /** GeoLocation Callback Error ***/
  function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var rootURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
var latlng = latitude + "," + longitude;
var apiKey = "&key=AIzaSyBvkZzhP8cS2-8rhhf3s8202p9LhQmrRuI"

var geoCodingURL = rootURL + latlng + apiKey;



        $.ajax({
          type: "GET",
          url: geoCodingURL,
          dataType: "json",
          success: function (data){


            var response = JSON.stringify(data)
            var results = JSON.stringify(JSON.parse(response).results[0]);

            var addressComponents = JSON.parse(response).results[0].address_components[1].long_name

            console.log(addressComponents)

			//Assign To Locality Input
			$('#registerLocalityOrg').val(addressComponents)
          },

          error: function(data){
			alert("Error. Try Again")
          },
			timeout: 6000
        });
}
