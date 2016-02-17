(function(){

	var bookFactory = function($http, $stateParams, $httpParamSerializer, $sessionStorage, utilsFactory){

		var factory = {};



		/*
			Get hotelId and build url string
		*/
		factory.reservationSummary = function(){
			//var data = "cool";
			//return data
			//console.log(hotelInformation);

			//return console.log(data);
		}

		
		/*
			Get hotelId and build url string
		*/
		factory.getBookingInformation = function(formData){	

			//Get data from the checkout form
			var data = {

    			room1FirstName:'test',
				room1LastName:'testers',
				email:formData.email,
				homePhone:'2145370159',
			    workPhone:'2145370159',
			    address1:'travelnow',
				city:'Seattle',
				stateProvinceCode:'WA',
				countryCode:'US',
				postalCode:'98004',
				smokingPreference:'NS',

				firstName:formData.firstName,
				lastName:formData.lastName,
				creditCardType:'CA',
				creditCardNumber:'5401999999999999',
				creditCardIdentifier:'123',
				creditCardExpirationMonth:'11',
				creditCardExpirationYear:'2016'
			}
			return factory.eanApiCheckoutRequest(data);
		};
		


		/*
			Make request
		*/
		factory.eanApiBookingRequest = function(data){
			
			//return console.log(data);

			return $http({
                method: "post",
                url: "ean-api-book.php",
                headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				 },
                data: $httpParamSerializer(data)
            }).then(function(response){
            	//return response.data;
            	return console.log(response.data);
           	});
        };


	return factory;
	}; // /factory


	//Register the object with Angular.js
    angular.module('achApp')
        .factory('bookFactory', bookFactory);


}());