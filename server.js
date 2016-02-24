var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();

app.use(passport.initialize());
app.use(passport.session());


// app.use(express.cookieParser());
// app.use(express.session({secret: 'jesuisasecretkey'}));


// passport config
var Account = require('./server/models/user');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());



// set up a static file server that points to the 'client' directory;
// we will put all angular files inside of client;
app.use(express.static(path.join(__dirname, './client')));
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// require and runs the code from our routes.js
// pass it app so we can attach our routing rules to our express application;
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);





app.listen(8000, function(){

});
