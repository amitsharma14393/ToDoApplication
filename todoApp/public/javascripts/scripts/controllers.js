var controllerModule=angular.module("controllerModule",[]);

controllerModule.controller("RegisterController",function($scope){
	$scope.register="Welcome to Registration process!";
});

controllerModule.controller("LoginController",function($scope){
	$scope.login="Welcome to login page!";
});

controllerModule.controller("TodoMainController",function($scope){
	$scope.collectionOfTodo=[];
	
	$scope.toDoList=[];
	
	//manage view
	$scope.displayToDoNameInput=false;
	$scope.displayCreateToDoButton=true;
	$scope.displayToDoTask=false;
	
	$scope.clear=function(){
		$scope.toDoName="";
		$scope.toDoList=[];
	};
	
	$scope.saveToDo=function(){
		var value=confirm("You want to save and exit?");
		if(value){
			alert("size of collection of ToDo:"+$scope.collectionOfTodo.length);
			var obj={};
			for(var item in $scope.toDoList){
				delete $scope.toDoList[item]["displayEditMode"];
			}
			obj.toDoName=$scope.toDoName;
			obj.toDoTaskList=$scope.toDoList;
			$scope.collectionOfTodo.push(obj);
			alert("size of collection of ToDo:"+$scope.collectionOfTodo.length);
			$scope.displayToDoNameInput=false;
			$scope.displayCreateToDoButton=true;
			$scope.displayToDoTask=false;
			
			$scope.clear();
			alert("ToDo Saved Successfully!");			
		}
	};	
	
	$scope.exitToDo=function(){
		var value=confirm("You want to exit, your toDoList"+ $scope.toDoName +" will not be save?");
		if(value){
			$scope.displayToDoNameInput=false;
			$scope.displayCreateToDoButton=true;
			$scope.displayToDoTask=false;
			$scope.clear();
		}
	};
	
	$scope.addToDoItem=function(){
		$scope.toDoItem={
				taskName:"",
				description:"",
				status:"",
				hours:""			
		};
		$scope.toDoList.push($scope.toDoItem);
	};
	
	$scope.removeToDoItem=function(index){
		$scope.toDoList.splice(index,1);
	};
	
	
});
