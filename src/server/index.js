var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

var User = require('./models/user');
var Wall = require('./models/wall');

var mongoose = require('./mongoose');

var config = require('./config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: config.session.secret,
  key: config.session.key,
  cookie: config.session.cookie,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: true,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  res.cookie('session', req.session, {
    httpOnly: true
  });
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,OPTIONS');

  req.session._userId = '000000001';
  next();
});

var usersRouter = require('./rest-routers/users');
var loginRouter = require('./rest-routers/login');

app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.get('/authorized', function (req, res) {
  User.findById('000000006', function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


app.listen(8080, function () {
  console.log('Express is at 8080');
});
