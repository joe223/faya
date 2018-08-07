var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  email:String,
  phone:String,
});

module.exports = mongoose.model('User', Schema);
