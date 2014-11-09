var Core     = require('../');
var config   = require('./config');
var async    = require('async');
var mongoose = require('mongoose');

function setup(cb) {
  process.env.SLACK_TOKEN = 'FAKETOKEN'
  var core = Core(config);

  cleanUp(core._database, function(err){
    cb(core);
  });
}

function cleanUp(database, cb){
  var collections      = mongoose.connection.collections;
  var collectionsNames = Object.keys(collections);

  var todo = collectionsNames.length;

  if (!todo) return cb();

  collectionsNames.forEach(function(name) {
    var collection = collections[name];

    if (name.match(/^system\./)) return --todo;

    collection.remove({ },{ safe: true }, function() {
      if (--todo === 0) cb();
    });
  });
}

module.exports = setup;