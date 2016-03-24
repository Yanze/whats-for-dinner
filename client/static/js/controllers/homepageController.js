var app = angular.module("app");

app.controller("homepageController", function($scope, $location, $cookieStore, HomepageFactory) {

  var ids = $cookieStore.get('currentRecipesIds');

  // when app launched, check to see if there is a cookies data, if not, call getRecipe(), if yes, call getCurrentRecipesByIds()
  if(ids){
    console.log("old user: "+ids);
    HomepageFactory.getCurrentRecipesByIds(ids, function(recipes){
      $scope.recipes = recipes;
    });
  }
  else {
    console.log("new user");
    HomepageFactory.getRecipe(function(data) {
      $scope.recipes = data;
    });
  }

  $scope.delete = function(index, recipes){
    var excludedRecipes = [];
    for(var i = 0; i < recipes.length; i++){
      excludedRecipes.push(recipes[i].id);
    }

    HomepageFactory.findANewRecipe(excludedRecipes, function(newRecipe){
      $scope.recipes.splice(index, 1, newRecipe);
      storeCurrentIdsInCookie();
    });

  };

  function storeCurrentIdsInCookie(){
    var currentRecipesIds = [];
    for(var i = 0; i < $scope.recipes.length; i++){
      currentRecipesIds.push($scope.recipes[i].id);
    }
    $cookieStore.remove('currentRecipesIds');
    console.log(currentRecipesIds);
    $cookieStore.put('currentRecipesIds', currentRecipesIds);
  }

  $scope.getUserEmail = function(){
    $scope.submitted = true;
    if(!$scope.userEmail){
      return;
    }
    storeCurrentIdsInCookie();

    // HomepageFactory.getCurrentRecipesByIds(ids, function(recipes){
    //   console.log(recipes);
    //   $scope.recipes = recipes;
    // });

  };











});
