function addOfflineDonor(){

	requestOfflineDonorEntry();

}

function alertDismissed() {
      window.location.href = "Home_community.html";

}

function requestOfflineDonorEntry(){

	var URL = "https://beplus.azure-mobile.net/api/importDonorData"

	if(validateOffileDonorEntry()){

	//Disable All Inputs
  	$("input").prop("disabled", true);
  	$("button").prop("disabled", true);

  	var req = window.localStorage.getItem("addOfflineDonorRequest");
  	console.log(req)

  //Web Service Call Here
  $.ajax({
          type: "POST",
          url: URL,
          data: req,
          contentType : "application/json; charset=utf-8",
          dataType: "json",
          headers: { "x-zumo-application": "MTSpEOSVNXNxGyoVoeZMqnnIIGBqmk93"},

          success: function (data){

            navigator.notification.alert(
                                        "New Offline Donor Added",  // message
                                        alertDismissed,         // callback
                                        'Add Donor',            // title
                                        'OK'                  // buttonName
                                        );


          },

          error: function(data){

             $("input").val("");

            var responsetxt = JSON.stringify(data);
            var responseJSON = (JSON.parse(responsetxt).responseJSON);
            //var message = JSON.parse(responseJSON).message;

            var msgJSON = JSON.stringify(responseJSON)
            var msg = JSON.parse(msgJSON).message

            navigator.notification.alert(
                                        msg,  // message
                                        alertDismissed,         // callback
                                        'Add Donor',            // title
                                        'OK'                  // buttonName
                                        );

            $("input").removeAttr('disabled');
            $("button").removeAttr('disabled');
          },
          timeout: 60000
          });

  }
}



