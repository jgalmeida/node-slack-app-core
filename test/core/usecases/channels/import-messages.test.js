var assert   = require('chai').assert
var setup    = require('../../../setup');
var Message;
var Factory;

describe('ImportChannelsMessages Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      Factory = require('../../../factory');
      Message = require('mongoose').model('Message');
      core = _core;
      done();
    });
  });

  describe('#importMessages()', function() {

    it('imports all channel messages', function(done) {
      core.channels.importMessages('FAKE', function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        Message.count({}, function(err, count) {
          assert.equal(count, result.length);
          done();
        })
      })
    })

  })

})