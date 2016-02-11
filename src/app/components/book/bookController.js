(function(){

	var BookController = function($scope, $http, $httpParamSerializer){

		/*


			//Get variables from hotel

			currency code
			apiexperience
			hotelid
			arrival date
			departuredate
			suppliertype
			ratekey
			roomtype code
			ratecode
			roomgroup
			number of adults
			number of children
			child ages



			Always send affiliateConfirmationId


			//REQUESTING FROM HOTEL

			$hotelId = '106347';
		    $arrivalDate = '7/12/2016';
		    $departureDate = '7/14/2016';
		    $supplierType = 'E';
		    $rateKey = 'af00b688-acf4-409e-8bdc-fcfc3d1cb80c';
		    $roomTypeCode = '198058';
		    $rateCode = '484072';
		    $chargeableRate = '231.18';
		    $room1 = '2,5,7';
		    $numberOfAdults = '2';
		    


			$bedTypeId = '23';


			//BOOKING FORM
	
		    $firstName = 'test booking';
		    $lastName = 'test booking';		    
		    $email = 'test@travelnow.com';
		    $homePhone = '2145370159';
		    $workPhone = '2145370159';
		    $address1='travelnow';
			$city='Seattle';
			$stateProvinceCode='WA';
			$countryCode='US';
			$postalCode='98004';
			$smokingPreference = 'NS';
		    

		    $creditCardType='CA';
			$creditCardNumber='5401999999999999';
			$creditCardIdentifier='123';
			$creditCardExpirationMonth='11';
			$creditCardExpirationYear='2016';
		*/
		$scope.formData = {};
		
		$scope.booking = function(valid){

			if (valid){
				console.log('It is valid');
			}
			else{
				console.log('It is not valid');
			}




			// var ac = {
			// 	firstName:$scope.formData.firstName,
			// 	lastName:$scope.formData.lastName
			// }

			//console.log($httpParamSerializer(ac));
			//console.log($httpParamSerializer(ac));
			//$scope.tt = $httpParamSerializer(ac);
			//$scope.appForm.dataSubmitted       = $httpParamSerializer($scope.appForm.data);

		}


		// $scope.bookingForm = function(){

		// 	console.log("Heeelo is it me you are looking for herer?");

		// }
		//$scope.bookingForm();

		

	};

	BookController.$inject = ['$scope', '$http', '$httpParamSerializer'];

    angular.module('achApp')
      .controller('BookController', BookController);

    

}());
