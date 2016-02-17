(function(){

	var DevaController = function($scope, spinnerService){

		$scope.myVar = 'breast';
		

		$scope.rooms = [
				{name:'Studio'},
				{name:'Flat'},
				{name:'Mansion'}
		];

		$scope.test = function(data){

			var username = data
			
			console.log(username);

		}
	};


	DevaController.$inject = ['$scope', 'spinnerService'];

    angular.module('achApp')
      .controller('DevaController', DevaController);

}());