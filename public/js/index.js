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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {


angular.module('app').controller('data', function ($scope, dataModel) {

	$scope.loadData = function () {
		dataModel.getData().then(function (hasil) {
			$scope.data = hasil.data;
		});
	};
	$scope.loadData();

	$scope.harga = 5000;

	$scope.addData = function () {

		var data = {
			name: $scope.name,
			email: $scope.email,
			password: $scope.password
		};

		dataModel.postData(data).then(function (data) {

			$scope.loadData();

			$scope.name = '';
			$scope.email = '';
			$scope.password = '';

			$("#myModal").modal("hide");

			swal('Created!', 'Your data has been created.', 'success');
		});
	};

	$scope.deleteData = function ($index) {

		var data = $scope.data[$index];

		swal({
			title: 'Are you sure?',
			text: "Delete this data!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(function (result) {
			if (result.value) {
				dataModel.deleteData(data).then(function () {
					swal('Deleted!', 'Your data has been deleted.', 'success');

					$scope.loadData();
				});
			}
		});
	};

	$scope.showAddModal = function () {
		$('#myModal').modal("show");
	};

	var update = {};
	$scope.showModal = function (id) {
		update = $scope.data[id];
		console.log(update);

		$(".uptName").val(update.name);
		$(".uptEmail").val(update.email);
		$('#update-modal').modal("show");
	};

	$scope.new = {};
	$scope.editData = function () {

		console.log(update.id);

		var data = {
			id: update.id,
			name: $scope.new.name,
			email: $scope.new.email
		};
		console.log(data);
		dataModel.updateData(data).then(function () {

			$('#update-modal').modal("hide");
			$scope.new.name = '';
			$scope.new.email = '';
			$scope.loadData();

			swal('Updated!', 'Your data has been updated.', 'success');
		});
	};
});

/***/ })

/******/ });