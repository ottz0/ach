$(document).ready(function() {
	function initialize() {
		var options ={
			types:['(cities)'],
		};
		var input = document.getElementById('destination-home');
		var input = document.getElementById('destination');
		var autocomplete = new google.maps.places.Autocomplete(input, options);
	}
	google.maps.event.addDomListener(window, 'load', initialize);

});



$(document).ready(function() {
	function initMap() {
	  var myLatLng = {lat: -25.363, lng: 131.044};

	  // Create a map object and specify the DOM element for display.
	  var map = new google.maps.Map(document.getElementById('map'), {
	    center: myLatLng,
	    scrollwheel: false,
	    zoom: 4
	  });

	  // Create a marker and set its position.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: myLatLng,
	    title: 'Hello World!'
	  });
	}

});