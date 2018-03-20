angular.module('app').factory('foodModel', function($http){
	return {
		getFood : () => {
			return $http.get('api/getFood');
		},

		showFood : (id) => {
			return $http.get('api/showFood/' + id);
		},

		postFood : (data) => {
			return $http({
				headers : {
					'Content-Type': 'application/json'
				},
				method	: 'POST',
				url 	: 'api/addFood',
				data 	: {
					'food_name' 	: data.name,
					'food_price' 	: data.price
				}
			});
		},

		updateFood : (data) => {
			return $http({
				headers : {
					'Content-Type': 'application/json'
				},
				method	: 'PUT',
				url 	: 'api/updateFood',
				data 	: {
					'id' 			: data.id,
					'food_name' 	: data.name,
					'food_price' 	: data.price
				}
			});
		},

		deleteFood : (id) => {
			return $http({
				headers : {
					'Content-Type': 'application/json'
				},
				method	: 'DELETE',
				url 	: 'api/deleteFood',
				data 	: {
					'id' 	: id
				}
			});
		},

	}
});