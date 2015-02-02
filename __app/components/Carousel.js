/** @jsx React.DOM */
var React = require('react/addons');
var Slider = require('react-carousel');

var Carousel = React.createClass({
	
	render: function() {
    return (
      <Slider {...this.props}>
      	{this.props.children}
      </Slider>
    );
	}

});

module.exports = Carousel;