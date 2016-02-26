(function(){

	var hotelFactory = function($http, $location, $stateParams, $sessionStorage, utilsFactory){

		var factory = {};
		$storage = sessionStorage;	
		var hotelId = $stateParams.hotelId;

		
		/*
			Get hotelId and build url string
		*/
		factory.getHotelInformation = function(){

			var data = 'http://api.ean.com/ean-services/rs/hotel/v3/info?'
                +'hotelId='+hotelId
                +'&options=DEFAULT';
			return factory.eanApiRequest(data);	
		};


		/*
			Room Availability
		*/
		factory.hotelRoomAvailability = function(){			

			//Local storage only supports strings - Parse json from storage
			var searchResults = JSON.parse($storage.achSearch);
			var customerData = JSON.parse($storage.achMoreResults);
			var numberOfChildren = searchResults.numberOfChildren;
			var childAges = searchResults.childAges;
			var roomGroup = searchResults.numberOfAdults;
			var childArray = [];

			angular.forEach(childAges, function(value){
				childArray.push(parseInt(value));
			});

			if(numberOfChildren > 0){
				var roomGroup = searchResults.numberOfAdults+','+childArray;
			}
			
			var arrivalDate = utilsFactory.dateFactory(searchResults.arrivalDate);
			var departureDate = utilsFactory.dateFactory(searchResults.departureDate);
			var destinationString = encodeURIComponent(searchResults.destination);	
			var data = 'http://api.ean.com/ean-services/rs/hotel/v3/avail?'
                +'hotelId='+hotelId
                +'&arrivalDate='+arrivalDate
                +'&departureDate='+departureDate
                +'&room1='+roomGroup
                +'&includeRoomImages=true'
                +'&customerSessionId='+customerData.customerSessionId
                +'&options=ROOM_TYPES,ROOM_AMENITIES';
			
			return factory.eanApiRequest(data);		
		};

		factory.setHotelBookingDetails = function(roomDetails, hotelInformation){
            //Set hotelInformation
            $storage.achHotelInformation = JSON.stringify(hotelInformation);
            //Set roomDetails
            $storage.achRoomDetails = JSON.stringify(roomDetails);
            $location.path('/book');
		};



		/*
			Make request
		*/
		factory.eanApiRequest = function(data){
			return $http({
                method: "post",
                url: "eanapi/ean-api.php",
                data: data
            }).then(function(response){
            	return response.data;
           	});
        };


	return factory;
	}; // /factory


	hotelFactory.$inject = ['$http', '$location', '$stateParams', '$sessionStorage', 'utilsFactory'];
	
	//Register the object with Angular.js
    angular.module('achApp')
        .factory('hotelFactory', hotelFactory);


}());