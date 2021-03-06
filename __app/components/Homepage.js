/** @jsx React.DOM */

var React = require('react/addons');
var FileUploadForm = require('./FileUploadForm');
var UploadPreview = require('./UploadPreview');
var NavLayer = require('./NavLayer');

var Hompage = React.createClass({
  getInitialState: function() {
    var self = this;

    var onAdd = function(e, data) {
      self.setState({
        FileUploadForm: {
          hide: true
        }
      });
      data.process(function () {
        return $('#fileupload').fileupload('process', data);
      }).always(function () {
        self.setState({
          UploadPreview: {
            files: self.state.UploadPreview.files.concat(data.files)
          }
        });
      }).done(function () {
        //var $uploadPreview = $(self.refs.uploadPreview.getDOMNode());
        //$uploadPreview.addClass('working');
        //if ($uploadPreview.find('.asset').length > 1) {
        //  $uploadPreview.addClass('multiple');
        //}
        self.refs.navLayer.transitionTo('uploading');
        data.submit();
      });
    }

    var onProgressAll = function(e, data) {
      var progress = Math.floor(data.loaded / data.total * 100);
      self.refs.navLayer.setProgress(progress);
      //var files = _.forEach(self.state.files, function(file) {
      //  if (file.name === data.files[0].name) {
      //    file.progress = progress;
      //  }
      //});
      //self.setState({files: files});
    };

    var onDone = function(e, data) {
      $(document).trigger('fileUploaded', data.result[0]);
    };

    var onStop = function() {
      $(document).trigger('uploadFinished');
      self.refs.navLayer.transitionTo('24hrs');
    }

    return {
      FileUploadForm: {
        hide: false,
        options: {
          add: onAdd,
          progressall: onProgressAll,
          done: onDone,
          stop: onStop
        }
      },
      UploadPreview: {
        files: []
      }
    }
  },
  render: function() {
    return (
      <div className="scroller-inner">
        <UploadPreview files={this.state.UploadPreview.files} />
        <FileUploadForm hide={this.state.FileUploadForm.hide} options={this.state.FileUploadForm.options}/>
        <NavLayer ref="navLayer"/>
      </div>
    );
  }
});
module.exports = Hompage;