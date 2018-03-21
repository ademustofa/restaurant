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

		sendOrderDetail : (data) => {
			return $http({
				headers : {
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + data.token,
				},
				method	: 'POST',
				url 	: 'api/sendOrderDetail',
				data 	: {
					'order_id'	: data.order_id,
					'food_id' 	: data.food_id,
					'qty' 		: data.qty,
					'jumlah'	: data.total
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