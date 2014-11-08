var Joi   = require('joi');
var Boom  = require('boom');
var Async = require('async');
var User  = require('mongoose').model('User');

module.exports = listUsers;

function listUsers(scope, cb) {
  scope = scope || {};

  User.find(scope, findCb);

  function findCb(err, result) {
    if(err) return cb(Boom.badImplementation(err.message));
    return cb(null, result);
  }
}