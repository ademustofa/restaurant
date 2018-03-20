angular.module('app').controller('navController', function($scope, $location, userModel, notifModel){

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
    $(".gallery").mouseleave(function(){
		$(this).css("background", "none");
	});

	$("#message-body").animate({ scrollTop: $(document).height() }, "slow");
	/*window.scrollTo(0,document.querySelector("#message-body").scrollHeight);*/

	/*$('textarea').autoResize();*/

    // mGet user data
	$scope.user = userModel.getUserData();

	$scope.navUrl = [];

	// fungsi logout 
	$scope.doLogout = function(){
		userModel.doUserLogout();
		$location.path('/login');
	}


	// get Count All notif
	$scope.countAllNotif = function(){
		notifModel.getCountNotif().then(function(hasil){
			$scope.countNotif = hasil.data;
			/*console.log('success count data');*/
		});
	}

	/*setInterval(function() {$scope.countAllNotif();}, 2500);*/

	// Read Notif and get all notif
	$scope.readNotification = function(){

		notifModel.getAllNotif().then(function(data){
			$scope.notif = data.data;
			$scope.notifLength = $scope.notif.length;
			/*console.log($scope.notifLength);*/
			console.log('success get data');
		});

		notifModel.readNotif();
	}

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

			/*console.log(response.data);*/

		})
	}

	$scope.coba = [];
	var like = 0;

	$scope.clickBroadcast = function(){
		like++;
		$scope.$emit("coba", {coba: like});
	};

	$scope.$on("coba", function(e, data){
			$scope.coba.push(data.coba);
	});

	$scope.removeBroadcast = function($index){

		var rem = $index;

		$scope.$emit("remove", {coba: rem});
	};

	$scope.$on("remove", function(e, data){

			$scope.coba.splice(data.coba, 1);
	});


	

})