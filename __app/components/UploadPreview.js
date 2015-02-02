/** @jsx React.DOM */

var React = require('react/addons');

var UploadPreview = React.createClass({
  getDefaultProps: function() {
    return {
      files: []
    };
  },
  render: function() {
    var assets = this.props.files.map(function (file, i) {
      var data = window.URL.createObjectURL(file);
      return (
        <img src={data} alt="" key={i}/>
      );
    });

    return !assets.length ? null : (
      <div className="asset-preview">
        {assets}
      </div>
    );
  }
});
module.exports = UploadPreview;