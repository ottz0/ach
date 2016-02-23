(function(){

	var ConfirmController = function($scope, $stateParams, $sessionStorage, $timeout, utilsFactory){
        $scope.loading = true;
        $storage = sessionStorage;
        $scope.HotelRoomReservationResponse = JSON.parse($storage.HotelRoomReservationResponse);

         
        

        
        $scope.getReservationResponse = function(){
            //return 
        };

        
        // //Sets room type from booking button
        // $scope.setHotelBookingDetails = function(roomDetails, hotelInformation){
        //     return hotelFactory.setHotelBookingDetails(roomDetails, hotelInformation);
        // };

	};


	ConfirmController.$inject = ['$scope', '$stateParams', '$sessionStorage', '$timeout', 'utilsFactory'];

    angular.module('achApp')
      .controller('ConfirmController', ConfirmController);

}());