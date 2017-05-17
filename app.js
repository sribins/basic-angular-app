var app = angular.module("myApp",[]);

app.controller("myController", ["$scope", function($scope){
	$scope.message = "Hello World";
	$scope.employeeList=[
		{name:'srikanth',age:24,city:'hyd',mobile:8945045561}
		{name:'bin',age:44,city:'rjstn',mobile:8965045561}
		{name:'sri',age:24,city:'koti',mobile:8985045561}
		{name:'rdy',age:24,city:'bngl',mobile:8755045551}
	]
}])