/*angular.module('facts',[])
 .controller('Fact',function($scope,$http){
    $http.get('http://localhost:8080/api/fact').
     then(function(response){
        $scope.fact = response.data;
     });
 });*/

 var factsApp = angular.module("facts",[]);

 factsApp.controller("Fact",function($scope,$http){

   $scope.getRequest = function(){
      $http.get("/api/fact").
       then(function successCallback(response){
          $scope.fact = response.data;
       },
       function errorCallback(response) {
         console.log("Unable to perform get request");
       });
   };
 });

 getRequest();
