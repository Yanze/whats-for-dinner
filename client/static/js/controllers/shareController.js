var app = angular.module("app");

app.controller("shareController", function($scope, $location, ShareFactory) {

  $scope.addFavoIngredients = function(){
    console.log("clicked");
    var ingredient = $scope.favo_ingredient.name;
    if(!ingredient){
      return;
    }

    AccountFactory.addFavoIngredient({ingredient: ingredient}, function(response){

    });
  };

});
