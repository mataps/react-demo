/** @jsx React.DOM */
var React = require('react/addons');

var NoBtn = React.createClass({

	render: function() {
		return (
			<button {...this.props} type="button" className="btn btn-default btn-circle">
        <i className="ion-ios7-close-empty"></i>
      </button>
		);
	}

});

module.exports = NoBtn;