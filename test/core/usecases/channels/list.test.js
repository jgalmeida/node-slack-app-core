var assert   = require('chai').assert
var setup    = require('../../../setup');
var Factory;

describe('ChannelsList Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      Factory = require('../../../factory');
      core = _core;
      done();
    });
  });

  describe('#list()', function() {

    before(function(done) {
      Factory.Channel(5);
      done();
    });

    it('list all channels', function(done) {
      core.channels.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        assert.equal(result.length, 5);
        done();
      })
    })

  })

})