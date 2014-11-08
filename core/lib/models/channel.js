var mongoose = require('mongoose')
  , Schema   = mongoose.Schema

/**
  * Channel Schema
*/

var ChannelSchema = new Schema({
  id: String,
  name: String,
  created: String,
  creator: String,
  is_archived: Boolean,
  is_member: Boolean,
  num_members: Number,
  topic: {
    value: String,
    creator: String,
    last_set: String,
  },
  purpose: {
    value: String,
    creator: String,
    last_set: String
  }
})

module.exports = mongoose.model('Channel', ChannelSchema);