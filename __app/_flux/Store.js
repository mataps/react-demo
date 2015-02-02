var Dispatcher = require('./Dispatcher');
var Constants = require('./Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// Internal object of shoes
var _files = [];
// var _files = [
//   {
//     'id': 1,
//     'uploader_id': 1,
//     'filename': 'test.jpg',
//     'size': 123,
//     'mime_type': 'image/jpeg',
//     'url': '/uploads/xQ/419547.jpg'
//   },
//   {
//     'id': 1,
//     'uploader_id': 1,
//     'filename': 'test.jpg',
//     'size': 123,
//     'mime_type': 'image/jpeg',
//     'url': '/uploads/xQ/419547.jpg'
//   },
//   {
//     'id': 1,
//     'uploader_id': 1,
//     'filename': 'test.jpg',
//     'size': 123,
//     'mime_type': 'image/jpeg',
//     'url': '/uploads/xQ/419547.jpg'
//   },
//   {
//     'id': 1,
//     'uploader_id': 1,
//     'filename': 'test.jpg',
//     'size': 123,
//     'mime_type': 'image/jpeg',
//     'url': '/uploads/xQ/419547.jpg'
//   }
//   ,{
//     'id': 1,
//     'uploader_id': 1,
//     'filename': 'test.jpg',
//     'size': 123,
//     'mime_type': 'image/jpeg',
//     'url': '/uploads/xQ/419547.jpg'
//   }
// ];
var _activeView = 'Home';
var _expire = '24 hours';

// Merge our store with Node's Event Emitter
var Store = assign(EventEmitter.prototype, {

  getActiveView: function() {
    return _activeView;
  },

  getFiles: function() {
    return _files;
  },

  getExpire: function() {
    return _expire;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
Dispatcher.register(function(payload) {
  // Define what to do for certain actions
  switch(payload.actionType) {
    case Constants.SET_FILES:
      _activeView = 'ChooseExpire';
      _files = payload.data; 
      break;
    case Constants.SET_ACTIVE_VIEW:
      _activeView = payload.data;
      break;
    case Constants.SET_EXPIRE:
      _expire = payload.data;
      break;
    default:
      return true;
  }
    
  // If action was acted upon, emit change event
  Store.emitChange();

  return true;

});

module.exports = Store;