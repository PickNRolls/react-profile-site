var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.mongo.uri);
var db = mongoose.connection;
db.once('open', function() {
  console.log('We\'re connected!');
});