var app = angular.module("app");

app.factory("ShowRecipeFactory", function($http){
  var factory = {};

  // factory.setId = function(id){
  //   localStorage.setItem("id", id);
  // };
  //
  // factory.getId = function(){
  //   return localStorage.getItem("id");
  // };

  factory.getRecipeById = function(id, callback){
    $http.get('/get-by-id/'+id).success(function(response){
      callback(response);
    });
  };


  return factory;
});
