var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  birth: Date,
  page: {
    avatar: String,
    currentInfo: String,
    default: {}
  },
  friends: Array
});

userSchema.virtual('fullName').get(function (cb) {
  return this.name.first + ' ' + this.name.last;
});

module.exports = mongoose.model('User', userSchema);
