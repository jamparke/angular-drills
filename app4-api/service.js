angular.module("app").service("service", function ($http, $q){
  var baseUrl = "http://swapi.co/api/people"

  this.getData = function(){
    return $http.get(baseUrl)
    .then(function(response){
      return response.data.results;
    });
  };
});