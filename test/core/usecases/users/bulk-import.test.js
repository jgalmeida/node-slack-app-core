var assert   = require('chai').assert
var setup    = require('../../../setup');
var User;
var Factory;

describe('UsersBulkImport Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      Factory = require('../../../factory');
      User    = require('mongoose').model('User');
      core = _core;
      done();
    });
  });

  describe('#bulkImport()', function() {

    it('Imports all users from slack api', function(done) {
      core.users.bulkImport(function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        User.count({}, function(err, count) {
          assert.equal(count, result.length);
          done();
        })
      })
    })

  })

})