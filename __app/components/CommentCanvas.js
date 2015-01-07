/** @jsx React.DOM */

var React = require('react/addons');
var CommentCard = require('./CommentCard');

var CommentCanvas = React.createClass({
  componentDidMount: function() {
    if (this.props.triggerEl) {
      var $trigger = $(this.props.triggerEl);
      $trigger.on('click', function(e) {
        e.preventDefault();
        this.newCard();
      }.bind(this))
    }

    var $preview = $('.upload-preview');
    $(this.refs.canvas.getDOMNode()).height($preview.height());
  },
  getInitialState: function() {
    return {
      commentCards: []
    }
  },
  render: function() {
    var commentCards = this.state.commentCards.map(function(Card) {
      return (
        <CommentCard data={Card}/>
      );
    });
    return (
      <div className="comment-canvas" ref="canvas">
      {commentCards}
      </div>
    );
  },
  newCard: function() {
    var card = {
      x: 0,
      y: 0,
      comment: 'Approver’s comments',
      approver_email: 'approvers@gmail.com',
      date_created: '12.13.14'
    };
    var commentCards = this.state.commentCards.concat([card]);
    this.setState({commentCards: commentCards});
  }
});

module.exports = CommentCanvas;