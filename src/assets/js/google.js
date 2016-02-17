$(document).ready(function() {
	function initialize() {
		var options ={
			types:['(cities)'],
		};
		input = document.getElementById('destination-home');
		input = document.getElementById('destination');
		autocomplete = new google.maps.places.Autocomplete(input, options);
	}
	google.maps.event.addDomListener(window, 'load', initialize);

});


