/** @jsx React.DOM */

var React = require('react/addons');
var cx = React.addons.classSet;

var NavProgress = React.createClass({
  render: function() {
    return (
      <p className='upload-progress large'>{this.props.progress || 0}%</p>
    );
  }
});
module.exports = NavProgress;