/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';    
    angular.module("testApp").controller("testCtrlList", ["$scope","$window","$location","testServiceList","$rootScope", function ($scope ,$window,$location,testServiceList,$rootScope){
       
    	
    	
    	$scope.populateSampleDataList=function(){
			var myPromise = testServiceList.promiseToHaveDataList();
			myPromise.then(function(resolve){
				console.log(resolve);
			  $scope.employees=resolve.employees;
			        }, function(reject){
			        
		    });

		};
		$scope.populateSampleDataList();
        
        }]);

})();








