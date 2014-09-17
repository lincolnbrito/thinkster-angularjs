var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function(){
	var Avengers = {};

	Avengers.cast = [
		{
			name: 'Tom Hiddleston',
			character: 'Loki'
		},
		{
			name: 'Peter Parkers',
			character: 'Spiderman'
		},
		{
			name: 'Clark Kent',
			character: 'Superman'
		},
		{
			name: 'Bruce Wayne',
			character: 'Batman'
		},
		{
			name: 'Bruce Banner',
			character: 'Hulk'
		},
	];

	return Avengers;
});

function AvengersCtrl($scope, Avengers){
	$scope.avengers = Avengers;
}