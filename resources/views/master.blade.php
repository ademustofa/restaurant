<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Angular js</title>
</head>
	<link rel="stylesheet" href="{{ asset('css/style.css') }}">
	<link rel="stylesheet" href="{{ asset('css/bootstrap-lumen.min.css') }}">
	<!-- <link rel="stylesheet" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}"> -->
	<link rel="stylesheet" href="{{ asset('bower_components/angular-bootstrap/ui-bootstrap-csp.css') }}">
	<link rel="stylesheet" href="{{ asset('bower_components/font-awesome/css/font-awesome.min.css') }}">
	<link rel="stylesheet" href="{{ asset('bower_components/sweetalert2/dist/sweetalert2.min.css') }}">
	<link rel="stylesheet" href="{{ asset('bower_components/dropzone/dist/min/dropzone.min.css') }}">
	<link rel="stylesheet" href="{{ asset('bower_components/dropzone/dist/min/basic.min.css') }}">
	<link rel="stylesheet" href="{{ asset('bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css')}}">
	<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css"> -->
	<!-- <base href="/"> -->

	<script>
		var csrfToken = "{{ csrf_token() }}";
	</script>

<body>

	<div ng-controller="globalController">
		<div ng-view></div>
	</div>


	<script src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>
	<script src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('bower_components/dropzone/dist/min/dropzone.min.js') }}"></script>
	<script src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
	<script src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
	<script src="{{ asset('bower_components/angular-cookies/angular-cookies.min.js') }}"></script>
	<script src="{{ asset('bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js') }}"></script>
	<script src="{{ asset('bower_components/angular-bootstrap/ui-bootstrap.min.js') }}"></script>
	<script src="{{ asset('bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js') }}"></script>
	<script src="{{ asset('bower_components/sweetalert2/dist/sweetalert2.min.js') }}"></script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.js"></script> -->

	<!-- <script src="{{ asset('bower_components/jquery-mousewheel/jquery.mousewheel.min.js') }}"></script> -->
	
	<script src="{{ asset('js/sample.js') }}"></script>
	<script src="{{ asset('js/index.js') }}"></script>
	<script src="{{ asset('js/controller.js') }}"></script>
	<script src="{{ asset('js/model.js') }}"></script>
	<script src="{{ asset('js/add.js') }}"></script>
	
</body>
</html>