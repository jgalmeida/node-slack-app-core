var mongoose = require('mongoose')
  , Schema   = mongoose.Schema

/**
  * Message Schema
*/

var MessageSchema = new Schema({
  type:    String,
  ts:      String,
  user:    String,
  text:    String,
  channel: String,
  date:    Date
})

module.exports = mongoose.model('Message', MessageSchema);