angular.module('app').controller('userController', function($scope, $http, $location, $route, userModel, notifModel){

	$scope.user = userModel.getUserData();

	$scope.login = {};
	$scope.doLogin = function(loginForm){

		var data  = {
			email 		: $scope.login.email,
			password 	: $scope.login.password
		};

		if (loginForm.$valid) {
			userModel.login(data).then(function successCallback(){
				$scope.formSubmitted = false;
				$location.path('/dashboard'); 
				$scope.login.email = '';
				$scope.login.password = '';


			}, function errorCallback(response) {
			   	console.log(response.data);
			 
			   	$scope.loginError = response.data;
			   	$scope.showError  = true;
			   	$(".alert-danger").slideDown(300, function(){
			   		setTimeout(function() {
				   		$(".alert-danger").slideUp(300);
				   	}, 4000);
			   	});

			})
		} else {
			$scope.formSubmitted = true;
			console.log('login error');
		}

	}

	/*$scope.regisError = true;*/ 
	$scope.register = function(registerForm){

		var data  = {
			name		: $scope.register.username,
			email 		: $scope.register.email,
			password 	: $scope.register.password
		};

		console.log(data);

		if (registerForm.$valid) {

				userModel.signUp(data).then(function successCallback(){
					$scope.formRegister = false;

					$scope.register.email = '';
					$scope.register.username = '';
					$scope.register.password = '';

					$scope.showVerification = true;

					$(".alert-success").slideDown(300, function(){
						setTimeout(function() {
					   		$(".alert-success").slideUp(300);
					   		console.log('berhasil');
					   	}, 6000); 
					});

					
				}, function errorCallback(response) {
				   	console.log(response);
				   /*	var validatorEmail = response.data;*/

				   	$scope.regisError = true; 
				   	$("#emailForm").addClass("has-error");
				   	$scope.errorRegis = response.data[0];

				})
			
		} else {
			$scope.formRegister = true;
			console.log('register error');
		}

	}

	$scope.doLogout = function(){
		userModel.doUserLogout();
		$location.path('/login');
	}


});