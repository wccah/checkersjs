'use strict';

var checkerApp = angular.module('checkerApp', []);

checkerApp.controller('CheckerCtrl', function($scope) {
	var grid = [];
	var a = true;
	for(var i=0;i<8;i++){
		var c = [];
		for(var j=0;j<8;j++){
			a = !a;
			c.push({color:a});
		}
		a = !a;
		grid.push(c);
	}
	
	$scope.grid = grid;
});