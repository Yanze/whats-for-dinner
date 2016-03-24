var app = angular.module("app", ["ngRoute" ,"ngMessages", "ngCookies"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'static/partials/login.html',
    controller: "loginController"
  })
  .when('/', {
    templateUrl: 'static/partials/homepage.html',
    controller: "homepageController"
  })
  .when('/how-it-works', {
    templateUrl: 'static/partials/howWorks.html',
    controller: "howWorksController"
  })
  .when('/show-recipe/:id', {
    templateUrl: 'static/partials/showRecipe.html',
    controller: "showRecipeController"
  });
  // .when('/question/:id', {
  //   templateUrl: 'static/partials/question.html',
  //   controller: "questionController"
  // })
  // .when('/question/:id/new-answer', {
  //   templateUrl: 'static/partials/addAnswer.html',
  //   controller: "questionController"
  // });

});
