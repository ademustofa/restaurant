/*angular.module('app').controller('notifController', function($scope, notifModel){

	// Create notif
	$scope.notif = {};
	$scope.sendNotif = function(notifForm)
	{
		var data = {
			subject : $scope.notif.subject,
			message : $scope.notif.message
		};

		notifModel.saveNotif(data).then(function(response){

			$scope.notif.subject = '';
			$scope.notif.message = '';

			console.log(response.data);
		})
	}

})*/