(function(){
	
	var stateFactory = function(){
	var factory = {};		
		
	   factory.getAusStates = function(stateProvinceCode){

          switch(stateProvinceCode)
          {
            case 'AC': stateProvinceCode = 'ACT';
            break;
            case 'NW': stateProvinceCode = 'NSW';
            break;
            case 'NO': stateProvinceCode = 'NT';
            break;
            case 'QL': stateProvinceCode = 'QLD';
            break;
            case 'SA': stateProvinceCode = 'SA';
            break;
            case 'TS': stateProvinceCode = 'TAS';
            break;
            case 'VC': stateProvinceCode = 'VIC';
            break;
            case 'WT': stateProvinceCode = 'WA';
            break;
          }       
            
        return dataState = stateProvinceCode;
		};	

	return factory;
	
	};

	//Register the object with Angular.js
    angular.module('achApp')
        .factory('stateFactory', stateFactory);

}());