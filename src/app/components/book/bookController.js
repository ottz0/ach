(function(){

	var BookController = function($scope, $http, $location, bookFactory, $sessionStorage, Guid){

		$scope.eanErrorBlock = false;
		$scope.eanConfirmBlock = false;
		$scope.achMain = true;
        $scope.loading = true; 
        $scope.achBookingHeader = true;
		$storage = sessionStorage;
		$scope.hotelInformation = JSON.parse($storage.achHotelInformation);
		$scope.roomDetails = JSON.parse($storage.achRoomDetails);
		$scope.moreResults = JSON.parse($storage.achMoreResults);
		$scope.achSearch = JSON.parse($storage.achSearch);
		$scope.roomPrices = $scope.roomDetails.RateInfos.RateInfo.ChargeableRateInfo;
    	var Guid = Guid.newGuid();
    	$scope.disableButtons = true;
		
		//Set default form values
		$scope.ReservationInfo = {
			country:'AU'
		};

		$scope.months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
		$scope.years = ['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'];

		
		(function (){
			$http.get('assets/json/countryCodes.json')
		       .then(function(data){
		       		var tt = angular.fromJson(data);              
	        });
		}());
		
		
		//Nightly rate price per returned object or array
		(function (){
			var nightPrice = $scope.roomPrices.NightlyRatesPerRoom['@size'];

			if(nightPrice == 1){
				$scope.nightPrice = true;
			}else{
				$scope.nightPriceMulti = true;
			}
		}());

		
		$scope.bookingForm = function(){
			$scope.guid = Guid
			var ReservationInfo = {};
			var ReservationInfo = $scope.ReservationInfo;
			ReservationInfo.affiliateConfirmationId = Guid;
			$scope.testForm = ReservationInfo;
			bookFactory.getBookingInformation(ReservationInfo)
				.then(function(data){
					//console.log(data);
					var HotelRoomReservationResponse = data.HotelRoomReservationResponse;
	            	if(HotelRoomReservationResponse.EanWsError){
	            		console.log('Its an error');
	            		$scope.eanError(HotelRoomReservationResponse)
	            	}else{
	            		 //Set a session from object
	            		//$location.path('/book/confirm');
	            		$scope.bookingConfirm(HotelRoomReservationResponse);
	            	}
				});
			return;
	
		}

		$scope.bookingConfirm = function(data){
			$scope.HotelRoomReservationResponse = data;
			console.log($scope.HotelRoomReservationResponse);
			$scope.eanConfirmBlock = true;
			$scope.achBookingHeader = false;
			$scope.achMain = false;
		};


		$scope.eanError = function(data){
            $scope.eanError = data.EanWsError;
            $scope.eanErrorBlock = true;
            $scope.achMain = false;
            console.log(data);
        }

	};

	BookController.$inject = ['$scope', '$http', '$location', 'bookFactory','$sessionStorage', 'Guid'];

    angular.module('achApp')
      .controller('BookController', BookController);

    

}());
