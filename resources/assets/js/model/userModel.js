angular.module('app').factory('userModel', function($http, $cookies){
	var userModel = {};

	userModel.login = function(data){
	return	$http({
				headers : {
					'Content-Type': 'application/json'
				},
				method	: 'POST',
				url 	: 'api/auth',
				data 	: {
					'email' 	: data.email,
					'password' 	: data.password
				}
			}).then(function(response){
				console.log(response.data);
				$cookies.put('auth', JSON.stringify(response));
			});
	};

	userModel.signUp = function(data)
	{
		return	$http({
				headers : {
					'Content-Type': 'application/json'
				},
				method	: 'POST',
				url 	: 'api/signUp',
				data 	: {
					'name' 		: data.name,
					'email' 	: data.email,
					'password' 	: data.password
				}
			}).then(function(response){
				/*console.log(response);*/
			});
	}

	userModel.getAuthStatus = function(){
		var status = angular.fromJson($cookies.get('auth'));
		if (status) {
			return true;
		}else{
			return false;
		}
	}

	userModel.getUserData = function(){
		var user = angular.fromJson($cookies.get('auth'));
		return user;
	}

	userModel.doUserLogout = function(){
		$cookies.remove('auth');
	}

	return userModel;
});