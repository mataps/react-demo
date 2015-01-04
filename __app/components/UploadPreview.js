/** @jsx React.DOM */

var React = require('react/addons');
var UploadItem = require('./UploadItem');

var UploadPreview = React.createClass({
  render: function() {
    var assets = this.props.files.map(function (file) {
      return (
        <UploadItem file={file} />
      );
    });

    var cx = React.addons.classSet;
    var classes = cx({
      'upload-preview col-xs-12': !this.props.hide,
      'upload-preview col-xs-12 hide': this.props.hide
    });

    return (
      <div className={classes}>
        <div className="upload-preview-inner">
          {assets}
        </div>
      </div>
    );
  }
});
module.exports = UploadPreview;