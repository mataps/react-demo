/** @jsx React.DOM */

var React = require('react/addons');

var ConfirmButtons = React.createClass({
  render: function() {
    return(
      <div>
        <button type="button" className="btn btn-default btn-circle"><i className="ion-ios7-close-empty"></i></button>
        <div className="hour-caption">
          <div>12</div>
          <span className="smallest">HOURS</span>
        </div>
        <button type="button" className="btn btn-default btn-circle"><i className="ion-ios7-checkmark-empty"></i></button>
      </div>
    );
  }
});
module.exports = ConfirmButtons;