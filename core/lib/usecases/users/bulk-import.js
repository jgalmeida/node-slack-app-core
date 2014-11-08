var Boom        = require('boom');
var Async       = require('async');
var SlackClient = require('node-slack-client')(process.env.SLACK_TOKEN);

var User        = require('mongoose').model('User');

module.exports = bulkImport;

function bulkImport(cb) {
  var pipeline = [
    getSlackUsers,
    insertUsers
  ]

  Async.waterfall(pipeline, handleResult);

  function handleResult(err, result) {
    if(err) return cb(err);
    return cb(null, result);
  }
}

function getSlackUsers(next) {
  SlackClient.usersList(usersListCb);

  function usersListCb(err, collection, response) {
    if(err) return next(Boom.wrap(err, 400, err.message));
    return next(null, collection);
  }
}

function insertUsers(users, next) {
  User.collection.insert(users, insertCb);

  function insertCb(err, result) {
    if(err) return next(Boom.badImplementation(err.message));
    return next(null, result);
  }
}