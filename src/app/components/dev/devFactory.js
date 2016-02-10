(function(){

	var devFactory = function(){

		var messages = {};

		messages.list = {};
		messages.list.loading = false;
		messages.list.myMessage = 'Hellow';
		



		// messages.add = function(message){
		//     messages.list.push({id: messages.list.length, text: message});
		// };

		// factory.getGlobalVars = function(){
		// 	var targetList = [];
  //       	return loadingOn = true;
  //       	//getGlobalVars.loadingOdd = false;
  //       };
	






	return messages;
	}; // /factory


	//Register the object with Angular.js
    angular.module('achApp')
        .factory('devFactory', devFactory);


}());