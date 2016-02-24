var app = angular.module("app");

app.factory("AccountFactory", function($http){
  var factory = {};

  factory.addFavoIngredient = function(ingredient, callback){
    console.log(ingredient);

    $http.post("/add-ingredient", ingredient).success(function(response){
      callback(response);
    });
  };

  return factory;
});
