(function(){

	var DevbController = function($scope, utilsFactory){
			
			$scope.Data = utilsFactory.myTestResponse();
			 

			 $scope.message = 'hello';

			 $scope.rooms = [
			 	{name:'oaks', message:'Here'},
			 	{name:'jokes', message:'There'}
			 ];
	};


	DevbController.$inject = ['$scope', 'utilsFactory'];

    angular.module('achApp')
      .controller('DevbController', DevbController)   

}());