/** @jsx React.DOM */

var React = require('react/addons');
var cx = React.addons.classSet;

var NavOverlay = React.createClass({
  render: function() {
  	var opened = (this.props.color ? 'opened' : null);

    return (
      <div className={'layer-2 ' + opened }>
        {this.props.children}
      </div>
    );
  }
});
module.exports = NavOverlay;