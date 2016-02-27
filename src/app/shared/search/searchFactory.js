(function(){

	var searchFactory = function($sessionStorage){

		var factory = {};
		$storage = sessionStorage;

		//Get form values
		factory.getHotelListRequest = function(){								

			var destination = $("#destination").val();
			var arrivalDate = $("#arrival-date").val();
			var departureDate = $("#departure-date").val();
			var numberOfAdults = $("#adults").val();
			var numberOfChildren = $("#children").val();	
			
			var achSearch = {
				destination: destination,
				arrivalDate: arrivalDate,
				departureDate: departureDate,
				numberOfAdults: numberOfAdults,
				numberOfChildren: numberOfChildren,
				childAges: childAges
			};
			
			return console.log(achSearch);

			return factory.setSearchSession(achSearch);
		};	
		

		//Set form values to storage
		factory.setSearchSession = function(achSearch){
			//Local storage only supports strings - Stringify json object
			return $storage.achSearch = JSON.stringify(achSearch);
		};		
		
		return factory;
	}; // /SearchFactory
	
	searchFactory.$inject = ['$scope', '$state'];
	//Register the object with Angular.js
    angular.module('achApp')
        .factory('searchFactory', searchFactory);


}());