var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  first_name: String,
  last_name: String,
  gender: String,
  age: Number,
  isSuper: Boolean,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', UserSchema)
