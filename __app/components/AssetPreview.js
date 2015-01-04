/** @jsx React.DOM */

var React = require('react/addons');
var AssetItem = require('./AssetItem');

var AssetPreview = React.createClass({
  render: function() {
    var assets = this.props.files.map(function (file) {
      return (
        <AssetItem file={file} onDeleteAsset={this.props.onDeleteAsset}/>
      );
    }.bind(this));

    var cx = React.addons.classSet;
    var classes = cx({
      '': !this.props.hide,
      'hide': this.props.hide
    });

    return (
      <div className={classes}>
        <div className="upload-preview col-xs-12">
          <div className="upload-preview-inner">
            {assets}
          </div>
        </div>
        <ul className="col-xs-12 inner-right-menu list-unstyled">
          <li><a href="#" className="btn btn-default btn-block">UPDATE</a></li>
          <li><a href="#" className="btn btn-default btn-block">SEND</a></li>
        </ul>
      </div>
    );
  }
});
module.exports = AssetPreview;