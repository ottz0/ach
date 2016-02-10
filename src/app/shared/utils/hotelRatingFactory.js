(function(){
	
	var hotelRatingFactory = function(){
	var factory = {};	

		factory.getHotelRating = function(hotelRating){

			switch(hotelRating)
			{
				case 5: hotelRating = 'assets/img/stars_5.gif';
				break;
				case 4.5: hotelRating = 'assets/img/stars_4_5.gif' ;
				break;
				case 4: hotelRating = 'assets/img/stars_4.gif' ;
				break;
				case 3.5: hotelRating = 'assets/img/stars_3_5.gif' ;
				break;
				case 3: hotelRating = 'assets/img/stars_3.gif' ;
				break;
				case 2.5: hotelRating = 'assets/img/stars_2_5.gif' ;
				break;
				case 2: hotelRating = 'assets/img/stars_2.gif' ;
				break;
				case 1.5: hotelRating = 'assets/img/stars_1_5.gif' ;
				break;
				case 1: hotelRating = 'assets/img/stars_1.gif' ;
				break;
				default: 
        		hotelRating = "assets/img/stars_none.gif";
			};
			
			return dataHotelRating = hotelRating;
		};

	return factory;
	
	};

	//Register the object with Angular.js
    angular.module('achApp')
        .factory('hotelRatingFactory', hotelRatingFactory);

}());