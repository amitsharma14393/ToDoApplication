var controllerModule=angular.module("controllerModule",[]);

controllerModule.controller("RegisterController",function($scope){
	$scope.register="Welcome to Registration process!";
});

controllerModule.controller("LoginController",function($scope){
	$scope.login="Welcome to login page!";
});

controllerModule.controller("TodoController",function($scope){
	
	$scope.todoList=[];	
	
	$scope.display=true;
	
	$scope.add=function(){
		$scope.display=true;
		$scope.todoList.push({});
	};
	
	$scope.save=function($index){
		$scope.todoList[$index].display=true;
	};
	
	$scope.edit=function($index){
		$scope.todoList[$index].display=true;
	}
	
	$scope.remove=function($index){
		$scope.todoList.splice($index,1);
	};
	
});