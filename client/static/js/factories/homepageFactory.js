var app = angular.module("app");

app.factory("HomepageFactory", function($http){
  var factory = {};

  // factory.logout = function(user, callback){
  //   $http.get('/logout', user).success(function(response){
  //       callback(response);
  //   });
  // };

  factory.getRecipe = function(callback){
    $http.get('/get-all').success(function(response){
        callback(response);
    });
  };

  factory.findANewRecipe = function(excludedRecipes, callback){
    $http.post('/get-new-recipe', excludedRecipes).success(function(response){
        callback(response);
    });
  };

  factory.getCurrentRecipesByIds = function(ids, callback){
    $http.post('/get-current-recipes', ids).success(function(response){
      callback(response);
    });
  };

  return factory;


});
