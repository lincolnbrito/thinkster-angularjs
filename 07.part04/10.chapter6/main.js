var app = angular.module("app", []);

app.directive('hello', function(){
	return {
		restrict: 'E',
		template: '<div>Hi there</div>',
		replace: true
	};
});