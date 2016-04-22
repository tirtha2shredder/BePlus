function createEvents() {
	console.log("Create Event")

	requestCreateEvents()
}

function requestCreateEvents() {
try{
  var URL = "https://beplus.azure-mobile.net/api/createEvent"

  if (validateCreateEvents()){

  //Disable All Inputs
  $("input").prop("disabled", true);
  $("button").prop("disabled", true);

  var req = window.localStorage.getItem("createEventRequest");
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
                                        "The Event has been Created \n All the Donors will be notified",  // message
                                        alertDismissed,         // callback
                                        'Create Event',            // title
                                        'OK'                  // buttonName
                                        );

          function alertDismissed() {
              window.location.href = "Home_community.html";

                }

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
          },
          timeout: 60000
          });

  }
  }
  catch(e){
		alert("Create Event Request"+e.message);
	}
}
