var app = angular.module("app");

app.controller("accountController", function($scope, $location, AccountFactory) {

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
