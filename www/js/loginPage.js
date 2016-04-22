/*** For All Sign In ***/
function login() {

console.log($('#catergoryLogin').val())

	requestLogin();

}


function requestLogin() {

try{

  var catergoryLoginSelected = $('#catergoryLogin').val()
  var rootURL = "https://beplus.azure-mobile.net/api/"

  var loginDonorSubURL = "loginDonor"
  var loginOrganizationSubURL = "loginOrganization"
  var URL;
  var loginType;


/*** Fix Proper URL based on Sign In Category Selected ***/
  if (catergoryLoginSelected == "Individual") {
      URL = rootURL + loginDonorSubURL;
  }
  else if (catergoryLoginSelected == "Community"){
     URL = rootURL + loginOrganizationSubURL;
  }

  console.log(URL);

		if (validateLogin()){
		$("input").prop("disabled", true);
    $("button").prop("disabled", true);
		// Web service call here
    	var req = window.localStorage.getItem("loginRequest");
      console.log(req)

      $.ajax({
          type: "POST",
          url: URL,
          data: req,
          contentType : "application/json; charset=utf-8",
          dataType: "json",
          headers: { "x-zumo-application": "MTSpEOSVNXNxGyoVoeZMqnnIIGBqmk93"},

          success: function (data){

            if (catergoryLoginSelected == "Individual") {

            /*** Process JSON Data ***/
            var responsetxt = JSON.stringify(data);
            var id = JSON.parse(responsetxt).id
            var name = JSON.parse(responsetxt).name
            var phone = JSON.parse(responsetxt).phone
            var bloodGroup = JSON.parse(responsetxt).bloodGroup
            var email = JSON.parse(responsetxt).email
            console.log(name)


            /*** Set Local Storage ***/
            localStorage.setItem("loginStatus", true);
            localStorage.setItem("id", id);
            localStorage.setItem("phone", phone);
            localStorage.setItem("bloodGroup", bloodGroup);
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);


            /*** Change Page ***/
            alert("Ini")
             // window.location.href = "Home_community.html";
            }
          else if (catergoryLoginSelected == "Community"){

            /*** Process JSON Data ***/
            var responsetxt = JSON.stringify(data);
            var id = JSON.parse(responsetxt).id
            var name = JSON.parse(responsetxt).name
            loginType = "Community"

            /*** Set Local Storage ***/
            localStorage.setItem("loginStatus", true);
            localStorage.setItem("loginType", loginType);
            localStorage.setItem("id", id);
            localStorage.setItem("name", name);

            /*** Change Page ***/
            window.location.href = "Home_community.html";
            }

          },

          error: function(data){

             $("#loginEmail").val("");
             $("#loginPassword").val("");

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
		alert("Login"+e.message);
	}
}
