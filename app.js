var app = angular.module('app', []};

app.controller('MainController', function($scope) {
	$scope.val = 1
	
	$scope.inc = function() {
		$scope.val += 1
	}
})