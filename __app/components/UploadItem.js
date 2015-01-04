/** @jsx React.DOM */

var React = require('react/addons');

var UploadItem = React.createClass({
  componentDidMount: function() {
    var asset = $(this.refs.asset.getDOMNode());
    if (this.props.file.preview) {
      $(this.props.file.preview).addClass('img-responsive img-preview').appendTo(asset);
    }
  },
  render: function() {
    var progress = this.props.file.progress || 0;
    var progressStyle = {
      width: progress + '%'
    };
    return (
        <div className="asset" ref="asset">
          <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <span className="filename">{this.props.file.name}</span>
          <div className="progress-container fade">
            <div className="progress">
              <div className="progress-bar" style={progressStyle}></div>
            </div>
          </div>
        </div>
    );
  }
});
module.exports = UploadItem;