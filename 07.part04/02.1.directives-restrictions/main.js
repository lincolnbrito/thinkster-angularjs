var app = angular.module("superhero", []);

app.directive("superman", function(){
	return {
		restrict: "C", //restrição por classe
		link: function(){
			alert("I'm working")
		}
	}
});
