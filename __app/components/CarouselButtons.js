/** @jsx React.DOM */
var React = require('react/addons');

require('./CarouselButtons.css');

var CarouselButtons = React.createClass({

	getDefaultProps: function() {
		return {
			slides: [{}, {}, {}]
		};
	},

	render: function() {
		console.log(this);
		var buttons = this.props.slides.map(function(slide, i) {
			return (
				<li className="active" />
      );
		});

		return (
			<ol className="carousel-indicators CarouselButtons">
		    <li className="active" />
		    <li className="" />
		    <li className="" />
		    <li className="" />
		    <li className="" />
		  </ol>
		);
	}

});

module.exports = CarouselButtons;