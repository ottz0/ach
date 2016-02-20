(function(){

	var BookController = function($scope, $http, bookFactory, $sessionStorage, Guid){

		
		$storage = sessionStorage;
		$scope.hotelInformation = JSON.parse($storage.achHotelInformation);
		$scope.roomDetails = JSON.parse($storage.achRoomDetails);
		$scope.moreResults = JSON.parse($storage.achMoreResults);
		$scope.achSearch = JSON.parse($storage.achSearch);
		$scope.roomPrices = $scope.roomDetails.RateInfos.RateInfo.ChargeableRateInfo;
    	var Guid = Guid.newGuid();
		

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
		          //$scope.todos = data;
		          //console.log(tt);                
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
			var ReservationInfo = {};
			var ReservationInfo = $scope.ReservationInfo;
			ReservationInfo.affiliateConfirmationId = Guid;
			$scope.testForm = ReservationInfo;
			bookFactory.getBookingInformation(ReservationInfo);
			//return console.log(ReservationInfo);
		}

	};

	BookController.$inject = ['$scope', '$http', 'bookFactory','$sessionStorage', 'Guid'];

    angular.module('achApp')
      .controller('BookController', BookController);

    

}());
