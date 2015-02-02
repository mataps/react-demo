/** @jsx React.DOM */
var React = require('react/addons');

var NavFooter = React.createClass({

	render: function() {
		return (
			<footer>
				{this.props.children}
	      <ul>
	        <li><a href="#">GUIDE</a></li>
	        <li><a href="#">TERMS</a></li>
	        <li><a href="#">UPGRADE</a></li>
	        <li><a href="#">CONTACT</a></li>
	        <li><a href="#">MAKER</a></li>
	      </ul>
	    </footer>
		);
	}

});

module.exports = NavFooter;