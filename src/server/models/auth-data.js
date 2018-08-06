var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authSchema = new Schema({
  _id: String,
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AuthData', authSchema);