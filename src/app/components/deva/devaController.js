(function(){

	var DevaController = function($scope, devaFactory, $log, spinnerService){

		$scope.myVar = 'breast';

		$scope.months = [01,02,03,04,05,06,07,08,09,10,11,12];

		

		$scope.rooms = [
				{name:'Studio'},
				{name:'Flat'},
				{name:'Mansion'}
		];

		$scope.test = function(){
			devaFactory.myTest()
				.then(function(data, status, headers, config){
					
					$scope.data = data;
					console.log($scope.data);
					console.log(data);
					console.log(status);
					console.log(headers);
					console.log(config);

					
				})
				.catch(function(data, status){
					//var errorMsg = "Error from server: " + reason.status + reason.statusText;
					console.log(data);
					console.log(status);
					//console.log(errorMsg);
				});

		}
		$scope.test();
	};


	DevaController.$inject = ['$scope', 'devaFactory', '$log', 'spinnerService'];

    angular.module('achApp')
      .controller('DevaController', DevaController);

}());