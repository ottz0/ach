(function(){

	var DevaController = function($scope, spinnerService){
		$scope.achSearch = {};
		$scope.achSearch.numberOfChildren = '0';
		$scope.achSearch.child1 = '1';
		$scope.achSearch.child2 = '1';
		$scope.achSearch.child3 = '1';
		$scope.achSearch.child4 = '1';
		$scope.child1 = false;
		$scope.child2 = false;
		$scope.child3 = false;
		$scope.child4 = false;

		$scope.updateChildren = function(){
			var numberOfChildren = $scope.achSearch.numberOfChildren;

			console.log(numberOfChildren);

			if(numberOfChildren == 0 ){
				$scope.child1 = false;
				$scope.child2 = false;
				$scope.child3 = false;
				$scope.child4 = false;
				delete $scope.achSearch.child1;
				delete $scope.achSearch.child2;
				delete $scope.achSearch.child3;
				delete $scope.achSearch.child4;

			}
			else if(numberOfChildren == 1){
				$scope.child1 = true;
				$scope.child2 = false;
				$scope.child3 = false;
				$scope.child4 = false;
				$scope.achSearch.child1 = '1';
				delete $scope.achSearch.child2;
				delete $scope.achSearch.child3;
				delete $scope.achSearch.child4;
			}
			else if(numberOfChildren == 2){
				$scope.child1 = true;
				$scope.child2 = true;
				$scope.child3 = false;
				$scope.child4 = false;
				$scope.achSearch.child1 = '1';
				$scope.achSearch.child2 = '1';
				delete $scope.achSearch.child3;
				delete $scope.achSearch.child4;
			}
			else if(numberOfChildren == 3){
				$scope.child1 = true;
				$scope.child2 = true;
				$scope.child3 = true;
				$scope.child4 = false;
				$scope.achSearch.child1 = '1';
				$scope.achSearch.child2 = '1';
				$scope.achSearch.child3 = '1';
				delete $scope.achSearch.child4;
			}
			else if(numberOfChildren == 4){
				$scope.child1 = true;
				$scope.child2 = true;
				$scope.child3 = true;
				$scope.child4 = true;
				$scope.achSearch.child1 = '1';
				$scope.achSearch.child2 = '1';
				$scope.achSearch.child3 = '1';
				$scope.achSearch.child4 = '1';
			}

		}
		$scope.updateChildren();

		$scope.getSearchResults = function(){
			var childs = [];
			console.log($scope.achSearch);
			var nc = parseInt(childs);
			if($scope.achSearch.numberOfChildren == 0){
				console.log('it doies');
			}
			else if($scope.achSearch.numberOfChildren == 1){		
				childs.push($scope.achSearch.child1);
			}
			else if($scope.achSearch.numberOfChildren == 2){		
				childs.push($scope.achSearch.child1);
				childs.push($scope.achSearch.child2);
			}
			else if($scope.achSearch.numberOfChildren == 3){		
				childs.push($scope.achSearch.child1);
				childs.push($scope.achSearch.child2);
				childs.push($scope.achSearch.child3);
			}
			else if($scope.achSearch.numberOfChildren == 4){		
				childs.push($scope.achSearch.child1);
				childs.push($scope.achSearch.child2);
				childs.push($scope.achSearch.child3);
				childs.push($scope.achSearch.child4);
			}
			console.log(nc);
		};

	};


	DevaController.$inject = ['$scope', 'spinnerService'];

    angular.module('achApp')
      .controller('DevaController', DevaController);

}());