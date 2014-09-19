var app = angular.module("superApp", []);

app.directive("superhero", function(){
	return {
		restrict: "E",
		scope: {},
		controller: function($scope){
			$scope.abilities = [];

			this.addStrengh = function(){
				$scope.abilities.push("strengh");
			}

			this.addSpeed = function(){
				$scope.abilities.push("speed");
			}

			this.addFlight = function(){
				$scope.abilities.push("fligth");
			}
		},
		link: function(scope, element){
			element.addClass("btn btn-default");
			element.bind("mouseenter", function(){
				console.log(scope.abilities);
			})
		}
	}
});


app.directive("strength", function(){
	return {
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl){
			superheroCtrl.addStrengh();
		}
	}
});

app.directive("speed", function(){
	return {
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl){
			superheroCtrl.addSpeed();
		}
	}
});

app.directive("flight", function(){
	return {
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl){
			superheroCtrl.addFlight();
		}
	}
});