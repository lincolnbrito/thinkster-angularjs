var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function(){

});

app.directive("panel", function(){
	return {
		restrict: "E",
		transclude: true, //permite que o conteúdo do DOM seja injetado dentro do componente
		template: '<div class="panel" ng-transclude>This is a panel component</div>'
	}
});