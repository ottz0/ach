(function(){

	var bookFactory = function($http, $stateParams, $httpParamSerializer, $sessionStorage, utilsFactory){

		var factory = {};
		
		/*
			Get hotelId and build url string
		*/
		factory.getBookingInformation = function(ReservationInfo){	

			var storage = sessionStorage;
			var hotelInformation = JSON.parse($storage.achHotelInformation);
			var roomDetails = JSON.parse($storage.achRoomDetails);
			var moreResults = JSON.parse($storage.achMoreResults);
			var achSearch = JSON.parse($storage.achSearch);			

			
			//Switch MM/DD dates
			var arrivalDate = utilsFactory.dateFactory(achSearch.arrivalDate);
			var departureDate = utilsFactory.dateFactory(achSearch.departureDate);

			//Get the adult - child group array
			var numberOfChildren = achSearch.numberOfChildren;
			var childAges = achSearch.childAges;
			var roomGroup = achSearch.numberOfAdults;
			var childArray = [];

			angular.forEach(childAges, function(value){
				childArray.push(parseInt(value));
			});

			if(numberOfChildren > 0){
				var roomGroup = achSearch.numberOfAdults+','+childArray;
			}

			//Data not contained in form
			var RequestParameters = {
				customerSessionId:moreResults.customerSessionId,
				hotelId: hotelInformation.hotelId,
				arrivalDate:arrivalDate,
				departureDate:departureDate,
				supplierType: roomDetails.supplierType,
				rateKey:roomDetails.RateInfos.RateInfo.RoomGroup.Room.rateKey,
				roomTypeCode:roomDetails.RoomType['@roomCode'],
				rateCode:roomDetails.rateCode,
				room1:roomGroup,
				bedTypeId:roomDetails.BedTypes.BedType['@id'],
				smokingPreference:roomDetails.smokingPreferences,
				chargeableRate:roomDetails.RateInfos.RateInfo.ChargeableRateInfo['@total']
			}
			
			//Data from form
			var reservationForm = {
				room1FirstName:ReservationInfo.room1FirstName,
				room1LastName:ReservationInfo.room1LastName,
				email:ReservationInfo.email,
				firstName:ReservationInfo.firstName,
				lastName:ReservationInfo.lastName,
				homePhone:ReservationInfo.homePhone,			
				creditCardType:ReservationInfo.creditCardType,
				creditCardNumber:ReservationInfo.creditCardNumber,
				creditCardIdentifier:ReservationInfo.creditCardIdentifier,
				creditCardExpirationMonth:ReservationInfo.creditCardExpirationMonth,
				creditCardExpirationYear:ReservationInfo.creditCardExpirationYear,
				address1:ReservationInfo.address1, //encode characters
				city:ReservationInfo.city,
				stateProvinceCode:ReservationInfo.stateProvinceCode, //special for aus states
				countryCode:'AU', //special code
				postalCode:ReservationInfo.postalCode,
				affiliateConfirmationId:ReservationInfo.affiliateConfirmationId
			}
			
			var reservationData = $httpParamSerializer(RequestParameters)+'&'+$httpParamSerializer(reservationForm);


			//return console.log(reservationData);






			return factory.eanApiBookingRequest(reservationData);
		};
		


		/*
			Make request
		*/
		factory.eanApiBookingRequest = function(reservationData){
			return $http({
                method: "post",
                url: "eanapi/ean-api-book.php",
                headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				 },
                data: reservationData
            }).then(function(response){
            	return response.data;      	
           	});
        };


	return factory;
	}; // /factory


	//Register the object with Angular.js
    angular.module('achApp')
        .factory('bookFactory', bookFactory);


}());