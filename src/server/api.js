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
    page: {}
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
 
// exports.checkUser = function (userData) {
//   return User
//     .findOne({email: userData.email})
//     .then(function(doc){
//       if ( doc.password == hash(userData.password) ) {
//         console.log("User password is ok");
//         return Promise.resolve(doc);
//       } else {
//         return Promise.reject("Error wrong");
//       }
//     });
// };
 
function hash(text) {
  return crypto.createHash('sha1')
  .update(text).digest('base64');
}

/*
  
  User's actions

*/

exports.addFriend = function (userId, friendId) {
  var user = User.findById(userId),
    friend = User.findById(friendId);

  console.log(user);
  console.log('--------------');
  console.log(friend);
};