(function(){
	var dateFactory = function(){

	var factory = {};	
		
		factory.dateStr = function(dateStr){

		var dateStr = dateStr;
			dateStr = dateStr
				.substr(3, 2)+"/"+dateStr
				.substr(0, 2)+"/"+dateStr
				.substr(6, 4);

		return dateStr;
		};
	
	return factory;

	};

	//Register the object with Angular.js
    angular.module('achApp')
        .factory('dateFactory',dateFactory);

}());