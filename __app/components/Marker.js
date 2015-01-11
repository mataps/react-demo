/** @jsx React.DOM */

var React = require('react/addons');
var FileUploadForm = require('./FileUploadForm');
var UploadPreview = require('./UploadPreview');
var AssetPreview = require('./AssetPreview');
var DeleteAssetModal = require('./DeleteAssetModal');

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
        var $uploadPreview = $(self.refs.uploadPreview.getDOMNode());
        $uploadPreview.addClass('working');
        if ($uploadPreview.find('.asset').length > 1) {
          $uploadPreview.addClass('multiple');
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
      hideUploadPreview: true,
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
  handleExternalHide: function() {
    this.refs.modal.hide()
  },
  handleDoingNothing: function() {
    alert("Sending...");
  },
  onDeleteAsset: function(e) {
    e.preventDefault();
    this.refs.modal.show();
  },
  render: function() {
    var buttons = [
      {type: 'primary', text: 'YES', handler: this.handleDoingNothing},
      {type: 'danger',  text: 'NO',  handler: this.handleExternalHide}
    ];

    return (
      <div className="marker-page">
        <AssetPreview files={this.state.uploadedFiles} hide={this.state.hideAssetPreview} onDeleteAsset={this.onDeleteAsset.bind(this)}/>
        <UploadPreview ref="uploadPreview" files={this.state.files} hide={this.state.hideUploadPreview}/>
        <FileUploadForm options={this.state.options} hide={this.state.hideForm}/>
        <DeleteAssetModal ref="modal"
          show={false}
          buttons={buttons}
        >
          <h2>Are you sure you want to continue.</h2>
        </DeleteAssetModal>
      </div>
    );
  }
});
module.exports = Marker;