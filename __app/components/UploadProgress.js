/** @jsx React.DOM */

var React = require('react/addons');
var cx = React.addons.classSet;

var UploadProgress = React.createClass({
  setProgress: function(progress) {
    this.setProps({
      progress: progress
    });
  },
  render: function() {
    var classes = cx({
      '': this.props.show,
      ' hide': !this.props.show
    });

    return (
      <p className={'upload-progress large' + classes}>{this.props.progress || 0}%</p>
    );
  }
});
module.exports = UploadProgress;