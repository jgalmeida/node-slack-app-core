var assert   = require('chai').assert
var setup    = require('../../../setup');
var Factory;

describe('UserList Usecase', function() {
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
      Factory.User(5);
      Factory.User(1, {name: 'jony'})
      done();
    })


    it('list all users', function(done) {
      core.users.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        assert.equal(result.length, 6);
        done();
      })
    })

    it('list a user by scope', function(done) {
      core.users.list({name: 'jony'}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        assert.equal(result.length, 1);
        done();
      })
    })

  })

})