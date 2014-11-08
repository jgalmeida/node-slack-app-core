var mongoose = require('mongoose')
  , Schema   = mongoose.Schema

/**
  * User Schema
*/

var UserSchema = new Schema({
  id: String,
  name: String,
  deleted: Boolean,
  color: String,
  profile: {
    first_name: String,
    last_name: String,
    real_name: String,
    email: String,
    skype: String,
    phone: String,
    image_24: String,
    image_32: String,
    image_48: String,
    image_72: String,
    image_192: String
  },
  is_admin: Boolean,
  is_owner: Boolean,
  has_files: Boolean
})

module.exports = mongoose.model('User', UserSchema);