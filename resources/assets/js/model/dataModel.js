angular.module('app').factory('dataModel', function($http){
	var dataModel = {};

	dataModel.getData = function () {
		return $http.get('api/data');
	} 

	dataModel.postData = function (data) {
		return  $http.post('api/post', {
					'name' 		: data.name, 
					'email' 	: data.email,
					'password' 	: data.password
					}
				);
	}

	dataModel.updateData = function (data) {
		return	$http({
					method	: 'PUT',
					url 	: 'api/update',
					data 	: {
					  	'id' 	: data.id,
					  	'name'	: data.name,
				    	'email'	: data.email
					}
				});
	}

	dataModel.deleteData = function (data) {
		return	$http({
					method	: 'DELETE',
					url 	: 'api/delete',
					data 	: {'id' : data.id}
				});
	}

	return dataModel;
});