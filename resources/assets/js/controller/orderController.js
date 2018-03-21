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

	//  Get Total Price Order
	$scope.getTotalOrder = () => {
		if (myOrder.length > 0) {
			var sumTotal = myOrder.reduce((a, b) => ({jumlah: a.jumlah + b.jumlah}));
			$scope.total = sumTotal.jumlah;
		} else {
			$scope.total = 0;
		}
	}
	
	// Add Fodd to Menu List
	$scope.addToList = ($index) => {

		var food = $scope.food[$index];

		$scope.qty = 1;

		var data = {
			id  	: food.id,
			name 	: food.name,
			price 	: food.price,
			qty 	: 1,
			jumlah  : food.price
		}

		myOrder.push(data);

		/*$scope.choosen = $scope.food[$index].name;*/
		
		$scope.getTotalOrder();
		$scope.orderList();

	}

	// Show My Order Menu
	$scope.orderList = () => {

		if (myOrder.length > 0) {
			$scope.orderData = true;
			$scope.orderNoData = true;
		} else {
			$scope.orderData = false;
			$scope.orderNoData = false;
		}

		$scope.myOrderList = myOrder;
	};
	$scope.orderList();

	// Set Total Price Order
	$scope.jmlOrder = ($index, qty) => {
		var food = myOrder[$index];

		if (myOrder.length > 0) {
			if (myOrder[$index].name === food.name) {
				myOrder[$index].qty = qty;
				myOrder[$index].jumlah = myOrder[$index].price * qty;
			}
		}

		$scope.getTotalOrder();
	}
	
	// Remove Menu From List Order
	$scope.removeOrder = (id) => {
		$scope.myOrderList.splice(id, 1);
		console.log($scope.myOrderList);
		$scope.getTotalOrder();
		$scope.orderList();

	}


	// Do Order
	$scope.order = () => {
		var total_price = $scope.total;
		var data = {
			total_price : total_price,
			token : token   
		};

		console.log(myOrder);

		orderModel.sendOrder(data).then((response) => {
			var id_order = response.data; 

			myOrder.forEach((val) => {
			    var data = {
			    	token 		: token,
			    	order_id 	: id_order,
			    	food_id		: val.id,
			    	qty 		: val.qty,
			    	total 		: val.jumlah
			    }

			    console.log(data);

			    orderModel.sendOrderDetail(data).then((response) => {
			    		console.log("Order Detail was saved");
			    });

			    swal({
				  type: 'success',
				  title: 'Your order has been sent',
				  text: 'Please wait.....',
				});

			});

			myOrder.splice(0, myOrder.length);
			$scope.orderList();
			$scope.total = "";
		});

	}

})