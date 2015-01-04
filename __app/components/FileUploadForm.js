/** @jsx React.DOM */

var React = require('react/addons');

var FileUploadForm = React.createClass({
  componentDidMount: function() {
    var $form = $(this.refs.fileupload.getDOMNode());
    var $inputContainer = $(this.refs.inputContainer.getDOMNode());
    var options = {
      url: 'upload',
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
      maxFileSize: 10000000, // 10 MB
      minFileSize: 1,
      filesContainer: '.files',
      autoUpload: true,
      sequentialUploads: true,
      add: this.props.onAdd,
      previewMaxWidth: '100%',
      previewMaxHeight: '100%'
    };
    options = $.extend({}, options, this.props.options);
    //append the input dynamically so React never throws error when the plugin replaces it
    $inputContainer.append('<input type="file" name="files[]" class="hide" multiple/>');
    $form.fileupload(options);
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'hide': this.props.hide
    });

    return (
      <form id="fileupload" ref="fileupload" method="POST" encType="multipart/form-data" className={classes}>
        <label className="btn btn-success fileinput-button" id="dropzone">
          <div className="inline-block" ref="inputContainer">
            <i className="glyphicon glyphicon-plus"></i>
            <p>You’re currently using FreeView.</p>
            <p>You can add upto five assets today.</p>
          </div>
        </label>
        <span className="fileupload-process"></span>
      </form>
    );
  }
});
module.exports = FileUploadForm;