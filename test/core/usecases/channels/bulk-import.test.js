var assert   = require('chai').assert
var setup    = require('../../../setup');
var Fixtures = require('../../../fixtures');

describe('ChannelsBulkImport Usecase', function() {
  var core;

  before(function setupTest(done) {
    setup(function(_core) {
      core = _core;
      done();
    });
  });

  describe('#bulkImport()', function() {

    it('Imports all channels from slack api', function(done) {
      core.channels.bulkImport(function(err, result) {
        assert.notOk(err);
        assert.ok(result);
        done();
      })
    })

  })

})