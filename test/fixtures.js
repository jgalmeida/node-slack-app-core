var faker = require('faker');
var xtend = require('util')._extend;

module.exports = {
  User: userFixture
};

function userFixture(override) {

  var user = {
    name: faker.user.findName(),
  };

  return xtend(user, override);
}