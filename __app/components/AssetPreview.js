/** @jsx React.DOM */

var React = require('react/addons');
var Hammer = require('hammerjs');
var AnimatableContainer = require('../react-touch/primitives/AnimatableContainer');
var ImageCardContainer = require('./ImageCardContainer');

require('./AssetPreview.css');

var AssetPreview = React.createClass({

  componentWillMount: function() {
    this.scroller = new Scroller(this.handleScroll, {
      snapping: true
    });
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    var $el = $(el);
    this.hammer = new Hammer(el);
    this.hammer.on('panstart', this.handleStart);
    this.hammer.on('panleft panright', this.handleMove);
    this.hammer.on('panend', this.handleEnd);
    $(document).on('keydown', this.handleKeyDown);

    var width = $el.width();
    var height = 667;
    this.width = width;
    this.height = height;

    this.scroller.setDimensions(
      width,
      height,
      width * this.props.files.length,
      height
    );
    this.scroller.setSnapSize(width, height);
  },

  componentWillUnmount: function() {
    this.hammer.stop();
    this.hammer.destroy();
    this.hammer = null;
  },
  
  getDefaultProps: function() {
    return {
      files: []
    };
  },

  getInitialState: function() {
    return {
      left: 0
    };
  },

  next: function() {
    this.scroller.options.animationDuration = 700;
    this.scroller.scrollBy(this.width / 2, 0, true);
    this.scroller.options.animationDuration = 250;
  },

  previous: function() {
    this.scroller.options.animationDuration = 700;
    this.scroller.scrollBy(-this.width / 2, 0, true);
    this.scroller.options.animationDuration = 250;
  },

  render: function() {

    var assets = this.props.files.map(function (file, i) {
      if (this.state.left < (i - 1) * this.width || this.state.left > (i + 1) * this.width) {
        return null;
      }

      return (
        <ImageCardContainer
          left={this.state.left}
          key={i}
          index={i}
          url={file.url}
          width={this.width}
          height={this.height}
        />
      );
    }.bind(this));

    return !assets.length ? null : (
      <div className="asset-preview slide">
        {assets}
      </div>
    );
  },

  handleScroll: function(left, top, zoom) {
    this.setState({left: left});
  },

  handleStart: function(e) {
    this.scroller.doTouchStart(e.changedPointers, e.srcEvent.timeStamp);
  },

  handleMove: function(e) {
    if (e.changedPointers) {
      this.scroller.doTouchMove(e.changedPointers, e.srcEvent.timeStamp, e.scale);
    }
    e.preventDefault();
  },

  handleEnd: function(e) {
    this.scroller.doTouchEnd(e.srcEvent.timeStamp);
  },

  handleKeyDown: function(e) {
    if (e.keyCode === 37) {
      this.previous();
    } else if (e.keyCode === 39) {
      this.next();
    }
  }
});
module.exports = AssetPreview;