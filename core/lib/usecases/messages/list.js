var Joi     = require('joi');
var Boom    = require('boom');
var Async   = require('async');
var Message = require('mongoose').model('Message');

module.exports = listMessages;

function listMessages(scope, cb) {
  scope = scope || {};

  Message.find(scope, findCb);

  function findCb(err, result) {
    if(err) return cb(Boom.badImplementation(err.message));
    return cb(null, result);
  }
}