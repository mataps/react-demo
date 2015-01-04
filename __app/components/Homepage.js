/** @jsx React.DOM */

var React = require('react/addons');

var Hompage = React.createClass({
  render: function() {
    return (
      <div className="banner">
        <h1 className="animated fadeInUp">The easiest and fastest,<br/>1-to-1 way to approve great work.<br/>No sign-up required.</h1>
        <div className="text-center">
          <a href="#/marker" className="btn btn-inverse marker-btn">MARKER</a>
          <a href="#/approver" className="btn btn-inverse">APPROVER</a>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
});
module.exports = Hompage;