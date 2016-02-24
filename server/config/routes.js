var users = require('./../controllers/users.js');
var ingredients = require('./../controllers/ingredients.js');


module.exports = function(app) {

  app.post('/register', users.register);
  app.post('/login', users.login);
  app.post('/add-ingredient', ingredients.addFavo);


};
