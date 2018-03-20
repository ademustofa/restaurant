var app = angular.module('app', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(($routeProvider, $locationProvider) => {

		$routeProvider.when('/', {
				templateUrl : 'templates/index.html',
				controller 	: 'navController'
		});

		$routeProvider.when('/food-menu', {
				templateUrl : 'templates/food-menu.html',
				controller 	: 'orderController',
				authenticated : true
		});

		$routeProvider.when('/chat', {
				templateUrl : 'templates/user/chat.html',
				controller 	: 'chatController',
				authenticated : true
		});

		$routeProvider.when('/food', {
				templateUrl : 'templates/user/food.html',
				controller 	: 'foodController',
				authenticated : true
		});

		$routeProvider.when('/dashboard', {
				templateUrl : 'templates/user/dashboard.html',
				controller 	: 'userController',
				authenticated : true
		});

		$routeProvider.when('/user-data', {
				templateUrl : 'templates/user/userData.html',
				controller 	: 'data',
				authenticated : true
		});

		$routeProvider.when('/add', {
				templateUrl : 'templates/user/gallery-add.html',
				controller 	: 'galleryController',
				authenticated : true
		});

		$routeProvider.when('/view', {
				templateUrl : 'templates/user/gallery-view.html',
				controller 	: 'galleryController',
				authenticated : true
		});

		$routeProvider.when('/view/:id', {
				templateUrl : 'templates/user/gallery-single.html',
				controller 	: 'galleryController',
				authenticated : true
		});

		$routeProvider.when('/login', {
				templateUrl : 'templates/login.html',
				controller 	: 'userController'
		});

		$routeProvider.when('/header', {
				templateUrl : 'templates/header.html',
				controller 	: 'userController'
		});

		$routeProvider.otherwise('/');

		/*$locationProvider.html5Mode(true);*/

});


app.directive('dropzone', () => {
	return (scope, element, attrs) => {
		var config, dropzone;

		config = scope[attrs.dropzone];

		dropzone = new Dropzone(element[0], config.options);

		angular.forEach(config.eventHandlers, (handler, event) => {
			dropzone.on(event, handler);
		});
	};
});

app.run(($rootScope, $location, userModel) => {
	$rootScope.$on("$routeChangeStart", (event, next, current) => {
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
})