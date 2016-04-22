function generateValidationAlert(alertHeading, alertMessage){

	navigator.notification.alert(alertMessage, alertDismissed, alertHeading, 'OK');


}

function alertDismissed() {
    // do something
}

