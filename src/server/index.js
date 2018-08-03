var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var User = require('./models/user');
var Wall = require('./models/wall');

var mongoose = require('./mongoose');

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

router.get('/friends/:id', function (req, res) {
  var userID = req.params.id;

  User.findOne({_id: userID})
  .then(function (user) {
    var friendsID = user.friends;
    var promises = friendsID.map(function (friendID) {
      return User.findOne({_id: friendID})
    });

    return Promise.all(promises);
  })
  .then(function (friends) {
    res.json(friends);
  })
  .catch(function (err) {
    if (err) throw err;
  })
});

router.get('/walls/:id', function (req, res) {
  var wallID = req.params.id;

  Wall.findOne({_id: wallID}, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.post('/walls/:id', function (req, res) {
  var wallID = req.params.id;

  Wall.findOne({_id: wallID}, function (err, wall) {
    if (err) throw err;
    wall.addPost(req.body);
  });
});

app.use(router);


app.listen(8080, function () {
  console.log('Express is at 8080');
});
