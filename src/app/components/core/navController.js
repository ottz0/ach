(function(){

    var NavController = function($scope, $location){

    	$scope.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
    	};
    };


    NavController.$inject = ['$scope', '$location'];

    angular.module('achApp')
      .controller('NavController', NavController);



}());