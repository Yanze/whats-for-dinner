var app = angular.module("app");

app.factory("HomepageFactory", function($http){
  var factory = {};

  // factory.logout = function(user, callback){
  //   $http.get('/logout', user).success(function(response){
  //       callback(response);
  //   });
  // };

  return factory;
});
