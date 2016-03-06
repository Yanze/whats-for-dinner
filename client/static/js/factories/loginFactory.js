var app = angular.module("app");

app.factory("LoginFactory", function($http){
  var factory = {};
  factory.register = function(userInfo, callback){
   $http.post('/register', userInfo).success(function(response){
      callback(response);
    });
  };

  factory.login = function(user, callback){
    $http.post('/login', user).success(function(response){
        callback(response);
    });
  };

  return factory;
});
