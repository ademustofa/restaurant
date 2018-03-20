angular.module('app').factory('notifModel', function($http){
	return {
		saveNotif : function(data){
			return $http({
				headers : {
					'Content-Type': 'application/json'
				},
				method	: 'POST',
				url 	: '/createNotif',
				data 	: {
					'subject' : data.subject,
					'message' : data.message
				}
			});
		},

		readNotif : function(){
			return $http({
				headers : {
					'Content-Type': 'application/json'
				},
				method	: 'POST',
				url 	: '/readNotif'
			});
		},

		getAllNotif: function(){
			return $http.get('/getNotif');
		},

		getCountNotif: function(){
			return $http.get('/getCount');
		}
	}
});