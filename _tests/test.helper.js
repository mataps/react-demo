var jsdom = require("jsdom").jsdom;
var window = jsdom().parentWindow;

var fs = require('fs');
var path = require('path');
var app = require('../_config/app');

global.window = window;
global.document = window.document;
window.console = console;
window.testEnv = true;

//set up the (this) variable for backbone
var scriptEl = window.document.createElement("script");
scriptEl.text = 'this = window';

app.js.forEach(function(file) {
  var scriptEl = window.document.createElement("script");
  scriptEl.text = fs.readFileSync(file, 'utf-8');
  window.document.body.appendChild(scriptEl);
});


afterEach(function(){
  if (window.document.errors) {
    console.log(window.document.errors);
    window.document.errors = undefined;
  }
});

for ( var key in window) {
  global[key] = window[key];
}