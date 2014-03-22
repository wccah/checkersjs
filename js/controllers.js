'use strict';

var checkerApp = angular.module('checkerApp', []);

chekerApp.controller('CheckerCtrl', function($scope) {
	var grid = [];
	var a = true;
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			a = !a;
			grid[i][j] = a;
		}	
	}
	
	$scope.grid = grid;
});