/** @jsx React.DOM */

var React = require('react/addons');
var emitter = require('./GlobalEvents');

var FileMenuItem = React.createClass({
  componentDidMount: function() {
    $.fn.editable.defaults.mode = 'inline';
    $(this.refs.file.getDOMNode()).editable({
      toggle: 'manual'
    }).on('save', function(e, params) {
      //emitter.emit('FileNameChanged', params.newValue);
    });
  },
  onClick: function(e) {
    e.preventDefault();
    this.props.onSelect(this.props.file);
  },
  onChange: function(e) {
    console.log('test');
  },
  render: function() {
    var className = this.props.active ? 'active' : null;

    return (
      <li><a href="#" ref="file" className={className} onClick={this.onClick} onChange={this.onChange}>{this.props.file.filename}</a></li>
    );
  }
});
module.exports = FileMenuItem;