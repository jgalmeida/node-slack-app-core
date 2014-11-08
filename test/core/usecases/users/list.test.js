var assert   = require('chai').assert
var setup    = require('../../../setup');
var Fixtures = require('../../../fixtures');

describe('UserList Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      core = _core;
      done();
    });
  });

  describe('#list()', function() {

    it('list all users', function(done) {
      core.users.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        done();
      })
    })

    it('list a user by scope', function(done) {
      core.users.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        done();
      })
    })

  })

})