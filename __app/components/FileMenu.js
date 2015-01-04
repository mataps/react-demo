/** @jsx React.DOM */

var React = require('react/addons');
var FileMenuItem = require('./FileMenuItem');

var FileMenu = React.createClass({
  componentDidMount: function() {
    var self = this;
    $(document).on('fileUploaded', function(e, file) {
      self.setState({ files: self.state.files.concat([file]) });
    });
    $(document).on('uploadFinished', function() {
      var lastFile = self.state.files[self.state.files.length - 1];
      self.setActiveItem(lastFile);
    });
    var toogleMenu = document.getElementById('toggle-menu');
    var mpMenu = document.getElementById('mp-menu');

    $(toogleMenu).addClass('in');
    new mlPushMenu(mpMenu, toogleMenu);
  },
  getInitialState: function() {
    return {
      files: [],
      activeItem: {}
    };
  },
  setActiveItem: function(file) {
    this.setState({activeItem: file});
    $(document).trigger('activeItemChanged', file);
  },
  renameActiveItem: function(e) {
    e.preventDefault();
    var activeItem = $(this.refs.filesList.getDOMNode()).find('li > a.active');
    if (activeItem.length)
      activeItem.editable('toggle');
  },
  render: function() {
    var fileNodes = this.state.files.map(function(file) {
      return (
        <FileMenuItem
          file={file}
          active={file.id == this.state.activeItem.id}
          onSelect={this.setActiveItem}
        />
      );
    }.bind(this));

    return (
      <div className="mp-level">
        <h2>Files</h2>
        <ul ref="filesList">
        {fileNodes}
        </ul>
        <ul className="menu-options">
          <li><button href="#" onClick={this.renameActiveItem} className="btn btn-info">RENAME</button></li>
          <li><button href="#" className="btn btn-primary">LOG</button></li>
          <li><button href="#" className="btn btn-danger">DELETE BATCH</button></li>
        </ul>
      </div>
    );
  }
});
module.exports = FileMenu;