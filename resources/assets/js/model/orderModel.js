angular.module('app').factory('orderModel', function($http){
	return {
		sendOrder : (data) => {
			return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + data.token,
				},
				method	: 'POST',
				url 	: 'api/sendOrder',
				data 	: {
					'total' 		: data.total_price,
				}
			});
		},

		getAllMenu : (id, token) => {
			/*return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + token,
				},
				method	: 'POST',
				url 	: 'api/getChat',
				data 	: {
					'to' : id,
				}
			});*/
		},

		/*getUserOnline: () => {
			return $http.get('api/getUser');
		},*/

	}
});