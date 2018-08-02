var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

var db;
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.mongo.uri, config.mongo.options);
db = mongoose.connection;

var User = require('./models/user');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/authorized', function (req, res) {
  User.findOne({_id: '000000006'}, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.get('/users/:id', function (req, res) {
  var userID = req.params.id;

  User.findOne({_id: userID}, function (err, result) {
    if (err) throw err;
    res.json(result);
  })
});

app.use(router);


app.listen(8080, function () {
  console.log('Express is at 8080');
});

module.exports = mongoose;