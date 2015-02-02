/** @jsx React.DOM */

var React = require('react/addons');
var FileUploadForm = require('../components/FileUploadForm');
var UploadPreview = require('../components/UploadPreview');
var NavOverlay = require('../components/NavOverlay');
var NavHeader = require('../components/NavHeader');
var NavProgress = require('../components/NavProgress');
var NavBody = require('../components/NavBody');
var NavFooter = require('../components/NavFooter');
var CancelUploadBtn = require('../components/CancelUploadBtn');
var DateBtnGroup = require('../components/DateBtnGroup');
var NavExpiryContent = require('../components/NavExpiryContent');
var ConfirmButtons = require('../components/ConfirmButtons');
var Actions = require('../_flux/Actions');

var Home = React.createClass({
  getInitialState: function() {
    return {
      progress: 0,
      localFiles: []
    };
  },
  onProcessDone: function(files) {
    var localFiles = this.state.localFiles.concat(files);
    this.setState({localFiles: localFiles});
  },
  onProgressAll: function(progress) {
    this.setState({progress: progress});
  },
  onDone: function(e, data) {
    // $(document).trigger('fileUploaded', data.result[0]);
  },
  onStop: function(results) {
    Actions.setFiles(results)
  },
  hasFiles: function() {
    return !!this.state.localFiles.length;
  },
  handleCancel: function() {
    this.refs.fileUploadForm.abort();
    var state = this.getInitialState();
    this.setState(state);
  },
  render: function() {
    var content, buttons, color;
    if (this.hasFiles()){
      color = 'blue';
      content = <NavProgress progress={this.state.progress} />;
      buttons = <CancelUploadBtn onClick={this.handleCancel} />;
    }

    return (
    	<div className={"scroller-inner " + color}>
        <UploadPreview files={this.state.localFiles} />
        <FileUploadForm
          ref="fileUploadForm"
          className={this.hasFiles() ? 'hide' : null}
          onProcessDone={this.onProcessDone}
          onProgressAll={this.onProgressAll}
          onStop={this.onStop}
        />
        <NavOverlay color={color}>
          <NavHeader />
          {content}
          <NavFooter>
            {buttons}
          </NavFooter>
        </NavOverlay>
      </div>
    );
  }
});
module.exports = Home;