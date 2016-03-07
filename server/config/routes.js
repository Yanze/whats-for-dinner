// var User = require('../controllers/users.js');
var recipes = require('../controllers/recipes.js');


module.exports = function(app, passport) {

  // app.post('/register', User.register);
  // app.post('/login', User.login);
  app.get('/get-by-id/:id', recipes.getById);
  app.get('/get-all', recipes.getAll);
  app.post('/get-new-recipe', recipes.getNewRecipe);


};
