/** @jsx React.DOM */

var React = require('react/addons');

var ConfirmButtons = React.createClass({
  render: function() {
    var expire = parseInt(this.props.expire, 10);
    var color = this.props.color || '';

    return(
      <div className="confirm-buttons">
        <button onClick={this.props.onCancel} type="button" className="btn btn-default btn-circle"><i className="ion-ios7-close-empty"></i></button>
        <div className="hour-caption">
          <div>{expire}</div>
          <span className="smallest">HOURS</span>
        </div>
        <button onClick={this.props.onAccept} type="button" className="btn btn-default btn-circle"><i className="ion-ios7-checkmark-empty"></i></button>
      </div>
    );
  }
});
module.exports = ConfirmButtons;