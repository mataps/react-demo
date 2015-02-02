/** @jsx React.DOM */
var React = require('react/addons');

var NavHeader = React.createClass({
  getDefaultProps: function() {
    return {
      captionCenter: 'Freeview',
      captionLeft: '+3'
    };
  },
	render: function() {
		return (
			<header>
        <div className="logo">
          <a href="/">
            <img src="/assets/img/logo.png" alt="Approview logo"/>
          </a>
        </div>
        <div className="caption-center">{this.props.captionCenter}</div>
        <div className="caption-left">{this.props.captionLeft}</div>
      </header>
		);
	}

});

module.exports = NavHeader;