var React = require('react/addons');
//var Cortex = require("cortexjs");

var Homepage = require('./components/Homepage');

//router
//var Router = require('director').Router;
//var EventEmitter = require('events').EventEmitter;

//var setMainContent = function(component) {
//  React.render(
//    React.createElement(component),
//    document.getElementById('main-content')
//  );
//};

//var routes = {
//  '/': function() {
//
//  },
//  '/marker': function() {
//    setMainContent(Marker);
//    //mount file menu
//    React.render(
//      React.createElement(FileMenu),
//      document.getElementById('mp-menu')
//    );
//  }
//};

if (!window.testEnv) {
  //var state = {
  //  showHomepage: true
  //};
  //var wrapped = new Cortex(state);

  React.render(
    React.createElement(Homepage),
    document.getElementById('main-content')
  );

  //var router = Router(routes);
  //router.configure({html5history: false, convert_hash_in_init: false});
  //router.init('/');
}