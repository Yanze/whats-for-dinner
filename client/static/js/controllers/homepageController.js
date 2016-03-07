var app = angular.module("app");

app.controller("homepageController", function($scope, $location, HomepageFactory) {

  HomepageFactory.getRecipe(function(data) {
    $scope.recipes = data;
  });


  $scope.delete = function(recipe, recipes){
    var excludedRecipes = [];
    for(var i = 0; i < recipes.length; i++){
      excludedRecipes.push(recipes[i].id);
    }

    HomepageFactory.findANewRecipes(excludedRecipes, function(newRecipe){
      $scope.recipe = newRecipe;
      console.log($scope.recipe);
    });

  };


});
