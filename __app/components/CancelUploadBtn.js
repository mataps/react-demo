/** @jsx React.DOM */
var React = require('react/addons');
var NoBtn = require('./NoBtn');

var CancelUploadBtn = React.createClass({

	render: function() {
		return (
			<div className="confirm-buttons">
				<NoBtn {...this.props} />
			</div>
		);
	}

});

module.exports = CancelUploadBtn;