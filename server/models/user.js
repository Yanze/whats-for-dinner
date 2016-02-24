var mongoose = require('mongoose'), Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  favo_ingredients : [String],
  ingredient_unlike: [String]
});

//  passportLocalMongoose provides a set of methods: authenticate, register, setPassword, serialize, deserilize, hash the password
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', UserSchema);
