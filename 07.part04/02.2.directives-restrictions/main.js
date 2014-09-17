var app = angular.module("superhero", []);

app.directive("superman", function(){
	return {
		restrict: "M", //restrição por comentário
		link: function(){
			alert("I'm working")
		}
	}
});
