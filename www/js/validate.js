var dateDay;
var dateMonth;
var dateYear;

function validateLogin() {
var alertHeading = "Login"

try{
		var email = $.trim($('#loginEmail').val());
 		var password = $.trim($('#loginPassword').val());

		//Check For Empty E-mail Field
		if(email == ""){
		  generateValidationAlert(alertHeading, "Please Enter An E-mail")
			return false;
		}

		//Check For Valid E-mail
		else if (email != "" && validateEmail(email) == false) {

      generateValidationAlert(alertHeading, "Please enter a valid E-mail")
			return false;
		}


		else if (password == "") {

      generateValidationAlert(alertHeading, "Please enter a password")
			return false;

		}

		else {

			//Create Request JSON
			var loginRequest = JSON.stringify({

                    "email": email,
                    "password": password

                            });

            // Store in local storage
            window.localStorage.setItem("loginRequest",loginRequest);

            return true;

		}

	}
	catch(e){
		alert("Login"+e.message);
	}
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    return re.test(email);
}

function validateCommunitySignUp(){
var alertHeading = "Community Sign Up"
try{

console.log("validateCommunitySignUp")
	/**** Get Value For All Inputs ***/
	var name = $.trim($('#registerNameOrg').val());
	var email = $.trim($('#registerEmailOrg').val());
	var password = $.trim($('#registerPasswordOrg').val());
	var confirmPassword = $.trim($('#registerConfirmPasswordOrg').val());
	var mobile = $.trim($('#registerMobileOrg').val());
	var locality = $.trim($('#registerLocalityOrg').val());
	var address = $.trim($('#registerAddressOrg').val());


	//Check For Empty Name Field
		if(name == ""){
		  generateValidationAlert(alertHeading, "Please Enter A Name")
			return false;
		}

	//Check For Empty E-mail Field
		if(email == ""){
			generateValidationAlert(alertHeading, "Please Enter An E-mail")
			return false;
		}

	//Check For Valid E-mail
	else if (email != "" && validateEmail(email) == false) {

			generateValidationAlert(alertHeading, "Please enter a valid E-mail")
			return false;
		}

	//Check For Empty Password Field
	 if (password == "") {

      generateValidationAlert(alertHeading, "Please enter a password")
			return false;

		}

	///Check For Empty Confirm Password Field
	if (confirmPassword == "") {

      generateValidationAlert(alertHeading, "Please enter a value for Confirm Password")
			return false;

		}

	//Check if passwords Match
	else if (password != confirmPassword){

		$('#registerPasswordOrg').val("")
		$('#registerConfirmPasswordOrg').val("")
		generateValidationAlert(alertHeading, "Passwords do not match")
		return false;
	}

	//Check For empty Mobile Number
	if(mobile == ""){

    generateValidationAlert(alertHeading, "Please enter a mobile number")
		return false;
	}

	//Check For Valid Mobile Number
	else if (!$.isNumeric(mobile) || mobile.length != 10){
			$('#registerMobileInd').val("")

			generateValidationAlert(alertHeading, "Please enter a valid mobile number")
			return false;
	}

	//Check For empty Locality
	if(locality == ""){

    generateValidationAlert(alertHeading, "Please press button To Fetch Locality")
		return false;
	}

	//Check For empty Address
	if(address == ""){

    generateValidationAlert(alertHeading, "Please enter a Address");
		return false;
	}

  else {

			//Create Request JSON
			var signUpCommunity = JSON.stringify({

                    "name": name,
                    "locality": locality,
                    "email": email,
                    "phone": mobile,
                    "locationLat": latitude,
                    "locationLong": longitude,
                    "password": password

                            });

            // Store in local storage
            window.localStorage.setItem("signUpCommunityRequest",signUpCommunity);

            return true;

		}
	}
	catch(e){
	  alert("Sign In Community:" + e);
	  }
}





function validateIndividualSignUp(){
var alertHeading = "Sign Up"
try{


	/**** Get Value For All Inputs ***/
	var name = $.trim($('#registerNameInd').val());
	var email = $.trim($('#registerEmailInd').val());
	var password = $.trim($('#registerPasswordInd').val());
	var confirmPassword = $.trim($('#registerConfirmPasswordInd').val());
	var mobile = $.trim($('#registerMobileInd').val());
	var bloodType = $.trim($('#registerBloodTypeInd').val());
	var diseases = $.trim($('#registerDiseasesInd').val());
	var allergies = $.trim($('#registerAllergiesInd').val());


	//Check For Empty Name Field
		if(name == ""){
			generateValidationAlert(alertHeading, "Please Enter A Name")
			return false;
		}

	//Check For Empty E-mail Field
		if(email == ""){
			generateValidationAlert(alertHeading, "Please Enter An E-mail")
			return false;
		}

	//Check For Valid E-mail
	else if (email != "" && validateEmail(email) == false) {

			generateValidationAlert(alertHeading, "Please enter a valid E-mail")
			return false;
		}

	//Check For Empty Password Field
	 if (password == "") {

			generateValidationAlert(alertHeading, "Please enter a password")
			return false;

		}

	///Check For Empty Confirm Password Field
	if (confirmPassword == "") {

			generateValidationAlert(alertHeading, "Please enter a value for Confirm Password")
			return false;

		}

	//Check if passwords Match
	else if (password != confirmPassword){

		$('#registerPasswordInd').val("")
		$('#registerConfirmPasswordInd').val("")
		generateValidationAlert(alertHeading, "Passwords do not match")
		return false;
	}

	//Check For empty Mobile Number
	if(mobile == ""){

		generateValidationAlert(alertHeading, "Please enter a mobile number")
		return false;
	}

	//Check For Valid Mobile Number
	else if (!$.isNumeric(mobile) || mobile.length != 10){
			$('#registerMobileInd').val("")
			generateValidationAlert(alertHeading, "Please enter a valid mobile number")
			return false;
	}

  else {

			//Create Request JSON
			var signUpIndividual = JSON.stringify({

                    "name": name,
                    "phone": mobile,
                    "email": email,
                    "bloodGroup": bloodType,
                    "allergies": allergies,
                    "diseases": diseases,
                    "locationLat": latitude,
                    "locationLong": longitude,
                    "emergencyAvailability": true,
                    "password": password,

                            });

            // Store in local storage
            window.localStorage.setItem("signUpIndividualRequest",signUpIndividual);

            return true;

		}
	}
	catch(e){
	  alert("Sign In Individual:" + e);
	  }
}

/*** Date Validation ***/
function isValidDate(txtDate){

  var currVal = txtDate;

  //Declare Regex
  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
  var dtArray = currVal.match(rxDatePattern); // is format OK?

  if (dtArray == null)

     return false;

  //Checks for dd/mm/yyyy format.
  dtDay = dtArray[1];
  dtMonth= dtArray[3];
  dtYear = dtArray[5];

  /*** Date Object For entered Date ***/
  var myDate = new Date(dtYear, dtMonth - 1, dtDay);

  /*** Date Object For Current Date ***/
  var today = new Date();

  /*** Check if Month is between 1 and 12 ***/
  if (dtMonth < 1 || dtMonth > 12)
      return false;

  /*** Check if Month is between 1 and 31 ***/
  else if (dtDay < 1 || dtDay> 31)
      return false;

  /*** Check 31 Days Month ***/
  else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
      return false;

  /*** Check For February ***/
  else if (dtMonth == 2)
  {
     var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
     if (dtDay> 29 || (dtDay ==29 && !isleap))

          return false;
  }

 /*** Check if entered date is in the future ***/
  else if (myDate < today){
  		return false;
  }

  dateDay = dtDay;
  dateMonth = dtMonth;
  dateYear = dtYear;

  return true;
}

function validateCreateEvents(){

var alertHeading = "Create Event"

try{
  //Get Value for all inputs
  var about = $.trim($('#eventName').val());
  var venue = $.trim($('#eventVenue').val());
  var date = $.trim($('#eventDate').val());
  var time = $('#eventTime').val();

  var dataAPIFormat;
  var orgId = localStorage.getItem("id");

  //Check for Empty Event Name
  if(about == ""){

    generateValidationAlert(alertHeading, "Please Enter a event name")
    return false;
  }

  //Check For Empty Venue
  if (venue == ""){

    generateValidationAlert(alertHeading, "Please Enter a venue")
    return false;
  }

  //Check For Empty Date
  if (date == ""){

    generateValidationAlert(alertHeading, "Please Enter a date")
    return false;

  }

  else if (date != "" && isValidDate(date) == false){

    generateValidationAlert(alertHeading,"Please Enter a valid Date")
    return false;

  }

  else{

    dateAPIFormat = dateYear + "-" + dateMonth + "-" + dateDay + "T" + time + ":00.00Z"

    //Create Request JSON
			var createEvent = JSON.stringify({

            "about": about,
            "venue": venue,
            "date": dateAPIFormat,
            "orgId": orgId

                    });

    // Store in local storage
    window.localStorage.setItem("createEventRequest",createEvent);

    return true;
  }
}
catch(e){
	  alert("Create Event Validation:" + e);
}


}

/*** Function To Validate Offline Donor Entry ***/
function validateOffileDonorEntry(){

try{

//Get All Inputs
var name = $.trim($('#offlineName').val());
var email = $.trim($('#offlineEmail').val());
var mobile = $.trim($('#offlineMobileNumber').val());
var bloodType = $.trim($('#offlineBloodType').val());
var diseases = $.trim($('#offlineKnownDiseases').val());
var allergies = $.trim($('#offlineKnownAllergies').val());

//Fetch Org Id from local storage
var orgId = localStorage.getItem("id");

  //Check if Name is Empty
  if (name == ""){
    generateValidationAlert(alertHeading, "Please Enter A Name")
    return false;
  }

  //Check if Email is Empty
  if (email == ""){
    generateValidationAlert(alertHeading, "Please Enter An E-mail")
    return false;
  }

  //Check if Email is Valid
  else if(email != "" && validateEmail(email) == false){
    generateValidationAlert(alertHeading, "Please enter a valid E-mail")
    return false;
  }

  //Check For empty Mobile Number
	if(mobile == ""){

		generateValidationAlert(alertHeading, "Please enter a mobile number")
		return false;
	}

	//Check For Valid Mobile Number
	else if (!$.isNumeric(mobile) || mobile.length != 10){
			$('#registerMobileInd').val("")
			generateValidationAlert(alertHeading, "Please enter a valid mobile number")
			return false;
	}

  else{

    //Create Request JSON
			var addOfflineDonor = JSON.stringify({

            "name": name,
            "phone": mobile,
            "email": email,
            "bloodGroup": bloodType,
            "allergies": allergies,
            "diseases": diseases,
            "orgId":orgId

            });

    // Store in local storage
    window.localStorage.setItem("addOfflineDonorRequest",addOfflineDonor);

    return true;
  }

}
catch(e){
	  alert("Add Offline Donor Validation:" + e);
}
}
