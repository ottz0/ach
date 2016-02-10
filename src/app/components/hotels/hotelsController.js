(function(){

    var HotelsController = function($scope, $stateParams, $location, $sessionStorage, $timeout, hotelsFactory, utilsFactory, spinnerService, Slug){
        $scope.eanErrorBlock = false;
        $scope.loading = true; 
  
        /*
            Run from search results
        */
        $scope.getEanApi = function(){
            $scope.loading = true;
        	hotelsFactory.searchRequest()
        		.then(function(data){
                    $scope.displayResults(data);  
        		});
            return;
        };
        $scope.getEanApi();

        
        /*
            Page for more results
        */
        $scope.moreResults = function(){
            $scope.moreResSpin = true;
            
            hotelsFactory.moreResults()
                .then(function(data){
                    var HotelListResponse = data.HotelListResponse.HotelList;
  
                    if(HotelListResponse){
                        //Append more results to hotels object
                        var appendData = data.HotelListResponse.HotelList.HotelSummary;
                        $scope.hotels = $scope.hotels.concat(appendData);
                        $scope.moreResSpin = false;
                    }else{
                        //Send to error handling
                        $scope.eanError(data);
                    }                 
                });
        };


        /*
            Scope the hotelListResponse and EanError
        */
        $scope.displayResults = function(data){   
            var HotelList = data.HotelListResponse.HotelList;

            if(HotelList){
                 //If less than results on page hide the results button
                // var hotelNum = data.HotelListResponse.HotelList.HotelSummary.length;
                //     if(hotelNum >= 10){
                //     $scope.moreResults = false;
                // };
                $scope.achMain = true;
                $scope.HotelListResponse = data.HotelListResponse;
                $scope.hotels = data.HotelListResponse.HotelList.HotelSummary;
                $scope.achSearch = JSON.parse($storage.achSearch);
            }else{  
                $scope.eanError(data);
            };

            $timeout(function() {
                $scope.loading = false;
            }, 2000);
        }; 

        $scope.eanError = function(data){

            var EanWsError = data.HotelListResponse.EanWsError;
            $scope.achMain = false;

            if(EanWsError.category === 'RESULT_NULL'){
                $scope.moreResults = false;
            }else{
                $scope.eanError = EanWsError;
                console.log(EanWsError);
               return $scope.eanErrorBlock = true; 
            }
        }
	};

    HotelsController.$inject = ['$scope', '$stateParams', '$location', '$sessionStorage', '$timeout', 'hotelsFactory', 'utilsFactory', 'spinnerService', 'Slug'];

    angular.module('achApp')
      .controller('HotelsController', HotelsController);



}());