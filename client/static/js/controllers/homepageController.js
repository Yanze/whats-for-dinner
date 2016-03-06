var app = angular.module("app");

app.controller("homepageController", function($scope, $location, HomepageFactory) {

  HomepageFactory.getRecipe(function(data) {
    $scope.recipes = data;
  });
});

app.directive('removeOnClick', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind("click", function() {
        element.remove();
      });
    }
  };
});
