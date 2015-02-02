/** @jsx React.DOM */

var React = require('react/addons');
var cx = React.addons.classSet;

var FileUploadForm = React.createClass({
  componentDidMount: function() {
    var $form = $(this.refs.fileupload.getDOMNode());
    var $inputContainer = $(this.refs.inputContainer.getDOMNode());
    var options = {
      add: this.onAdd,
      done: this.onDone,
      progressall: this.onProgressAll,
      stop: this.onStop,
      url: 'api/v1/upload',
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
      maxFileSize: 10000000, // 10 MB
      minFileSize: 1,
      filesContainer: '.files',
      autoUpload: true,
      sequentialUploads: true,
      previewMaxWidth: '100%',
      previewMaxHeight: '100%'
    };
    //append the input dynamically so React never throws error when the plugin replaces it
    $inputContainer.append('<input type="file" name="files[]" class="hide" multiple/>');
    $form.fileupload(options);
  },
  getInitialState: function() {
    return {
      xhrs: [],
      fileData: [] //fileupload plugin data - store the ajax result
    };
  },
  //triggers per file is added
  onAdd: function(e, data) {
    var self = this;
    var $form = $(this.refs.fileupload.getDOMNode()); 
    data.process(function() {
      return $form.fileupload('process',data); 
    }).done(function(){
      self.addXHR(data.submit());
      self.addFileData(data);
      if(self.props.onProcessDone)
        self.props.onProcessDone.call(null, data.files);
    });
  },
  //triggers when file upload success
  onDone: function() {
    if(this.props.onDone)
      this.props.onDone.call();
  },
  //overall progress
  onProgressAll: function(e, data) {
    var progress = Math.floor(data.loaded / data.total * 100);
    if(this.props.onProgressAll)
      this.props.onProgressAll.call(null, progress);
  },
  //when xhr stops
  onStop: function() {
    var results = this.state.fileData.map(function(data) {
      return data._response.result[0];
    });
    if(this.props.onStop)
      this.props.onStop.call(null, results);
  },
  render: function() {
    return (
      <form className={this.props.className} id="fileupload" ref="fileupload" method="POST" encType="multipart/form-data">
        <label className="btn btn-success fileinput-button" id="dropzone">
          <div className="v-center" ref="inputContainer">
            <i className="glyphicon glyphicon-plus"></i>
            <p>You’re currently using FreeView.</p>
            <p>You can add upto five assets today.</p>
          </div>
        </label>
        <div className="banner">Easy 1-to-1 approval.</div>
        <div className="banner">No signup required.</div>
      </form>
    );
  },
  addXHR: function(xhr) {
    var xhrs = this.state.xhrs.concat([xhr]);
    this.setState({xhrs: xhrs});
  },
  addFileData: function(data) {
    var fileData = this.state.fileData.concat([data]);
    this.setState({fileData: fileData});
  },
  abort: function() {
    this.state.xhrs.map(function(xhr) {
      xhr.abort();
    });
    this.setState({xhrs: []});
  }
});
module.exports = FileUploadForm;