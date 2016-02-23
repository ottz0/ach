(function(){

	var DevaController = function($scope, devaFactory, $log, spinnerService, $sce, utilsFactory){

		//$scope.myVal = false;
		//var data = $scope.data;

		//$scope.data = utilsFactory.myTestResponse($scope.data);



		$scope.Data = utilsFactory.myTestResponse();












		$scope.snippetss = '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';


        $scope.snippet = "&lt;p&gt;&lt;b&gt;Know Before You Go&lt;/b&gt; &lt;br /&gt;&lt;ul&gt; &lt;li&gt;The property has connecting/adjoining rooms, which are subject to availability and can be requested by contacting the property using the number on the booking confirmation. &lt;/li&gt;&lt;li&gt;No pets and no service animals are allowed at this property. &lt;/li&gt; &lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;Fees&lt;/b&gt; &lt;br /&gt;&lt;p&gt;The following fees and deposits are charged by the property at time of service, check-in, or check-out. &lt;/p&gt; &lt;ul&gt; &lt;li&gt;Breakfast fee: between AUD 9 and AUD 29 per person (approximately)&lt;/li&gt; &lt;li&gt;Valet parking fee: AUD 69.00 per night&lt;/li&gt; &lt;li&gt;Rollaway beds are available for an additional fee&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change. &lt;/p&gt;&lt;/p&gt;";

        $scope.myEncode = $sce.trustAsHtml($scope.snippet);

        
        


        $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };


		$scope.trustedHtml = function (plainText) {
                        return $sce.trustAsHtml(plainText);
                    }

		$scope.test = function(){
			// devaFactory.myTest()
			// 	.then(function(data, status, headers, config){
					
			// 		$scope.data = data;
			// 		console.log($scope.data);
			// 		console.log(data);
			// 		console.log(status);
			// 		console.log(headers);
			// 		console.log(config);

					
			// 	})
			// 	.catch(function(data, status){
			// 		//var errorMsg = "Error from server: " + reason.status + reason.statusText;
			// 		console.log(data);
			// 		console.log(status);
			// 		//console.log(errorMsg);
			// 	});

		}
		$scope.test();
	};


	DevaController.$inject = ['$scope', 'devaFactory', '$log', 'spinnerService', '$sce', 'utilsFactory'];

    angular.module('achApp')
      .controller('DevaController', DevaController);
}());