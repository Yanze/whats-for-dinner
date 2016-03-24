var app = angular.module("app");

app.controller("showRecipeController", function($scope, $location, $routeParams, HomepageFactory, ShowRecipeFactory) {


    ShowRecipeFactory.getRecipeById($routeParams.id, function(recipe){
      $scope.recipe = recipe;
    });


});
