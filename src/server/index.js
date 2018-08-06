var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var User = require('./models/user');
var Wall = require('./models/wall');

var mongoose = require('./mongoose');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,OPTIONS')
  next();
});

var usersRouter = require('./rest-routers/users');

app.use('/users', usersRouter);

app.get('/authorized', function (req, res) {
  User.findById('000000006', function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


app.listen(8080, function () {
  console.log('Express is at 8080');
});
