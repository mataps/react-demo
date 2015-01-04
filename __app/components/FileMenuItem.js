/** @jsx React.DOM */

var React = require('react/addons');

var FileMenuItem = React.createClass({
  componentDidMount: function() {
    $.fn.editable.defaults.mode = 'inline';
    $(this.refs.file.getDOMNode()).editable({
      toggle: 'manual'
    });
  },
  onClick: function(e) {
    e.preventDefault();
    this.props.onSelect(this.props.file);
  },
  render: function() {
    var className = this.props.active ? 'active' : null;

    return (
      <li><a href="#" ref="file" className={className} onClick={this.onClick}>{this.props.file.filename}</a></li>
    );
  }
});
module.exports = FileMenuItem;