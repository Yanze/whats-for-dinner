var app = angular.module("app");

app.controller("homepageController", function($scope, $location, HomepageFactory) {

  

  $scope.logout = function(){
    HomepageFactory.logout($scope.user, function(response){
      console.log($scope.user);
      // if(response.status == "loginGet"){
      //   $location.path("/login");
      // }
    });
  };

});
