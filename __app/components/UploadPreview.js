/** @jsx React.DOM */

var React = require('react/addons');
var cx = React.addons.classSet;
var UploadItem = require('./UploadItem');

var UploadPreview = React.createClass({
  render: function() {
    var assets = this.props.files.map(function (file) {
      return (
        <img src="/tests/0917wonderful-com.png" alt=""/>
      );
    });

    var classes = cx({
      'asset-preview': this.props.files.length,
      'asset-preview hide': !this.props.files.length
    });

    return (
      <div className={classes}>
        {assets}
      </div>
    );
  }
});
module.exports = UploadPreview;