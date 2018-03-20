	
	angular.module('app').controller('data', function($scope, dataModel){

			$scope.loadData = function () {
				dataModel.getData().then(function (hasil) {
					 $scope.data = hasil.data;
				});
			}
			$scope.loadData();

			$scope.harga = 5000;


			$scope.addData = function(){

				var data = {
					name		: $scope.name,
					email 		: $scope.email,
					password	: $scope.password
				};

				dataModel.postData(data).then(function(data){

					$scope.loadData();

					$scope.name 	= '';
					$scope.email 	= '';
					$scope.password = '';

					$("#myModal").modal("hide");

					swal('Created!', 'Your data has been created.', 'success')
					
			    });
			}


			$scope.deleteData = function($index){
				
				var data = $scope.data[$index];

				swal({
				  title: 'Are you sure?',
				  text: "Delete this data!",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
					if (result.value) {
					  	dataModel.deleteData(data).then(function(){
					  		swal('Deleted!', 'Your data has been deleted.', 'success')
					  		
					  		$scope.loadData();
					  	});
				  	}
				})
												 
			}


			$scope.showAddModal = function(){
				$('#myModal').modal("show");
			};


			var update = {};
			$scope.showModal = function(id){
				update = $scope.data[id];
				console.log(update);

				$(".uptName").val(update.name);
				$(".uptEmail").val(update.email);
				$('#update-modal').modal("show");
			}


			$scope.new = {};
			$scope.editData = function(){

			console.log(update.id);

				var data = {
					id		: update.id,
					name 	: $scope.new.name,
					email	: $scope.new.email
				};
				console.log(data);
				dataModel.updateData(data).then(function(){

					$('#update-modal').modal("hide");
				  	$scope.new.name = '';
					$scope.new.email = '';
					$scope.loadData();

					swal('Updated!', 'Your data has been updated.', 'success')
				});
			    
			}

	});