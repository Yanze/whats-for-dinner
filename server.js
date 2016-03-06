var express  = require('express');
// var session  = require('express-session');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var morgan = require('morgan');
var path = require('path');
var app      = express();
var port     = process.env.PORT || 8000;

var passport = require('passport');
// var flash    = require('connect-flash');

require('./server/models/User')(passport);

// set up our express application
// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './client')));
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// required for passport
// app.use(session({
// 	secret: 'vidyapathaisalwaysrunning',
// 	resave: true,
// 	saveUninitialized: true
//  } )); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./server/config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
