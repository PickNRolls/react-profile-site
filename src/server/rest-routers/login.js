var express = require('express');
var router = express.Router();

var api = require('../api');

router.post('/', function (req, res) {
  var userData = req.body;

  api.checkUser(userData)
  .then(function (user) {
    if (!user) {
      res.json(null);
      return;
    }

    res.json(user);
  })
  .catch(function (err) {
    if (err) throw err;
  })
});

module.exports = router;
