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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
module.exports = __webpack_require__(24);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

angular.module('app').factory('userModel', function ($http, $cookies) {
	var userModel = {};

	userModel.login = function (data) {
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			url: 'api/auth',
			data: {
				'email': data.email,
				'password': data.password
			}
		}).then(function (response) {
			console.log(response.data);
			$cookies.put('auth', JSON.stringify(response));
		});
	};

	userModel.signUp = function (data) {
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			url: 'api/signUp',
			data: {
				'name': data.name,
				'email': data.email,
				'password': data.password
			}
		}).then(function (response) {
			/*console.log(response);*/
		});
	};

	userModel.getAuthStatus = function () {
		var status = angular.fromJson($cookies.get('auth'));
		if (status) {
			return true;
		} else {
			return false;
		}
	};

	userModel.getUserData = function () {
		var user = angular.fromJson($cookies.get('auth'));
		return user;
	};

	userModel.doUserLogout = function () {
		$cookies.remove('auth');
	};

	return userModel;
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

angular.module('app').factory('dataModel', function ($http) {
	var dataModel = {};

	dataModel.getData = function () {
		return $http.get('api/data');
	};

	dataModel.postData = function (data) {
		return $http.post('api/post', {
			'name': data.name,
			'email': data.email,
			'password': data.password
		});
	};

	dataModel.updateData = function (data) {
		return $http({
			method: 'PUT',
			url: 'api/update',
			data: {
				'id': data.id,
				'name': data.name,
				'email': data.email
			}
		});
	};

	dataModel.deleteData = function (data) {
		return $http({
			method: 'DELETE',
			url: 'api/delete',
			data: { 'id': data.id }
		});
	};

	return dataModel;
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

angular.module('app').factory('galleryModel', function ($http) {
	return {
		saveGallery: function saveGallery(data) {
			return $http({
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + data.token
				},
				method: 'POST',
				url: 'api/addGallery',
				data: {
					'name': data.name
				}
			});
		},

		getAllGallery: function getAllGallery(token) {
			return $http({
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				method: 'GET',
				url: 'api/gallery'
			});
			/*return $http.get('api/gallery');*/
		},

		getGalleryById: function getGalleryById(data) {
			return $http({
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + data.token
				},
				method: 'GET',
				url: 'api/gallery/' + data.id
			});
			/*return $http.get('api/gallery/' + id);*/
		}
	};
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

angular.module('app').factory('notifModel', function ($http) {
	return {
		saveNotif: function saveNotif(data) {
			return $http({
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				url: '/createNotif',
				data: {
					'subject': data.subject,
					'message': data.message
				}
			});
		},

		readNotif: function readNotif() {
			return $http({
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				url: '/readNotif'
			});
		},

		getAllNotif: function getAllNotif() {
			return $http.get('/getNotif');
		},

		getCountNotif: function getCountNotif() {
			return $http.get('/getCount');
		}
	};
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

angular.module('app').factory('chatModel', function ($http) {
	return {
		addChat: function addChat(data) {
			return $http({
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + data.token
				},
				method: 'POST',
				url: 'api/sendMessage',
				data: {
					'to': data.to,
					'message': data.message
				}
			});
		},

		getAllChat: function getAllChat(id, token) {
			return $http({
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				method: 'POST',
				url: 'api/getChat',
				data: {
					'to': id
				}
			});
		},

		getUserOnline: function getUserOnline() {
			return $http.get('api/getUser');
		}

	};
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

angular.module('app').factory('foodModel', function ($http) {
	return {
		getFood: function getFood() {
			return $http.get('api/getFood');
		},

		showFood: function showFood(id) {
			return $http.get('api/showFood/' + id);
		},

		postFood: function postFood(data) {
			return $http({
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				url: 'api/addFood',
				data: {
					'food_name': data.name,
					'food_price': data.price
				}
			});
		},

		updateFood: function updateFood(data) {
			return $http({
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'PUT',
				url: 'api/updateFood',
				data: {
					'id': data.id,
					'food_name': data.name,
					'food_price': data.price
				}
			});
		},

		deleteFood: function deleteFood(id) {
			return $http({
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'DELETE',
				url: 'api/deleteFood',
				data: {
					'id': id
				}
			});
		}

	};
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

angular.module('app').factory('orderModel', function ($http) {
	return {
		addMenu: function addMenu(data) {
			/*return $http({
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
   });*/
		},

		getAllMenu: function getAllMenu(id, token) {
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
		}

		/*getUserOnline: () => {
  	return $http.get('api/getUser');
  },*/

	};
});

/***/ })
/******/ ]);