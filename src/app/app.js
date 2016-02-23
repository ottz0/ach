(function(){

	var app = angular.module('achApp', ['ui.router', 'ngStorage', 'ngSanitize', 'angularSpinners', 'slugifier', 'ngMap', 'ngGuid']);

	app.config(function ($stateProvider, $locationProvider) {

        $stateProvider
			.state('index',
			{
                url:"/",
                controller: 'HomeController',
				templateUrl: 'app/components/home/homeView.html',
                data : {pageTitle: 'Australian Cheap Hotels'}
			})

            .state('hotels', { 
                title: 'Hotels page',
                url: '/hotels',
                controller: 'HotelsController',
                templateUrl: 'app/components/hotels/hotelsView.html'
                        // resolve: {
                        //     goat: function(hotelsFactory) {
                        //         return hotelsFactory.getEanApi();
                        //     }
                        // }
            })

            .state('hotel', { 
                title: 'Hotel page',
                url: '/hotel/:hotelName/:hotelId',
                controller: 'HotelController',
                templateUrl: 'app/components/hotel/hotelView.html',
                // params:{
                //     hotelId:{key:'value'},
                // }
            })

            .state('book', { 
                title: 'Book',
                url: '/book',
                controller: 'BookController',
                templateUrl: 'app/components/book/bookView.html',
                // params:{
                //     hotelId:{key:'value'},
                // }
            })

            .state('confirm', { 
                title: 'Confirm',
                url: '/book/confirm',
                controller: 'ConfirmController',
                templateUrl: 'app/components/confirm/confirmView.html',
            })

            .state('dev', { 
                title: 'Dev page',
                url:"/dev",
                controller: 'DevController',
                templateUrl: 'app/components/dev/devView.html'
            })

            .state('deva', { 
                title: 'Dev page',
                url:"/deva",
                controller: 'DevaController',
                templateUrl: 'app/components/deva/devaView.html'
            })

            .state('devb', { 
                title: 'Dev page',
                url:"/devb",
                controller: 'DevbController',
                templateUrl: 'app/components/devb/devbView.html'
            })

            .state("otherwise", {
                url: "*path",
                templateUrl: "views/error-not-found.html"
            });

        $locationProvider.html5Mode(true);
            
    })

    //Load title into page
   .run([ '$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
     //$rootScope.loading = { value: true };
    }])

    // .directive('helloWorld',function(){
    //     return{
    //         template: 'Hello world';
    //     };
    // });
    // .filter('to_trusted', ['$sce', function($sce){
    //     return function(text) {
    //         return $sce.trustAsHtml(text);
    //     };


   .filter("to_trusted", ['$sce', function($sce) {
      return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
      }
    }]);


}());