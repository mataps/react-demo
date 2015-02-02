var React = require('react/addons');

var Maker = require('./layers/Maker');

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
  React.render(
    React.createElement(Maker),
    document.getElementById('main-content')
  );

  //var router = Router(routes);
  //router.configure({html5history: false, convert_hash_in_init: false});
  //router.init('/');
}