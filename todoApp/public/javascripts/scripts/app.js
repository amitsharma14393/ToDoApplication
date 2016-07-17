var todoapp=angular.module("todo",["controllerModule","directiveModule","ngRoute"]);

todoapp.config(["$routeProvider",function ($routeProvider){
	$routeProvider.when("/login",{
		templateUrl:'views/login.html',
		controller:'LoginController'
	}).when("/register",{
		templateUrl:'views/register.html',
		controller:'RegisterController'
	}).otherwise({
		redirectTo:"/login"
	});
}]);