angular.module('app').controller('foodController', function($scope, foodModel){

	// Show Data
	$scope.getFood = () => {
		foodModel.getFood().then((response) => {
			$scope.food = response.data;
		})
	}

	$scope.getFood();

	$scope.showFoodModal = () => {
		$('#foodModal').modal("show");
	}

	
	// Add data
	$scope.food = {};
	$scope.addFood = () => {
		var data = {
			name		: $scope.food.name,
			price 		: $scope.food.price,
		};

		foodModel.postFood(data).then(() => {

			$scope.getFood();

			$scope.food.name 	= '';
			$scope.food.price	= '';

			$("#foodModal").modal("hide");

			swal('Created!', 'Your food has been created.', 'success')
			
	    });
	};

	// Update Data
	var update = {};
	$scope.showModal = (id) => {
		update = $scope.food[id];

		$scope.new.name = update.name;
		$scope.new.price = update.price;

		$('#update-modal').modal("show");
	}


	$scope.new = {};
	$scope.editData = () => {
		var data = {
			id		: update.id,
			name 	: $scope.new.name,
			price	: $scope.new.price
		};

		foodModel.updateFood(data).then(() => {

			$('#update-modal').modal("hide");
		  	$scope.new.name = '';
			$scope.new.price = '';
			$scope.getFood();

			swal('Updated!', 'Your data has been updated.', 'success')
		});
	    
	};


	$scope.deleteFood =  (id) => {
				
		swal({
		  title: 'Are you sure?',
		  text: "Delete this food!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.value) {
			  	foodModel.deleteFood(id).then(() => {
			  		swal('Deleted!', 'Your data has been deleted.', 'success')
			  		
			  		$scope.getFood();
			  	});
		  	}
		})
												 
	};

})