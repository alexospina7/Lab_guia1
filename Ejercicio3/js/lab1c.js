angular.module('lab1c', [])
  .controller('lab1cController', function($scope){
 $scope.click=function(){
 	$scope.url="http://dummyimage.com/200x200/000/34ffddaa";
 };
 $scope.dbclick=function(){
 	$scope.url="http://dummyimage.com/600x400/000/fff";
 };
   });