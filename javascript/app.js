/* 
Services (factory)
You can use services to organize and share code across the app

ui.router is a dependency and we inject in the constructor
*/

angular.module('app', [])
.controller('MainCtrl', [
'$scope', 
function($scope){
	$scope.hello = "hello world";
}]);