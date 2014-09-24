var app = angular.module("app", []);

app.run(function($templateCache){
	$templateCache.put('hello-cache.tpl.html', '<div>Hi there</div>')
});

app.directive('hello', function(){
	return {
		restrict: 'E',
		templateUrl: 'hello-cache.tpl.html',
		replace: true
	};
});