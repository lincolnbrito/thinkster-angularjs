var app = angular.module('phoneApp',[]);

app.controller("AppCtrl", function($scope){
	$scope.callHome = function(message){
		alert(message);
	}
});

app.directive("phone", function(){
	return {
		scope: {
			dial: "&",
		},
		template: '<input type="text" ng-model="value">' +
			'<div class="btn btn-default" ng-click="dial({message:value})">Call Home!</div>'
	}
})