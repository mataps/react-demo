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

var Homepage = React.createClass({
  getInitialState: function() {
    var self = this;
    return {
      activeState: 'Home',
      showProgress: false,
      progress: 0,
      callbacks: {
        onAdd: function(e, data) {
          self.setState({showProgress: true});
          data.process(function () {
            return $('#fileupload').fileupload('process', data);
          }).always(function () {
            self.refs.uploadPreview.addFiles(data.files);
          }).done(function () {
            // this.refs.navLayer.transitionTo('uploading');
            data.submit();
          });
        },
        onProgressAll: function(e, data) {
          var progress = Math.floor(data.loaded / data.total * 100);
          self.setState({progress: progress});
        },
        onDone: function(e, data) {
          // $(document).trigger('fileUploaded', data.result[0]);
        },
        onStop: function() {
          // $(document).trigger('uploadFinished');
          self.setActiveState('ChooseExpiration');
        },
      }
    }
  },
  setActiveState: function(state) {
    this.setState({activeState: state});
  },
  render: function() {
    var state = this['render'+this.state.activeState].apply();
    var params = ["div", {className: "scroller-inner"}].concat(state);
    return React.createElement.apply(null, params);
  },
  renderHome: function() {
    var callbacks = this.state.callbacks;
    var content, buttons, color;
    if (this.state.showProgress){
      color = 'blue';
      content = <NavProgress progress={this.state.progress} />;
      buttons = <CancelUploadBtn />;
    }
  
    return ([
        <UploadPreview ref="uploadPreview"/>,
        <FileUploadForm
          className={this.state.showProgress ? 'hide' : null}
          onAdd={callbacks.onAdd}
          onProgressAll={callbacks.onProgressAll}
          onStop={callbacks.onStop}
        />,
        <NavOverlay color={color}>
          <NavHeader />
          {content}
          <NavFooter>
            {buttons}
          </NavFooter>
        </NavOverlay>
    ]);
  },
  renderChooseExpiration: function() {
    var color = 'red';
    var buttons = <ConfirmButtons />;
    var content = <NavExpiryContent />;
    return ([
        <NavOverlay color={color}>
          <NavHeader />
          {content}
          <NavFooter>
            {buttons}
          </NavFooter>
        </NavOverlay>
    ]);
  }
});
module.exports = Homepage;