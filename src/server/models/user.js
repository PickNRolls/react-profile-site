var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: String,
  name: {
    first: String,
    last: String
  },
  birth: Date,
  page: {
    avatar: String,
    currentInfo: String
  },
  friends: Array
});

userSchema.virtual('fullName').get(function (cb) {
  return this.name.first + ' ' + this.name.last;
});

module.exports = mongoose.model('User', userSchema);
