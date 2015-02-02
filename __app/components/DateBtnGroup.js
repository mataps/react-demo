/** @jsx React.DOM */
var React = require('react/addons');

var DateBtnGroup = React.createClass({
	componentDidMount: function() {
		var self = this;
		var $el = $(this.getDOMNode());
		$el.find('input[type=radio]').on('change', function(e) {
			self.props.onChange(e);
		});
	},

	render: function() {
		return (
			<div className="btn-group date-buttons" data-toggle="buttons">
				<label className="btn btn-default btn-circle">
          <input type="radio" value="1 hour"/>
          1
	      </label>
	      <label className="btn btn-default btn-circle">
          <input type="radio" value="7 hours"/>
          7
	      </label> 
	      <label className="btn btn-default btn-circle">
          <input type="radio" value="12 hours"/>
          12
	      </label> 
	      <label className="btn btn-default btn-circle active">
          <input type="radio" value="24 hours"/>
          24
	      </label> 
      </div>
		);
	}

});

module.exports = DateBtnGroup;