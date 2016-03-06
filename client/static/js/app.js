var app = angular.module("app", ["ngRoute" ,"ngMessages"]);

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
  .when('/share', {
    templateUrl: 'static/partials/share.html',
    controller: "shareController"
  });
  // .when('/new-question', {
  //   templateUrl: 'static/partials/addQuestion.html',
  //   controller: "addQuestionController"
  // })
  // .when('/question/:id', {
  //   templateUrl: 'static/partials/question.html',
  //   controller: "questionController"
  // })
  // .when('/question/:id/new-answer', {
  //   templateUrl: 'static/partials/addAnswer.html',
  //   controller: "questionController"
  // });

});
