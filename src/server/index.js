var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.mongo.uri, config.mongo.options);
var db = mongoose.connection;

module.exports = mongoose;