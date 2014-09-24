var app = angular.module("app", []);

app.directive('hello', function(){
	return {
		restrict: 'E',
		templateUrl: 'hello.tpl.html',
		replace: true
	};
});