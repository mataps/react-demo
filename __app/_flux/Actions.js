var Dispatcher = require('./Dispatcher');
var Constants = require('./Constants');

var Actions = {

	setActiveView: function(view) {
		Dispatcher.dispatch({
      actionType: Constants.SET_ACTIVE_VIEW,
      data: view
    })
	},

  setExpire: function(expire) {
    Dispatcher.dispatch({
      actionType: Constants.SET_EXPIRE,
      data: expire
    })
  },

  setFiles: function(files) {
    Dispatcher.dispatch({
      actionType: Constants.SET_FILES,
      data: files
    })
  }

};

module.exports = Actions;