function googleMap() {

    var mapCanvas = document.getElementById("map");
       
    var myLatLng = {lat: 48.2001268, lng: 16.3951012};

    var mapOptions = {

        center: new google.maps.LatLng(48.2001268,16.3951012,18.94),
		
        zoom: 17
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map

    });

  }


function submit(){
  var first_name = document.getElementById('first_name').value; 
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var phone_number = document.getElementById('phone_number').value;
  var message = document.getElementById('message').value;
  var result;

	var array =[first_name , last_name , email , phone_number , message];
	var array_error_name = ['first_name_error','last_name_error','email_error','phone_number_error','message_error'];
	var array_name =['first_name','last_name','email','phone_number','message'];
	var array_error = ["Please Fill Your First Name ","Please Fill Your Last Name ","Email is required","Phone Number is required","Please give us feedback"];

function isTrue(currentValue) {

  return currentValue === true;

}
	for (var i = 0; i < array.length ; i++) {

	 	if (array[i] === '') {

	 		document.getElementById(array_error_name[i]).innerHTML = '<p style = "color:red">' + array_error[i] + '</p>';

	 	} else if(array[i] = true) {

	 		document.getElementById(array_error_name[i]).innerHTML = '<p style = "color:red"></p>';
	 	}

	 	if (array.every(isTrue)) {

	 		result = "<p>" + "Dear Mr/Mrs " + first_name + " " + last_name + "We will contact you" + "</p>";

 	 		 document.getElementById("result").innerHTML = result;
	 	}
	 } 
 }