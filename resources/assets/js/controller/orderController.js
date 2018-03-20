angular.module('app').controller('orderController', function($scope, foodModel){

	// Show Data
	$scope.getFood = () => {
		foodModel.getFood().then((response) => {
			$scope.food = response.data;
		})
	}
	$scope.getFood();

	var myOrder = [];

	$scope.getTotalOrder = () => {
		if (myOrder.length > 0) {
			var sumTotal = myOrder.reduce((a, b) => ({price: a.price + b.price}));
			$scope.total = sumTotal.price;
		} else {
			$scope.total = 0;
		}
	}

	$scope.addToList = ($index) => {
		var food = $scope.food[$index];
		myOrder.push(food);

		$scope.getTotalOrder();
	}

	$scope.myOrderList = myOrder;

	$scope.removeOrder = (id) => {
		$scope.myOrderList.splice(id, 1);
		console.log($scope.myOrderList);
		$scope.getTotalOrder();
	}

})