app.controller('MainController',
	['$scope', function($scope) {
		$scope.title = 'Hamster Heaven';

		$scope.hamsters=[
		{
			name: 'Brownie', 
			food: 'tacos',
			likes: 0,
			// photo: 'hamster.jpg'
		}, 
		{
			name: 'Fuzzy', 
			food: 'ice cream',
			likes: 0
		}, 
		{
			name: 'Al', 
			food: 'waffles',
			likes: 0
		} 
		];
		  $scope.plusOne = function(index) {
		    $scope.hamsters[index].likes += 1;
		  };

		  $scope.getRandomInt = function (min, max) {
  				return Math.floor(Math.random() * (max - min)) + min;
			}

	}]);

