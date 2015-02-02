/** @jsx React.DOM */
var React = require('react/addons');

var NavBody = React.createClass({

	render: function() {
		return (
			<div className="content">
        <p className="large">24 hours</p>
        <p className="large">auto-deletion</p>
        <div className="timer now">
          <p className="small bold">Now</p>
          <p className="medium">1:20 AM</p>
          <p className="smaller bold">12/19/15</p>
        </div>
        <div className="timer later">
          <p className="small bold">Tomorrow</p>
          <p className="medium">1:20 PM</p>
          <p className="smaller bold">12/20/15</p>
        </div>
      </div>
		);
	}

});

module.exports = NavBody;