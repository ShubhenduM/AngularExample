(function() {
	angular.module('testApp').factory('testServiceList', function($http, $q , $window, $location) {
		var obj = {};
		
	
		var sampleData;

		obj.setSampleData = function(data) {
			sampleData = data;
		}

		obj.getSampleData = function() {
			return sampleData;
		}

		obj.promiseToHaveDataList = function() {
	        var defer = $q.defer();
	        $http.get('employees.json')
	            .success(function(data) {
	                obj.setSampleData(data);
	                defer.resolve(data);
	            })
	            .error(function() {
	                defer.reject('could not find employees.json');
	            });

	        return defer.promise;
	    }
		return obj;
	});
})();


