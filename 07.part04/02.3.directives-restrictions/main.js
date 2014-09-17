var app = angular.module("superhero", []);

app.directive("superman", function(){
	return {
		restrict: "A", //restrição por atributo
		link: function(){
			alert("I'm working stronger")
		}
	}
});

app.directive("flash", function(){
	return {
		restrict: "A", //restrição por atributo
		link: function(){
			alert("I'm working faster")
		}
	}
});
