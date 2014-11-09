var ExternalServices = {
  dev: {
    SlackClient: require('node-slack-client')
  },
  test: {
    SlackClient: require('./stubs')
  }
}[process.env.ENVIRONMENT || 'dev']

module.exports = ExternalServices;