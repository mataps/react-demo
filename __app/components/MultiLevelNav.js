/** @jsx React.DOM */

var React = require('react/addons');

var MultiLevelNav = React.createClass({
  render: function() {
    return (
      <ul className="menu-options">
        <li><button href="#" onClick={this.renameActiveItem} className="btn btn-info">RENAME</button></li>
        <li><button href="#" className="btn btn-primary">LOG</button></li>
        <li><button href="#" className="btn btn-danger">DELETE BATCH</button></li>
      </ul>
    );
  }
});
module.exports = MultiLevelNav;