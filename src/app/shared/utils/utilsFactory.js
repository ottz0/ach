(function(){

	var utilsFactory = function(dateFactory, searchSessionFactory, stateFactory, hotelRatingFactory){
		var factory = {};
		
		factory.dateFactory = function(dateStr){
			var dateStr = dateStr;
			return dateFactory.dateStr(dateStr);
		};
		
		factory.getSearchSession = function(){
			return searchSessionFactory.getSearchSession();
		};

		factory.changeStates = function(stateProvinceCode){
			return stateFactory.getAusStates(stateProvinceCode);			
		};

		factory.changeRating = function(hotelRating){
			return hotelRatingFactory.getHotelRating(hotelRating);
		};
		
		return factory;	
	};

	
	utilsFactory.$inject = ['dateFactory', 'searchSessionFactory', 'stateFactory', 'hotelRatingFactory'];
	//Register the object with Angular.js
    angular.module('achApp')
        .factory('utilsFactory', utilsFactory);
}());