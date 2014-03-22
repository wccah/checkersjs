'use strict';

var checkerApp = angular.module('checkerApp', []);

checkerApp.controller('CheckerCtrl', function($scope) {
	var grid = [];
	var a = true;
	for(var i=0;i<8;i++){
		var c = [];
		var p = i<3 ? -1 :
			     (i>4 ? 1 : 0);

		for(var j=0;j<8;j++){
			a = !a;
			c.push({on:a, x:j, y:i, piece: a?p:0});
		}
		a = !a;
		grid.push(c);
	}
	
	$scope.grid = grid;
	$scope.clicked = { x: undefined, y: undefined };
	
	
	
	$scope.clickSquare = function(cell) {
		debugger;
		if(!cell.on) {
			return;
		}
		
		$scope.clicked.x = cell.x;
		$scope.clicked.y = cell.y;
	};
});