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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var app = angular.module('app', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
				templateUrl: 'templates/index.html',
				controller: 'navController'
		});

		$routeProvider.when('/food-menu', {
				templateUrl: 'templates/food-menu.html',
				controller: 'orderController',
				authenticated: true
		});

		$routeProvider.when('/chat', {
				templateUrl: 'templates/user/chat.html',
				controller: 'chatController',
				authenticated: true
		});

		$routeProvider.when('/food', {
				templateUrl: 'templates/user/food.html',
				controller: 'foodController',
				authenticated: true
		});

		$routeProvider.when('/dashboard', {
				templateUrl: 'templates/user/dashboard.html',
				controller: 'userController',
				authenticated: true
		});

		$routeProvider.when('/user-data', {
				templateUrl: 'templates/user/userData.html',
				controller: 'data',
				authenticated: true
		});

		$routeProvider.when('/add', {
				templateUrl: 'templates/user/gallery-add.html',
				controller: 'galleryController',
				authenticated: true
		});

		$routeProvider.when('/view', {
				templateUrl: 'templates/user/gallery-view.html',
				controller: 'galleryController',
				authenticated: true
		});

		$routeProvider.when('/view/:id', {
				templateUrl: 'templates/user/gallery-single.html',
				controller: 'galleryController',
				authenticated: true
		});

		$routeProvider.when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'userController'
		});

		$routeProvider.when('/header', {
				templateUrl: 'templates/header.html',
				controller: 'userController'
		});

		$routeProvider.otherwise('/');

		/*$locationProvider.html5Mode(true);*/
});

app.directive('dropzone', function () {
		return function (scope, element, attrs) {
				var config, dropzone;

				config = scope[attrs.dropzone];

				dropzone = new Dropzone(element[0], config.options);

				angular.forEach(config.eventHandlers, function (handler, event) {
						dropzone.on(event, handler);
				});
		};
});

app.run(function ($rootScope, $location, userModel) {
		$rootScope.$on("$routeChangeStart", function (event, next, current) {
				if (next.$$route.authenticated) {
						if (!userModel.getAuthStatus()) {
								$location.path('/');
						}
				}

				if (next.$$route.originalPath == '/') {
						if (userModel.getAuthStatus()) {
								$location.path(current.$$route.originalPath);
						}
				}
		});
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);