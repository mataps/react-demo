/** @jsx React.DOM */

// CheckboxWithLabel.js

var React = require('react/addons');
var BootstrapModalMixin = require('./BootstrapModalMixin');

var DeleteAssetModal = React.createClass({
  mixins: [BootstrapModalMixin]

  , render: function() {
    var buttons = this.props.buttons.map(function(button) {
      return <button type="button" className={'btn btn-lg btn-' + button.type} onClick={button.handler}>
        {button.text}
      </button>
    })

    return <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            {this.props.children}
            <div className="buttons">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})

module.exports = DeleteAssetModal;