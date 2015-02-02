/** @jsx React.DOM */

var React = require('react/addons');
var FileUploadForm = require('../components/FileUploadForm');
var UploadPreview = require('../components/UploadPreview');
var NavOverlay = require('../components/NavOverlay');
var NavHeader = require('../components/NavHeader');
var NavBody = require('../components/NavBody');
var NavFooter = require('../components/NavFooter');
var DateBtnGroup = require('../components/DateBtnGroup');
var NavExpiryContent = require('../components/NavExpiryContent');
var ConfirmButtons = require('../components/ConfirmButtons');
var Actions = require('../_flux/Actions');

var Home = React.createClass({
  
  render: function() {
    var content, buttons, color = this.props.color;
  	
    content = <NavExpiryContent expiry={this.props.expire} onChange={this.handleChange} />;
    buttons = <ConfirmButtons expire={this.props.expire} onAccept={this.handleAccept} onCancel={this.handleCancel} />;

    return (
    	<div className={"scroller-inner " + color}>
        <NavOverlay color={color}>
          <NavHeader />
          {content}
          <NavFooter>
            {buttons}
          </NavFooter>
        </NavOverlay>
      </div>
    );
  },

	handleCancel: function() {
    Actions.setActiveView('Home');
  },

  handleAccept: function() {
    Actions.setActiveView('AssetReview');
  },

  handleChange: function(event) {
    Actions.setExpire(event.target.value);
  }
});
module.exports = Home;