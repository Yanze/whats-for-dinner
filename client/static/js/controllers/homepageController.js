var app = angular.module("app");

app.controller("homepageController", function($scope, $location, HomepageFactory) {

  HomepageFactory.getRecipe(function(data){
    $scope.recipes = data;
  });

});
