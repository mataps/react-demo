/** @jsx React.DOM */
var React = require('react/addons');
var Home = require('./Home');
var Store = require('../_flux/Store');
var ChooseExpire = require('./ChooseExpire');
var AssetReview = require('./AssetReview');

var getViewColor = function() {
  var color = '';
  switch(Store.getExpire()) {
    case '1 hour':
      color = 'green';
      break;
    case '7 hours':
      color = 'yellow';
      break;
    case '12 hours':
      color = 'orange';
      break;
    case '24 hours':
      color = 'red';
      break;
  }
  return color;
}

var Maker = React.createClass({

  getInitialState: function() {
    return {
      active: Store.getActiveView(),
      expire: Store.getExpire(),
      files: Store.getFiles(),
      color: getViewColor()
    };
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  render: function() {
    var view = this['render'+this.state.active].apply();
    return view;
  },

  renderHome: function() {
    return <Home />
  },

  renderChooseExpire: function() {
    return <ChooseExpire expire={this.state.expire} color={this.state.color} files={this.state.files} />
  },

  renderAssetReview: function() {
    return <AssetReview expire={this.state.expire} color={this.state.color} files={this.state.files} />
  },

  _onChange: function() {
    this.setState(this.getInitialState());
  }

});

module.exports = Maker;