(function(){

	var DevController = function($scope, $http, devFactory, $timeout){
		$scope.loading = true;
		$scope.title = 'Dev Page';
		var messages = devFactory.list;
		console.log(messages.myMessage);


		// return $http.jsonp("http://ip-api.com/json/?callback=angular.callbacks._0")
  //               .then(function(data){
  //               	console.log(data);
  //               });


		//var url = 'http://api.ean.com/ean-services/rs/hotel/v3/list?cid=55505&apikey=k5drjfmwg6j6fgbadhccb9s5&minorrev=30&destinationstring="newcasle,australia&callback=angular.callbacks._0"'
		var url ="http://ip-api.com/json/?callback=angular.callbacks._0";

        return $http.jsonp(url)
                .then(function(data){
                	console.log(data);

                	
                });

        


		

	};


	DevController.$inject = ['$scope', '$http', 'devFactory', '$timeout'];

    angular.module('achApp')
      .controller('DevController', DevController);

}());