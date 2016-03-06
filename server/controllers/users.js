
var passport = require('passport');
var user = require('../models/User');


module.exports = (function(){
  return{
    register: function(req, res) {

      req.body.username = req.body.email;
      req.body.password = req.body.pwd;

      User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
          if (err) {
              res.json({
                status: "KO",
                message: err.message
              });
          }

          passport.authenticate('local')(req, res, function () {
            res.json({
              status: "OK",
              message: "New User Added."
            });
          });
      });

      // var newUser = new user.User(req.body.username, req.body.age);
      //  newUser.register(function(err){
      //
      //  });
      },


    login: function(req, res) {

      req.body.username = req.body.email;
      req.body.password = req.body.pwd;

      passport.authenticate('local')(req, res, function() {
        res.json({
          status: "OK",
          message: "Found"
        });
      });
    },





 };
})();
