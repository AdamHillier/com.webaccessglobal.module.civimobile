// events for contact view
$( document ).delegate("#cm-contact-view", "pageinit", function() {
	$('#edit-contact-button').click(function(){ //function here!!!
		console.log("view contact page")
		 });
		//need to figure out how to load this dynamically on each page
		buildProfile( "1", "contact-details-sections", "2" );
		
});

// events for edit contact view
$( document ).delegate("#cm-contact-edit", "pageinit", function() {
	$('#save-contact-button').click(function(){ //function here!!!
	  // TO DO
  });
});

// events for contact search
$( document ).delegate("#cm-contact-search", "pageinit", function() {
  $('#sort_name').keyup( function() {
    if ($(this).val()) {
      contactSearch($(this).val());
    }
    else {
      $('#contacts').empty(); 
    }
  });
});

// events for event search
$( document ).delegate("#cm-events", "pageinit", function() {
  $('#event_name').keyup( function() {
    if ($(this).val()) {
      eventSearch($(this).val());
    }
    else {
      $('#events').empty(); 
    }
  });
});

// events for participant checkin
$( document ).delegate("#cm-participant-checkin", "pageinit", function() {
  $('#participant_name').keyup( function() {
    if ($(this).val()) {
      participantSearch($(this).val());
    }
    else {
      $('#participant-checkins').empty(); 
    }
  });
  participantSearch();
});

// events for survey search
$( document ).delegate("#cm-surveys", "pageinit", function() {
  $('#survey_name').keyup( function() {
    if ($(this).val()) {
      surveySearch($(this).val());
    }
    else {
      $('#surveys').empty(); 
    }
  });
  surveySearch('');
});

// events for survey contact listing
$( document ).delegate("#cm-survey-contacts", "pageinit", function() {
  /*
  $('#sc_name').keyup( function() {
    if ($(this).val()) {
      surveyRespondantSearch($(this).val());
    }
    else {
      $('#survey-contacts').empty(); 
    }
  });
  */
  surveyRespondantSearch();
});

// events for survey interview screen
$( document ).delegate("#cm-survey-interview", "pageinit", function() {
  surveyInterview();

  $('#save-survey-button').click(function(){ saveSurvey(); });
});

// proximity search
$( document ).delegate("#cm-proximity-search", "pageinit", function() {
  $('#cm-postcode').keyup( function() {
    searchContactByPostcode ($(this).val());
  });

  // Add a click listener on the button to get the location data
  $('#useLocation').click(function(){
    $('#cm-postcode').val('');
    $('#cm-prox-contacts').empty();
    if ($(this).is(":checked")) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge:600000});
      } else {
        // If location is not supported on this platform, disable it
        $(this).value = "Geolocation not supported";
      }
    }
  });

    function onSuccess(location) {			
      searchContactByGeoLocation(location);
    }

    // Error function for Geolocation call
    function onError( ) {
      $('#locationResult').html("Geolocation not supported");
    }
}); 