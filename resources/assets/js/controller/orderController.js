angular.module('app').controller('orderController', function($scope, foodModel, userModel, orderModel){

	$scope.session = userModel.getUserData();
	var token = $scope.session.data.api_token;

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
			var sumTotal = myOrder.reduce((a, b) => ({total_price: a.price + b.price}));
			$scope.total = sumTotal.total_price;
		} else {
			$scope.total = 0;
		}
	}
	
	$scope.addToList = ($index) => {

		var food = $scope.food[$index];

		myOrder.push(food);

		$scope.choosen = $scope.food[$index].name;
		
		$scope.getTotalOrder();
	}


	$scope.myOrderList = myOrder;

	$scope.removeOrder = (id) => {
		$scope.myOrderList.splice(id, 1);
		console.log($scope.myOrderList);
		$scope.getTotalOrder();
	}

	$scope.order = () => {
		var total_price = $scope.total;
		var data = {
			total_price : total_price,
			token : token   
		};

		orderModel.sendOrder(data).then((response) => {
			console.log(response.data);
		});

		/*console.log(data);*/
	}

})