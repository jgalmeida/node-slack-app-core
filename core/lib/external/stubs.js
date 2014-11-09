module.exports = SlackClient;

function SlackClient(token, opts) {
  return {
    usersList:       usersList,
    channelsList:    channelsList,
    channelsHistory: channelsHistory
  }

  function usersList(qs, cb) {
    if(typeof qs === 'function') {
      cb      = qs;
      qs      = {};
    }

    cb(null, [{}], {});
  }

  function channelsList(qs, cb) {
    if(typeof qs === 'function') {
      cb      = qs;
      qs      = {};
    }

    cb(null, [{}], {});
  }

  function channelsHistory(qs, cb) {
    if(typeof qs === 'function') {
      cb      = qs;
      qs      = {};
    }

    cb(null, [{}], {});
  }
}