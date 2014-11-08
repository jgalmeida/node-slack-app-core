var assert   = require('chai').assert
var setup    = require('../../../setup');
var Fixtures = require('../../../fixtures');

describe('ChannelsList Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      core = _core;
      done();
    });
  });

  describe('#list()', function() {

    it('list all channels', function(done) {
      core.channels.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        done();
      })
    })

  })

})