(function(){

	var BookController = function($scope, bookFactory, $sessionStorage){

		
		$storage = sessionStorage;
		$scope.hotelInformation = JSON.parse($storage.achHotelInformation);
		$scope.roomDetails = JSON.parse($storage.achRoomDetails);
		$scope.moreResults = JSON.parse($storage.achMoreResults);
		$scope.achSearch = JSON.parse($storage.achSearch);
		$scope.roomPrices = $scope.roomDetails.RateInfos.RateInfo.ChargeableRateInfo;
		$scope.formData = {};

		
		//ratekey -y
		//roomTypeCode
		//rateCode - y

		//ratekey
		//RoomCode['@roomCode']
		//RoomType['@roomTypeId']


		//Nightly rate price per returned object or array
		(function (){
			var nightPrice = $scope.roomPrices.NightlyRatesPerRoom['@size'];

			if(nightPrice == 1){
				$scope.nightPrice = true;
			}else{
				$scope.nightPriceMulti = true;
			}
		}());

		console.log($scope.roomDetails);

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


	
		    
		*/
		$scope.reservationSummaray = function(){
        	bookFactory.reservationSummary();
        		// .then(function(data){
        		// 	console.log(data);
        		// 	$scope.hotelAvail = data;
        		// 	console.log($scope.hotelAvail);

        		//})
        	return;
        };
        $scope.reservationSummaray();






















		
		
		$scope.BookingForm = function(){

			var BookFormData = $scope.formData;
			//return checkoutFactory.getCheckoutInformation(checkoutData);
			checkoutFactory.getBookingInformation(bookingFormData);
        		
		


        	return;

			// var ac = {
			// 	firstName:$scope.formData.firstName,
			// 	lastName:$scope.formData.lastName
			// }

			//console.log($httpParamSerializer(ac));
			//console.log($httpParamSerializer(ac));
			//$scope.tt = $httpParamSerializer(ac);
			//$scope.appForm.dataSubmitted       = $httpParamSerializer($scope.appForm.data);

		};


		// $scope.bookingForm = function(){

		// 	console.log("Heeelo is it me you are looking for herer?");

		// }
		//$scope.bookingForm();

		//'jcs-autoValidate'

	};

	BookController.$inject = ['$scope', 'bookFactory','$sessionStorage'];

    angular.module('achApp')
      .controller('BookController', BookController);

    

}());
