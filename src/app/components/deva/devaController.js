(function(){

	var DevaController = function($scope, devaFactory, $log, spinnerService, $sce, utilsFactory){
		$scope.formData = {};
		$scope.testXss = function(){
			//console.log('herre');



			$scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
            
               console.log($sce.trustAsHtml($scope.snippet));
		


		};
		$scope.testXss();








		
	};


	DevaController.$inject = ['$scope', 'devaFactory', '$log', 'spinnerService', '$sce', 'utilsFactory'];

    angular.module('achApp')
      .controller('DevaController', DevaController);
}());