/** @jsx React.DOM */

var React = require('react/addons');
var FileUploadForm = require('./FileUploadForm');
var UploadPreview = require('./UploadPreview');
var AssetPreview = require('./AssetPreview');

var Marker = React.createClass({
  componentDidMount: function() {
    var self = this;
    $(document).on('activeItemChanged', function(e, file) {
      self.setState({
        uploadedFiles: [file],
        hideAssetPreview: false
      });
    });
  },
  getInitialState: function() {
    var self = this;

    var onAdd = function(e, data) {
      self.setState({hideForm: true});
      data.process(function () {
        return $('#fileupload').fileupload('process', data);
      }).always(function () {
        self.setState({files: self.state.files.concat(data.files)});
      }).done(function () {
        $('.upload-preview').addClass('working');
        if ($('.upload-preview').find('.asset').length > 1) {
          $('.upload-preview').addClass('multiple');
        }
        data.submit();
      });
    }

    var onProgress = function(e, data) {
      var progress = Math.floor(data.loaded / data.total * 100);
      var files = _.forEach(self.state.files, function(file) {
        if (file.name === data.files[0].name) {
          file.progress = progress;
        }
      });
      self.setState({files: files});
    };

    var onDone = function(e, data) {
      $(document).trigger('fileUploaded', data.result[0]);
    };

    var onStop = function() {
      $(document).trigger('uploadFinished');
    }

    return {
      hideForm: false,
      hideAssetPreview: true,
      files: [],
      uploadedFiles: [],
      options: {
        add: onAdd,
        progress: onProgress,
        done: onDone,
        stop: onStop
      }
    };
  },
  render: function() {
    return (
      <div className="marker-page">
        <AssetPreview files={this.state.uploadedFiles} hide={this.state.hideAssetPreview}/>
        <UploadPreview files={this.state.files} hide={!this.state.hideAssetPreview}/>
        <FileUploadForm options={this.state.options} hide={this.state.hideForm}/>
      </div>
    );
  }
});
module.exports = Marker;