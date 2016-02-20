(function(){

	var devaFactory = function($http){

		var factory = {};

		factory.myTest = function(){
			//var message = 'hello';
			//return message;
			return $http({
				method: 'GET',
				url: 'https://api.ipify.orgv?format=json'
			});
		};



	return factory;
	}; // /factory


	//Register the object with Angular.js
    angular.module('achApp')
        .factory('devaFactory', devaFactory);


}());