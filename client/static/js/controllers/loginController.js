var app = angular.module("app");

app.controller("loginController", function($scope, $location, LoginFactory) {

  $scope.register = function(){
    $scope.submitted = true;
    var newUser = $scope.newUser;
    if (!newUser || !newUser.email) {
          return;
        }

    $scope.email = {
      text: 'test@example.com'
    };

    var user = {
      email: newUser.email,
      pwd: newUser.pwd
    };

    LoginFactory.register(user, function(response){
      if(response.status === "OK") {
        $scope.success = "Successfully Registed!";
        $scope.newUser = "";
        $scope.submitted = false;
      }
      else {
        $scope.success = "";
        $scope.warning = "User exists.";
      }
    });

  };


  $scope.login = function(){
    var user = $scope.user;
    $scope.loginSubmitted = true;

    if(!$scope.user || !$scope.user.email || !$scope.user.pwd){
      return;
    }

    LoginFactory.login(user, function(response){
      if(response.status == "OK"){
        $location.path("/");
      }
      else{
        $scope.loginWarning = response.message;
      }
    });

  };

});
