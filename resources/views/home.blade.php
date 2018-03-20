@extends('layout.master')

@section('title', 'Laravel Angular | Home')

@section('content')
	
<div class="container" id="home" ng-controller="data">

	<button class="btn btn-primary" id="myBtn"><span class="glyphicon glyphicon-plus"></span>&nbsp;Add Data</button>
			<!-- <button class="btn btn-default" id="coba">form update</button> -->

		<div class="modal fade" id="myModal" role="dialog">
			<div class="modal-dialog">
			    
			      <!-- Modal content-->
			    <div class="modal-content">
			        <div class="modal-header" style="padding:35px 50px; text-align: center;">
			        	<button type="button" class="close" data-dismiss="modal">&times;</button>
			        	<h4>Add New Data</h4>
			        </div>
			       	<div class="modal-body" style="padding:40px 50px;">
			        	<form>
			            <div class="form-group">
			             	<label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
			              	<input type="text" class="form-control" placeholder="Enter email" ng-model="name">
			            </div>
			            <div class="form-group">
			              	<label for="usrname"><span class="glyphicon glyphicon-envelope"></span> Email</label>
			              	<input type="email" class="form-control" placeholder="Enter email" ng-model="email">
			            </div>
			            <div class="form-group">
			              	<label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
			              	<input type="password" class="form-control" placeholder="Enter password" ng-model="password">
			            </div>
			            
			              <button class="btn btn-success btn-block" ng-click="addData()"> Add</button>
			          </form>
			        </div>

			    </div>
			  
			</div>
		</div>
		
		<br>


			<div class="col-md-3 col-md-offset-9">
				<div class="input-group">
				    <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
				    <input type="text" class="form-control" ng-model="hasil" placeholder="Search Data">
				</div>
			</div>
			<br>

			<table class="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="row in data | filter:hasil | orderBy:'id'">
						<td>@{{ row.name }}</td>
						<td>@{{ row.email }}</td>
						<td>
							<button class="btn btn-danger" ng-click="deleteData($index)" data-id="@{{ row.id }}"><span class="glyphicon glyphicon-trash"></span>&nbsp;Delete</button>
							<button class="btn btn-success" ng-click="showModal($index)" data-id="@{{ row.id }}"><span class="glyphicon glyphicon-edit"></span>&nbsp;Update</button>

			<div class="modal fade" id="update-modal" role="dialog">
				<div class="modal-dialog">
				    
				     <!-- Modal content-->
				    <div class="modal-content">

				        <div class="modal-header" style="padding:35px 50px; text-align: center;">
				          <button type="button" class="close" data-dismiss="modal">&times;</button>
				          <h4 class="title">Update Data</h4>
				        </div>
				        <div class="modal-body" style="padding:40px 50px;" id="update-html">
				        <form ng-submit="submit(row)">
				        	
				            <div class="form-group">
				              <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
				              <input type="text" class="form-control" placeholder="Enter email" ng-model="new.name" id="uptName">
				            </div>
				            <div class="form-group">
				              <label for="usrname"><span class="glyphicon glyphicon-envelope"></span> Email</label>
				              <input type="email" class="form-control" placeholder="Enter email" ng-model="new.email"  id="uptEmail">
				            </div>
				            <!-- <div class="form-group">
				              <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
				              <input type="password" class="form-control" placeholder="Enter password" ng-model="new.password">
				            </div> -->
				            
				              <button type="submit" class="btn btn-success btn-block"> Update</button>
				        </form>
				        </div>
				    </div>
				      
				</div>
		</div>

						</td>
					</tr>
				</tbody>
			</table>

		
		
</div>


@endsection

@section('script')
<script>
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal("show");
    });
});
</script>
@endsection
