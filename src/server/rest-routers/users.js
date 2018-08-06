var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Wall = require('../models/wall');

var api = require('../api');

router.get('/', function (req, res) {
  User.find()
  .then(function (users) {
    res.json(users);
  })
  .catch(function (err) {
    if (err) throw err;
  });
});

router.get('/:id', function (req, res) {
  var userId = req.params.id;

  User.findById(userId)
  .then(function (user) {
    res.json(user);
  })
  .catch(function (err) {
    if (err) throw err;
  });
});

router.get('/:id/friends', function (req, res) {
  var userId = req.params.id;

  User.findById(userId)
  .then(function (user) {
    var friendsId = user.friends;
    var promises = friendsId.map(function (friendId) {
      return User.findById(friendId)
    });

    return Promise.all(promises);
  })
  .then(function (friends) {
    res.json(friends);
  })
  .catch(function (err) {
    if (err) throw err;
  });
});

router.get('/:id/friends/:friendId', function (req, res) {
  var userId = req.params.id;
  var friendId = req.params.friendId;

  User.findById(userId)
  .then(function (user) {
    var userHasFriend = false;

    user.friends.forEach(function (iterableFriendId) {
      if (iterableFriendId === friendId) userHasFriend = true;
    });

    if (userHasFriend) return friendId;
    else return null;
  })
  .then(function (friendId) {
    if (friendId === null) return null;
    return User.findById(friendId);
  })
  .then(function (friend) {
    res.json(friend);
  })
  .catch(function (err) {
    if (err) throw err;
  })
})

router.put('/:id/friends/:friendId',function (req, res) {
  var userId = req.params.id;
  var friendId = req.params.friendId;

  api.addFriend(userId, friendId);
});

router.get('/:id/wall', function (req, res) {
  var userId = req.params.id;

  Wall.findById(userId)
  .then(function (wall) {
    res.json(wall);
  })
  .catch(function (err) {
    if (err) throw err;
  });
})

router.put('/:id/wall', function (req, res) {
  var userId = req.params.id;

  Wall.findById(userId)
  .then(function (wall) {
    wall.addPost(req.body);
  })
  .catch(function (err) {
    if (err) throw err;
  });
});

module.exports = router;
