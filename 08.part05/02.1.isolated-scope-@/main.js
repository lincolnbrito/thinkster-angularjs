var app = angular.module('drinkApp',[]);

app.controller("AppCtrl", function($scope){

})

app.directive("drink", function(){
	return {
		scope: {
			flavor: "@"
		},
		template: '<div>{{flavor}}</div>',
	}
});