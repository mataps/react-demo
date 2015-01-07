var EventEmitter = require('events').EventEmitter
  , globalEvents = new EventEmitter();

module.exports = globalEvents;