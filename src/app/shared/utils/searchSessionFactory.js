(function(){
	
	var searchSessionFactory = function($sessionStorage){
	var factory = {};
	$storage = sessionStorage;	
		
		factory.getSearchSession = function(){
			return achSearch = JSON.parse($storage.achSearch);
		};	
	return factory;
	};

	searchSessionFactory.$inject = ['$sessionStorage'];
	//Register the object with Angular.js
    angular.module('achApp')
        .factory('searchSessionFactory', searchSessionFactory);

}());