var app = require('./app.js');
var paths = require('./paths');
var shim = {};
shim[paths.vendor+'jquery/dist/jquery.js'] = {};
shim[paths.vendor+'lodash/dist/lodash.js'] = {};

var exportshim = function() {
  for(var i in app.js) {
    shim[app.js[i]] = {};
  }
  return shim;
}

module.exports = exportshim();