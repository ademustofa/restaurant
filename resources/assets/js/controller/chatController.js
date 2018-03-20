angular.module('app').controller('chatController', function($scope, chatModel, userModel){

	var received; 
	var myName 		= $("#received");
	var bodyMessage = $("#message-body");
	$scope.session = userModel.getUserData();
	var token = $scope.session.data.api_token;

	$scope.getMessage = (id) => {
		chatModel.getAllChat(id, token).then((response) => {
			$scope.chatting = response.data;
		});
	}

	$scope.sendTo = (id, name) => {
		$scope.sessionData = userModel.getUserData();
		received = id;
		myName.html("Chat with " + name);
	}

	setInterval(() => { 
			$scope.getMessage(received);
	}, 1000);

	$scope.sendMessage = () => {
		var message = $scope.messageData;

		var data ={
			to 		: received,
			message : message,
			token : token
		};

		chatModel.addChat(data).then(() => { 
			$scope.messageData = '';
			console.log('Message was sent')
		});

	};

	$scope.getUser = () => {
		$scope.session = userModel.getUserData();
		var user = $("#message-user");

		chatModel.getUserOnline().then((response) => {
			$scope.user = response.data;
		});
	};

	$scope.getUser();

})