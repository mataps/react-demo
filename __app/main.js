var React = require('react/addons');

//components
var checkbox = require('./components/CheckboxWithLabel');
var Homepage = require('./components/Homepage');
var Marker = require('./components/Marker');
var FileMenu = require('./components/FileMenu');

//router
var Router = require('director').Router;

var setMainContent = function(component) {
  React.render(
    React.createElement(component),
    document.getElementById('main-content')
  );
};

var routes = {
  '/': function() {
    setMainContent(Homepage);
  },
  '/marker': function() {
    setMainContent(Marker);
    //mount file menu
    React.render(
      React.createElement(FileMenu),
      document.getElementById('mp-menu')
    );
  }
};

var router = Router(routes);
router.configure({html5history: false, convert_hash_in_init: false});
router.init('/');