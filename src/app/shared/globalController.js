(function(){

	var globalController = function($scope, $location, $state, $sessionStorage, hotelsFactory){

		$scope.globalVars = function(){

			$scope.globalData = {showSearchBar: true};

			// This callback will be called everytime you change a page using ui-router state
			$scope.$on('$stateChangeStart', function(event, toState, toParams) {
			    $scope.globalData.showSearchBar = true;
			});
		}
		$scope.globalVars();


		$scope.achSearchForm = function(){
			$storage = sessionStorage;
			$scope.achSearch = {};

			//Adds Default values to search form
			var setDefaultSearchValues = function(){
				$scope.achSearch = {};
		        $scope.achSearch.numberOfAdults = '2';
		        $scope.achSearch.numberOfChildren = '0';
		        $scope.achSearch.childAges = {};
			}

			//Set ages to 1
			var setDefaultAges = function(){
	            $scope.achSearch.childAges = {};
	            $scope.achSearch.childAges.child1 = '1';
	            $scope.achSearch.childAges.child2 = '1';
	            $scope.achSearch.childAges.child3 = '1';
	            $scope.achSearch.childAges.child4 = '1';
	        }
	        setDefaultAges();


	        if(sessionStorage.getItem('achSearch') === null){  
				setDefaultSearchValues();       
	        }
	        else{
	            $scope.achSearch = JSON.parse($storage.achSearch);
	        }  

			//Dynamic drowpdown
			$scope.updateChildren = function(){
				
	            var numberOfChildren = $scope.achSearch.numberOfChildren;
	            if(numberOfChildren == '0' ){
	                $scope.child1 = false;
	                $scope.child2 = false;
	                $scope.child3 = false;
	                $scope.child4 = false;
	                setDefaultAges();
	            }
	            else if(numberOfChildren == '1'){
	                $scope.child1 = true;
	                $scope.child2 = false;
	                $scope.child3 = false;
	                $scope.child4 = false;
	            }
	            else if(numberOfChildren == '2'){
	                $scope.child1 = true;
	                $scope.child2 = true;
	                $scope.child3 = false;
	                $scope.child4 = false;
	            }
	            else if(numberOfChildren == '3'){
	                $scope.child1 = true;
	                $scope.child2 = true;
	                $scope.child3 = true;
	                $scope.child4 = false;
	            }
	            else if(numberOfChildren == '4'){
	                $scope.child1 = true;
	                $scope.child2 = true;
	                $scope.child3 = true;
	                $scope.child4 = true;
	            }

	        }
	        $scope.updateChildren();
		};
		$scope.achSearchForm();



		$scope.gc.setSearchDestination = function(){	

			var childAges = {};
            var arrivalDate = $("#arrival-date").val();
            var departureDate = $("#departure-date").val();
            var destination = $("#destination").val();
            
            var achSearch = {
                destination: destination,
                arrivalDate: arrivalDate,
                departureDate: departureDate,
                numberOfAdults: $scope.achSearch.numberOfAdults,
                numberOfChildren: $scope.achSearch.numberOfChildren,
        	}
        	achSearch.childAges = {};
            achSearch.childAges = childAges;

            
            if($scope.achSearch.numberOfChildren == 0){        
                delete achSearch.childAges;
            }
            else if($scope.achSearch.numberOfChildren == 1){        
                achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
            }
            else if($scope.achSearch.numberOfChildren == 2){        
                achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
                achSearch.childAges.child2 = $scope.achSearch.childAges.child2;
            }
            else if($scope.achSearch.numberOfChildren == 3){        
                achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
                achSearch.childAges.child2 = $scope.achSearch.childAges.child2;
                achSearch.childAges.child3 = $scope.achSearch.childAges.child3;
            }
            else if($scope.achSearch.numberOfChildren == 4){        
                achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
                achSearch.childAges.child2 = $scope.achSearch.childAges.child2;
                achSearch.childAges.child3 = $scope.achSearch.childAges.child3;
                achSearch.childAges.child4 = $scope.achSearch.childAges.child4;
            }

            //Set a session from object
            $storage.achSearch = JSON.stringify(achSearch); 	
            
            //return console.log($storage.achSearch);
            return setHotelsPath();
        }

        var setHotelsPath = function(){
        	$scope.gethotelsFactory = hotelsFactory;
            $scope.gethotelsFactory.searchRequest(); //Fire function every time search is hit
            
                if($location.path() === '/hotels'){
                    location.reload(); 
                }
                else if($state.current.name === 'hotel'){
					location.reload();
                }
                else{
                	$location.path('/hotels');  
                }   
        };  

	}


	globalController.$inject = ['$scope', '$location', '$state', '$sessionStorage', 'hotelsFactory'];

    angular.module('achApp')
     	.controller('globalController', globalController)

    	.directive('scrollToItem', function() {                                                      
		    return {                                                                                 
		        restrict: 'A',                                                                       
		        scope: {                                                                             
		            scrollTo: "@"                                                                    
		        },                                                                                   
		        link: function(scope, $elm,attr) {                                                   

		            $elm.on('click', function() {                                                    
		                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
		            });                                                                              
		    }                                                                                    
	    }})

	    .directive( 'backButton', function() {
		    return {
		        restrict: 'A',
		        link: function( scope, element, attrs ) {
		            element.on( 'click', function () {
		                history.back();
		                scope.$apply();
		            } );
		        }
		    };
		})

		.directive('dateNow', ['$filter', function($filter) {
		  return {
		    link: function( $scope, $element, $attrs) {
		      $element.text($filter('date')(new Date(), $attrs.dateNow));
		    }
		  };
		}]) 


}());