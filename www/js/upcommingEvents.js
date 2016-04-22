<script>

      function getCommunityName(){
          var name = localStorage.getItem("name");
          $("#communityName").text(name);

      }

      function getUpcomingEvents(){
	        requestUpcomingEvents();

      }

      function requestUpcomingEvents(){

      /*** Disable All Buttons ***/
       $("button").prop("disabled", true);

      //Fetch Org Id from local storage
      var orgId = localStorage.getItem("id");

      var URL = "https://beplus.azure-mobile.net/api/getAllOrgEvents?OrgId=" + orgId

      //Web Service Call Here
      $.ajax({
          type: "GET",
          url: URL,
		    headers: { "x-zumo-application": "MTSpEOSVNXNxGyoVoeZMqnnIIGBqmk93"},
		    success: function (data){

          var response = JSON.stringify(data)
          var resultsLength = JSON.stringify(JSON.parse(response).length);
          var responseArray = JSON.stringify(JSON.parse(response));

          if (resultsLength == 0){
              $("#upComingEventsTable").append( "<h3>No Upcoming Events To Display" );
          }

          else{

            /** Top Row For Upcoming Events Table Append ***/
            $("#upComingEventsTable").append('<div class="table" id="home_community" style="font-family:candara;font-weight:600;font-size:15px;">');
            $("#upComingEventsTable").append('<div class="row" >');
            $("#upComingEventsTable").append('<div class="col" style="border:2px;border-style:solid;border-color:rgb(128,0,0);">Date</div>');
            $("#upComingEventsTable").append('<div class="col col-75" style="border:2px;border-style:solid;border-color:rgb(128,0,0);">Upcoming Events</div>');
            $("#upComingEventsTable").append('</div>');

            for (var i=0; i< resultsLength; i++){

            var date = JSON.stringify(JSON.parse(responseArray)[0].date)
            var about = JSON.stringify(JSON.parse(responseArray)[0].about)

            /*** Append Each Row ***/
            $("#upComingEventsTable").append('<div class="row" >');
            $("#upComingEventsTable").append('<div class="col" style="border:2px;border-style:solid;border-color:rgb(128,0,0);">' + JSON.parse(date) +'</div>');
            $("#upComingEventsTable").append('<div class="col col-75" style="border:2px;border-style:solid;border-color:rgb(128,0,0);">'+ JSON.parse(about) +'</div>');
            $("#upComingEventsTable").append('</div>');

          }


           $("#upComingEventsTable").append('</div>');

           /*** Enable Buttons **/
           $("button").removeAttr('disabled');
          }

          //alert(JSON.stringify(JSON.parse(responseArray)[0].about))

          },
        error: function (data){
          	alert("Error")
          },
		  timeout: 60000
          });
    }
    </script>

