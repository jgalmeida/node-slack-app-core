var assert   = require('chai').assert
var setup    = require('../../../setup');
var Channel;
var Factory;

describe('ChannelsBulkImport Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      Factory = require('../../../factory');
      Channel = require('mongoose').model('Channel');
      core = _core;
      done();
    });
  });

  describe('#bulkImport()', function() {

    it('Imports all channels from slack api', function(done) {
      core.channels.bulkImport(function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        Channel.count({}, function(err, count) {
          assert.equal(count, result.length);
          done();
        })
      })
    })

  })

})