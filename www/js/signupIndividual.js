/*** Register For Individual ***/
function signUpIndividual(){

console.log($('#emergencyAvailibility').val());

  requestIndividualSignUp();

}

function requestIndividualSignUp(){

try{



	if (validateIndividualSignUp()){
		$("input").prop("disabled", true);
        $("button").prop("disabled", true);
		// Web service call here
    var req = window.localStorage.getItem("signUpIndividualRequest");

      $.ajax({
          type: "POST",
          url: "https://beplus.azure-mobile.net/api/registerDonor",
          data: req,
          contentType : "application/json; charset=utf-8",
          dataType: "json",
          headers: { "x-zumo-application": "MTSpEOSVNXNxGyoVoeZMqnnIIGBqmk93"},

          success: function (data){
            //alert(data);
            alert("Register Success");
          },

          error: function(data){

             $("input").val("");

            var responsetxt = JSON.stringify(data);
            var responseJSON = (JSON.parse(responsetxt).responseJSON);
            //var message = JSON.parse(responseJSON).message;

            var msgJSON = JSON.stringify(responseJSON)
            var msg = JSON.parse(msgJSON).message
            alert(msg);
            $("input").removeAttr('disabled');
            $("button").removeAttr('disabled');
            //console.log(message);


          },
          timeout: 60000
        });

		}
	}
	catch(e){
		alert("Sign Up Individual"+e.message);
	}
}
