/** @jsx React.DOM */

var AnimatableContainer = require('../react-touch/primitives/AnimatableContainer');
var EasingFunctions = require('../math/EasingFunctions');
var React = require('react/addons');

require('./ImageCardContainer.css');

var ImageCardContainer = React.createClass({
  render: function() {

  	var imgStyle = {left: this.props.left};
    var card = <img src={this.props.url} alt=""  style={imgStyle} />;

    var pct = (this.props.left - (this.props.index * this.props.width)) / this.props.width;
    var x = this.props.index * this.props.width - this.props.left;
    var z = Math.abs(pct * 200) * -1;
    var yAxis = this.props.left > this.props.index * this.props.width ? 1 : -1;
    var deg = Math.abs(pct * 69);

    return (
      <AnimatableContainer
        className="ImageCardContainer"
        opacity={EasingFunctions.easeOutCubic(1 - Math.abs(pct))}
        rotate={{y: yAxis, deg: deg}}
        translate={{x: x, z: z}}>
        {card}
      </AnimatableContainer>
    );
  }
});

module.exports = ImageCardContainer;