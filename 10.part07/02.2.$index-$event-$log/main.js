var app = angular.module("app",[]);


app.run(function($rootScope, $log){
	$rootScope.$log = $log;
});

app.controller("foo", function($scope){
	$scope.myFunc = function(ev){
		console.error(ev);
	}
});