var app = angular.module('choreApp',[]);

app.directive("kid", function(){
	return {
		restrict: "E",
		scope: {}, //isola o escopo
		template: '<input type="text" class="form-control" ng-model="chore"> {{chore}}'
	}
});