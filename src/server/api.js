var mongoose = require('./mongoose');
var crypto = require('crypto')
var AuthData = require('./models/auth-data');
var User = require('./models/user');
var Wall = require('./models/wall');
 
// User API

var count = 0;
var getUserId = function () {
  var current = '' + count++;
  var len = current.length;
  var oString = '';

  for (var i = 9; i > len; i--) {
    oString += 0;
  }

  return oString + current;
};

exports.createUser = function (userData, callback) {
  var id = getUserId();

  var authUserData = new AuthData({
    _id: id,
    username: userData.authData.username,
    password: hash(userData.authData.password)
  });

  var user = new User({
    _id: id,
    name: userData.name,
    birth: userData.birth,
    page: {},
    friends: userData.friends || []
  });

  var wall = new Wall({
    _id: id
  });

  var promise = mongoose.connection.on('open', function () {
    var promises = [
      user.save(),
      wall.save(),
      authUserData.save()
    ];

    Promise.all(promises)
    .then(callback);
  });
};
 
exports.checkUser = function (userData) {
  return AuthData.findOne({username: userData.username})
  .then(function(doc){
    if ( doc.password == hash(userData.password) ) {
      return User.findById(doc._id);
    } else {
      return Promise.reject("Error wrong");
    }
  })
  .catch(function (err) {
    if (err) console.log(err);
  })
};
 
function hash(text) {
  return crypto.createHash('sha1')
  .update(text).digest('base64');
}

/*
  
  User's actions

*/

exports.addFriend = function (userId, friendId) {
  if (userId === friendId) return null;

  User.findById(userId)
  .then(function (user) {
    var userHasFriend = false;

    user.friends.forEach(function (iterableFriendId) {
      if (iterableFriendId === friendId) userHasFriend = true;
    });

    if (userHasFriend) {
      return null;
    } else {
      user.friends.push(friendId);
      return user.save();
    }
  })
  .then(function (user) {
    if (user === null) return null;
    return User.findById(friendId);
  })
  .then(function (friend) {
    if (friend === null) return null;
    friend.friends.push(userId);
    return friend.save();
  })
  .catch(function (err) {
    if (err) throw err;
  });
};

exports.deleteFriend = function (userId, friendId) {
  if (userId === friendId) return null;

  User.findById(userId)
  .then(function (user) {
    user.friends.forEach(function (id, index) {
      if (id === friendId) return user.friends.splice(index, 1);
    });

    return user.save();
  })
  .then(function (user) {
    if (user === null) return null;
    return User.findById(friendId);
  })
  .then(function (friend) {
    if (friend === null) return null;
    friend.friends.forEach(function (id, index) {
      if (id === userId) return friend.friends.splice(index, 1);
    });
    return friend.save();
  })
  .catch(function (err) {
    if (err) throw err;
  });
};