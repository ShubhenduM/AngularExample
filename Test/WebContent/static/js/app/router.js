(function() {

	var app = angular.module("testApp");
	app.config(function($routeProvider,$locationProvider) {
		$routeProvider
	
		.when('/table',{
			templateUrl : 'static/view/tableview.html',
			controller  : 'testCtrl'
		})
		.when('/list',{
			templateUrl : 'static/view/listview.html',
			controller  : 'testCtrlList'
		})
		.otherwise({
			templateUrl : 'static/view/home.html'
		});
		$locationProvider.html5Mode(true);
	})
})();