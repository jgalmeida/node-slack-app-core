var Boom        = require('boom');
var Async       = require('async');
var SlackClient = require('node-slack-client')(process.env.SLACK_TOKEN);

var Message     = require('mongoose').model('Message');

module.exports = bulkImport;

function bulkImport(channelId, cb) {
  var pipeline = [
    function(next) { return next(null, channelId); },
    getSlackChannelMessages,
    associateWithChannel,
    insertMessages
  ]

  Async.waterfall(pipeline, handleResult);

  function handleResult(err, result) {
    if(err) return cb(err);
    return cb(null, result);
  }
}

function getSlackChannelMessages(channelId, next) {
  var qs = { channel: channelId };

  SlackClient.channelsHistory(qs, channelsHistoryCb);

  function channelsHistoryCb(err, collection, response) {
    if(err) return next(Boom.wrap(err, 400, err.message));
    return next(null, channelId, collection);
  }
}

function associateWithChannel(channelId, collection, next) {
  Async.map(collection, associate, doneCb);

  function associate(message, cb) {
    message.channel = channelId;
    return cb(null, message);
  }

  function doneCb(err, results) {
    if(err) next(Boom.wrap(err, 400, err.message));
    return next(null, results);
  }
}

function insertMessages(messages, next) {
  Message.collection.insert(messages, insertCb);

  function insertCb(err, result) {
    if(err) return next(Boom.badImplementation(err.message));
    return next(null, result);
  }
}