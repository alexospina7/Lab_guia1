angular.module('initial_spi.controllers', [])
  
	.controller('lab1aController', function($scope){

		$scope.profession="";
	})

	.controller('lab1bController', function($scope){

		$scope.angular_filters=["filter","currency","number","date","json","lowercase","uppercase","limitTo","orderBy"];
		$scope.angular_input=["text","date","datetime-local","time","week","month","number","url","email","radio","range","checkbox"];
	})
	
	.controller('lab1cController', function($scope){
		$scope.click=function(){
			$scope.url="http://dummyimage.com/200x200/000/34ffddaa";
		};
		$scope.dbclick=function(){
			$scope.url="http://dummyimage.com/600x400/000/fff";
		};
	});