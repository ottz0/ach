(function(){

	var hotelsFactory = function($http, $sessionStorage, utilsFactory){

		var factory = {};
		$storage = sessionStorage;

		/*
			Get search parameters and send
		*/
		factory.searchRequest = function(){		

			//Local storage only supports strings - Parse json from storage
			var searchResults = JSON.parse($storage.achSearch);
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
			
			//Extract dates - Switch dd/mm
			var arrivalDate = utilsFactory.dateFactory(searchResults.arrivalDate);
			var departureDate = utilsFactory.dateFactory(searchResults.departureDate);
			var destinationString = encodeURIComponent(searchResults.destination);	
			var data = 'http://api.ean.com/ean-services/rs/hotel/v3/list?'
                +'destinationString='+destinationString
                +'&arrivalDate='+arrivalDate
                +'&departureDate='+departureDate
                +'&room1='+roomGroup
                +'&options=DEFAULT'
                +'&numberOfResults=10';
    
		return factory.eanApiRequest(data);		
		};

		
		/*
			More results
		*/
		factory.moreResults = function(){

			//Get cache values from session
			var achMoreResults = JSON.parse($storage.achMoreResults);

			var data = 'http://api.ean.com/ean-services/rs/hotel/v3/list?'
                +'cacheKey='+achMoreResults.cacheKey
                +'&cacheLocation='+achMoreResults.cacheLocation;
                +'&supplierType=E';

		return factory.eanApiRequest(data);
		};


		/*
			Send and receive eanApi data
		*/
		factory.eanApiRequest = function(data){

			return $http({
                method: "post",
                url: "eanapi/ean-api.php",
                data: data
            })
                .then(function(response){
	                // Handle error
				    var data = response.data;
				    var hotelData = data.HotelListResponse;	
				    if(!hotelData.HotelList){	
			    		return data;
			    	}else{
			    		// Handle hotelList		    	
				    	data.hotels = data.HotelListResponse.HotelList.HotelSummary;	    	

				    	(function(){
					    	angular.forEach(data.hotels, function(hotel, key) {	
					    		var stateProvinceCode = hotel.stateProvinceCode;
					    		utilsFactory.changeStates(stateProvinceCode);
					    		return hotel.stateProvinceCode = dataState;
					    	});
				    	}()); //Change state string

				    	(function(){
					    	angular.forEach(data.hotels, function(hotel, key) {
					    		var hotelRating = hotel.hotelRating;
					    		utilsFactory.changeRating(hotelRating);
					    		return hotel.hotelRating = dataHotelRating;
					    	});		
				    	}()); //Add star ratings
				    	
				    	(function(){
					    	var HotelListResponse = response.data.HotelListResponse;
					    	var achMoreResults = {
					    		cacheKey: HotelListResponse.cacheKey,
					    		cacheLocation: HotelListResponse.cacheLocation,
					    		customerSessionId: HotelListResponse.cacheLocation
					    	};
				    		$storage.achMoreResults = JSON.stringify(achMoreResults);
				    	}()); //Set object for more results

				    	return response.data;
				    }

                //return response.data;          
            });
		};

	return factory;
	}; // /factory

	hotelsFactory.$inject = ['$http', '$sessionStorage', 'utilsFactory'];

	//Register the object with Angular.js
    angular.module('achApp')
        .factory('hotelsFactory', hotelsFactory);


}());