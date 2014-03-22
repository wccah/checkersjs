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
		if(!cell.on) {
			return;
		}
		
		if ( $scope.clicked.x !== undefined ) {
			var c = $scope.clicked;
			var from = $scope.grid[	c.y ][ c.x ];
			var p = from.piece;
			var to = $scope.grid[ cell.y ][ cell.x ];
			to.piece = p;
			from.piece = 0;
			$scope.clicked.x = undefined;
		} else {
			$scope.clicked.x = cell.x;
			$scope.clicked.y = cell.y;
		}
	};
});