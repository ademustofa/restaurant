angular.module('app').factory('galleryModel', function($http){
	return {
		saveGallery : (data) => {
			return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + data.token,
				},
				method	: 'POST',
				url 	: 'api/addGallery',
				data 	: {
					'name' : data.name
				}
			});
		},

		getAllGallery: (token) => {
			return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + token,
				},
				method	: 'GET',
				url 	: 'api/gallery'
			});
			/*return $http.get('api/gallery');*/
		},

		getGalleryById: (data) => {
			return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + data.token,
				},
				method	: 'GET',
				url 	: 'api/gallery/' + data.id
			});
			/*return $http.get('api/gallery/' + id);*/
		}
	}
});