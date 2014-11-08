var Boom        = require('boom');
var Async       = require('async');
var SlackClient = require('node-slack-client')(process.env.SLACK_TOKEN);

var Channel     = require('mongoose').model('Channel');

module.exports = bulkImport;

function bulkImport(cb) {
  var pipeline = [
    getSlackChannels,
    insertChannels
  ]

  Async.waterfall(pipeline, handleResult);

  function handleResult(err, result) {
    if(err) return cb(err);
    return cb(null, result);
  }
}

function getSlackChannels(next) {
  SlackClient.channelsList(channelsListCb);

  function channelsListCb(err, collection, response) {
    if(err) return next(Boom.wrap(err, 400, err.message));
    return next(null, collection);
  }
}

function insertChannels(channels, next) {
  Channel.collection.insert(channels, insertCb);

  function insertCb(err, result) {
    if(err) return next(Boom.badImplementation(err.message));
    return next(null, result);
  }
}