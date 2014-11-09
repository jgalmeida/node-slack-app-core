var faker = require('faker');
var xtend = require('util')._extend;

var User    = require('mongoose').model('User');
var Channel = require('mongoose').model('Channel');
var Message = require('mongoose').model('Message');

module.exports = {
  User:    generateUsers,
  Channel: generateChannels,
  Message: generateMessages
};

function generateUsers(times, override) {
  override = override || {};

  var users = [];

  while(times--) {
    var userFields = {
      name: faker.name.findName()
    };
    userFields = xtend(userFields, override);

    var user = new User(userFields)
    user.save();

    users.push(user)
  }

  return users;
}

function generateChannels(times, override) {
  override = override || {};

  var channels = [];

  while(times--) {
    var channelFields = {
      id:   faker.name.findName(),
      name: faker.name.findName()
    };
    channelFields = xtend(channelFields, override);

    var channel = new Channel(channelFields)
    channel.save();

    channels.push(channel)
  }

  return channels;
}

function generateMessages(times, override) {
  override = override || {};

  var messages = [];

  while(times--) {
    var messageFields = {
      user:    faker.name.findName(),
      channel: faker.name.findName(),
      text:    faker.name.findName(),
      ts:      Date.now(),
      date:    new Date()
    };
    messageFields = xtend(messageFields, override);

    var message = new Message(messageFields)
    message.save();

    messages.push(message)
  }

  return messages;
}