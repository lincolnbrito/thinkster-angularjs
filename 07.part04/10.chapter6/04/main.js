var app = angular.module("app", []);

app.directive('hello', function(){
	return {
		template: '<div>Hi there <span ng-transclude></span></div>',
		transclude: true,
		replace: true
	};
});