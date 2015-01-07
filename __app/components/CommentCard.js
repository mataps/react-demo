/** @jsx React.DOM */

var React = require('react/addons');

var CommentCard = React.createClass({
  componentDidMount: function() {
    var $notes = $(this.refs.notes.getDOMNode());
    var $wrapper = $('#main-wrapper');
    $notes.draggable({
      containment: '.scroller',
      cancel: '#ngrip, .comments',
      stack: '.notes',
      snap: '.tools',
      snapMode: 'innerTop'
    })
    .resizable({
      containment: '.scroller',
      alsoResize: $notes.find('.contents'),
      minHeight: 290,
      handles: {
        'n': $notes.find('#ngrip')
      }
    })
    .css('position', 'absolute').position({
      of: $wrapper
    });

    $notes.find('.comments').wysiwyg({
      context: $notes
    });
  },
  render: function() {
    return (
      <div className="notes" ref="notes">
        <div className="resize-control">
          <a href="#" id="ngrip" className="ion-drag ui-resizable-handle ui-resizable-n"></a>
        </div>
        <div className="header">
          <div className="card-details">
            <span className="creation-date">{this.props.data.date_created}</span>
            <span className="commentor-email">{this.props.data.approver_email}</span>
          </div>
          <div className="btn-group pull-right">
            <a className="btn btn-default delete-btn"><i className="fa fa-trash fa-2x"></i></a>
          </div>
        </div>
        <div className="tools" data-role="editor-toolbar">
          <div className="btn-group">
            <a className="btn btn-default" data-edit="bold" title="Bold (Ctrl/Cmd+B)">
              <i className="fa fa-bold"></i>
            </a>
            <a className="btn btn-default" data-edit="italic" title="Italic (Ctrl/Cmd+I)">
              <i className="fa fa-italic"></i>
            </a>
            <a className="btn btn-default" data-edit="underline" title="Underline (Ctrl/Cmd+U)">
              <i className="fa fa-underline"></i>
            </a>
            <a className="btn btn-default" data-edit="insertunorderedlist" title="Bullet list">
              <i className="fa fa-list-ul"></i>
            </a>
          </div>
          <div className="btn-group pull-right">
            <a className="btn btn-default clear-btn">CLEAR CARD</a>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="contents">
          <div className="comments">{this.props.data.comment}</div>
        </div>
        <div className="footer text-right" data-role="editor-toolbar">
          <div className="btn-group">
            <a className="btn" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i className="fa fa-image"></i></a>
            <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />
            </div>
          </div>
        </div>
    );
  }
});

module.exports = CommentCard;