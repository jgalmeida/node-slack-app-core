var assert   = require('chai').assert
var setup    = require('../../../setup');
var Factory;

describe('MessagesList Usecase', function() {
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
      Factory.Message(1);
      Factory.Message(1, {user: 'jony'});
      Factory.Message(1, {user: 'jony', channel: 'jonychannel'});
      Factory.Message(1, {user: 'jony', channel: 'jonychannel', date: Date.parse("2014-10-01")});
      Factory.Message(1, {user: 'jony', channel: 'jonychannel', date: Date.parse("2014-10-30")});
      done();
    });

    it('list all messages', function(done) {
      core.messages.list({}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        assert.equal(result.length, 5);
        done();
      })
    })

    it('list messages by user', function(done) {
      core.messages.list({user: 'jony'}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        assert.equal(result.length, 4);
        done();
      })
    })

    it('list messages by user and channel', function(done) {
      core.messages.list({user: 'jony', channel: 'jonychannel'}, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        assert.equal(result.length, 3);
        done();
      })
    })

    it('list messages by user and channel between two dates', function(done) {
      var query = {
        user:    'jony',
        channel: 'jonychannel',
        date: {
          $gte: Date.parse('2014-09-01'),
          $lt:  Date.parse('2014-11-01')
        }
      }

      core.messages.list(query, function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        assert.equal(result.length, 2);
        done();
      })
    })

  })

})