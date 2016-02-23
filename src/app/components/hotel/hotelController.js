(function(){

	var HotelController = function($scope, $stateParams, $sessionStorage, $timeout, hotelFactory, utilsFactory, NgMap, $sce){
        $scope.loading = true;
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

                    $scope.trustedHtml = function (plainText) {
                        return $sce.trustAsHtml(plainText);
                    }
                    
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
   
                    $scope.roomRateData = data.HotelRoomAvailabilityResponse.HotelRoomResponse;
                    $scope.availResp = data.HotelRoomAvailabilityResponse;
                    //console.log(data);
                    if($scope.roomRateData.RateInfos){
                        //Check for single room
                        $scope.lowestPrice = data.HotelRoomAvailabilityResponse.HotelRoomResponse.RateInfos.RateInfo.ChargeableRateInfo['@total'];
                        $scope.snglRoom = true;

                    }else{
                        //Check for multi room
                        $scope.lowestPrice = data.HotelRoomAvailabilityResponse.HotelRoomResponse[0].RateInfos.RateInfo.ChargeableRateInfo['@total'];
                        $scope.multiRoom = true;
                    }                 

                    $scope.loading = false;
        		});
        	return;
        };
        $scope.hotelRoomAvailability();

        
        //Sets room type from booking button
        $scope.setHotelBookingDetails = function(roomDetails, hotelInformation){
            return hotelFactory.setHotelBookingDetails(roomDetails, hotelInformation);
        };

	};


	HotelController.$inject = ['$scope', '$stateParams', '$sessionStorage', '$timeout', 'hotelFactory', 'utilsFactory', 'NgMap', '$sce'];

    angular.module('achApp')
      .controller('HotelController', HotelController);

}());