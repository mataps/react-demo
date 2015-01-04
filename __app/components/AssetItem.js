/** @jsx React.DOM */

var React = require('react/addons');

var AssetItem = React.createClass({
  componentDidMount: function() {
    var asset = $(this.refs.asset.getDOMNode());
  },
  render: function() {
    return (
      <div className="asset" ref="asset">
        <button type="button" className="close" onClick={this.props.onDeleteAsset}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
        <span className="filename">{this.props.file.filename}</span>
        <img src={this.props.file.url} className="img-responsive img-preview" />
      </div>
    );
  }
});
module.exports = AssetItem;