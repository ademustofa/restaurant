angular.module('app').factory('chatModel', function($http){
	return {
		addChat : (data) => {
			return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + data.token,
				},
				method	: 'POST',
				url 	: 'api/sendMessage',
				data 	: {
					'to' 		: data.to,
					'message' 	: data.message
				}
			});
		},

		getAllChat : (id, token) => {
			return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + token,
				},
				method	: 'POST',
				url 	: 'api/getChat',
				data 	: {
					'to' : id,
				}
			});
		},

		getUserOnline: () => {
			return $http.get('api/getUser');
		},

	}
});