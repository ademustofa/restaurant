angular.module('app').controller('galleryController', function($scope, $location, $routeParams, galleryModel, userModel){
	
	$scope.sessionData = userModel.getUserData();
	var token = $scope.sessionData.data.api_token;

	angular.extend($scope, {
		newGallery : {},
		errorDiv : false,
		errorMessages : [],
		singleGallery : {},
		dropzoneConfig: {
			'options': {
				'url' : '/upload-file',
			},

			'eventHandlers' : {
				'sending' : (file, xhr, formData) => {
					console.log('sending');
					formData.append('_token', csrfToken);
					formData.append('galleryId', $routeParams.id);
				},
				'success' : (file, response) => {
					console.log('success');
					console.log(response);
				}
			}
		}
	})


	galleryModel.getAllGallery(token).then((response) => {
		$scope.gallery = response.data;
	});

	if ($routeParams.id) {
		var data = {
					id: $routeParams.id,
					token: token
				}; 
		galleryModel.getGalleryById(data).then((response) => {
				$scope.singleGallery = response.data;
		});
	}

	angular.extend($scope, {
		saveNewGallery : (addGalleryForm) => {
			if (addGalleryForm.$valid) {
				$scope.formSubmitted = false;
				var data = {
					name: $scope.gallery.name,
					token: token
				};
				galleryModel.saveGallery(data).then(() => {
					$location.path('/view');
					console.log('berhasil');
				})
			} else {
				$scope.formSubmitted = true;
				console.log('error');
			}
		},

		viewGallery: ($index) => {
			var data = $scope.gallery[$index];
			$location.path('/view/' + data.id);
		}


	});
});