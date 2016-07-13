

	var app = angular.module('myApp', []);
        app.controller('customersCtrl', function($scope, $http) {
       $http.get("json/sock.json")
   		 .success(function(data) {
   		 	/*$scope.names = response.result
   		 	angular.forEach($scope.names,function(value,index){
   		 		console.log(value)
   		 	})*/
   		 console.log(data.result[0].sock);
   		 var data=data.result[1].sock;
   		 var str="";
   		 data.forEach(function(value,index){
   		 	console.log(value);
   		 	str+='<li>'+value+'</li>'
   		 })
   		 $("#ul").html(str)

   	});
});
