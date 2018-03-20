/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
module.exports = __webpack_require__(16);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

angular.module('app').controller('userController', function ($scope, $http, $location, $route, userModel, notifModel) {

	$scope.user = userModel.getUserData();

	$scope.login = {};
	$scope.doLogin = function (loginForm) {

		var data = {
			email: $scope.login.email,
			password: $scope.login.password
		};

		if (loginForm.$valid) {
			userModel.login(data).then(function successCallback() {
				$scope.formSubmitted = false;
				$location.path('/dashboard');
				$scope.login.email = '';
				$scope.login.password = '';
			}, function errorCallback(response) {
				console.log(response.data);

				$scope.loginError = response.data;
				$scope.showError = true;
				$(".alert-danger").slideDown(300, function () {
					setTimeout(function () {
						$(".alert-danger").slideUp(300);
					}, 4000);
				});
			});
		} else {
			$scope.formSubmitted = true;
			console.log('login error');
		}
	};

	/*$scope.regisError = true;*/
	$scope.register = function (registerForm) {

		var data = {
			name: $scope.register.username,
			email: $scope.register.email,
			password: $scope.register.password
		};

		console.log(data);

		if (registerForm.$valid) {

			userModel.signUp(data).then(function successCallback() {
				$scope.formRegister = false;

				$scope.register.email = '';
				$scope.register.username = '';
				$scope.register.password = '';

				$scope.showVerification = true;

				$(".alert-success").slideDown(300, function () {
					setTimeout(function () {
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
			});
		} else {
			$scope.formRegister = true;
			console.log('register error');
		}
	};

	$scope.doLogout = function () {
		userModel.doUserLogout();
		$location.path('/login');
	};
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

angular.module('app').controller('globalController', function ($scope, $rootScope) {
	$scope.global = {};
	$scope.global.navUrl = 'templates/include/menuUser.html';
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

angular.module('app').controller('navController', function ($scope, $location, userModel, notifModel) {

	/*$("#gallery").on('click', function(){
 	console.log('dropdown berjalan');
 	$("#gallery-dropdown").slideToggle(300);
 });*/

	/*$(".dashboard").hover(function(){
       $(".dashboard a").slideDown(100).html("Hahahah");
    },
    function(){
         $(".dashboard a").slideDown(100).html('<i class="fa fa-dashboard" aria-hidden="true"></i>');
    });*/

	// menghilangkan background pada menu dropdown
	$(".gallery").mouseleave(function () {
		$(this).css("background", "none");
	});

	$("#message-body").animate({ scrollTop: $(document).height() }, "slow");
	/*window.scrollTo(0,document.querySelector("#message-body").scrollHeight);*/

	/*$('textarea').autoResize();*/

	// mGet user data
	$scope.user = userModel.getUserData();

	$scope.navUrl = [];

	// fungsi logout 
	$scope.doLogout = function () {
		userModel.doUserLogout();
		$location.path('/login');
	};

	// get Count All notif
	$scope.countAllNotif = function () {
		notifModel.getCountNotif().then(function (hasil) {
			$scope.countNotif = hasil.data;
			/*console.log('success count data');*/
		});
	};

	/*setInterval(function() {$scope.countAllNotif();}, 2500);*/

	// Read Notif and get all notif
	$scope.readNotification = function () {

		notifModel.getAllNotif().then(function (data) {
			$scope.notif = data.data;
			$scope.notifLength = $scope.notif.length;
			/*console.log($scope.notifLength);*/
			console.log('success get data');
		});

		notifModel.readNotif();
	};

	// Create notif
	$scope.notif = {};
	$scope.sendNotif = function (notifForm) {
		var data = {
			subject: $scope.notif.subject,
			message: $scope.notif.message
		};

		notifModel.saveNotif(data).then(function (response) {

			$scope.notif.subject = '';
			$scope.notif.message = '';

			/*console.log(response.data);*/
		});
	};

	$scope.coba = [];
	var like = 0;

	$scope.clickBroadcast = function () {
		like++;
		$scope.$emit("coba", { coba: like });
	};

	$scope.$on("coba", function (e, data) {
		$scope.coba.push(data.coba);
	});

	$scope.removeBroadcast = function ($index) {

		var rem = $index;

		$scope.$emit("remove", { coba: rem });
	};

	$scope.$on("remove", function (e, data) {

		$scope.coba.splice(data.coba, 1);
	});
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

angular.module('app').controller('galleryController', function ($scope, $location, $routeParams, galleryModel, userModel) {

	$scope.sessionData = userModel.getUserData();
	var token = $scope.sessionData.data.api_token;

	angular.extend($scope, {
		newGallery: {},
		errorDiv: false,
		errorMessages: [],
		singleGallery: {},
		dropzoneConfig: {
			'options': {
				'url': '/upload-file'
			},

			'eventHandlers': {
				'sending': function sending(file, xhr, formData) {
					console.log('sending');
					formData.append('_token', csrfToken);
					formData.append('galleryId', $routeParams.id);
				},
				'success': function success(file, response) {
					console.log('success');
					console.log(response);
				}
			}
		}
	});

	galleryModel.getAllGallery(token).then(function (response) {
		$scope.gallery = response.data;
	});

	if ($routeParams.id) {
		var data = {
			id: $routeParams.id,
			token: token
		};
		galleryModel.getGalleryById(data).then(function (response) {
			$scope.singleGallery = response.data;
		});
	}

	angular.extend($scope, {
		saveNewGallery: function saveNewGallery(addGalleryForm) {
			if (addGalleryForm.$valid) {
				$scope.formSubmitted = false;
				var data = {
					name: $scope.gallery.name,
					token: token
				};
				galleryModel.saveGallery(data).then(function () {
					$location.path('/view');
					console.log('berhasil');
				});
			} else {
				$scope.formSubmitted = true;
				console.log('error');
			}
		},

		viewGallery: function viewGallery($index) {
			var data = $scope.gallery[$index];
			$location.path('/view/' + data.id);
		}

	});
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

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

/***/ }),
/* 14 */
/***/ (function(module, exports) {

angular.module('app').controller('chatController', function ($scope, chatModel, userModel) {

	var received;
	var myName = $("#received");
	var bodyMessage = $("#message-body");
	$scope.session = userModel.getUserData();
	var token = $scope.session.data.api_token;

	$scope.getMessage = function (id) {
		chatModel.getAllChat(id, token).then(function (response) {
			$scope.chatting = response.data;
		});
	};

	$scope.sendTo = function (id, name) {
		$scope.sessionData = userModel.getUserData();
		received = id;
		myName.html("Chat with " + name);
	};

	setInterval(function () {
		$scope.getMessage(received);
	}, 1000);

	$scope.sendMessage = function () {
		var message = $scope.messageData;

		var data = {
			to: received,
			message: message,
			token: token
		};

		chatModel.addChat(data).then(function () {
			$scope.messageData = '';
			console.log('Message was sent');
		});
	};

	$scope.getUser = function () {
		$scope.session = userModel.getUserData();
		var user = $("#message-user");

		chatModel.getUserOnline().then(function (response) {
			$scope.user = response.data;
		});
	};

	$scope.getUser();
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

angular.module('app').controller('foodController', function ($scope, foodModel) {

	// Show Data
	$scope.getFood = function () {
		foodModel.getFood().then(function (response) {
			$scope.food = response.data;
		});
	};

	$scope.getFood();

	$scope.showFoodModal = function () {
		$('#foodModal').modal("show");
	};

	// Add data
	$scope.food = {};
	$scope.addFood = function () {
		var data = {
			name: $scope.food.name,
			price: $scope.food.price
		};

		foodModel.postFood(data).then(function () {

			$scope.getFood();

			$scope.food.name = '';
			$scope.food.price = '';

			$("#foodModal").modal("hide");

			swal('Created!', 'Your food has been created.', 'success');
		});
	};

	// Update Data
	var update = {};
	$scope.showModal = function (id) {
		update = $scope.food[id];

		$scope.new.name = update.name;
		$scope.new.price = update.price;

		$('#update-modal').modal("show");
	};

	$scope.new = {};
	$scope.editData = function () {
		var data = {
			id: update.id,
			name: $scope.new.name,
			price: $scope.new.price
		};

		foodModel.updateFood(data).then(function () {

			$('#update-modal').modal("hide");
			$scope.new.name = '';
			$scope.new.price = '';
			$scope.getFood();

			swal('Updated!', 'Your data has been updated.', 'success');
		});
	};

	$scope.deleteFood = function (id) {

		swal({
			title: 'Are you sure?',
			text: "Delete this food!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(function (result) {
			if (result.value) {
				foodModel.deleteFood(id).then(function () {
					swal('Deleted!', 'Your data has been deleted.', 'success');

					$scope.getFood();
				});
			}
		});
	};
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

angular.module('app').controller('orderController', function ($scope, foodModel) {

	// Show Data
	$scope.getFood = function () {
		foodModel.getFood().then(function (response) {
			$scope.food = response.data;
		});
	};
	$scope.getFood();

	var myOrder = [];

	$scope.getTotalOrder = function () {
		if (myOrder.length > 0) {
			var sumTotal = myOrder.reduce(function (a, b) {
				return { price: a.price + b.price };
			});
			$scope.total = sumTotal.price;
		} else {
			$scope.total = 0;
		}
	};

	$scope.addToList = function ($index) {
		var food = $scope.food[$index];
		myOrder.push(food);

		$scope.getTotalOrder();
	};

	$scope.myOrderList = myOrder;

	$scope.removeOrder = function (id) {
		$scope.myOrderList.splice(id, 1);
		console.log($scope.myOrderList);
		$scope.getTotalOrder();
	};
});

/***/ })
/******/ ]);