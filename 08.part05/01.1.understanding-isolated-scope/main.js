var app = angular.module('choreApp',[]);

app.controller("ChoreCtrl", function($scope){
	$scope.logChore = function(chore){
		alert(chore + " is done!");
	}
});

app.directive("kid", function(){
	return {
		restrict: "E",
		scope: {
			done: "&"
		},
		template: '<input type="text" class="form-control" ng-model="chore">' +
		'{{chore}}'+
		'<div class="btn" ng-click="done({chore:chore})">Done</div>'
	}
});