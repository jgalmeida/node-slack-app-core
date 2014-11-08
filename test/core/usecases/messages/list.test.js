var assert   = require('chai').assert
var setup    = require('../../../setup');
var Fixtures = require('../../../fixtures');

describe('MessagesList Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      core = _core;
      done();
    });
  });

  describe('#list()', function() {

    it('list all messages', function(done) {
      core.messages.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        done();
      })
    })

    it('list messages by user', function(done) {
      core.messages.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        done();
      })
    })

    it('list messages by user and channel', function(done) {
      core.messages.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        done();
      })
    })

  })

})