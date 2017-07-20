
angular.module("app").controller("controller", function($scope, service) {

  service.getData().then(function(response){
      $scope.getData = response;
    });
});