var Joi     = require('joi');
var Boom    = require('boom');
var Async   = require('async');
var Channel = require('mongoose').model('Channel');

module.exports = listChannels;

function listChannels(scope, cb) {
  scope = scope || {};

  Channel.find(scope, findCb);

  function findCb(err, result) {
    if(err) return cb(Boom.badImplementation(err.message));
    return cb(null, result);
  }
}