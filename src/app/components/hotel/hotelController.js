(function(){

	var HotelController = function($scope, $stateParams, $sessionStorage, $timeout, hotelFactory, utilsFactory, NgMap){

        $storage = sessionStorage;
        $scope.achSearch = JSON.parse($storage.achSearch);

        //return console.log($scope.achSearch.destination);
         
        $scope.getHotelInformation = function(){
        	
        	hotelFactory.getHotelInformation()
        		.then(function(data){
                    var hotelInformation = data.HotelInformationResponse;
                    $scope.hotelDetails = data.HotelInformationResponse.HotelDetails;
                    $scope.images = data.HotelInformationResponse.HotelImages.HotelImage;
                    $scope.hotel = data.HotelInformationResponse.HotelSummary;
                    
                    var hotelInformation = data.HotelInformationResponse.HotelSummary;
                    (function(){
					    var stateProvinceCode = hotelInformation.stateProvinceCode;
					    utilsFactory.changeStates(stateProvinceCode);
					    return $scope.hotel.stateProvinceCode = dataState;
				    }()); //Change state string

			    	(function(){
			    		var hotelRating = hotelInformation.hotelRating;
				    	utilsFactory.changeRating(hotelRating);
				    	return $scope.hotel.hotelRating = dataHotelRating;
			    	}()); //Add star ratings

			    	$scope.currentImage = $scope.images[0];
					
                    
                    $scope.setCurrentImage = function(image){
					   $scope.currentImage = image;
					};

                    
                    $scope.googleMap = function(){
                       $timeout(function() {
                            NgMap.getMap().then(function(map) {
                                google.maps.event.trigger(map, "resize"); 
                                $scope.achLat = hotelInformation.latitude;
                                $scope.achLong = hotelInformation.longitude;
                            });
                        }, 500);
                    }

        		});
            return;
        };
        $scope.getHotelInformation();

        
        $scope.hotelRoomAvailability = function(){
        	hotelFactory.hotelRoomAvailability()
        		.then(function(data){
        			console.log(data);
        			$scope.hotelAvail = data;


                    //var rateInfoA = data.HotelRoomAvailabilityResponse.HotelRoomResponse.RateInfos.RateInfo.ChargeableRateInfo['@total'];
        			//var rateInfoB = data.HotelRoomAvailabilityResponse.HotelRoomResponse[0].RateInfos.RateInfo.ChargeableRateInfo['@total'];
                    //  if(data == data.HotelRoomAvailabilityResponse.HotelRoomResponse[0].RateInfos.RateInfo.ChargeableRateInfo['@total'] || data.HotelRoomAvailabilityResponse.HotelRoomResponse.RateInfos.RateInfo.ChargeableRateInfo['@total']){
                    //     console.log('it is');
                    // };

                   //console.log(rateInfoA);
                   //console.log(rateInfoB);

                   //return;
                    $scope.rooms = data.HotelRoomAvailabilityResponse.HotelRoomResponse;
                    console.log($scope.rooms);
                    $scope.lowestPrice = data.HotelRoomAvailabilityResponse.HotelRoomResponse[0].RateInfos.RateInfo.ChargeableRateInfo['@total'];
        			

                    //console.log();
                    //console.log($scope.rooms[0].RateInfos.RateInfo.ChargableRateInfo['@total']);
        		})
        	return;
        };
        $scope.hotelRoomAvailability();

        
        //Sets room type from booking button
        $scope.setHotelBookingDetails = function(roomDetails, hotelInformation){
            return hotelFactory.setHotelBookingDetails(roomDetails, hotelInformation);
        };

	};


	HotelController.$inject = ['$scope', '$stateParams', '$sessionStorage', '$timeout', 'hotelFactory', 'utilsFactory', 'NgMap'];

    angular.module('achApp')
      .controller('HotelController', HotelController);

}());