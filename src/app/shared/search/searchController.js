(function(){

    // var SearchController = function($scope, $location, $sessionStorage, searchFactory, hotelsFactory, utilsFactory){

    //     $scope.gethotelsFactory = hotelsFactory;
    //     $storage = sessionStorage;
    //     $scope.achSearch = {};
    //     $scope.achSearch.numberOfAdults = '2';
    //     $scope.achSearch.numberOfChildren = '0';
    //     $scope.achSearch.childAges = {};

    //     if(sessionStorage.getItem('achSearch') === null){         
    //     }
    //     else{
    //         $scope.achSearch = JSON.parse($storage.achSearch);
    //     }        

        
    //     $scope.setDefaultAges = function(){
    //         $scope.achSearch.childAges = {};
    //         $scope.achSearch.childAges.child1 = '1';
    //         $scope.achSearch.childAges.child2 = '1';
    //         $scope.achSearch.childAges.child3 = '1';
    //         $scope.achSearch.childAges.child4 = '1';
    //     }

    //     if($scope.achSearch.numberOfChildren === '0'){
    //         $scope.setDefaultAges();
    //         }

    //     $scope.setDestination = function(){
    //         var arrivalDate = $("#arrival-date").val();
    //         var departureDate = $("#departure-date").val();
    //         var destination = $("#destination").val();
    //         var childAges = {};
            

    //         //Put form data into session object
    //         var achSearch = {
    //             destination: destination,
    //             arrivalDate: arrivalDate,
    //             departureDate: departureDate,
    //             numberOfAdults: $scope.achSearch.numberOfAdults,
    //             numberOfChildren: $scope.achSearch.numberOfChildren,
    //             //childAges:childAges
    //         }
    //         achSearch.childAges = {};
    //         achSearch.childAges = childAges;



            
    //         if($scope.achSearch.numberOfChildren == 0){        
    //             delete achSearch.childAges;
    //         }
    //         else if($scope.achSearch.numberOfChildren == 1){        
    //             achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
    //         }
    //         else if($scope.achSearch.numberOfChildren == 2){        
    //             achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
    //             achSearch.childAges.child2 = $scope.achSearch.childAges.child2;
    //         }
    //         else if($scope.achSearch.numberOfChildren == 3){        
    //             achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
    //             achSearch.childAges.child2 = $scope.achSearch.childAges.child2;
    //             achSearch.childAges.child3 = $scope.achSearch.childAges.child3;
    //         }
    //         else if($scope.achSearch.numberOfChildren == 4){        
    //             achSearch.childAges.child1 = $scope.achSearch.childAges.child1;
    //             achSearch.childAges.child2 = $scope.achSearch.childAges.child2;
    //             achSearch.childAges.child3 = $scope.achSearch.childAges.child3;
    //             achSearch.childAges.child4 = $scope.achSearch.childAges.child4;
    //         }

    //         //Set a session from object
    //         $storage.achSearch = JSON.stringify(achSearch);           
            
    //         //return console.log($storage.achSearch);
    //         return $scope.setHotelsPath();

    //     }
        

    //     $scope.setHotelsPath = function(){
    //         $scope.gethotelsFactory.searchRequest(); //Fire function every time search is hit
    //             if($location.path() === '/hotels'){
    //                 location.reload(); 
    //             }; 
    //         $location.path('/hotels');           
    //     };  


    //     $scope.updateChildren = function(){
    //         var numberOfChildren = $scope.achSearch.numberOfChildren;
    //         if(numberOfChildren == 0 ){
    //             $scope.child1 = false;
    //             $scope.child2 = false;
    //             $scope.child3 = false;
    //             $scope.child4 = false;
    //         }
    //         else if(numberOfChildren == 1){
    //             $scope.child1 = true;
    //             $scope.child2 = false;
    //             $scope.child3 = false;
    //             $scope.child4 = false;
    //         }
    //         else if(numberOfChildren == 2){
    //             $scope.child1 = true;
    //             $scope.child2 = true;
    //             $scope.child3 = false;
    //             $scope.child4 = false;
    //         }
    //         else if(numberOfChildren == 3){
    //             $scope.child1 = true;
    //             $scope.child2 = true;
    //             $scope.child3 = true;
    //             $scope.child4 = false;
    //         }
    //         else if(numberOfChildren == 4){
    //             $scope.child1 = true;
    //             $scope.child2 = true;
    //             $scope.child3 = true;
    //             $scope.child4 = true;
    //         }

    //     }
    //     $scope.updateChildren();

    // };


    // SearchController.$inject = ['$scope', '$location', '$sessionStorage', 'searchFactory', 'hotelsFactory', 'utilsFactory'];

    // angular.module('achApp')
    //   .controller('SearchController', SearchController);

}());